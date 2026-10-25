import type { Metadata } from "next";
import { ButtonLink, Container } from "@/components/ui";

export const metadata: Metadata = { title: "Page not found", robots: { index: false, follow: true } };

export default function NotFound() {
  return (
    <Container className="py-24 text-center sm:py-32">
      <p className="text-sm font-semibold tracking-wide text-accent-text uppercase">Page not found</p>
      <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">This page doesn&apos;t exist</h1>
      <p className="mx-auto mt-4 max-w-md text-lg text-muted">The link may be old or mistyped. Let&apos;s get you back on track.</p>
      <div className="mt-8 flex justify-center gap-3">
        <ButtonLink href="/">Go to home</ButtonLink>
        <ButtonLink href="/contact/" variant="ghost">
          Contact us
        </ButtonLink>
      </div>
    </Container>
  );
}
