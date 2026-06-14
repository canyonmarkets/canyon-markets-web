import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CITIES_DATA, getCity } from '@/lib/cities';
import { INDUSTRIES } from '@/lib/industries';
import { SITE } from '@/lib/site';
import PageHero from '@/components/PageHero';
import System from '@/components/System';
import Difference from '@/components/Difference';
import Benefits from '@/components/Benefits';
import Process from '@/components/Process';
import ContactForm from '@/components/ContactForm';
import JsonLd from '@/components/JsonLd';
import { breadcrumbJsonLd, serviceJsonLd } from '@/lib/seo';

export function generateStaticParams() {
  return CITIES_DATA.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city } = await params;
  const c = getCity(city);
  if (!c) return {};
  const title = `Micro-Markets in ${c.metaCity} | Free Break-Room Installation`;
  const description = `Canyon Markets installs fully-managed, zero-cost micro-markets in ${c.metaCity} workplaces — fresh food on your floor for shift-based teams. Live in ${SITE.installDays} days.`;
  return { title, description, alternates: { canonical: `/locations/${c.slug}` }, openGraph: { title: `${title}`, description, url: `${SITE.url}/locations/${c.slug}`, images: [{ url: '/mm-cafeteria.png' }] } };
}

export default async function CityHub({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const c = getCity(city);
  if (!c) notFound();

  const crumbs = [{ name: 'Home', path: '/' }, { name: 'Locations', path: '/locations' }, { name: c.label, path: `/locations/${c.slug}` }];
  const nearby = c.nearby.map(getCity).filter(Boolean);

  return (
    <>
      <JsonLd data={[
        breadcrumbJsonLd(crumbs),
        serviceJsonLd({ name: `Micro-Markets in ${c.label}, AZ`, description: `Zero-cost workplace micro-markets in ${c.label}, Arizona.`, path: `/locations/${c.slug}`, cities: [c.label] }),
      ]} />

      <PageHero
        eyebrow={`${c.metaCity} · Zero-Cost Micro-Markets`}
        title={<>Micro-Markets in <span className="grad-ember">{c.label}.</span></>}
        sub={`Fresh, fully-managed break-room markets for ${c.label} employers — stocked on your floor for every shift, at zero cost. Live in ${SITE.installDays} days.`}
        crumbs={crumbs}
      />

      <section className="relative py-24 lg:py-28 overflow-hidden">
        <div className="blob bg-ember-700 h-[400px] w-[400px] left-[-12rem] top-16 opacity-25"></div>
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-3xl mb-12" data-reveal>
            <div className="eyebrow text-ember-400 mb-5 flex items-center gap-3"><span className="h-px w-8 bg-ember-500/60"></span> Serving {c.label}</div>
            <h2 className="font-display uppercase text-iron-100 leading-[1.0] tracking-tight text-3xl sm:text-5xl">On the floor across <span className="grad-ember">{c.label}.</span></h2>
            <p className="mt-6 text-iron-200 text-base sm:text-lg leading-relaxed">{c.localIntro}</p>
            <p className="mt-4 text-iron-200 text-[15px] leading-relaxed">We already serve {c.serves} — and we&rsquo;re growing across {c.areas.slice(0, 3).join(', ')}.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4" data-reveal>
            {INDUSTRIES.map((i) => (
              <Link key={i.slug} href={`/industries/${i.slug}/${c.slug}`} className="group rounded-2xl glass p-6 hover:border-ember-500/40 transition-all duration-300 flex items-center justify-between">
                <span className="font-display text-base uppercase text-iron-100 leading-tight">{i.short} in {c.label}</span>
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="text-ember-300 flex-none transition-transform group-hover:translate-x-1"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" /></svg>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <System />
      <Difference />
      <Benefits />
      <Process />

      {nearby.length > 0 && (
        <section className="relative py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-10" data-reveal>
            <div className="eyebrow text-ember-400 mb-6">Nearby</div>
            <div className="flex flex-wrap gap-3">
              {nearby.map((nc) => nc && (
                <Link key={nc.slug} href={`/locations/${nc.slug}`} className="rounded-full glass px-5 py-2.5 font-display text-sm uppercase text-iron-100 hover:border-ember-500/40 transition-colors">{nc.label}</Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <ContactForm source={`location/${c.slug}`} />
    </>
  );
}
