'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * Drives every animation in the design. Lives in the root layout, so it re-runs
 * on each route change (App Router keeps the layout mounted). All selectors are
 * optional — a page without a given section simply skips that animation.
 * Reveals are FAIL-OPEN: content is only hidden once we've confirmed JS can reveal it.
 */
export default function SiteAnimations() {
  const pathname = usePathname();

  useEffect(() => {
    const REDUCE = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    gsap.registerPlugin(ScrollTrigger);

    const cleanups: Array<() => void> = [];
    const tweens: gsap.core.Tween[] = [];
    const track = (t: gsap.core.Tween) => { tweens.push(t); return t; };

    // ── Nav scroll state ──
    const nav = document.getElementById('nav');
    const onScroll = () => {
      if (!nav) return;
      const on = window.scrollY > 24;
      nav.classList.toggle('bg-base/80', on);
      nav.classList.toggle('backdrop-blur-xl', on);
      nav.classList.toggle('border-b', on);
      nav.classList.toggle('border-white/[0.06]', on);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    cleanups.push(() => window.removeEventListener('scroll', onScroll));

    // ── Hotspot toggle (mobile tap; hover handles desktop) ──
    const hotspots = Array.from(document.querySelectorAll<HTMLElement>('[data-hot]'));
    const hotHandlers: Array<[HTMLElement, (e: Event) => void]> = [];
    hotspots.forEach((h) => {
      const fn = (e: Event) => {
        e.preventDefault();
        hotspots.forEach((o) => { if (o !== h) o.classList.remove('open'); });
        h.classList.toggle('open');
      };
      h.addEventListener('click', fn);
      hotHandlers.push([h, fn]);
    });
    cleanups.push(() => hotHandlers.forEach(([h, fn]) => h.removeEventListener('click', fn)));

    // ── Count-ups ──
    const counts = Array.from(document.querySelectorAll<HTMLElement>('[data-count]'));
    const animateCount = (el: HTMLElement) => {
      const target = +(el.dataset.count || '0');
      const suffix = el.dataset.suffix || '';
      if (!REDUCE) {
        const o = { v: 0 };
        track(gsap.to(o, { v: target, duration: 1.6, ease: 'power2.out', onUpdate: () => { el.textContent = Math.round(o.v) + suffix; } }));
      } else { el.textContent = target + suffix; }
    };

    // ── Reveals (deterministic, fail-open) ──
    if (REDUCE) {
      counts.forEach(animateCount);
    } else {
      document.querySelectorAll<HTMLElement>('[data-serve]').forEach((el, i) => { el.style.transitionDelay = (i * 0.07) + 's'; });
      document.querySelectorAll<HTMLElement>('[data-bento]').forEach((el, i) => { el.style.transitionDelay = ((i % 4) * 0.06) + 's'; });
      document.querySelectorAll<HTMLElement>('[data-benefit]').forEach((el, i) => { el.style.transitionDelay = (i * 0.06) + 's'; });
      document.querySelectorAll<HTMLElement>('[data-step]').forEach((el, i) => { el.style.transitionDelay = (i * 0.16) + 's'; });
      const reveals = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal],[data-serve],[data-step],[data-bento],[data-benefit]'));
      reveals.forEach((el) => el.classList.add('pre'));
      const countsLeft = new Set(counts);
      const check = () => {
        const vh = window.innerHeight;
        for (const el of reveals) {
          if (!el.classList.contains('in') && el.getBoundingClientRect().top < vh * 0.92) el.classList.add('in');
        }
        for (const el of Array.from(countsLeft)) {
          if (el.getBoundingClientRect().top < vh * 0.88) { animateCount(el); countsLeft.delete(el); }
        }
      };
      window.addEventListener('scroll', check, { passive: true });
      window.addEventListener('resize', check, { passive: true });
      check();
      cleanups.push(() => { window.removeEventListener('scroll', check); window.removeEventListener('resize', check); });
    }

    // ── GSAP flourishes (decorative only) ──
    if (!REDUCE) {
      if (document.querySelector('[data-hero-line]')) {
        track(gsap.from('[data-hero-line]:not(#heroDead)', { y: 38, autoAlpha: 0, duration: 0.9, ease: 'power4.out', stagger: 0.12, delay: 0.15 }));
        if (document.getElementById('heroDead'))
          track(gsap.from('#heroDead', { x: -80, autoAlpha: 0, scale: 0.9, transformOrigin: 'left center', duration: 1.0, ease: 'back.out(1.6)', delay: 0.95 }));
      }
      if (document.querySelector('[data-hero]'))
        track(gsap.from('[data-hero]', { y: 24, autoAlpha: 0, duration: 0.9, ease: 'power3.out', stagger: 0.08, delay: 0.4 }));

      if (document.querySelector('.hero-photo')) {
        track(gsap.fromTo('.hero-photo', { scale: 1.06 }, { scale: 1.16, duration: 18, ease: 'sine.inOut', yoyo: true, repeat: -1 }));
      }

      const sweepEl = document.getElementById('lightsweep');
      let sweepInterval: ReturnType<typeof setInterval> | undefined;
      if (sweepEl) {
        const sweep = () => track(gsap.fromTo('#lightsweep', { x: '-120%' }, { x: '120%', duration: 1.7, ease: 'power2.inOut' }));
        sweep();
        sweepInterval = setInterval(sweep, 7000);
        cleanups.push(() => { if (sweepInterval) clearInterval(sweepInterval); });
      }

      const sw = document.querySelector<SVGPathElement>('.swoosh path');
      if (sw) { const len = sw.getTotalLength(); sw.style.strokeDasharray = String(len); sw.style.strokeDashoffset = String(len); track(gsap.to(sw, { strokeDashoffset: 0, duration: 1.2, delay: 1.0, ease: 'power2.out' })); }

      // Live inventory bars — continuously fluctuate
      document.querySelectorAll<HTMLElement>('.bar').forEach((b) => {
        track(gsap.to(b, { scaleY: () => gsap.utils.random(0.4, 1), duration: () => gsap.utils.random(0.9, 1.8), ease: 'sine.inOut', yoyo: true, repeat: -1, repeatRefresh: true, delay: gsap.utils.random(0, 0.8) }));
      });

      if (document.getElementById('perkBadge'))
        track(gsap.to('#perkBadge', { scale: 1.035, boxShadow: '0 0 34px rgba(201,75,12,0.45)', duration: 1.5, ease: 'sine.inOut', yoyo: true, repeat: -1 }));
      if (document.getElementById('goLive'))
        track(gsap.to('#goLive', { scale: 1.09, boxShadow: '0 0 28px rgba(201,75,12,0.6)', duration: 1.2, ease: 'sine.inOut', yoyo: true, repeat: -1 }));
      if (document.getElementById('goLiveText'))
        track(gsap.to('#goLiveText', { opacity: 0, duration: 1.0, ease: 'sine.inOut', yoyo: true, repeat: -1, repeatDelay: 0.35 }));

      // Mouse parallax on hero
      const hero = document.getElementById('hero');
      if (hero && document.querySelector('.hero-photo')) {
        const chips = gsap.utils.toArray<HTMLElement>('[data-chip]');
        const px = gsap.quickTo('.hero-photo', 'x', { duration: 0.7, ease: 'power3' });
        const py = gsap.quickTo('.hero-photo', 'y', { duration: 0.7, ease: 'power3' });
        const onMove = (e: PointerEvent) => {
          const r = hero.getBoundingClientRect();
          const dx = (e.clientX - r.left) / r.width - 0.5;
          const dy = (e.clientY - r.top) / r.height - 0.5;
          hero.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100) + '%');
          hero.style.setProperty('--my', ((e.clientY - r.top) / r.height * 100) + '%');
          px(dx * -22); py(dy * -22);
          chips.forEach((c, i) => gsap.to(c, { x: dx * (18 + i * 10), y: dy * (18 + i * 10), duration: 0.7, ease: 'power3' }));
        };
        hero.addEventListener('pointermove', onMove);
        cleanups.push(() => hero.removeEventListener('pointermove', onMove));
      }

      if (document.querySelector('[data-bento]')) {
        gsap.utils.toArray<HTMLElement>('[data-bento]').forEach((el, i) => {
          track(gsap.to(el, { yPercent: -5 + (i % 3) * 2.5, ease: 'none', scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: 0.6 } }));
        });
      }
    } else {
      counts.forEach(animateCount);
    }

    // ── Cleanup on route change / unmount ──
    return () => {
      cleanups.forEach((fn) => fn());
      tweens.forEach((t) => t.kill());
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [pathname]);

  return null;
}
