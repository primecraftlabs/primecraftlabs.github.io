import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { site } from "@/data/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(); // build time: every deploy refreshes it
  const pages = ["", "services/", "work/", "about/", "pricing/", "contact/"];
  return [
    ...pages.map((p) => ({ url: `${site.url}/${p}`, lastModified, changeFrequency: "monthly" as const, priority: p === "" ? 1 : 0.8 })),
    ...projects.map((p) => ({ url: `${site.url}/work/${p.slug}/`, lastModified, changeFrequency: "monthly" as const, priority: 0.6 })),
  ];
}
