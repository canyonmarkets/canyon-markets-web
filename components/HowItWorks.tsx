const STEPS = [
  {
    step: '01',
    title: 'Free Site Assessment',
    body: 'We visit your facility at no cost, evaluate your break room space, and design a custom micro-market layout sized for your team. We handle all planning — you just show us the space.',
  },
  {
    step: '02',
    title: 'We Install Everything',
    body: 'Our team handles the complete installation — shelving, kiosk, coolers, signage, and initial stock. Zero equipment costs, zero installation fees, and zero disruption to your operations.',
  },
  {
    step: '03',
    title: 'We Stock & Maintain It',
    body: 'From day one, we own everything. We monitor inventory in real time, restock before shelves run low, handle all maintenance, and manage worker support. Your team never touches a thing.',
  },
] as const;

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-iron-800 px-6 py-24">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-brand-500 font-mono text-base tracking-[0.3em] uppercase mb-4">
            The Process
          </p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl uppercase tracking-wide text-white">
            How It Works
          </h2>
          <p className="mt-5 text-iron-300 text-base leading-relaxed max-w-lg mx-auto">
            From first conversation to fully operational market — typically completed within two weeks.
          </p>
          <div className="mt-8 h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent" />
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden">
          {STEPS.map(({ step, title, body }) => (
            <div key={step} className="bg-iron-800 p-10 flex flex-col gap-6 hover:bg-iron-700 transition-colors duration-300">
              <span className="font-mono text-7xl font-bold leading-none text-brand-500/20 select-none">
                {step}
              </span>
              <div>
                <h3 className="font-display font-bold text-2xl uppercase tracking-wide text-white mb-3">
                  {title}
                </h3>
                <p className="text-iron-300 text-sm leading-relaxed">
                  {body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div className="mt-12 text-center">
          <p className="text-iron-400 text-sm mb-4">
            The entire process is free. No contracts. No commitments until you see it and love it.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-lg bg-brand-500 px-8 py-3.5 text-sm font-semibold text-white uppercase tracking-wide hover:bg-brand-600 transition-colors duration-200"
          >
            Schedule Your Free Assessment
          </a>
        </div>

      </div>
    </section>
  );
}
