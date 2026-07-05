const ICONS = [
  (<><circle cx="12" cy="8" r="3.4" stroke="#F4A06A" strokeWidth={1.6} /><path d="M5 20c1.5-3.5 4-5 7-5s5.5 1.5 7 5" stroke="#F4A06A" strokeWidth={1.6} strokeLinecap="round" /></>),
  (<><path d="M12 21s7-6.2 7-11a7 7 0 10-14 0c0 4.8 7 11 7 11z" stroke="#F4A06A" strokeWidth={1.6} strokeLinejoin="round" /><circle cx="12" cy="10" r="2.4" stroke="#F4A06A" strokeWidth={1.6} /></>),
  (<><path d="M4 12a8 8 0 0114-5l2 2M20 12a8 8 0 01-14 5l-2-2" stroke="#F4A06A" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" /><path d="M20 4v3h-3M4 20v-3h3" stroke="#F4A06A" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" /></>),
  (<path d="M12 3v18M8 7h6a2.5 2.5 0 010 5H9a2.5 2.5 0 000 5h7" stroke="#F4A06A" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" />),
];

const CARDS = [
  { title: 'Personally Managed', body: 'You get real people who know your account — not a call center or a ticket number.' },
  { title: 'Local & Responsive', body: 'Based right here in the Valley. Same-day response — not a route truck from out of state.' },
  { title: 'We Actually Show Up', body: 'Stocked, clean, and maintained — hands-off for you. Your facilities team never gets a call.' },
  { title: 'Zero Cost, Zero Risk', body: 'No equipment, install, or service fees. We earn it by keeping your team happy — period.' },
];

export default function Difference() {
  return (
    <section id="difference" className="relative py-28 lg:py-36 overflow-hidden">
      <div className="blob bg-ember-700 h-[440px] w-[440px] left-[-14rem] bottom-0 opacity-25"></div>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-[1fr_0.85fr] gap-12 lg:gap-16 items-center">
          <div data-reveal>
            <div className="eyebrow text-ember-400 mb-5 flex items-center gap-3"><span className="h-px w-8 bg-ember-500/60"></span> The Canyon Difference</div>
            <h2 className="font-display uppercase text-iron-100 leading-[1.0] tracking-tight text-4xl sm:text-6xl">
              Anyone can sell a Coke.<br /><span className="grad-ember">We build relationships.</span>
            </h2>
            <p className="mt-6 text-iron-200 text-base sm:text-lg leading-relaxed max-w-xl">
              We&rsquo;re a family-run Phoenix operator — not a national route truck that forgets you exist. We personally manage every account, answer when you call, and show up when you need us.
            </p>
            <p className="mt-4 text-iron-200 text-[15px] leading-relaxed max-w-xl">
              It&rsquo;s exactly why companies leave the big national vendors for us and never look back. Equipment and snacks are easy. <span className="text-white">Service is the whole game</span> — and it&rsquo;s the one we play to win.
            </p>
          </div>

          <div data-reveal className="grid sm:grid-cols-2 gap-4">
            {CARDS.map((c, i) => (
              <div key={c.title} className="card-spot rounded-2xl glass p-6 hover:border-ember-500/30 transition-colors duration-300">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-ember-500/12 border border-ember-500/30 mb-4">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">{ICONS[i]}</svg>
                </span>
                <h3 className="font-display text-base uppercase text-iron-100 mb-1.5 leading-tight break-words">{c.title}</h3>
                <p className="text-iron-200 text-[13px] leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
