import Image from "next/image";
import Link from "next/link";
import { BUTTON_PRIMARY, EYEBROW } from "@/components/ui/styles";

const CAPABILITIES = [
  {
    num: "01",
    slug: "electronics-refurbishment",
    title: "Extend Product Life",
    subtitle: "Refurbishment & Repair",
    desc: "We restore functional electronics to extend their usable life, maximize resale value, and reduce the environmental impact.",
    icon: "/images/icon-cap-refurbishment.svg",
  },
  {
    num: "02",
    slug: "inventory-liquidation",
    title: "Unlock Working Capital",
    subtitle: "Liquidation Solutions",
    desc: "Transform excess inventory, returns, DOA units and obsolete stock into recovered value through remarketing & liquidation.",
    icon: "/images/icon-cap-liquidation.svg",
  },
  {
    num: "03",
    slug: "parts-harvesting",
    title: "Maximize Component Recovery",
    subtitle: "Parts Harvesting",
    desc: "Recover reusable components from damaged and end-of-life devices, extending the value of products.",
    icon: "/images/icon-cap-parts-harvesting.svg",
  },
  {
    num: "04",
    slug: "e-waste-management",
    title: "Recover Critical Materials Responsibly",
    subtitle: "Recycling",
    desc: "When reuse isn't possible, we recover valuable materials responsibly through environmentally sound recycling.",
    icon: "/images/icon-cap-recycling.svg",
  },
  {
    num: "05",
    slug: "epr-compliance",
    title: "Simplify Compliance",
    subtitle: "EPR & Circularity",
    desc: "End-to-end EPR compliance, traceability, reporting & responsible end-of-life management.",
    icon: "/images/icon-cap-epr.svg",
  },
  {
    num: "06",
    slug: "reverse-logistics",
    title: "Build Smarter Reverse Supply Chains",
    subtitle: "Collection, Logistics & Recovery",
    desc: "Trace & operate efficient reverse logistics networks that improve visibility and maximize recovery.",
    icon: "/images/icon-cap-reverse-logistics.svg",
  },
];

export function CapabilitiesSection() {
  return (
    <section id="capabilities" className="bg-bg-light py-12 md:py-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 text-center">
          <div className={EYEBROW}>
            How We Create Value – Our Capabilities
          </div>
          <h2 className="text-[1.8rem] font-bold text-primary">
            Helping Every Electronic Asset Reach Its Highest Potential
          </h2>
          <p className="text-[0.85rem] leading-[1.6] text-text-muted">
            Every electronic asset follows a different journey. Our
            integrated capabilities ensure every asset is directed toward its
            highest-value recovery pathway-delivering stronger financial
            outcomes while supporting sustainability and regulatory
            compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {CAPABILITIES.map((cap) => (
            <Link
              key={cap.num}
              href={`/solutions/${cap.slug}`}
              className="flex flex-col gap-2 rounded-lg border border-border bg-white p-4 text-left shadow-[0_4px_12px_rgba(0,0,0,0.15)] transition-colors hover:border-accent"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/8 text-[0.85rem] font-extrabold text-accent">
                  {cap.num}
                </span>
                <Image src={cap.icon} alt="" width={60} height={60} className="h-[60px] w-[60px]" />
              </div>
              <h3 className="text-[0.95rem] font-extrabold leading-[1.3] text-primary">{cap.title}</h3>
              <p className="text-[0.75rem] font-extrabold leading-[1.3] text-accent">{cap.subtitle}</p>
              <p className="text-[0.85rem] leading-[1.5] text-text-muted">{cap.desc}</p>
            </Link>
          ))}
        </div>

        <div className="flex justify-center">
          <Link
            href="/solutions"
            className={`gap-2 ${BUTTON_PRIMARY}`}
          >
            <span>Explore All Solutions</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>

        <div className="flex flex-col gap-2 text-center">
          <p className="text-[1.05rem] font-bold text-primary">
            Every capability is guided by one principle:{" "}
            <span className="text-accent">Reuse </span>First.{" "}
            <span className="text-accent">Recovery </span>Always.
          </p>
          <span className="text-[0.85rem] leading-[1.6] text-text-muted">
            By evaluating every asset individually, we identify the recovery
            pathway that delivers the greatest economic value while
            minimizing environmental impact.
          </span>
        </div>
      </div>
    </section>
  );
}
