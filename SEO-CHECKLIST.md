# Canyon Markets — SEO Checklist
**Site:** https://canyon-markets.com  
**Last Updated:** May 2026

---

## STEP 1 — Verify DNS & SSL Are Live
Canyon Markets is already deployed to Netlify. Confirm everything is healthy.

- [ ] Visit https://canyon-markets.com — confirm it loads over HTTPS (padlock in browser)
- [ ] Visit https://www.canyon-markets.com — confirm it redirects to the root domain
- [ ] If SSL shows an error, go to Netlify → Domain settings → HTTPS → click **Verify DNS configuration**

### GoDaddy DNS Settings (canyon-markets.com) — Already Configured
For reference if DNS ever needs to be re-entered:

| Type  | Name | Value                              | TTL  |
|-------|------|------------------------------------|------|
| A     | @    | 75.2.60.5                          | 600  |
| CNAME | www  | your-site-name.netlify.app         | 3600 |

---

## STEP 2 — Google Search Console
- [ ] Go to https://search.google.com/search-console
- [ ] Add property → `https://canyon-markets.com`
- [ ] Verify ownership via HTML meta tag (add to `app/layout.tsx` under `verification: { google: 'YOUR_CODE' }`)
- [ ] Submit sitemap: `https://canyon-markets.com/sitemap.xml`
- [ ] Confirm pages are indexed within 3–5 days

---

## STEP 3 — Google Business Profile
- [ ] Go to https://business.google.com
- [ ] Business name: **Canyon Markets**
- [ ] Category: **Vending Machine Supplier** or **Food & Beverage Services**
- [ ] Phone: your business number
- [ ] Website: https://canyon-markets.com
- [ ] Service area: Phoenix, Tempe, Mesa, Gilbert, Chandler, Scottsdale
- [ ] Verify via phone or postcard
- [ ] After verification:
  - [ ] Add photos of installed micro-markets (use the three break room photos from the website)
  - [ ] Write description: "Canyon Markets installs fully stocked, zero-cost micro-markets in qualifying Phoenix-area workplaces. No equipment costs, no contracts. Fresh food, snacks, and beverages for your break room."
  - [ ] Add services: Micro-Market Installation, Break Room Services, Corporate Snack Programs, Vending Machine Replacement
  - [ ] Add business hours
  - [ ] Add website link to contact form (#contact anchor)

---

## STEP 4 — Google Analytics 4
- [ ] Create GA4 property at https://analytics.google.com
- [ ] Get Measurement ID (`G-XXXXXXXXXX`)
- [ ] Add `<GoogleAnalytics gaId="G-XXXXXXXXXX" />` to `app/layout.tsx` via `@next/third-parties`
- [ ] Set up a Goal/Conversion for contact form submissions

---

## STEP 5 — Business Directories & Listings
Canyon Markets is B2B, so focus on directories where facilities managers and HR teams search.

### Critical
- [ ] **Yelp for Business** — https://biz.yelp.com  
  Category: Vending Machines / Food & Beverage Services
- [ ] **BBB (Better Business Bureau)** — https://www.bbb.org/accreditation  
  BBB accreditation builds significant trust with corporate buyers
- [ ] **Bing Places** — https://www.bingplaces.com  
  Many corporate IT environments default to Bing; don't skip this one

### Industry-Specific
- [ ] **NAMA (National Automatic Merchandising Association)** — https://www.namanow.org  
  Industry association directory — great for backlinks and credibility
- [ ] **Angi (formerly Angie's List)** — https://www.angi.com/companylist/add  
  Facilities managers use this for vendor discovery
- [ ] **Thumbtack** — https://www.thumbtack.com/pro  
  Good for inbound B2B leads in the Phoenix area

### Supplemental
- [ ] **LinkedIn Company Page** — Create a Canyon Markets company page  
  LinkedIn is where facilities directors, HR managers, and office managers are. Post installation photos.
- [ ] **Nextdoor Business** — Good for reaching office park and commercial property managers
- [ ] **Clutch.co** — B2B services directory, good for trust signals
- [ ] **Facebook Business Page** — Canyon Markets

---

## STEP 6 — Review Strategy
- [ ] After every successful installation, ask the facilities contact for a Google review
- [ ] Suggested text to send: *"Thanks for having us — the team loves having the market in the break room! If you have a minute, a Google review helps us a lot: [link]"*
- [ ] Target: 5–10 reviews in first 6 months
- [ ] Respond to every review publicly

---

## STEP 7 — Rich Results Verification
- [ ] Go to https://search.google.com/test/rich-results
- [ ] Enter `https://canyon-markets.com`
- [ ] Confirm **LocalBusiness** schema is detected
- [ ] Fix any warnings

---

## STEP 8 — Email Domain Authentication (Resend / Outlook)
Proper email authentication improves deliverability and is a minor trust signal.
- [ ] If using Resend to send from canyon-markets.com: add DKIM and SPF records to GoDaddy DNS per Resend's instructions
- [ ] Test outbound email deliverability at https://www.mail-tester.com

---

## STEP 9 — Ongoing (Monthly)
- [ ] Check Search Console for crawl errors
- [ ] Add new installation photos to Google Business Profile
- [ ] Respond to any new reviews
- [ ] Post 1–2 LinkedIn updates per month (new installs, team photos, break room before/afters)

---

## Keywords to Target
- `micro market installation Phoenix AZ`
- `break room micro market Phoenix`
- `vending machine replacement Phoenix`
- `zero cost micro market Phoenix`
- `corporate break room services Phoenix AZ`
- `office snack program Phoenix`
- `fresh food vending Phoenix AZ`
- `micro market company Phoenix Tempe Mesa`
