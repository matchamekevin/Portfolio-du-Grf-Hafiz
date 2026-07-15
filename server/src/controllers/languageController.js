import prisma from "../config/prisma.js";
import { createLanguageSchema, updateLanguageSchema } from "../middleware/validate.js";

export const languageController = {
  getAll: async (req, res, next) => {
    const items = await prisma.language.findMany({
      orderBy: { order: "asc" },
    });
    res.json({ status: "ok", data: items });
  },

  create: async (req, res, next) => {
    const parsed = createLanguageSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ status: "error", errors: parsed.error.errors });
    }
    const data = await prisma.language.create({
      data: parsed.data,
    });
    res.status(201).json({ status: "ok", data });
  },

  update: async (req, res, next) => {
    const { id } = req.params;
    const parsed = updateLanguageSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ status: "error", errors: parsed.error.errors });
    }
    const data = await prisma.language.update({
      where: { id },
      data: parsed.data,
    });
    res.json({ status: "ok", data });
  },

  delete: async (req, res, next) => {
    const { id } = req.params;
    const data = await prisma.language.delete({
      where: { id },
    });
    res.json({ status: "ok", data });
  },
};
