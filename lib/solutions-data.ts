export interface SolutionListing {
  slug: string;
  num: string;
  title: string;
  subtitle: string;
  desc: string;
  icon: string;
}

export const SOLUTIONS: SolutionListing[] = [
  {
    slug: "electronics-value-recovery",
    num: "01",
    title: "Extend Product Life",
    subtitle: "Electronics Value Recovery",
    desc: "Restore functional electronics through diagnostics, precision repair, cosmetic restoration, and certified grading to maximize secondary market resale value and extend usable device life.",
    icon: "/images/sol-icon-01-value-recovery.svg",
  },
  {
    slug: "inventory-liquidation",
    num: "02",
    title: "Unlock Working Capitals",
    subtitle: "Inventory Liquidation Solutions",
    desc: "Convert excess inventory, customer returns, DOA units, slow-moving inventory, and obsolete models into recovered capital via transparent, controlled B2B marketplace liquidation.",
    icon: "/images/sol-icon-02-liquidation.svg",
  },
  {
    slug: "electronics-refurbishment",
    num: "03",
    title: "Maximize Component Recovery",
    subtitle: "Electronics Refurbishment",
    desc: "Harvest and test functional components-such as displays, motherboards, camera modules, sensors, and power units-from damaged or end-of-life devices to reintroduce high-demand OEM spare parts.",
    icon: "/images/sol-icon-03-refurbishment.svg",
  },
  {
    slug: "excess-inventory-management",
    num: "04",
    title: "Strategic Value Realization",
    subtitle: "Excess Inventory Management",
    desc: "Comprehensive evaluation, grading, and routing that maximizes economic recovery from mixed electronic asset streams, ensuring each product achieves the optimal yield across its lifecycle.",
    icon: "/images/sol-icon-04-excess-inventory.svg",
  },
  {
    slug: "eol-inventory-management",
    num: "05",
    title: "Build Smarter Reverse Supply Chains",
    subtitle: "EOL Inventory Management",
    desc: "Operate specialized reverse logistics networks with end-to-end serialized tracking, fast pickup turnaround, custody transfer control, and optimized routing across all major hubs in India.",
    icon: "/images/sol-icon-05-eol-inventory.svg",
  },
  {
    slug: "e-waste-management",
    num: "06",
    title: "Responsible Asset Decommissioning",
    subtitle: "Corporate E-Waste Management",
    desc: "Secure enterprise IT asset disposition (ITAD) featuring certified data destruction, serialized audit trails, green certificates, and compliant recycling for corporate IT hardware.",
    icon: "/images/sol-icon-06-corporate-ewaste.svg",
  },
  {
    slug: "epr-compliance",
    num: "07",
    title: "Recover Critical Materials Safely",
    subtitle: "EPR Compliance",
    desc: "Safe collection, handling, and closed-loop material extraction for lithium-ion and device batteries, reclaiming high-grade cobalt, lithium, and nickel with environmental compliance.",
    icon: "/images/sol-icon-07-epr-compliance.svg",
  },
  {
    slug: "reverse-logistics",
    num: "08",
    title: "Simplify Environmental Compliance",
    subtitle: "Electronics Reverse Logistics",
    desc: "Turn Extended Producer Responsibility (EPR) regulations into a competitive advantage with certified collection targets, CPCB portal integration, audit-proof reporting, and credit fulfillment.",
    icon: "/images/sol-icon-08-reverse-logistics.svg",
  },
  {
    slug: "parts-harvesting",
    num: "09",
    title: "Prevent Inventory Value Decay",
    subtitle: "Electronics Parts Harvesting",
    desc: "Active inventory clearance strategies for OEMs, distributors, and retailers dealing with surplus stock, cancelled orders, and shelf pullbacks before assets depreciate or become obsolete.",
    icon: "/images/sol-icon-09-parts-harvesting.svg",
  },
  {
    slug: "battery-recycling",
    num: "10",
    title: "Recover Value Beyond Product EOL",
    subtitle: "Battery Recycling & Recovery",
    desc: "Systematic asset teardown, testing, parts salvage, and responsible recycling for discontinued, legacy, and non-working electronics, extracting remaining value before certified disposal.",
    icon: "/images/sol-icon-10-battery-recycling.svg",
  },
];
