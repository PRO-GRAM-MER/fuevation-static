import Image from "next/image";
import { EYEBROW } from "@/components/ui/styles";

const REASONS = [
  {
    title: "Reuse-First Philosophy",
    desc: "We maximize product life before material recovery, delivering stronger financial and environmental outcomes.",
  },
  {
    title: "Integrated Capabilities",
    desc: "One partner across refurbishment, liquidation, reverse logistics, compliance, parts recovery and recycling.",
  },
  {
    title: "Technology-Driven Decisions",
    desc: "Every asset follows a structured, intelligence-led recovery pathway.",
  },
  {
    title: "Nationwide Execution",
    desc: "Pan-India operational capability supported by trusted ecosystem partners.",
  },
  {
    title: "Sustainability by Design",
    desc: "Every process delivers measurable circular economy outcomes and ESG goals.",
  },
  {
    title: "Trusted Relationships",
    desc: "Working with leading OEMs, manufacturers, retailers, insurers and enterprises across India.",
  },
];

export function WhyChooseSection() {
  return (
    <section id="why-choose" className="bg-bg-light py-12 md:py-16">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-3 px-4 sm:px-6 lg:px-8">
        <div className={`text-center ${EYEBROW}`}>
          Why Us
        </div>

        <div className="flex flex-col gap-10">
          <h2 className="text-center text-[1.8rem] font-bold leading-[1.25] text-primary">
            Why Organizations Choose Fuevation
          </h2>

          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-12">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:flex-1 lg:grid-cols-1">
              {REASONS.map((reason) => (
                <div key={reason.title} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#fff5f0]">
                    <Image
                      src="/images/icon-cap-epr.svg"
                      alt=""
                      width={22}
                      height={22}
                      className="h-[22px] w-[22px]"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-[0.95rem] font-semibold text-primary">{reason.title}</h3>
                    <p className="text-[0.85rem] leading-[1.6] text-text-muted">{reason.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative w-full overflow-hidden rounded-2xl lg:h-[600px] lg:flex-1">
              <Image
                src="/images/why-choose-plant.webp"
                alt="Growing Plant seedling representing sustainability"
                width={1254}
                height={1245}
                className="h-auto w-full lg:hidden"
              />
              <Image
                src="/images/why-choose-plant.webp"
                alt="Growing Plant seedling representing sustainability"
                fill
                sizes="(min-width: 1024px) 50vw, 0px"
                className="hidden object-cover lg:block"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
