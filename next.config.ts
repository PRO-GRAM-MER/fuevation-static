import type { NextConfig } from "next";

// Set at build time for sub-path hosting (e.g. "/fuevation-static" on GitHub Pages).
// Empty locally, so `next dev` still serves from "/".
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: {
    // Static export has no image optimizer; this loader just prefixes basePath.
    loader: "custom",
    loaderFile: "./lib/image-loader.ts",
  },
};

export default nextConfig;
