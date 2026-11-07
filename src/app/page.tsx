import { CtaBand, ProjectCard, ServiceCard, Steps } from "@/components/blocks";
import { HeroVisual } from "@/components/HeroVisual";
import { Icon } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { ButtonLink, Card, CheckList, Chips, Container, Eyebrow, Section, SectionHeading, WhatsAppButton } from "@/components/ui";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { inCity, site } from "@/data/site";
import { homeDescription, homeTitle, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ path: "/", title: homeTitle, description: homeDescription, absolute: true });

const audiences = [
  {
    title: "Local businesses",
    text: `Clinics, salons, gyms, restaurants and shops${inCity} that want more customers from Google and WhatsApp.`,
    points: ["Professional website in your budget", "Online booking and WhatsApp ordering", "Free sample before you pay"],
    href: "/services/#websites",
    cta: "Websites & booking",
  },
  {
    title: "Startups & teams",
    text: "Founders who need a reliable Android + iOS app, a web app, or a backend that can grow with them.",
    points: ["Android + iOS from one codebase", "Go & Firebase backends on Google Cloud", "Payments, login and real-time features"],
    href: "/services/#mobile-apps",
    cta: "Apps & backends",
  },
];

const stack = ["Next.js", "React", "Kotlin Multiplatform", "Android", "iOS", "Go", "Node.js", "Firebase", "Google Cloud", "WebRTC", "Tailwind CSS", "AI"];

export default function Home() {
  return (
    <>
      <section className="overflow-hidden">
        <Container className="grid items-center gap-14 pt-10 pb-4 sm:pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:pb-12">
          <div>
            <Eyebrow>Websites · Apps · Backends{site.showCity ? ` · ${site.city}` : ""}</Eyebrow>
            <h1 className="text-[2.6rem] leading-[1.04] font-extrabold tracking-tight text-balance sm:text-7xl">
              Websites and apps that bring your business{" "}
              <span className="relative whitespace-nowrap text-accent-display">
                more customers
                <span aria-hidden="true" className="absolute inset-x-0 -bottom-1 h-2 rounded-full bg-accent/35 sm:h-3" />
              </span>
              .
            </h1>
            <p className="mt-7 max-w-xl text-lg text-pretty text-muted">
              {site.name} builds fast websites with online booking and WhatsApp ordering for local businesses, and
              Android + iOS apps, web apps and cloud backends for startups.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <WhatsAppButton />
              <ButtonLink href="/work/" variant="ghost">
                See our work <Icon name="arrow" className="size-4" />
              </ButtonLink>
            </div>
            <ul className="mt-10 flex flex-wrap gap-3">
              {["Free sample design before you pay", "Works perfectly on phones", "Pay 50% now, 50% when you're happy"].map((p) => (
                <li key={p} className="soft-sm flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold">
                  <Icon name="check" className="size-4 text-accent-text" /> {p}
                </li>
              ))}
            </ul>
          </div>
          <HeroVisual />
        </Container>
      </section>

      <Section alt>
        <SectionHeading eyebrow="Who we help" title="Two kinds of clients, one standard of quality" />
        <div className="grid gap-6 md:grid-cols-2">
          {audiences.map((a) => (
            <Reveal key={a.title}>
              <Card className="flex h-full flex-col">
                <h3 className="text-2xl font-extrabold tracking-tight">{a.title}</h3>
                <p className="mt-3 text-muted">{a.text}</p>
                <CheckList items={a.points} className="mt-6 flex-1" />
                <ButtonLink href={a.href} variant="ghost" className="mt-8 self-start">
                  {a.cta} <Icon name="arrow" className="size-4" />
                </ButtonLink>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Services"
          title="What we can build for you"
          lead="Simple tools that help customers find you, trust you and contact you, plus serious engineering when you need it."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Reveal key={service.id}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section alt>
        <SectionHeading eyebrow="Work" title="Recent projects" lead="Complete websites built to client standard. Try them on your phone." />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Reveal key={project.slug}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="How it works" title="No risk, no confusing tech talk" />
        <Reveal>
          <Steps />
        </Reveal>
      </Section>

      <Section alt>
        <SectionHeading center eyebrow="Technology" title="Built with modern, proven tools" />
        <div className="flex justify-center">
          <Chips items={stack} />
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
