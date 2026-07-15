import prisma from "../config/prisma.js";

export const publicController = {
  getAll: async (req, res, next) => {
    try {
      const [hero, contact, cta, footer, showreel, experiences, gallery, skills] = await Promise.all([
        prisma.hero.findFirst(),
        prisma.contactInfo.findFirst(),
        prisma.cta.findFirst(),
        prisma.footer.findFirst(),
        prisma.showreelProject.findMany({ where: { active: true }, orderBy: { order: "asc" } }),
        prisma.experience.findMany({ where: { active: true }, orderBy: { order: "asc" } }),
        prisma.galleryShot.findMany({ where: { active: true }, orderBy: { order: "asc" } }),
        prisma.skillSection.findMany({ where: { active: true }, orderBy: { order: "asc" } }),
      ]);
      res.json({
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
        },
      });
    } catch (e) {
      next(e);
    }
  },
};
