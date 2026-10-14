"use client";

import Link from "next/link";
import { ExpertContactTrigger } from "@/components/expert-contact/expert-contact-trigger";
import { BUTTON_OUTLINE, BUTTON_PRIMARY } from "@/components/ui/styles";
import { trackCtaClick } from "@/lib/analytics";

export type HeroAction =
  | { label: string; variant: "primary" | "outline"; href: string; modal?: never }
  | { label: string; variant: "primary" | "outline"; modal: true; href?: never };

export function HeroButton({ action }: { action: HeroAction }) {
  const variant = action.variant === "primary" ? BUTTON_PRIMARY : BUTTON_OUTLINE;
  const className = `w-full max-w-[260px] text-center sm:w-auto sm:max-w-none ${variant}`;

  if (action.modal) {
    return (
      <ExpertContactTrigger className={className} location="hero">
        {action.label}
      </ExpertContactTrigger>
    );
  }

  const handleClick = () => trackCtaClick(action.label, "hero");

  const isExternalProtocol = /^(tel|mailto):/.test(action.href);
  if (isExternalProtocol) {
    return (
      <a href={action.href} onClick={handleClick} className={className}>
        {action.label}
      </a>
    );
  }

  return (
    <Link href={action.href} onClick={handleClick} className={className}>
      {action.label}
    </Link>
  );
}
