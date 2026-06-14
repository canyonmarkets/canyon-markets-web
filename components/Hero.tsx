import Link from 'next/link';

export default function Hero() {
  return (
    <section id="hero" className="spotlight relative min-h-[100svh] flex items-center overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/mm-cafeteria.png" alt="A Canyon Markets micro-market in use in a facility break room" className="hero-photo absolute h-[116%] w-[116%] -top-[8%] -left-[8%] object-cover object-center" />
      <div className="hero-scrim absolute inset-0"></div>
      <div className="lightsweep" id="lightsweep"></div>
      <div className="absolute inset-0 gridlines opacity-30"></div>

      <div className="relative z-10 mx-auto max-w-7xl w-full px-6 lg:px-10 pt-28 pb-20 grid lg:grid-cols-[1.15fr_0.85fr] gap-10 items-center">
        <div className="max-w-2xl">
          <div data-hero className="eyebrow text-ember-300 mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-ember-500/70"></span> Phoenix Metro · Zero-Cost Micro-Markets
          </div>
          <h1 className="font-display uppercase text-white leading-[0.92] tracking-tight text-[2.7rem] sm:text-6xl lg:text-[4.6rem]">
            <span data-hero-line className="block">The 90s Vending</span>
            <span data-hero-line className="block">Machine Is</span>
            <span data-hero-line id="heroDead" className="block grad-ember">Dead.</span>
          </h1>

          <svg className="swoosh mt-6 w-64 h-6" viewBox="0 0 300 24" fill="none" aria-hidden="true">
            <path d="M2 18 C70 4 150 4 220 10 C250 12 280 14 298 8" stroke="#C94B0C" strokeWidth={3} strokeLinecap="round" />
          </svg>

          <p data-hero className="mt-6 text-iron-100 text-base sm:text-lg leading-relaxed max-w-xl">
            Fresh meals, snacks, and cold drinks stocked right on your floor — for the shift teams who can&rsquo;t step out for lunch.{' '}
            <span className="font-semibold text-white">Zero cost. Fully managed by us. Live in 14 days.</span>
          </p>

          <div data-hero className="mt-9 flex flex-col sm:flex-row gap-3.5">
            <Link href="#contact" className="btn-ember inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-[13px] font-semibold uppercase tracking-wider text-white">
              Request a Free Assessment
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" /></svg>
            </Link>
            <Link href="#concept" className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-7 py-4 text-[13px] font-semibold uppercase tracking-wider text-white hover:border-white/50 transition-all duration-200">
              What&rsquo;s a Micro-Market?
            </Link>
          </div>

          <div data-hero className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-[11px] font-mono uppercase tracking-widest text-iron-200">
            <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-ember-500"></span>$0 To You</span>
            <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-ember-500"></span>225+ Products</span>
            <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-ember-500"></span>Family-Run &amp; Local</span>
          </div>
        </div>

        <div className="relative hidden lg:block h-[420px]">
          <div data-hero data-chip className="floaty absolute top-2 right-4 glass-strong rounded-2xl px-5 py-4 w-56">
            <div className="font-mono text-[10px] tracking-widest text-ember-300 mb-1">SELF-CHECKOUT</div>
            <div className="font-display text-2xl uppercase text-white leading-none">~3 Sec</div>
            <div className="text-iron-200 text-xs mt-1">Tap · card · mobile</div>
          </div>
          <div data-hero data-chip className="floaty d1 absolute top-40 right-32 glass-strong rounded-2xl px-5 py-4 w-52">
            <div className="font-mono text-[10px] tracking-widest text-emerald-300 mb-1 flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400 blink"></span>ALWAYS STOCKED</div>
            <div className="font-display text-2xl uppercase text-white leading-none">Fresh Daily</div>
            <div className="text-iron-200 text-xs mt-1">We monitor &amp; restock</div>
          </div>
          <div data-hero data-chip className="floaty d2 absolute bottom-4 right-10 glass-strong rounded-2xl px-5 py-4 w-60">
            <div className="font-mono text-[10px] tracking-widest text-ember-300 mb-1">FOR SHIFT TEAMS</div>
            <div className="font-display text-2xl uppercase text-white leading-none">24 / 7 Access</div>
            <div className="text-iron-200 text-xs mt-1">Day, night &amp; overnight crews</div>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex absolute bottom-7 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-iron-300 z-10">
        <span className="font-mono text-[9px] tracking-[0.3em] uppercase">Scroll</span>
        <span className="h-9 w-px bg-gradient-to-b from-ember-500/70 to-transparent"></span>
      </div>
    </section>
  );
}
