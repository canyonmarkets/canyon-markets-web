import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { INDUSTRIES, getIndustry } from '@/lib/industries';
import { CITIES_DATA, getCity } from '@/lib/cities';
import { SITE } from '@/lib/site';
import PageHero from '@/components/PageHero';
import System from '@/components/System';
import Benefits from '@/components/Benefits';
import Process from '@/components/Process';
import Faq from '@/components/Faq';
import ContactForm from '@/components/ContactForm';
import JsonLd from '@/components/JsonLd';
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from '@/lib/seo';

const PHOTOS: Record<string, string> = {
  manufacturing: '/mm-industrial.png',
  'distribution-centers': '/mm-cafeteria.png',
  'production-facilities': '/mm-industrial.png',
  warehousing: '/mm-industrial.png',
  'call-centers': '/mm-office.png',
};

export function generateStaticParams() {
  return INDUSTRIES.flatMap((i) => CITIES_DATA.map((c) => ({ industry: i.slug, city: c.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ industry: string; city: string }> }): Promise<Metadata> {
  const { industry, city } = await params;
  const ind = getIndustry(industry); const c = getCity(city);
  if (!ind || !c) return {};
  const title = `${ind.short} Break-Room Micro-Markets in ${c.label}, AZ`;
  const description = `Zero-cost, fully-managed micro-markets for ${ind.short.toLowerCase()} teams in ${c.label}, AZ. Fresh food on your floor for every shift — live in ${SITE.installDays} days. No equipment cost.`;
  return {
    title,
    description,
    alternates: { canonical: `/industries/${ind.slug}/${c.slug}` },
    openGraph: { title: `${title} | Canyon Markets`, description, url: `${SITE.url}/industries/${ind.slug}/${c.slug}`, images: [{ url: PHOTOS[ind.slug] || '/mm-cafeteria.png' }] },
  };
}

export default async function Spoke({ params }: { params: Promise<{ industry: string; city: string }> }) {
  const { industry, city } = await params;
  const ind = getIndustry(industry); const c = getCity(city);
  if (!ind || !c) notFound();

  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Industries', path: '/industries' },
    { name: ind.short, path: `/industries/${ind.slug}` },
    { name: c.label, path: `/industries/${ind.slug}/${c.slug}` },
  ];

  const areasList = c.areas.slice(0, 3).join(', ');
  const cityFaq = {
    q: `Do you install micro-markets in ${c.label}?`,
    a: `Yes — ${c.label} is part of our core Phoenix-metro service area, and we already serve ${c.serves}. Installation, stocking, and maintenance are free, and most markets are live within ${SITE.installDays} days.`,
  };
  const faqs = [cityFaq, ...ind.faqs];

  const otherIndustries = INDUSTRIES.filter((i) => i.slug !== ind.slug);
  const nearbyCities = c.nearby.map(getCity).filter(Boolean);

  return (
    <>
      <JsonLd data={[
        breadcrumbJsonLd(crumbs),
        serviceJsonLd({ name: `${ind.short} Micro-Markets in ${c.label}, AZ`, description: `Zero-cost micro-markets for ${ind.short.toLowerCase()} teams in ${c.label}, Arizona.`, path: `/industries/${ind.slug}/${c.slug}`, cities: [c.label] }),
        faqJsonLd(faqs),
      ]} />

      <PageHero
        eyebrow={`${c.label}, AZ · Zero-Cost Micro-Markets`}
        title={`${ind.short} Micro-Markets in ${c.label}`}
        sub={`${ind.heroSub} Fully managed, zero cost, live in ${SITE.installDays} days — right here in ${c.label}.`}
        photo={PHOTOS[ind.slug] || '/mm-cafeteria.png'}
        crumbs={crumbs}
      />

      {/* Unique local + industry intro */}
      <section className="relative py-24 lg:py-28 overflow-hidden">
        <div className="blob bg-ember-700 h-[400px] w-[400px] right-[-12rem] top-16 opacity-25"></div>
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-[1fr_0.9fr] gap-12 lg:gap-16 items-start">
          <div data-reveal>
            <div className="eyebrow text-ember-400 mb-5 flex items-center gap-3"><span className="h-px w-8 bg-ember-500/60"></span> {ind.short} in {c.label}</div>
            <h2 className="font-display uppercase text-iron-100 leading-[1.0] tracking-tight text-3xl sm:text-5xl">
              On the floor in <span className="grad-ember">{c.label}.</span>
            </h2>
            <p className="mt-6 text-iron-200 text-base sm:text-lg leading-relaxed">{c.localIntro}</p>
            <p className="mt-4 text-iron-200 text-[15px] leading-relaxed">
              {ind.whyCaptive}
            </p>
            <p className="mt-4 text-iron-200 text-[15px] leading-relaxed">
              Around {c.label} — from {areasList} — we already serve {c.serves}. If your {ind.short.toLowerCase()} team works fixed shifts and can&rsquo;t step out for lunch, an on-site market is built for you.
            </p>
          </div>
          <div data-reveal className="rounded-3xl glass-strong p-8">
            <div className="eyebrow text-iron-300 mb-5">What Your {c.label} Team Gets</div>
            <ul className="flex flex-col gap-4">
              {ind.pains.map((p) => (
                <li key={p} className="flex items-start gap-3 text-iron-200 text-sm leading-relaxed">
                  <span className="mt-1 flex-none inline-flex h-5 w-5 items-center justify-center rounded-full bg-ember-500/15 border border-ember-500/40">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#F4A06A" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </span>
                  Solves: {p}
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-6 border-t border-white/[0.08] grid grid-cols-3 gap-3 text-center">
              <div><div className="font-display text-2xl text-iron-100">$0</div><div className="font-mono text-[8px] tracking-widest uppercase text-iron-300 mt-1">To You</div></div>
              <div><div className="font-display text-2xl text-iron-100">{SITE.skus}</div><div className="font-mono text-[8px] tracking-widest uppercase text-iron-300 mt-1">Products</div></div>
              <div><div className="font-display text-2xl text-iron-100">{SITE.installDays}d</div><div className="font-mono text-[8px] tracking-widest uppercase text-iron-300 mt-1">To Launch</div></div>
            </div>
          </div>
        </div>
      </section>

      <System />
      <Benefits />
      <Process />

      {/* Cross-links */}
      <section className="relative py-24 lg:py-28 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-12">
          <div data-reveal>
            <h2 className="font-display uppercase text-iron-100 leading-tight tracking-tight text-2xl sm:text-3xl mb-6">Other industries we serve in {c.label}</h2>
            <div className="flex flex-col gap-3">
              {otherIndustries.map((i) => (
                <Link key={i.slug} href={`/industries/${i.slug}/${c.slug}`} className="group rounded-2xl glass p-5 hover:border-ember-500/40 transition-all flex items-center justify-between">
                  <span className="font-display text-base uppercase text-iron-100">{i.short} in {c.label}</span>
                  <svg width="13" height="13" viewBox="0 0 16 16" fill="none" className="text-ember-300 transition-transform group-hover:translate-x-1"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" /></svg>
                </Link>
              ))}
            </div>
          </div>
          <div data-reveal>
            <h2 className="font-display uppercase text-iron-100 leading-tight tracking-tight text-2xl sm:text-3xl mb-6">{ind.short} in nearby cities</h2>
            <div className="flex flex-col gap-3">
              {nearbyCities.map((nc) => nc && (
                <Link key={nc.slug} href={`/industries/${ind.slug}/${nc.slug}`} className="group rounded-2xl glass p-5 hover:border-ember-500/40 transition-all flex items-center justify-between">
                  <span className="font-display text-base uppercase text-iron-100">{ind.short} in {nc.label}</span>
                  <svg width="13" height="13" viewBox="0 0 16 16" fill="none" className="text-ember-300 transition-transform group-hover:translate-x-1"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" /></svg>
                </Link>
              ))}
              <Link href={`/industries/${ind.slug}`} className="text-ember-300 ulink font-mono text-[11px] tracking-widest uppercase mt-2 w-max">All {ind.short} markets →</Link>
              <Link href={`/locations/${c.slug}`} className="text-ember-300 ulink font-mono text-[11px] tracking-widest uppercase w-max">Everything in {c.label} →</Link>
            </div>
          </div>
        </div>
      </section>

      <Faq faqs={faqs} heading={`${ind.short} Micro-Markets in ${c.label} — FAQ`} />
      <ContactForm source={`${ind.slug}/${c.slug}`} />
    </>
  );
}
