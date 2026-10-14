import { SOLUTION_DETAILS } from "@/lib/solution-details-data";
import type { NavLink } from "@/lib/site-config";

export interface SolutionListing {
  slug: string;
  num: string;
  title: string;
  subtitle: string;
  desc: string;
  icon: string;
}

// Derived from SOLUTION_DETAILS so the hub cards, footer links and solution
// pages can never drift apart.
export const SOLUTIONS: SolutionListing[] = Object.values(SOLUTION_DETAILS).map((detail) => ({
  slug: detail.slug,
  ...detail.card,
}));

export const SOLUTIONS_LINKS: NavLink[] = Object.values(SOLUTION_DETAILS).map((detail) => ({
  label: detail.card.subtitle,
  href: `/solutions/${detail.slug}`,
}));
