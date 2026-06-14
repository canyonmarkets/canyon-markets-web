import type { Metadata } from 'next';
import { SITE } from '@/lib/site';
import PageHero from '@/components/PageHero';
import Concept from '@/components/Concept';
import System from '@/components/System';
import Process from '@/components/Process';
import Faq from '@/components/Faq';
import ContactForm from '@/components/ContactForm';
import JsonLd from '@/components/JsonLd';
import { breadcrumbJsonLd, faqJsonLd } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'What Is a Micro-Market? | Canyon Markets',
  description: 'A micro-market is an unattended, self-serve mini convenience store built into your break room — open shelves, coolers, and self-checkout. Here’s how it works.',
  alternates: { canonical: '/what-is-a-micro-market' },
};

const crumbs = [{ name: 'Home', path: '/' }, { name: 'What Is a Micro-Market?', path: '/what-is-a-micro-market' }];

const FAQS = [
  { q: 'What is a micro-market?', a: 'A micro-market is a small, unattended retail space — like a mini convenience store — built into a workplace break room. It uses open shelving, glass-door coolers and freezers, and a self-checkout kiosk, so employees grab what they want and check themselves out in seconds. No cash, no lines, no leaving the building.' },
  { q: 'How is it different from vending machines?', a: 'A micro-market offers hundreds of fresh and packaged items on open shelves instead of a few dozen behind glass. It carries real meals and healthier options, accepts tap/card/mobile payment, and is restocked proactively — not left empty and cash-only.' },
  { q: 'What does a micro-market cost the employer?', a: `With Canyon Markets, nothing. Equipment, installation, restocking, and maintenance are all free — we earn through product sales. Most markets are live within ${SITE.installDays} days.` },
  { q: 'Is it secure if no one is watching it?', a: 'Yes. Self-checkout and security cameras are built in, and our remote monitoring tracks inventory. It runs unattended and self-serve, with no staffing required from you.' },
];

export default function WhatIsMicroMarket() {
  return (
    <>
      <JsonLd data={[breadcrumbJsonLd(crumbs), faqJsonLd(FAQS)]} />
      <PageHero
        eyebrow="The Concept"
        title={<>What is a <span className="grad-ember">micro-market?</span></>}
        sub="Think of it as a miniature, unattended convenience store built right into your break room — open shelves, coolers, and a self-serve checkout. Here’s exactly how it works."
        photo="/mm-office.png"
        crumbs={crumbs}
      />
      <Concept />
      <System />
      <Process />
      <Faq faqs={FAQS} heading="Micro-Markets — FAQ" />
      <ContactForm source="what-is-a-micro-market" />
    </>
  );
}
