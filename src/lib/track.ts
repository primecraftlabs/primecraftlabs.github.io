/**
 * Lead tracking for Google Ads / Analytics. Sends GA4's recommended "generate_lead" event when someone
 * contacts us. Does nothing when the Google tag isn't installed (no googleTagId in brand.json).
 */
type Gtag = (command: "event", name: string, params: Record<string, string>) => void;

export type LeadMethod = "whatsapp" | "email" | "form" | "form_whatsapp";

export function trackLead(method: LeadMethod) {
  if (typeof window === "undefined") return;
  const gtag = (window as unknown as { gtag?: Gtag }).gtag;
  gtag?.("event", "generate_lead", { method, page: window.location.pathname });
}

/** Which kind of contact a link is, or null if it isn't a contact link. */
export function leadMethodForHref(href: string): LeadMethod | null {
  if (href.includes("wa.me/") || href.includes("api.whatsapp.com/")) return "whatsapp";
  if (href.startsWith("mailto:")) return "email";
  return null;
}
