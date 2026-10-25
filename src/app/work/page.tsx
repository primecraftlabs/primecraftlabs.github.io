import type { Metadata } from "next";
import { CtaBand, ProjectCard } from "@/components/blocks";
import { Reveal } from "@/components/Reveal";
import { PageHeader, Section } from "@/components/ui";
import { projects } from "@/data/projects";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/work/",
  title: "Our Work: Business Websites, Booking Systems & Apps",
  description: `Demo projects and tools by ${site.name}: a restaurant website with WhatsApp ordering, a clinic booking system and an AI lead finder.`,
});

export default function WorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Work"
        title="Projects that show what your business could have"
        lead="Demo projects built the same way as client work, plus our own tools. Open any project to see the problem, the solution and how it was built."
      />
      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Reveal key={project.slug}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </Section>
      <CtaBand title="Want something like this for your business?" />
    </>
  );
}
