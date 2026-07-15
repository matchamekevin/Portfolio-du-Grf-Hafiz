import express from "express";
import cors from "cors";
import config from "./config/env.js";
import { errorHandler } from "./middleware/errorHandler.js";
import { upload } from "./middleware/upload.js";
import { authMiddleware } from "./middleware/auth.js";
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
import publicRoutes from "./routes/public.js";

const app = express();

app.use(cors({ origin: config.corsOrigin }));
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
app.use("/api/upload", upload.single("file"), uploadRoutes);
app.use("/api/realtime", realtimeRoutes);
app.use("/api/public", publicRoutes);

app.use((req, res) => {
  res.status(404).json({ status: "error", message: "Route not found" });
});

app.use(errorHandler);

export default app;
