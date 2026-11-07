import Link from "next/link";
import { nav, site, whatsappLink } from "@/data/site";
import { Logo } from "./Header";
import { Icon } from "./Icons";
import { Container } from "./ui";

export function Footer() {
  return (
    <footer className="on-dark mt-8 rounded-t-[2.5rem] bg-ink text-on-ink">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1.4fr]">
        <div className="sm:col-span-2 lg:col-span-1">
          <Logo />
          <p className="mt-4 max-w-sm text-on-ink-muted">{site.tagline}</p>
          <p className="mt-2 text-sm text-on-ink-muted">
            Founded by {site.owner}
            {site.showCity ? ` · ${site.city}, ${site.country}` : ""}
          </p>
        </div>
        <div>
          <h2 className="mb-4 text-xs font-bold tracking-[0.16em] text-accent uppercase">Pages</h2>
          <ul className="space-y-2.5">
            {[...nav, { href: "/contact/", label: "Contact" }].map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-on-ink-muted transition hover:text-on-ink">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="mb-4 text-xs font-bold tracking-[0.16em] text-accent uppercase">Contact</h2>
          <ul className="space-y-2.5 text-on-ink-muted">
            <li>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-on-ink">
                <Icon name="whatsapp" className="size-4" /> WhatsApp
              </a>
            </li>
            {site.showPhone && (
              <li>
                <a href={`tel:${site.phone}`} className="flex items-center gap-2 hover:text-on-ink">
                  <Icon name="call" className="size-4" /> {site.phoneDisplay}
                </a>
              </li>
            )}
            <li>
              <a href={`mailto:${site.email}`} className="flex items-center gap-2 [overflow-wrap:anywhere] hover:text-on-ink">
                <Icon name="mail" className="size-4 shrink-0" /> {site.email}
              </a>
            </li>
            {site.social.map((s) => (
              <li key={s.url}>
                <a href={s.url} target="_blank" rel="noopener noreferrer me" className="flex items-center gap-2 hover:text-on-ink">
                  <Icon name={s.network === "googleBusiness" ? "pin" : "globe"} className="size-4" /> {s.label}
                </a>
              </li>
            ))}
            <li>
              <a href={site.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-on-ink">
                <Icon name="github" className="size-4" /> GitHub
              </a>
            </li>
          </ul>
        </div>
      </Container>
      <div className="border-t border-white/10">
        <Container className="flex flex-wrap justify-between gap-x-6 gap-y-2 py-6 text-sm text-on-ink-muted">
          <span>
            © {new Date().getFullYear()} {site.name}. Websites, apps &amp; backends{site.showCity ? ` from ${site.city}` : ""}.
          </span>
          <Link href="/privacy/" className="underline-offset-4 hover:text-on-ink hover:underline">
            Privacy Policy
          </Link>
        </Container>
      </div>
    </footer>
  );
}
