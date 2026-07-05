'use client';

import { useState } from 'react';
import { SITE } from '@/lib/site';

type FormState = {
  firstName: string; lastName: string; email: string; company: string;
  location: string; headcount: string; details: string;
};
const EMPTY: FormState = { firstName: '', lastName: '', email: '', company: '', location: '', headcount: '', details: '' };

export default function ContactForm({ source = 'home' }: { source?: string }) {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const set = (k: keyof FormState, v: string) => setForm((p) => ({ ...p, [k]: v }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); setError(false);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source }),
      });
      if (res.ok) setSubmitted(true); else setError(true);
    } catch { setError(true); }
    setLoading(false);
  };

  return (
    <section id="contact" className="relative py-28 lg:py-36 bg-slate-900/40 border-t border-white/[0.06] overflow-hidden">
      <div className="blob bg-ember-700 h-[480px] w-[480px] right-[-14rem] bottom-[-10rem] opacity-30"></div>
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-16 items-start">
        <div data-reveal>
          <div className="eyebrow text-ember-400 mb-5 flex items-center gap-3"><span className="h-px w-8 bg-ember-500/60"></span> Get Started</div>
          <h2 className="font-display uppercase text-iron-100 leading-[1.0] tracking-tight text-4xl sm:text-6xl">
            Request your free<br />break room <span className="grad-ember">assessment.</span>
          </h2>
          <p className="mt-5 text-iron-200 text-base leading-relaxed max-w-md">
            Tell us about your facility and we&rsquo;ll schedule a free on-site visit to design a market tailored to your team and your shifts.
          </p>
          <ul className="mt-9 flex flex-col gap-4">
            {['No cost or obligation for the assessment', 'On-site visit and custom layout design', 'Phoenix, Mesa, Chandler, Gilbert, Scottsdale & Tempe', 'Response within one business day'].map((t) => (
              <li key={t} className="flex items-start gap-3 text-iron-200 text-sm"><span className="check"></span>{t}</li>
            ))}
          </ul>
          <div className="mt-10 pt-8 border-t border-white/[0.08] flex flex-col gap-3">
            <span className="font-mono text-[10px] tracking-widest uppercase text-iron-300">Direct Contact</span>
            <a href={`mailto:${SITE.email}`} className="ulink inline-flex items-center gap-2.5 text-iron-100 hover:text-ember-300 transition-colors w-max">{SITE.email}</a>
            <a href={`tel:${SITE.phoneHref}`} className="ulink inline-flex items-center gap-2.5 text-iron-100 hover:text-ember-300 transition-colors w-max">{SITE.phone}</a>
          </div>
        </div>

        <div data-reveal>
          {submitted ? (
            <div className="success-card rounded-3xl glass-strong p-12 text-center flex flex-col items-center gap-5">
              <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-ember-500/15 border border-ember-500/40">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none"><path className="check-draw" d="M5 13l4 4L19 7" pathLength={1} stroke="#F4A06A" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /></svg>
              </span>
              <h3 className="font-display text-2xl uppercase text-iron-100">Request Received</h3>
              <p className="text-iron-200 text-sm leading-relaxed max-w-sm">Thanks, {form.firstName || 'there'}! We&rsquo;ll review your facility details and reach out within one business day to schedule your free on-site assessment.</p>
            </div>
          ) : (
            <form onSubmit={submit} className="rounded-3xl glass p-7 sm:p-9 flex flex-col gap-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="field"><label>First Name <i>*</i></label><input required value={form.firstName} onChange={(e) => set('firstName', e.target.value)} placeholder="Jane" /></div>
                <div className="field"><label>Last Name <i>*</i></label><input required value={form.lastName} onChange={(e) => set('lastName', e.target.value)} placeholder="Smith" /></div>
              </div>
              <div className="field"><label>Work Email <i>*</i></label><input required type="email" value={form.email} onChange={(e) => set('email', e.target.value)} placeholder="jane@yourcompany.com" /></div>
              <div className="field"><label>Company / Organization <i>*</i></label><input required value={form.company} onChange={(e) => set('company', e.target.value)} placeholder="Acme Manufacturing" /></div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="field"><label>Facility City <i>*</i></label><input required value={form.location} onChange={(e) => set('location', e.target.value)} placeholder="Chandler, AZ" /></div>
                <div className="field"><label>Approx. Headcount</label><input value={form.headcount} onChange={(e) => set('headcount', e.target.value)} placeholder="e.g. 150" /></div>
              </div>
              <div className="field"><label>Tell us about your facility &amp; shifts <i>*</i></label><textarea required rows={4} value={form.details} onChange={(e) => set('details', e.target.value)} placeholder="e.g. Two shifts plus an overnight crew, ~180 on site. One break room with two old vending machines we’d love to replace."></textarea></div>
              {error && <p className="text-sm text-red-400 text-center">Something went wrong. Please email us at <a href={`mailto:${SITE.email}`} className="underline">{SITE.email}</a>.</p>}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-1">
                <p className="text-[11px] text-iron-300 leading-relaxed sm:max-w-[16rem]">No commitment required. We respond within one business day.</p>
                <button type="submit" disabled={loading} className="btn-ember inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-[13px] font-semibold uppercase tracking-wider text-white w-full sm:w-auto disabled:opacity-60">
                  {loading ? 'Sending…' : 'Request Assessment'}
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" /></svg>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
