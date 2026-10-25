import { gemFacets } from "@/components/LogoMark";
import { site } from "@/data/site";

// Favicon built at build time from the brand colours in config (no hard-coded colours here).
export const dynamic = "force-static";

export function GET() {
  const c = site.colors;
  const fills = [c.goldLight, c.gold, c.goldDark, c.gemDarkLeft, c.gemDarkMid, c.gemDarkRight];
  const facets = gemFacets.map((f, i) => `<polygon points="${f.points}" fill="${fills[i]}"/>`).join("");
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="${c.ink}"/><g transform="translate(8 8) scale(0.75)">${facets}</g></svg>`;
  return new Response(svg, { headers: { "Content-Type": "image/svg+xml" } });
}
