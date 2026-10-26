"use client";

import { useEffect } from "react";
import { leadMethodForHref, trackLead } from "@/lib/track";

/** One listener for the whole site: any WhatsApp or email link click counts as a lead. */
export function LeadTracking() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest?.("a[href]");
      const method = link ? leadMethodForHref(link.getAttribute("href") ?? "") : null;
      if (method) trackLead(method);
    };
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);
  return null;
}
