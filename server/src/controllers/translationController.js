import prisma from "../config/prisma.js";
import { syncDbTranslations } from "../utils/dbTranslationSync.js";
import { broadcastUpdate } from "./realtimeController.js";

export const translationController = {
  getAll: async (req, res, next) => {
    try {
      const { language, key, source } = req.query;
      const where = {};
      if (language) where.language = language;
      if (key) where.key = key;
      if (source) where.source = source;
      const items = await prisma.translation.findMany({ where, orderBy: { key: "asc" } });
      res.json({ status: "ok", data: items });
    } catch (e) {
      next(e);
    }
  },

  getByLanguage: async (req, res, next) => {
    try {
      const { language } = req.params;
      const items = await prisma.translation.findMany({
        where: { language },
        orderBy: { key: "asc" },
      });
      res.json({ status: "ok", data: items });
    } catch (e) {
      next(e);
    }
  },

  getByKey: async (req, res, next) => {
    try {
      const { key } = req.params;
      const items = await prisma.translation.findMany({
        where: { key },
        orderBy: { language: "asc" },
      });
      res.json({ status: "ok", data: items });
    } catch (e) {
      next(e);
    }
  },

  create: async (req, res, next) => {
    try {
      const item = await prisma.translation.create({ data: req.body });
      res.json({ status: "ok", data: item });
    } catch (e) {
      next(e);
    }
  },

  upsert: async (req, res, next) => {
    try {
      const { key, language, value, source } = req.body;
      if (!key || !language) return res.status(400).json({ status: "error", message: "key and language required" });
      const item = await prisma.translation.upsert({
        where: { key_language: { key, language } },
        create: { key, language, value: value || "", source: source || "manual" },
        update: { value: value || "", source: source || "manual", updatedAt: new Date() },
      });
      res.json({ status: "ok", data: item });
    } catch (e) {
      next(e);
    }
  },

  bulkUpsert: async (req, res, next) => {
    try {
      const { language, translations } = req.body;
      if (!language || !Array.isArray(translations)) return res.status(400).json({ status: "error", message: "language and translations array required" });
      const data = translations.map((t) => ({ key: t.key, language, value: t.value || "", source: "manual" }));
      await prisma.translation.createMany({ data, skipDuplicates: true });
      res.json({ status: "ok", data: { count: data.length } });
    } catch (e) {
      next(e);
    }
  },

  syncDbContent: async (req, res, next) => {
    try {
      const result = await syncDbTranslations();
      broadcastUpdate("translations-updated");
      res.json({ status: "ok", data: result });
    } catch (e) {
      next(e);
    }
  },

  syncClean: async (req, res, next) => {
    try {
      const result = await syncDbTranslations();
      broadcastUpdate("translations-updated");
      res.json({ status: "ok", data: result });
    } catch (e) {
      next(e);
    }
  },

  update: async (req, res, next) => {
    try {
      const { id } = req.params;
      const item = await prisma.translation.update({ where: { id: Number(id) }, data: req.body });
      res.json({ status: "ok", data: item });
    } catch (e) {
      next(e);
    }
  },

  delete: async (req, res, next) => {
    try {
      const { id } = req.params;
      await prisma.translation.delete({ where: { id: Number(id) } });
      res.json({ status: "ok" });
    } catch (e) {
      next(e);
    }
  },
};
