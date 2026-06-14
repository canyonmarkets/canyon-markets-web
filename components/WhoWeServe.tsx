import Link from 'next/link';

const ICONS: Record<string, React.ReactNode> = {
  manufacturing: (<><path d="M3 21V9l6-3v3l6-3v4l6-2v13H3z" stroke="#F4A06A" strokeWidth={1.6} strokeLinejoin="round" /><path d="M7 21v-4h3v4M14 21v-4h3v4" stroke="#F4A06A" strokeWidth={1.4} /></>),
  'distribution-centers': (<><path d="M3 9l9-5 9 5-9 5-9-5z" stroke="#F4A06A" strokeWidth={1.5} strokeLinejoin="round" /><path d="M3 9v7l9 5 9-5V9" stroke="#F4A06A" strokeWidth={1.5} strokeLinejoin="round" /></>),
  'production-facilities': (<><path d="M4 20V8l5-4 5 4v12M14 20V11h6v9" stroke="#F4A06A" strokeWidth={1.5} strokeLinejoin="round" /><path d="M8 12h2M8 16h2" stroke="#F4A06A" strokeWidth={1.4} strokeLinecap="round" /></>),
  warehousing: (<><rect x="3" y="7" width="18" height="13" rx="1.5" stroke="#F4A06A" strokeWidth={1.5} /><path d="M3 11h18M9 7V4h6v3" stroke="#F4A06A" strokeWidth={1.5} strokeLinejoin="round" /></>),
  'call-centers': (<><path d="M5 5h14v9H8l-3 3V5z" stroke="#F4A06A" strokeWidth={1.5} strokeLinejoin="round" /><path d="M9 9h6M9 11h4" stroke="#F4A06A" strokeWidth={1.4} strokeLinecap="round" /></>),
};

const CARDS = [
  { slug: 'manufacturing', title: 'Manufacturing Facilities', body: 'Production lines don’t pause for a snack run. Keep your floor fed and running with fresh meals and cold drinks just steps from the line — fueling every shift without the off-site drive.', tags: ['Day & Night Shifts', 'On-Site Meals'], featured: true },
  { slug: 'distribution-centers', title: 'Distribution Centers', body: 'Pickers and packers on the clock need fast fuel. A 3-second checkout keeps breaks short and energy high.' },
  { slug: 'production-facilities', title: 'Production Facilities', body: 'Tight breaks, demanding shifts. An on-site market means real meals without anyone clocking out and driving off.' },
  { slug: 'warehousing', title: 'Warehouses & Shift Crews', body: '10s, 12s, and overnights — we stock for every shift, around the clock, so no one goes without.' },
  { slug: 'call-centers', title: 'Call Centers', body: 'Back-to-back calls and scheduled breaks. Grab-and-go fuel that fits a 15-minute window, right down the hall.' },
];

const Arrow = () => (
  <svg width="12" height="12" viewBox="0 0 16 16" fill="none" className="transition-transform group-hover:translate-x-1"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" /></svg>
);

export default function WhoWeServe() {
  return (
    <section id="serve" className="relative py-28 lg:py-36 overflow-hidden">
      <div className="blob bg-ember-700 h-[420px] w-[420px] right-[-12rem] top-24 opacity-25"></div>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl mb-14" data-reveal>
          <div className="eyebrow text-ember-400 mb-5 flex items-center gap-3"><span className="h-px w-8 bg-ember-500/60"></span> Who We Serve</div>
          <h2 className="font-display uppercase text-iron-100 leading-[1.0] tracking-tight text-4xl sm:text-6xl">
            Built for <span className="grad-ember">captive, shift-based</span> workforces.
          </h2>
          <p className="mt-6 text-iron-200 text-base sm:text-lg leading-relaxed">
            We specialize in facilities where the team can&rsquo;t just run out for lunch — 30-minute breaks, 10- and 12-hour shifts, and overnight crews. When leaving isn&rsquo;t an option, an on-site market isn&rsquo;t a perk. It&rsquo;s essential.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CARDS.map((c) => c.featured ? (
            <Link key={c.slug} href={`/industries/${c.slug}`} data-serve className="group sm:col-span-2 lg:col-span-1 lg:row-span-2 flex flex-col justify-between rounded-3xl border border-ember-500/40 bg-gradient-to-br from-ember-600/15 to-base p-8 hover:border-ember-500/70 transition-all duration-300 overflow-hidden relative">
              <div className="absolute inset-0 gridlines opacity-30"></div>
              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-ember-500/15 border border-ember-500/40">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">{ICONS[c.slug]}</svg>
                  </span>
                  <span className="font-mono text-[9px] tracking-widest uppercase text-ember-300">Priority No. 1</span>
                </div>
                <h3 className="font-display text-xl uppercase text-iron-100 mt-6 leading-tight">{c.title}</h3>
                <p className="text-iron-200 text-sm leading-relaxed mt-3">{c.body}</p>
              </div>
              <div className="relative flex flex-wrap gap-2 mt-6">
                {c.tags?.map((t) => (<span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[10px] tracking-wide text-iron-200">{t}</span>))}
                <span className="inline-flex items-center gap-1 text-ember-300 font-mono text-[10px] tracking-widest uppercase ml-auto">Explore <Arrow /></span>
              </div>
            </Link>
          ) : (
            <Link key={c.slug} href={`/industries/${c.slug}`} data-serve className="group rounded-3xl glass p-7 hover:border-ember-500/40 transition-all duration-300 flex flex-col">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 border border-white/10 mb-5">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">{ICONS[c.slug]}</svg>
              </span>
              <h3 className="font-display text-xl uppercase text-iron-100 leading-tight">{c.title}</h3>
              <p className="text-iron-200 text-[13px] leading-relaxed mt-2">{c.body}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-ember-300 font-mono text-[10px] tracking-widest uppercase">Explore <Arrow /></span>
            </Link>
          ))}
        </div>

        <p className="mt-8 text-center text-iron-300 text-sm max-w-2xl mx-auto" data-reveal>
          Not sure if you qualify? If your team works fixed shifts and stays on-site through breaks, you&rsquo;re exactly who we&rsquo;re built for. <Link href="#contact" className="text-ember-300 ulink">Let&rsquo;s talk.</Link>
        </p>
      </div>
    </section>
  );
}
