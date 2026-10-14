import Image from "next/image";
import { ExpertContactTrigger } from "@/components/expert-contact/expert-contact-trigger";

export function CtaSection() {
  return (
    <section className="overflow-hidden bg-white py-12 md:py-16">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {/* Stacked — below lg: header, full-width image, copy, button */}
        <div className="flex flex-col items-center gap-6 text-center lg:hidden">
          <h2 className="text-[1.8rem] font-bold leading-[1.25] text-primary">
            Let&apos;s Build the Future of Electronics Together
          </h2>
          <Image
            src="/images/cta-footer-left.webp"
            alt="Left Banner"
            width={220}
            height={220}
            className="h-auto w-full rounded-2xl md:h-[320px] md:object-cover"
          />
          <p className="text-[0.85rem] leading-[1.6] text-text-muted">
            Whether you&apos;re looking to recover greater value from
            electronic assets, strengthen your reverse supply chain, achieve
            regulatory compliance, or advance your sustainability goals,
            we&apos;re ready to help.
          </p>
          <p className="text-base font-bold text-accent md:text-[1.1rem]">
            Let&apos;s start the conversation.
          </p>
          <ExpertContactTrigger location="homepage_final_cta" className="inline-flex items-center justify-center rounded-lg bg-accent px-9 py-3.5 text-[15px] font-semibold text-white shadow-[0_8px_24px_rgba(255,111,63,0.25)] transition-colors hover:bg-accent-hover">
            Talk to Our Experts
          </ExpertContactTrigger>
          <Image
            src="/images/cta-plant-right.webp"
            alt="Plant Image"
            width={220}
            height={220}
            className="h-auto w-full rounded-2xl md:h-[320px] md:object-cover"
          />
        </div>

        {/* Row — lg and up: one combined banner */}
        <div className="hidden overflow-hidden rounded-2xl border border-border lg:flex lg:items-stretch">
          <div className="min-w-[260px] flex-1">
            <Image
              src="/images/cta-footer-left.webp"
              alt="Left Banner"
              width={260}
              height={400}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex w-[420px] shrink-0 flex-col items-center justify-center gap-4 p-3 text-center">
            <h2 className="text-[1.8rem] font-bold leading-[1.25] text-primary">
              Let&apos;s Build the Future of Electronics Together
            </h2>
            <p className="text-[0.85rem] leading-[1.6] text-text-muted">
              Whether you&apos;re looking to recover greater value from
              electronic assets, strengthen your reverse supply chain, achieve
              regulatory compliance, or advance your sustainability goals,
              we&apos;re ready to help.
            </p>
            <p className="text-[1.1rem] font-bold text-accent">
              Let&apos;s start the conversation.
            </p>
            <ExpertContactTrigger location="homepage_final_cta" className="inline-flex items-center justify-center rounded-lg bg-accent px-9 py-3.5 text-[15px] font-semibold text-white shadow-[0_8px_24px_rgba(255,111,63,0.25)] transition-colors hover:bg-accent-hover">
              Talk to Our Experts
            </ExpertContactTrigger>
          </div>

          <div className="min-w-[260px] flex-1">
            <Image
              src="/images/cta-plant-right.webp"
              alt="Plant Image"
              width={260}
              height={400}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
