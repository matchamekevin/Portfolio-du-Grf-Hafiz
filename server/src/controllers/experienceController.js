import prisma from "../config/prisma.js";
import { createExperienceSchema, updateExperienceSchema } from "../middleware/validate.js";
import { broadcastUpdate } from "./realtimeController.js";
import { publicController } from "./publicController.js";

export const experienceController = {
  getAll: async (req, res, next) => {
    const items = await prisma.experience.findMany({
      orderBy: { order: "asc" },
    });
    res.json({ status: "ok", data: items });
  },

  getByCategory: async (req, res, next) => {
    const { category } = req.params;
    const items = await prisma.experience.findMany({
      where: { category },
      orderBy: { order: "asc" },
    });
    res.json({ status: "ok", data: items });
  },

  getActive: async (req, res, next) => {
    const items = await prisma.experience.findMany({
      where: { active: true },
      orderBy: { order: "asc" },
    });
    res.json({ status: "ok", data: items });
  },

  getById: async (req, res, next) => {
    const { id } = req.params;
    const item = await prisma.experience.findFirst({
      where: { id },
    });
    if (!item) {
      return res.status(404).json({ status: "error", message: "Experience not found" });
    }
    res.json({ status: "ok", data: item });
  },

  create: async (req, res, next) => {
    const parsed = createExperienceSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ status: "error", errors: parsed.error.errors });
    }
    const data = await prisma.experience.create({
      data: parsed.data,
    });
    broadcastUpdate();
    publicController.invalidateCache();
    res.status(201).json({ status: "ok", data });
  },

  update: async (req, res, next) => {
    const { id } = req.params;
    const parsed = updateExperienceSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ status: "error", errors: parsed.error.errors });
    }
    const data = await prisma.experience.update({
      where: { id },
      data: parsed.data,
    });
    broadcastUpdate();
    publicController.invalidateCache();
    res.json({ status: "ok", data });
  },

  delete: async (req, res, next) => {
    const { id } = req.params;
    const data = await prisma.experience.delete({
      where: { id },
    });
    broadcastUpdate();
    publicController.invalidateCache();
    res.json({ status: "ok", data });
  },
};
