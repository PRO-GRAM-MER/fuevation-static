import type { SolutionDetail } from "@/components/solutions/solution-detail-template";

export const SOLUTION_DETAILS: Record<string, SolutionDetail> = {
  "electronics-value-recovery": {
    slug: "electronics-value-recovery",
    pageName: "Electronics Value Recovery",
    card: {
      num: "01",
      title: "Strategic Value Realization",
      subtitle: "Electronics Value Recovery",
      desc: "Comprehensive evaluation, grading, and routing that maximizes economic recovery from mixed electronic asset streams, ensuring each product achieves the optimal yield across its lifecycle.",
      icon: "/images/sol-icon-01-value-recovery.svg",
    },
    metaTitle: "Electronics Value Recovery Solutions",
    metaDescription:
      "Recover maximum value from excess, returned, damaged and end-of-life electronics through refurbishment, liquidation, parts recovery and recycling.",
    heroTitle: "Maximize Value From Every Electronics Asset",
    heroDesc:
      "Electronics assets can retain significant value long after their original use or sales cycle has changed. Fuevation helps businesses unlock that value across the electronics lifecycle.",
    heroImage: {
      src: "/images/hero-lifecycle.webp",
      alt: "Electronics Lifecycle Visual Donut",
      width: 850,
      height: 850,
    },
    problemTitle: "Why Value Recovery Matters",
    problemText:
      "Excess, returned, ageing, damaged and end-of-life electronics can create inventory pressure, working-capital lock-up and disposal challenges. The right recovery strategy can turn these assets into renewed commercial and material value.",
    approachText:
      "Fuevation brings a focused solution for electronics value recovery, helping businesses address the commercial, operational and lifecycle challenges associated with their electronics assets.",
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
  },
  "inventory-liquidation": {
    slug: "inventory-liquidation",
    pageName: "Electronics Inventory Liquidation",
    card: {
      num: "02",
      title: "Unlock Working Capital",
      subtitle: "Inventory Liquidation Solutions",
      desc: "Convert excess inventory, customer returns, DOA units, slow-moving inventory, and obsolete models into recovered capital via transparent, controlled B2B marketplace liquidation.",
      icon: "/images/sol-icon-02-liquidation.svg",
    },
    metaTitle: "Electronics Inventory Liquidation",
    metaDescription:
      "Liquidate excess, obsolete, returned and slow-moving electronics through refurbishment, remarketing and B2B recovery.",
    heroTitle: "Recover Value From Excess & Obsolete Electronics Inventory",
    heroDesc:
      "Turn excess, obsolete and slow-moving electronics inventory into an opportunity for value recovery.",
    heroImage: {
      src: "/images/inventory-liquidation-hero.webp",
      alt: "Electronics Liquidation Process",
      width: 800,
      height: 800,
    },
    problemTitle: "The Need for Electronics Inventory Liquidation",
    problemText:
      "Ageing inventory can tie up working capital, consume storage capacity and lose value as products, models and market demand change. Fuevation helps businesses address electronics inventory liquidation as a value-recovery challenge—not simply a disposal exercise.",
    approachText:
      "Fuevation brings a focused solution for electronics inventory liquidation, helping businesses address the commercial, operational and lifecycle challenges associated with their electronics assets.",
    scopeTitle: "Comprehensive Liquidation Pathways",
    scopeItems: [
      { icon: "/images/solutions/liq/scope-01.svg", label: "Excess Stock" },
      { icon: "/images/solutions/liq/scope-02.svg", label: "Obsolete Inventory" },
      { icon: "/images/solutions/liq/scope-03.svg", label: "Slow-Moving Stock" },
      { icon: "/images/solutions/liq/scope-04.svg", label: "Returned Inventory" },
      { icon: "/images/solutions/liq/scope-05.svg", label: "Damaged Inventory" },
      { icon: "/images/solutions/liq/scope-06.svg", label: "Accessories & Spares" },
    ],
    outcomesTitle: "Measurable Impact Across Liquidation Programs",
    outcomesItems: [
      { icon: "/images/solutions/liq/outcome-01.svg", label: "Release Working Capital" },
      { icon: "/images/solutions/liq/outcome-02.svg", label: "Reduce Ageing Stock Exposure" },
      { icon: "/images/solutions/liq/outcome-03.svg", label: "Limit Inventory Value Erosion" },
      { icon: "/images/solutions/liq/outcome-04.svg", label: "Create Structured B2B Recovery Opportunities" },
      { icon: "/images/solutions/liq/outcome-05.svg", label: "Improve Surplus-Asset Visibility" },
    ],
    industriesItems: [
      { icon: "/images/solutions/liq/industry-01.svg", label: "Electronics Manufacturers" },
      { icon: "/images/solutions/liq/industry-02.svg", label: "OEM / ODM / EMS" },
      { icon: "/images/solutions/liq/industry-03.svg", label: "Retail & Distribution" },
      { icon: "/images/solutions/liq/industry-04.svg", label: "Importers & Wholesalers" },
      { icon: "/images/solutions/liq/industry-05.svg", label: "Enterprises" },
      { icon: "/images/solutions/liq/industry-06.svg", label: "Technology Businesses" },
    ],
    relatedItems: [
      { icon: "/images/sol-icon-04-excess-inventory.svg", label: "Excess Inventory Management", slug: "excess-inventory-management" },
      { icon: "/images/sol-icon-05-eol-inventory.svg", label: "EOL Inventory Management", slug: "eol-inventory-management" },
      { icon: "/images/sol-icon-03-refurbishment.svg", label: "Electronics Refurbishment", slug: "electronics-refurbishment" },
      { icon: "/images/sol-icon-01-value-recovery.svg", label: "Electronics Value Recovery", slug: "electronics-value-recovery" },
      { icon: "/images/sol-icon-08-reverse-logistics.svg", label: "Reverse Logistics", slug: "reverse-logistics" },
    ],
    faqItems: [
      {
        q: "What is electronics inventory liquidation?",
        a: "It is the structured recovery and disposition of excess, obsolete, returned or slow-moving electronics inventory through appropriate commercial and recovery channels.",
      },
      {
        q: "What types of inventory can be liquidated?",
        a: "Devices, accessories, components, returned stock, discontinued products and excess inventory can be considered.",
      },
      {
        q: "Can obsolete electronics still have value?",
        a: "Yes. Even when a product is no longer commercially relevant in its original form, it may retain resale, refurbishment, component or material value.",
      },
      {
        q: "How does electronics inventory liquidation work?",
        a: "Inventory is assessed and directed through suitable channels such as resale, refurbishment or B2B recovery.",
      },
      {
        q: "Can slow-moving electronics be liquidated?",
        a: "Yes. Slow-moving stock can be evaluated for appropriate liquidation and value-recovery opportunities.",
      },
      {
        q: "Can returned electronics be included in liquidation?",
        a: "Yes. Returned inventory can be assessed for resale, refurbishment or other recovery options.",
      },
      {
        q: "Can damaged inventory be liquidated?",
        a: "Yes. Damaged stock can be evaluated for recovery through refurbishment, parts recovery or suitable liquidation channels.",
      },
      {
        q: "Does liquidation help reduce inventory ageing?",
        a: "Yes. Timely liquidation can help reduce ageing stock and limit further value erosion.",
      },
      {
        q: "Can accessories and spare parts be liquidated?",
        a: "Yes. Excess accessories, components and spare parts can be considered for structured liquidation.",
      },
      {
        q: "Who can use electronics inventory liquidation solutions?",
        a: "Manufacturers, OEMs, distributors, retailers, importers, wholesalers and technology businesses can use these solutions.",
      },
    ],
  },
  "electronics-refurbishment": {
    slug: "electronics-refurbishment",
    pageName: "Electronics Refurbishment",
    card: {
      num: "03",
      title: "Extend Product Life",
      subtitle: "Electronics Refurbishment",
      desc: "Restore functional electronics through diagnostics, precision repair, cosmetic restoration, and certified grading to maximize secondary market resale value and extend usable device life.",
      icon: "/images/sol-icon-03-refurbishment.svg",
    },
    metaTitle: "Electronics Refurbishment Services",
    metaDescription:
      "Extend device life and recover value through diagnostics, repair, refurbishment, grading and resale.",
    heroTitle: "Electronics Refurbishment & Repair",
    heroDesc:
      "Extend the life of electronics and give products a renewed commercial opportunity.",
    heroImage: {
      src: "/images/electronics-refurbishment-hero.webp",
      alt: "Electronics Refurbishment",
      width: 800,
      height: 800,
    },
    problemTitle: "The Value of Electronics Refurbishment",
    problemText:
      "Returned, used and damaged electronics are often treated as low-value assets even when they can continue serving users after appropriate restoration. Fuevation supports electronics refurbishment programs designed to extend product life and recover commercial value.",
    approachText:
      "Fuevation brings a focused solution for electronics refurbishment, helping businesses address the commercial, operational and lifecycle challenges associated with their electronics assets.",
    scopeTitle: "What We Refurbish",
    scopeItems: [
      { icon: "/images/solutions/refurb/scope-01.svg", label: "Smartphones & Devices" },
      { icon: "/images/solutions/refurb/scope-02.svg", label: "Tablets & Laptops" },
      { icon: "/images/solutions/refurb/scope-03.svg", label: "Consumer Electronics" },
      { icon: "/images/solutions/refurb/scope-04.svg", label: "Accessories" },
      { icon: "/images/solutions/refurb/scope-05.svg", label: "Components" },
      { icon: "/images/solutions/refurb/scope-06.svg", label: "B2B Refurbished Inventory" },
    ],
    outcomesTitle: "Value Delivered",
    outcomesItems: [
      { icon: "/images/solutions/refurb/outcome-01.svg", label: "Longer Product Lifecycles" },
      { icon: "/images/solutions/refurb/outcome-02.svg", label: "Recovered Commercial Value" },
      { icon: "/images/solutions/refurb/outcome-03.svg", label: "Reduced Premature Disposal" },
      { icon: "/images/solutions/refurb/outcome-04.svg", label: "Additional Refurbished Supply" },
      { icon: "/images/solutions/refurb/outcome-05.svg", label: "Greater Reuse of Existing Resources" },
    ],
    industriesItems: [
      { icon: "/images/solutions/refurb/industry-01.svg", label: "OEMs" },
      { icon: "/images/solutions/refurb/industry-02.svg", label: "Retailers" },
      { icon: "/images/solutions/refurb/industry-03.svg", label: "Distributors" },
      { icon: "/images/solutions/refurb/industry-04.svg", label: "Enterprises" },
      { icon: "/images/solutions/refurb/industry-05.svg", label: "Insurers" },
      { icon: "/images/solutions/refurb/industry-06.svg", label: "Repair & Refurbishment Ecosystems" },
    ],
    relatedItems: [
      { icon: "/images/sol-icon-01-value-recovery.svg", label: "Electronics Value Recovery", slug: "electronics-value-recovery" },
      { icon: "/images/sol-icon-02-liquidation.svg", label: "Inventory Liquidation", slug: "inventory-liquidation" },
      { icon: "/images/sol-icon-09-parts-harvesting.svg", label: "Parts Harvesting", slug: "parts-harvesting" },
      { icon: "/images/sol-icon-08-reverse-logistics.svg", label: "Reverse Logistics", slug: "reverse-logistics" },
      { icon: "/images/sol-icon-06-corporate-ewaste.svg", label: "E-Waste Management", slug: "e-waste-management" },
    ],
    faqItems: [
      {
        q: "What is electronics refurbishment?",
        a: "It is the restoration of used, returned or damaged electronics so they can potentially be returned to productive use.",
      },
      {
        q: "What devices can be refurbished?",
        a: "Smartphones, tablets, laptops, consumer electronics and other devices may be considered depending on condition and program requirements.",
      },
      {
        q: "Why refurbish instead of recycle?",
        a: "Refurbishment can extend useful life and preserve more existing economic value before material recycling becomes necessary.",
      },
      {
        q: "How does electronics refurbishment work?",
        a: "Devices are assessed, diagnosed, repaired and tested before being graded for potential reuse or resale.",
      },
      {
        q: "Can damaged electronics be refurbished?",
        a: "Yes. Damaged devices can be assessed to determine their suitability for repair and refurbishment.",
      },
      {
        q: "Can returned electronics be refurbished?",
        a: "Yes. Returned products can be evaluated, restored and prepared for potential reuse or resale.",
      },
      {
        q: "Does refurbishment extend product life?",
        a: "Yes. Refurbishment can extend the useful life of electronics and delay premature disposal.",
      },
      {
        q: "What is included in electronics refurbishment?",
        a: "Depending on the asset, refurbishment may include diagnostics, repair, testing, cleaning and grading.",
      },
      {
        q: "Can refurbished electronics be used for B2B requirements?",
        a: "Yes. Refurbished devices and components can support B2B supply and asset-recovery requirements.",
      },
      {
        q: "Who can use electronics refurbishment services?",
        a: "OEMs, retailers, distributors, enterprises, insurers and refurbishment ecosystems can use these services.",
      },
    ],
  },
  "excess-inventory-management": {
    slug: "excess-inventory-management",
    pageName: "Excess Electronics Inventory Management",
    card: {
      num: "04",
      title: "Prevent Inventory Value Decay",
      subtitle: "Excess Inventory Management",
      desc: "Active inventory clearance strategies for OEMs, distributors, and retailers dealing with surplus stock, cancelled orders, and shelf pullbacks before assets depreciate or become obsolete.",
      icon: "/images/sol-icon-04-excess-inventory.svg",
    },
    metaTitle: "Excess Electronics Inventory Management",
    metaDescription:
      "Recover working capital from excess electronics inventory through assessment, refurbishment, remarketing, liquidation and responsible recovery.",
    heroTitle: "Turn Excess Electronics Inventory Into Recoverable Value",
    heroDesc: "Your excess inventory should not automatically become a write-off.",
    heroImage: {
      src: "/images/excess-inventory-hero.webp",
      alt: "Excess electronics inventory management and value recovery",
      width: 800,
      height: 800,
    },
    problemTitle: "Excess Inventory Management",
    problemText:
      "Demand changes, product transitions, procurement decisions and channel dynamics can leave businesses holding more electronics inventory than they need. Fuevation helps create a structured value-recovery program before further ageing reduces potential.",
    approachText:
      "Fuevation brings a focused solution for excess electronics inventory, helping businesses address the commercial, operational and lifecycle challenges associated with their electronics assets.",
    scopeTitle: "What We Handle",
    scopeItems: [
      { icon: "/images/solutions/excess/scope-01.svg", label: "Surplus Inventory" },
      { icon: "/images/solutions/excess/scope-02.svg", label: "Slow-Moving Inventory" },
      { icon: "/images/solutions/excess/scope-03.svg", label: "Product Transitions" },
      { icon: "/images/solutions/excess/scope-04.svg", label: "Channel Returns" },
      { icon: "/images/solutions/excess/scope-05.svg", label: "Discontinued Products" },
      { icon: "/images/solutions/excess/scope-06.svg", label: "Accessories & Components" },
    ],
    outcomesTitle: "Value Delivered",
    outcomesItems: [
      { icon: "/images/solutions/excess/outcome-01.svg", label: "Reduced Inventory Exposure" },
      { icon: "/images/solutions/excess/outcome-02.svg", label: "Improved Working-Capital Recovery" },
      { icon: "/images/solutions/excess/outcome-03.svg", label: "Lower Storage Burden" },
      { icon: "/images/solutions/excess/outcome-04.svg", label: "Reduced Obsolescence Risk" },
      { icon: "/images/solutions/excess/outcome-05.svg", label: "Structured Recovery Visibility" },
    ],
    industriesItems: [
      { icon: "/images/solutions/excess/industry-01.svg", label: "Manufacturers" },
      { icon: "/images/solutions/excess/industry-02.svg", label: "OEMs / ODMs / EMS" },
      { icon: "/images/solutions/excess/industry-03.svg", label: "Retailers" },
      { icon: "/images/solutions/excess/industry-04.svg", label: "Distributors" },
      { icon: "/images/solutions/excess/industry-05.svg", label: "Technology Companies" },
      { icon: "/images/solutions/excess/industry-06.svg", label: "Enterprises" },
    ],
    relatedItems: [
      { icon: "/images/sol-icon-02-liquidation.svg", label: "Inventory Liquidation", slug: "inventory-liquidation" },
      { icon: "/images/sol-icon-05-eol-inventory.svg", label: "EOL Inventory Management", slug: "eol-inventory-management" },
      { icon: "/images/sol-icon-03-refurbishment.svg", label: "Electronics Refurbishment", slug: "electronics-refurbishment" },
      { icon: "/images/sol-icon-01-value-recovery.svg", label: "Electronics Value Recovery", slug: "electronics-value-recovery" },
      { icon: "/images/sol-icon-08-reverse-logistics.svg", label: "Reverse Logistics", slug: "reverse-logistics" },
    ],
    faqItems: [
      {
        q: "What is excess electronics inventory?",
        a: "Electronics stock that is surplus to current requirements, including slow-moving, excess, returned or discontinued inventory.",
      },
      {
        q: "Why is excess inventory a problem?",
        a: "It can tie up capital, consume storage, increase ageing risk and lose value as products and demand change.",
      },
      {
        q: "Can excess inventory be recovered instead of written off?",
        a: "In many cases, recovery can involve remarketing, refurbishment, liquidation, reuse, parts recovery or recycling.",
      },
      {
        q: "How is excess electronics inventory assessed?",
        a: "Inventory can be reviewed based on product type, condition, quantity, age and potential recovery options.",
      },
      {
        q: "What types of excess electronics inventory can be managed?",
        a: "Surplus, slow-moving, discontinued, returned products, accessories and components can be considered.",
      },
      {
        q: "Can slow-moving inventory be recovered?",
        a: "Yes. Slow-moving stock can be evaluated for remarketing, refurbishment, liquidation or other recovery options.",
      },
      {
        q: "Can discontinued electronics still have value?",
        a: "Yes. Depending on condition and demand, discontinued products may have resale, refurbishment, parts or material value.",
      },
      {
        q: "How can excess inventory reduce working-capital pressure?",
        a: "Structured recovery can help convert surplus stock into potential value and reduce inventory holding exposure.",
      },
      {
        q: "Can returned inventory be included in excess inventory management?",
        a: "Yes. Channel and customer returns can be assessed for reuse, refurbishment, remarketing or liquidation.",
      },
      {
        q: "Who can use excess electronics inventory management solutions?",
        a: "Manufacturers, OEMs, retailers, distributors, technology companies and enterprises can use these solutions.",
      },
    ],
  },
  "eol-inventory-management": {
    slug: "eol-inventory-management",
    pageName: "EOL Electronics Inventory Management",
    card: {
      num: "05",
      title: "Recover Value Beyond Product EOL",
      subtitle: "EOL Inventory Management",
      desc: "Systematic asset teardown, testing, parts salvage, and responsible recycling for discontinued, legacy, and non-working electronics, extracting remaining value before certified disposal.",
      icon: "/images/sol-icon-05-eol-inventory.svg",
    },
    metaTitle: "EOL Electronics Inventory Management",
    metaDescription:
      "Manage EOL electronics through a reuse-first recovery process covering refurbishment, liquidation, parts harvesting and recycling.",
    heroTitle: "End-of-Life Electronics Inventory Recovery",
    heroDesc: "Product end-of-life does not always mean value end-of-life.",
    heroImage: {
      src: "/images/eol-electronics-inventory-recovery.webp",
      alt: "EOL electronics inventory recovery",
      width: 1685,
      height: 933,
    },
    problemTitle: "Managing the Value of End-of-Life Inventory",
    problemText:
      "When products are discontinued or reach the end of their planned commercial lifecycle, inventory can become harder to sell and increasingly exposed to obsolescence. Fuevation helps preserve remaining commercial, component and material value.",
    approachText:
      "Fuevation brings a focused solution for EOL inventory management, helping businesses address the commercial, operational and lifecycle challenges associated with their electronics assets.",
    scopeTitle: "What We Handle",
    scopeItems: [
      { icon: "/images/solutions/eol/scope-01.svg", label: "Discontinued Products" },
      { icon: "/images/solutions/eol/scope-02.svg", label: "Legacy Devices" },
      { icon: "/images/solutions/eol/scope-03.svg", label: "EOL Accessories" },
      { icon: "/images/solutions/eol/scope-04.svg", label: "Returned EOL Stock" },
      { icon: "/images/solutions/eol/scope-05.svg", label: "Spare Parts" },
      { icon: "/images/solutions/eol/scope-06.svg", label: "Material Recovery" },
    ],
    outcomesTitle: "Value Delivered",
    outcomesItems: [
      { icon: "/images/solutions/eol/outcome-01.svg", label: "Reduce EOL Inventory Exposure" },
      { icon: "/images/solutions/eol/outcome-02.svg", label: "Recover Residual Value" },
      { icon: "/images/solutions/eol/outcome-03.svg", label: "Reduce Unnecessary Disposal" },
      { icon: "/images/solutions/eol/outcome-04.svg", label: "Support Responsible Lifecycle Closure" },
      { icon: "/images/solutions/eol/outcome-05.svg", label: "Improve EOL Inventory Visibility" },
    ],
    industriesItems: [
      { icon: "/images/solutions/eol/industry-01.svg", label: "Electronics Manufacturers" },
      { icon: "/images/solutions/eol/industry-02.svg", label: "OEM / ODM / EMS" },
      { icon: "/images/solutions/eol/industry-03.svg", label: "Retailers" },
      { icon: "/images/solutions/eol/industry-04.svg", label: "Distributors" },
      { icon: "/images/solutions/eol/industry-05.svg", label: "Enterprises" },
      { icon: "/images/solutions/eol/industry-06.svg", label: "Technology Companies" },
    ],
    relatedItems: [
      { icon: "/images/sol-icon-04-excess-inventory.svg", label: "Excess Inventory Management", slug: "excess-inventory-management" },
      { icon: "/images/sol-icon-02-liquidation.svg", label: "Inventory Liquidation", slug: "inventory-liquidation" },
      { icon: "/images/sol-icon-03-refurbishment.svg", label: "Electronics Refurbishment", slug: "electronics-refurbishment" },
      { icon: "/images/sol-icon-09-parts-harvesting.svg", label: "Parts Harvesting", slug: "parts-harvesting" },
      { icon: "/images/sol-icon-06-corporate-ewaste.svg", label: "E-Waste Management", slug: "e-waste-management" },
    ],
    faqItems: [
      {
        q: "What is EOL inventory management?",
        a: "Management and recovery of electronics inventory approaching or reaching the end of its commercial lifecycle.",
      },
      {
        q: "What happens to EOL electronics?",
        a: "Depending on the asset, opportunities may include reuse, refurbishment, liquidation, component recovery or recycling.",
      },
      {
        q: "Is EOL the same as obsolete?",
        a: "Not always. EOL refers to the end of a planned lifecycle; obsolete describes inventory that has lost practical commercial relevance.",
      },
      {
        q: "How is EOL inventory managed?",
        a: "EOL inventory is assessed and directed toward suitable recovery options such as reuse, refurbishment, liquidation, parts recovery or recycling.",
      },
      {
        q: "Can EOL electronics still have value?",
        a: "Yes, EOL electronics may retain commercial, component or material value depending on their condition.",
      },
      {
        q: "Can discontinued products be recovered?",
        a: "Yes, discontinued products can be evaluated for resale, refurbishment, parts recovery or material recovery.",
      },
      {
        q: "Can EOL inventory be refurbished?",
        a: "Yes, suitable EOL devices can be refurbished and prepared for potential reuse or resale.",
      },
      {
        q: "Can EOL spare parts be recovered?",
        a: "Yes, usable spare parts can be recovered from EOL inventory for further use or resale.",
      },
      {
        q: "Does EOL inventory management reduce e-waste?",
        a: "Reuse, refurbishment and parts recovery can help reduce unnecessary disposal of EOL electronics.",
      },
      {
        q: "Who can use EOL inventory management solutions?",
        a: "Manufacturers, OEMs, distributors, retailers, enterprises and technology companies can use EOL inventory management solutions.",
      },
    ],
  },
  "e-waste-management": {
    slug: "e-waste-management",
    pageName: "Corporate E-Waste Management",
    card: {
      num: "06",
      title: "Responsible Asset Decommissioning",
      subtitle: "Corporate E-Waste Management",
      desc: "Secure enterprise IT asset disposition (ITAD) featuring certified data destruction, serialized audit trails, green certificates, and compliant recycling for corporate IT hardware.",
      icon: "/images/sol-icon-06-corporate-ewaste.svg",
    },
    metaTitle: "Corporate E-Waste Management & Recycling",
    metaDescription:
      "End-to-end e-waste management covering collection, reverse logistics, recovery, recycling and traceability.",
    heroTitle: "Corporate E-Waste Management & Responsible Recycling",
    heroDesc: "Responsible electronics recycling starts with responsible recovery.",
    heroImage: {
      src: "/images/corporate-ewaste-hero.webp",
      alt: "Corporate e-waste management and responsible electronics recycling",
      width: 1273,
      height: 1236,
    },
    problemTitle: "Why Responsible E-Waste Management Matters",
    problemText:
      "Organizations generate electronics waste across devices, IT equipment, accessories, batteries, components and end-of-life assets. Fuevation helps manage electronics at end of life while supporting responsible recovery, recycling and lifecycle closure.",
    approachText:
      "Fuevation brings a focused solution for e-waste management, helping businesses address the commercial, operational and lifecycle challenges associated with their electronics assets.",
    scopeTitle: "What We Handle",
    scopeItems: [
      { icon: "/images/solutions/ewaste/scope-01.svg", label: "Corporate Electronics" },
      { icon: "/images/solutions/ewaste/scope-02.svg", label: "IT & Devices" },
      { icon: "/images/solutions/ewaste/scope-03.svg", label: "Consumer Electronics" },
      { icon: "/images/solutions/ewaste/scope-04.svg", label: "Accessories & Components" },
      { icon: "/images/solutions/ewaste/scope-05.svg", label: "Batteries" },
      { icon: "/images/solutions/ewaste/scope-06.svg", label: "End-of-Life Assets" },
    ],
    outcomesTitle: "Value Delivered",
    outcomesItems: [
      { icon: "/images/solutions/ewaste/outcome-01.svg", label: "Responsible End-of-Life Management" },
      { icon: "/images/solutions/ewaste/outcome-02.svg", label: "Improved Asset Visibility" },
      { icon: "/images/solutions/ewaste/outcome-03.svg", label: "Reduced Disposal Risk" },
      { icon: "/images/solutions/ewaste/outcome-04.svg", label: "Recovery Before Recycling Where Appropriate" },
      { icon: "/images/solutions/ewaste/outcome-05.svg", label: "Traceable Downstream Programs" },
    ],
    industriesItems: [
      { icon: "/images/solutions/ewaste/industry-01.svg", label: "Enterprises" },
      { icon: "/images/solutions/ewaste/industry-02.svg", label: "Manufacturers" },
      { icon: "/images/solutions/ewaste/industry-03.svg", label: "Retailers" },
      { icon: "/images/solutions/ewaste/industry-04.svg", label: "Telecom" },
      { icon: "/images/solutions/ewaste/industry-05.svg", label: "Institutions" },
      { icon: "/images/solutions/ewaste/industry-06.svg", label: "Technology Businesses" },
    ],
    relatedItems: [
      { icon: "/images/sol-icon-07-epr-compliance.svg", label: "EPR Compliance", slug: "epr-compliance" },
      { icon: "/images/sol-icon-01-value-recovery.svg", label: "Electronics Value Recovery", slug: "electronics-value-recovery" },
      { icon: "/images/sol-icon-08-reverse-logistics.svg", label: "Reverse Logistics", slug: "reverse-logistics" },
      { icon: "/images/sol-icon-10-battery-recycling.svg", label: "Battery Recycling", slug: "battery-recycling" },
      { icon: "/images/sol-icon-09-parts-harvesting.svg", label: "Parts Harvesting", slug: "parts-harvesting" },
    ],
    faqItems: [
      {
        q: "What is corporate e-waste management?",
        a: "Structured management of electronic waste generated by organizations, from collection and movement through recovery and responsible recycling.",
      },
      {
        q: "What types of e-waste can businesses manage?",
        a: "Devices, IT equipment, consumer electronics, accessories, components and batteries can be covered subject to program scope.",
      },
      {
        q: "Is e-waste always recycled immediately?",
        a: "Not necessarily. Where appropriate, assets can first be considered for reuse, refurbishment or other recovery pathways.",
      },
      {
        q: "How does corporate e-waste management work?",
        a: "It involves collection, reverse logistics, assessment, recovery and responsible recycling of electronic assets.",
      },
      {
        q: "Can businesses recover value from e-waste?",
        a: "Yes, suitable electronics can be evaluated for reuse, refurbishment, parts recovery or material recovery.",
      },
      {
        q: "Can IT equipment be included in e-waste management?",
        a: "Yes, IT devices and equipment can be covered based on the program scope and asset condition.",
      },
      {
        q: "Can batteries be included in corporate e-waste programs?",
        a: "Yes, batteries can be managed through appropriate recovery and responsible recycling pathways.",
      },
      {
        q: "Is e-waste management traceable?",
        a: "Structured programs can provide visibility and traceability across collection, recovery and downstream recycling activities.",
      },
      {
        q: "Can e-waste be collected from multiple locations?",
        a: "Yes, corporate programs can be structured to manage electronics generated across multiple locations.",
      },
      {
        q: "Who needs corporate e-waste management?",
        a: "Enterprises, manufacturers, retailers, telecom companies, institutions and technology businesses can use corporate e-waste management solutions.",
      },
    ],
  },
  "epr-compliance": {
    slug: "epr-compliance",
    pageName: "EPR Compliance",
    card: {
      num: "07",
      title: "Simplify Environmental Compliance",
      subtitle: "EPR Compliance",
      desc: "Turn Extended Producer Responsibility (EPR) regulations into a competitive advantage with certified collection targets, CPCB portal integration, audit-proof reporting, and credit fulfillment.",
      icon: "/images/sol-icon-07-epr-compliance.svg",
    },
    metaTitle: "EPR Compliance Services for Electronics",
    metaDescription:
      "EPR support across e-waste, battery and circularity requirements, reporting, traceability and responsible recovery.",
    heroTitle: "End-to-End EPR Compliance for Electronics",
    heroDesc: "Make electronics EPR a connected business process—not just a compliance task.",
    heroImage: {
      src: "/images/epr-compliance-hero.webp",
      alt: "E-waste EPR compliance support",
      width: 800,
      height: 800,
    },
    problemTitle: "Why EPR Compliance Matters for Businesses",
    problemText:
      "EPR programs can involve multiple stakeholders, documentation requirements, reporting obligations and recovery activities. Fuevation supports electronics businesses with EPR-related compliance and recovery requirements.",
    approachText:
      "Fuevation brings a focused solution for EPR compliance, helping businesses address the commercial, operational and lifecycle challenges associated with their electronics assets.",
    scopeTitle: "What We Cover",
    scopeItems: [
      { icon: "/images/solutions/epr/scope-01.svg", label: "E-Waste EPR" },
      { icon: "/images/solutions/epr/scope-02.svg", label: "Battery EPR" },
      { icon: "/images/solutions/epr/scope-03.svg", label: "Documentation & Reporting" },
      { icon: "/images/solutions/epr/scope-04.svg", label: "Recovery Programs" },
      { icon: "/images/solutions/epr/scope-05.svg", label: "Traceability" },
      { icon: "/images/solutions/epr/scope-06.svg", label: "Circularity Support" },
    ],
    outcomesTitle: "Value Delivered",
    outcomesItems: [
      { icon: "/images/solutions/epr/outcome-01.svg", label: "Better Compliance Visibility" },
      { icon: "/images/solutions/epr/outcome-02.svg", label: "Structured Documentation" },
      { icon: "/images/solutions/epr/outcome-03.svg", label: "Improved Reporting Readiness" },
      { icon: "/images/solutions/epr/outcome-04.svg", label: "Connected Recovery Programs" },
      { icon: "/images/solutions/epr/outcome-05.svg", label: "Greater Lifecycle Traceability" },
    ],
    industriesItems: [
      { icon: "/images/solutions/epr/industry-01.svg", label: "Electronics Producers" },
      { icon: "/images/solutions/epr/industry-02.svg", label: "Importers" },
      { icon: "/images/solutions/epr/industry-03.svg", label: "OEMs" },
      { icon: "/images/solutions/epr/industry-04.svg", label: "Consumer Electronics Brands" },
      { icon: "/images/solutions/epr/industry-05.svg", label: "Battery Stakeholders" },
      { icon: "/images/solutions/epr/industry-06.svg", label: "Other Obligated Entities" },
    ],
    relatedItems: [
      { icon: "/images/sol-icon-06-corporate-ewaste.svg", label: "E-Waste Management", slug: "e-waste-management" },
      { icon: "/images/sol-icon-10-battery-recycling.svg", label: "Battery Recycling", slug: "battery-recycling" },
      { icon: "/images/sol-icon-01-value-recovery.svg", label: "Electronics Value Recovery", slug: "electronics-value-recovery" },
      { icon: "/images/sol-icon-08-reverse-logistics.svg", label: "Reverse Logistics", slug: "reverse-logistics" },
    ],
    faqItems: [
      {
        q: "What is EPR compliance?",
        a: "Extended Producer Responsibility places defined responsibility on producers or other obligated entities for management of specified products and their end-of-life impacts.",
      },
      {
        q: "Does Fuevation support e-waste and battery EPR?",
        a: "Fuevation can support applicable electronics and battery EPR requirements as part of broader compliance and recovery programs.",
      },
      {
        q: "Is EPR only about paperwork?",
        a: "No. Depending on the applicable framework, EPR can involve registration, reporting, collection, recovery, recycling and evidence requirements.",
      },
      {
        q: "Who needs to comply with EPR requirements?",
        a: "Producers, importers, manufacturers and other obligated entities may have EPR responsibilities depending on the applicable framework.",
      },
      {
        q: "What does EPR compliance include?",
        a: "Depending on the applicable requirements, it can include registration, reporting, recovery, recycling, documentation and evidence.",
      },
      {
        q: "Does EPR cover electronic products?",
        a: "Yes, applicable electronic products can fall under e-waste EPR requirements.",
      },
      {
        q: "Does EPR apply to batteries?",
        a: "Battery EPR requirements can apply to relevant producers and other obligated entities under the applicable framework.",
      },
      {
        q: "Why is EPR traceability important?",
        a: "Traceability helps provide visibility into recovery, recycling and supporting compliance documentation.",
      },
      {
        q: "Can EPR compliance include recovery programs?",
        a: "Yes, recovery and recycling activities can form part of an applicable EPR program.",
      },
      {
        q: "Who can use EPR compliance services?",
        a: "Electronics producers, importers, OEMs, consumer electronics brands, battery stakeholders and other obligated entities can use EPR compliance support.",
      },
    ],
  },
  "reverse-logistics": {
    slug: "reverse-logistics",
    pageName: "Electronics Reverse Logistics",
    card: {
      num: "08",
      title: "Build Smarter Reverse Supply Chains",
      subtitle: "Electronics Reverse Logistics",
      desc: "Operate specialized reverse logistics networks with end-to-end serialized tracking, fast pickup turnaround, custody transfer control, and optimized routing across all major hubs in India.",
      icon: "/images/sol-icon-08-reverse-logistics.svg",
    },
    metaTitle: "Reverse Logistics for Electronics",
    metaDescription:
      "Electronics reverse logistics covering collection, returns, movement, traceability and value recovery.",
    heroTitle: "Reverse Logistics Built for Electronics Recovery",
    heroDesc: "Move electronics back into the value chain—not simply back to a warehouse.",
    heroImage: {
      src: "/images/reverse-logistics-hero.webp",
      alt: "Electronic Reverse Logistics",
      width: 800,
      height: 800,
    },
    problemTitle: "The Importance of Efficient Reverse Logistics",
    problemText:
      "Electronics returns, damaged goods, excess stock and end-of-life assets require more than transportation. Fuevation supports reverse logistics programs designed around electronics recovery and asset visibility.",
    approachText:
      "Fuevation brings a focused solution for electronics reverse logistics, helping businesses address the commercial, operational and lifecycle challenges associated with their electronics assets.",
    scopeTitle: "What We Handle",
    scopeItems: [
      { icon: "/images/solutions/rl/scope-01.svg", label: "Returns" },
      { icon: "/images/solutions/rl/scope-02.svg", label: "Excess Inventory" },
      { icon: "/images/solutions/rl/scope-03.svg", label: "Damaged Electronics" },
      { icon: "/images/solutions/rl/scope-04.svg", label: "EOL Assets" },
      { icon: "/images/solutions/rl/scope-05.svg", label: "Accessories & Components" },
      { icon: "/images/solutions/rl/scope-06.svg", label: "Recovery Visibility" },
    ],
    outcomesTitle: "Value Delivered",
    outcomesItems: [
      { icon: "/images/solutions/rl/outcome-01.svg", label: "Better Returns Visibility" },
      { icon: "/images/solutions/rl/outcome-02.svg", label: "Reduced Asset Stagnation" },
      { icon: "/images/solutions/rl/outcome-03.svg", label: "Improved Recovery Coordination" },
      { icon: "/images/solutions/rl/outcome-04.svg", label: "Lower Lifecycle Leakage" },
      { icon: "/images/solutions/rl/outcome-05.svg", label: "Structured Reverse Movement" },
    ],
    industriesItems: [
      { icon: "/images/solutions/rl/industry-01.svg", label: "Manufacturers" },
      { icon: "/images/solutions/rl/industry-02.svg", label: "Retailers" },
      { icon: "/images/solutions/rl/industry-03.svg", label: "Distributors" },
      { icon: "/images/solutions/rl/industry-04.svg", label: "E-commerce" },
      { icon: "/images/solutions/rl/industry-05.svg", label: "Telecom" },
      { icon: "/images/solutions/rl/industry-06.svg", label: "Enterprises" },
    ],
    relatedItems: [
      { icon: "/images/sol-icon-02-liquidation.svg", label: "Inventory Liquidation", slug: "inventory-liquidation" },
      { icon: "/images/sol-icon-06-corporate-ewaste.svg", label: "E-Waste Management", slug: "e-waste-management" },
      { icon: "/images/sol-icon-01-value-recovery.svg", label: "Electronics Value Recovery", slug: "electronics-value-recovery" },
      { icon: "/images/sol-icon-05-eol-inventory.svg", label: "EOL Inventory Management", slug: "eol-inventory-management" },
    ],
    faqItems: [
      {
        q: "What is electronics reverse logistics?",
        a: "Movement and management of electronics returning from customers, channels, operations or end of life into appropriate recovery pathways.",
      },
      {
        q: "Why is reverse logistics important for electronics?",
        a: "Electronics can retain commercial, component or material value after their original forward supply-chain journey ends.",
      },
      {
        q: "What assets can enter a reverse logistics program?",
        a: "Returns, excess stock, damaged products, EOL assets, accessories and components can be considered.",
      },
      {
        q: "How does electronics reverse logistics work?",
        a: "Electronics are collected, moved, assessed and directed toward suitable recovery, reuse, refurbishment or recycling pathways.",
      },
      {
        q: "Can customer returns be included in reverse logistics?",
        a: "Yes, customer and channel returns can be collected and evaluated for appropriate recovery options.",
      },
      {
        q: "Can damaged electronics enter reverse logistics?",
        a: "Yes, damaged electronics can be moved through reverse logistics for assessment, refurbishment, parts recovery or recycling.",
      },
      {
        q: "Can reverse logistics support excess inventory recovery?",
        a: "Yes, excess inventory can be collected and routed toward suitable liquidation, reuse or recovery channels.",
      },
      {
        q: "Does reverse logistics provide asset visibility?",
        a: "A structured reverse logistics program can improve visibility of assets throughout their return and recovery journey.",
      },
      {
        q: "Can reverse logistics include EOL electronics?",
        a: "Yes, end-of-life electronics can be collected and directed toward appropriate recovery or responsible recycling pathways.",
      },
      {
        q: "Who can use electronics reverse logistics solutions?",
        a: "Manufacturers, retailers, distributors, e-commerce businesses, telecom companies and enterprises can use reverse logistics solutions.",
      },
    ],
  },
  "parts-harvesting": {
    slug: "parts-harvesting",
    pageName: "Electronics Parts Harvesting",
    card: {
      num: "09",
      title: "Maximize Component Recovery",
      subtitle: "Electronics Parts Harvesting",
      desc: "Harvest and test functional components—such as displays, motherboards, camera modules, sensors, and power units—from damaged or end-of-life devices to reintroduce high-demand OEM spare parts.",
      icon: "/images/sol-icon-09-parts-harvesting.svg",
    },
    metaTitle: "Electronics Parts Harvesting & Component Recovery",
    metaDescription:
      "Recover usable components through structured assessment, harvesting, grading and reuse pathways.",
    heroTitle: "Recover Value From Every Usable Component",
    heroDesc: "A device may have reached the end of its useful life. Its components may not have.",
    heroImage: {
      src: "/images/parts-harvesting-hero.webp",
      alt: "Parts Harvesting",
      width: 800,
      height: 800,
    },
    problemTitle: "Unlocking Value Through Parts Harvesting",
    problemText:
      "When a complete electronics product is no longer commercially viable, valuable components can still remain within the asset. Fuevation supports component recovery opportunities before assets move to material recycling.",
    approachText:
      "Fuevation brings a focused solution for parts harvesting, helping businesses address the commercial, operational and lifecycle challenges associated with their electronics assets.",
    scopeTitle: "What We Handle",
    scopeItems: [
      { icon: "/images/solutions/parts/scope-01.svg", label: "Electronic Components" },
      { icon: "/images/solutions/parts/scope-02.svg", label: "Displays & Cameras" },
      { icon: "/images/solutions/parts/scope-03.svg", label: "PCBs & Electronics" },
      { icon: "/images/solutions/parts/scope-04.svg", label: "Mechanical Components" },
      { icon: "/images/solutions/parts/scope-05.svg", label: "Battery-Related Components" },
      { icon: "/images/solutions/parts/scope-06.svg", label: "Accessories & Small Parts" },
    ],
    outcomesTitle: "Value Delivered",
    outcomesItems: [
      { icon: "/images/solutions/parts/outcome-01.svg", label: "Higher Recovery Potential" },
      { icon: "/images/solutions/parts/outcome-02.svg", label: "Greater Component Reuse" },
      { icon: "/images/solutions/parts/outcome-03.svg", label: "Reduced Premature Material Recycling" },
      { icon: "/images/solutions/parts/outcome-04.svg", label: "Additional Value From End-of-Life Assets" },
      { icon: "/images/solutions/parts/outcome-05.svg", label: "Support for Circular Electronics" },
    ],
    industriesItems: [
      { icon: "/images/solutions/parts/industry-01.svg", label: "Refurbishers" },
      { icon: "/images/solutions/parts/industry-02.svg", label: "Repair Ecosystems" },
      { icon: "/images/solutions/parts/industry-03.svg", label: "Manufacturers" },
      { icon: "/images/solutions/parts/industry-04.svg", label: "Distributors" },
      { icon: "/images/solutions/parts/industry-05.svg", label: "Electronics Recovery Businesses" },
      { icon: "/images/solutions/parts/industry-06.svg", label: "Enterprises" },
    ],
    relatedItems: [
      { icon: "/images/sol-icon-03-refurbishment.svg", label: "Electronics Refurbishment", slug: "electronics-refurbishment" },
      { icon: "/images/sol-icon-01-value-recovery.svg", label: "Electronics Value Recovery", slug: "electronics-value-recovery" },
      { icon: "/images/sol-icon-06-corporate-ewaste.svg", label: "E-Waste Management", slug: "e-waste-management" },
      { icon: "/images/sol-icon-10-battery-recycling.svg", label: "Battery Recycling", slug: "battery-recycling" },
    ],
    faqItems: [
      {
        q: "What is parts harvesting?",
        a: "Recovery of usable components from electronics that may no longer be viable as complete products.",
      },
      {
        q: "Why harvest parts before recycling?",
        a: "Usable components can sometimes retain economic value and support continued product repair or reuse.",
      },
      {
        q: "Is parts harvesting the same as recycling?",
        a: "No. Parts harvesting preserves component-level value, while recycling focuses on material recovery.",
      },
      {
        q: "How does parts harvesting work?",
        a: "Electronics are assessed to identify usable components that can be recovered, tested, graded and directed toward reuse.",
      },
      {
        q: "What components can be recovered?",
        a: "Displays, cameras, PCBs, electronic components, mechanical parts and other usable components can be considered.",
      },
      {
        q: "Can damaged electronics be used for parts harvesting?",
        a: "Yes, damaged or non-functional devices may still contain components suitable for recovery.",
      },
      {
        q: "Can parts harvesting support electronics repair?",
        a: "Yes, recovered components can support repair, refurbishment and other reuse requirements.",
      },
      {
        q: "Can EOL devices be used for parts harvesting?",
        a: "Yes, suitable end-of-life devices can be assessed for component recovery before material recycling.",
      },
      {
        q: "Does parts harvesting reduce material waste?",
        a: "Recovering usable components can reduce premature material recycling and support greater resource reuse.",
      },
      {
        q: "Who can use parts harvesting solutions?",
        a: "Refurbishers, repair ecosystems, manufacturers, distributors, recovery businesses and enterprises can use parts harvesting solutions.",
      },
    ],
  },
  "battery-recycling": {
    slug: "battery-recycling",
    pageName: "Battery Recycling & Recovery",
    card: {
      num: "10",
      title: "Recover Critical Materials Safely",
      subtitle: "Battery Recycling & Recovery",
      desc: "Safe collection, handling, and closed-loop material extraction for lithium-ion and device batteries, reclaiming high-grade cobalt, lithium, and nickel with environmental compliance.",
      icon: "/images/sol-icon-10-battery-recycling.svg",
    },
    metaTitle: "Battery Recycling & Recovery Solutions",
    metaDescription:
      "Battery recovery and recycling solutions with traceability, compliance and responsible processing.",
    heroTitle: "Battery Recovery & Responsible Recycling",
    heroDesc: "Recover battery value responsibly.",
    heroImage: {
      src: "/images/battery-recycling-hero.webp",
      alt: "Battery Recovery",
      width: 850,
      height: 850,
    },
    problemTitle: "Why Battery Recovery & Responsible Recycling Matters",
    problemText:
      "Batteries require responsible end-of-life management because they contain recoverable materials and require appropriate handling throughout their lifecycle. Fuevation supports battery recovery and recycling programs within a broader electronics lifecycle ecosystem.",
    approachText:
      "Fuevation brings a focused solution for battery recycling, helping businesses address the commercial, operational and lifecycle challenges associated with their electronics assets.",
    scopeTitle: "What We Handle",
    scopeItems: [
      { icon: "/images/solutions/battery/scope-01.svg", label: "Consumer Electronics Batteries" },
      { icon: "/images/solutions/battery/scope-02.svg", label: "Mobile & Portable Batteries" },
      { icon: "/images/solutions/battery/scope-03.svg", label: "Laptop & Device Batteries" },
      { icon: "/images/solutions/battery/scope-04.svg", label: "Battery-Containing Electronics" },
      { icon: "/images/solutions/battery/scope-05.svg", label: "End-of-Life Battery Streams" },
      { icon: "/images/solutions/battery/scope-06.svg", label: "Material Recovery" },
    ],
    outcomesTitle: "Value Delivered",
    outcomesItems: [
      { icon: "/images/solutions/battery/outcome-01.svg", label: "Responsible Battery End-of-Life Management" },
      { icon: "/images/solutions/battery/outcome-02.svg", label: "Improved Recovery Visibility" },
      { icon: "/images/solutions/battery/outcome-03.svg", label: "Support for Applicable Compliance Requirements" },
      { icon: "/images/solutions/battery/outcome-04.svg", label: "Material Recovery" },
      { icon: "/images/solutions/battery/outcome-05.svg", label: "Reduced Unmanaged Battery Waste" },
    ],
    industriesItems: [
      { icon: "/images/solutions/battery/industry-01.svg", label: "Consumer Electronics" },
      { icon: "/images/solutions/battery/industry-02.svg", label: "OEMs" },
      { icon: "/images/solutions/battery/industry-03.svg", label: "Manufacturers" },
      { icon: "/images/solutions/battery/industry-04.svg", label: "Enterprises" },
      { icon: "/images/solutions/battery/industry-05.svg", label: "Retailers" },
      { icon: "/images/solutions/battery/industry-06.svg", label: "Technology Businesses" },
    ],
    relatedItems: [
      { icon: "/images/sol-icon-06-corporate-ewaste.svg", label: "E-Waste Management", slug: "e-waste-management" },
      { icon: "/images/sol-icon-07-epr-compliance.svg", label: "EPR Compliance", slug: "epr-compliance" },
      { icon: "/images/sol-icon-01-value-recovery.svg", label: "Electronics Value Recovery", slug: "electronics-value-recovery" },
      { icon: "/images/sol-icon-09-parts-harvesting.svg", label: "Parts Harvesting", slug: "parts-harvesting" },
    ],
    faqItems: [
      {
        q: "What is battery recycling?",
        a: "Recovery of useful materials from end-of-life batteries through appropriate downstream processing.",
      },
      {
        q: "Why is battery recycling important?",
        a: "Responsible battery management supports safe end-of-life handling and recovery of valuable materials.",
      },
      {
        q: "Can battery recovery support EPR requirements?",
        a: "Battery recovery can form part of applicable EPR programs depending on the organization's obligations and regulatory framework.",
      },
      {
        q: "How does battery recycling work?",
        a: "Batteries are collected, assessed and directed to appropriate recovery and recycling pathways.",
      },
      {
        q: "What types of batteries can be recycled?",
        a: "Consumer electronics, mobile, portable, laptop and device batteries can be considered based on the program scope.",
      },
      {
        q: "Can batteries be recovered from electronic devices?",
        a: "Yes, batteries from end-of-life electronics can be identified and routed for appropriate recovery or recycling.",
      },
      {
        q: "Why is battery traceability important?",
        a: "Traceability helps improve visibility of battery movement, recovery and downstream recycling activities.",
      },
      {
        q: "Can end-of-life batteries be used for material recovery?",
        a: "Yes, appropriate recycling processes can recover useful materials from end-of-life batteries.",
      },
      {
        q: "Can businesses manage battery waste responsibly?",
        a: "Yes, structured battery recovery and recycling programs can support responsible end-of-life management.",
      },
      {
        q: "Who can use battery recycling solutions?",
        a: "OEMs, manufacturers, consumer electronics businesses, retailers, enterprises and technology companies can use battery recycling solutions.",
      },
    ],
  },
};
