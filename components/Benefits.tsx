const CARDS = [
  {
    title: 'Recruiting & Retention',
    body: 'A standout perk on every facility tour — it helps you win talent and keep the crew you already have.',
    icon: (<path d="M12 3l2.2 4.6 5 .7-3.6 3.5.9 5L12 14.9 7.5 16.8l.9-5L4.8 8.3l5-.7L12 3z" stroke="#F4A06A" strokeWidth={1.5} strokeLinejoin="round" />),
  },
  {
    title: 'Higher Morale',
    body: 'A better break makes a better shift. Showing the team you invested in them goes a long way.',
    icon: (<><circle cx="12" cy="12" r="9" stroke="#F4A06A" strokeWidth={1.5} /><path d="M8.5 14c.9 1.2 2.1 1.8 3.5 1.8s2.6-.6 3.5-1.8M9 9.5h.01M15 9.5h.01" stroke="#F4A06A" strokeWidth={1.6} strokeLinecap="round" /></>),
  },
  {
    title: 'Time Back on the Floor',
    body: 'No off-site food runs. Breaks stay short and on time — and people come back fed and focused.',
    icon: (<><circle cx="12" cy="12" r="9" stroke="#F4A06A" strokeWidth={1.5} /><path d="M12 7v5l3.5 2" stroke="#F4A06A" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" /></>),
  },
  {
    title: 'Zero Burden',
    body: 'No cost, no labor, no management for you. We stock it, clean it, and run it — you just enjoy it.',
    icon: (<><path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z" stroke="#F4A06A" strokeWidth={1.5} strokeLinejoin="round" /><path d="M9 12l2 2 4-4" stroke="#F4A06A" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" /></>),
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="relative py-28 lg:py-36 bg-slate-900/40 border-y border-white/[0.06] overflow-hidden">
      <div className="blob bg-ember-700 h-[420px] w-[420px] right-[-12rem] top-24 opacity-25"></div>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl mb-12" data-reveal>
          <div className="eyebrow text-ember-400 mb-5 flex items-center gap-3"><span className="h-px w-8 bg-ember-500/60"></span> The Employer Upside</div>
          <h2 className="font-display uppercase text-iron-100 leading-[1.0] tracking-tight text-4xl sm:text-6xl">
            More than a break room.<br />A <span className="grad-ember">recruiting edge.</span>
          </h2>
          <p className="mt-6 text-iron-200 text-base sm:text-lg leading-relaxed">
            A great on-site market does more than feed your team. It tells everyone who walks through your doors that this is a company that takes care of its people.
          </p>
        </div>

        <div data-reveal className="rounded-3xl glass-strong p-8 sm:p-10 mb-4 grid lg:grid-cols-[1fr_auto] gap-8 items-center">
          <div>
            <div className="eyebrow text-ember-300 mb-4">On The Tour</div>
            <p className="font-display uppercase text-2xl sm:text-3xl text-white leading-[1.15]">
              &ldquo;Our partners walk recruits right past a fully-stocked market — it&rsquo;s proof, not a promise, that they invest in their crew.&rdquo;
            </p>
            <p className="mt-5 text-iron-200 text-sm leading-relaxed max-w-2xl">
              In a tight labor market, a visible, premium perk helps close candidates and keep the team you already have. We&rsquo;ve watched it become part of the pitch on facility tours — and it works.
            </p>
          </div>
          <div id="perkBadge" className="hidden lg:flex flex-col items-center justify-center rounded-2xl bg-ember-500/10 border border-ember-500/30 px-10 py-8">
            <span className="font-display text-6xl text-ember-400 leading-none">24/7</span>
            <span className="font-mono text-[10px] tracking-widest uppercase text-iron-200 mt-2">On-Site Perk</span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CARDS.map((c) => (
            <div key={c.title} data-benefit className="card-spot rounded-3xl glass p-7 hover:border-ember-500/40 transition-all duration-300">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-ember-500/12 border border-ember-500/30 mb-5">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">{c.icon}</svg>
              </span>
              <h3 className="font-display text-base uppercase text-iron-100 mb-1.5 leading-tight break-words">{c.title}</h3>
              <p className="text-iron-200 text-[13px] leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
