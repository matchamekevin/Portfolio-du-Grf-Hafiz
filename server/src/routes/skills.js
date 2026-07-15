import { Router } from "express";
import { skillController } from "../controllers/skillController.js";

const router = Router();

router.get("/", skillController.getActive);
router.get("/all", skillController.getAll);
router.post("/", skillController.create);
router.put("/:id", skillController.update);
router.delete("/:id", skillController.delete);

export default router;
