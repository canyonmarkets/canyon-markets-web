// Central business facts + constants. Single source of truth for copy, schema, and metadata.

export const SITE = {
  name: 'Canyon Markets',
  url: 'https://canyon-markets.com',
  phone: '(602) 935-6830',
  phoneHref: '+16029356830',
  email: 'info@canyon-markets.com',
  // Service-area business — NO public street address (Jeff confirmed 2026-06-13).
  region: 'AZ',
  metro: 'Phoenix Metro',
  // Publishable credibility facts (confirmed).
  since: 2017,
  partners: 17,
  workersServed: '1,500+',
  skus: '225+',
  installDays: 14,
} as const;

// Core service-area cities (the matrix runs industries × these).
export const CITIES = [
  'phoenix',
  'mesa',
  'chandler',
  'gilbert',
  'scottsdale',
  'tempe',
] as const;

export const INDUSTRY_SLUGS = [
  'manufacturing',
  'distribution-centers',
  'production-facilities',
  'warehousing',
  'call-centers',
] as const;

// Shared value props (the service-led differentiator) — reused across pages.
export const VALUE_PROPS = [
  {
    title: 'Personally Managed',
    body: 'You get real people who know your account — not a call center or a ticket number.',
  },
  {
    title: 'Local & Responsive',
    body: 'Based right here in the Valley. Same-day response — not a route truck from out of state.',
  },
  {
    title: 'We Actually Show Up',
    body: 'Stocked, clean, and maintained — hands-off for you. Your facilities team never gets a call.',
  },
  {
    title: 'Zero Cost, Zero Risk',
    body: 'No equipment, install, or service fees. We earn it by keeping your team happy — period.',
  },
] as const;
