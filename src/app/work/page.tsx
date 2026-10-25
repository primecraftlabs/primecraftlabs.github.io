import type { Metadata } from "next";
import { CtaBand, ProjectCard } from "@/components/blocks";
import { Reveal } from "@/components/Reveal";
import { PageHeader, Section } from "@/components/ui";
import { projects } from "@/data/projects";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Work",
  description: `Demo projects and tools by ${site.name}: a restaurant website, a clinic booking system and an AI lead finder.`,
};

export default function WorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Work"
        title="Projects that show what your business could have"
        lead="Demo projects built the same way as client work, plus my own tools. Open any project to see the problem, the solution and how it was built."
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
