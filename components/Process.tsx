const STEPS = [
  { n: '01', title: 'Free Site Assessment', tag: 'Days 1–3', body: 'We visit your facility, measure the space, and design a custom market layout sized for your shifts and headcount. No cost, no pressure — just show us the room.' },
  { n: '02', title: 'We Install Everything', tag: 'Days 4–10', body: 'Coolers, freezers, the self-checkout kiosk, snack racks, signage, and the full opening stock — installed and ready. Zero equipment cost, zero install fees, zero disruption to your floor.' },
  { n: '03', title: 'We Stock & Maintain', tag: 'Day 11+', body: 'From day one we own it all — remote monitoring, restocking before shelves run low, maintenance, and worker support. Your team touches nothing but the snacks.' },
];

const STATS = [
  { v: '$0', label: 'Cost To You' },
  { count: 14, label: 'Days To Launch' },
  { count: 225, suffix: '+', label: 'Products Stocked' },
  { count: 6, label: 'Phoenix Cities' },
];

export default function Process() {
  return (
    <section id="process" className="relative py-28 lg:py-36 bg-slate-900/40 border-y border-white/[0.06]">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <div className="text-center mb-16" data-reveal>
          <div className="eyebrow text-ember-400 mb-5 flex items-center justify-center gap-3"><span className="h-px w-8 bg-ember-500/60"></span> The Process <span className="h-px w-8 bg-ember-500/60"></span></div>
          <h2 className="font-display uppercase text-iron-100 leading-[1.0] tracking-tight text-4xl sm:text-6xl">
            Handshake to stocked in <span className="grad-ember">14 days.</span>
          </h2>
          <p className="mt-5 text-iron-200 text-base leading-relaxed max-w-md mx-auto">Three steps. We own all three. You just show us the space.</p>
        </div>

        <div className="relative max-w-3xl mx-auto pl-[4.5rem] sm:pl-24">
          {STEPS.map((s) => (
            <div key={s.n} data-step className="relative pb-12 last:pb-0">
              <div className="absolute left-0 -translate-x-full pr-5 sm:pr-7 top-0 flex flex-col items-center">
                <div className="node relative inline-flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl glass-strong border-ember-500/40">
                  <span className="font-display text-2xl sm:text-3xl text-ember-400">{s.n}</span>
                </div>
                <div className="connector w-0.5 flex-1 mt-2 bg-gradient-to-b from-ember-500/70 to-ember-500/20 grow" style={{ minHeight: '3rem' }}></div>
              </div>
              <div className="glass rounded-2xl p-6 sm:p-7 hover:border-ember-500/30 transition-colors duration-300">
                <div className="flex items-center justify-between gap-3 mb-2">
                  <h3 className="font-display text-xl sm:text-2xl uppercase text-iron-100">{s.title}</h3>
                  <span className="font-mono text-[9px] tracking-widest uppercase text-ember-300 flex-none rounded-full border border-ember-500/30 bg-ember-500/10 px-2.5 py-1">{s.tag}</span>
                </div>
                <p className="text-iron-200 text-[14px] leading-relaxed">{s.body}</p>
              </div>
            </div>
          ))}

          {/* finish (centered finale) */}
          <div data-step className="relative -ml-[4.5rem] sm:-ml-24 pt-6 flex flex-col items-center text-center gap-5">
            <div id="goLive" className="node inline-flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-ember-500 to-ember-700 shadow-lg shadow-ember-700/40">
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#fff" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" /></svg>
            </div>
            <span id="goLiveText" className="font-display text-5xl sm:text-7xl uppercase text-iron-100 leading-none">Go Live</span>
            <span className="font-mono text-[11px] tracking-widest uppercase text-ember-300 rounded-full border border-ember-500/30 bg-ember-500/10 px-4 py-1.5">Day 14</span>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-px rounded-3xl overflow-hidden border border-white/[0.06] bg-white/[0.04]" data-reveal>
          {STATS.map((s) => (
            <div key={s.label} className="bg-base/40 p-7 text-center">
              <div className="font-display text-4xl uppercase text-iron-100">
                {s.v ? s.v : <span data-count={s.count} data-suffix={s.suffix || ''}>0</span>}
              </div>
              <div className="mt-1.5 font-mono text-[10px] tracking-widest uppercase text-iron-300">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
