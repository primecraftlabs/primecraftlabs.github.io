import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";
import type { Service } from "@/data/services";
import { faqs } from "@/data/pricing";
import { priceLabel } from "@/data/site";
import { Icon } from "./Icons";
import { ServiceVisual } from "./ServiceVisual";
import { ButtonLink, Container, Glow, WhatsAppButton } from "./ui";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/#${service.id}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-sm transition hover:-translate-y-1 hover:border-brand/50 hover:shadow-lg"
    >
      <ServiceVisual id={service.id} className="p-3 pb-0 transition duration-500 group-hover:scale-[1.02]" />
      <div className="flex flex-1 flex-col p-6 pt-5">
        <div className="mb-2 flex items-center gap-2.5">
          <span className="grid size-8 place-items-center rounded-lg bg-brand-soft text-brand">
            <Icon name={service.icon} className="size-4" />
          </span>
          <h3 className="text-lg font-semibold">{service.title}</h3>
        </div>
        <p className="flex-1 text-muted">{service.short}</p>
        <p className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-brand">
          {priceLabel(service.price)}
          <Icon name="arrow" className="size-4 transition group-hover:translate-x-1" />
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
    <span className="rounded-full bg-brand-soft px-2.5 py-0.5 text-xs font-semibold text-brand">Live</span>
  ) : (
    <span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-semibold text-amber-800 dark:bg-amber-500/15 dark:text-amber-300">
      In progress
    </span>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}/`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="overflow-hidden border-b border-line">
        <ProjectCover project={project} className="transition duration-500 group-hover:scale-[1.03]" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-center gap-2">
          <span className="text-xs font-semibold tracking-wide text-muted uppercase">{project.category}</span>
          <StatusBadge status={project.status} />
        </div>
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <p className="mt-2 flex-1 text-muted">{project.summary}</p>
        <p className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-brand">
          View case study <Icon name="arrow" className="size-4 transition group-hover:translate-x-1" />
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

export function Steps() {
  return (
    <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((step, i) => (
        <li key={step.title} className="relative rounded-2xl border border-line bg-surface p-6">
          <span className="mb-4 grid size-10 place-items-center rounded-full bg-brand text-sm font-bold text-on-brand">
            {i + 1}
          </span>
          <h3 className="font-semibold">{step.title}</h3>
          <p className="mt-2 text-muted">{step.text}</p>
        </li>
      ))}
    </ol>
  );
}

export function Faq({ items = faqs }: { items?: typeof faqs }) {
  return (
    <div className="divide-y divide-line rounded-2xl border border-line bg-surface">
      {items.map((item) => (
        <details key={item.q} className="group p-6">
          <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold">
            {item.q}
            <Icon name="plus" className="faq-icon size-5 shrink-0 text-brand transition" />
          </summary>
          <p className="mt-3 text-muted">{item.a}</p>
        </details>
      ))}
    </div>
  );
}

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
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br from-navy-800 to-navy-900 px-6 py-14 text-center text-white sm:px-12">
          <Glow />
          <div className="relative">
            <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">
              {title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">{text}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <WhatsAppButton />
              <ButtonLink href="/contact/" variant="ghost" className="border-white/30 bg-white/10 text-white hover:bg-white/20">
                Send an enquiry
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
