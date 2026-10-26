/**
 * All business details come from src/config/brand.json, which is GENERATED from jk/brand/brand.json
 * by `python jk/brand/sync.py`. Change details there, never here and never in components.
 */
import brand from "@/config/brand.json";

export const site = {
  name: brand.name,
  wordmark: brand.wordmark,
  owner: brand.owner.name,
  ownerFirstName: brand.owner.firstName,
  city: brand.location.city,
  country: brand.location.country,
  countryCode: brand.location.countryCode,
  // false = the city is not used in visible marketing text (we work with clients anywhere).
  showCity: brand.location.showOnSite,
  // false = no amounts on the site; every service/package shows a "free quote" call to action instead.
  showPrices: brand.pricing.showPrices,
  tagline: brand.tagline,
  email: brand.contact.email,
  phone: brand.contact.phone,
  phoneDisplay: brand.contact.phoneDisplay,
  // false = no visible phone number or click-to-call anywhere; customers use WhatsApp, email or the form.
  showPhone: brand.contact.showPhone,
  whatsapp: brand.contact.whatsapp,
  url: brand.urls.site,
  github: brand.urls.github,
  urls: brand.urls,
  colors: brand.theme.colors,
  // Free form at https://formspree.io: put the form ID in jk/brand/brand.json. Empty = email fallback.
  formspreeId: brand.formspreeId,
  // Google Search Console "HTML tag" code (content="..." part). Empty = no tag.
  googleSiteVerification: brand.seo.googleSiteVerification,
  // Cloudflare Web Analytics token (free, cookie-free visitor counter). Empty = no analytics script.
  cloudflareAnalyticsToken: brand.analytics.cloudflareToken,
  // Google tag (GA4 / Google Ads), e.g. "G-XXXX". Empty = no Google tag. Lead clicks are sent as events.
  googleTagId: brand.analytics.googleTagId,
  // Social profile URLs from brand.json; empty ones are skipped everywhere (footer, structured data).
  social: Object.entries(brand.social)
    .filter(([, url]) => url)
    .map(([network, url]) => ({ label: network[0].toUpperCase() + network.slice(1), url: url as string })),
};

export const nav = [
  { href: "/services/", label: "Services" },
  { href: "/work/", label: "Work" },
  { href: "/about/", label: "About" },
  { href: "/pricing/", label: site.showPrices ? "Pricing" : "Packages" },
];

/** A price amount from brand.json pricing.amounts (e.g. amount("website")). Sync leaves amounts out while
 *  prices are hidden, so they never reach this public repo. */
export function amount(key: string) {
  return (brand.pricing.amounts as Record<string, string | undefined>)[key] ?? "";
}

/** Text shown where a price would be. Amounts appear only when prices are switched on in brand.json. */
export const quoteLabel = "Get a free quote";
export function priceLabel(price: string, prefix = "") {
  return site.showPrices ? `${prefix ? `${prefix} ` : ""}${price}` : quoteLabel;
}

/** " in Delhi" / "Delhi-based " style fragments that disappear when the city is hidden. */
export const inCity = site.showCity ? ` in ${site.city}` : "";
export const cityBased = site.showCity ? `${site.city}-based ` : "";

/** Pre-filled WhatsApp message; pass a topic (service or package name) for a specific enquiry. */
export function enquiryMessage(topic?: string) {
  const intro = `Hi ${site.name}, I saw your website`;
  return topic ? `${intro} and I'm interested in: ${topic}.` : `${intro} and I'm interested in a website/app for my business.`;
}

export function whatsappLink(text: string = enquiryMessage()) {
  return `${brand.whatsappUrl}?text=${encodeURIComponent(text)}`;
}
