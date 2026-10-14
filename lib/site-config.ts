export const SITE_NAME = "Fuevation";
export const SITE_URL = "https://fuevation.com";

// Dummy placeholders — swap via env vars once real GTM/GA4 IDs exist, no code change needed.
export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || "GTM-MPVXSRQX";
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-CE972TT69Y";

export const SITE_DESCRIPTION =
  "Fuevation (featuring MobiGarage) is India's leading circular electronics value recovery platform. We enable brands, OEMs, and enterprises to maximize recovery through refurbishment, parts harvesting, and recycling.";

export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: "About", href: "/#about" },
  { label: "Solutions", href: "/#capabilities" },
  { label: "Framework", href: "/#framework" },
  { label: "Technology", href: "/#technology" },
  { label: "Why Us", href: "/#why-choose" },
  { label: "Impact", href: "/#impact" },
];

export const QUICK_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Solutions", href: "/#capabilities" },
  { label: "Industries", href: "/#industries" },
  { label: "FrameWork", href: "/#framework" },
  { label: "Technology", href: "/#technology" },
];

export const SOLUTIONS_LINKS: NavLink[] = [
  { label: "Refurbishment", href: "/solutions/electronics-refurbishment" },
  { label: "Liquidation", href: "/solutions/inventory-liquidation" },
  { label: "Parts Harvesting", href: "/solutions/parts-harvesting" },
  { label: "Reverse Logistics", href: "/solutions/reverse-logistics" },
  { label: "EPR Compliance", href: "/solutions/epr-compliance" },
  { label: "Recycling", href: "/solutions/battery-recycling" },
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
