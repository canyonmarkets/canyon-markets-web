import Image from 'next/image';
import { ShoppingBasket, Scan, Refrigerator } from 'lucide-react';

const PRODUCTS = [
  {
    icon: ShoppingBasket,
    eyebrow: 'Primary Setup',
    title: 'Open Micro-Market',
    body: 'The centerpiece of every installation. Open shelving stocked with hundreds of options — fresh meals, premium snacks, beverages, and healthy alternatives. No locked doors, no button codes. Employees browse and grab just like a convenience store, right in their break room.',
    highlight: true,
    tags: ['Full Open Shelving', 'Fresh Food Options', 'Hundreds of SKUs', 'Zero Barriers'],
  },
  {
    icon: Scan,
    eyebrow: 'Checkout Technology',
    title: 'Smart Self-Checkout Kiosk',
    body: 'Every market includes a modern self-checkout kiosk for fast, frictionless payment. Employees pay by tap, card, or mobile — no cash, no lines, no waiting on someone else. Enterprise-grade hardware designed for high-traffic break room environments.',
    highlight: false,
    tags: ['Tap / Card / Mobile Pay', 'Fast Checkout', 'No Cash Needed', 'Enterprise-Grade'],
  },
  {
    icon: Refrigerator,
    eyebrow: 'Cold Storage',
    title: 'Smart Coolers',
    body: 'Dedicated refrigeration units keep drinks, fresh meals, and perishables at perfect temperature alongside the open market. Always cold, always stocked. Our remote monitoring system tracks inventory in real time so coolers are replenished before they run low.',
    highlight: false,
    tags: ['Cold Drinks & Fresh Meals', 'Remote Monitoring', 'Always Stocked', 'Energy Efficient'],
  },
] as const;

export default function WhatWeInstall() {
  return (
    <section id="what-we-install" className="bg-white px-6 py-24">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-16">
          <p className="text-brand-600 font-mono text-base tracking-[0.3em] uppercase mb-4">
            The Setup
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="font-display font-bold text-4xl sm:text-5xl uppercase tracking-wide text-stone-900 max-w-xl leading-tight">
              What We Install in Your Break Room
            </h2>
            <p className="text-stone-700 text-sm leading-relaxed max-w-sm lg:text-right">
              Every installation is designed around your space, your workforce, and your break schedule.
            </p>
          </div>
          <div className="mt-8 h-px bg-gradient-to-r from-brand-500/60 via-brand-500/20 to-transparent" />
        </div>

        {/* Showcase photo */}
        <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden mb-12 border border-stone-100 shadow-sm">
          <Image
            src="/breakroom-office.png"
            alt="Complete Canyon Markets micro-market installation in a break room"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          <div className="absolute bottom-5 left-6">
            <p className="text-white text-xs font-mono tracking-[0.2em] uppercase opacity-80">
              Complete Installation — Phoenix Metro
            </p>
          </div>
        </div>

        {/* Product cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {PRODUCTS.map(({ icon: Icon, eyebrow, title, body, highlight, tags }) => (
            <div
              key={title}
              className={[
                'group flex flex-col gap-5 rounded-2xl p-8 border transition-all duration-300',
                highlight
                  ? 'bg-brand-800 border-brand-600 text-white'
                  : 'bg-white border-stone-200 hover:border-brand-300 hover:shadow-lg hover:shadow-brand-500/5',
              ].join(' ')}
            >
              <div>
                <p className={`font-mono text-xs tracking-[0.2em] uppercase mb-3 ${highlight ? 'text-accent-400' : 'text-brand-600'}`}>
                  {eyebrow}
                </p>
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl mb-4 ${highlight ? 'bg-white/10' : 'bg-brand-50 group-hover:bg-brand-100 transition-colors duration-300'}`}>
                  <Icon size={24} strokeWidth={1.5} className={highlight ? 'text-accent-400' : 'text-brand-600'} />
                </div>
                <h3 className={`font-display font-bold text-2xl uppercase tracking-wide mb-3 ${highlight ? 'text-white' : 'text-stone-900'}`}>
                  {title}
                </h3>
                <p className={`text-sm leading-relaxed ${highlight ? 'text-brand-100' : 'text-stone-900'}`}>
                  {body}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto pt-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className={`px-3 py-1 rounded-full font-mono text-xs tracking-wide border ${
                      highlight
                        ? 'border-white/20 bg-white/10 text-brand-100'
                        : 'border-brand-200 bg-brand-50 text-brand-700'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
