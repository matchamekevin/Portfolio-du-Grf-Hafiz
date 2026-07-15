import { Router } from "express";
import { autoTranslationController } from "../controllers/realtimeController.js";

const router = Router();

router.post("/translations/auto-sync", autoTranslationController.syncMissing);

export default router;
