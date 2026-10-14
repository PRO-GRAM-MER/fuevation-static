import type { NextConfig } from "next";

// Set at build time for sub-path hosting (e.g. "/fuevation-static" on GitHub Pages).
// Empty locally, so `next dev` still serves from "/".
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: {
    // Static export has no image optimizer; this loader maps each width to a
    // variant pre-built by scripts/generate-images.mjs (keep WIDTHS in sync).
    loader: "custom",
    loaderFile: "./lib/image-loader.ts",
    deviceSizes: [640, 828, 1200, 1920],
    imageSizes: [64, 128, 256, 384],
  },
};

export default nextConfig;
