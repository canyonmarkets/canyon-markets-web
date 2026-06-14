// Per-industry content. Each object powers a hub page (/industries/[slug]) and seeds
// the industry × city spokes. Copy is unique per industry to avoid thin content.

export type Faq = { q: string; a: string };

export type Industry = {
  slug: string;
  label: string;       // full label, e.g. "Manufacturing Facilities"
  short: string;       // short label for nav/cards, e.g. "Manufacturing"
  metaTitle: string;
  metaDescription: string;
  h1: string;
  heroSub: string;
  pains: string[];        // break-room/shift pain points specific to this industry
  shiftNote: string;      // typical shift pattern
  productMix: string;     // what we stock for this audience
  whyCaptive: string;     // paragraph: why on-site matters for this industry
  faqs: Faq[];
};

export const INDUSTRIES: Industry[] = [
  {
    slug: 'manufacturing',
    label: 'Manufacturing Facilities',
    short: 'Manufacturing',
    metaTitle: 'Micro-Markets for Manufacturing Facilities | Phoenix Metro',
    metaDescription:
      'Fresh, zero-cost break-room micro-markets for Phoenix-area manufacturing facilities. Fuel every shift on the floor — no off-site lunch runs. Live in 14 days.',
    h1: 'Micro-Markets Built for Manufacturing Floors',
    heroSub:
      'Production lines don’t pause for a snack run. Keep your crew fed and on the floor with fresh meals and cold drinks just steps from the line.',
    pains: [
      'Tight, scheduled breaks with no time to leave the plant',
      'Nearest food is a drive away — people come back late or skip eating',
      'Old vending machines jam, run empty, and only take cash',
      'Hot, demanding work needs real fuel, not just chips and candy',
    ],
    shiftNote: 'First, second, and third shifts — including overnights and weekend crews.',
    productMix:
      'Hearty fresh meals, protein, electrolyte and energy drinks, cold bottled water, and grab-and-go snacks sized for a fast break.',
    whyCaptive:
      'Manufacturing runs on momentum. Every minute a worker spends driving off-site for lunch is a minute off the line — and on a 30-minute break, leaving usually isn’t even an option. An on-site market keeps your people fueled, on time, and on the floor, across every shift.',
    faqs: [
      {
        q: 'Does it work for round-the-clock manufacturing shifts?',
        a: 'Yes. The market is self-serve and open 24/7, so first, second, and third-shift crews all have the same access — and we stock to each shift’s demand so overnight teams aren’t left with empty shelves.',
      },
      {
        q: 'How much floor space does it need?',
        a: 'Most installs fit a standard break room — open shelving, glass-door coolers, and a compact self-checkout kiosk. We design the layout to your space during the free assessment.',
      },
      {
        q: 'What does it cost the plant?',
        a: 'Nothing. Equipment, installation, restocking, and maintenance are all on us. We earn our keep through product sales, so our incentive is keeping your team happy.',
      },
    ],
  },
  {
    slug: 'distribution-centers',
    label: 'Distribution Centers',
    short: 'Distribution',
    metaTitle: 'Micro-Markets for Distribution Centers | Phoenix Metro',
    metaDescription:
      'Zero-cost micro-markets for Phoenix-area distribution centers. Fast 3-second checkout keeps pickers and packers fueled and breaks on schedule. Live in 14 days.',
    h1: 'Micro-Markets for Distribution Centers',
    heroSub:
      'Pickers and packers on the clock need fast fuel. A 3-second self-checkout keeps breaks short, energy high, and the dock moving.',
    pains: [
      'High-tempo work burns energy fast — people need quick refuels',
      'Breaks are short and staggered; no time to leave the building',
      'Large headcounts overwhelm a couple of vending machines',
      'Seasonal ramps mean more workers and more demand overnight',
    ],
    shiftNote: 'Staggered shifts and peak-season surges, day and night.',
    productMix:
      'Energy and sports drinks, cold brew, protein bars, fresh sandwiches and meals, and quick snacks built for a 15-minute break.',
    whyCaptive:
      'In a DC, throughput is everything. When the nearest food is a drive away, short breaks turn into long ones and the floor slows down. An on-site market gives a large, fast-moving workforce instant fuel without anyone clocking out and leaving — and it scales with your seasonal ramps.',
    faqs: [
      {
        q: 'Can it handle a large, high-traffic workforce?',
        a: 'Yes — we size the market and restock cadence to your headcount and peak times, with multiple coolers and checkout points if needed so lines never back up during a shift change.',
      },
      {
        q: 'How fast is checkout?',
        a: 'About three seconds. Workers tap, scan, or pay by card or phone and get right back to the floor — no cash, no attendant, no waiting.',
      },
      {
        q: 'Can you scale up for peak season?',
        a: 'Absolutely. We adjust stock levels and visit frequency as your headcount grows, so the market keeps up when volume spikes.',
      },
    ],
  },
  {
    slug: 'production-facilities',
    label: 'Production Facilities',
    short: 'Production',
    metaTitle: 'Micro-Markets for Production Facilities | Phoenix Metro',
    metaDescription:
      'Fresh, zero-cost break-room markets for Phoenix-area production facilities. Real meals on site for tight breaks and demanding shifts. Live in 14 days.',
    h1: 'Micro-Markets for Production Facilities',
    heroSub:
      'Tight breaks, demanding shifts. An on-site market means real meals without anyone clocking out and driving off.',
    pains: [
      'Precise schedules leave no slack for off-site food runs',
      'Cleanroom and controlled environments make leaving and returning costly',
      'Teams want fresh, quality options — not just a candy machine',
      'Multiple shifts need consistent stock around the clock',
    ],
    shiftNote: 'Continuous and rotating shifts, often 10–12 hours.',
    productMix:
      'Fresh deli meals, healthier picks, premium snacks, and a full range of cold drinks curated for working adults.',
    whyCaptive:
      'Production environments are built around precision and uptime. Leaving for lunch breaks the rhythm — and in controlled or secured facilities it’s often impractical. A fully-managed market keeps quality food on site so your team refuels fast and gets back to work.',
    faqs: [
      {
        q: 'Do you offer fresh and healthier food, not just snacks?',
        a: 'Yes. Every market carries fresh meals, deli items, and healthier options alongside the classics — curated to what your specific team actually buys.',
      },
      {
        q: 'Is it secure and self-managed?',
        a: 'The market is unattended and self-serve, with checkout technology and security cameras included. No staffing required on your end.',
      },
      {
        q: 'What if our product mix needs to change?',
        a: 'We monitor what sells and adjust the assortment over time, and you can always request items your team is asking for.',
      },
    ],
  },
  {
    slug: 'warehousing',
    label: 'Warehouses & Shift Crews',
    short: 'Warehousing',
    metaTitle: 'Micro-Markets for Warehouses & Shift Crews | Phoenix Metro',
    metaDescription:
      'Zero-cost micro-markets for Phoenix-area warehouses. Stocked for every shift — days, nights, and overnights — so no crew goes without. Live in 14 days.',
    h1: 'Micro-Markets for Warehouses & Shift Crews',
    heroSub:
      '10s, 12s, and overnights — we stock for every shift, around the clock, so no one goes without.',
    pains: [
      'Overnight and weekend crews get forgotten by traditional vendors',
      'Big, spread-out facilities are far from any off-site food',
      'Long shifts demand more than one quick snack',
      'Cash-only machines don’t fit a modern workforce',
    ],
    shiftNote: 'Around-the-clock coverage — days, nights, weekends, and overnights.',
    productMix:
      'Filling meals, energy and hydration drinks, coffee, and substantial snacks to carry a crew through a 10- or 12-hour shift.',
    whyCaptive:
      'Warehouse work runs at all hours, and the overnight crew deserves the same fresh food as the day shift. Most vendors don’t restock for the third shift — we do. An on-site market that’s always open and always stocked keeps every crew fueled, no matter the hour.',
    faqs: [
      {
        q: 'Do you stock for overnight and weekend shifts?',
        a: 'Yes — that’s a core part of what we do. We plan stock levels and restock timing so night, weekend, and overnight crews always find full shelves, not leftovers.',
      },
      {
        q: 'Our warehouse is large — can the market be where people actually break?',
        a: 'We place the market in your break area (or areas) where it’s closest to the crew, and can set up more than one point for a large footprint.',
      },
      {
        q: 'Is there really no cost to us?',
        a: 'Correct. Install, equipment, stock, and service are all free to you. We make our money on sales, so a well-stocked, happy team is exactly our goal.',
      },
    ],
  },
  {
    slug: 'call-centers',
    label: 'Call Centers',
    short: 'Call Centers',
    metaTitle: 'Micro-Markets for Call Centers | Phoenix Metro',
    metaDescription:
      'Zero-cost break-room micro-markets for Phoenix-area call centers. Grab-and-go fuel that fits a 15-minute break, right down the hall. Live in 14 days.',
    h1: 'Micro-Markets for Call Centers',
    heroSub:
      'Back-to-back calls and scheduled breaks. Grab-and-go fuel that fits a 15-minute window, right down the hall.',
    pains: [
      'Short, strictly-scheduled breaks rule out leaving the building',
      'Large floors mean long lines at a single vending machine',
      'Reps want coffee, fresh food, and real variety to power through',
      'Morale and retention matter in a high-turnover environment',
    ],
    shiftNote: 'Scheduled break rotations across day and evening shifts.',
    productMix:
      'Coffee and energy drinks, fresh meals and snacks, and healthier options — variety that keeps a big floor satisfied.',
    whyCaptive:
      'Call-center breaks are measured in minutes and tightly scheduled, so leaving to grab food simply isn’t realistic. An on-site market puts coffee, fresh food, and snacks steps from the floor — a small perk that pays off big in morale and retention where both are hard to win.',
    faqs: [
      {
        q: 'Can it serve a big floor without long lines?',
        a: 'Yes. We size coolers, shelving, and checkout to your headcount so a shift-change rush moves quickly — and add a second checkout point if the floor is large.',
      },
      {
        q: 'Does it help with retention?',
        a: 'Employers tell us a quality break room is a visible perk that helps recruiting and keeps people happy — an easy win in a high-turnover environment, at no cost to you.',
      },
      {
        q: 'What payment methods are supported?',
        a: 'Tap, card, and mobile pay — fully cashless and fast, so a 15-minute break is spent eating, not waiting.',
      },
    ],
  },
];

export const getIndustry = (slug: string) => INDUSTRIES.find((i) => i.slug === slug);
