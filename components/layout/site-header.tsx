"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CONTACT, NAV_LINKS } from "@/lib/site-config";
import { ExpertContactTrigger } from "@/components/expert-contact/expert-contact-trigger";
import { useFocusTrap } from "@/lib/use-focus-trap";

export function SiteHeader() {
  const pathname = usePathname();
  const isSolutionsActive = pathname.startsWith("/solutions");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const closeMenuRef = useRef<HTMLButtonElement>(null);
  useFocusTrap(drawerRef, menuOpen, closeMenuRef);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[65] border-b border-primary/10 bg-white/95 backdrop-blur transition-[height] duration-300 ${
          scrolled ? "h-[70px] shadow-[0_4px_30px_rgba(0,0,0,0.02)]" : "h-[60px] shadow-[0_4px_12px_rgba(0,0,0,0.15)]"
        }`}
      >
      <div className="mx-auto flex h-full max-w-[1280px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center" onClick={() => setMenuOpen(false)}>
          <Image
            src="/images/logo-header.png"
            alt="Fuevation"
            width={167}
            height={44}
            className="h-8 w-auto sm:h-9"
            priority
          />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => {
            const active = link.label === "Solutions" && isSolutionsActive;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  active ? "text-accent" : "text-primary"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <ExpertContactTrigger location="header" className="hidden items-center justify-center rounded-lg bg-accent px-6 py-2.5 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(194,65,12,0.25)] transition-colors hover:bg-accent-hover lg:inline-flex">
          Talk to Our Experts
        </ExpertContactTrigger>

        <button
          type="button"
          className={`relative flex h-10 w-10 cursor-pointer flex-col items-center justify-center gap-1.5 lg:hidden ${
            menuOpen ? "hidden" : ""
          }`}
          aria-label="Open navigation"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="h-0.5 w-6 bg-primary" />
          <span className="h-0.5 w-6 bg-primary" />
          <span className="h-0.5 w-6 bg-primary" />
        </button>
      </div>
      </header>

      <div
        aria-hidden="true"
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 z-[69] bg-black/40 transition-opacity duration-300 lg:hidden ${
          menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <div
        ref={drawerRef}
        id="mobile-nav"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        inert={!menuOpen}
        className={`fixed inset-y-0 left-0 z-[70] flex w-[40%] min-w-[260px] flex-col overflow-y-auto bg-white shadow-[10px_0_30px_rgba(47,53,103,0.15)] transition-transform duration-300 motion-reduce:transition-none lg:hidden ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div
          className={`flex items-center justify-between border-b border-primary/10 bg-white/95 px-4 shadow-[0_4px_12px_rgba(0,0,0,0.15)] backdrop-blur transition-[height] duration-300 ${
            scrolled ? "h-[70px]" : "h-[60px]"
          }`}
        >
          <Image src="/images/logo-header.png" alt="Fuevation" width={167} height={44} className="h-7 w-auto" />
          <button
            ref={closeMenuRef}
            type="button"
            onClick={() => setMenuOpen(false)}
            aria-label="Close navigation"
            className="flex h-10 w-10 items-center justify-center text-primary"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <nav aria-label="Mobile primary" className="flex flex-1 flex-col gap-4 px-4 py-4">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => {
              const active = link.label === "Solutions" && isSolutionsActive;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-md px-2 py-3 text-sm font-medium transition-colors hover:text-accent ${
                    active ? "text-accent" : "text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
          <div onClick={() => setMenuOpen(false)}>
            <ExpertContactTrigger location="mobile_sidebar" className="inline-flex w-full items-center justify-center rounded-lg bg-accent px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-hover">
              Talk to Our Experts
            </ExpertContactTrigger>
          </div>

          <div className="mt-auto flex flex-col gap-3 border-t border-primary/10 px-2 pt-4 text-[0.8rem] leading-[1.5] text-text-muted">
            <a href={`mailto:${CONTACT.email}`} className="font-medium text-primary transition-colors hover:text-accent">
              {CONTACT.email}
            </a>
            <a href={CONTACT.phoneHref} className="font-medium text-primary transition-colors hover:text-accent">
              {CONTACT.phoneDisplay}
            </a>
            <address className="not-italic">
              <a
                href="https://maps.app.goo.gl/jYQgLs1mMS4dG5yU6"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-accent"
              >
                {CONTACT.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </a>
            </address>
          </div>
        </nav>
      </div>
    </>
  );
}
