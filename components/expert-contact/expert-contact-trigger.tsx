"use client";

import type { ReactNode } from "react";
import { useExpertContact } from "@/lib/expert-contact-context";
import { trackCtaClick } from "@/lib/analytics";

export function ExpertContactTrigger({
  className,
  children,
  location = "unspecified",
}: {
  className?: string;
  children: ReactNode;
  /** Where on the site this trigger lives (e.g. "hero", "header") — tagged on the cta_click event. */
  location?: string;
}) {
  const { openModal } = useExpertContact();

  const handleClick = () => {
    trackCtaClick(typeof children === "string" ? children : "Talk to Our Experts", location);
    openModal();
  };

  return (
    <button type="button" className={className} onClick={handleClick}>
      {children}
    </button>
  );
}
