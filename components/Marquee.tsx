const ITEMS = ['Manufacturing', 'Distribution', 'Production', 'Warehousing', 'Call Centers'];

function Set({ hidden = false }: { hidden?: boolean }) {
  return (
    <div className="flex items-center gap-10" aria-hidden={hidden || undefined}>
      {ITEMS.map((t) => (
        <span key={t} className="font-display text-iron-300 text-sm tracking-wide uppercase">{t}<span className="dot ml-10 inline-block align-middle"></span></span>
      ))}
      <span className="font-display text-ember-400 text-sm tracking-wide uppercase">Zero Cost · 14-Day Install<span className="dot ml-10 inline-block align-middle"></span></span>
    </div>
  );
}

export default function Marquee() {
  return (
    <div className="relative border-y border-white/[0.06] bg-slate-900/40 py-5 overflow-hidden">
      <div className="marquee flex w-max items-center gap-10 whitespace-nowrap">
        <Set />
        <Set hidden />
      </div>
    </div>
  );
}
