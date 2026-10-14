import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site-config";
import { SOLUTION_DETAILS } from "@/lib/solution-details-data";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["/", "/solutions", ...Object.keys(SOLUTION_DETAILS).map((slug) => `/solutions/${slug}`)];

  // No lastModified: a build timestamp would mark every page as changed on every deploy.
  return routes.map((route) => ({ url: absoluteUrl(route) }));
}
