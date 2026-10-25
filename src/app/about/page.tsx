import type { Metadata } from "next";
import { CtaBand } from "@/components/blocks";
import { Reveal } from "@/components/Reveal";
import { CheckList, Chips, PageHeader, Section, SectionHeading } from "@/components/ui";
import { cityBased, site } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    `${site.name} is a ${cityBased}studio building websites, mobile apps and backends, founded by software engineer ${site.owner}.`,
};

const highlights = [
  "Moved backend services to an event-driven architecture for reliability",
  "Set up cloud environments and production launches from scratch",
  "Built secure account flows: login, roles, phone verification, account deletion",
  "Wrote security tests for database rules and fixed hard production bugs with clear post-mortems",
];

const skills = [
  { group: "Mobile", items: ["Kotlin Multiplatform", "Compose", "Android", "iOS", "Kotlin", "Java"] },
  { group: "Backend", items: ["Go", "gRPC", "Node.js", "REST APIs", "Event-driven systems", "MongoDB", "SQL"] },
  { group: "Cloud & DevOps", items: ["Google Cloud", "Cloud Run", "Firebase", "CI/CD pipelines", "App Store & Play Store releases"] },
  { group: "Features", items: ["Payments & subscriptions", "Push notifications", "Login & OTP", "Real-time audio/video", "WhatsApp bots"] },
  { group: "Web & engineering", items: ["Next.js", "React", "Clean Architecture", "Security testing", "Python", "AI-assisted development"] },
];

const values = [
  { title: "Clear prices", text: "A fixed price agreed before work starts. No hidden costs." },
  { title: "Simple communication", text: "Plain language on WhatsApp, with regular progress updates." },
  { title: "Quality code", text: "Fast, secure and easy to grow, built the way production apps are built." },
  { title: "Support after launch", text: "One month of free fixes, and help whenever you need changes." },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Professional engineering for growing businesses"
        lead={`${site.name} is a ${cityBased}studio building websites, mobile apps and backends with the same quality used in production apps.`}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-5 text-lg text-muted">
            <p className="text-2xl font-bold text-fg">We build software that helps businesses grow.</p>
            <p>
              {site.name} is a {cityBased}studio for websites, mobile apps and backends. We work with local
              businesses that want more customers online, and with startups that need a reliable app or backend,
              wherever they are.
            </p>
            <p>
              The studio was founded by {site.owner}, a software engineer and team lead with a B.Tech in Information
              Technology, who leads development of a cross-platform product end to end: the Android + iOS app, Go
              microservices on Google Cloud, real-time audio/video, payments, notifications, and the cloud environments
              and release pipelines behind it.
            </p>
            <p>
              We bring that same engineering quality to every project: clean code, fast pages, and software that&apos;s
              easy to grow later.
            </p>
          </div>
          <Reveal>
            <div className="rounded-2xl border border-line bg-surface p-6 sm:p-8">
              <h2 className="mb-5 text-xl font-bold">Founder&apos;s experience</h2>
              <CheckList items={highlights} />
            </div>
          </Reveal>
        </div>
      </Section>

      <Section alt>
        <SectionHeading eyebrow="Technology" title="What we work with" />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s) => (
            <Reveal key={s.group}>
              <h3 className="mb-3 text-sm font-semibold tracking-wide text-muted uppercase">{s.group}</h3>
              <Chips items={s.items} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="How we work" title="What you can expect" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div key={v.title} className="rounded-2xl border border-line bg-surface p-6">
              <h3 className="font-bold">{v.title}</h3>
              <p className="mt-2 text-muted">{v.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
