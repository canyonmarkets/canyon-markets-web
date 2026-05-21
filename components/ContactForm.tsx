'use client';

import { useState } from 'react';
import { CheckCircle, Mail, Phone } from 'lucide-react';

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  location: string;
  headcount: string;
  details: string;
};

const EMPTY: FormState = {
  firstName: '',
  lastName: '',
  email: '',
  company: '',
  location: '',
  headcount: '',
  details: '',
};

function Field({
  label,
  id,
  type = 'text',
  value,
  onChange,
  required,
  placeholder,
}: {
  label: string;
  id: keyof FormState;
  type?: string;
  value: string;
  onChange: (id: keyof FormState, val: string) => void;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-xs font-mono tracking-[0.15em] uppercase text-stone-500">
        {label}{required && <span className="text-brand-600 ml-0.5">*</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(id, e.target.value)}
        className="w-full rounded-lg border border-stone-200 bg-white px-4 py-3 text-sm text-stone-800 placeholder-stone-300 outline-none transition-all duration-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
      />
    </div>
  );
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sendError, setSendError] = useState(false);

  const handleChange = (id: keyof FormState, val: string) =>
    setForm((prev) => ({ ...prev, [id]: val }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSendError(false);

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    setLoading(false);
    if (res.ok) {
      setSubmitted(true);
    } else {
      setSendError(true);
    }
  };

  return (
    <section id="contact" className="bg-iron-300 px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 lg:items-start">

          {/* Left: pitch */}
          <div className="flex flex-col gap-10">
            <div>
              <p className="text-brand-600 font-mono text-base tracking-[0.3em] uppercase mb-4">
                Get Started
              </p>
              <h2 className="font-display font-bold text-2xl sm:text-5xl uppercase tracking-normal sm:tracking-wide text-stone-900 leading-tight">
                Request a Free Break Room Assessment
              </h2>
              <p className="mt-5 text-stone-900 text-sm leading-relaxed">
                Tell us about your facility and we'll schedule a free on-site visit to design
                a micro-market layout tailored to your team and your space.
              </p>
            </div>

            <ul className="flex flex-col gap-4">
              {[
                'No cost, no contracts, no obligation',
                'On-site visit and custom layout design',
                'Serving Phoenix, Mesa, Chandler, Gilbert, Scottsdale, and Tempe',
                'Response within one business day',
              ].map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-0.5 flex-shrink-0 flex h-5 w-5 items-center justify-center rounded-full bg-brand-100">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                      <path d="M1.5 5L4 7.5L8.5 2.5" stroke="#0D9488" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-stone-900 text-sm leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>

            <div className="border-t border-stone-200 pt-8 flex flex-col gap-3">
              <p className="text-xs font-mono tracking-[0.2em] uppercase text-stone-400 mb-1">
                Direct Contact
              </p>
              <a
                href="mailto:info@canyon-markets.com"
                className="inline-flex items-center gap-2 text-sm text-stone-900 hover:text-brand-600 transition-colors duration-200"
              >
                <Mail size={14} strokeWidth={1.5} className="text-brand-500" />
                info@canyon-markets.com
              </a>
              <a
                href="tel:+16029356830"
                className="inline-flex items-center gap-2 text-sm text-stone-900 hover:text-brand-600 transition-colors duration-200"
              >
                <Phone size={14} strokeWidth={1.5} className="text-brand-500" />
                (602) 935-6830
              </a>
            </div>
          </div>

          {/* Right: form / success */}
          {submitted ? (
            <div className="flex flex-col items-center gap-5 rounded-2xl border border-brand-200 bg-white px-10 py-16 text-center">
              <CheckCircle size={48} strokeWidth={1.5} className="text-brand-600" />
              <h3 className="font-display font-bold text-2xl uppercase tracking-wide text-stone-900">
                Request Received
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed max-w-sm">
                Thank you, {form.firstName}. We'll review your facility details and reach out
                within one business day to schedule your free on-site assessment.
              </p>
              <button
                onClick={() => { setSubmitted(false); setForm(EMPTY); }}
                className="mt-2 text-xs font-mono tracking-widest uppercase text-brand-600 hover:text-brand-700 transition-colors duration-200"
              >
                Submit another request
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-stone-200 bg-white px-8 py-10 flex flex-col gap-6 shadow-sm"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Field label="First Name" id="firstName" value={form.firstName} onChange={handleChange} required placeholder="Jane" />
                <Field label="Last Name"  id="lastName"  value={form.lastName}  onChange={handleChange} required placeholder="Smith" />
              </div>

              <Field label="Work Email" id="email" type="email" value={form.email} onChange={handleChange} required placeholder="jane@yourcompany.com" />
              <Field label="Company / Organization" id="company" value={form.company} onChange={handleChange} required placeholder="Acme Manufacturing" />
              <Field label="Facility Location / City" id="location" value={form.location} onChange={handleChange} required placeholder="Chandler, AZ" />
              <Field label="Approximate Headcount" id="headcount" value={form.headcount} onChange={handleChange} placeholder="e.g. 150 employees" />

              <div className="flex flex-col gap-1.5">
                <label htmlFor="details" className="text-xs font-mono tracking-[0.15em] uppercase text-stone-500">
                  Tell us about your break room space<span className="text-brand-600 ml-0.5">*</span>
                </label>
                <textarea
                  id="details"
                  name="details"
                  required
                  rows={4}
                  value={form.details}
                  placeholder="e.g. Two break rooms, about 400 sq ft each. Currently have two old vending machines we'd like to replace."
                  onChange={(e) => handleChange('details', e.target.value)}
                  className="w-full rounded-lg border border-stone-200 bg-white px-4 py-3 text-sm text-stone-800 placeholder-stone-300 outline-none transition-all duration-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 resize-none"
                />
              </div>

              <div className="h-px bg-stone-100" />

              {sendError && (
                <p className="text-sm text-red-500 text-center">
                  Something went wrong. Please email us at{' '}
                  <a href="mailto:info@canyon-markets.com" className="underline">
                    info@canyon-markets.com
                  </a>.
                </p>
              )}

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <p className="text-xs text-stone-400 leading-relaxed sm:max-w-xs">
                  No commitment required. We respond within one business day.
                </p>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto rounded-lg bg-brand-600 px-8 py-3 text-sm font-semibold tracking-wide text-white uppercase transition-all duration-200 hover:bg-brand-700 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-500/40 active:scale-[0.97] active:translate-y-0 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-500"
                >
                  {loading ? 'Sending…' : 'Request Assessment'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
