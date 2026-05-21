import { X, Check } from 'lucide-react';

const OLD_WAY = [
  'Limited selection — same 12 items, always',
  'Cash-only or outdated card readers',
  'Frequently empty, nobody restocks on time',
  'No fresh food options',
  'Outdated machines that break down',
  'Zero insight into what your team actually wants',
];

const NEW_WAY = [
  'Hundreds of SKUs — snacks, meals, drinks, healthy options',
  'Fully cashless — tap, swipe, or scan to pay',
  'Real-time inventory monitoring, restocked before it runs out',
  'Fresh food, deli meals, and premium options',
  'Modern, maintained equipment at zero cost to you',
  'Data-driven stocking based on your team\'s actual preferences',
];

export default function ProblemSolution() {
  return (
    <section id="problem-solution" className="bg-stone-50 px-6 py-24">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-brand-600 font-mono text-base tracking-[0.3em] uppercase mb-4">
            It&#39;s Time to Upgrade
          </p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl uppercase tracking-wide text-stone-900">
            The Old Way vs. The Canyon Markets Way
          </h2>
        </div>

        {/* Comparison grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Old way */}
          <div className="rounded-2xl border-2 border-stone-200 bg-white p-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100">
                <X size={20} className="text-red-500" strokeWidth={2.5} />
              </div>
              <h3 className="font-display font-bold text-2xl uppercase tracking-wide text-stone-400">
                Traditional Vending
              </h3>
            </div>
            <ul className="flex flex-col gap-4">
              {OLD_WAY.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <X size={16} className="flex-shrink-0 mt-0.5 text-red-400" strokeWidth={2} />
                  <span className="text-stone-500 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* New way */}
          <div className="rounded-2xl border-2 border-brand-500 bg-brand-800 p-8 relative overflow-hidden">
            <div
              aria-hidden="true"
              className="absolute top-0 right-0 w-48 h-48 bg-brand-700 rounded-bl-full opacity-50"
            />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-500/20">
                  <Check size={20} className="text-accent-400" strokeWidth={2.5} />
                </div>
                <h3 className="font-display font-bold text-2xl uppercase tracking-wide text-white">
                  Canyon Markets
                </h3>
              </div>
              <ul className="flex flex-col gap-4">
                {NEW_WAY.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check size={16} className="flex-shrink-0 mt-0.5 text-accent-400" strokeWidth={2} />
                    <span className="text-brand-100 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
