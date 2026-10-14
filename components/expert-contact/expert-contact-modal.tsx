"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { useExpertContact } from "@/lib/expert-contact-context";
import { CONTACT } from "@/lib/site-config";
import { trackContactFormStart, trackLeadGenerated } from "@/lib/analytics";
import { useFocusTrap } from "@/lib/use-focus-trap";

export function ExpertContactModal() {
  const { isOpen, closeModal } = useExpertContact();
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  useFocusTrap(dialogRef, isOpen, closeButtonRef);

  useEffect(() => {
    if (!isOpen) return;
    trackContactFormStart();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, closeModal]);

  return (
    <div
      className={`fixed inset-0 z-[99999] flex items-center justify-center bg-black/65 p-5 transition-opacity duration-200 ${
        isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      }`}
      inert={!isOpen}
      onClick={(e) => {
        if (e.target === e.currentTarget) closeModal();
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="expert-contact-title"
        className={`relative w-full max-w-[480px] rounded-[20px] bg-white p-6 shadow-[0_25px_80px_rgba(0,0,0,0.25)] transition-transform duration-200 sm:p-10 ${
          isOpen ? "translate-y-0 scale-100" : "translate-y-5 scale-[0.97]"
        }`}
      >
        <button
          ref={closeButtonRef}
          type="button"
          aria-label="Close contact modal"
          onClick={closeModal}
          className="absolute right-3 top-3 flex h-[34px] w-[34px] cursor-pointer items-center justify-center rounded-full bg-[#f2f2f2] text-[28px] leading-none text-primary transition-colors hover:bg-accent-hover hover:text-white"
        >
          &times;
        </button>

        <div className="flex flex-col gap-5 text-center">
          <div className="flex flex-col gap-2">
            <h2 id="expert-contact-title" className="text-xl font-bold text-accent">
              Let&apos;s Transform Your Electronics Lifecycle
            </h2>
            <p className="text-[0.85rem] leading-[1.6] text-primary">
              Connect with our experts to discuss your electronics assets, recovery opportunities,
              and strategies to unlock greater value across the lifecycle.
            </p>
          </div>

          <div className="flex flex-col gap-3.5">
            <a
              href={CONTACT.phoneHref}
              onClick={() => trackLeadGenerated("phone")}
              className="flex items-center gap-4 rounded-2xl border border-[#e5e5e5] p-4 text-left text-primary transition-colors hover:border-accent sm:p-[18px]"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-[#e55b2b]">
                <Image src="/images/icon-phone.svg" alt="" width={23} height={23} className="h-[23px] w-[23px]" />
              </span>
              <span className="flex min-w-0 flex-1 flex-col items-start justify-center gap-1">
                <strong className="block text-[17px] font-semibold">Call Us</strong>
                <span className="block text-sm leading-[1.4] opacity-70">{CONTACT.phoneDisplay}</span>
              </span>
            </a>

            <a
              href={`mailto:${CONTACT.email}`}
              onClick={() => trackLeadGenerated("email")}
              className="flex items-center gap-4 rounded-2xl border border-[#e5e5e5] p-4 text-left text-primary transition-colors hover:border-accent sm:p-[18px]"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-[#e55b2b]">
                <Image src="/images/icon-mail.svg" alt="" width={23} height={23} className="h-[23px] w-[23px]" />
              </span>
              <span className="flex min-w-0 flex-1 flex-col items-start justify-center gap-1">
                <strong className="block text-[17px] font-semibold">Email Us</strong>
                <span className="block text-sm leading-[1.4] opacity-70">{CONTACT.email}</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
