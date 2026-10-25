import type { Metadata } from "next";
import { CtaBand } from "@/components/blocks";
import { Icon } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { ServiceVisual } from "@/components/ServiceVisual";
import { ButtonLink, CheckList, Chips, Container, PageHeader, WhatsAppButton } from "@/components/ui";
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
        <nav aria-label="Services on this page" className="flex flex-wrap gap-2">
          {services.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="rounded-full border border-line bg-surface px-4 py-2 text-sm font-medium text-muted transition hover:border-brand hover:text-fg"
            >
              {s.title}
            </a>
          ))}
        </nav>
      </Container>

      <div className="pb-8">
        {services.map((service, i) => (
          <section key={service.id} id={service.id} className={`py-14 sm:py-20 ${i % 2 === 1 ? "bg-bg-alt" : ""}`}>
            <Container>
              <Reveal className="grid gap-10 lg:grid-cols-5">
                <div className="lg:col-span-2">
                  <ServiceVisual id={service.id} className="mb-8 rounded-2xl border border-line bg-surface p-2 shadow-sm" />
                  <div className="mb-3 flex items-center gap-3">
                    <span className="grid size-10 place-items-center rounded-xl bg-brand-soft text-brand">
                      <Icon name={service.icon} className="size-5" />
                    </span>
                    <h2 className="text-3xl font-bold tracking-tight">{service.title}</h2>
                  </div>
                  <p className="mt-4 text-lg text-muted">{service.short}</p>
                  <p className="mt-6 text-2xl font-extrabold">{priceLabel(service.price)}</p>
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
                <div className="space-y-6 lg:col-span-3">
                  <div className="rounded-2xl border border-line bg-surface p-6 sm:p-8">
                    <h3 className="text-sm font-semibold tracking-wide text-muted uppercase">Who it&apos;s for</h3>
                    <p className="mt-2 text-lg">{service.forWho}</p>
                  </div>
                  <div className="rounded-2xl border border-line bg-surface p-6 sm:p-8">
                    <h3 className="mb-4 text-sm font-semibold tracking-wide text-muted uppercase">What you get</h3>
                    <CheckList items={service.includes} />
                  </div>
                  <div>
                    <h3 className="mb-3 text-sm font-semibold tracking-wide text-muted uppercase">Built with</h3>
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
