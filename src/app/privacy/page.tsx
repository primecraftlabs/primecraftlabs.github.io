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
      <Container className="max-w-3xl py-14 sm:py-20">
        <div className="space-y-10">
          {privacySections.map((section) => (
            <section key={section.title}>
              <h2 className="text-2xl font-bold tracking-tight">{section.title}</h2>
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
