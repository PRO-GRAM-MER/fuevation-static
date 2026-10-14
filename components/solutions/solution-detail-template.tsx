import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { HeroSection } from "@/components/sections/hero-section";
import { FaqAccordion, type FaqItem } from "@/components/solutions/faq-accordion";
import { EYEBROW } from "@/components/ui/styles";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { CtaBand } from "@/components/ui/cta-band";
import { SectionHeader } from "@/components/ui/section-header";

export interface IconItem {
  icon: string;
  label: string;
}

export interface RelatedItem {
  icon: string;
  label: string;
  slug: string;
}

export interface SolutionDetail {
  slug: string;
  pageName: string;
  /** Card shown on the /solutions hub (and its label in the footer). */
  card: { num: string; title: string; subtitle: string; desc: string; icon: string };
  /** SEO <title> (pre-" | Fuevation"). Falls back to pageName when unset. */
  metaTitle?: string;
  /** SEO meta description. Falls back to heroDesc when unset. */
  metaDescription?: string;
  heroTitle: ReactNode;
  heroDesc: string;
  heroImage: { src: string; alt: string; width: number; height: number };
  problemTitle: string;
  problemText: string;
  approachText: string;
  scopeTitle: string;
  scopeItems: IconItem[];
  outcomesTitle: string;
  outcomesItems: IconItem[];
  industriesItems: IconItem[];
  relatedItems: RelatedItem[];
  faqItems: FaqItem[];
}

// flex-wrap + justify-center (instead of CSS grid) so any leftover last
// row - whether it's one card or several - centers itself automatically,
// at every breakpoint, with no per-count math needed.
const BASIS_6 = "w-[calc(50%-0.75rem)] md:w-[calc(33.333%-1rem)] lg:w-[calc(16.6667%-1.25rem)]";
const BASIS_5 = "w-[calc(50%-0.75rem)] md:w-[calc(33.333%-1rem)] lg:w-[calc(20%-1.2rem)]";

function IconCard({ item, basis }: { item: IconItem; basis: string }) {
  return (
    <div
      className={`flex flex-none flex-col items-center gap-3 rounded-2xl border border-border bg-white p-6 text-center ${basis}`}
    >
      <Image src={item.icon} alt="" width={58} height={58} className="h-[58px] w-[58px]" />
      <h3 className="text-[0.85rem] font-bold leading-[1.3] text-primary">{item.label}</h3>
    </div>
  );
}

export function SolutionDetailTemplate({ data }: { data: SolutionDetail }) {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Solutions", href: "/solutions" },
          { name: data.pageName },
        ]}
      />

      <HeroSection
        heading={data.heroTitle}
        description={data.heroDesc}
        actions={[
          { label: "Talk to Our Experts", modal: true, variant: "primary" },
          { label: "Explore Solutions", href: "/solutions", variant: "outline" },
        ]}
        image={data.heroImage}
      />

      <section className="bg-bg-light py-12 md:py-16">
        <div className="mx-auto max-w-[800px] px-4 text-center sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4">
            <span className={EYEBROW}>
              The Business Problem
            </span>
            <h2 className="text-[1.8rem] font-bold text-primary">{data.problemTitle}</h2>
            <p className="text-base leading-[1.7] text-text-muted">{data.problemText}</p>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-[800px] px-4 text-center sm:px-6 lg:px-8">
          <div className="flex flex-col gap-3">
            <span className={EYEBROW}>
              Fuevation Value Proposition
            </span>
            <h2 className="text-[1.8rem] font-bold text-primary">Our Approach</h2>
            <p className="text-[0.95rem] leading-[1.7] text-text-muted">{data.approachText}</p>
          </div>
        </div>
      </section>

      <section className="bg-bg-light py-12 md:py-16">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-12 px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Solution Scope" title={data.scopeTitle} />
          <div className="flex flex-wrap justify-center gap-6">
            {data.scopeItems.map((item) => (
              <IconCard key={item.label} item={item} basis={BASIS_6} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-12 px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Business Outcomes" title={data.outcomesTitle} />
          <div className="flex flex-wrap justify-center gap-6">
            {data.outcomesItems.map((item) => (
              <IconCard key={item.label} item={item} basis={BASIS_5} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bg-light py-12 md:py-16">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-12 px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Who This Is For" title="Industries We Serve" />
          <div className="flex flex-wrap justify-center gap-6">
            {data.industriesItems.map((item) => (
              <IconCard key={item.label} item={item} basis={BASIS_6} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-12 px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Related Fuevation Solutions" title="Related Solutions" />
          <div className="flex flex-wrap justify-center gap-6">
            {data.relatedItems.map((item) => (
              <Link
                key={item.slug}
                href={`/solutions/${item.slug}`}
                className={`flex flex-none flex-col items-center gap-3 rounded-2xl border border-border bg-white p-6 text-center transition-colors hover:border-accent ${BASIS_5}`}
              >
                <Image src={item.icon} alt="" width={58} height={58} className="h-[58px] w-[58px]" />
                <h3 className="text-[0.85rem] font-bold leading-[1.3] text-primary">{item.label}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bg-light py-12 md:py-16">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-12 px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="FAQ" title="Frequently Asked Questions" />
          <div className="mx-auto w-full max-w-[1280px]">
            <FaqAccordion items={data.faqItems} />
          </div>
        </div>
      </section>

      <CtaBand location="solution_detail_final_cta" />
    </>
  );
}
