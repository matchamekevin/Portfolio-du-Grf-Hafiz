import { uploadImage, deleteImage } from "../config/cloudinary.js";
import prisma from "../config/prisma.js";

export const uploadController = {
  uploadImage: async (req, res, next) => {
    try {
      if (!req.file) {
        return res.status(400).json({ status: "error", message: "Aucun fichier fourni" });
      }
      const result = await uploadImage(req.file);
      res.status(201).json({
        status: "ok",
        data: {
          url: result.url,
          publicId: result.publicId,
          width: result.width,
          height: result.height,
          format: result.format,
          bytes: result.bytes,
        },
      });
    } catch (err) {
      next(err);
    }
  },

  deleteImage: async (req, res, next) => {
    try {
      const { publicId } = req.params;
      const result = await deleteImage(publicId);
      if (result) {
        res.json({ status: "ok", message: "Image supprimee" });
      } else {
        res.status(500).json({ status: "error", message: "Erreur lors de la suppression" });
      }
    } catch (err) {
      next(err);
    }
  },

  replaceShowreelImage: async (req, res, next) => {
    try {
      const { id } = req.params;
      if (!req.file) {
        return res.status(400).json({ status: "error", message: "Aucun fichier fourni" });
      }
      const project = await prisma.showreelProject.findFirst({
        where: { id },
      });
      if (!project) {
        return res.status(404).json({ status: "error", message: "Project not found" });
      }
      const oldPublicId = project.imagePublicId;
      const result = await uploadImage(req.file);
      await deleteImage(oldPublicId);
      const data = await prisma.showreelProject.update({
        where: { id },
        data: { imageUrl: result.url, imagePublicId: result.publicId },
      });
      res.json({ status: "ok", data });
    } catch (err) {
      next(err);
    }
  },

  replaceGalleryImage: async (req, res, next) => {
    try {
      const { id } = req.params;
      if (!req.file) {
        return res.status(400).json({ status: "error", message: "Aucun fichier fourni" });
      }
      const item = await prisma.galleryShot.findFirst({
        where: { id },
      });
      if (!item) {
        return res.status(404).json({ status: "error", message: "Gallery item not found" });
      }
      const oldPublicId = item.publicId;
      const result = await uploadImage(req.file);
      await deleteImage(oldPublicId);
      const data = await prisma.galleryShot.update({
        where: { id },
        data: { src: result.url, publicId: result.publicId },
      });
      res.json({ status: "ok", data });
    } catch (err) {
      next(err);
    }
  },
};
