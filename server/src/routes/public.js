import { Router } from "express";
import { publicController } from "../controllers/publicController.js";

const router = Router();

router.get("/all", publicController.getAll);

export default router;
