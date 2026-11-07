import type { Metadata } from "next";
import { CheckList, Container, PageHeader } from "@/components/ui";
import { privacySections, privacyUpdated } from "@/data/privacy";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/privacy/",
  title: "Privacy Policy",
  description: `How ${site.name} handles your details: enquiries, WhatsApp and email, analytics, cookies and your choices.`,
});

export default function PrivacyPage() {
  return (
    <>
      <PageHeader eyebrow="Privacy" title="Privacy Policy" lead={`Plain-English details on what this website collects and why. Last updated ${privacyUpdated}.`} />
      <Container className="max-w-3xl pt-8 pb-16 sm:pt-10 sm:pb-24">
        <div className="space-y-8">
          {privacySections.map((section) => (
            <section key={section.title} className="soft rounded-[1.75rem] p-6 sm:p-8">
              <h2 className="flex items-center gap-3 text-2xl font-extrabold tracking-tight">
                <span aria-hidden="true" className="size-2 shrink-0 rounded-full bg-accent" />
                {section.title}
              </h2>
              {section.paragraphs.map((p) => (
                <p key={p} className="mt-3 text-lg text-pretty text-muted [overflow-wrap:anywhere]">
                  {p}
                </p>
              ))}
              {section.points && <CheckList items={section.points} className="mt-4" />}
            </section>
          ))}
        </div>
      </Container>
    </>
  );
}
