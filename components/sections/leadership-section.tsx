"use client";

import { useState } from "react";
import Image from "next/image";
import { EYEBROW } from "@/components/ui/styles";

const INVESTORS = [
  { src: "/images/investor-meity-trans.png", alt: "MeitY" },
  { src: "/images/investor-sosv-trans.png", alt: "SOSV" },
  { src: "/images/investor-stpi-trans.png", alt: "STPI" },
  { src: "/images/investor-ipv-trans.png", alt: "IPV" },
  { src: "/images/investor-artesian-trans.png", alt: "ARTESIAN" },
  { src: "/images/investor-shastra-trans.png", alt: "SHASTRA" },
  { src: "/images/investor-generic-trans.png", alt: "Investor" },
];

export function LeadershipSection() {
  const [paused, setPaused] = useState(false);

  return (
    <section id="leadership" className="bg-white py-12 md:py-16">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-8 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-3">
          <h2 className={`text-center ${EYEBROW}`}>Backed By</h2>
          {/* WCAG 2.2.2: moving content needs a pause control. Hidden when motion is reduced (nothing moves then). */}
          <button
            type="button"
            onClick={() => setPaused((p) => !p)}
            aria-pressed={paused}
            className="rounded-full border border-border px-3 py-1 text-xs font-medium text-text-muted transition-colors hover:border-accent hover:text-accent motion-reduce:hidden"
          >
            {paused ? "Play" : "Pause"}
            <span className="sr-only"> investor logo animation</span>
          </button>
        </div>

        <div className="group overflow-hidden">
          <div
            className={`flex w-max animate-marquee-ltr items-center gap-20 group-hover:[animation-play-state:paused] motion-reduce:w-full motion-reduce:animate-none motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:gap-10 ${
              paused ? "[animation-play-state:paused]" : ""
            }`}
          >
            {[...INVESTORS, ...INVESTORS].map((inv, i) => (
              <Image
                key={`${inv.alt}-${i}`}
                src={inv.src}
                alt={inv.alt}
                width={140}
                height={60}
                aria-hidden={i >= INVESTORS.length}
                style={{ width: "auto" }}
                className={`h-[60px] w-auto min-w-[80px] max-w-[140px] shrink-0 object-contain opacity-75 grayscale-[30%] ${
                  i >= INVESTORS.length ? "motion-reduce:hidden" : ""
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
