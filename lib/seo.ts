import { SITE } from './site';
import type { Faq } from './industries';

type Crumb = { name: string; path: string };

export function breadcrumbJsonLd(crumbs: Crumb[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: `${SITE.url}${c.path}`,
    })),
  };
}

export function faqJsonLd(faqs: Faq[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function serviceJsonLd(opts: { name: string; description: string; path: string; cities?: string[] }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Workplace Micro-Market Installation & Management',
    name: opts.name,
    description: opts.description,
    url: `${SITE.url}${opts.path}`,
    provider: { '@type': 'LocalBusiness', name: SITE.name, telephone: SITE.phoneHref, url: SITE.url },
    areaServed: (opts.cities ?? ['Phoenix', 'Mesa', 'Chandler', 'Gilbert', 'Scottsdale', 'Tempe']).map((c) => ({ '@type': 'City', name: c })),
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD', description: 'Free installation, restocking, and maintenance — zero cost to the employer.' },
  };
}
