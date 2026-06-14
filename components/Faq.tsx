import type { Faq as FaqItem } from '@/lib/industries';

export default function Faq({ faqs, heading = 'Common Questions' }: { faqs: FaqItem[]; heading?: string }) {
  if (!faqs?.length) return null;
  return (
    <section className="relative py-24 lg:py-28">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <div className="mb-12 text-center" data-reveal>
          <div className="eyebrow text-ember-400 mb-5 flex items-center justify-center gap-3"><span className="h-px w-8 bg-ember-500/60"></span> FAQ <span className="h-px w-8 bg-ember-500/60"></span></div>
          <h2 className="font-display uppercase text-iron-100 leading-[1.0] tracking-tight text-3xl sm:text-5xl">{heading}</h2>
        </div>
        <div className="flex flex-col gap-3">
          {faqs.map((f) => (
            <details key={f.q} data-reveal className="group rounded-2xl glass p-6 open:border-ember-500/30">
              <summary className="flex cursor-pointer items-center justify-between gap-4 list-none">
                <span className="font-display text-lg uppercase text-iron-100 leading-tight">{f.q}</span>
                <span className="flex-none text-ember-400 transition-transform duration-300 group-open:rotate-45">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" /></svg>
                </span>
              </summary>
              <p className="mt-3 text-iron-200 text-sm leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
