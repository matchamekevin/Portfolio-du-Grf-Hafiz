import prisma from "../config/prisma.js";
import { createSkillSchema, updateSkillSchema } from "../middleware/validate.js";
import { broadcastUpdate } from "./realtimeController.js";
import { publicController } from "./publicController.js";

export const skillController = {
  getAll: async (req, res, next) => {
    const items = await prisma.skillSection.findMany({
      orderBy: { order: "asc" },
    });
    res.json({ status: "ok", data: items });
  },

  getActive: async (req, res, next) => {
    const items = await prisma.skillSection.findMany({
      where: { active: true },
      orderBy: { order: "asc" },
    });
    res.json({ status: "ok", data: items });
  },

  getById: async (req, res, next) => {
    const { id } = req.params;
    const item = await prisma.skillSection.findFirst({
      where: { id },
    });
    if (!item) {
      return res.status(404).json({ status: "error", message: "Skill section not found" });
    }
    res.json({ status: "ok", data: item });
  },

  create: async (req, res, next) => {
    const parsed = createSkillSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ status: "error", errors: parsed.error.errors });
    }
    const data = await prisma.skillSection.create({
      data: parsed.data,
    });
    broadcastUpdate();
    publicController.invalidateCache();
    res.status(201).json({ status: "ok", data });
  },

  update: async (req, res, next) => {
    const { id } = req.params;
    const parsed = updateSkillSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ status: "error", errors: parsed.error.errors });
    }
    const data = await prisma.skillSection.update({
      where: { id },
      data: parsed.data,
    });
    broadcastUpdate();
    publicController.invalidateCache();
    res.json({ status: "ok", data });
  },

  delete: async (req, res, next) => {
    const { id } = req.params;
    const data = await prisma.skillSection.delete({
      where: { id },
    });
    broadcastUpdate();
    publicController.invalidateCache();
    res.json({ status: "ok", data });
  },
};
