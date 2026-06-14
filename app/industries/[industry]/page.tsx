import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { INDUSTRIES, getIndustry } from '@/lib/industries';
import { CITIES_DATA } from '@/lib/cities';
import { SITE } from '@/lib/site';
import PageHero from '@/components/PageHero';
import System from '@/components/System';
import Difference from '@/components/Difference';
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
  return INDUSTRIES.map((i) => ({ industry: i.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ industry: string }> }): Promise<Metadata> {
  const { industry } = await params;
  const data = getIndustry(industry);
  if (!data) return {};
  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: { canonical: `/industries/${data.slug}` },
    openGraph: { title: data.metaTitle, description: data.metaDescription, url: `${SITE.url}/industries/${data.slug}`, images: [{ url: PHOTOS[data.slug] || '/mm-cafeteria.png' }] },
  };
}

export default async function IndustryHub({ params }: { params: Promise<{ industry: string }> }) {
  const { industry } = await params;
  const data = getIndustry(industry);
  if (!data) notFound();

  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Industries', path: '/industries' },
    { name: data.short, path: `/industries/${data.slug}` },
  ];

  return (
    <>
      <JsonLd data={[
        breadcrumbJsonLd(crumbs),
        serviceJsonLd({ name: data.metaTitle, description: data.metaDescription, path: `/industries/${data.slug}` }),
        faqJsonLd(data.faqs),
      ]} />

      <PageHero
        eyebrow={`${SITE.metro} · Zero-Cost Micro-Markets`}
        title={data.h1}
        sub={data.heroSub}
        photo={PHOTOS[data.slug] || '/mm-cafeteria.png'}
        crumbs={crumbs}
      />

      {/* Why it matters for this industry */}
      <section className="relative py-24 lg:py-28 overflow-hidden">
        <div className="blob bg-ember-700 h-[400px] w-[400px] left-[-12rem] top-16 opacity-25"></div>
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-[1fr_0.9fr] gap-12 lg:gap-16 items-start">
          <div data-reveal>
            <div className="eyebrow text-ember-400 mb-5 flex items-center gap-3"><span className="h-px w-8 bg-ember-500/60"></span> Why On-Site Wins</div>
            <h2 className="font-display uppercase text-iron-100 leading-[1.0] tracking-tight text-3xl sm:text-5xl">
              Fuel the floor, <span className="grad-ember">not the parking lot.</span>
            </h2>
            <p className="mt-6 text-iron-200 text-base sm:text-lg leading-relaxed">{data.whyCaptive}</p>
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              <div className="rounded-2xl glass p-5">
                <div className="font-mono text-[10px] tracking-widest uppercase text-ember-300 mb-2">Typical Shifts</div>
                <p className="text-iron-200 text-sm leading-relaxed">{data.shiftNote}</p>
              </div>
              <div className="rounded-2xl glass p-5">
                <div className="font-mono text-[10px] tracking-widest uppercase text-ember-300 mb-2">What We Stock</div>
                <p className="text-iron-200 text-sm leading-relaxed">{data.productMix}</p>
              </div>
            </div>
          </div>
          <div data-reveal className="rounded-3xl glass-strong p-8">
            <div className="eyebrow text-iron-300 mb-5">The Break-Room Problem</div>
            <ul className="flex flex-col gap-4">
              {data.pains.map((p) => (
                <li key={p} className="flex items-start gap-3 text-iron-200 text-sm leading-relaxed">
                  <span className="mt-1 flex-none inline-flex h-5 w-5 items-center justify-center rounded-full bg-ember-500/15 border border-ember-500/40">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6L6 18" stroke="#F4A06A" strokeWidth={2.4} strokeLinecap="round" /></svg>
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <System />
      <Difference />
      <Benefits />
      <Process />

      {/* City links for this industry */}
      <section className="relative py-24 lg:py-28 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-2xl mb-10" data-reveal>
            <div className="eyebrow text-ember-400 mb-5 flex items-center gap-3"><span className="h-px w-8 bg-ember-500/60"></span> Service Area</div>
            <h2 className="font-display uppercase text-iron-100 leading-[1.0] tracking-tight text-3xl sm:text-5xl">
              {data.short} micro-markets <span className="grad-ember">across the Valley.</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4" data-reveal>
            {CITIES_DATA.map((c) => (
              <Link key={c.slug} href={`/industries/${data.slug}/${c.slug}`} className="group rounded-2xl glass p-6 hover:border-ember-500/40 transition-all duration-300 flex items-center justify-between">
                <span className="font-display text-lg uppercase text-iron-100">{c.label}</span>
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="text-ember-300 transition-transform group-hover:translate-x-1"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" /></svg>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Faq faqs={data.faqs} heading={`${data.short} Micro-Markets — FAQ`} />
      <ContactForm source={data.slug} />
    </>
  );
}
