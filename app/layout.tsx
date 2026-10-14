import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ExpertContactModal } from "@/components/expert-contact/expert-contact-modal";
import { ExpertContactProvider } from "@/lib/expert-contact-context";
import { HOME_TITLE, IS_PREVIEW, SITE_DESCRIPTION, SITE_NAME, SITE_URL, GTM_ID, GA_ID } from "@/lib/site-config";
import { pageMetadata } from "@/lib/metadata";
import { JsonLd, organizationJsonLd, websiteJsonLd } from "@/lib/json-ld";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

// Site-wide defaults; each page overrides them with its own pageMetadata().
// No canonical or og:url here, so pages that don't set one (e.g. 404) don't claim the home URL.
const defaults = pageMetadata({
  title: HOME_TITLE,
  description: SITE_DESCRIPTION,
  path: "/",
  image: { src: "/images/hero-lifecycle.webp", alt: HOME_TITLE },
});

export const metadata: Metadata = {
  ...defaults,
  metadataBase: new URL(SITE_URL),
  title: {
    default: HOME_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  alternates: undefined,
  openGraph: { ...defaults.openGraph, url: undefined },
  robots: IS_PREVIEW ? { index: false, follow: false } : { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${poppins.variable} h-full motion-safe:scroll-smooth scroll-pt-[70px]`}>
      <body className="flex min-h-full flex-col font-sans antialiased">
        {GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              title="Google Tag Manager"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}
        <a
          href="#main-content"
          className="sr-only z-[100000] rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to main content
        </a>
        <JsonLd data={organizationJsonLd()} />
        <JsonLd data={websiteJsonLd()} />
        <ExpertContactProvider>
          <SiteHeader />
          <main id="main-content" tabIndex={-1} className="flex-1 pt-[60px] outline-none">
            {children}
          </main>
          <SiteFooter />
          <ExpertContactModal />
        </ExpertContactProvider>
      </body>
      {GTM_ID && <GoogleTagManager gtmId={GTM_ID} />}
      {GA_ID && <GoogleAnalytics gaId={GA_ID} />}
    </html>
  );
}
