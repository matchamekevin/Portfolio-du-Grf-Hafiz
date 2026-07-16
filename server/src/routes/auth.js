import { Router } from "express";
import { authController } from "../controllers/authController.js";
import { authMiddleware } from "../middleware/auth.js";

const router = Router();

router.post("/login", authController.login);
router.post("/register", authController.createUser);

router.get("/me", authMiddleware, authController.getProfile);
router.put("/me", authMiddleware, authController.updateProfile);
router.put("/me/password", authMiddleware, authController.changePassword);
router.put("/me/password/reset", authMiddleware, authController.resetPassword);

export default router;
