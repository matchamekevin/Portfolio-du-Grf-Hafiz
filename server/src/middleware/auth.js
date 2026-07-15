import { verifyToken } from "../utils/auth.js";

export function authMiddleware(req, res, next) {
  const header = req.headers.authorization;
  if (!header || !header.startsWith("Bearer ")) {
    return res.status(401).json({ status: "error", message: "Non autorise" });
  }
  const token = header.split(" ")[1];
  const payload = verifyToken(token);
  if (!payload) {
    return res.status(401).json({ status: "error", message: "Token invalide" });
  }
  req.user = payload;
  next();
}
