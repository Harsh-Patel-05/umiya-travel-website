import { ArrowUp, Mail, MapPin, Phone } from 'lucide-react'
import { COMPANY } from '../data/site'
import Logo from './Logo'

const QUICK_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Our Cars', href: '#cars' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const FOOTER_SERVICES = [
  'Local Travel',
  'Airport Transfer',
  'Outstation',
  'One-Way',
  'Round Trip',
  'Corporate Travel',
]

function ColumnTitle({ children }) {
  return (
    <h3 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-white">{children}</h3>
  )
}

const linkClass =
  'inline-flex text-[0.9375rem] text-white/65 transition-colors duration-200 hover:text-brand-light'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-brand via-brand-light to-brand"
      />
      <div className="container-rd grid gap-12 pb-12 pt-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr_1.2fr] lg:gap-10 lg:pt-20">
        <div className="sm:col-span-2 lg:col-span-1">
          <a href="#home" aria-label="RD Travel — back to top" className="inline-block rounded-md">
            <Logo variant="full" tone="dark" alt="" className="w-[200px] sm:w-[220px]" />
          </a>
          <p className="mt-6 max-w-sm text-[0.9375rem] leading-relaxed text-white/65">
            Reliable car travel in Ahmedabad for local rides, airport transfers, outstation journeys and
            more.
          </p>
        </div>

        <nav aria-label="Footer">
          <ColumnTitle>Quick Links</ColumnTitle>
          <ul className="mt-5 space-y-3">
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={linkClass}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <ColumnTitle>Services</ColumnTitle>
          <ul className="mt-5 space-y-3">
            {FOOTER_SERVICES.map((service) => (
              <li key={service}>
                <a href="#services" className={linkClass}>
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="sm:col-span-2 lg:col-span-1">
          <ColumnTitle>Contact</ColumnTitle>
          <ul className="mt-5 space-y-4 text-[0.9375rem]">
            <li>
              <a href={COMPANY.phoneHref} className="group flex items-center gap-3 text-white/80 hover:text-white">
                <Phone size={17} className="shrink-0 text-brand" aria-hidden />
                {COMPANY.phoneRaw}
              </a>
            </li>
            <li>
              <a
                href={COMPANY.emailHref}
                className="group flex items-center gap-3 break-all text-white/80 hover:text-white"
              >
                <Mail size={17} className="shrink-0 text-brand" aria-hidden />
                {COMPANY.email}
              </a>
            </li>
            <li>
              <a
                href={COMPANY.directionsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-3 text-white/80 hover:text-white"
              >
                <MapPin size={17} className="mt-1 shrink-0 text-brand" aria-hidden />
                <address className="not-italic leading-relaxed">
                  {COMPANY.addressShort.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-rd flex flex-col items-start justify-between gap-4 py-6 text-sm text-white/55 sm:flex-row sm:items-center">
          <p>
            © {year} {COMPANY.name}. All rights reserved.
          </p>
          <a
            href="#home"
            className="inline-flex items-center gap-2 font-medium text-white/70 transition-colors hover:text-brand-light"
          >
            Back to top
            <ArrowUp size={15} aria-hidden />
          </a>
        </div>
      </div>
    </footer>
  )
}
