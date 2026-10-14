import { ExpertContactTrigger } from "@/components/expert-contact/expert-contact-trigger";
import { BUTTON_PRIMARY } from "@/components/ui/styles";

/** Closing "Ready to recover more value…" call to action on the solutions pages. */
export function CtaBand({ location, className = "py-12 md:py-16" }: { location: string; className?: string }) {
  return (
    <section className={`bg-white text-center ${className}`}>
      <div className="mx-auto flex max-w-[1280px] flex-col gap-6 px-4 sm:px-6 lg:px-8">
        <h2 className="text-[1.8rem] font-bold text-primary">
          Ready to recover more value from your electronics assets?
        </h2>
        <p className="text-[0.95rem] leading-[1.7] text-text-muted">
          Tell us what you are looking to recover, manage or optimize. Our
          team will help identify the right solution.
        </p>
        <div className="flex justify-center">
          <ExpertContactTrigger location={location} className={BUTTON_PRIMARY}>
            Talk to Our Experts
          </ExpertContactTrigger>
        </div>
      </div>
    </section>
  );
}
