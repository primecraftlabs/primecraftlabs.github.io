import type { Metadata } from "next";
import { CtaBand, Faq } from "@/components/blocks";
import { ButtonLink, CheckList, Container, PageHeader, Section, SectionHeading } from "@/components/ui";
import { packages } from "@/data/pricing";
import { enquiryMessage, whatsappLink } from "@/data/site";

export const metadata: Metadata = {
  title: "Pricing",
  description: packages.map((p) => `${p.name}: ${p.prefix ? `${p.prefix} ` : ""}${p.price}`).join(". ") + ".",
};

export default function PricingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Pricing"
        title="Simple, honest pricing"
        lead="A clear price before work starts. Pay 50% to begin and 50% when you're happy."
      />

      <Section>
        <div className="grid gap-6 lg:grid-cols-3">
          {packages.map((p) => (
            <div
              key={p.name}
              className={`relative flex flex-col rounded-2xl border bg-surface p-7 shadow-sm ${
                p.featured ? "border-2 border-accent shadow-lg" : "border-line"
              }`}
            >
              {p.featured && (
                <span className="absolute -top-3.5 left-7 rounded-full bg-accent px-3 py-1 text-xs font-bold text-ink">
                  Most popular
                </span>
              )}
              <h2 className="text-lg font-bold">{p.name}</h2>
              <p className="mt-2 text-muted">{p.description}</p>
              <p className="mt-6 text-4xl font-extrabold tracking-tight">
                {p.prefix && <span className="mr-1.5 text-base font-medium text-muted">{p.prefix}</span>}
                {p.price}
              </p>
              <CheckList items={p.features} className="mt-6 flex-1" />
              <ButtonLink
                href={whatsappLink(enquiryMessage(p.name))}
                external
                variant={p.featured ? "primary" : "ghost"}
                className="mt-8"
              >
                Get started
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
