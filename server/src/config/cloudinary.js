import { v2 as cloudinary } from "cloudinary";
import config from "./env.js";

if (process.env.CLOUDINARY_URL) {
  cloudinary.config({ secure: true });
} else {
  cloudinary.config({
    cloud_name: config.cloudinary.cloudName,
    api_key: config.cloudinary.apiKey,
    api_secret: config.cloudinary.apiSecret,
    secure: true,
  });
}

export class CloudinaryUploadError extends Error {
  constructor(message, details) {
    super(message);
    this.name = "CloudinaryUploadError";
    this.details = details;
  }
}

export async function uploadImage(file) {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        folder: config.cloudinary.folder,
        resource_type: "image",
        transformation: [{ quality: "auto:good" }, { fetch_format: "auto" }],
        eager_async: false,
      },
      (err, result) => {
        if (err) {
          const message =
            err.message && /invalid image file/i.test(err.message)
              ? "Fichier image invalide ou corrompu"
              : err.message || "Echec de l'upload vers Cloudinary";
          return reject(new CloudinaryUploadError(message, err));
        }
        if (!result || !result.secure_url) {
          return reject(new CloudinaryUploadError("Reponse Cloudinary invalide"));
        }
        resolve({
          url: result.secure_url,
          publicId: result.public_id,
          width: result.width,
          height: result.height,
          format: result.format,
          bytes: result.bytes,
        });
      }
    );
    stream.end(file.buffer);
  });
}

export async function deleteImage(publicId) {
  try {
    await cloudinary.uploader.destroy(publicId, { resource_type: "image" });
    return true;
  } catch {
    return false;
  }
}

export default cloudinary;
