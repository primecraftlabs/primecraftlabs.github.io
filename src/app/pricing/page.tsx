import type { Metadata } from "next";
import { CtaBand, Faq } from "@/components/blocks";
import { ButtonLink, CheckList, Container, PageHeader, Section, SectionHeading } from "@/components/ui";
import { faqs, packages } from "@/data/pricing";
import { enquiryMessage, priceLabel, quoteLabel, site, whatsappLink } from "@/data/site";
import { jsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/pricing/",
  title: site.showPrices ? "Website & App Development Pricing" : "Website & App Packages: Free Quote",
  description: site.showPrices
    ? packages.map((p) => `${p.name}: ${priceLabel(p.price, p.prefix)}`).join(". ") + "."
    : `Website, booking and app packages from ${site.name}. Every project gets a free quote and a fixed price before work starts.`,
});

const faqData = {
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function PricingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(faqData)} />
      <PageHeader
        eyebrow={site.showPrices ? "Pricing" : "Packages"}
        title={site.showPrices ? "Simple, honest pricing" : "Packages that fit your business"}
        lead={
          site.showPrices
            ? "A clear price before work starts. Pay 50% to begin and 50% when you're happy."
            : "Every business is different, so we price each project after a free chat. You get a fixed price before any work starts, then pay 50% to begin and 50% when you're happy."
        }
      />

      <Section>
        <div className="grid gap-8 lg:grid-cols-3">
          {packages.map((p) => (
            <div
              key={p.name}
              className={`soft relative flex flex-col rounded-[1.75rem] p-7 sm:p-8 ${
                p.featured ? "ring-2 ring-accent ring-offset-4 ring-offset-bg" : ""
              }`}
            >
              {p.featured && (
                <span className="solid-lift absolute -top-3.5 left-7 inline-flex items-center gap-1.5 rounded-full bg-ink px-3 py-1 text-xs font-bold text-on-ink">
                  <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
                  Most popular
                </span>
              )}
              <h2 className="text-lg font-extrabold tracking-tight">{p.name}</h2>
              <p className="mt-2 text-muted">{p.description}</p>
              <div className="soft-inset mt-6 rounded-2xl px-5 py-4">
                {site.showPrices ? (
                  <p className="text-4xl font-extrabold tracking-tight">
                    {p.prefix && <span className="mr-1.5 text-base font-medium text-muted">{p.prefix}</span>}
                    {p.price}
                  </p>
                ) : (
                  <p className="text-2xl font-extrabold tracking-tight">{quoteLabel}</p>
                )}
              </div>
              <CheckList items={p.features} className="mt-6 flex-1" />
              <ButtonLink
                href={whatsappLink(enquiryMessage(p.name))}
                external
                variant={p.featured ? "primary" : "ghost"}
                className="mt-8"
              >
                {site.showPrices ? "Get started" : "Ask for a quote"}
              </ButtonLink>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-muted">
          A domain name (like yourbusiness.com) is paid directly to the provider, in your name.
        </p>
      </Section>

      <Section alt>
        <Container className="max-w-3xl px-0 sm:px-0">
          <SectionHeading center eyebrow="FAQ" title="Questions people ask" />
          <Faq />
        </Container>
      </Section>

      <CtaBand />
    </>
  );
}
