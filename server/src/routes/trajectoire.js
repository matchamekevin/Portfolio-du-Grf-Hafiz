import { Router } from "express";
import { trajectoireController } from "../controllers/trajectoireController.js";

const router = Router();

router.get("/", trajectoireController.get);
router.put("/", trajectoireController.upsert);

export default router;
