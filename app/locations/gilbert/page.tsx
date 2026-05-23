import { Metadata } from 'next';
import LocationPage from '@/components/LocationPage';

export const metadata: Metadata = {
  title: 'Free Micro-Market Installation Gilbert, AZ | Canyon Markets',
  description: 'Canyon Markets installs free micro-markets in Gilbert, AZ. Zero cost break room upgrades for Gilbert\'s fast-growing businesses in logistics, manufacturing, and healthcare. No contracts, fully managed.',
  alternates: { canonical: '/locations/gilbert' },
};

const loc = {
  city: 'Gilbert',
  slug: 'gilbert',
  state: 'AZ',
  headline: 'Free Micro-Market Installation in Gilbert, AZ',
  intro: 'Gilbert is one of the fastest-growing cities in the country — and its workforce deserves a break room to match. Canyon Markets installs fully stocked micro-markets in Gilbert workplaces at zero cost. No equipment fees, no contracts, no restocking headaches. Just a better break room, permanently.',
  industries: [
    'Logistics & Fulfillment',
    'Manufacturing',
    'Healthcare & Medical',
    'Construction Companies',
    'Distribution Centers',
    'Corporate Offices',
    'Schools & Education',
    'Technology',
    'Retail Operations',
    'Professional Services',
  ],
  nearbyLinks: [
    { city: 'Phoenix', slug: 'phoenix' },
    { city: 'Mesa', slug: 'mesa' },
    { city: 'Chandler', slug: 'chandler' },
    { city: 'Scottsdale', slug: 'scottsdale' },
    { city: 'Tempe', slug: 'tempe' },
  ],
};

export default function GilbertPage() {
  return <LocationPage loc={loc} />;
}
