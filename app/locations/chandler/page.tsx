import { Metadata } from 'next';
import LocationPage from '@/components/LocationPage';

export const metadata: Metadata = {
  title: 'Free Micro-Market Installation Chandler, AZ | Canyon Markets',
  description: 'Canyon Markets installs free micro-markets in Chandler, AZ. Zero cost break room upgrades for Intel, Microchip Technology, and hundreds of Chandler manufacturers and tech companies. No contracts ever.',
  alternates: { canonical: '/locations/chandler' },
};

const loc = {
  city: 'Chandler',
  slug: 'chandler',
  state: 'AZ',
  headline: 'Free Micro-Market Installation in Chandler, AZ',
  intro: 'Chandler is home to some of Arizona\'s largest employers in semiconductor, tech, and manufacturing. Canyon Markets installs fully stocked micro-markets in Chandler workplaces at zero cost — keeping your team fueled without adding a single line to your budget.',
  industries: [
    'Semiconductor & Electronics',
    'Technology Companies',
    'Manufacturing',
    'Financial Services',
    'Healthcare',
    'Distribution Centers',
    'Corporate Campuses',
    'Call Centers',
    'Research & Development',
    'Engineering Firms',
  ],
  nearbyLinks: [
    { city: 'Phoenix', slug: 'phoenix' },
    { city: 'Mesa', slug: 'mesa' },
    { city: 'Scottsdale', slug: 'scottsdale' },
    { city: 'Gilbert', slug: 'gilbert' },
    { city: 'Tempe', slug: 'tempe' },
  ],
};

export default function ChandlerPage() {
  return <LocationPage loc={loc} />;
}
