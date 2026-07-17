import prisma from "../config/prisma.js";
import { translateDeepL } from "../controllers/realtimeController.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const UI_SEED_FILE = path.resolve(__dirname, "../../../seed-ui-fr.json");

let uiStringsCache = null;
function getUiStrings() {
  if (uiStringsCache) return uiStringsCache;
  try {
    const raw = fs.readFileSync(UI_SEED_FILE, "utf-8");
    uiStringsCache = JSON.parse(raw);
  } catch {
    uiStringsCache = {};
  }
  return uiStringsCache;
}

export async function extractDbContent() {
  const [hero, cta, contact, footer, trajectoire, showreel, experiences, gallery, skills] = await Promise.all([
    prisma.hero.findFirst(),
    prisma.cta.findFirst(),
    prisma.contactInfo.findFirst(),
    prisma.footer.findFirst(),
    prisma.trajectoire.findFirst(),
    prisma.showreelProject.findMany({ where: { active: true }, orderBy: { order: "asc" } }),
    prisma.experience.findMany({ where: { active: true }, orderBy: { order: "asc" } }),
    prisma.galleryShot.findMany({ where: { active: true }, orderBy: { order: "asc" } }),
    prisma.skillSection.findMany({ orderBy: { order: "asc" } }),
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
        if (typeof tag.v === "string" && tag.v) {
          entries.push({ key: `db.hero.tag${i + 1}.v`, value: tag.v });
        } else if (Array.isArray(tag.v)) {
          tag.v.forEach((part, j) => {
            if (typeof part === "string" && part) {
              entries.push({ key: `db.hero.tag${i + 1}.v.${j}`, value: part });
            } else if (part && typeof part === "object" && part.text) {
              entries.push({ key: `db.hero.tag${i + 1}.v.${j}`, value: part.text });
            }
          });
        }
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
    if (Array.isArray(trajectoire.danteItems)) {
      trajectoire.danteItems.forEach((item, i) => {
        if (item) entries.push({ key: `db.trajectoire.danteItem${i + 1}`, value: String(item) });
      });
    }
    if (Array.isArray(trajectoire.languages)) {
      trajectoire.languages.forEach((lang, i) => {
        if (lang) entries.push({ key: `db.trajectoire.language${i + 1}`, value: String(lang) });
      });
    }
  }

  if (Array.isArray(showreel)) {
    showreel.forEach((p, i) => {
      if (p.title) entries.push({ key: `db.showreel.project${i + 1}.title`, value: p.title });
    });
  }

  if (Array.isArray(experiences)) {
    experiences.forEach((exp, i) => {
      if (exp.title) entries.push({ key: `db.experience.project${i + 1}.title`, value: exp.title });
      if (exp.role) entries.push({ key: `db.experience.project${i + 1}.role`, value: exp.role });
      if (exp.meta) entries.push({ key: `db.experience.project${i + 1}.meta`, value: exp.meta });
    });
  }

  if (Array.isArray(gallery)) {
    gallery.forEach((shot, i) => {
      if (shot.alt) entries.push({ key: `db.gallery.shot${i + 1}.alt`, value: shot.alt });
    });
  }

  if (Array.isArray(skills)) {
    skills.forEach((section, i) => {
      if (section.section) entries.push({ key: `db.skills.section${i + 1}.section`, value: section.section });
      if (section.title) entries.push({ key: `db.skills.section${i + 1}.title`, value: section.title });
      if (Array.isArray(section.items)) {
        section.items.forEach((item, j) => {
          if (item) entries.push({ key: `db.skills.section${i + 1}.item${j + 1}`, value: String(item) });
        });
      }
    });
  }

  return entries;
}

/**
 * Sync DB content into Translation table for all languages.
 * Cleans old db.* translations first, then rewrites FR from DB
 * and generates EN/DE/ES/PT via DeepL when missing.
 */
export async function syncDbTranslations() {
  const dbEntries = await extractDbContent();
  const uiStrings = getUiStrings();
  const uiEntries = Object.entries(uiStrings).map(([key, value]) => ({ key, value }));
  const allEntries = [...dbEntries, ...uiEntries];
  const languages = ["fr", "en", "de", "es", "pt"];

  const allKeys = allEntries.map((e) => e.key);

  if (allKeys.length > 0) {
    await prisma.translation.deleteMany({
      where: {
        key: { in: allKeys },
      },
    });
  }

  const data = [];
  for (const entry of allEntries) {
    for (const lang of languages) {
      let value = entry.value;
      if (lang !== "fr") {
        try {
          const translated = await translateDeepL(entry.value, "fr", lang);
          if (translated && translated !== entry.value) value = translated;
        } catch {
          value = entry.value;
        }
      }
      data.push({ key: entry.key, language: lang, value, source: "db" });
    }
  }

  if (data.length > 0) {
    await prisma.translation.createMany({ data, skipDuplicates: true });
  }

  return { total: data.length, created: data.length };
}
