"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav, site } from "@/data/site";
import { Icon } from "./Icons";
import { LogoMark } from "./LogoMark";
import { Container } from "./ui";

export function Wordmark() {
  return (
    <span className="leading-none">
      <span className="block text-lg font-extrabold tracking-tight">
        {site.wordmark.first}
        <span className="text-accent">{site.wordmark.second}</span>
      </span>
      <span className="mt-1 block text-[10px] font-bold tracking-[0.42em] text-muted">{site.wordmark.suffix}</span>
    </span>
  );
}

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5" aria-label={`${site.name}, home`}>
      <LogoMark className="size-9" />
      <Wordmark />
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isActive = (href: string) => pathname === href || pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/85 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`font-medium transition hover:text-fg ${isActive(item.href) ? "text-brand" : "text-muted"}`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact/"
            className="rounded-xl bg-brand px-4 py-2 font-semibold text-on-brand transition hover:bg-brand-strong"
          >
            Get a free sample
          </Link>
        </nav>
        <button
          type="button"
          className="-mr-2 p-2 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          <Icon name={open ? "close" : "menu"} className="size-6" />
        </button>
      </Container>
      {open && (
        <nav id="mobile-menu" className="border-t border-line bg-bg md:hidden" aria-label="Mobile">
          <Container className="flex flex-col py-3">
            {[...nav, { href: "/contact/", label: "Contact" }].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`py-3 font-medium ${isActive(item.href) ? "text-brand" : "text-fg"}`}
              >
                {item.label}
              </Link>
            ))}
          </Container>
        </nav>
      )}
    </header>
  );
}
