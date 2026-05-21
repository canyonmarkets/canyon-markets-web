import { DollarSign, MapPin, Apple, Wrench } from 'lucide-react';

const CARDS = [
  {
    icon: DollarSign,
    title: 'Zero Cost. Zero Contracts.',
    body: 'No equipment purchases, no installation fees, no service contracts, and no long-term commitments. We earn our keep through product sales — so our success depends entirely on keeping your team happy.',
  },
  {
    icon: MapPin,
    title: 'Local Phoenix Team',
    body: 'We are based right here in the Phoenix metro area. That means faster restocking, same-day response to issues, and a team that understands the local workforce — not a national operator running routes from across the country.',
  },
  {
    icon: Apple,
    title: 'Real Food. Real Choices.',
    body: 'We go beyond chips and candy bars. Every market is stocked with fresh deli meals, premium snacks, healthy options, and quality beverages — curated for the tastes and nutritional needs of a working adult team.',
  },
  {
    icon: Wrench,
    title: 'Fully Managed. Hands-Off.',
    body: 'Your facilities manager will never get a call about the vending machine. We handle restocking, maintenance, equipment issues, and worker support entirely through our own systems. You enjoy the benefit — we handle everything else.',
  },
] as const;

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-white px-6 py-24">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-brand-600 font-mono text-base tracking-[0.3em] uppercase mb-4">
            Why Canyon Markets
          </p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl uppercase tracking-wide text-stone-900">
            What Makes Us Different
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CARDS.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="group flex flex-col gap-5 rounded-2xl border border-stone-200 bg-stone-50 p-7 transition-all duration-300 hover:border-brand-300 hover:bg-white hover:shadow-lg hover:shadow-brand-500/5 hover:-translate-y-1"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 group-hover:bg-brand-100 transition-colors duration-300">
                <Icon size={24} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl uppercase tracking-wide text-stone-900 mb-2">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-stone-900">
                  {body}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
