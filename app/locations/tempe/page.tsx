import { Metadata } from 'next';
import LocationPage from '@/components/LocationPage';

export const metadata: Metadata = {
  title: 'Free Micro-Market Installation Tempe, AZ | Canyon Markets',
  description: 'Canyon Markets installs free micro-markets in Tempe, AZ. Zero cost break room upgrades for Tempe tech companies, university adjacent businesses, and manufacturers. Fully stocked and maintained at no charge.',
  alternates: { canonical: '/locations/tempe' },
};

const loc = {
  city: 'Tempe',
  slug: 'tempe',
  state: 'AZ',
  headline: 'Free Micro-Market Installation in Tempe, AZ',
  intro: 'From the Mill Avenue corridor to the I-10 industrial strip, Tempe businesses run hard. Canyon Markets keeps your team fueled with a fully stocked micro-market installed at zero cost. We handle everything — equipment, installation, restocking, and maintenance — so you never have to think about it.',
  industries: [
    'Technology & Software',
    'ASU-Adjacent Research',
    'Manufacturing',
    'Financial Services',
    'Healthcare',
    'Distribution & Logistics',
    'Retail Corporate Offices',
    'Engineering Firms',
    'Hospitality',
    'Call Centers',
  ],
  nearbyLinks: [
    { city: 'Phoenix', slug: 'phoenix' },
    { city: 'Mesa', slug: 'mesa' },
    { city: 'Chandler', slug: 'chandler' },
    { city: 'Scottsdale', slug: 'scottsdale' },
    { city: 'Gilbert', slug: 'gilbert' },
  ],
};

export default function TempePage() {
  return <LocationPage loc={loc} />;
}
