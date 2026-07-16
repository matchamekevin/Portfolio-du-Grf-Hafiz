import prisma from "../config/prisma.js";
import { signToken } from "../utils/auth.js";
import { checkPassword, hashPassword } from "../utils/password.js";
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

  getProfile: async (req, res, next) => {
    try {
      const user = await prisma.adminUser.findUnique({
        where: { id: req.user.id },
        select: { id: true, email: true, name: true, createdAt: true, updatedAt: true },
      });
      if (!user) {
        return res.status(404).json({ status: "error", message: "Utilisateur introuvable" });
      }
      res.json({ status: "ok", data: user });
    } catch (e) {
      next(e);
    }
  },

  updateProfile: async (req, res, next) => {
    try {
      const { name, email } = req.body;
      if (!name && !email) {
        return res.status(400).json({ status: "error", message: "Aucun champ a modifier" });
      }
      const update = {};
      if (name !== undefined) update.name = name;
      if (email !== undefined) {
        if (!email || !email.includes("@")) {
          return res.status(400).json({ status: "error", message: "Email invalide" });
        }
        const existing = await prisma.adminUser.findUnique({ where: { email } });
        if (existing && existing.id !== req.user.id) {
          return res.status(409).json({ status: "error", message: "Cet email est deja utilise" });
        }
        update.email = email;
      }
      const user = await prisma.adminUser.update({
        where: { id: req.user.id },
        data: update,
        select: { id: true, email: true, name: true },
      });
      res.json({ status: "ok", data: user });
    } catch (e) {
      next(e);
    }
  },

  changePassword: async (req, res, next) => {
    try {
      const { currentPassword, newPassword, confirmPassword } = req.body;
      if (!currentPassword || !newPassword || !confirmPassword) {
        return res.status(400).json({ status: "error", message: "Tous les champs sont requis" });
      }
      if (newPassword !== confirmPassword) {
        return res.status(400).json({ status: "error", message: "Les mots de passe ne correspondent pas" });
      }
      if (newPassword.length < 6) {
        return res.status(400).json({ status: "error", message: "Le mot de passe doit faire au moins 6 caracteres" });
      }
      const user = await prisma.adminUser.findUnique({ where: { id: req.user.id } });
      if (!user) {
        return res.status(404).json({ status: "error", message: "Utilisateur introuvable" });
      }
      const valid = await checkPassword(currentPassword, user.password);
      if (!valid) {
        return res.status(401).json({ status: "error", message: "Mot de passe actuel incorrect" });
      }
      const hash = await hashPassword(newPassword);
      await prisma.adminUser.update({ where: { id: req.user.id }, data: { password: hash } });
      res.json({ status: "ok", data: { message: "Mot de passe modifie" } });
    } catch (e) {
      next(e);
    }
  },

  resetPassword: async (req, res, next) => {
    try {
      const { newPassword, confirmPassword } = req.body;
      if (!newPassword || !confirmPassword) {
        return res.status(400).json({ status: "error", message: "Tous les champs sont requis" });
      }
      if (newPassword !== confirmPassword) {
        return res.status(400).json({ status: "error", message: "Les mots de passe ne correspondent pas" });
      }
      if (newPassword.length < 6) {
        return res.status(400).json({ status: "error", message: "Le mot de passe doit faire au moins 6 caracteres" });
      }
      const hash = await hashPassword(newPassword);
      await prisma.adminUser.update({ where: { id: req.user.id }, data: { password: hash } });
      res.json({ status: "ok", data: { message: "Mot de passe reinitialise" } });
    } catch (e) {
      next(e);
    }
  },
};
