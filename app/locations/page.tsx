import type { Metadata } from 'next';
import Link from 'next/link';
import { CITIES_DATA } from '@/lib/cities';
import { SITE } from '@/lib/site';
import PageHero from '@/components/PageHero';
import Process from '@/components/Process';
import ContactForm from '@/components/ContactForm';
import JsonLd from '@/components/JsonLd';
import { breadcrumbJsonLd } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Service Area | Phoenix Metro Micro-Markets',
  description: 'Canyon Markets installs zero-cost workplace micro-markets across the Phoenix metro — Phoenix, Mesa, Chandler, Gilbert, Scottsdale, and Tempe.',
  alternates: { canonical: '/locations' },
};

const crumbs = [{ name: 'Home', path: '/' }, { name: 'Locations', path: '/locations' }];

export default function LocationsIndex() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <PageHero
        eyebrow="Phoenix Metro · Service Area"
        title={<>Serving the <span className="grad-ember">whole Valley.</span></>}
        sub={`Family-run and local since ${SITE.since}. We install and manage zero-cost micro-markets across the Phoenix metro — same-day response, no out-of-state route trucks.`}
        crumbs={crumbs}
      />
      <section className="relative py-24 lg:py-28 overflow-hidden">
        <div className="blob bg-ember-700 h-[400px] w-[400px] right-[-12rem] top-16 opacity-25"></div>
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CITIES_DATA.map((c) => (
              <Link key={c.slug} href={`/locations/${c.slug}`} data-reveal className="group rounded-3xl glass p-8 hover:border-ember-500/40 transition-all duration-300">
                <h2 className="font-display text-2xl uppercase text-iron-100">{c.label}</h2>
                <p className="text-iron-200 text-sm leading-relaxed mt-2">{c.areas.slice(0, 2).join(' · ')}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-ember-300 font-mono text-[10px] tracking-widest uppercase">View {c.label}
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none" className="transition-transform group-hover:translate-x-1"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" /></svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Process />
      <ContactForm source="locations" />
    </>
  );
}
