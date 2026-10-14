"use client";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function imageLoader({ src, width }: { src: string; width: number }) {
  // Remote images pass through untouched; local ones need the sub-path prefix.
  if (!src.startsWith("/")) return src;
  return `${basePath}${src}?w=${width}`;
}
