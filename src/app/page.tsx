import { CtaBand, ProjectCard, ServiceCard, Steps } from "@/components/blocks";
import { HeroVisual } from "@/components/HeroVisual";
import { Icon } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { ButtonLink, CheckList, Chips, Container, Glow, Section, SectionHeading, WhatsAppButton } from "@/components/ui";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { site } from "@/data/site";

const audiences = [
  {
    title: "Local businesses",
    text: `Clinics, salons, gyms, restaurants and shops in ${site.city} that want more customers from Google and WhatsApp.`,
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
      <section className="relative overflow-hidden">
        <Glow />
        <Container className="relative grid items-center gap-16 pt-14 pb-24 sm:pt-24 lg:grid-cols-2 lg:pb-32">
          <div>
            <p className="mb-5 inline-block rounded-full bg-accent-soft px-3 py-1 text-sm font-semibold text-accent-text">
              Websites · Apps · Backends · {site.city}
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight text-balance sm:text-6xl">
              Websites and apps that bring your business <span className="text-accent-display">more customers</span>.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-pretty text-muted">
              {site.name} builds fast websites with online booking and WhatsApp ordering for local businesses, and
              Android + iOS apps, web apps and cloud backends for startups.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <WhatsAppButton />
              <ButtonLink href="/work/" variant="ghost">
                See my work <Icon name="arrow" className="size-4" />
              </ButtonLink>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
              {["Free sample design before you pay", "Works perfectly on phones", "Pay 50% now, 50% when you're happy"].map((p) => (
                <li key={p} className="flex items-center gap-2">
                  <Icon name="check" className="size-4 text-accent" /> {p}
                </li>
              ))}
            </ul>
          </div>
          <HeroVisual />
        </Container>
      </section>

      <Section alt>
        <SectionHeading eyebrow="Who I help" title="Two kinds of clients, one standard of quality" />
        <div className="grid gap-6 md:grid-cols-2">
          {audiences.map((a) => (
            <Reveal key={a.title}>
              <div className="flex h-full flex-col rounded-2xl border border-line bg-surface p-8">
                <h3 className="text-xl font-bold">{a.title}</h3>
                <p className="mt-3 text-muted">{a.text}</p>
                <CheckList items={a.points} className="mt-6 flex-1" />
                <ButtonLink href={a.href} variant="ghost" className="mt-8 self-start">
                  {a.cta} <Icon name="arrow" className="size-4" />
                </ButtonLink>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Services"
          title="What I can build for you"
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
        <SectionHeading eyebrow="Work" title="Recent projects" lead="Demo projects show what your business could have. Try them on your phone." />
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
