import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Page Not Found',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden pt-28 pb-16">
      <div className="blob bg-ember-700 h-[420px] w-[420px] left-[-12rem] top-20 opacity-25"></div>
      <div className="absolute inset-0 gridlines opacity-30"></div>
      <div className="relative z-10 mx-auto max-w-7xl w-full px-6 lg:px-10 text-center">
        <div className="eyebrow text-ember-400 mb-5 flex items-center justify-center gap-3">
          <span className="h-px w-8 bg-ember-500/60"></span> 404 <span className="h-px w-8 bg-ember-500/60"></span>
        </div>
        <h1 className="font-display uppercase text-white leading-[0.95] tracking-tight text-5xl sm:text-7xl">
          This shelf is <span className="grad-ember">empty.</span>
        </h1>
        <p className="mt-6 text-iron-200 text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
          The page you&rsquo;re looking for doesn&rsquo;t exist or has moved. Everything we do is one click away below.
        </p>
        <div className="mt-9 flex flex-col sm:flex-row gap-3.5 justify-center">
          <Link href="/" className="btn-ember inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-[13px] font-semibold uppercase tracking-wider text-white">
            Back to Home
          </Link>
          <Link href="/industries" className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-7 py-4 text-[13px] font-semibold uppercase tracking-wider text-white hover:border-white/50 transition-all duration-200">
            Industries We Serve
          </Link>
          <Link href="/locations" className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-7 py-4 text-[13px] font-semibold uppercase tracking-wider text-white hover:border-white/50 transition-all duration-200">
            Service Area
          </Link>
        </div>
      </div>
    </section>
  );
}
