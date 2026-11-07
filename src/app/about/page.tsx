import type { Metadata } from "next";
import { CtaBand } from "@/components/blocks";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/Icons";
import { Card, CheckList, Chips, PageHeader, Section, SectionHeading } from "@/components/ui";
import { highlights, skills, values } from "@/data/about";
import { cityBased, site } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/about/",
  title: "About Us: Website & App Development Studio",
  description: `${site.name} is a ${cityBased}studio building websites, mobile apps and backends, founded by software engineer ${site.owner}.`,
});

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
            <p className="text-2xl font-extrabold tracking-tight text-fg">
              We build software that helps businesses <span className="text-accent-display">grow</span>.
            </p>
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
            <Card>
              <h2 className="mb-6 text-xl font-extrabold tracking-tight">Founder&apos;s experience</h2>
              <CheckList items={highlights} />
            </Card>
          </Reveal>
        </div>
      </Section>

      <Section alt>
        <SectionHeading eyebrow="Technology" title="What we work with" />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s) => (
            <Reveal key={s.group} className="soft rounded-[1.75rem] p-6">
              <h3 className="mb-5 flex items-center gap-2 text-xs font-bold tracking-[0.14em] text-muted uppercase">
                <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
                {s.group}
              </h3>
              <Chips items={s.items} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="How we work" title="What you can expect" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div key={v.title} className="soft rounded-[1.75rem] p-6">
              <span className="soft-inset mb-5 grid size-11 place-items-center rounded-2xl text-accent-text">
                <Icon name="check" className="size-5" />
              </span>
              <h3 className="text-lg font-bold">{v.title}</h3>
              <p className="mt-2 text-muted">{v.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
