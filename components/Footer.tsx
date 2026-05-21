import { Mail, Phone, MapPin } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Benefits',     href: '#why-us' },
  { label: 'Markets',      href: '#what-we-install' },
  { label: 'Who We Serve', href: '#who-we-serve' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Contact',      href: '#contact' },
] as const;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-stone-900 border-t border-stone-700">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-stone-700">

          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.png" alt="Canyon Markets" className="h-10 w-auto" />
              <span className="font-display font-bold text-base tracking-widest uppercase text-stone-100">
                Canyon Markets
              </span>
            </div>
            <p className="text-xs leading-relaxed text-stone-400 max-w-xs">
              Zero-cost micro-market installation and management for Phoenix-area
              businesses, manufacturers, and schools.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-mono tracking-[0.2em] uppercase text-stone-500 mb-4">
              Navigation
            </p>
            <ul className="flex flex-col gap-2.5">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-sm text-stone-400 hover:text-brand-400 transition-colors duration-200"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-mono tracking-[0.2em] uppercase text-stone-500 mb-4">
              Contact
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:info@canyon-markets.com"
                className="inline-flex items-center gap-2 text-sm text-stone-400 hover:text-brand-400 transition-colors duration-200"
              >
                <Mail size={14} strokeWidth={1.5} />
                info@canyon-markets.com
              </a>
              <a
                href="tel:+16029356830"
                className="inline-flex items-center gap-2 text-sm text-stone-400 hover:text-brand-400 transition-colors duration-200"
              >
                <Phone size={14} strokeWidth={1.5} />
                (602) 935-6830
              </a>
              <span className="inline-flex items-center gap-2 text-sm text-stone-400">
                <MapPin size={14} strokeWidth={1.5} />
                Phoenix Metro Area, AZ
              </span>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-stone-600">
            &copy; {year} Canyon Markets LLC. All rights reserved.
          </p>
          <p className="text-xs text-stone-700 font-mono tracking-wide">
            Phoenix Metro Area Micro-Markets
          </p>
        </div>
      </div>
    </footer>
  );
}
