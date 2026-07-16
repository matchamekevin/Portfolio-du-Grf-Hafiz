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

export const autoTranslationController = {
  syncMissing: async (req, res, next) => {
    try {
      const { sourceLanguage = "fr", targetLanguages = ["en", "de", "es", "pt"] } = req.body;
      const prisma = (await import("../config/prisma.js")).default;
      const { translate } = await import("@vitalets/google-translate-api");

      const sourceTranslations = await prisma.translation.findMany({
        where: { language: sourceLanguage },
      });
      const results = [];
      for (const target of targetLanguages) {
        const existing = await prisma.translation.findMany({
          where: { language: target },
        });
        const existingMap = new Map(existing.map((t) => [t.key, t]));
        for (const source of sourceTranslations) {
          const current = existingMap.get(source.key);
          if (!current || current.value === source.value) {
            let translatedValue = source.value;
            if (target !== sourceLanguage) {
              try {
                const result = await translate(source.value, { from: sourceLanguage, to: target });
                translatedValue = result.text;
              } catch {
                translatedValue = source.value;
              }
            }
            if (current) {
              await prisma.translation.update({
                where: { id: current.id },
                data: { value: translatedValue },
              });
            } else {
              await prisma.translation.create({
                data: { key: source.key, language: target, value: translatedValue },
              });
            }
            results.push({ key: source.key, language: target, value: translatedValue });
          }
        }
      }
      realtimeController.broadcast({ type: "translations-updated" });
      res.json({ status: "ok", data: results });
    } catch (e) {
      next(e);
    }
  },
};

export function broadcastUpdate(type = "updated") {
  realtimeController.broadcast({ type, timestamp: Date.now() });
}
