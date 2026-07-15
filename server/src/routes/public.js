import { Router } from "express";
import { publicController } from "../controllers/publicController.js";
import { cacheMiddleware } from "../middleware/cache.js";

const router = Router();

router.get("/all", cacheMiddleware(60), publicController.getAll);

export default router;
