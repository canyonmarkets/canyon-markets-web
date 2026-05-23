import { Metadata } from 'next';
import LocationPage from '@/components/LocationPage';

export const metadata: Metadata = {
  title: 'Free Micro-Market Installation Scottsdale, AZ | Canyon Markets',
  description: 'Canyon Markets installs free micro-markets in Scottsdale, AZ. Premium break room upgrades for Scottsdale corporate offices, healthcare facilities, and professional services firms. Zero cost, no contracts.',
  alternates: { canonical: '/locations/scottsdale' },
};

const loc = {
  city: 'Scottsdale',
  slug: 'scottsdale',
  state: 'AZ',
  headline: 'Free Micro-Market Installation in Scottsdale, AZ',
  intro: 'Scottsdale companies expect premium — and that\'s exactly what Canyon Markets delivers. We install fully stocked, modern micro-markets in Scottsdale workplaces at absolutely zero cost. From Old Town corporate offices to North Scottsdale tech campuses, your team deserves better than an outdated vending machine.',
  industries: [
    'Corporate Offices',
    'Financial Services',
    'Healthcare & Medical Groups',
    'Technology & SaaS',
    'Insurance Companies',
    'Real Estate Firms',
    'Law Firms',
    'Marketing Agencies',
    'Hospitality & Resort Support',
    'Wealth Management',
  ],
  nearbyLinks: [
    { city: 'Phoenix', slug: 'phoenix' },
    { city: 'Mesa', slug: 'mesa' },
    { city: 'Chandler', slug: 'chandler' },
    { city: 'Gilbert', slug: 'gilbert' },
    { city: 'Tempe', slug: 'tempe' },
  ],
};

export default function ScottsdalePage() {
  return <LocationPage loc={loc} />;
}
