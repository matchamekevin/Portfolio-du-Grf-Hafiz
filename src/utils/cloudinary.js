export function cloudinaryImg(url, { w, h, q = "auto", f = "auto" } = {}) {
  if (!url || !url.includes("cloudinary.com")) return url;
  const params = [];
  if (w) params.push(`w_${w}`);
  if (h) params.push(`h_${h}`, "c_fill");
  params.push(`q_${q}`, `f_${f}`);
  const parts = url.split("/upload/");
  if (parts.length !== 2) return url;
  return `${parts[0]}/upload/${params.join(",")}/${parts[1]}`;
}
