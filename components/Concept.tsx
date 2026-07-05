const HOTSPOTS = [
  { left: '20%', top: '46%', label: 'Coolers & Freezers', body: 'Glass-door units for cold drinks, fresh meals, and frozen options — always stocked.' },
  { left: '49%', top: '58%', label: 'Self-Checkout Kiosk', body: 'Tap, card, or mobile. Your team checks out in about three seconds — no attendant needed.' },
  { left: '76%', top: '48%', label: 'Snack & Chip Racks', body: 'Open shelving stocked with 225+ curated products — from comfort snacks to healthier picks.' },
];

const GALLERY = [
  { src: '/mm-industrial.png', alt: 'Micro-market in an industrial break room', caption: 'Industrial Floor' },
  { src: '/mm-office.png', alt: 'Micro-market in an office break room', caption: 'Office Break Room' },
  { src: '/mm-cafeteria.png', alt: 'Employees using a micro-market during their break', caption: 'In Use, On Shift' },
];

export default function Concept() {
  return (
    <section id="concept" className="relative py-28 lg:py-36 overflow-hidden">
      <div className="blob bg-ember-700 h-[420px] w-[420px] left-[-12rem] top-20 opacity-25"></div>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-center">
          <div data-reveal>
            <div className="eyebrow text-ember-400 mb-5 flex items-center gap-3"><span className="h-px w-8 bg-ember-500/60"></span> The Concept</div>
            <h2 className="font-display uppercase text-iron-100 leading-[1.0] tracking-tight text-4xl sm:text-6xl">
              So&hellip; what&rsquo;s a <span className="grad-ember">micro-market?</span>
            </h2>
            <p className="mt-6 text-iron-200 text-base sm:text-lg leading-relaxed">
              Picture a miniature, unattended convenience store built right into your break room. Open shelves, glass-door coolers and freezers, and a self-serve checkout — no cash, no lines, no leaving the building.
            </p>
            <p className="mt-4 text-iron-200 text-[15px] leading-relaxed">
              Your team grabs a real meal, a cold drink, or a snack and checks themselves out in seconds. We design it, install it, stock it, and maintain it — entirely on us.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[['225+', 'Products'], ['$0', 'To You'], ['24/7', 'Open']].map(([v, l]) => (
                <div key={l} className="rounded-2xl glass p-4 text-center">
                  <div className="font-display text-3xl uppercase text-iron-100">{v}</div>
                  <div className="font-mono text-[9px] tracking-widest uppercase text-iron-300 mt-1">{l}</div>
                </div>
              ))}
            </div>
          </div>

          <div data-reveal className="relative">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/mm-office.png" width={1536} height={1024} alt="Micro-market layout: coolers, self-checkout kiosk, and snack racks" className="w-full h-auto block" />
              <div className="absolute inset-0 bg-gradient-to-t from-base/50 via-transparent to-transparent pointer-events-none"></div>
              {HOTSPOTS.map((h) => (
                <button key={h.label} type="button" className="hotspot" style={{ left: h.left, top: h.top }} data-hot aria-label={`${h.label}: ${h.body}`}>
                  <div className="pin"></div>
                  <div className="tip glass-strong rounded-xl p-3 text-left">
                    <div className="font-mono text-[9px] tracking-widest text-ember-300 mb-1">{h.label.toUpperCase()}</div>
                    <div className="text-iron-200 text-xs leading-snug">{h.body}</div>
                  </div>
                </button>
              ))}
            </div>
            <p className="mt-3 text-center font-mono text-[10px] tracking-[0.25em] uppercase text-iron-300">Tap the markers to explore the setup</p>
          </div>
        </div>

        <div className="mt-16 grid sm:grid-cols-3 gap-4">
          {GALLERY.map((g, i) => (
            <figure key={g.caption} data-reveal tabIndex={0} className="group relative rounded-2xl overflow-hidden border border-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-ember-500/60">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={g.src} width={1536} height={1024} alt={g.alt} className={`kb-img duotone w-full h-56 object-cover ${i % 2 ? 'kb-b' : 'kb-a'}`} />
              <figcaption className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-base to-transparent font-mono text-[10px] tracking-widest uppercase text-iron-200">{g.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
