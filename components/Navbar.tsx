import Link from 'next/link';
import { SITE } from '@/lib/site';

export default function Navbar() {
  return (
    <header id="nav" className="fixed top-0 inset-x-0 z-50 transition-all duration-300">
      <nav className="mx-auto max-w-7xl px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/canyon-logo.png" alt="Canyon Markets" className="h-10 w-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]" />
          <span className="font-display text-[19px] sm:text-[21px] tracking-wide text-iron-100 leading-none">CANYON MARKETS</span>
        </Link>

        <div className="hidden md:flex items-center gap-9 text-[13px] font-medium text-iron-300">
          <Link href="/#concept" className="ulink hover:text-white transition-colors">The Concept</Link>
          <Link href="/#system" className="ulink hover:text-white transition-colors">The System</Link>
          <Link href="/#process" className="ulink hover:text-white transition-colors">Process</Link>
          <Link href="/#serve" className="ulink hover:text-white transition-colors">Who We Serve</Link>
        </div>

        <div className="flex items-center gap-3">
          <a href={`tel:${SITE.phoneHref}`} className="hidden lg:inline-flex items-center gap-2 text-[13px] font-mono text-iron-300 hover:text-iron-100 transition-colors">
            <span className="h-1.5 w-1.5 rounded-full bg-ember-500"></span>{SITE.phone}
          </a>
          <Link href="/#contact" className="inline-flex items-center rounded-full border border-ember-500/40 bg-ember-500/10 px-5 py-2.5 text-[12px] font-semibold uppercase tracking-wider text-ember-300 hover:bg-ember-500 hover:text-white hover:border-ember-500 transition-all duration-200">
            Free Assessment
          </Link>
        </div>
      </nav>
    </header>
  );
}
