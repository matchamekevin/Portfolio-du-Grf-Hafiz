import jwt from "jsonwebtoken";
import config from "../config/env.js";

export function signToken(user) {
  return jwt.sign({ id: user.id, email: user.email }, config.auth.secret, { expiresIn: "7d" });
}

export function verifyToken(token) {
  try {
    return jwt.verify(token, config.auth.secret);
  } catch {
    return null;
  }
}
