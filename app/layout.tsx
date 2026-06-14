import type { Metadata } from 'next';
import { Inter, Space_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SiteAnimations from '@/components/SiteAnimations';
import { SITE } from '@/lib/site';

const inter = Inter({ variable: '--font-inter', subsets: ['latin'], display: 'swap' });
const spaceMono = Space_Mono({ variable: '--font-space-mono', weight: ['400', '700'], subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: {
    default: 'Canyon Markets | Zero-Cost Micro-Markets for Phoenix Shift Workforces',
    template: '%s | Canyon Markets',
  },
  description:
    'Canyon Markets builds fully-managed, zero-cost micro-markets for Phoenix-area manufacturing, distribution, production, warehousing, and call-center teams. Fresh food on your floor — live in 14 days.',
  keywords: [
    'micro market Phoenix AZ',
    'break room micro market',
    'micro market for manufacturing Phoenix',
    'distribution center break room',
    'warehouse vending Phoenix',
    'call center break room',
    'self-checkout micro market Arizona',
    'zero cost micro market',
    'shift workforce food service Phoenix',
    'Canyon Markets',
  ],
  authors: [{ name: 'Canyon Markets', url: SITE.url }],
  creator: 'Canyon Markets',
  publisher: 'Canyon Markets',
  metadataBase: new URL(SITE.url),
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE.url,
    siteName: 'Canyon Markets',
    title: 'Canyon Markets | Zero-Cost Micro-Markets for Phoenix Shift Workforces',
    description:
      'Fresh, fully-managed micro-markets on your floor — for the shift teams who can’t step out for lunch. Zero cost. Live in 14 days.',
    images: [{ url: '/mm-cafeteria.png', width: 1200, height: 630, alt: 'A Canyon Markets micro-market in use in a facility break room' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Canyon Markets | Zero-Cost Micro-Markets for Phoenix Shift Workforces',
    description: 'Zero-cost, fully-managed micro-markets for Phoenix-area shift workforces.',
    images: ['/mm-cafeteria.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Canyon Markets',
  description:
    'Family-run operator of fully-managed, zero-cost workplace micro-markets serving Phoenix-area manufacturing, distribution, production, warehousing, and call-center facilities since 2017.',
  url: SITE.url,
  telephone: SITE.phoneHref,
  email: SITE.email,
  logo: `${SITE.url}/canyon-logo.png`,
  image: `${SITE.url}/mm-cafeteria.png`,
  foundingDate: '2017',
  priceRange: 'Free installation — $0 to the employer',
  address: { '@type': 'PostalAddress', addressLocality: 'Phoenix', addressRegion: 'AZ', addressCountry: 'US' },
  areaServed: [
    { '@type': 'City', name: 'Phoenix' },
    { '@type': 'City', name: 'Mesa' },
    { '@type': 'City', name: 'Chandler' },
    { '@type': 'City', name: 'Gilbert' },
    { '@type': 'City', name: 'Scottsdale' },
    { '@type': 'City', name: 'Tempe' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Micro-Market Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Free Micro-Market Installation', description: 'Complete micro-market — open shelving, self-checkout kiosk, glass-door coolers and freezers — installed at zero cost to the employer.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Ongoing Restocking & Maintenance', description: 'Inventory monitoring, proactive restocking across every shift, equipment maintenance, and worker support — fully managed.' } },
    ],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-US" className={`${inter.variable} ${spaceMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans text-iron-200">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <SiteAnimations />
      </body>
    </html>
  );
}
