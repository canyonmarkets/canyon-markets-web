@AGENTS.md

# canyon-markets-web — CLAUDE.md

Local Phoenix-metro micro-market operator site. **NOT** the national construction-site brand (that's `missioncriticalvending.com`). This site targets captive shift-based workforces — manufacturing plants, distribution centers, call centers — in the Phoenix metro.

**Authoritative SEO build log:** `SEO-BUILD-PLAN.md` — read it before any SEO or content work.

---

## Project Location & Deploy

```
C:\Users\jeffm\Documents\CLAUDE\VENDING\canyon-markets-web\
```

- **Live site:** https://canyon-markets.com
- **GitHub:** github.com/canyonmarkets/canyon-markets-web
- **Deploy:** git push → Netlify auto-deploys `main`

```
npm run dev   # http://localhost:3000
npm run build # always run before pushing — TS errors block Netlify silently
```

Dev note: `allowedDevOrigins: ['127.0.0.1']` is in `next.config.ts` (Chrome tooling reaches 127.0.0.1; Next binds localhost). Prod is unaffected.

---

## Stack

- Next.js 16 (App Router) + React 19 + TypeScript + Tailwind v4 (CSS-first `@theme` in `globals.css` — NO `tailwind.config.js`)
- GSAP 3 (`SiteAnimations.tsx` — client component, re-inits on route change)
- Resend (contact form → `info@canyon-markets.com`)
- Fonts: Nokianvirallinenkirjasin (`--font-display`, logo wordmark) + Inter (body) + Space Mono (mono eyebrows)

---

## Business Rules & Content Guardrails

**NAP (source of truth for schema and GBP):**
Canyon Markets · (602) 935-6830 · service-area business (NO physical address) · info@canyon-markets.com

**Do NOT publish a street address** — service-area business only. Schema uses `areaServed` cities.

**Publishable facts (confirmed, use these only):**
- Serving Phoenix since 2017
- 17 workplace partners
- 1,500+ workers served
- ~225 SKUs (NOT 700 — old draft was wrong)
- 14-day install, $0 cost
- **They DO have a contract** — do NOT say "no contracts." Say "Zero Cost · 14-Day Install."

**No client names ever.** Reference business *types* only (e.g. "semiconductor manufacturers in Chandler"). Jeff approved this rule.

**Equipment (keep generic):** glass-door coolers, freezers, self-checkout kiosks, security cameras, snack & chip racks.

**Ideal Client Profile (priority order):**
1. Manufacturing facilities
2. Distribution centers
3. Production facilities
4. Warehouses / shift-based workforces
5. Call centers

**Core differentiator:** 100% service. Family-run (Jeff, wife, three nephews). Win accounts from Canteen and national operators "who don't give a damn." Pitch: *"Anyone can sell a Coke; we build relationships."*

**Local area context by city** (use generically, do not name clients):
- Phoenix: Cotton Business Center (OK to name the center) — call centers + health-supplement manufacturer
- Chandler: steel manufacturers, two semiconductor/chip manufacturers, food distribution, pest control
- Mesa: auto dealership chain (3 locations); East Mesa: microchip manufacturer
- Tempe: large apartment community
- Gilbert: general industrial
- Scottsdale: general/office

Schools, hotels, and fitness centers are NOT future focus — don't write content targeting them.

---

## Site Architecture — LIVE (45 static URLs, all in sitemap)

| Route | Count | Purpose |
|---|---|---|
| `/` | 1 | Home — all brand sections |
| `/industries` | 1 | Industry hub index |
| `/industries/[industry]` | 5 | Industry hubs |
| `/industries/[industry]/[city]` | 30 | Industry × city spokes (long-tail money pages) |
| `/locations` | 1 | City hub index |
| `/locations/[city]` | 6 | City hubs |
| `/what-is-a-micro-market` | 1 | Evergreen explainer |

**Industries (slug → label):**
- `manufacturing` → Manufacturing Facilities
- `distribution-centers` → Distribution Centers
- `production-facilities` → Production Facilities
- `warehousing` → Warehouses & Shift Crews
- `call-centers` → Call Centers

**Cities:** phoenix, mesa, chandler, gilbert, scottsdale, tempe

---

## Design System

**Dark theme.** Base bg: `#14161F`. Ember accent: `brand-500` = `#C94B0C`. Steel text tokens.

Key custom CSS classes (defined in `globals.css`, ported from `index.html`):
`.glass`, `.glass-strong`, `.grad-ember`, `.eyebrow`, `.blob`, `.gridlines`, `.floaty`, `.blink`, `.marquee`, `.hotspot`, `.pre`/`.in` (reveal), `.bar`, `.field`, `.check`

Brand assets in `public/`:
- `canyon-logo.png` — logo
- `mm-industrial.png`, `mm-office.png`, `mm-cafeteria.png` — micro-market photos
- `fonts/NokianvirallinenkirjasinREGULAR.ttf` — display font

---

## Key Files

| File | Purpose |
|---|---|
| `app/layout.tsx` | Site metadata + `LocalBusiness` JSON-LD + Navbar + Footer. Add GSC verification `<meta>` here when Jeff provides it. |
| `app/globals.css` | Dark theme tokens, GSAP reveal classes, all custom CSS |
| `app/page.tsx` | Home — composes all brand sections + `<SiteAnimations/>` |
| `app/sitemap.ts` | Programmatic sitemap (home + indexes + 5 hubs + 6 cities + 30 spokes) |
| `components/SiteAnimations.tsx` | GSAP animations client component — all DOM animation logic |
| `app/api/contact/route.ts` | POST → Resend → info@canyon-markets.com. Hidden `source` field tags which landing page converted. |
| `lib/industries.ts` | Per-industry data (label, slug, pains, shift patterns, product mix, FAQs) |
| `lib/cities.ts` | Per-city data (label, slug, industrial areas, local employers as context, nearby cities) |
| `lib/site.ts` | Global NAP, brand facts, stats |
| `lib/seo.ts` | JSON-LD helpers: `Service`, `BreadcrumbList`, `FAQPage`; `JsonLd` component |
| `SEO-BUILD-PLAN.md` | Full phase-by-phase build log and content rules |

---

## SEO Build Status

### Phases 1–4: COMPLETE (pushed to production 2026-06-14)
- Dark GSAP design ported from `index.html` → Next.js
- 51 static pages building cleanly (`npm run build`)
- All JSON-LD schema: `LocalBusiness` (sitewide) + `Service` + `BreadcrumbList` + `FAQPage` on spokes
- Internal-link mesh: WhoWeServe → hubs, Footer industry + city columns, hub ↔ spokes, spoke → siblings/nearby
- Sitemap with all 51 URLs, priorities set (home 1.0 → hubs 0.9 → cities 0.8 → spokes 0.7)
- Contact form working in prod (RESEND_API_KEY confirmed set on Netlify 2026-06-14)

### Still Open

**Jeff must do (off-site):**
- Google Business Profile: build it (service-area, no address). NAP must match site exactly.
- Google Search Console: verify domain → submit `https://canyon-markets.com/sitemap.xml`. When Jeff provides the GSC verification code, add it to `app/layout.tsx`.
- Local citation NAP consistency (directories, Bing Places, etc.)

**Code polish (non-urgent):**
- Migrate `<img>` → `next/image` for Core Web Vitals (deferred)
- Lighthouse/CWV pass
- Old unused orphan components (`ProblemSolution`, `WhatWeInstall`, `HowItWorks`, `WhyUs`, `Hero-old`) are not imported — safe to delete anytime

---

## Anti-Thin-Content Rules (for any new landing pages)

Every page must carry genuinely unique, useful content — NOT a city-name swap on a template:

- **Industry hub:** ~700–900 words unique to that industry — shift patterns, break-room pain, ideal product mix, equipment emphasis, captive-workforce angle, industry-specific FAQ (3–5 Q&A)
- **City hub:** unique local content — real industrial corridors/parks, area employers as *context*, response-time/local-team angle
- **Spoke (industry × city):** unique intro combining the industry pain with a specific local area; industry "why captive workforce" block; city "serving [area]" block; merged FAQ mixing both angles. Shared brand sections (System/Process/Difference/Benefits/Concept) can repeat — only the above-fold intro + FAQ must be unique.

---

## B2B Visitor ID (Future — Not Yet Built)

Plan: add a free-tier B2B IP-to-company visitor identification tool (RB2B or Vector) to surface which companies are visiting. The ICP (plants, DCs) often browses from registered corporate IPs — this works better here than on the consumer-facing apartment site. Gated on traffic volume: if traffic is thin, SEO drill-down comes first. DIY is feasible (reverse-IP via IPinfo/IP2Location → "Company X viewed Page Y" into vending-dash or HubSpot). Do NOT add a Meta Pixel here — this is B2B.

---

## Contact Form Fields

`firstName`, `lastName`, `email`, `company`, `location`, `headcount`, `details`, `source` (hidden — set to the landing page slug so leads are tagged by conversion page).


---
## LOCATION (re-indexed 2026-07-23)
This project lives at: `C:\Users\jeffm\Documents\CLAUDE\CANYON-MARKETS\canyon-markets-web`

This is the FINAL post-reorg home. The workspace root is C:\Users\jeffm\Documents\CLAUDE with four buckets (CANYON-APTS, CANYON-HQ, CANYON-MARKETS, PERSONAL) plus an OLD archive of the pre-reorg tree. The D:\COWORK CLEANUP staging area is GONE. Any older path mentioned elsewhere in this document is STALE — trust this note.
