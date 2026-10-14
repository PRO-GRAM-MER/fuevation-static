import { EYEBROW } from "@/components/ui/styles";

const STEPS = [
  {
    num: "01",
    name: "Discover",
    desc: "Understand the assets-condition, history, quantities, location and recovery potential.",
  },
  {
    num: "02",
    name: "Diagnose",
    desc: "Technology-enabled diagnostics, grading and data analysis assess technical condition and residual value.",
  },
  {
    num: "03",
    name: "Decide",
    desc: "Assets are routed to their optimal outcome-reuse, refurbishment, liquidation, parts recovery or recycling.",
  },
  {
    num: "04",
    name: "Execute",
    desc: "Our integrated network manages collection, logistics, recovery, compliance and recycling through a single workflow.",
  },
  {
    num: "05",
    name: "Realize",
    desc: "Clients achieve higher recovery rates, shorter turnaround times and measurable B2B ESG impact.",
  },
  {
    num: "06",
    name: "Report & Improve",
    desc: "Transparent reporting, analytics and insights continuously improve future recovery decisions.",
  },
];

// Literal strings so Tailwind's scanner can see every class it needs to generate.
const COL_START = [
  "lg:col-start-1",
  "lg:col-start-2",
  "lg:col-start-3",
  "lg:col-start-4",
  "lg:col-start-5",
  "lg:col-start-6",
];

function StepCircle({ num }: { num: string }) {
  return (
    <div className="relative z-10 flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full border-[3px] border-border bg-white text-base font-extrabold text-primary">
      {num}
    </div>
  );
}

function StepCard({ step }: { step: (typeof STEPS)[number] }) {
  return (
    <div className="w-full max-w-[220px] rounded-xl border border-border bg-bg-light p-4 lg:w-full lg:max-w-none">
      <h3 className="text-[0.95rem] font-semibold text-primary">{step.name}</h3>
      <p className="mt-1 text-[0.85rem] leading-[1.6] text-text-muted">{step.desc}</p>
    </div>
  );
}

export function FrameworkSection() {
  return (
    <section id="framework" className="bg-white py-12 md:py-16">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-16 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 text-center">
          <div className={EYEBROW}>
            The Fuevation Lifecycle Intelligence Framework&trade;
          </div>
          <h2 className="text-[1.8rem] font-bold text-primary">
            Intelligence Determines the Right Journey for Every Asset
          </h2>
          <p className="text-[0.85rem] leading-[1.6] text-text-muted">
            Our proprietary Lifecycle Intelligence Framework&trade; ensures
            every asset is evaluated, routed and recovered to deliver the
            highest value at every stage.
          </p>
        </div>

        {/* Straight vertical line — below lg */}
        <div className="relative flex flex-col gap-10 lg:hidden">
          <div className="absolute inset-y-0 left-1/2 w-0.5 -translate-x-1/2 bg-border" />
          {STEPS.map((step, i) => {
            const isLeft = i % 2 === 0;
            return (
              <div key={step.num} className="grid grid-cols-[1fr_1rem_auto_1rem_1fr] items-center">
                <div className={isLeft ? "flex justify-end" : ""}>{isLeft && <StepCard step={step} />}</div>
                <div className={isLeft ? "h-0.5 bg-border" : ""} />
                <StepCircle num={step.num} />
                <div className={!isLeft ? "h-0.5 bg-border" : ""} />
                <div className={!isLeft ? "flex justify-start" : ""}>{!isLeft && <StepCard step={step} />}</div>
              </div>
            );
          })}
        </div>

        {/* Horizontal zigzag road — lg and up */}
        <div className="hidden lg:grid lg:grid-cols-6 lg:grid-rows-[auto_auto_auto] lg:gap-x-2">
          <div className="lg:col-span-6 lg:col-start-1 lg:row-start-2 lg:h-0.5 lg:w-full lg:self-center lg:bg-border" />
          {STEPS.map((step, i) => {
            const isTop = i % 2 === 0;
            return (
              <div
                key={`${step.num}-card`}
                className={`${COL_START[i]} flex flex-col items-center justify-center ${
                  isTop ? "lg:row-start-1 lg:justify-end" : "lg:row-start-3 lg:justify-start"
                } lg:flex`}
              >
                {isTop && <StepCard step={step} />}
                <div className="h-4 w-0.5 bg-border" />
                {!isTop && <StepCard step={step} />}
              </div>
            );
          })}
          {STEPS.map((step, i) => (
            <div key={`${step.num}-circle`} className={`${COL_START[i]} lg:row-start-2 lg:flex lg:justify-center lg:self-center`}>
              <StepCircle num={step.num} />
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-2 text-center">
          <p className="text-base font-bold text-primary md:text-[1.1rem]">
            Every decision begins with one simple question:
          </p>
          <p className="text-base font-bold text-accent md:text-[1.1rem]">
            How can this asset deliver its highest value?
          </p>
        </div>
      </div>
    </section>
  );
}
