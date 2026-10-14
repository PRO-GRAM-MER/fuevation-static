import Image from "next/image";

const HIGHLIGHTS = [
  {
    icon: "/images/icon-india-manufacturing.svg",
    alt: "India Manufacturing",
    text: (
      <>
        India is one of the world&apos;s largest &amp; fastest-growing
        electronics manufacturing hubs.
      </>
    ),
  },
  {
    icon: "/images/icon-ewaste.svg",
    alt: "E-waste",
    text: (
      <>
        <span className="font-extrabold text-accent">1.75 Million MT</span>{" "}
        of e-waste generated in India every year.
      </>
    ),
  },
  {
    icon: "/images/icon-value-recovery.svg",
    alt: "Value Recovery",
    text: (
      <>
        Organizations are shifting to value recovery, reuse &amp; material
        circularity.
      </>
    ),
  },
  {
    icon: "/images/icon-epr-compliance.svg",
    alt: "EPR Compliance",
    text: (
      <>
        EPR compliance, ESG &amp; sustainability are now strategic
        priorities.
      </>
    ),
  },
];

export function FutureSection() {
  return (
    <section id="future" className="bg-bg-light py-12 md:py-16">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3">
          <div className="text-center text-[0.85rem] font-extrabold uppercase tracking-[0.15em] text-accent">
            The Future of Electronics is Circular
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
            <div className="flex flex-col gap-4">
              <h2 className="text-[1.8rem] font-bold leading-[1.25] text-primary">
                The Future of Electronics Isn&apos;t Just Manufacturing.
                It&apos;s Maximizing Every Product&apos;s Lifetime Value.
              </h2>
              <p className="text-[0.85rem] leading-[1.6] text-text-muted">
                The electronics industry is undergoing a fundamental shift. As
                products become more advanced and lifecycles shorter,
                organizations must recover value from returns, excess
                inventory, damaged products, warranty claims, and end-of-life
                assets. Sustainability commitments, regulatory compliance, and
                rising material costs are transforming how businesses think
                about asset recovery.
              </p>
              <p className="text-[0.85rem] leading-[1.6] text-text-muted">
                The future belongs to organizations that view every electronic
                product not as waste, but as an asset with multiple value
                recovery opportunities.
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl">
              <Image
                src="/images/future-map.webp"
                alt="India Nationwide Logistics & Processing Network"
                width={600}
                height={450}
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 overflow-hidden rounded-2xl border border-border bg-white shadow-[0_10px_30px_rgba(15,23,42,0.08)] md:grid-cols-2 lg:grid-cols-4">
          {HIGHLIGHTS.map((item, i) => {
            const rowDivider = i === 0 ? "border-t-0" : "border-t";
            const midRowDivider = i === 2 || i === 3 ? "md:border-t" : "md:border-t-0";
            const colDivider = i === 0 ? "lg:border-l-0" : "lg:border-l";

            return (
              <div
                key={item.alt}
                className={`flex items-center gap-4 border-border p-6 lg:flex-col lg:items-center lg:gap-3 lg:text-center ${rowDivider} ${midRowDivider} lg:border-t-0 ${colDivider}`}
              >
                <div className="flex shrink-0 items-center justify-center p-3">
                  <Image src={item.icon} alt={item.alt} width={60} height={60} className="h-[60px] w-[60px]" />
                </div>
                <p className="text-[0.85rem] leading-[1.6] text-text-muted">{item.text}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <p className="text-base font-bold text-accent">
            This is where Fuevation helps organizations transform complexity
            into opportunity.
          </p>
        </div>
      </div>
    </section>
  );
}
