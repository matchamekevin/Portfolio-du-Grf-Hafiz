import { Router } from "express";
import { uploadController } from "../controllers/uploadController.js";

const router = Router();

router.post("/image", uploadController.uploadImage);
router.post("/showreel/:id/image", uploadController.replaceShowreelImage);
router.post("/gallery/:id/image", uploadController.replaceGalleryImage);
router.delete("/image/:publicId", uploadController.deleteImage);

export default router;
