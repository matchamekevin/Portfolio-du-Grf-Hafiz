import prisma from "../config/prisma.js";
import { signToken } from "../utils/auth.js";
import { checkPassword } from "../utils/password.js";
import bcrypt from "bcryptjs";

export const authController = {
  login: async (req, res, next) => {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return res.status(400).json({ status: "error", message: "Email et mot de passe requis" });
      }
      const user = await prisma.adminUser.findUnique({ where: { email } });
      if (!user) {
        return res.status(401).json({ status: "error", message: "Identifiants invalides" });
      }
      const valid = await checkPassword(password, user.password);
      if (!valid) {
        return res.status(401).json({ status: "error", message: "Identifiants invalides" });
      }
      const token = signToken(user);
      res.json({ status: "ok", data: { token, user: { id: user.id, email: user.email, name: user.name } } });
    } catch (e) {
      next(e);
    }
  },

  createUser: async (req, res, next) => {
    try {
      const { email, password, name } = req.body;
      if (!email || !password) {
        return res.status(400).json({ status: "error", message: "Email et mot de passe requis" });
      }
      const hash = await bcrypt.hash(password, 10);
      const user = await prisma.adminUser.create({ data: { email, password: hash, name } });
      res.status(201).json({ status: "ok", data: { id: user.id, email: user.email, name: user.name } });
    } catch (e) {
      next(e);
    }
  },
};
