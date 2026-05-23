import { Metadata } from 'next';
import LocationPage from '@/components/LocationPage';

export const metadata: Metadata = {
  title: 'Free Micro-Market Installation Phoenix, AZ | Canyon Markets',
  description: 'Canyon Markets installs free micro-markets in Phoenix, AZ workplaces. No cost, no contracts. We stock and maintain everything for manufacturing, distribution, and office break rooms across Phoenix.',
  alternates: { canonical: '/locations/phoenix' },
};

const loc = {
  city: 'Phoenix',
  slug: 'phoenix',
  state: 'AZ',
  headline: 'Free Micro-Market Installation in Phoenix, AZ',
  intro: 'Canyon Markets upgrades Phoenix break rooms with fully stocked micro-markets at zero cost. We install, stock, and maintain everything — no equipment fees, no contracts, no hassle. If your Phoenix facility has 50 or more employees, you likely qualify.',
  industries: [
    'Manufacturing',
    'Distribution & Warehousing',
    'Healthcare Facilities',
    'Corporate Offices',
    'Schools & Universities',
    'Government Facilities',
    'Food Processing',
    'Logistics & Fulfillment',
    'Call Centers',
    'Technology Companies',
  ],
  nearbyLinks: [
    { city: 'Mesa', slug: 'mesa' },
    { city: 'Chandler', slug: 'chandler' },
    { city: 'Scottsdale', slug: 'scottsdale' },
    { city: 'Gilbert', slug: 'gilbert' },
    { city: 'Tempe', slug: 'tempe' },
  ],
};

export default function PhoenixPage() {
  return <LocationPage loc={loc} />;
}
