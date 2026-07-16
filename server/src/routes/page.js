import { Router } from "express";
import { contactController, heroController, ctaController, footerController } from "../controllers/pageController.js";

const router = Router();

router.get("/contact", contactController.getFirst);
router.put("/contact", contactController.updateFirst);
router.post("/contact", contactController.create);
router.put("/contact/:id", contactController.update);

router.get("/hero", heroController.getFirst);
router.put("/hero", heroController.updateFirst);

router.get("/cta", ctaController.getFirst);
router.put("/cta", ctaController.updateFirst);

router.get("/footer", footerController.getFirst);
router.put("/footer", footerController.updateFirst);

export default router;
