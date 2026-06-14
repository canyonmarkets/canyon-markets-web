import { MetadataRoute } from 'next';
import { SITE } from '@/lib/site';
import { INDUSTRIES } from '@/lib/industries';
import { CITIES_DATA } from '@/lib/cities';

const BASE = SITE.url;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: now, changeFrequency: 'monthly', priority: 1.0 },
    { url: `${BASE}/what-is-a-micro-market`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/industries`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/locations`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
  ];

  for (const i of INDUSTRIES) {
    entries.push({ url: `${BASE}/industries/${i.slug}`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 });
  }
  for (const c of CITIES_DATA) {
    entries.push({ url: `${BASE}/locations/${c.slug}`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 });
  }
  for (const i of INDUSTRIES) {
    for (const c of CITIES_DATA) {
      entries.push({ url: `${BASE}/industries/${i.slug}/${c.slug}`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 });
    }
  }

  return entries;
}
