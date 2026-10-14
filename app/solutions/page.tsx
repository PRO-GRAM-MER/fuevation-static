import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HeroSection } from "@/components/sections/hero-section";
import { SOLUTIONS } from "@/lib/solutions-data";
import { JsonLd, breadcrumbJsonLd } from "@/lib/json-ld";
import { pageMetadata } from "@/lib/metadata";
import { EYEBROW } from "@/components/ui/styles";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { CtaBand } from "@/components/ui/cta-band";

const DESCRIPTION =
  "Explore Fuevation electronics lifecycle solutions including refurbishment, value recovery, inventory liquidation, reverse logistics and responsible recycling.";

export const metadata: Metadata = {
  title: "Electronics Lifecycle Solutions",
  ...pageMetadata({
    title: "Electronics Lifecycle Solutions",
    description: DESCRIPTION,
    path: "/solutions",
    image: { src: "/images/sol-hero.webp", alt: "Electronics Lifecycle Solutions" },
  }),
};

export default function SolutionsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Solutions", path: "/solutions" },
        ])}
      />

      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Solutions" }]} />

      <HeroSection
        heading={
          <>
            Solve Every Electronics Lifecycle Challenge with the{" "}
            <span className="text-accent">Right Recovery Solution</span>
          </>
        }
        description="From refurbishment and inventory liquidation to parts recovery, reverse logistics, asset disposition, recycling, and compliance, Fuevation delivers specialized solutions for every stage of the electronics lifecycle."
        actions={[
          { label: "Talk to Our Experts", modal: true, variant: "primary" },
          { label: "View All Solutions", href: "#capabilities", variant: "outline" },
        ]}
        image={{
          src: "/images/sol-hero.webp",
          alt: "Electronics Lifecycle Solutions",
          width: 850,
          height: 850,
        }}
      />

      <section id="capabilities" className="bg-white py-12 md:py-16">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-10 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-180 flex-col gap-3 text-center">
            <div className={EYEBROW}>
              Our Capabilities
            </div>
            <h2 className="text-[1.8rem] font-bold text-primary">
              Helping Every Electronic Asset Reach Its Highest Potential
            </h2>
            <p className="text-[0.85rem] leading-[1.6] text-text-muted">
              Every asset follows a different journey. Discover how our
              specialized capabilities address each phase of the recovery
              lifecycle with transparency, velocity, and guaranteed
              compliance.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {SOLUTIONS.map((sol) => (
              <Link
                key={sol.slug}
                href={`/solutions/${sol.slug}`}
                className="group flex w-full flex-none flex-col gap-3 rounded-2xl border border-[#eef0f4] bg-white p-6 transition-colors hover:border-accent hover:shadow-[0_8px_30px_rgba(194,65,12,0.1)] md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/8 text-[0.82rem] font-bold text-accent">
                    {sol.num}
                  </span>
                  <Image src={sol.icon} alt="" width={42} height={42} className="h-[42px] w-[42px]" />
                </div>
                <h3 className="text-[1.05rem] font-bold text-primary">{sol.title}</h3>
                <span className="block text-[0.72rem] font-bold uppercase tracking-[0.05em] text-accent">
                  {sol.subtitle}
                </span>
                <p className="text-[0.88rem] leading-[1.65] text-text-muted">{sol.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand location="solutions_listing_final_cta" className="py-4" />
    </>
  );
}
