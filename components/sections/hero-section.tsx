"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ExpertContactTrigger } from "@/components/expert-contact/expert-contact-trigger";
import { trackCtaClick } from "@/lib/analytics";

export type HeroAction =
  | { label: string; variant: "primary" | "outline"; href: string; modal?: never }
  | { label: string; variant: "primary" | "outline"; modal: true; href?: never };

export interface HeroSectionProps {
  heading: ReactNode;
  description: ReactNode;
  tagline?: ReactNode;
  actions: HeroAction[];
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
    /** Extra classes merged onto the default responsive size (e.g. a drop-shadow glow). */
    className?: string;
  };
  /**
   * Experimental (test-page only): on lg+ screens, replace the default circular
   * image with a full-bleed photo whose left edge blurs/fades into the page.
   * Leave unset to keep the default image at every breakpoint.
   */
  fullBleedLgImage?: { src: string; alt: string };
}

const IMAGE_SIZE_CLASSES =
  "h-[320px] w-[320px] object-contain md:h-[360px] md:w-[360px] lg:h-[400px] lg:w-[400px]";

function HeroButton({ action }: { action: HeroAction }) {
  const base =
    "inline-flex w-full max-w-[260px] items-center justify-center rounded-lg px-9 py-3.5 text-center text-[15px] font-semibold transition-colors sm:w-auto sm:max-w-none";
  const variant =
    action.variant === "primary"
      ? "bg-accent text-white shadow-[0_8px_24px_rgba(255,111,63,0.25)] hover:bg-accent-hover"
      : "border-2 border-border bg-transparent text-primary hover:border-accent hover:text-accent";
  const className = `${base} ${variant}`;

  if (action.modal) {
    return (
      <ExpertContactTrigger className={className} location="hero">
        {action.label}
      </ExpertContactTrigger>
    );
  }

  const handleClick = () => trackCtaClick(action.label, "hero");

  const isExternalProtocol = /^(tel|mailto):/.test(action.href);
  if (isExternalProtocol) {
    return (
      <a href={action.href} onClick={handleClick} className={className}>
        {action.label}
      </a>
    );
  }

  return (
    <Link href={action.href} onClick={handleClick} className={className}>
      {action.label}
    </Link>
  );
}

export function HeroSection({ heading, description, tagline, actions, image, fullBleedLgImage }: HeroSectionProps) {
  return (
    <section id="hero" className="relative overflow-hidden bg-white py-8 md:py-10 lg:py-12">
      {fullBleedLgImage && (
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[52%] overflow-hidden lg:block">
          {/* Same source photo, blurred — only shows in the outer ring, under the sharp layer. */}
          <Image
            src={fullBleedLgImage.src}
            alt=""
            fill
            sizes="52vw"
            className="object-cover blur-2xl"
            style={{
              maskImage: "radial-gradient(ellipse at center, transparent 0%, transparent 50%, black 85%, black 100%)",
              WebkitMaskImage: "radial-gradient(ellipse at center, transparent 0%, transparent 50%, black 85%, black 100%)",
            }}
          />
          {/* Sharp, full-detail photo — fades out toward every edge so the blurred ring (and the page behind it) shows through. */}
          <Image
            src={fullBleedLgImage.src}
            alt={fullBleedLgImage.alt}
            fill
            sizes="52vw"
            priority
            className="object-cover"
            style={{
              maskImage: "radial-gradient(ellipse at center, black 0%, black 50%, transparent 90%, transparent 100%)",
              WebkitMaskImage: "radial-gradient(ellipse at center, black 0%, black 50%, transparent 90%, transparent 100%)",
            }}
          />
        </div>
      )}

      <div className="relative z-10 mx-auto flex max-w-[1280px] flex-col items-center gap-9 px-4 text-center sm:px-6 lg:flex-row lg:items-center lg:gap-[70px] lg:px-8 lg:text-left">
        <div className="order-last flex flex-col items-center gap-5 md:order-none lg:w-1/2 lg:items-start">
          <h1 className="text-[2rem] font-bold leading-[1.1] tracking-[-1px] text-primary md:text-[2.5rem] lg:text-[3.2rem]">
            {heading}
          </h1>

          <p className="text-[15px] leading-[1.7] text-[#6b7280] md:text-base">
            {description}
          </p>

          {tagline && (
            <p className="text-base font-bold text-primary md:text-[1.1rem] lg:text-[1.2rem]">
              {tagline}
            </p>
          )}

          <div className="flex w-full flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap lg:items-start lg:justify-start">
            {actions.map((action) => (
              <HeroButton key={action.label} action={action} />
            ))}
          </div>
        </div>

        <div className={`order-first flex justify-center md:order-none lg:w-1/2 ${fullBleedLgImage ? "lg:hidden" : ""}`}>
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            sizes="(min-width: 1024px) 400px, (min-width: 768px) 360px, 320px"
            priority
            className={`${IMAGE_SIZE_CLASSES}${image.className ? ` ${image.className}` : ""}`}
          />
        </div>
      </div>
    </section>
  );
}
