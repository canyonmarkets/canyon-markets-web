import Link from 'next/link';

export type Crumb = { name: string; path: string };

export default function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="font-mono text-[10px] tracking-[0.2em] uppercase text-iron-300 flex flex-wrap items-center gap-2">
      {crumbs.map((c, i) => (
        <span key={c.path} className="flex items-center gap-2">
          {i > 0 && <span className="text-iron-500">/</span>}
          {i < crumbs.length - 1 ? (
            <Link href={c.path} className="hover:text-ember-300 transition-colors">{c.name}</Link>
          ) : (
            <span className="text-ember-300">{c.name}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
