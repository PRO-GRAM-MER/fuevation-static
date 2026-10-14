import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/hero-section";
import { FutureSection } from "@/components/sections/future-section";
import { AboutSection } from "@/components/sections/about-section";
import { CapabilitiesSection } from "@/components/sections/capabilities-section";
import { FrameworkSection } from "@/components/sections/framework-section";
import { TechnologySection } from "@/components/sections/technology-section";
import { IndustriesSection } from "@/components/sections/industries-section";
import { WhyChooseSection } from "@/components/sections/why-choose-section";
import { ImpactSection } from "@/components/sections/impact-section";
import { LeadershipSection } from "@/components/sections/leadership-section";
import { CtaSection } from "@/components/sections/cta-section";
import { pageMetadata } from "@/lib/metadata";
import { HOME_TITLE, SITE_DESCRIPTION } from "@/lib/site-config";

export const metadata: Metadata = pageMetadata({
  title: HOME_TITLE,
  description: SITE_DESCRIPTION,
  path: "/",
  image: { src: "/images/hero-lifecycle.webp", alt: HOME_TITLE },
});

export default function Home() {
  return (
    <>
      <HeroSection
        heading={
          <>
            Maximizing Value Across the Electronics{" "}
            <span className="text-accent">Lifecycle</span>
          </>
        }
        description="We help businesses recover more value, reduce waste, and build a circular future."
        tagline={
          <>
            <span className="text-accent">Reuse</span> First.{" "}
            <span className="text-accent">Recovery</span> Always.
          </>
        }
        actions={[{ label: "Talk to Our Experts", modal: true, variant: "primary" }]}
        image={{
          src: "/images/hero-lifecycle.webp",
          alt: "Circular electronics lifecycle — refurbishment, recycling, and value recovery",
          width: 500,
          height: 500,
          className: "drop-shadow-[0_0_40px_rgba(255,111,63,0.45)]",
        }}
      />
      <FutureSection />
      <AboutSection />
      <CapabilitiesSection />
      <FrameworkSection />
      <TechnologySection />
      <IndustriesSection />
      <WhyChooseSection />
      <ImpactSection />
      <LeadershipSection />
      <CtaSection />
    </>
  );
}
