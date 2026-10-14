import type { ReactNode } from "react";
import Image from "next/image";
import { HeroButton, type HeroAction } from "@/components/sections/hero-button";

export type { HeroAction };

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
}

const IMAGE_SIZE_CLASSES =
  "h-[320px] w-[320px] object-contain md:h-[360px] md:w-[360px] lg:h-[400px] lg:w-[400px]";

export function HeroSection({ heading, description, tagline, actions, image }: HeroSectionProps) {
  return (
    <section id="hero" className="relative overflow-hidden bg-white py-8 md:py-10 lg:py-12">
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

        <div className="order-first flex justify-center md:order-none lg:w-1/2">
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
