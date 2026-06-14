import type { Metadata } from 'next';
import Link from 'next/link';
import { INDUSTRIES } from '@/lib/industries';
import { SITE } from '@/lib/site';
import PageHero from '@/components/PageHero';
import Difference from '@/components/Difference';
import Process from '@/components/Process';
import ContactForm from '@/components/ContactForm';
import JsonLd from '@/components/JsonLd';
import { breadcrumbJsonLd } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Industries We Serve | Phoenix Micro-Markets',
  description: 'Zero-cost workplace micro-markets for Phoenix-area manufacturing, distribution, production, warehousing, and call-center teams. Built for captive, shift-based workforces.',
  alternates: { canonical: '/industries' },
};

const crumbs = [{ name: 'Home', path: '/' }, { name: 'Industries', path: '/industries' }];

export default function IndustriesIndex() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <PageHero
        eyebrow={`${SITE.metro} · Who We Serve`}
        title={<>Built for captive,<br />shift-based teams.</>}
        sub="We specialize in facilities where the team can’t step out for lunch — 30-minute breaks, 10- and 12-hour shifts, and overnight crews. Find your industry below."
        crumbs={crumbs}
      />

      <section className="relative py-24 lg:py-28 overflow-hidden">
        <div className="blob bg-ember-700 h-[400px] w-[400px] right-[-12rem] top-16 opacity-25"></div>
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {INDUSTRIES.map((i) => (
              <Link key={i.slug} href={`/industries/${i.slug}`} data-reveal className="group rounded-3xl glass p-8 hover:border-ember-500/40 transition-all duration-300 flex flex-col">
                <h2 className="font-display text-2xl uppercase text-iron-100 leading-tight">{i.label}</h2>
                <p className="text-iron-200 text-sm leading-relaxed mt-3 flex-1">{i.heroSub}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-ember-300 font-mono text-[10px] tracking-widest uppercase">Explore
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none" className="transition-transform group-hover:translate-x-1"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" /></svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Difference />
      <Process />
      <ContactForm source="industries" />
    </>
  );
}
