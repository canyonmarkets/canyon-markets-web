const BARS = ['62%', '88%', '45%', '74%', '96%', '58%', '80%'];
const ROUTE = 'M6 46 C60 10 110 54 160 30 S270 6 314 36';

export default function System() {
  return (
    <section id="system" className="relative py-28 lg:py-36 bg-slate-900/40 border-y border-white/[0.06] overflow-hidden">
      <div className="blob bg-ember-700 h-[400px] w-[400px] right-[-10rem] top-20 opacity-25"></div>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl mb-14" data-reveal>
          <div className="eyebrow text-ember-400 mb-5 flex items-center gap-3"><span className="h-px w-8 bg-ember-500/60"></span> The Operational System</div>
          <h2 className="font-display uppercase text-iron-100 leading-[1.0] tracking-tight text-4xl sm:text-6xl">
            A living market that <span className="grad-ember">restocks itself.</span>
          </h2>
          <p className="mt-5 text-iron-200 text-base leading-relaxed max-w-lg">
            Remote inventory monitoring and a smart restock cadence keep every shelf full — so your team never meets an empty machine.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[150px] sm:auto-rows-[170px] gap-4">
          {/* Real-time inventory */}
          <div data-bento className="group col-span-2 row-span-2 rounded-3xl glass p-7 flex flex-col justify-between hover:border-ember-500/30 transition-colors duration-300 overflow-hidden relative">
            <div className="absolute inset-0 gridlines opacity-40"></div>
            <div className="relative flex items-start justify-between">
              <div><div className="eyebrow text-iron-300 mb-2">Live Telemetry</div><h3 className="font-display text-2xl uppercase text-iron-100">Real-Time Inventory</h3></div>
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-ember-500/12 border border-ember-500/30">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M3 12h4l2 6 4-14 2 8h6" stroke="#F4A06A" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" /></svg>
              </span>
            </div>
            <div className="relative">
              <div className="flex items-end gap-2 h-24">
                {BARS.map((h, i) => (
                  <span key={i} className="bar w-full rounded-t-md bg-gradient-to-t from-ember-700 to-ember-400" style={{ ['--h' as string]: h } as React.CSSProperties}></span>
                ))}
              </div>
              <div className="mt-3 flex items-center justify-between font-mono text-[10px] tracking-wider text-iron-300">
                <span>STOCK HEALTH</span><span className="text-emerald-400" data-count="92" data-suffix="%">0%</span>
              </div>
            </div>
          </div>

          {/* Smart restock */}
          <div data-bento className="group col-span-2 rounded-3xl glass p-6 flex flex-col justify-between hover:border-ember-500/30 transition-colors duration-300 relative overflow-hidden">
            <div className="flex items-center justify-between">
              <h3 className="font-display text-lg uppercase text-iron-100">Smart Restock Cadence</h3>
              <span className="font-mono text-[9px] tracking-wider text-emerald-400 flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400 blink"></span>ON ROUTE</span>
            </div>
            <svg viewBox="0 0 320 60" className="w-full h-14 mt-2" fill="none">
              <path d={ROUTE} stroke="rgba(255,255,255,0.12)" strokeWidth={2} strokeDasharray="3 5" strokeLinecap="round" />
              <path d={ROUTE} stroke="#C94B0C" strokeWidth={2.2} strokeLinecap="round" />
              <circle r="4" fill="#F4A06A"><animateMotion dur="4s" repeatCount="indefinite" path={ROUTE} /></circle>
              <circle cx="6" cy="46" r="3" fill="#fff" /><circle cx="314" cy="36" r="3" fill="#fff" />
            </svg>
            <div className="font-mono text-[10px] tracking-wider text-iron-300">RESTOCKED BEFORE IT RUNS LOW</div>
          </div>

          {/* Cashless */}
          <div data-bento className="group rounded-3xl glass p-6 flex flex-col justify-between hover:border-ember-500/30 transition-colors duration-300">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="3" y="6" width="18" height="12" rx="2" stroke="#F4A06A" strokeWidth={1.6} /><path d="M3 10h18" stroke="#F4A06A" strokeWidth={1.6} /></svg>
            </span>
            <div><h3 className="font-display text-lg uppercase text-iron-100 leading-tight">Cashless<br />Checkout</h3><div className="mt-1.5 font-mono text-[9px] tracking-wider text-iron-300">TAP · CARD · MOBILE</div></div>
          </div>

          {/* $0 */}
          <div data-bento className="group rounded-3xl bg-gradient-to-br from-ember-600 to-ember-700 p-6 flex flex-col justify-between hover:shadow-xl hover:shadow-ember-700/40 transition-all duration-300 relative overflow-hidden">
            <div className="absolute -right-6 -bottom-6 h-28 w-28 rounded-full bg-white/10"></div>
            <div className="relative font-display text-5xl uppercase text-white leading-none">$0</div>
            <div className="relative font-mono text-[9px] tracking-wider text-ember-200 uppercase leading-relaxed">Equipment ·<br />Install · Service</div>
          </div>

          {/* Fresh selection */}
          <div data-bento className="group col-span-2 rounded-3xl glass p-6 flex items-center justify-between gap-5 hover:border-ember-500/30 transition-colors duration-300 relative overflow-hidden">
            <div>
              <div className="eyebrow text-iron-300 mb-2">Real Food</div>
              <h3 className="font-display text-xl uppercase text-iron-100">Fresh, Curated Selection</h3>
              <p className="mt-1.5 text-iron-200 text-[13px] leading-snug max-w-[15rem]">Fresh meals, premium snacks &amp; healthy options — chosen for working adults, not just chips and candy.</p>
            </div>
            <div className="flex flex-col gap-2 flex-none">
              <span className="h-6 w-20 rounded-md bg-gradient-to-r from-emerald-400/80 to-emerald-600/80"></span>
              <span className="h-6 w-20 rounded-md bg-gradient-to-r from-rose-400/80 to-red-600/80"></span>
              <span className="h-6 w-20 rounded-md bg-gradient-to-r from-amber-300/80 to-amber-500/80"></span>
            </div>
          </div>

          {/* Local team */}
          <div data-bento className="group rounded-3xl glass p-6 flex flex-col justify-between hover:border-ember-500/30 transition-colors duration-300 relative overflow-hidden">
            <div className="absolute inset-0 gridlines opacity-40"></div>
            <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 21s7-6.2 7-11a7 7 0 10-14 0c0 4.8 7 11 7 11z" stroke="#F4A06A" strokeWidth={1.5} /><circle cx="12" cy="10" r="2.4" stroke="#F4A06A" strokeWidth={1.5} /></svg>
            </span>
            <div className="relative"><h3 className="font-display text-lg uppercase text-iron-100 leading-tight">Local Team</h3><div className="mt-1.5 font-mono text-[9px] tracking-wider text-emerald-400">SAME-DAY RESPONSE</div></div>
          </div>

          {/* Loss prevention */}
          <div data-bento className="group rounded-3xl glass p-6 flex flex-col justify-between hover:border-ember-500/30 transition-colors duration-300">
            <div className="eyebrow text-iron-300">Loss Prevention</div>
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z" stroke="#F4A06A" strokeWidth={1.5} strokeLinejoin="round" /></svg>
            </span>
            <div className="font-mono text-[9px] tracking-wider text-iron-300">SECURITY CAMERAS</div>
          </div>
        </div>
      </div>
    </section>
  );
}
