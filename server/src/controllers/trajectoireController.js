import prisma from "../config/prisma.js";
import { broadcastUpdate } from "./realtimeController.js";
import { publicController } from "./publicController.js";
import { syncDbTranslations } from "../utils/dbTranslationSync.js";

function bgSync() {
  syncDbTranslations().catch(() => {});
}

export const trajectoireController = {
  get: async (req, res, next) => {
    const item = await prisma.trajectoire.findFirst();
    res.json({ status: "ok", data: item || null });
  },

  upsert: async (req, res, next) => {
    const { danteTitle, danteSubtitle, danteItems, languages } = req.body;
    const existing = await prisma.trajectoire.findFirst();
    let data;
    if (existing) {
      data = await prisma.trajectoire.update({
        where: { id: existing.id },
        data: { danteTitle, danteSubtitle, danteItems, languages },
      });
    } else {
      data = await prisma.trajectoire.create({
        data: { danteTitle, danteSubtitle, danteItems, languages },
      });
    }
    broadcastUpdate();
    publicController.invalidateCache();
    bgSync();
    res.json({ status: "ok", data });
  },
};
