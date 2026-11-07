import Link from "next/link";
import type { ReactNode } from "react";
import { Icon } from "./Icons";
import { whatsappLink } from "@/data/site";

// Design system: "soft UI" on a porcelain canvas (see globals.css: .soft raised, .soft-inset pressed,
// .soft-press tactile, .solid-lift for solid buttons). Main actions stay solid and high-contrast.

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 ${className}`}>{children}</div>;
}

export function Section({
  children,
  id,
  className = "",
}: {
  children: ReactNode;
  /** Kept for older call sites; soft UI uses one continuous canvas, so it no longer changes the background. */
  alt?: boolean;
  id?: string;
  className?: string;
}) {
  return (
    <section id={id} className={`py-16 sm:py-24 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

/** Small label above a heading: a soft pill with a gold dot. */
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="soft-sm mb-5 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold tracking-[0.14em] text-muted uppercase">
      <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
      {children}
    </p>
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
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="text-3xl font-extrabold tracking-tight text-balance sm:text-5xl">{title}</h2>
      {lead && <p className="mt-5 text-lg text-pretty text-muted">{lead}</p>}
    </div>
  );
}

export function PageHeader({ eyebrow, title, lead }: { eyebrow: string; title: ReactNode; lead: ReactNode }) {
  return (
    <section>
      <Container className="pt-14 pb-6 sm:pt-20 sm:pb-10">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight text-balance sm:text-6xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg text-pretty text-muted">{lead}</p>
      </Container>
    </section>
  );
}

/** Raised soft card - the basic container for content blocks. */
export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`soft rounded-[1.75rem] p-6 sm:p-8 ${className}`}>{children}</div>;
}

const buttonStyles = {
  primary: "solid-lift bg-brand text-on-brand hover:bg-brand-strong",
  gold: "solid-lift bg-accent text-ink hover:bg-gold-300",
  whatsapp: "solid-lift bg-whatsapp text-white hover:bg-whatsapp-strong",
  ghost: "soft-sm soft-press text-fg",
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
  const classes = `inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3.5 font-semibold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent ${buttonStyles[variant]} ${className}`;
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
    <ul className={`space-y-3 ${className}`}>
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-muted">
          <span className="soft-inset mt-0.5 grid size-6 shrink-0 place-items-center rounded-full text-accent-text">
            <Icon name="check" className="size-3.5" />
          </span>
          {/* min-w-0 + anywhere: long words/URLs wrap instead of widening the page on small phones */}
          <span className="min-w-0 [overflow-wrap:anywhere]">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function Chips({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-3">
      {items.map((item) => (
        <li key={item} className="soft-sm rounded-full px-4 py-2 text-sm font-semibold">
          {item}
        </li>
      ))}
    </ul>
  );
}

/** Icon in a pressed-in tile. */
export function IconBadge({ children }: { children: ReactNode }) {
  return <div className="soft-inset mb-6 grid size-14 place-items-center rounded-2xl text-accent-text">{children}</div>;
}
