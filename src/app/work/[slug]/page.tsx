import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand, ProjectCover, StatusBadge } from "@/components/blocks";
import { Icon } from "@/components/Icons";
import { ButtonLink, CheckList, Chips, Container } from "@/components/ui";
import { getProject, projects } from "@/data/projects";
import { site } from "@/data/site";
import { jsonLd, organizationId, pageMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return pageMetadata({ path: `/work/${project.slug}/`, title: `${project.title}: Case Study`, description: project.summary });
}

export default async function CaseStudyPage({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const structuredData = {
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${site.url}/` },
          { "@type": "ListItem", position: 2, name: "Work", item: `${site.url}/work/` },
          { "@type": "ListItem", position: 3, name: project.title, item: `${site.url}/work/${project.slug}/` },
        ],
      },
      {
        "@type": "CreativeWork",
        name: project.title,
        description: project.summary,
        url: `${site.url}/work/${project.slug}/`,
        creator: { "@id": organizationId },
        ...(project.image ? { image: `${site.url}${project.image}` } : {}),
        keywords: project.tech.join(", "),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(structuredData)} />
      <section>
        <Container className="pt-12 pb-6 sm:pt-16 sm:pb-10">
          <Link
            href="/work/"
            className="soft-sm soft-press inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-muted hover:text-fg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            <Icon name="arrow" className="size-4 rotate-180 text-accent-text" /> All projects
          </Link>
          <div className="mt-10 grid items-center gap-10 lg:grid-cols-2">
            <div>
              <div className="mb-5 flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold tracking-[0.14em] text-muted uppercase">{project.category}</span>
                <StatusBadge status={project.status} />
              </div>
              <h1 className="text-4xl font-extrabold tracking-tight text-balance sm:text-5xl">{project.title}</h1>
              <p className="mt-5 text-lg text-muted">{project.summary}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                {project.liveUrl ? (
                  <ButtonLink href={project.liveUrl} external>
                    Open live site <Icon name="arrow" className="size-4" />
                  </ButtonLink>
                ) : (
                  <span className="soft-inset inline-flex items-center rounded-2xl px-6 py-3.5 font-semibold text-muted">
                    Live site coming soon
                  </span>
                )}
                {project.codeUrl && (
                  <ButtonLink href={project.codeUrl} variant="ghost" external>
                    <Icon name="github" /> View code
                  </ButtonLink>
                )}
              </div>
            </div>
            <div className="soft rounded-[1.75rem] p-3">
              <div className="soft-inset rounded-[1.25rem] p-1.5">
                <div className="overflow-hidden rounded-2xl">
                  <ProjectCover project={project} preload />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Container className="grid gap-8 py-14 sm:py-20 lg:grid-cols-3">
        <div className="space-y-8 lg:col-span-2">
          <section className="soft rounded-[1.75rem] p-6 sm:p-8">
            <h2 className="text-2xl font-extrabold tracking-tight">
              The <span className="text-accent-display">problem</span>
            </h2>
            <p className="mt-3 text-lg text-muted">{project.problem}</p>
          </section>
          <section className="soft rounded-[1.75rem] p-6 sm:p-8">
            <h2 className="text-2xl font-extrabold tracking-tight">
              The <span className="text-accent-display">solution</span>
            </h2>
            <p className="mt-3 text-lg text-muted">{project.solution}</p>
          </section>
          <section className="soft rounded-[1.75rem] p-6 sm:p-8">
            <h2 className="mb-6 text-xl font-extrabold tracking-tight">Key features</h2>
            <CheckList items={project.features} />
          </section>
        </div>
        <aside className="space-y-8">
          <div className="soft rounded-[1.75rem] p-6">
            <h2 className="mb-5 flex items-center gap-2 text-xs font-bold tracking-[0.14em] text-muted uppercase">
              <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
              Built with
            </h2>
            <Chips items={project.tech} />
          </div>
          {project.status === "in-progress" && (
            <div className="soft-inset rounded-[1.75rem] p-6">
              <h2 className="flex items-center gap-2 font-bold">
                <span aria-hidden="true" className="size-2 shrink-0 rounded-full bg-accent" />
                This demo is being built
              </h2>
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
