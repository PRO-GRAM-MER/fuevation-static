export const SITE_NAME = "Fuevation";
export const SITE_URL = "https://fuevation.com";

/** Absolute production URL for a route, with the trailing slash the static export serves. */
export function absoluteUrl(path: string) {
  return `${SITE_URL}${path === "/" ? "/" : `${path.replace(/\/$/, "")}/`}`;
}

// "preview" builds (the GitHub Pages copy) are noindex and load no analytics,
// so preview traffic never reaches the production GTM/GA4 properties.
export const IS_PREVIEW = process.env.NEXT_PUBLIC_SITE_ENV === "preview";

// Analytics only loads when an ID is provided at build time (see README → Configuration).
export const GTM_ID = IS_PREVIEW ? "" : process.env.NEXT_PUBLIC_GTM_ID || "";
export const GA_ID = IS_PREVIEW ? "" : process.env.NEXT_PUBLIC_GA_ID || "";

export const HOME_TITLE = `${SITE_NAME} | Circular Electronics Value Recovery`;

export const SITE_DESCRIPTION =
  "Fuevation (featuring MobiGarage) is India's leading circular electronics value recovery platform. We enable brands, OEMs, and enterprises to maximize recovery through refurbishment, parts harvesting, and recycling.";

export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: "About", href: "/#about" },
  { label: "Solutions", href: "/solutions" },
  { label: "Framework", href: "/#framework" },
  { label: "Technology", href: "/#technology" },
  { label: "Why Us", href: "/#why-choose" },
  { label: "Impact", href: "/#impact" },
];

export const QUICK_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Solutions", href: "/solutions" },
  { label: "Industries", href: "/#industries" },
  { label: "Framework", href: "/#framework" },
  { label: "Technology", href: "/#technology" },
];

export const CONTACT = {
  phoneDisplay: "+91 9311094510",
  phoneHref: "tel:+919311094510",
  email: "Contact@fuevation.com",
  addressLines: [
    "CGN-181, DLF Capital Greens,",
    "15 Shivaji Marg,",
    "New Delhi – 110015, India",
  ],
};
