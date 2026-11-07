import type { Metadata } from "next";
import type { ReactNode } from "react";
import { CtaBand } from "@/components/blocks";
import { Icon } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { ServiceVisual } from "@/components/ServiceVisual";
import { ButtonLink, Card, CheckList, Chips, Container, PageHeader, WhatsAppButton } from "@/components/ui";
import { services } from "@/data/services";
import { enquiryMessage, inCity, priceLabel, site } from "@/data/site";
import { jsonLd, organizationId, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/services/",
  title: "Website, App & Online Booking Services",
  description: `Business websites, online booking, Android + iOS apps, web apps, backends, real-time features and automation, built by ${site.name}${inCity}.`,
});

const servicesData = {
  "@type": "ItemList",
  itemListElement: services.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Service",
      name: s.title,
      description: s.short,
      url: `${site.url}/services/#${s.id}`,
      provider: { "@id": organizationId },
      areaServed: site.country,
    },
  })),
};

/** Small uppercase label with a gold dot, used above each block of a service. */
function Label({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <h3 className={`flex items-center gap-2 text-xs font-bold tracking-[0.14em] text-muted uppercase ${className}`}>
      <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
      {children}
    </h3>
  );
}

export default function ServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(servicesData)} />
      <PageHeader
        eyebrow="Services"
        title="Everything your business needs online, built properly"
        lead="From a simple website for your shop to a full Android + iOS app with a cloud backend. A fixed price agreed before work starts, no confusing tech talk."
      />

      <Container className="py-8">
        <nav aria-label="Services on this page" className="flex flex-wrap gap-3">
          {services.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="soft-sm soft-press rounded-full px-4 py-2 text-sm font-semibold text-muted hover:text-fg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              {s.title}
            </a>
          ))}
        </nav>
      </Container>

      <div className="pb-8">
        {services.map((service) => (
          <section key={service.id} id={service.id} className="py-14 sm:py-20">
            <Container>
              <Reveal className="grid gap-10 lg:grid-cols-5">
                <div className="lg:col-span-2">
                  <div className="soft mb-8 rounded-[1.75rem] p-3">
                    <div className="soft-inset overflow-hidden rounded-[1.25rem] p-2">
                      <ServiceVisual id={service.id} />
                    </div>
                  </div>
                  <div className="mb-3 flex items-center gap-3">
                    <span className="soft-sm grid size-11 shrink-0 place-items-center rounded-2xl text-accent-text">
                      <Icon name={service.icon} className="size-5" />
                    </span>
                    <h2 className="text-3xl font-extrabold tracking-tight text-balance">{service.title}</h2>
                  </div>
                  <p className="mt-4 text-lg text-muted">{service.short}</p>
                  <p className="soft-inset mt-6 inline-flex rounded-2xl px-5 py-3 text-2xl font-extrabold tracking-tight">
                    {priceLabel(service.price)}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <WhatsAppButton
                      label="Ask about this"
                      text={enquiryMessage(service.title)}
                    />
                    <ButtonLink href="/contact/" variant="ghost">
                      Send an enquiry
                    </ButtonLink>
                  </div>
                </div>
                <div className="space-y-8 lg:col-span-3">
                  <Card>
                    <Label>Who it&apos;s for</Label>
                    <p className="mt-3 text-lg">{service.forWho}</p>
                  </Card>
                  <Card>
                    <Label className="mb-5">What you get</Label>
                    <CheckList items={service.includes} />
                  </Card>
                  <div className="px-1">
                    <Label className="mb-4">Built with</Label>
                    <Chips items={service.tech} />
                  </div>
                </div>
              </Reveal>
            </Container>
          </section>
        ))}
      </div>

      <CtaBand title="Not sure what you need?" text="Tell us about your business on WhatsApp and we'll suggest what will help most. It's free." />
    </>
  );
}
