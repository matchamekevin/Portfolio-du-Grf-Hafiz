import prisma from "../config/prisma.js";
import { createTranslationSchema, updateTranslationSchema } from "../middleware/validate.js";

export const translationController = {
  getAll: async (req, res, next) => {
    const items = await prisma.translation.findMany();
    res.json({ status: "ok", data: items });
  },

  getByLanguage: async (req, res, next) => {
    const { language } = req.params;
    const items = await prisma.translation.findMany({
      where: { language },
    });
    res.json({ status: "ok", data: items });
  },

  getByKey: async (req, res, next) => {
    const { key } = req.params;
    const { language } = req.query;
    const where = { key };
    if (language) {
      where.language = language;
    }
    const items = await prisma.translation.findMany({ where });
    res.json({ status: "ok", data: items });
  },

  create: async (req, res, next) => {
    const parsed = createTranslationSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ status: "error", errors: parsed.error.errors });
    }
    const data = await prisma.translation.create({
      data: parsed.data,
    });
    res.status(201).json({ status: "ok", data });
  },

  update: async (req, res, next) => {
    const { id } = req.params;
    const parsed = updateTranslationSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ status: "error", errors: parsed.error.errors });
    }
    const data = await prisma.translation.update({
      where: { id },
      data: parsed.data,
    });
    res.json({ status: "ok", data });
  },

  upsert: async (req, res, next) => {
    const { key, language, value } = req.body;
    if (!key || !language || !value) {
      return res.status(400).json({ status: "error", message: "key, language, value required" });
    }
    const existing = await prisma.translation.findMany({
      where: { AND: [{ key }, { language }] },
    });
    let data;
    if (existing.length) {
      data = await prisma.translation.update({
        where: { id: existing[0].id },
        data: { value, updatedAt: new Date() },
      });
    } else {
      data = await prisma.translation.create({
        data: { key, language, value },
      });
    }
    res.json({ status: "ok", data });
  },

  delete: async (req, res, next) => {
    const { id } = req.params;
    const data = await prisma.translation.delete({
      where: { id },
    });
    res.json({ status: "ok", data });
  },

  bulkUpsert: async (req, res, next) => {
    const { language, translations: items } = req.body;
    if (!language || !Array.isArray(items)) {
      return res.status(400).json({ status: "error", message: "language and translations array required" });
    }
    const results = [];
    for (const item of items) {
      const { key, value } = item;
      const existing = await prisma.translation.findMany({
        where: { AND: [{ key }, { language }] },
      });
      if (existing.length) {
        const updated = await prisma.translation.update({
          where: { id: existing[0].id },
          data: { value, updatedAt: new Date() },
        });
        results.push(updated);
      } else {
        const created = await prisma.translation.create({
          data: { key, language, value },
        });
        results.push(created);
      }
    }
    res.json({ status: "ok", data: results });
  },
};
