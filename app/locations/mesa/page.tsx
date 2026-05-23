import { Metadata } from 'next';
import LocationPage from '@/components/LocationPage';

export const metadata: Metadata = {
  title: 'Free Micro-Market Installation Mesa, AZ | Canyon Markets',
  description: 'Canyon Markets installs free micro-markets in Mesa, AZ workplaces. Zero cost to your business. Fully stocked break room service for manufacturing, distribution, and office facilities across Mesa.',
  alternates: { canonical: '/locations/mesa' },
};

const loc = {
  city: 'Mesa',
  slug: 'mesa',
  state: 'AZ',
  headline: 'Free Micro-Market Installation in Mesa, AZ',
  intro: 'Canyon Markets brings fully stocked micro-markets to Mesa, AZ workplaces at zero cost. From Boeing and Banner Health to Mesa\'s growing distribution corridor, we upgrade break rooms for companies of all sizes — installed and maintained completely free.',
  industries: [
    'Aerospace & Defense',
    'Healthcare & Medical',
    'Distribution & Logistics',
    'Manufacturing',
    'Education',
    'Corporate Offices',
    'Retail Headquarters',
    'Food & Beverage',
    'Government',
    'Technology',
  ],
  nearbyLinks: [
    { city: 'Phoenix', slug: 'phoenix' },
    { city: 'Chandler', slug: 'chandler' },
    { city: 'Scottsdale', slug: 'scottsdale' },
    { city: 'Gilbert', slug: 'gilbert' },
    { city: 'Tempe', slug: 'tempe' },
  ],
};

export default function MesaPage() {
  return <LocationPage loc={loc} />;
}
