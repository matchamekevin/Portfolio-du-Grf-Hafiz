const clients = new Map();
let clientId = 0;
let pingInterval = null;

export const realtimeController = {
  handleConnection(ws, isAdmin = false) {
    const id = ++clientId;
    clients.set(id, { ws, isAdmin, alive: true });

    ws.send(JSON.stringify({ type: "connected", clientId: id }));

    ws.on("pong", () => {
      const client = clients.get(id);
      if (client) client.alive = true;
    });

    ws.on("error", (err) => {
      console.error(`[WS] Client ${id} error:`, err.message);
    });

    if (!pingInterval) {
      pingInterval = setInterval(() => {
        for (const [id, client] of clients.entries()) {
          if (!client.alive) {
            clients.delete(id);
            continue;
          }
          client.alive = false;
          try { client.ws.ping(); } catch {}
        }
      }, 30000);
    }
  },

  handleDisconnection(ws) {
    for (const [id, client] of clients.entries()) {
      if (client.ws === ws) {
        clients.delete(id);
        break;
      }
    }
    if (clients.size === 0 && pingInterval) {
      clearInterval(pingInterval);
      pingInterval = null;
    }
  },

  broadcast(payload) {
    const message = JSON.stringify(payload);
    for (const [id, client] of clients.entries()) {
      try {
        if (client.ws.readyState === 1) {
          client.ws.send(message);
        }
      } catch (err) {
        console.error(`[WS] Failed to send to client ${id}:`, err.message);
        clients.delete(id);
      }
    }
  },
};

async function withTimeout(promise, ms) {
  let timer;
  const timeout = new Promise((_, reject) =>
    (timer = setTimeout(() => reject(new Error("timeout")), ms))
  );
  try {
    return await Promise.race([promise, timeout]);
  } finally {
    clearTimeout(timer);
  }
}

const DEEPL_KEY = process.env.DEEPL_API_KEY || "";

async function translateDeepL(text, from, to) {
  const input = text || "";
  const hasTags = /<[^>]+>/.test(input);
  if (!input.trim()) return text;
  const langMap = { fr: "FR", en: "EN-GB", de: "DE", es: "ES", pt: "PT" };
  const targetLang = langMap[to] || to.toUpperCase();
  const sourceLang = langMap[from] || from.toUpperCase();
  const url = "https://api-free.deepl.com/v2/translate";
  const body = { text: [input], source_lang: sourceLang, target_lang: targetLang };
  if (hasTags) body.tag_handling = "html";
  const res = await withTimeout(
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `DeepL-Auth-Key ${DEEPL_KEY}` },
      body: JSON.stringify(body),
    }),
    15000
  );
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.message || `DeepL HTTP ${res.status}`);
  }
  const data = await res.json();
  return data.translations?.[0]?.text || text;
}

async function translateWithRetry(text, from, to, retries = 3) {
  let lastErr;
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const translated = await translateDeepL(text, from, to);
      if (translated) return translated;
      throw new Error("empty translation");
    } catch (err) {
      lastErr = err;
      const delay = Math.min(400 * Math.pow(2, attempt), 4000);
      await new Promise((r) => setTimeout(r, delay));
    }
  }
  return null;
}

async function runPool(tasks, concurrency) {
  const results = [];
  let index = 0;
  async function worker() {
    while (index < tasks.length) {
      const current = index++;
      results[current] = await tasks[current]();
    }
  }
  const workers = Array.from({ length: Math.min(concurrency, tasks.length) }, worker);
  await Promise.all(workers);
  return results;
}

export { translateDeepL, translateWithRetry };

