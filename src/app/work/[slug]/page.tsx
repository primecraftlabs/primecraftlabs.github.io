import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand, ProjectCover, StatusBadge } from "@/components/blocks";
import { Icon } from "@/components/Icons";
import { ButtonLink, CheckList, Chips, Container } from "@/components/ui";
import { getProject, projects } from "@/data/projects";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return { title: project.title, description: project.summary };
}

export default async function CaseStudyPage({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <>
      <section className="border-b border-line">
        <Container className="py-12 sm:py-16">
          <Link href="/work/" className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted hover:text-fg">
            <Icon name="arrow" className="size-4 rotate-180" /> All projects
          </Link>
          <div className="mt-8 grid items-center gap-10 lg:grid-cols-2">
            <div>
              <div className="mb-4 flex flex-wrap items-center gap-2">
                <span className="text-sm font-semibold tracking-wide text-muted uppercase">{project.category}</span>
                <StatusBadge status={project.status} />
              </div>
              <h1 className="text-4xl font-extrabold tracking-tight text-balance sm:text-5xl">{project.title}</h1>
              <p className="mt-5 text-lg text-muted">{project.summary}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                {project.liveUrl ? (
                  <ButtonLink href={project.liveUrl} external>
                    Open live demo <Icon name="arrow" className="size-4" />
                  </ButtonLink>
                ) : (
                  <span className="inline-flex items-center rounded-xl border border-dashed border-line px-5 py-3 font-semibold text-muted">
                    Live demo coming soon
                  </span>
                )}
                {project.codeUrl && (
                  <ButtonLink href={project.codeUrl} variant="ghost" external>
                    <Icon name="github" /> View code
                  </ButtonLink>
                )}
              </div>
            </div>
            <ProjectCover project={project} className="rounded-3xl border border-line shadow-xl" preload />

          </div>
        </Container>
      </section>

      <Container className="grid gap-8 py-14 sm:py-20 lg:grid-cols-3">
        <div className="space-y-8 lg:col-span-2">
          <section>
            <h2 className="text-2xl font-bold">The problem</h2>
            <p className="mt-3 text-lg text-muted">{project.problem}</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold">The solution</h2>
            <p className="mt-3 text-lg text-muted">{project.solution}</p>
          </section>
          <section className="rounded-2xl border border-line bg-surface p-6 sm:p-8">
            <h2 className="mb-5 text-xl font-bold">Key features</h2>
            <CheckList items={project.features} />
          </section>
        </div>
        <aside className="space-y-6">
          <div className="rounded-2xl border border-line bg-bg-alt p-6">
            <h2 className="mb-4 text-sm font-semibold tracking-wide text-muted uppercase">Built with</h2>
            <Chips items={project.tech} />
          </div>
          {project.status === "in-progress" && (
            <div className="rounded-2xl border border-line bg-accent-soft p-6">
              <h2 className="font-bold">This demo is being built</h2>
              <p className="mt-2 text-muted">
                The live version will be linked here soon. Want the same for your business? Message us and we&apos;ll
                show you a free sample.
              </p>
            </div>
          )}
        </aside>
      </Container>

      <CtaBand title="Want something like this for your business?" />
    </>
  );
}
