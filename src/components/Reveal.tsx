import type { ReactNode } from "react";

/**
 * Fades content in as it scrolls into view, using CSS scroll-driven animations (see globals.css).
 * Browsers without support simply show the content, so it can never get stuck hidden.
 */
export function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`reveal ${className}`}>{children}</div>;
}
