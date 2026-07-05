'use client';

import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';
import { SITE } from '@/lib/site';

const LINKS = [
  { label: 'The Concept', href: '/#concept' },
  { label: 'The System', href: '/#system' },
  { label: 'The Process', href: '/#process' },
  { label: 'Who We Serve', href: '/#serve' },
  { label: 'Contact', href: '/#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const burgerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => setOpen(false), []);

  // Body scroll lock + focus management + ESC + focus trap while the drawer is open
  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { setOpen(false); return; }
      if (e.key !== 'Tab' || !overlayRef.current) return;
      const focusables = Array.from(overlayRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled])'));
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement as HTMLElement | null;
      if (e.shiftKey && (active === first || !overlayRef.current.contains(active))) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && active === last) { e.preventDefault(); first.focus(); }
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener('keydown', onKey);
      burgerRef.current?.focus();
    };
  }, [open]);

  return (
    <header id="nav" className="fixed top-0 inset-x-0 z-50 transition-all duration-300">
      <nav className="mx-auto max-w-7xl px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/canyon-logo.png" alt="Canyon Markets" className="h-10 w-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]" />
          <span className="font-display text-[19px] sm:text-[21px] tracking-wide text-iron-100 leading-none">CANYON MARKETS</span>
        </Link>

        <div className="hidden md:flex items-center gap-9 text-[13px] font-medium text-iron-300">
          <Link href="/#concept" className="ulink hover:text-white transition-colors">The Concept</Link>
          <Link href="/#system" className="ulink hover:text-white transition-colors">The System</Link>
          <Link href="/#process" className="ulink hover:text-white transition-colors">Process</Link>
          <Link href="/#serve" className="ulink hover:text-white transition-colors">Who We Serve</Link>
        </div>

        <div className="flex items-center gap-3">
          <a href={`tel:${SITE.phoneHref}`} className="hidden lg:inline-flex items-center gap-2 text-[13px] font-mono text-iron-300 hover:text-iron-100 transition-colors">
            <span className="h-1.5 w-1.5 rounded-full bg-ember-500"></span>{SITE.phone}
          </a>
          <Link href="/#contact" className="hidden md:inline-flex items-center rounded-full border border-ember-500/40 bg-ember-500/10 px-5 py-2.5 text-[12px] font-semibold uppercase tracking-wider text-ember-300 hover:bg-ember-500 hover:text-white hover:border-ember-500 transition-all duration-200">
            Free Assessment
          </Link>
          <button
            ref={burgerRef}
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-iron-100"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h10" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" /></svg>
          </button>
        </div>
      </nav>

      {/* Mobile drawer — full-screen glass overlay */}
      <div
        ref={overlayRef}
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        aria-hidden={!open}
        className={`menu-overlay md:hidden ${open ? 'open' : ''}`}
      >
        <div className="flex items-center justify-between h-20 px-6">
          <span className="font-display text-[19px] tracking-wide text-iron-100 leading-none">CANYON MARKETS</span>
          <button
            ref={closeRef}
            type="button"
            onClick={close}
            aria-label="Close menu"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-iron-100"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" /></svg>
          </button>
        </div>

        <nav className="flex-1 flex flex-col justify-center gap-1 px-8">
          {LINKS.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={close}
              className="m-item font-display uppercase text-3xl text-iron-100 py-3.5 border-b border-white/[0.07] flex items-center justify-between hover:text-ember-300 transition-colors"
              style={{ transitionDelay: open ? `${120 + i * 60}ms` : '0ms' }}
            >
              {l.label}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" stroke="#C94B0C" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" /></svg>
            </Link>
          ))}
        </nav>

        <div className="px-8 pb-10 flex flex-col gap-5">
          <Link
            href="/#contact"
            onClick={close}
            className="m-item btn-ember inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-[13px] font-semibold uppercase tracking-wider text-white"
            style={{ transitionDelay: open ? `${120 + LINKS.length * 60}ms` : '0ms' }}
          >
            Request a Free Assessment
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" /></svg>
          </Link>
          <a
            href={`tel:${SITE.phoneHref}`}
            className="m-item inline-flex items-center justify-center gap-2 text-[13px] font-mono text-iron-300"
            style={{ transitionDelay: open ? `${180 + LINKS.length * 60}ms` : '0ms' }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-ember-500"></span>{SITE.phone}
          </a>
        </div>
      </div>
    </header>
  );
}
