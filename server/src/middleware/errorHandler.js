import { ZodError } from "zod";
import { CloudinaryUploadError } from "../config/cloudinary.js";

export const errorHandler = (err, req, res, next) => {
  console.error("[API Error]", err.message);

  if (err instanceof ZodError) {
    return res.status(400).json({
      status: "error",
      message: "Erreur de validation",
      errors: err.errors.map((e) => ({
        field: e.path.join("."),
        message: e.message,
      })),
    });
  }

  if (err instanceof CloudinaryUploadError) {
    return res.status(400).json({ status: "error", message: err.message });
  }

  if (err.code === "LIMIT_FILE_SIZE") {
    return res.status(400).json({
      status: "error",
      message: "Fichier trop volumineux",
    });
  }

  if (err.name === "MulterError") {
    return res.status(400).json({
      status: "error",
      message: err.message,
    });
  }

  if (err.message && err.message.includes("fichier")) {
    return res.status(400).json({
      status: "error",
      message: err.message,
    });
  }

  const status = err.statusCode || 500;
  const message = status === 500 ? "Erreur interne du serveur" : err.message;

  res.status(status).json({ status: "error", message });
};
