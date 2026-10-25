import type { Metadata } from "next";
import { inCity, site } from "@/data/site";

/** Home page title/description - also the defaults for any page without its own. */
export const homeTitle = `${site.name} | Website Development, Mobile Apps & Online Booking${inCity}`;
export const homeDescription = `${site.name} builds websites with online booking, Android + iOS apps and cloud backends for businesses and startups${inCity}. Free sample design before you pay.`;

/**
 * Page metadata with a canonical URL and a complete share preview (Open Graph). Every page uses this,
 * so titles, descriptions and previews stay consistent. `absolute` skips the "| PrimeCraft Labs" suffix.
 */
export function pageMetadata({
  path,
  title,
  description,
  absolute = false,
}: {
  path: string;
  title: string;
  description: string;
  absolute?: boolean;
}): Metadata {
  const fullTitle = absolute ? title : `${title} | ${site.name}`;
  return {
    title: absolute ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: `en_${site.countryCode}`,
      url: path,
      title: fullTitle,
      description,
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: `${site.name}: ${site.tagline}` }],
    },
  };
}

/** schema.org structured data, rendered as JSON-LD for search engines. */
export function jsonLd(data: object) {
  return { __html: JSON.stringify({ "@context": "https://schema.org", ...data }) };
}

export const organizationId = `${site.url}/#organization`;
