import Image from "next/image";

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
  return (
    <section id="leadership" className="bg-white py-12 md:py-16">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-8 px-4 sm:px-6 lg:px-8">
        <div className="text-center text-[0.85rem] font-extrabold uppercase tracking-[0.15em] text-accent">
          Backed By
        </div>

        <div className="group overflow-hidden">
          <div className="flex w-max animate-marquee-ltr items-center gap-20 group-hover:[animation-play-state:paused]">
            {[...INVESTORS, ...INVESTORS].map((inv, i) => (
              <Image
                key={`${inv.alt}-${i}`}
                src={inv.src}
                alt={inv.alt}
                width={140}
                height={60}
                aria-hidden={i >= INVESTORS.length}
                style={{ width: "auto" }}
                className="h-[60px] w-auto min-w-[80px] max-w-[140px] shrink-0 object-contain opacity-75 grayscale-[30%]"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
