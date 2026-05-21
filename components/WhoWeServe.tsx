import Image from 'next/image';
import { Factory, GraduationCap } from 'lucide-react';

const SEGMENTS = [
  {
    photo: '/breakroom-industrial.png',
    icon: Factory,
    label: 'Manufacturing & Distribution',
    headline: 'Keep Your Production Floor Running',
    body: 'Your workforce runs on tight shift schedules with limited break time. A fully stocked micro-market means your team gets real food fast — no driving off-site, no vending machine disappointment. We serve manufacturing facilities, distribution centers, and warehouse operations across the Phoenix metro area.',
    tags: ['Production Facilities', 'Distribution Centers', 'Warehouses', 'Shift-Based Workforces'],
  },
  {
    photo: null as string | null,
    icon: GraduationCap,
    label: 'Schools & Campus Staff',
    headline: 'A Better Break Room for Your Team',
    body: 'Teachers, administrators, and support staff work hard and deserve a quality break room. We partner with schools to bring a curated micro-market to faculty and staff areas — stocked with real meals, quality snacks, and premium beverages. Staff-focused, fully managed, completely free to the district.',
    tags: ['K-12 Schools', 'Faculty & Staff', 'Administrative Offices', 'Campus Break Rooms'],
  },
] as const;

export default function WhoWeServe() {
  return (
    <section id="who-we-serve" className="bg-iron-300 px-6 py-24">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-brand-600 font-mono text-base tracking-[0.3em] uppercase mb-4">
            Our Partners
          </p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl uppercase tracking-wide text-stone-900">
            Who We Serve
          </h2>
          <p className="mt-5 text-stone-500 text-base leading-relaxed max-w-xl mx-auto">
            We work exclusively with established Phoenix-area employers whose facilities
            and workforce size qualify for a full micro-market installation.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {SEGMENTS.map(({ photo, icon: Icon, label, headline, body, tags }) => (
            <div
              key={label}
              className="group flex flex-col rounded-2xl border border-iron-200 bg-white hover:border-brand-400 hover:shadow-lg hover:shadow-brand-500/5 transition-all duration-300 overflow-hidden"
            >
              {/* Optional cover photo */}
              {photo && (
                <div className="relative h-52 w-full flex-shrink-0">
                  <Image
                    src={photo}
                    alt={headline}
                    fill
                    className="object-cover object-center"
                  />
                </div>
              )}

              <div className="flex flex-col gap-6 p-8 flex-1">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-600 text-white group-hover:bg-brand-700 transition-colors duration-300">
                    <Icon size={28} strokeWidth={1.5} />
                  </div>
                  <p className="font-mono text-xs tracking-[0.2em] uppercase text-brand-600 font-semibold">
                    {label}
                  </p>
                </div>

                <div>
                  <h3 className="font-display font-bold text-2xl uppercase tracking-wide text-stone-900 mb-3">
                    {headline}
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    {body}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto pt-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 font-mono text-xs tracking-wide"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
