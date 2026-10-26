import Link from "next/link";
import type { ReactNode } from "react";
import { Icon } from "./Icons";
import { whatsappLink } from "@/data/site";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 ${className}`}>{children}</div>;
}

export function Section({
  children,
  alt = false,
  id,
  className = "",
}: {
  children: ReactNode;
  alt?: boolean;
  id?: string;
  className?: string;
}) {
  return (
    <section id={id} className={`py-16 sm:py-24 ${alt ? "bg-bg-alt" : ""} ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  center = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  center?: boolean;
}) {
  return (
    <div className={`mb-10 sm:mb-14 ${center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}`}>
      {eyebrow && <p className="mb-3 text-sm font-semibold tracking-wide text-brand uppercase">{eyebrow}</p>}
      <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">{title}</h2>
      {lead && <p className="mt-4 text-lg text-pretty text-muted">{lead}</p>}
    </div>
  );
}

export function PageHeader({ eyebrow, title, lead }: { eyebrow: string; title: ReactNode; lead: ReactNode }) {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <Glow />
      <Container className="relative py-16 sm:py-24">
        <p className="mb-4 inline-block rounded-full bg-brand-soft px-3 py-1 text-sm font-semibold text-brand">{eyebrow}</p>
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-balance sm:text-5xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-lg text-pretty text-muted">{lead}</p>
      </Container>
    </section>
  );
}

export function Glow() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -top-32 -right-24 size-[28rem] rounded-full bg-navy-600/15 blur-3xl" />
      <div className="absolute -bottom-40 -left-24 size-[24rem] rounded-full bg-accent/15 blur-3xl" />
    </div>
  );
}

const buttonStyles = {
  primary: "bg-brand text-on-brand hover:bg-brand-strong",
  whatsapp: "bg-whatsapp text-white hover:bg-whatsapp-strong",
  ghost: "border border-line bg-surface/60 text-fg hover:bg-bg-alt",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof buttonStyles;
  external?: boolean;
  className?: string;
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 font-semibold transition hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${buttonStyles[variant]} ${className}`;
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

export function WhatsAppButton({ text, label = "Chat on WhatsApp", className = "" }: { text?: string; label?: string; className?: string }) {
  return (
    <ButtonLink href={whatsappLink(text)} variant="whatsapp" external className={className}>
      <Icon name="whatsapp" />
      {label}
    </ButtonLink>
  );
}

export function CheckList({ items, className = "" }: { items: string[]; className?: string }) {
  return (
    <ul className={`space-y-2.5 ${className}`}>
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-muted">
          <Icon name="check" className="mt-0.5 size-5 shrink-0 text-brand" />
          {/* min-w-0 + anywhere: long words/URLs wrap instead of widening the page on small phones */}
          <span className="min-w-0 [overflow-wrap:anywhere]">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function Chips({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li key={item} className="rounded-full border border-line bg-surface px-3 py-1 text-sm font-medium">
          {item}
        </li>
      ))}
    </ul>
  );
}

export function IconBadge({ children }: { children: ReactNode }) {
  return <div className="mb-5 grid size-12 place-items-center rounded-xl bg-brand-soft text-brand">{children}</div>;
}
