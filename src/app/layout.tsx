import type { Metadata } from "next";
import { Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { site } from "@/data/site";
import { homeDescription, homeTitle, jsonLd, organizationId } from "@/lib/seo";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: homeTitle,
    template: `%s | ${site.name}`,
  },
  description: homeDescription,
  icons: { icon: { url: "/favicon.svg", type: "image/svg+xml" } },
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: `en_${site.countryCode}`,
    // Copied from jk/brand by brand/sync.py - never edit public/og-image.png by hand.
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: `${site.name}: ${site.tagline}` }],
  },
  twitter: { card: "summary_large_image" },
  ...(site.googleSiteVerification ? { verification: { google: site.googleSiteVerification } } : {}),
};

const structuredData = {
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": organizationId,
      name: site.name,
      url: site.url,
      logo: `${site.url}/profile-picture.png`,
      image: `${site.url}/og-image.png`,
      email: site.email,
      ...(site.showPhone ? { telephone: site.phone } : {}),
      founder: { "@type": "Person", name: site.owner },
      areaServed: site.country,
      address: site.showCity
        ? { "@type": "PostalAddress", addressLocality: site.city, addressCountry: site.countryCode }
        : { "@type": "PostalAddress", addressCountry: site.countryCode },
      description: site.tagline,
      knowsAbout: ["Website development", "Online booking systems", "Mobile app development", "Backend development", "WhatsApp ordering"],
      ...(site.social.length ? { sameAs: site.social.map((s) => s.url) } : {}),
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      inLanguage: "en",
      publisher: { "@id": organizationId },
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${jakarta.variable} ${geistMono.variable} h-full antialiased`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(structuredData)} />
      </head>
      <body className="flex min-h-full flex-col font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[60] focus:rounded-lg focus:bg-brand focus:px-4 focus:py-2 focus:text-on-brand"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        {site.cloudflareAnalyticsToken && (
          <script
            type="module"
            src="https://static.cloudflareinsights.com/beacon.min.js"
            data-cf-beacon={JSON.stringify({ token: site.cloudflareAnalyticsToken })}
          />
        )}
      </body>
    </html>
  );
}
