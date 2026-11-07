import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Icon, type IconName } from "@/components/Icons";
import { PageHeader, Section } from "@/components/ui";
import { site, whatsappLink } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/contact/",
  title: "Contact Us: Get a Free Website Sample",
  description: `Get a free sample design for your business website. Message ${site.name} on WhatsApp${site.showPhone ? ", email or phone" : " or email"}.`,
});

type Method = { icon: IconName; title: string; value: string; href: string; external?: boolean };
const methods: Method[] = [
  { icon: "whatsapp", title: "WhatsApp", value: "Fastest reply", href: whatsappLink(), external: true },
  ...(site.showPhone ? [{ icon: "call", title: "Phone", value: site.phoneDisplay, href: `tel:${site.phone}` } as Method] : []),
  { icon: "mail", title: "Email", value: site.email, href: `mailto:${site.email}` },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's talk about your business"
        lead="Tell us what you need and get a free sample design. We usually reply the same day."
      />
      <Section>
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
          <aside className="space-y-5">
            {methods.map((m) => (
              <a
                key={m.title}
                href={m.href}
                {...(m.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="soft soft-press group flex items-center gap-4 rounded-3xl p-5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                <span
                  className={`soft-inset grid size-12 shrink-0 place-items-center rounded-2xl ${
                    m.icon === "whatsapp" ? "text-whatsapp" : "text-accent-text"
                  }`}
                >
                  <Icon name={m.icon} className="size-6" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-bold">{m.title}</span>
                  <span className="block text-sm break-all text-muted">{m.value}</span>
                </span>
                <Icon name="arrow" className="size-4 shrink-0 text-accent-text transition group-hover:translate-x-1" />
              </a>
            ))}
            <div className="soft-inset flex items-center gap-4 rounded-3xl p-5">
              <span className="soft-sm grid size-12 shrink-0 place-items-center rounded-2xl text-accent-text">
                <Icon name="pin" className="size-6" />
              </span>
              <span>
                <span className="block font-bold">{site.showCity ? `Based in ${site.city}` : "Work with us from anywhere"}</span>
                <span className="block text-sm text-muted">
                  {site.showCity ? "Meet in person or work online" : "Everything happens online over WhatsApp and video calls"}
                </span>
              </span>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
