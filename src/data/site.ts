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
  tagline: brand.tagline,
  email: brand.contact.email,
  phone: brand.contact.phone,
  phoneDisplay: brand.contact.phoneDisplay,
  whatsapp: brand.contact.whatsapp,
  url: brand.urls.site,
  github: brand.urls.github,
  urls: brand.urls,
  colors: brand.theme.colors,
  // Free form at https://formspree.io: put the form ID in jk/brand/brand.json. Empty = email fallback.
  formspreeId: brand.formspreeId,
};

export const nav = [
  { href: "/services/", label: "Services" },
  { href: "/work/", label: "Work" },
  { href: "/about/", label: "About" },
  { href: "/pricing/", label: "Pricing" },
];

/** Pre-filled WhatsApp message; pass a topic (service or package name) for a specific enquiry. */
export function enquiryMessage(topic?: string) {
  const intro = `Hi ${site.ownerFirstName}, I saw the ${site.name} website`;
  return topic ? `${intro} and I'm interested in: ${topic}.` : `${intro} and I'm interested in a website/app for my business.`;
}

export function whatsappLink(text: string = enquiryMessage()) {
  return `${brand.whatsappUrl}?text=${encodeURIComponent(text)}`;
}
