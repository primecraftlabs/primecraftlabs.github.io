/**
 * The logo mark ("The Gem"). Facet colours are the --gem-1..6 tokens in globals.css
 * (pavilion facets lighten in dark mode). The favicon (app/favicon.svg) draws the same shape.
 */
export const gemFacets = [
  { points: "16,10 26,10 18,24 6,24", fill: "fill-gem-1" },
  { points: "26,10 38,10 46,24 18,24", fill: "fill-gem-2" },
  { points: "38,10 48,10 58,24 46,24", fill: "fill-gem-3" },
  { points: "6,24 18,24 32,56", fill: "fill-gem-4" },
  { points: "18,24 46,24 32,56", fill: "fill-gem-5" },
  { points: "46,24 58,24 32,56", fill: "fill-gem-6" },
];

export function LogoMark({ className = "size-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className={className}>
      {gemFacets.map((f) => (
        <polygon key={f.points} points={f.points} className={f.fill} />
      ))}
    </svg>
  );
}
