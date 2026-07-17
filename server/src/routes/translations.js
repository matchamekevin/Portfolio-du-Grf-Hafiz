import { Router } from "express";
import { translationController } from "../controllers/translationController.js";

const router = Router();

router.get("/", translationController.getAll);
router.get("/:language", translationController.getByLanguage);
router.get("/key/:key", translationController.getByKey);
router.post("/", translationController.create);
router.post("/upsert", translationController.upsert);
router.post("/bulk", translationController.bulkUpsert);
router.post("/sync-db", translationController.syncDbContent);
router.post("/sync-clean", translationController.syncClean);
router.put("/:id", translationController.update);
router.delete("/:id", translationController.delete);

export default router;
