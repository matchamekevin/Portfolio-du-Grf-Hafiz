import { ZodError } from "zod";

export const errorHandler = (err, req, res, next) => {
  console.error("[API Error]", err);

  if (err instanceof ZodError) {
    return res.status(400).json({
      status: "error",
      message: "Validation error",
      errors: err.errors.map((e) => ({
        field: e.path.join("."),
        message: e.message,
      })),
    });
  }

  if (err.code === "LIMIT_FILE_SIZE") {
    return res.status(400).json({
      status: "error",
      message: "Fichier trop volumineux",
    });
  }

  const status = err.statusCode || 500;
  const message = err.message || "Erreur interne du serveur";

  res.status(status).json({
    status: "error",
    message,
  });
};
