import { Router } from "express";
import { experienceController } from "../controllers/experienceController.js";

const router = Router();

router.get("/", experienceController.getActive);
router.get("/all", experienceController.getAll);
router.get("/:id", experienceController.getById);
router.get("/category/:category", experienceController.getByCategory);
router.post("/", experienceController.create);
router.put("/:id", experienceController.update);
router.delete("/:id", experienceController.delete);

export default router;
