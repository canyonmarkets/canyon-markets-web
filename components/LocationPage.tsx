import Link from 'next/link';
import { CheckCircle, Phone, Mail, MapPin } from 'lucide-react';

export type LocationData = {
  city: string;
  slug: string;
  state: string;
  headline: string;
  intro: string;
  industries: string[];
  nearbyLinks: { city: string; slug: string }[];
};

const BENEFITS = [
  'Zero cost — no equipment fees, no installation charges, ever',
  'Hundreds of SKUs: snacks, meals, fresh food, drinks, healthy options',
  'Cashless checkout — tap, swipe, or scan to pay',
  'Real-time inventory monitoring and proactive restocking',
  'Modern equipment maintained at zero cost to you',
  'Response within one business day',
];

export default function LocationPage({ loc }: { loc: LocationData }) {
  return (
    <div className="bg-white">

      {/* ── Hero ── */}
      <section className="bg-stone-900 px-6 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-brand-500 font-mono text-sm tracking-[0.3em] uppercase mb-4">
            {loc.city}, {loc.state}
          </p>
          <h1 className="font-display font-bold text-3xl sm:text-5xl uppercase tracking-wide text-white leading-tight mb-6">
            {loc.headline}
          </h1>
          <p className="text-stone-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            {loc.intro}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-600 px-8 py-4 text-sm font-semibold text-white uppercase tracking-wide hover:bg-brand-700 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-500/40"
            >
              Request a Free Assessment
            </a>
            <a
              href="tel:+16029356830"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-stone-600 px-8 py-4 text-sm font-semibold text-white uppercase tracking-wide hover:border-brand-500 transition-colors duration-200"
            >
              <Phone size={16} strokeWidth={1.5} />
              (602) 935-6830
            </a>
          </div>
        </div>
      </section>

      {/* ── What You Get ── */}
      <section className="px-6 py-20 bg-stone-50">
        <div className="max-w-4xl mx-auto">
          <p className="text-brand-600 font-mono text-sm tracking-[0.3em] uppercase mb-3 text-center">
            What You Get
          </p>
          <h2 className="font-display font-bold text-2xl sm:text-4xl uppercase tracking-wide text-stone-900 text-center mb-12">
            Free Micro-Market Installation in {loc.city}
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {BENEFITS.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <CheckCircle size={20} className="flex-shrink-0 mt-0.5 text-brand-600" strokeWidth={1.5} />
                <span className="text-stone-700 text-sm leading-relaxed">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Industries We Serve ── */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-brand-600 font-mono text-sm tracking-[0.3em] uppercase mb-3 text-center">
            Who We Serve
          </p>
          <h2 className="font-display font-bold text-2xl sm:text-4xl uppercase tracking-wide text-stone-900 text-center mb-4">
            {loc.city} Businesses We Work With
          </h2>
          <p className="text-stone-600 text-sm leading-relaxed text-center max-w-2xl mx-auto mb-10">
            Canyon Markets installs free micro-markets across a wide range of {loc.city}-area workplaces.
            If your facility has 50 or more employees, you likely qualify.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {loc.industries.map((ind) => (
              <span
                key={ind}
                className="px-4 py-2 rounded-full border border-stone-200 bg-stone-50 text-stone-700 text-sm font-medium"
              >
                {ind}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="px-6 py-20 bg-stone-50">
        <div className="max-w-4xl mx-auto">
          <p className="text-brand-600 font-mono text-sm tracking-[0.3em] uppercase mb-3 text-center">
            Simple Process
          </p>
          <h2 className="font-display font-bold text-2xl sm:text-4xl uppercase tracking-wide text-stone-900 text-center mb-12">
            How It Works in {loc.city}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Request an Assessment', body: 'Fill out the form or call us. We\'ll respond within one business day and schedule a free on-site visit to your ' + loc.city + ' facility.' },
              { step: '02', title: 'We Design Your Layout', body: 'Our team visits your break room, measures the space, and designs a custom micro-market layout at no cost to you.' },
              { step: '03', title: 'We Install Everything', body: 'We deliver and install all equipment, stock it fully, and take over all ongoing restocking and maintenance.' },
            ].map(({ step, title, body }) => (
              <div key={step} className="flex flex-col gap-3">
                <span className="font-mono text-4xl font-bold text-brand-200 leading-none">{step}</span>
                <h3 className="font-display font-bold text-lg uppercase tracking-wide text-stone-900">{title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Other Locations ── */}
      <section className="px-6 py-16 bg-white border-t border-stone-100">
        <div className="max-w-4xl mx-auto">
          <p className="text-stone-500 text-sm text-center mb-6 font-mono tracking-wide uppercase">
            Also Serving the Phoenix Metro
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {loc.nearbyLinks.map(({ city, slug }) => (
              <Link
                key={slug}
                href={`/locations/${slug}`}
                className="px-4 py-2 rounded-lg border border-stone-200 text-sm text-stone-600 hover:border-brand-500 hover:text-brand-600 transition-colors duration-200"
              >
                Micro-Markets in {city}
              </Link>
            ))}
            <Link
              href="/"
              className="px-4 py-2 rounded-lg border border-stone-200 text-sm text-stone-600 hover:border-brand-500 hover:text-brand-600 transition-colors duration-200"
            >
              ← Back to Canyon Markets
            </Link>
          </div>
        </div>
      </section>

      {/* ── Contact CTA ── */}
      <section className="px-6 py-20 bg-brand-800">
        <div className="max-w-2xl mx-auto text-center flex flex-col gap-6">
          <h2 className="font-display font-bold text-2xl sm:text-4xl uppercase tracking-wide text-white leading-tight">
            Ready to Upgrade Your {loc.city} Break Room?
          </h2>
          <p className="text-brand-100 text-sm leading-relaxed">
            No cost, no contracts, no obligation. We'll visit your facility, design the layout,
            and handle everything from installation to restocking — forever.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 text-sm font-semibold text-brand-800 uppercase tracking-wide hover:bg-brand-50 transition-colors duration-200"
            >
              Request Free Assessment
            </a>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
            <a href="mailto:info@canyon-markets.com" className="inline-flex items-center gap-2 text-sm text-brand-200 hover:text-white transition-colors duration-200">
              <Mail size={14} strokeWidth={1.5} />
              info@canyon-markets.com
            </a>
            <a href="tel:+16029356830" className="inline-flex items-center gap-2 text-sm text-brand-200 hover:text-white transition-colors duration-200">
              <Phone size={14} strokeWidth={1.5} />
              (602) 935-6830
            </a>
            <span className="inline-flex items-center gap-2 text-sm text-brand-200">
              <MapPin size={14} strokeWidth={1.5} />
              {loc.city}, {loc.state}
            </span>
          </div>
        </div>
      </section>

    </div>
  );
}
