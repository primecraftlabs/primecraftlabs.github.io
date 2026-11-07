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
      <span className="mt-1 block text-[10px] font-bold tracking-[0.42em] opacity-60">{site.wordmark.suffix}</span>
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
    <header className="sticky top-0 z-50 pt-3 sm:pt-4">
      <Container>
        <div className="soft flex h-16 items-center justify-between rounded-full bg-bg/90 pr-2 pl-5 backdrop-blur-md sm:pl-6">
          <Logo />
          <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`rounded-full px-4 py-2 font-semibold transition ${
                  isActive(item.href) ? "soft-inset text-fg" : "text-muted hover:text-fg"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact/"
              className="solid-lift ml-2 rounded-full bg-accent px-5 py-2.5 font-bold text-ink hover:bg-gold-300"
            >
              Get a free sample
            </Link>
          </nav>
          <button
            type="button"
            className="soft-sm soft-press grid size-11 place-items-center rounded-full md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
          >
            <Icon name={open ? "close" : "menu"} className="size-5" />
          </button>
        </div>
        {open && (
          <nav id="mobile-menu" className="soft mt-3 rounded-[1.75rem] p-3 md:hidden" aria-label="Mobile">
            {[...nav, { href: "/contact/", label: "Contact" }].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`block rounded-2xl px-4 py-3 font-semibold ${isActive(item.href) ? "soft-inset" : ""}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </Container>
    </header>
  );
}
