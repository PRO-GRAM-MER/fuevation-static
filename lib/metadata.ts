import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/site-config";

/**
 * 1200×630 JPG share image generated at build time from a source image in
 * public/images (see scripts/generate-images.mjs). JPG rather than WebP
 * because some platforms (LinkedIn, older WhatsApp) don't preview WebP.
 */
export function shareImage(src: string) {
  const name = src.split("/").pop()!.replace(/\.[^.]+$/, "");
  return `/_img/og/${name}.jpg`;
}

/**
 * Per-page metadata. Next merges metadata shallowly, so a page that sets
 * `openGraph` or `twitter` replaces the layout's object entirely; building both
 * here keeps every page's share card complete and page-specific.
 */
export function pageMetadata({
  title,
  description,
  path,
  image,
}: {
  /** Page title without the " | Fuevation" suffix. */
  title: string;
  description: string;
  path: string;
  image: { src: string; alt: string };
}): Metadata {
  const url = path === "/" ? "/" : `${path.replace(/\/$/, "")}/`;
  const images = [{ url: shareImage(image.src), width: 1200, height: 630, alt: image.alt }];
  return {
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      locale: "en_IN",
      url,
      title,
      description,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images,
    },
  };
}
