import Image from "next/image";
import Link from "next/link";
import { CONTACT, QUICK_LINKS, SOLUTIONS_LINKS, type NavLink } from "@/lib/site-config";

function LogoBlock() {
  return (
    <div className="flex flex-col gap-[1.2rem]">
      <Link href="/" className="inline-flex">
        <Image
          src="/images/logo-footer.png"
          alt="Fuevation"
          width={159}
          height={42}
          className="h-9 w-auto"
        />
      </Link>
      <span className="block text-[0.9rem] font-bold text-accent">
        Reuse First. Recovery Always.
      </span>
      <p className="text-[0.85rem] leading-[1.6]">
        Fuevation is a technology-driven electronics lifecycle company
        focused on maximizing value through refurbishment, liquidation,
        parts harvesting, reverse logistics, EPR compliance and recycling.
      </p>
    </div>
  );
}

function LinkColumn({ title, links }: { title: string; links: NavLink[] }) {
  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-[1.05rem] font-bold text-white">{title}</h3>
      <ul className="flex flex-col gap-[0.8rem] text-[0.88rem]">
        {links.map((link, i) => (
          <li key={`${link.label}-${i}`}>
            <Link href={link.href} className="transition-colors hover:text-white">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ContactBlock() {
  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-[1.05rem] font-bold text-white">Contact</h3>
      <div className="flex flex-col gap-[0.6rem] text-[0.85rem] leading-[1.6]">
        <p>
          <a
            href="https://maps.app.goo.gl/jYQgLs1mMS4dG5yU6"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
          >
            {CONTACT.addressLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </a>
        </p>
        <p>
          <a href={`mailto:${CONTACT.email}`} className="font-semibold transition-colors hover:text-white">
            {CONTACT.email}
          </a>
        </p>
        <p>
          <a href={CONTACT.phoneHref} className="font-semibold transition-colors hover:text-white">
            {CONTACT.phoneDisplay}
          </a>
        </p>
      </div>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-auto bg-[#12173a] text-[#94a3b8]">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-4 px-4 pt-4 pb-6 sm:px-6 lg:px-8">
        {/* Below md: logo, [Quick Links / Solutions] row, contact */}
        <div className="flex flex-col gap-12 md:hidden">
          <LogoBlock />
          <div className="flex justify-between gap-8">
            <LinkColumn title="Quick Links" links={QUICK_LINKS} />
            <LinkColumn title="Solutions" links={SOLUTIONS_LINKS} />
          </div>
          <ContactBlock />
        </div>

        {/* md only: logo, then [Quick Links / Solutions / Contact] row */}
        <div className="hidden flex-col gap-12 md:flex lg:hidden">
          <LogoBlock />
          <div className="flex justify-between gap-8">
            <LinkColumn title="Quick Links" links={QUICK_LINKS} />
            <LinkColumn title="Solutions" links={SOLUTIONS_LINKS} />
            <ContactBlock />
          </div>
        </div>

        {/* lg and up: four-column grid */}
        <div className="hidden lg:grid lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr] lg:gap-12">
          <LogoBlock />
          <LinkColumn title="Quick Links" links={QUICK_LINKS} />
          <LinkColumn title="Solutions" links={SOLUTIONS_LINKS} />
          <ContactBlock />
        </div>

        <div className="border-t border-white/6 pt-[0.8rem] text-[0.8rem]">
          <p>&copy; 2026 Fuevation Technology Solutions Pvt. Ltd. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
