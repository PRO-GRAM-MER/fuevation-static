"use client";

import { useEffect } from "react";
import { trackSolutionPageView } from "@/lib/analytics";

export function SolutionPageView({ slug, pageName }: { slug: string; pageName: string }) {
  useEffect(() => {
    trackSolutionPageView(slug, pageName);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  return null;
}
