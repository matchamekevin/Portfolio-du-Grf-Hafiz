import { Router } from "express";
import { showreelController } from "../controllers/showreelController.js";

const router = Router();

router.get("/", showreelController.getActive);
router.get("/all", showreelController.getAll);
router.get("/:id", showreelController.getById);
router.post("/", showreelController.create);
router.put("/:id", showreelController.update);
router.delete("/:id", showreelController.delete);

export default router;
