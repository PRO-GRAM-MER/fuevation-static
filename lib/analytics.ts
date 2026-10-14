// Window.dataLayer is already declared by @next/third-parties/google.

/**
 * Pushes a custom event to the GTM dataLayer. Events are only collected when
 * GTM/GA4 are loaded, i.e. a production build with NEXT_PUBLIC_GTM_ID /
 * NEXT_PUBLIC_GA_ID set (see lib/site-config.ts), and matching triggers are
 * configured in the GTM workspace.
 */
export function trackEvent(event: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
}

export function trackSolutionPageView(slug: string, pageName: string) {
  trackEvent("solution_page_view", { solution_slug: slug, solution_name: pageName });
}

export function trackCtaClick(label: string, location: string) {
  trackEvent("cta_click", { cta_label: label, cta_location: location });
}

export function trackContactFormStart() {
  trackEvent("contact_form_start");
}

/**
 * No lead-capture form exists on the site yet — the expert-contact modal is
 * two tap-to-contact links (tel:/mailto:), not a submit-able form. Until a
 * real form is added, choosing a contact method is treated as the
 * completion signal for both contact_form_submit and lead_generated.
 */
export function trackLeadGenerated(method: "phone" | "email") {
  trackEvent("contact_form_submit", { method });
  trackEvent("lead_generated", { method });
}
