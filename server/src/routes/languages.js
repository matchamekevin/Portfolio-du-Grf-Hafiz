import { Router } from "express";
import { languageController } from "../controllers/languageController.js";

const router = Router();

router.get("/", languageController.getAll);
router.post("/", languageController.create);
router.put("/:id", languageController.update);
router.delete("/:id", languageController.delete);

export default router;
