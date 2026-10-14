import Image from "next/image";

const DIFFERENTIATORS = [
  {
    icon: "/images/icon-tech-led-decisions.svg",
    alt: "technology led",
    title: "Technology-Led Decision Making",
    desc: "Every asset is evaluated to identify its highest-value recovery pathway.",
  },
  {
    icon: "/images/icon-integrated-platform.svg",
    alt: "Integrated Lifecycle Platform",
    title: "Integrated Lifecycle Platform",
    desc: "One partner across refurbishment, liquidation, parts harvesting, compliance, & recycling.",
  },
  {
    icon: "/images/icon-circular-by-design.svg",
    alt: "Circular Economy by Design",
    title: "Circular Economy by Design",
    desc: "Reuse is prioritized before material recovery, maximizing outcomes.",
  },
  {
    icon: "/images/icon-nationwide-execution.svg",
    alt: "Nationwide Execution",
    title: "Nationwide Execution",
    desc: "Technology-backed operations with an extensive network across India.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="bg-white py-12 md:py-16">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:gap-4">
          <div className="text-center text-[0.85rem] font-extrabold uppercase tracking-[0.15em] text-accent">
            Introducing Fuevation
          </div>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-8">
            <div className="flex flex-col gap-4">
              <h2 className="text-[1.8rem] font-bold leading-[1.25] text-primary">
                Building the Future of Electronics Value Recovery
              </h2>
              <p className="text-[0.85rem] leading-[1.6] text-text-muted">
                Fuevation is building the operating backbone for the circular
                electronics economy.
              </p>
              <p className="text-[0.85rem] leading-[1.6] text-text-muted">
                Through our flagship platform, MobiGarage, we help brands,
                manufacturers, retailers, insurers, enterprises, and ecosystem
                partners maximize value across the complete electronics
                lifecycle. By combining technology, operational expertise, and
                an integrated recovery network, we transform returned, excess,
                damaged, and end-of-life electronic assets into measurable
                business value.
              </p>
              <p className="text-[0.85rem] leading-[1.6] text-text-muted">
                Our approach goes beyond waste management. We help
                organizations extend product lifecycles, recover valuable
                components and materials, improve compliance, strengthen
                reverse supply chains, and advance their sustainability
                goals-all through a single, integrated platform.
              </p>
            </div>

            <div className="flex flex-col justify-center gap-2 rounded-2xl border border-border bg-primary/[0.03] p-3 lg:justify-start">
              <div className="text-[1.8rem] font-extrabold text-primary">
                <span className="text-accent">Reuse</span> First.
                <span className="text-accent"> Recovery </span>Always.
              </div>
              <p className="text-[0.85rem] leading-[1.6] text-text-muted">
                Every electronic product deserves more than one opportunity to
                create value. Before a product is dismantled or recycled, we
                prioritize reuse, refurbishment, repair, redistribution, or
                component recovery.
              </p>
              <p className="text-[0.85rem] leading-[1.6] text-text-muted">
                Only when reuse is no longer viable does responsible recycling
                become the next step.
              </p>
              <p className="text-[0.85rem] leading-[1.6] text-text-muted">
                This philosophy guides every decision we make-helping our
                partners recover greater value, reduce waste, conserve
                resources, and build more sustainable businesses.
              </p>
              <p className="text-[0.85rem] leading-[1.6] text-text-muted">
                Because the most sustainable product is the one that
                doesn&apos;t need to be manufactured again.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="text-[1.8rem] font-bold leading-[1.25] text-primary">
                What Makes Fuevation Different
              </h2>
              <div className="flex flex-col gap-4">
                {DIFFERENTIATORS.map((item) => (
                  <div key={item.title} className="flex items-start gap-3 lg:flex-col lg:items-center lg:text-center">
                    <div className="mt-0.5 flex shrink-0 items-center justify-center lg:mt-0">
                      <Image
                        src={item.icon}
                        alt={item.alt}
                        width={50}
                        height={50}
                        className="h-[50px] w-[50px]"
                      />
                    </div>
                    <div className="flex flex-col gap-1 lg:items-center">
                      <h3 className="text-[0.95rem] font-bold text-primary">{item.title}</h3>
                      <p className="text-[0.85rem] leading-[1.4] text-text-muted">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-[1.05rem] font-bold text-primary">
            We don&apos;t see electronic products as waste. We see untapped
            value waiting to be recovered.
          </p>
        </div>
      </div>
    </section>
  );
}
