import type { Metadata } from "next";
import { ButtonLink, Container, Eyebrow } from "@/components/ui";

export const metadata: Metadata = { title: "Page not found", robots: { index: false, follow: true } };

export default function NotFound() {
  return (
    <Container className="py-24 text-center sm:py-32">
      <div aria-hidden="true" className="soft-inset mx-auto mb-8 grid size-28 place-items-center rounded-full">
        <span className="text-4xl font-extrabold tracking-tight text-accent-display">404</span>
      </div>
      <Eyebrow>Page not found</Eyebrow>
      <h1 className="text-4xl font-extrabold tracking-tight text-balance sm:text-5xl">This page doesn&apos;t exist</h1>
      <p className="mx-auto mt-4 max-w-md text-lg text-muted">The link may be old or mistyped. Let&apos;s get you back on track.</p>
      <div className="mt-9 flex flex-wrap justify-center gap-3">
        <ButtonLink href="/">Go to home</ButtonLink>
        <ButtonLink href="/contact/" variant="ghost">
          Contact us
        </ButtonLink>
      </div>
    </Container>
  );
}
