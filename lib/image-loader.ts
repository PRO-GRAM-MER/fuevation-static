"use client";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/**
 * Static export has no image optimizer, so next/image is pointed at the
 * resized WebP variants that scripts/generate-images.mjs builds into
 * public/_img (one per width in next.config.ts images.deviceSizes/imageSizes).
 */
export default function imageLoader({ src, width }: { src: string; width: number }) {
  // Remote images pass through untouched.
  if (!src.startsWith("/")) return src;
  // SVGs are resolution-independent; serve as-is.
  if (!src.startsWith("/images/") || src.endsWith(".svg")) return `${basePath}${src}`;
  const variant = src.replace(/^\/images\//, "/_img/").replace(/\.(webp|png|jpe?g)$/i, "");
  return `${basePath}${variant}-${width}.webp`;
}
