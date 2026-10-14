// Generates resized WebP variants of every raster image in public/images into
// public/_img (git-ignored), plus 1200×630 JPG share images in public/_img/og.
// Runs automatically before `npm run dev` and `npm run build`.
//
// A static export has no image optimizer, so lib/image-loader.ts points
// next/image at these pre-built files. Keep WIDTHS in sync with
// images.deviceSizes + images.imageSizes in next.config.ts.

import { mkdir, readdir, stat } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve(import.meta.dirname, "..");
const SRC = path.join(ROOT, "public/images");
const OUT = path.join(ROOT, "public/_img");
const WIDTHS = [64, 128, 256, 384, 640, 828, 1200, 1920];
const RASTER = /\.(webp|png|jpe?g)$/i;

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else if (RASTER.test(entry.name)) yield full;
  }
}

async function isFresh(output, sourceMtime) {
  try {
    return (await stat(output)).mtimeMs >= sourceMtime;
  } catch {
    return false;
  }
}

let written = 0;
for await (const file of walk(SRC)) {
  const rel = path.relative(SRC, file).replace(RASTER, "");
  const { mtimeMs } = await stat(file);
  await mkdir(path.dirname(path.join(OUT, rel)), { recursive: true });

  for (const width of WIDTHS) {
    const output = path.join(OUT, `${rel}-${width}.webp`);
    if (await isFresh(output, mtimeMs)) continue;
    // withoutEnlargement: widths above the source size just get the full-size image.
    await sharp(file).resize({ width, withoutEnlargement: true }).webp({ quality: 80 }).toFile(output);
    written++;
  }

  // Share images (Open Graph / Twitter) for the top-level photos and heroes.
  if (!rel.includes(path.sep) && !rel.startsWith("icon-") && !rel.startsWith("logo-") && !rel.startsWith("investor-")) {
    const output = path.join(OUT, "og", `${rel}.jpg`);
    await mkdir(path.dirname(output), { recursive: true });
    if (!(await isFresh(output, mtimeMs))) {
      await sharp(file)
        .resize({ width: 1200, height: 630, fit: "contain", background: "#f8fafc" })
        .flatten({ background: "#f8fafc" })
        .jpeg({ quality: 82, mozjpeg: true })
        .toFile(output);
      written++;
    }
  }
}

console.log(`generate-images: ${written} file(s) written to public/_img`);
