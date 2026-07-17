import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import prisma from "../config/prisma.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SEED_FILE = path.resolve(__dirname, "../../seed-ui-fr.json");

async function seedFrUi() {
  const raw = fs.readFileSync(SEED_FILE, "utf-8");
  const fr = JSON.parse(raw);
  const keys = Object.keys(fr);
  let created = 0;
  let updated = 0;

  for (const key of keys) {
    const value = fr[key];
    const existing = await prisma.translation.findMany({
      where: { AND: [{ key }, { language: "fr" }] },
    });
    if (existing.length) {
      const cur = existing[0];
      if (cur.value !== value || cur.source !== "static") {
        await prisma.translation.update({
          where: { id: cur.id },
          data: { value, source: "static", updatedAt: new Date() },
        });
        updated++;
      }
    } else {
      await prisma.translation.create({
        data: { key, language: "fr", value, source: "static" },
      });
      created++;
    }
  }

  console.log(`[seed] FR UI keys: ${created} created, ${updated} updated (total ${keys.length})`);
  return { created, updated, total: keys.length };
}

seedFrUi()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error("[seed] error:", e.message);
    await prisma.$disconnect();
    process.exit(1);
  });
