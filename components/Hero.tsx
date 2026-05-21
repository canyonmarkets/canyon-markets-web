import Image from 'next/image';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative bg-iron-900 min-h-screen flex items-center pt-16 overflow-hidden"
    >
      {/* Background photo */}
      <Image
        src="/breakroom-workers.png"
        alt=""
        fill
        className="object-cover object-center"
        priority
        aria-hidden="true"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-iron-900/75" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-24">
        <div className="max-w-3xl">
          <p className="text-brand-500 font-mono text-xs sm:text-base tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-6">
            Phoenix Metro Area
          </p>
          <h1 className="font-display font-bold text-3xl sm:text-5xl lg:text-7xl uppercase tracking-wide text-white leading-tight sm:leading-none mb-8">
            Your Break Room<br />
            <span className="text-brand-500">Deserves Better</span><br />
            Than a Vending Machine
          </h1>
          <p className="text-white text-base sm:text-xl leading-relaxed max-w-2xl mb-10">
            Canyon Markets installs fully stocked, zero-cost micro-markets in qualifying
            Phoenix-area workplaces. No equipment costs. No contracts. No hassle.
            Just a better break room — starting day one.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="btn-pulse inline-flex items-center justify-center rounded-lg bg-brand-500 px-8 py-4 text-base font-semibold text-white uppercase tracking-wide hover:bg-brand-600 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-500/40 active:scale-[0.97] active:translate-y-0 transition-all duration-200"
            >
              Request a Free Assessment
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center rounded-lg border-2 border-white/30 px-8 py-4 text-base font-semibold text-white uppercase tracking-wide hover:border-brand-500/60 hover:bg-white/5 hover:-translate-y-1 hover:shadow-lg active:scale-[0.97] active:translate-y-0 transition-all duration-200"
            >
              See How It Works
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
