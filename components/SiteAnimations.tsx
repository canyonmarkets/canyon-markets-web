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

    const FINE_POINTER = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

    // ── Card spotlight (shared handler; CSS ::before renders it, hover-only media query) ──
    if (FINE_POINTER) {
      const onCardMove = (e: PointerEvent) => {
        const card = (e.target as Element | null)?.closest?.('.card-spot') as HTMLElement | null;
        if (!card) return;
        const r = card.getBoundingClientRect();
        card.style.setProperty('--mx', (((e.clientX - r.left) / r.width) * 100) + '%');
        card.style.setProperty('--my', (((e.clientY - r.top) / r.height) * 100) + '%');
      };
      document.addEventListener('pointermove', onCardMove, { passive: true });
      cleanups.push(() => document.removeEventListener('pointermove', onCardMove));
    }

    // ── Count-ups (power4.out settle + one-time ember glow on completion) ──
    const counts = Array.from(document.querySelectorAll<HTMLElement>('[data-count]'));
    const animateCount = (el: HTMLElement) => {
      const target = +(el.dataset.count || '0');
      const suffix = el.dataset.suffix || '';
      if (!REDUCE) {
        const o = { v: 0 };
        track(gsap.to(o, {
          v: target, duration: 2.1, ease: 'power4.out',
          onUpdate: () => { el.textContent = Math.round(o.v) + suffix; },
          onComplete: () => {
            track(gsap.fromTo(el,
              { textShadow: '0 0 0px rgba(201,75,12,0)' },
              { textShadow: '0 0 16px rgba(201,75,12,0.75)', duration: 0.35, ease: 'power2.out', yoyo: true, repeat: 1, clearProps: 'textShadow' }));
          },
        }));
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

      // ── Hero scroll handoff — pin-free "curtain lift" scrub ──
      // Deliberately NOT a ScrollTrigger pin: the pin-spacer + pinSpacing:false mutated
      // layout and broke the fixed header's paint. Instead the hero content parallaxes
      // down (slower than the scroll) while scaling and fading, so the Marquee/next
      // section rises over it naturally. Transform-only on an inner wrapper — zero
      // layout mutation, fail-open (no JS = plain document flow).
      const heroWrap = document.querySelector<HTMLElement>('[data-hero-wrap]');
      const heroSec = document.getElementById('hero');
      if (heroSec && heroWrap) {
        track(gsap.to(heroWrap, {
          yPercent: 18, scale: 0.94, autoAlpha: 0, transformOrigin: '50% 30%', ease: 'none',
          scrollTrigger: { trigger: heroSec, start: 'top top', end: 'bottom 35%', scrub: 0.5 },
        }));
      }

      // ── Featured card 3D tilt (pointer devices only) ──
      if (FINE_POINTER) {
        document.querySelectorAll<HTMLElement>('[data-tilt]').forEach((card) => {
          gsap.set(card, { transformPerspective: 900 });
          const rx = gsap.quickTo(card, 'rotationX', { duration: 0.45, ease: 'power3' });
          const ry = gsap.quickTo(card, 'rotationY', { duration: 0.45, ease: 'power3' });
          const enter = () => {
            // Stop Tailwind's transition-all / reveal transitions from fighting per-frame transforms
            card.style.transitionProperty = 'border-color, background-color, box-shadow';
          };
          const move = (e: PointerEvent) => {
            const r = card.getBoundingClientRect();
            const dx = (e.clientX - r.left) / r.width - 0.5;
            const dy = (e.clientY - r.top) / r.height - 0.5;
            rx(dy * -2); ry(dx * 2);
          };
          const leave = () => { track(gsap.to(card, { rotationX: 0, rotationY: 0, duration: 0.9, ease: 'elastic.out(1, 0.5)' })); };
          card.addEventListener('pointerenter', enter);
          card.addEventListener('pointermove', move);
          card.addEventListener('pointerleave', leave);
          cleanups.push(() => {
            card.removeEventListener('pointerenter', enter);
            card.removeEventListener('pointermove', move);
            card.removeEventListener('pointerleave', leave);
          });
        });
      }

      // ── Process timeline draw-in: connectors scrub scaleY, markers pop as line reaches them ──
      document.querySelectorAll<HTMLElement>('#process .connector').forEach((c) => {
        track(gsap.fromTo(c, { scaleY: 0 }, { scaleY: 1, ease: 'none', scrollTrigger: { trigger: c, start: 'top 80%', end: 'bottom 55%', scrub: 0.6 } }));
      });
      document.querySelectorAll<HTMLElement>('#process .node:not(#goLive)').forEach((n) => {
        const pop = gsap.timeline({ scrollTrigger: { trigger: n, start: 'top 82%' } });
        pop.from(n, { scale: 0.6, duration: 0.45, ease: 'back.out(2.4)' })
          .fromTo(n, { boxShadow: '0 0 0px 0px rgba(201,75,12,0)' }, { boxShadow: '0 0 22px 2px rgba(201,75,12,0.5)', duration: 0.3, ease: 'power2.out', yoyo: true, repeat: 1 }, '<0.1');
        cleanups.push(() => pop.kill());
      });
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
