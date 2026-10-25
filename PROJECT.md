# Portfolio (PrimeCraft Labs website)

- **Type:** Own (showcase)
- **Owner:** Jitender
- **Status:** v2 built (multi-page Next.js); deploys automatically on push to `main`
- **Showable:** yes
- **Stack:** Next.js 16 + Tailwind CSS 4, static export (`output: "export"`), GitHub Pages via Actions
- **Repo / live link:** derived from `github.user` in `jk/brand/brand.json` (currently
  https://github.com/jeetuwizard/jeetuwizard.github.io -> https://jeetuwizard.github.io)

## Pages
Home, Services (`/services/#<id>`), Work + case studies (`/work/<slug>/`), About, Pricing (+FAQ), Contact
(enquiry form), 404, sitemap.xml, robots.txt. Client-side navigation between pages (SPA feel), every page is
also real static HTML for Google.

## Configuration (nothing hard-coded)
- **Business details** (name, owner, phone, email, WhatsApp, GitHub user, URLs, colours, font, Formspree ID):
  edit `jk/brand/brand.json`, then run `python brand/sync.py` from `jk`. That regenerates
  `src/config/brand.json` and copies `public/og-image.png` - never edit those two by hand.
- **Content**: `src/data/` - `services.ts`, `projects.ts` (demo cards: set `status: "live"` once a demo is
  deployed), `pricing.ts` (packages + FAQ), `site.ts` (nav + helpers reading the brand config).
- **Colours**: theme tokens in `src/app/globals.css` only. Logo facets are `--gem-*` tokens; the favicon is
  generated at build time from the brand colours (`src/app/favicon.svg/route.ts`).
- **Contact form**: posts to Formspree when `formspreeId` is set in `brand.json`; otherwise it opens the
  visitor's email app with the enquiry filled in. Formspree free plan: sign up with the business email,
  create a form, copy the ID after `/f/`.

## Run / build / check
```
npm install
npm run dev        # http://localhost:3000
npm run lint
npm run build      # static site in out/
python ../../tools/responsive_check.py --mount /=out --routes / /services/ /work/ /work/restaurant-website/ /work/clinic-booking/ /work/ai-lead-finder/ /about/ /pricing/ /contact/
```

## Deploy
Push to `main` -> GitHub Actions builds and publishes `out/`. One-time: repo Settings -> Pages ->
Source = "GitHub Actions".

## Notes
- No scroll-reveal animation: CSS scroll-driven fades left tall stacked sections invisible on phones.
- Next 16 docs ship in `node_modules/next/dist/docs/` - read them before using unfamiliar APIs (see AGENTS.md).