export const autoTranslationController = {
  syncMissing: async (req, res, next) => {
    try {
      const {
        sourceLanguage = "fr",
        targetLanguages = ["en", "de", "es", "pt"],
        concurrency = 4,
        batchSize = 15,
      } = req.body;

      const runSync = async () => {
        const prisma = (await import("../config/prisma.js")).default;
        const sourceTranslations = await prisma.translation.findMany({
          where: { language: sourceLanguage },
        });
        const sourceMap = new Map(sourceTranslations.map((t) => [t.key, t]));
        const allKeys = [...sourceMap.keys()];

        const results = [];
        let failed = [];
        let total = 0;
        let done = 0;
        for (const target of targetLanguages) {
          if (target === sourceLanguage) continue;
          const existing = await prisma.translation.findMany({ where: { language: target } });
          const existingMap = new Map(existing.map((t) => [t.key, t]));
          for (const key of allKeys) {
            const source = sourceMap.get(key);
            const current = existingMap.get(key);
            if (!current || !current.value || current.value === source.value) total++;
          }
        }

        const broadcastProgress = () => {
          realtimeController.broadcast({
            type: "translation-progress",
            translated: done,
            total,
            failed: failed.length,
          });
        };

        const translateKey = async ({ key, source, current }, target) => {
          const translatedValue = await translateWithRetry(source.value, sourceLanguage, target);
          if (!translatedValue || translatedValue === source.value) {
            return false;
          }
          if (current) {
            await prisma.translation.update({
              where: { id: current.id },
              data: { value: translatedValue, updatedAt: new Date() },
            });
          } else {
            await prisma.translation.create({
              data: { key, language: target, value: translatedValue },
            });
          }
          results.push({ key, language: target, value: translatedValue, status: "translated" });
          return true;
        };

        for (const target of targetLanguages) {
          if (target === sourceLanguage) continue;
          const existing = await prisma.translation.findMany({ where: { language: target } });
          const existingMap = new Map(existing.map((t) => [t.key, t]));

          const toTranslate = [];
          for (const key of allKeys) {
            const source = sourceMap.get(key);
            const current = existingMap.get(key);
            if (current && current.value && current.value !== source.value) {
              results.push({ key, language: target, value: current.value, status: "kept" });
              continue;
            }
            toTranslate.push({ key, source, current });
          }

          const batchFailed = [];
          for (let i = 0; i < toTranslate.length; i += batchSize) {
            const batch = toTranslate.slice(i, i + batchSize);
            const tasks = batch.map((item) => async () => {
              const ok = await translateKey(item, target);
              done++;
              if (!ok) batchFailed.push({ key: item.key, language: target });
              broadcastProgress();
            });
            await runPool(tasks, concurrency);
            if (i + batchSize < toTranslate.length) {
              await new Promise((r) => setTimeout(r, 800));
            }
          }

          for (let pass = 0; pass < 2 && batchFailed.length; pass++) {
            await new Promise((r) => setTimeout(r, 1500));
            const remaining = [];
            const tasks = batchFailed.map(({ key }) => async () => {
              const item = toTranslate.find((t) => t.key === key);
              const ok = await translateKey(item, target);
              done++;
              if (!ok) remaining.push({ key, language: target });
              broadcastProgress();
            });
            await runPool(tasks, Math.max(1, Math.floor(concurrency / 2)));
            batchFailed.length = 0;
            batchFailed.push(...remaining);
          }
          failed = failed.concat(batchFailed);
        }

        realtimeController.broadcast({ type: "translations-updated" });
        realtimeController.broadcast({
          type: "translation-progress",
          translated: done,
          total,
          failed: failed.length,
          complete: true,
        });
      };

      runSync().catch((err) => {
        console.error("[auto-sync] error:", err.message);
        realtimeController.broadcast({ type: "translation-error", message: err.message });
      });

      res.json({ status: "started", data: { message: "Synchronisation en cours" } });
    } catch (e) {
      next(e);
    }
  },
};

export async function broadcastUpdate(type = "updated") {
  try {
    const prisma = (await import("../config/prisma.js")).default;
    const [hero, contact, cta, footer, showreel, experiences, gallery, skills, trajectoire] = await Promise.all([
      prisma.hero.findFirst(),
      prisma.contactInfo.findFirst(),
      prisma.cta.findFirst(),
      prisma.footer.findFirst(),
      prisma.showreelProject.findMany({ where: { active: true }, orderBy: { order: "asc" } }),
      prisma.experience.findMany({ where: { active: true }, orderBy: { order: "asc" } }),
      prisma.galleryShot.findMany({ where: { active: true }, orderBy: { order: "asc" } }),
      prisma.skillSection.findMany({ where: { active: true }, orderBy: { order: "asc" } }),
      prisma.trajectoire.findFirst(),
    ]);
    realtimeController.broadcast({
      type,
      timestamp: Date.now(),
      data: {
        hero: hero || null,
        contact: contact || null,
        cta: cta || null,
        footer: footer || null,
        showreel,
        experiences,
        gallery,
        skills,
        trajectoire: trajectoire || null,
      },
    });
  } catch (err) {
    console.error("[broadcast] Failed to fetch data:", err.message);
    realtimeController.broadcast({ type, timestamp: Date.now() });
  }
}
