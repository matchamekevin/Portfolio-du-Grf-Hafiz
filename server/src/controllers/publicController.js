import prisma from "../config/prisma.js";

const cache = new Map();
const CACHE_TTL = 10_000;

function getCached(key) {
  const entry = cache.get(key);
  if (entry && Date.now() - entry.ts < CACHE_TTL) return entry.data;
  cache.delete(key);
  return null;
}

function setCache(key, data) {
  cache.set(key, { data, ts: Date.now() });
}

export const publicController = {
  getAll: async (req, res, next) => {
    try {
      const cached = getCached("public-all");
      if (cached) return res.json(cached);

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

      const response = {
        status: "ok",
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
      };

      setCache("public-all", response);
      res.json(response);
    } catch (e) {
      next(e);
    }
  },

  invalidateCache: () => {
    cache.clear();
  },
};
