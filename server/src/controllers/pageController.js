import prisma from "../config/prisma.js";
import {
  createContactSchema,
  updateContactSchema,
  createHeroSchema,
  updateHeroSchema,
  createCtaSchema,
  updateCtaSchema,
  createFooterSchema,
  updateFooterSchema,
} from "../middleware/validate.js";
import { broadcastUpdate } from "./realtimeController.js";

export const contactController = {
  getAll: async (req, res, next) => {
    const items = await prisma.contactInfo.findMany({
      orderBy: { id: "desc" },
    });
    res.json({ status: "ok", data: items[0] || null });
  },

  getFirst: async (req, res, next) => {
    const item = await prisma.contactInfo.findFirst();
    res.json({ status: "ok", data: item || null });
  },

  create: async (req, res, next) => {
    const parsed = createContactSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ status: "error", errors: parsed.error.errors });
    }
    const data = await prisma.contactInfo.create({
      data: parsed.data,
    });
    broadcastUpdate();
    res.status(201).json({ status: "ok", data });
  },

  update: async (req, res, next) => {
    const { id } = req.params;
    const parsed = updateContactSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ status: "error", errors: parsed.error.errors });
    }
    const data = await prisma.contactInfo.update({
      where: { id },
      data: parsed.data,
    });
    broadcastUpdate();
    res.json({ status: "ok", data });
  },

  updateFirst: async (req, res, next) => {
    const existing = await prisma.contactInfo.findFirst();
    let data;
    if (existing) {
      const parsed = updateContactSchema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({ status: "error", errors: parsed.error.errors });
      }
      data = await prisma.contactInfo.update({
        where: { id: existing.id },
        data: parsed.data,
      });
      broadcastUpdate();
    } else {
      const parsed = createContactSchema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({ status: "error", errors: parsed.error.errors });
      }
      data = await prisma.contactInfo.create({
        data: parsed.data,
      });
      broadcastUpdate();
    }
    res.json({ status: "ok", data });
  },
};

export const heroController = {
  getFirst: async (req, res, next) => {
    const item = await prisma.hero.findFirst();
    res.json({ status: "ok", data: item || null });
  },

  create: async (req, res, next) => {
    const parsed = createHeroSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ status: "error", errors: parsed.error.errors });
    }
    const data = await prisma.hero.create({
      data: parsed.data,
    });
    broadcastUpdate();
    res.status(201).json({ status: "ok", data });
  },

  update: async (req, res, next) => {
    const { id } = req.params;
    const parsed = updateHeroSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ status: "error", errors: parsed.error.errors });
    }
    const data = await prisma.hero.update({
      where: { id },
      data: parsed.data,
    });
    broadcastUpdate();
    res.json({ status: "ok", data });
  },

  updateFirst: async (req, res, next) => {
    const existing = await prisma.hero.findFirst();
    let data;
    if (existing) {
      const parsed = updateHeroSchema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({ status: "error", errors: parsed.error.errors });
      }
      data = await prisma.hero.update({
        where: { id: existing.id },
        data: parsed.data,
      });
      broadcastUpdate();
    } else {
      const parsed = createHeroSchema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({ status: "error", errors: parsed.error.errors });
      }
      data = await prisma.hero.create({
        data: parsed.data,
      });
      broadcastUpdate();
    }
    res.json({ status: "ok", data });
  },
};

export const ctaController = {
  getFirst: async (req, res, next) => {
    const item = await prisma.cta.findFirst();
    res.json({ status: "ok", data: item || null });
  },

  updateFirst: async (req, res, next) => {
    const existing = await prisma.cta.findFirst();
    let data;
    if (existing) {
      const parsed = updateCtaSchema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({ status: "error", errors: parsed.error.errors });
      }
      data = await prisma.cta.update({
        where: { id: existing.id },
        data: parsed.data,
      });
      broadcastUpdate();
    } else {
      const parsed = createCtaSchema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({ status: "error", errors: parsed.error.errors });
      }
      data = await prisma.cta.create({
        data: parsed.data,
      });
      broadcastUpdate();
    }
    res.json({ status: "ok", data });
  },
};

export const footerController = {
  getFirst: async (req, res, next) => {
    const item = await prisma.footer.findFirst();
    res.json({ status: "ok", data: item || null });
  },

  updateFirst: async (req, res, next) => {
    const existing = await prisma.footer.findFirst();
    let data;
    if (existing) {
      const parsed = updateFooterSchema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({ status: "error", errors: parsed.error.errors });
      }
      data = await prisma.footer.update({
        where: { id: existing.id },
        data: parsed.data,
      });
      broadcastUpdate();
    } else {
      const parsed = createFooterSchema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({ status: "error", errors: parsed.error.errors });
      }
      data = await prisma.footer.create({
        data: parsed.data,
      });
      broadcastUpdate();
    }
    res.json({ status: "ok", data });
  },
};
