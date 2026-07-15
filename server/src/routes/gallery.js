import { Router } from "express";
import { galleryController } from "../controllers/galleryController.js";

const router = Router();

router.get("/", galleryController.getActive);
router.get("/all", galleryController.getAll);
router.post("/", galleryController.create);
router.put("/:id", galleryController.update);
router.delete("/:id", galleryController.delete);

export default router;
