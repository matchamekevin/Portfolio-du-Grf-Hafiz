export default {
  port: process.env.PORT || 5000,
  nodeEnv: process.env.NODE_ENV || "development",
  corsOrigin: process.env.CORS_ORIGIN || "*",
  database: {
    url: process.env.DATABASE_URL || process.env.NEON_DATABASE_URL,
  },
  cloudinary: {
    url: process.env.CLOUDINARY_URL,
    cloudName: process.env.CLOUDINARY_CLOUD_NAME,
    apiKey: process.env.CLOUDINARY_API_KEY,
    apiSecret: process.env.CLOUDINARY_API_SECRET,
    folder: process.env.CLOUDINARY_FOLDER || "portfolio",
  },
  auth: {
    secret: process.env.AUTH_SECRET || "change-me-in-production",
    expiresIn: process.env.AUTH_EXPIRES_IN || "7d",
  },
  upload: {
    maxFileSize: parseInt(process.env.UPLOAD_MAX_FILE_SIZE || "52428800"),
    allowedMimeTypes: [
      "image/jpeg",
      "image/png",
      "image/webp",
      "image/gif",
      "image/avif",
      "image/svg+xml",
      "image/tiff",
      "image/bmp",
      "image/x-icon",
    ],
  },
};
