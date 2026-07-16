import prisma from "../config/prisma.js";

export async function extractDbContent() {
  const [hero, cta, contact, footer, trajectoire] = await Promise.all([
    prisma.hero.findFirst(),
    prisma.cta.findFirst(),
    prisma.contactInfo.findFirst(),
    prisma.footer.findFirst(),
    prisma.trajectoire.findFirst(),
  ]);

  const entries = [];

  if (hero) {
    if (hero.status) entries.push({ key: "db.hero.status", value: hero.status });
    if (hero.badge) entries.push({ key: "db.hero.badge", value: hero.badge });
    if (hero.title) entries.push({ key: "db.hero.title", value: hero.title });
    if (hero.subtitle) entries.push({ key: "db.hero.subtitle", value: hero.subtitle });
    if (Array.isArray(hero.tags)) {
      hero.tags.forEach((tag, i) => {
        if (tag.l) entries.push({ key: `db.hero.tag${i + 1}.l`, value: tag.l });
      });
    }
  }

  if (cta) {
    if (cta.title) entries.push({ key: "db.cta.title", value: cta.title });
    if (cta.titleAccent) entries.push({ key: "db.cta.titleAccent", value: cta.titleAccent });
    if (cta.description) entries.push({ key: "db.cta.description", value: cta.description });
    if (cta.engageLabel) entries.push({ key: "db.cta.engageLabel", value: cta.engageLabel });
    if (cta.cvLabel) entries.push({ key: "db.cta.cvLabel", value: cta.cvLabel });
  }

  if (contact) {
    if (contact.availability) entries.push({ key: "db.contact.availability", value: contact.availability });
    if (contact.location) entries.push({ key: "db.contact.location", value: contact.location });
  }

  if (footer) {
    if (footer.name) entries.push({ key: "db.footer.name", value: footer.name });
    if (footer.copyright) entries.push({ key: "db.footer.copyright", value: footer.copyright });
  }

  if (trajectoire) {
    if (trajectoire.danteTitle) entries.push({ key: "db.trajectoire.danteTitle", value: trajectoire.danteTitle });
    if (trajectoire.danteSubtitle) entries.push({ key: "db.trajectoire.danteSubtitle", value: trajectoire.danteSubtitle });
  }

  return entries;
}

/**
 * Sync DB content into Translation table for all languages.
 * - FR: always update to match current DB value (source='db')
 * - Other languages: only create if missing (never overwrite manual edits)
 * Uses a single raw SQL batch for speed on remote DB.
 */
export async function syncDbTranslations() {
  const dbEntries = await extractDbContent();
  const languages = ["fr", "en", "de", "es", "pt"];

  const allRows = [];
  for (const entry of dbEntries) {
    for (const lang of languages) {
      allRows.push({ key: entry.key, language: lang, value: entry.value });
    }
  }

  if (allRows.length === 0) return { total: 0 };

  // 1. Get existing db.* translations in one query
  const existing = await prisma.translation.findMany({
    where: { key: { startsWith: "db." } },
    select: { key: true, language: true },
  });
  const existingSet = new Set(existing.map((e) => `${e.key}::${e.language}`));

  // 2. Partition: FR rows vs non-FR rows
  const frRows = allRows.filter((r) => r.language === "fr");
  const nonFrRows = allRows.filter((r) => r.language !== "fr");

  // 3. Upsert FR rows (always update to match DB)
  for (const row of frRows) {
    await prisma.translation.upsert({
      where: { key_language: { key: row.key, language: row.language } },
      create: { key: row.key, language: row.language, value: row.value, source: "db" },
      update: { value: row.value, source: "db", updatedAt: new Date() },
    });
  }

  // 4. Insert only missing non-FR rows
  const toCreate = nonFrRows.filter((r) => !existingSet.has(`${r.key}::${r.language}`));
  if (toCreate.length > 0) {
    await prisma.translation.createMany({
      data: toCreate.map((r) => ({ key: r.key, language: r.language, value: r.value, source: "db" })),
      skipDuplicates: true,
    });
  }

  return { total: allRows.length, created: toCreate.length };
}
