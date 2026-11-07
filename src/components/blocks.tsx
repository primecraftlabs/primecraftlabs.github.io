import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";
import type { Service } from "@/data/services";
import { faqs } from "@/data/pricing";
import { priceLabel } from "@/data/site";
import { Icon } from "./Icons";
import { ServiceVisual } from "./ServiceVisual";
import { ButtonLink, Container, WhatsAppButton } from "./ui";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/#${service.id}`}
      className="soft soft-press group flex h-full flex-col overflow-hidden rounded-[1.75rem] p-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
    >
      <div className="soft-inset overflow-hidden rounded-[1.25rem] p-2">
        <ServiceVisual id={service.id} className="transition duration-500 group-hover:scale-[1.02]" />
      </div>
      <div className="flex flex-1 flex-col px-3 pt-6 pb-3">
        <div className="mb-3 flex items-center gap-3">
          <span className="soft-sm grid size-9 place-items-center rounded-xl text-accent-text">
            <Icon name={service.icon} className="size-4" />
          </span>
          <h3 className="text-lg font-bold">{service.title}</h3>
        </div>
        <p className="flex-1 text-muted">{service.short}</p>
        <p className="mt-5 flex items-center gap-1.5 text-sm font-bold text-fg">
          {priceLabel(service.price)}
          <Icon name="arrow" className="size-4 text-accent-text transition group-hover:translate-x-1" />
        </p>
      </div>
    </Link>
  );
}

/** Project image: a real screenshot when there is one, otherwise the matching animated illustration. */
export function ProjectCover({ project, className = "", preload = false }: { project: Project; className?: string; preload?: boolean }) {
  if (project.image) {
    return (
      <Image
        src={project.image}
        alt={`Screenshot of the ${project.title.toLowerCase()} project`}
        width={1280}
        height={800}
        unoptimized
        preload={preload}
        className={`aspect-[16/10] w-full object-cover object-top ${className}`}
      />
    );
  }
  return <ServiceVisual id={project.visual ?? ""} className={`overflow-hidden ${className}`} />;
}

export function StatusBadge({ status }: { status: Project["status"] }) {
  return status === "live" ? (
    <span className="soft-inset inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-bold text-whatsapp">
      <span aria-hidden="true" className="size-1.5 rounded-full bg-whatsapp" />
      Live
    </span>
  ) : (
    <span className="soft-inset rounded-full px-2.5 py-0.5 text-xs font-bold text-accent-text">In progress</span>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}/`}
      className="soft soft-press group flex h-full flex-col overflow-hidden rounded-[1.75rem] p-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
    >
      <div className="soft-inset overflow-hidden rounded-[1.25rem] p-1.5">
        <div className="overflow-hidden rounded-2xl">
          <ProjectCover project={project} className="transition duration-500 group-hover:scale-[1.03]" />
        </div>
      </div>
      <div className="flex flex-1 flex-col px-3 pt-6 pb-3">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold tracking-[0.12em] text-muted uppercase">{project.category}</span>
          <StatusBadge status={project.status} />
        </div>
        <h3 className="text-xl font-bold">{project.title}</h3>
        <p className="mt-2 flex-1 text-muted">{project.summary}</p>
        <p className="mt-5 flex items-center gap-1.5 text-sm font-bold">
          View case study <Icon name="arrow" className="size-4 text-accent-text transition group-hover:translate-x-1" />
        </p>
      </div>
    </Link>
  );
}

export const steps = [
  { title: "Free chat", text: "Tell us about your business on WhatsApp or a quick call. We'll suggest what will help most." },
  { title: "Free sample design", text: "We make a sample of your homepage so you can see it before deciding anything." },
  { title: "Build", text: "You pay 50% to start. We build and share progress so you can ask for changes." },
  { title: "Launch & support", text: "Your site goes live, you pay the rest, and you get one month of free fixes." },
];

/** The 4-step process as a pressed track with raised step knobs. */
export function Steps() {
  return (
    <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((step, i) => (
        <li key={step.title} className="soft rounded-[1.75rem] p-6">
          <div className="soft-inset mb-6 flex items-center gap-3 rounded-full p-1.5">
            <span className="grid size-10 shrink-0 place-items-center rounded-full bg-ink text-sm font-extrabold text-accent">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="h-1.5 flex-1 rounded-full bg-line">
              <span className="block h-full rounded-full bg-accent" style={{ width: `${((i + 1) / steps.length) * 100}%` }} />
            </span>
          </div>
          <h3 className="text-lg font-bold">{step.title}</h3>
          <p className="mt-2 text-muted">{step.text}</p>
        </li>
      ))}
    </ol>
  );
}

export function Faq({ items = faqs }: { items?: typeof faqs }) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <details key={item.q} className="soft group rounded-3xl px-6 py-5">
          <summary className="flex cursor-pointer items-center justify-between gap-4 font-bold">
            {item.q}
            <span className="faq-knob soft-sm grid size-9 shrink-0 place-items-center rounded-full text-accent-text">
              <Icon name="plus" className="faq-icon size-4 transition" />
            </span>
          </summary>
          <p className="mt-3 text-muted">{item.a}</p>
        </details>
      ))}
    </div>
  );
}

/** Closing call to action: a deep ink panel - the one dark, high-contrast moment on each page. */
export function CtaBand({
  title = "Let's grow your business",
  text = "Message us for a free sample design. We usually reply the same day.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="solid-lift on-dark relative overflow-hidden rounded-[2rem] bg-ink px-6 py-14 text-center text-on-ink sm:px-12 sm:py-20">
          <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-transparent via-accent to-transparent" />
          <h2 className="text-3xl font-extrabold tracking-tight text-balance sm:text-5xl">
            {title}
            {/* gold full stop as a signature, unless the title already ends with punctuation */}
            {!/[.?!]$/.test(title) && <span className="text-accent">.</span>}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-on-ink-muted">{text}</p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <WhatsAppButton />
            <ButtonLink href="/contact/" variant="gold">
              Send an enquiry
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
