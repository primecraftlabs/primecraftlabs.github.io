import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Icon, type IconName } from "@/components/Icons";
import { PageHeader, Section } from "@/components/ui";
import { site, whatsappLink } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get a free sample design for your business website. Message ${site.name} on WhatsApp, email or phone.`,
};

const methods: { icon: IconName; title: string; value: string; href: string; external?: boolean }[] = [
  { icon: "whatsapp", title: "WhatsApp", value: "Fastest reply", href: whatsappLink(), external: true },
  { icon: "call", title: "Phone", value: site.phoneDisplay, href: `tel:${site.phone}` },
  { icon: "mail", title: "Email", value: site.email, href: `mailto:${site.email}` },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's talk about your business"
        lead="Tell me what you need and get a free sample design. I usually reply the same day."
      />
      <Section>
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
          <aside className="space-y-4">
            {methods.map((m) => (
              <a
                key={m.title}
                href={m.href}
                {...(m.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="flex items-center gap-4 rounded-2xl border border-line bg-surface p-5 transition hover:-translate-y-0.5 hover:border-brand/50"
              >
                <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand">
                  <Icon name={m.icon} className="size-6" />
                </span>
                <span className="min-w-0">
                  <span className="block font-bold">{m.title}</span>
                  <span className="block text-sm break-all text-muted">{m.value}</span>
                </span>
              </a>
            ))}
            <div className="flex items-center gap-4 rounded-2xl border border-line bg-bg-alt p-5">
              <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-accent-soft text-accent-text">
                <Icon name="pin" className="size-6" />
              </span>
              <span>
                <span className="block font-bold">Based in {site.city}</span>
                <span className="block text-sm text-muted">Meet in person or work online</span>
              </span>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
