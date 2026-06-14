# Canyon Markets — SEO Rebuild Plan (Next.js Port + Drill-Down Landing Pages)

**Status:** Phase 0 complete (design approved as standalone `index.html`). Entering Phase 1.
**Source of truth for resuming across sessions.** Update the checklist at the bottom as we go.

---

## Goal
1. Port the approved dark/ember GSAP design (`index.html`) into the existing Next.js app, replacing the old light-theme components.
2. Build a segment × city landing-page architecture so ideal clients find Canyon Markets by *who they are* — with genuinely unique content (no thin/doorway pages), full schema, and a strong internal-link mesh.

## Current stack (verified)
- Next.js 16.2.6 (App Router), React 19, TypeScript, Tailwind **v4** (CSS-first `@theme` in `app/globals.css`, no config file), `lucide-react`, `resend`.
- `app/layout.tsx`: site metadata + `LocalBusiness` JSON-LD + `<Navbar/>` + `<Footer/>`. Fonts: Geist (body) + Nokianvirallinenkirjasin (`--font-display`, the logo font).
- `app/api/contact/route.ts`: POST → Resend → info@canyon-markets.com. Fields: firstName, lastName, email, company, location, headcount, details.
- `app/sitemap.ts`: home + 6 `/locations/[city]`. `app/robots.ts` exists.
- `app/locations/{phoenix,mesa,chandler,scottsdale,gilbert,tempe}/page.tsx` → shared `components/LocationPage.tsx` with a `loc` data object (already references real local employers, e.g. Chandler → Intel, Microchip).
- Approved design assets in `public/`: `canyon-logo.png`, `mm-industrial.png`, `mm-office.png`, `mm-cafeteria.png`, `fonts/NokianvirallinenkirjasinREGULAR.ttf`.
- Brand tokens already in globals.css: `brand-*` (brand-500 = #C94B0C = "ember"), `iron-*`. Old theme is LIGHT (white bg). New design is DARK.

---

## PHASE 1 — Port the design into Next.js

1. **Theme/tokens** (`app/globals.css`): switch to the dark system. Add `@theme` tokens: `base #14161F`, `slate-{900,800,700,600}`, `ember-{200..700}` (alias of brand, ember-500 = #C94B0C), keep `iron-*`. Body bg → `#14161F`, text light. Port custom CSS from `index.html` `<style>`: `.glass`, `.glass-strong`, `.grad-ember` (solid #C94B0C), `.eyebrow`, `.blob`, `.gridlines`, hero scrim/lightsweep/spotlight, `.floaty`, `.blink`, `.marquee`, `.hotspot`, `.pre/.in` reveal, `.bar`, `.field`, `.check`, buttons, scroll-margin-top, reduced-motion.
2. **Fonts**: keep Nokian as `--font-display`. Add **Inter** (body) + **Space Mono** (mono eyebrows) via `next/font/google` (replace/supplement Geist). Map Tailwind `font-display/sans/mono`.
3. **GSAP**: `npm i gsap`. Create `components/SiteAnimations.tsx` ('use client') that runs in `useEffect` the exact logic from index.html: nav scroll state, hotspot toggle, fail-open scroll reveal (`.pre`→`.in` + count-ups + stagger delays), hero headline (incl. `#heroDead` slam-in), continuous photo zoom, mouse parallax, looping light-sweep, swoosh draw, fluctuating inventory bars, `#perkBadge`/`#goLive` pulses, bento scroll-parallax. Guard all DOM/`window` access; respect `prefers-reduced-motion`.
4. **Components** (server components for content; client only where needed). Convert each index.html section:
   - `Navbar.tsx` (logo img + Nokian wordmark + anchor links + Free Assessment) — note: nav links anchor to home sections; on sub-pages they should link to `/#section`.
   - `Hero.tsx`, `Marquee.tsx`, `Concept.tsx` (annotated photo + hotspots; hotspot toggle is client), `System.tsx` (bento), `Difference.tsx`, `Benefits.tsx`, `Process.tsx`, `WhoWeServe.tsx`, `ContactForm.tsx` ('use client', posts to /api/contact + hidden `source` field), `Footer.tsx`.
   - Use `next/image` for the photos (priority on hero).
5. **Home** (`app/page.tsx`): compose the sections + `<SiteAnimations/>`.
6. **Form upgrade**: add hidden `source` field (e.g. "manufacturing/chandler") so leads are tagged by which landing page converted; include it in the Resend email + subject.
7. **Verify**: `npm run dev`, walk every section in-browser (golden path + mobile), confirm reveals fail-open, no console errors, Lighthouse pass.

## PHASE 2 — SEO landing-page architecture

**URL structure (recommended — hierarchical):**
- `/` — home
- `/industries` — index of all 5 segments (links to each hub)
- `/industries/[industry]` — **5 segment hubs**
- `/industries/[industry]/[city]` — **30 segment×city spokes** (the long-tail money pages)
- `/locations/[city]` — **6 city hubs** (refresh to new design; link out to all 5 industries in that city)
- `/what-is-a-micro-market` — evergreen explainer/guide (the Concept section expanded)
- Optional `/guides/*` — 3–5 authority articles for topical authority + internal links.

**Industries (slug → label):** `manufacturing` → Manufacturing Facilities · `distribution-centers` → Distribution Centers · `production-facilities` → Production Facilities · `warehousing` → Warehouses & Shift Crews · `call-centers` → Call Centers.
**Cities:** phoenix, mesa, chandler, gilbert, scottsdale, tempe.

**Generation:** `generateStaticParams` over industry/city arrays. Per-page `generateMetadata` (unique title/description/canonical/OG). All statically rendered (SSG) for speed + crawlability.

**Anti-thin-content rules (do it right):** every page must carry genuinely unique, useful content — not a city-name swap:
- **Industry hub:** ~700–900 words unique to that industry — its shift patterns, break-room pain, ideal product mix, equipment emphasis, captive-workforce angle, industry-specific FAQ (3–5 Q&A), links to its 6 city spokes.
- **City hub:** unique local content — real industrial corridors/parks, notable area employers (as *area context*, not client claims), response-time/local-team angle, links to all 5 industries in that city.
- **Spoke (industry×city):** unique intro combining the industry pain with a *specific* local area; an industry "why captive workforce" block; a city "serving [area]" block; a merged FAQ (mix of industry + city Q&A); the shared design sections (System/Process/Difference/Benefits/Concept can be reused as components — they're brand content, fine to repeat, but the *above-the-fold + intro + FAQ must be unique*). Breadcrumbs to hub + city.

**Schema (JSON-LD):**
- Sitewide: `LocalBusiness` (upgrade with street address if provided, geo, hours, sameAs).
- Industry/city pages: `Service` (+ `areaServed`), `BreadcrumbList`, `FAQPage` (where FAQs exist).
- Home: keep `LocalBusiness` + `OfferCatalog`.

**Internal linking mesh:** Home WhoWeServe cards → industry hubs. Industry hub ↔ its 6 spokes. City hub ↔ its 5 spokes. Spoke → parent industry + parent city + sibling cities. Footer: compact industries + cities link columns.

**Metadata/titles (intent-matched):** e.g. Hub: "Micro-Markets for Manufacturing Facilities | Phoenix Metro" · Spoke: "Manufacturing Break-Room Micro-Markets in Chandler, AZ | Canyon Markets". Descriptions written for CTR, not stuffed.

## PHASE 3 — Content data
- `lib/industries.ts` — per-industry data object (label, slug, hero angle, pains[], shiftPatterns, productMix, equipmentEmphasis, valueProps[], faqs[]).
- `lib/cities.ts` — per-city data (label, slug, industrialAreas[], areaEmployers[] *(context only)*, localBlurb, nearby[]).
- Spoke template merges the two + generates a unique FAQ set.

## PHASE 4 — Technical SEO
- `sitemap.ts`: programmatically include home + /industries + 5 hubs + 30 spokes + 6 cities + guides. Priorities: home 1.0, hubs 0.9, cities 0.8, spokes 0.7.
- `robots.ts`: allow all, reference sitemap.
- Per-page canonicals. OG image per page (could generate via `next/og` ImageResponse, or reuse a strong photo).
- Performance: SSG, next/image, font-display swap, minimal client JS (animations only). Target green Core Web Vitals.
- Accessibility: real semantic headings (already text, not images — good), alt text, focus states.

## PHASE 5 — Off-site (USER tasks — I can't create accounts)
- Google Business Profile (NAP must match site exactly).
- Google Search Console (verify, submit sitemap) + add verification meta to layout.
- Google Analytics (optional).
- Local citations / directories with consistent NAP.

---

## INPUTS NEEDED FROM JEFF (to make content + schema strong)
1. **Business address** for `LocalBusiness`/GBP (real street address, or confirm "service-area business, hide address"). NAP must be consistent everywhere.
2. **Credibility numbers OK to publish?** Years serving Phoenix / # of markets installed / # of accounts / anything concrete (boosts E-E-A-T). If none, we stay qualitative.
3. **Per-city local references**: OK to reference real industrial corridors + major area employers as *context* (like the existing Chandler page already does with Intel/Microchip)? Any specific parks/areas where they have accounts to highlight?
4. **Naming clients?** Assume NO real client names unless given permission; reference employers only as area context.
5. **URL structure**: approve `/industries/[industry]/[city]` hierarchy (vs. flat keyword slugs).
6. **Deploy**: build on a branch + Netlify deploy-preview before promoting to production (don't break live site). Confirm.

---

## TASK CHECKLIST (update as we go)
### Phase 1 — Port  ✅ COMPLETE (verified 2026-06-14, build passes + renders + animations run)
- [x] globals.css → dark theme + ported custom CSS + @theme tokens
- [x] Fonts: Inter + Space Mono via next/font; Nokian display
- [x] npm i gsap (^3.15.0); SiteAnimations.tsx client component (re-inits on route change; fail-open reveal)
- [x] Components: Navbar, Hero, Marquee, Concept, System, Difference, Benefits, Process, WhoWeServe, ContactForm, Footer
- [x] app/page.tsx composes home
- [x] ContactForm hidden `source` field + route.ts update (lead tagging)
- [x] lib/site.ts, lib/industries.ts (5), lib/cities.ts (6) content data
- [x] `next build` passes; home renders w/ Nokian + dark theme; reveals/counts/Go-Live pulse all run
- NOTE: dev must allow the loopback origin — `allowedDevOrigins: ['127.0.0.1']` added to next.config.ts (Chrome tooling reaches 127.0.0.1; Next binds localhost). Prod unaffected.
- TODO later: migrate <img> → next/image for CWV; refresh old orphan components are unused (ProblemSolution/WhatWeInstall/HowItWorks/WhyUs/Hero-old not imported) — safe to delete.
- REMAINING for Phase 1 polish: /locations/[city] still uses OLD light LocationPage component → refresh in Phase 2.
### Phase 2/3 — SEO pages  ✅ COMPLETE (verified 2026-06-14, build = 51 static pages, no errors)
- [x] lib/industries.ts + lib/cities.ts content data
- [x] /industries (index) + /industries/[industry] hubs (5)
- [x] /industries/[industry]/[city] spokes (30) — generateStaticParams + generateMetadata, unique combined copy
- [x] Converted /locations to dynamic /locations/[city] (6) + /locations index; deleted old static folders + old light-theme components (LocationPage, ProblemSolution, WhatWeInstall, HowItWorks, WhyUs)
- [x] /what-is-a-micro-market explainer
- [x] JSON-LD helpers (lib/seo.ts): Service + Breadcrumb + FAQPage; JsonLd component; verified all 4 schema blocks render on spokes
- [x] Internal-link mesh: WhoWeServe→hubs, Footer industries+cities columns, hub↔spokes, city↔industries, spoke→siblings/nearby
- [x] Components added: PageHero, Breadcrumbs, Faq, JsonLd
### Phase 4 — Technical
- [x] sitemap.ts programmatic (home + indexes + 5 hubs + 6 cities + 30 spokes)
- [x] per-page canonicals + OG (generateMetadata on every dynamic page)
- [ ] Lighthouse/CWV pass + migrate <img> → next/image (deferred polish)
- [ ] Deploy preview on Netlify for Jeff's review before promoting to production
### Phase 5 — Off-site (Jeff)
- [ ] GBP, Search Console (+ verification meta), citations
