import Image from "next/image";

const INDUSTRIES = [
  { icon: "/images/icon-ind-oems.svg", alt: "Electronics Manufacturers", title: "Electronics Manufacturers (OEMs & ODMs)" },
  { icon: "/images/icon-ind-ems.svg", alt: "EMS Providers", title: "EMS Providers" },
  { icon: "/images/icon-ind-retail.svg", alt: "Retail & Large Chains", title: "Retail & Distribution" },
  { icon: "/images/icon-ind-enterprises.svg", alt: "Enterprises & Corporates", title: "Enterprises & IT" },
  { icon: "/images/icon-ind-insurance.svg", alt: "Insurers & TPA partners", title: "Insurance" },
  { icon: "/images/icon-ind-telecom.svg", alt: "Telecom Carriers", title: "Telecom" },
  { icon: "/images/icon-ind-government.svg", alt: "Government & Public Sector", title: "Government & Public Sector" },
  { icon: "/images/icon-ind-recyclers.svg", alt: "Recyclers & Material Recoverers", title: "Recyclers & Material Recovery" },
  { icon: "/images/icon-ind-ecommerce.svg", alt: "E-commerce & Marketplaces", title: "E-commerce & Marketplaces" },
];

export function IndustriesSection() {
  return (
    <section id="industries" className="bg-white py-12 md:py-16">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-10 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 text-center">
          <div className="text-[0.85rem] font-extrabold uppercase tracking-[0.15em] text-accent">
            Industries We Serve
          </div>
          <h2 className="text-[1.8rem] font-bold leading-[1.25] text-primary">
            Trusted Across the Electronics Value Chain
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {INDUSTRIES.map((ind) => (
            <div
              key={ind.title}
              className="flex w-full flex-none items-center gap-5 rounded-xl border border-border bg-white p-8 sm:w-[calc(50%-0.75rem)] md:w-[calc(33.333%-1rem)]"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center">
                <Image src={ind.icon} alt={ind.alt} width={40} height={40} className="h-10 w-10" />
              </div>
              <h3 className="text-[0.95rem] font-semibold text-primary">{ind.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
