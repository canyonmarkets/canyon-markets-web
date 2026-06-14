import Link from 'next/link';
import Breadcrumbs, { type Crumb } from './Breadcrumbs';

export default function PageHero({
  eyebrow,
  title,
  sub,
  photo = '/mm-cafeteria.png',
  crumbs,
}: {
  eyebrow: string;
  title: React.ReactNode;
  sub: string;
  photo?: string;
  crumbs: Crumb[];
}) {
  return (
    <section className="relative flex items-center overflow-hidden min-h-[62vh] pt-28 pb-16">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={photo} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover object-center" />
      <div className="hero-scrim absolute inset-0"></div>
      <div className="absolute inset-0 gridlines opacity-30"></div>

      <div className="relative z-10 mx-auto max-w-7xl w-full px-6 lg:px-10">
        <div className="max-w-3xl">
          <div className="mb-6"><Breadcrumbs crumbs={crumbs} /></div>
          <div className="eyebrow text-ember-300 mb-5 flex items-center gap-3"><span className="h-px w-8 bg-ember-500/70"></span> {eyebrow}</div>
          <h1 className="font-display uppercase text-white leading-[0.95] tracking-tight text-[2.4rem] sm:text-5xl lg:text-[3.6rem]">{title}</h1>
          <p className="mt-6 text-iron-100 text-base sm:text-lg leading-relaxed max-w-2xl">{sub}</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3.5">
            <Link href="#contact" className="btn-ember inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-[13px] font-semibold uppercase tracking-wider text-white">
              Request a Free Assessment
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" /></svg>
            </Link>
            <a href="tel:+16029356830" className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-7 py-4 text-[13px] font-semibold uppercase tracking-wider text-white hover:border-white/50 transition-all duration-200">
              (602) 935-6830
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
