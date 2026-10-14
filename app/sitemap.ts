import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site-config";
import { SOLUTION_DETAILS } from "@/lib/solution-details-data";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/solutions", ...Object.keys(SOLUTION_DETAILS).map((slug) => `/solutions/${slug}`)];

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
  }));
}
