// Per-city content for /locations/[city] and the industry × city spokes.
// Local context is real (per Jeff) but uses business TYPES only — never client names.

export type City = {
  slug: string;
  label: string;            // "Chandler"
  metaCity: string;         // "Chandler, AZ"
  areas: string[];          // real industrial corridors / employment hubs
  serves: string;           // sentence: business types we already serve here (no names)
  localIntro: string;       // unique paragraph for the city
  nearby: string[];         // slugs of nearby cities for internal links
};

export const CITIES_DATA: City[] = [
  {
    slug: 'phoenix',
    label: 'Phoenix',
    metaCity: 'Phoenix, AZ',
    areas: ['Deer Valley', 'the Black Canyon corridor', 'the Cotton Business Center', 'the Sky Harbor industrial area'],
    serves:
      'call centers and a health-supplement manufacturer, among other shift-based employers across the city',
    localIntro:
      'Phoenix is the engine of the Valley’s economy, with large shift-based workforces packed into employment hubs from Deer Valley to the Cotton Business Center. Canyon Markets installs fully-stocked, zero-cost micro-markets in Phoenix workplaces so those teams get real food on site — no off-campus lunch runs.',
    nearby: ['tempe', 'scottsdale', 'mesa'],
  },
  {
    slug: 'mesa',
    label: 'Mesa',
    metaCity: 'Mesa, AZ',
    areas: ['Falcon Field', 'the Phoenix-Mesa Gateway corridor', 'east Mesa'],
    serves:
      'a multi-location auto dealership chain and a microchip manufacturer in east Mesa, among other employers',
    localIntro:
      'Mesa pairs heavy aerospace and manufacturing around Falcon Field and the Gateway corridor with fast-growing employers out east. Canyon Markets brings fresh, fully-managed micro-markets to Mesa workplaces at zero cost — keeping every shift fueled without leaving the building.',
    nearby: ['gilbert', 'chandler', 'tempe'],
  },
  {
    slug: 'chandler',
    label: 'Chandler',
    metaCity: 'Chandler, AZ',
    areas: ['the Price Road Corridor', 'the Chandler Airport industrial area'],
    serves:
      'steel manufacturers, two semiconductor chip manufacturers, a food-distribution facility, and a pest-control company',
    localIntro:
      'Chandler is one of Arizona’s densest hubs for semiconductor, manufacturing, and distribution, anchored by the Price Road Corridor. Canyon Markets already serves Chandler employers across these industries with zero-cost micro-markets that keep tight-break, shift-based teams fed on site.',
    nearby: ['gilbert', 'tempe', 'mesa'],
  },
  {
    slug: 'gilbert',
    label: 'Gilbert',
    metaCity: 'Gilbert, AZ',
    areas: ['the Gilbert Spectrum', 'the Rivulon business district', 'the Heritage District'],
    serves:
      'manufacturing, distribution, and other shift-based employers in the Valley’s southeast',
    localIntro:
      'Gilbert has grown from a farm town into a southeast-Valley employment center, with manufacturing and distribution operations filling the Gilbert Spectrum and surrounding parks. Canyon Markets installs fresh, zero-cost micro-markets for Gilbert workplaces whose teams can’t step out on a short break.',
    nearby: ['chandler', 'mesa', 'tempe'],
  },
  {
    slug: 'scottsdale',
    label: 'Scottsdale',
    metaCity: 'Scottsdale, AZ',
    areas: ['the Scottsdale Airpark', 'the North Scottsdale corridor'],
    serves:
      'manufacturing, logistics, and large-employer break rooms across the Airpark and beyond',
    localIntro:
      'The Scottsdale Airpark is one of Arizona’s largest employment centers, home to aerospace, manufacturing, and distribution operations with sizeable on-site workforces. Canyon Markets brings fully-managed, zero-cost micro-markets to Scottsdale employers so their teams have fresh food without leaving the campus.',
    nearby: ['phoenix', 'tempe', 'mesa'],
  },
  {
    slug: 'tempe',
    label: 'Tempe',
    metaCity: 'Tempe, AZ',
    areas: ['the Tempe industrial district', 'the ASU Research Park', 'the Discovery Business Campus'],
    serves:
      'a large residential community team and other shift-based employers across the city',
    localIntro:
      'Tempe blends research-park employers, distribution, and large operations with around-the-clock staffing. Canyon Markets installs fresh, zero-cost micro-markets for Tempe workplaces — putting real meals and cold drinks steps from teams who work through their breaks.',
    nearby: ['phoenix', 'chandler', 'mesa'],
  },
];

export const getCity = (slug: string) => CITIES_DATA.find((c) => c.slug === slug);
