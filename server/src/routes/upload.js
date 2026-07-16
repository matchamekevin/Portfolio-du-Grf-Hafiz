import { Router } from "express";
import { uploadController } from "../controllers/uploadController.js";
import { upload } from "../middleware/upload.js";

const router = Router();

router.post("/image", upload.single("file"), uploadController.uploadImage);
router.post("/showreel/:id/image", upload.single("file"), uploadController.replaceShowreelImage);
router.post("/gallery/:id/image", upload.single("file"), uploadController.replaceGalleryImage);
router.delete("/image/:publicId", uploadController.deleteImage);

export default router;
