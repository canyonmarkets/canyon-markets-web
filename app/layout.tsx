import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  // ── Titles ──────────────────────────────────────────────────────────
  title: {
    default: 'Canyon Markets | Free Micro-Market Installation — Phoenix, AZ',
    template: '%s | Canyon Markets',
  },

  // ── Core description (shows in Google search snippets) ───────────────
  description:
    'Canyon Markets upgrades break rooms for Phoenix-area manufacturers, distributors, and schools with fully stocked micro-markets at zero cost. No contracts. No equipment fees. We install, stock, and maintain everything.',

  // ── Keywords ────────────────────────────────────────────────────────
  keywords: [
    'micro market Phoenix AZ',
    'break room upgrade Phoenix',
    'free micro-market installation',
    'vending machine replacement Phoenix',
    'office break room micro market',
    'manufacturing break room Phoenix',
    'school staff vending Phoenix',
    'cashless vending Arizona',
    'workplace food service Phoenix',
    'micro-market Mesa Chandler Scottsdale',
    'zero cost vending installation',
    'Canyon Markets',
  ],

  // ── Authorship ───────────────────────────────────────────────────────
  authors: [{ name: 'Canyon Markets', url: 'https://canyon-markets.com' }],
  creator: 'Canyon Markets',
  publisher: 'Canyon Markets',

  // ── Canonical base URL ───────────────────────────────────────────────
  metadataBase: new URL('https://canyon-markets.com'),
  alternates: { canonical: '/' },

  // ── Open Graph (Facebook, LinkedIn, iMessage previews) ───────────────
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://canyon-markets.com',
    siteName: 'Canyon Markets',
    title: 'Canyon Markets | Free Micro-Market Installation — Phoenix, AZ',
    description:
      'Fully stocked micro-markets at zero cost for Phoenix-area manufacturers, distributors, and schools. We install everything and keep it stocked — for free.',
    images: [
      {
        url: '/breakroom-workers.png',
        width: 1200,
        height: 630,
        alt: 'Canyon Markets break room micro-market installation — Phoenix, AZ',
      },
    ],
  },

  // ── Twitter / X Card ────────────────────────────────────────────────
  twitter: {
    card: 'summary_large_image',
    title: 'Canyon Markets | Free Micro-Market Installation — Phoenix, AZ',
    description:
      'Zero-cost micro-markets for Phoenix-area workplaces. We install, stock, and maintain everything.',
    images: ['/breakroom-workers.png'],
  },

  // ── Crawling & indexing ──────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Canyon Markets',
  description:
    'Canyon Markets installs fully stocked, zero-cost micro-markets in qualifying Phoenix-area workplaces — manufacturing facilities, distribution centers, and schools.',
  url: 'https://canyon-markets.com',
  telephone: '+16029356830',
  email: 'info@canyon-markets.com',
  logo: 'https://canyon-markets.com/logo.png',
  image: 'https://canyon-markets.com/breakroom-workers.png',
  priceRange: 'Free Installation',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Phoenix',
    addressRegion: 'AZ',
    addressCountry: 'US',
  },
  areaServed: [
    { '@type': 'City', name: 'Phoenix', containedInPlace: { '@type': 'State', name: 'Arizona' } },
    { '@type': 'City', name: 'Mesa',    containedInPlace: { '@type': 'State', name: 'Arizona' } },
    { '@type': 'City', name: 'Chandler',containedInPlace: { '@type': 'State', name: 'Arizona' } },
    { '@type': 'City', name: 'Gilbert', containedInPlace: { '@type': 'State', name: 'Arizona' } },
    { '@type': 'City', name: 'Scottsdale',containedInPlace: { '@type': 'State', name: 'Arizona' } },
    { '@type': 'City', name: 'Tempe',   containedInPlace: { '@type': 'State', name: 'Arizona' } },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Micro-Market Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Free Micro-Market Installation',
          description:
            'Complete micro-market installation including open shelving, smart checkout kiosk, and refrigerated coolers at zero cost to the employer.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Ongoing Restocking & Maintenance',
          description:
            'Real-time inventory monitoring with proactive restocking, equipment maintenance, and worker support — all fully managed.',
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-US"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
