import { EYEBROW } from "@/components/ui/styles";

export function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mx-auto flex max-w-180 flex-col gap-3 text-center">
      <span className={EYEBROW}>{eyebrow}</span>
      <h2 className="text-[1.8rem] font-bold text-primary">{title}</h2>
    </div>
  );
}
