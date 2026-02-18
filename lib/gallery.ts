import { readdirSync } from "fs";
import path from "path";

const GALLERY_DIR = path.join(process.cwd(), "public", "gallery");
const ALLOWED_EXT = [".jpg", ".jpeg", ".png", ".gif", ".webp"];

export function getGalleryImages(): string[] {
  try {
    const files = readdirSync(GALLERY_DIR);
    return files
      .filter((f) => ALLOWED_EXT.includes(path.extname(f).toLowerCase()))
      .sort()
      .map((f) => `/gallery/${f}`);
  } catch {
    return [];
  }
}
