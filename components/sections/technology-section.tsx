import Image from "next/image";

const TECH_CARDS = [
  {
    icon: "/images/icon-tech-asset-intelligence.svg",
    title: "Asset Intelligence",
    desc: "Digital diagnostics, grading, valuation and condition assessment.",
  },
  {
    icon: "/images/icon-tech-recovery-intelligence.svg",
    title: "Recovery Intelligence",
    desc: "Data-driven routing to the highest-value recovery pathway.",
  },
  {
    icon: "/images/icon-tech-marketplace.svg",
    title: "Marketplace & Liquidation",
    desc: "Connecting recovered assets & components with verified B2B buyers.",
  },
  {
    icon: "/images/icon-tech-compliance.svg",
    title: "Compliance & Traceability",
    desc: "End-to-end visibility, audit trails and EPR reporting.",
  },
  {
    icon: "/images/icon-tech-analytics.svg",
    title: "Analytics & Insights",
    desc: "Dashboards, ESG reporting and performance intelligence.",
  },
  {
    icon: "/images/icon-tech-operational-visibility.svg",
    title: "Operational Visibility",
    desc: "Track assets, inventory, logistics and recovery performance.",
  },
];

export function TechnologySection() {
  return (
    <section id="technology" className="bg-bg-light py-12 md:py-16">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-3 px-4 sm:px-6 lg:px-8">
        <div className="text-center text-[0.85rem] font-extrabold uppercase tracking-[0.15em] text-accent">
          Our Technology
        </div>

        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-6">
            <h2 className="text-center text-[1.8rem] font-bold leading-[1.25] text-primary">
              Technology That Powers Smarter Recovery Decisions
            </h2>
            <p className="text-center text-[0.85rem] leading-[1.6] text-text-muted">
              Our platform combines operational intelligence, automation and
              data analytics to enable smarter decisions throughout the
              electronics lifecycle.
            </p>
            <Image
              src="/images/tech-dashboard-mockup.webp"
              alt="Fuevation Dashboard"
              width={400}
              height={500}
              className="mx-auto h-auto w-full max-w-sm rounded-2xl object-contain md:max-w-[800px] md:aspect-[2/1]"
            />
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TECH_CARDS.map((card) => (
              <div
                key={card.title}
                className="flex flex-col gap-2 rounded-xl border border-[#e8e8e8] bg-white p-6 text-left"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center">
                    <Image src={card.icon} alt={card.title} width={32} height={32} className="h-8 w-8" />
                  </div>
                  <h3 className="text-[0.95rem] font-semibold text-primary">{card.title}</h3>
                </div>
                <p className="text-center text-[0.85rem] leading-[1.6] text-text-muted">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
