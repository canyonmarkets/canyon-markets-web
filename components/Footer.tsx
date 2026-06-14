import Link from 'next/link';
import { SITE } from '@/lib/site';
import { INDUSTRIES } from '@/lib/industries';
import { CITIES_DATA } from '@/lib/cities';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/[0.06] bg-base">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 pb-10 border-b border-white/[0.06]">
          <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/canyon-logo.png" alt="Canyon Markets" className="h-8 w-auto" />
              <span className="font-display text-base tracking-wide text-iron-100 uppercase">Canyon Markets</span>
            </div>
            <p className="text-xs leading-relaxed text-iron-300 max-w-xs">
              Family-run, zero-cost micro-markets for {SITE.metro} shift workforces. Serving the Valley since {SITE.since}.
            </p>
          </div>

          <div>
            <p className="text-xs font-mono tracking-[0.2em] uppercase text-iron-400 mb-4">Industries</p>
            <ul className="flex flex-col gap-2.5">
              {INDUSTRIES.map((i) => (
                <li key={i.slug}>
                  <Link href={`/industries/${i.slug}`} className="text-sm text-iron-300 hover:text-ember-300 transition-colors">{i.short}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-mono tracking-[0.2em] uppercase text-iron-400 mb-4">Locations</p>
            <ul className="flex flex-col gap-2.5">
              {CITIES_DATA.map((c) => (
                <li key={c.slug}>
                  <Link href={`/locations/${c.slug}`} className="text-sm text-iron-300 hover:text-ember-300 transition-colors">{c.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-mono tracking-[0.2em] uppercase text-iron-400 mb-4">Contact</p>
            <div className="flex flex-col gap-3">
              <a href={`mailto:${SITE.email}`} className="text-sm text-iron-300 hover:text-ember-300 transition-colors">{SITE.email}</a>
              <a href={`tel:${SITE.phoneHref}`} className="text-sm text-iron-300 hover:text-ember-300 transition-colors">{SITE.phone}</a>
              <span className="text-sm text-iron-300">{SITE.metro}, AZ</span>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-iron-400">&copy; {year} Canyon Markets LLC. All rights reserved.</p>
          <p className="text-xs text-iron-500 font-mono tracking-wide uppercase">Fresh On-Site Markets · {SITE.metro}</p>
        </div>
      </div>
    </footer>
  );
}
