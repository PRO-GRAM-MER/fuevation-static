import type { Metadata } from "next";
import { SolutionDetailTemplate } from "@/components/solutions/solution-detail-template";
import type { SolutionDetail } from "@/components/solutions/solution-detail-template";

export const metadata: Metadata = {
  title: "Test Page",
  robots: { index: false, follow: false },
};

// Sandbox page for trying out new ideas before rolling them into a real
// solution page. Starts as a duplicate of electronics-value-recovery.
const data: SolutionDetail = {
  slug: "test-page",
  pageName: "Test Page",
  heroTitle: "Maximize Value From Every Electronics Asset",
  heroDesc:
    "Electronics assets can retain significant value long after their original use or sales cycle has changed. Fuevation helps businesses unlock that value across the electronics lifecycle.",
  heroImage: {
    src: "/images/hero-lifecycle.webp",
    alt: "Electronics Lifecycle Visual Donut",
    width: 500,
    height: 500,
  },
  problemTitle: "Why Value Recovery Matters",
  problemText:
    "Excess, returned, ageing, damaged and end-of-life electronics can create inventory pressure, working-capital lock-up and disposal challenges. The right recovery strategy can turn these assets into renewed commercial and material value.",
  approachText:
    "Fuevation brings a focused solution for electronics value recovery, helping businesses address the commercial, operational and lifecycle challenges associated with their electronics assets-without exposing the proprietary mechanisms behind the service.",
  scopeTitle: "Comprehensive Recovery Pathways",
  scopeItems: [
    { icon: "/images/solutions/evr/scope-01.svg", label: "Excess & Obsolete Inventory" },
    { icon: "/images/solutions/evr/scope-02.svg", label: "Returned & Damaged Electronics" },
    { icon: "/images/solutions/evr/scope-03.svg", label: "Refurbishment Opportunities" },
    { icon: "/images/solutions/evr/scope-04.svg", label: "Inventory Liquidation" },
    { icon: "/images/solutions/evr/scope-05.svg", label: "Parts & Component Recovery" },
    { icon: "/images/sol-icon-10-battery-recycling.svg", label: "End-of-Life Electronics" },
  ],
  outcomesTitle: "Measurable Impact Across Recovery Programs",
  outcomesItems: [
    { icon: "/images/solutions/evr/outcome-01.svg", label: "Higher Recovery Potential" },
    { icon: "/images/solutions/evr/outcome-02.svg", label: "Reduced Inventory & Disposal Pressure" },
    { icon: "/images/icon-cap-refurbishment.svg", label: "Extended Product Lifecycles" },
    { icon: "/images/solutions/evr/outcome-04.svg", label: "Better Visibility Across Recovery Programs" },
    { icon: "/images/solutions/evr/outcome-05.svg", label: "Responsible End-of-Life Management" },
  ],
  industriesItems: [
    { icon: "/images/solutions/evr/industry-01.svg", label: "Manufacturers" },
    { icon: "/images/solutions/evr/industry-02.svg", label: "OEMs / ODMs / EMS" },
    { icon: "/images/solutions/evr/industry-03.svg", label: "Retailers & Distributors" },
    { icon: "/images/solutions/evr/industry-04.svg", label: "Enterprises" },
    { icon: "/images/solutions/evr/industry-05.svg", label: "Telecom & Technology" },
    { icon: "/images/icon-ind-insurance.svg", label: "Insurance & Asset Owners" },
  ],
  relatedItems: [
    { icon: "/images/solutions/evr/scope-04.svg", label: "Inventory Liquidation", slug: "inventory-liquidation" },
    { icon: "/images/sol-icon-01-value-recovery.svg", label: "Electronics Refurbishment", slug: "electronics-refurbishment" },
    { icon: "/images/sol-icon-09-parts-harvesting.svg", label: "Excess Inventory Management", slug: "excess-inventory-management" },
    { icon: "/images/solutions/evr/related-04.svg", label: "EOL Inventory Management", slug: "eol-inventory-management" },
    { icon: "/images/sol-icon-06-corporate-ewaste.svg", label: "E-Waste Management", slug: "e-waste-management" },
  ],
  faqItems: [
    {
      q: "What is electronics value recovery?",
      a: "Electronics value recovery is the process of identifying and maximizing the remaining commercial, component and material value in electronics assets.",
    },
    {
      q: "Which electronics assets can be considered?",
      a: "Devices, accessories, components, excess inventory, returned products, damaged electronics and end-of-life assets can be considered, subject to the program scope.",
    },
    {
      q: "Is value recovery the same as recycling?",
      a: "No. Recycling is one possible end-of-life pathway. Value recovery takes a broader lifecycle view that can include reuse, refurbishment, liquidation, parts recovery and recycling.",
    },
    {
      q: "How does electronics value recovery work?",
      a: "Assets are assessed and directed to the most suitable recovery pathway, such as refurbishment, liquidation, parts recovery or recycling.",
    },
    {
      q: "What types of electronics can be recovered?",
      a: "Devices, accessories, components, excess inventory, returned, damaged and end-of-life electronics can be considered.",
    },
    {
      q: "Can excess and obsolete inventory be recovered?",
      a: "Yes. Assets can be evaluated for liquidation, refurbishment, resale, parts recovery or recycling.",
    },
    {
      q: "Can damaged or returned electronics be recovered?",
      a: "Yes. They can be assessed for refurbishment, resale, parts recovery or other suitable recovery options.",
    },
    {
      q: "What happens to non-refurbishable electronics?",
      a: "They may be directed toward parts recovery or responsible recycling, depending on their condition.",
    },
    {
      q: "What are the benefits of electronics value recovery?",
      a: "It can reduce inventory pressure, extend product lifecycles and unlock additional asset value.",
    },
    {
      q: "Who can use electronics value recovery solutions?",
      a: "Manufacturers, OEMs, retailers, distributors, enterprises, telecom companies and asset owners.",
    },
  ],
};

export default function TestPage() {
  return <SolutionDetailTemplate data={data} />;
}
