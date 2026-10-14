const METRICS = [
  { num: "500,000+", label: "Orders Processed Every Month" },
  { num: "82,000 MTPA", label: "Installed Recycling Capacity" },
  { num: "6", label: "Refurbishment Centres Across India" },
  { num: "7,000+ MT", label: "Carbon Offset" },
  { num: "15 Million+", label: "Liters of Water Conserved" },
  { num: "1,000+ MT", label: "E-Waste Diverted from Landfill" },
  { num: "10 Lakh+", label: "Devices Processed through Parts Recovery" },
  { num: "Pan India", label: "Operations & Partner Network" },
];

export function ImpactSection() {
  return (
    <section id="impact" className="bg-white py-12 md:py-16">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-10 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 text-center">
          <div className="text-[0.85rem] font-extrabold uppercase tracking-[0.15em] text-accent">
            Our Impact
          </div>
          <h2 className="text-[1.8rem] font-bold text-primary">
            Creating Measurable Value for Businesses and the Planet
          </h2>
          <p className="text-[0.85rem] leading-[1.6] text-text-muted">
            Every recovered asset creates value beyond financial returns. We
            help organizations improve performance while contributing to a
            more sustainable electronics ecosystem.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {METRICS.map((m) => (
            <div
              key={m.label}
              className="flex w-full flex-none flex-col gap-2 rounded-2xl border border-border bg-white p-6 text-center sm:w-[calc(50%-0.75rem)] md:w-[calc(33.333%-1rem)] lg:w-[calc(25%-1.125rem)] lg:p-8"
            >
              <div className="text-[2rem] font-bold text-accent">{m.num}</div>
              <div className="text-[0.85rem] leading-[1.6] text-text-muted">{m.label}</div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-base font-bold text-primary md:text-[1.1rem]">
            Every number represents our commitment to one philosophy -{" "}
            <span className="text-accent">Reuse</span> First.
            <span className="text-accent"> Recovery </span> Always.
          </p>
        </div>
      </div>
    </section>
  );
}
