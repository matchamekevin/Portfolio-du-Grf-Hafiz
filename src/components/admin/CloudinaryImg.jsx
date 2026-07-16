import { cloudinaryImg } from "../../utils/cloudinary";

export default function CloudinaryImg({ src, alt, w, h, className = "", ...props }) {
  return (
    <img
      src={cloudinaryImg(src, { w, h })}
      alt={alt || ""}
      className={className}
      loading="lazy"
      {...props}
    />
  );
}
