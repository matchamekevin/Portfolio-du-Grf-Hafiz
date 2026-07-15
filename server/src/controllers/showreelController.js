import prisma from "../config/prisma.js";
import { createShowreelSchema, updateShowreelSchema } from "../middleware/validate.js";
import { broadcastUpdate } from "./realtimeController.js";

export const showreelController = {
  getAll: async (req, res, next) => {
    const items = await prisma.showreelProject.findMany({
      orderBy: { order: "asc" },
    });
    res.json({ status: "ok", data: items });
  },

  getActive: async (req, res, next) => {
    const items = await prisma.showreelProject.findMany({
      where: { active: true },
      orderBy: { order: "asc" },
    });
    res.json({ status: "ok", data: items });
  },

  getById: async (req, res, next) => {
    const { id } = req.params;
    const item = await prisma.showreelProject.findFirst({
      where: { id },
    });
    if (!item) {
      return res.status(404).json({ status: "error", message: "Project not found" });
    }
    res.json({ status: "ok", data: item });
  },

  create: async (req, res, next) => {
    const parsed = createShowreelSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ status: "error", errors: parsed.error.errors });
    }
    const data = await prisma.showreelProject.create({
      data: parsed.data,
    });
    broadcastUpdate();
    res.status(201).json({ status: "ok", data });
  },

  update: async (req, res, next) => {
    const { id } = req.params;
    const parsed = updateShowreelSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ status: "error", errors: parsed.error.errors });
    }
    const data = await prisma.showreelProject.update({
      where: { id },
      data: parsed.data,
    });
    broadcastUpdate();
    res.json({ status: "ok", data });
  },

  delete: async (req, res, next) => {
    const { id } = req.params;
    const data = await prisma.showreelProject.delete({
      where: { id },
    });
    broadcastUpdate();
    res.json({ status: "ok", data });
  },
};
