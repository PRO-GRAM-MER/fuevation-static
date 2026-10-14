import type { Metadata } from "next";
import Link from "next/link";
import { BUTTON_OUTLINE, BUTTON_PRIMARY } from "@/components/ui/styles";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto flex max-w-[720px] flex-col items-center gap-5 px-4 text-center sm:px-6 lg:px-8">
        <span className="text-[0.85rem] font-extrabold uppercase tracking-[0.15em] text-accent">Error 404</span>
        <h1 className="text-[2rem] font-bold leading-[1.1] text-primary md:text-[2.5rem]">Page not found</h1>
        <p className="text-base leading-[1.7] text-text-muted">
          The page you are looking for doesn&apos;t exist or has moved. Try the home page or browse our solutions.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link href="/" className={BUTTON_PRIMARY}>
            Go to Home
          </Link>
          <Link href="/solutions" className={BUTTON_OUTLINE}>
            Explore Solutions
          </Link>
        </div>
      </div>
    </section>
  );
}
