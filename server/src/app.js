import express from "express";
import cors from "cors";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import config from "./config/env.js";
import { errorHandler } from "./middleware/errorHandler.js";
import showreelRoutes from "./routes/showreel.js";
import experienceRoutes from "./routes/experiences.js";
import galleryRoutes from "./routes/gallery.js";
import skillRoutes from "./routes/skills.js";
import pageRoutes from "./routes/page.js";
import translationRoutes from "./routes/translations.js";
import languageRoutes from "./routes/languages.js";
import uploadRoutes from "./routes/upload.js";
import authRoutes from "./routes/auth.js";
import realtimeRoutes from "./routes/realtime.js";
import trajectoireRoutes from "./routes/trajectoire.js";
import publicRoutes from "./routes/public.js";
import { syncDbTranslations } from "./utils/dbTranslationSync.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

const normalizedOrigin = config.corsOrigin?.replace(/\/+$/, "") || "*";
app.use(cors({ origin: (origin, cb) => {
  if (!origin || origin.replace(/\/+$/, "") === normalizedOrigin || normalizedOrigin === "*") {
    cb(null, true);
  } else {
    cb(new Error("Not allowed by CORS"));
  }
}}));
app.use(express.json({ limit: "1mb" }));

app.get("/health", (req, res) => {
  res.json({ status: "ok", environment: config.nodeEnv, timestamp: new Date().toISOString() });
});

app.use("/api/auth", authRoutes);
app.use("/api/showreel", showreelRoutes);
app.use("/api/experiences", experienceRoutes);
app.use("/api/gallery", galleryRoutes);
app.use("/api/skills", skillRoutes);
app.use("/api/page", pageRoutes);
app.use("/api/translations", translationRoutes);
app.use("/api/languages", languageRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api/realtime", realtimeRoutes);
app.use("/api/trajectoire", trajectoireRoutes);
app.use("/api/public", publicRoutes);

if (config.nodeEnv === "production") {
  const distPath = path.resolve(__dirname, "../../dist");
  if (fs.existsSync(distPath)) {
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  } else {
    app.use((req, res) => {
      res.status(404).json({ status: "error", message: "Route not found" });
    });
  }
} else {
  app.use((req, res) => {
    res.status(404).json({ status: "error", message: "Route not found" });
  });
}

app.use(errorHandler);

const startSync = async () => {
  try {
    const result = await syncDbTranslations();
    console.log(`[sync] translations synced: total=${result.total}, created=${result.created}`);
  } catch (err) {
    console.error("[sync] failed to sync translations:", err);
  }
};

if (config.nodeEnv !== "production") {
  startSync();
}

export default app;
