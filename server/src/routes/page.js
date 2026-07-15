import { Router } from "express";
import { contactController } from "../controllers/pageController.js";

const router = Router();

router.get("/contact", contactController.getFirst);
router.put("/contact", contactController.updateFirst);
router.post("/contact", contactController.create);
router.put("/contact/:id", contactController.update);

router.get("/hero", contactController.getFirst);
router.put("/hero", contactController.updateFirst);

router.get("/cta", contactController.getFirst);
router.put("/cta", contactController.updateFirst);

router.get("/footer", contactController.getFirst);
router.put("/footer", contactController.updateFirst);

export default router;
