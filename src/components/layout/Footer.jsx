import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'
import { COMPANY, NAV_LINKS } from '../../data/company'
import {
  FacebookIcon,
  InstagramIcon,
  WhatsAppIcon,
  YoutubeIcon,
} from '../ui/SocialIcons'
import Logo from '../ui/Logo'

const serviceLinks = [
  { label: 'Local Rental', to: '/services' },
  { label: 'Outstation Travel', to: '/services' },
  { label: 'Airport Transfer', to: '/services' },
  { label: 'Corporate Travel', to: '/services' },
  { label: 'Chauffeur Service', to: '/services' },
]

const socialLinks = [
  {
    label: 'Instagram',
    href: COMPANY.social.instagram,
    icon: InstagramIcon,
  },
  {
    label: 'Facebook',
    href: COMPANY.social.facebook,
    icon: FacebookIcon,
  },
  {
    label: 'YouTube',
    href: COMPANY.social.youtube,
    icon: YoutubeIcon,
  },
  {
    label: 'WhatsApp',
    href: COMPANY.whatsappHref,
    icon: WhatsAppIcon,
  },
]

export default function Footer() {
  return (
    <footer className="dark-surface text-white">
      <div className="container-shell section-pad grid gap-10 sm:gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
        <div className="max-w-sm md:col-span-2 lg:col-span-1">
          <Logo variant="full" className="max-w-[220px] sm:max-w-none" />
          <p className="mt-4 text-sm leading-relaxed text-white/70">
            Comfortable journeys. Reliable cars. Better travel with Umiya Travel.
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-2.5 sm:gap-3">
            {socialLinks.map((item) => {
              const Icon = item.icon
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 text-white/85 transition hover:border-brand hover:bg-brand/10 hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                  aria-label={item.label}
                >
                  <Icon size={18} />
                </a>
              )
            })}
          </div>
        </div>

        <div>
          <h3 className="mb-4 font-display text-sm font-semibold tracking-[0.16em] text-brand uppercase">
            Quick Links
          </h3>
          <ul className="space-y-2.5">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-sm text-white/70 transition hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-display text-sm font-semibold tracking-[0.16em] text-brand uppercase">
            Services
          </h3>
          <ul className="space-y-2.5">
            {serviceLinks.map((link) => (
              <li key={link.label}>
                <Link to={link.to} className="text-sm text-white/70 transition hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-display text-sm font-semibold tracking-[0.16em] text-brand uppercase">
            Contact
          </h3>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex gap-3">
              <Phone size={16} className="mt-0.5 shrink-0 text-brand" />
              <a href={COMPANY.phoneHref} className="hover:text-white">
                {COMPANY.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail size={16} className="mt-0.5 shrink-0 text-brand" />
              <a href={COMPANY.emailHref} className="hover:text-white break-all">
                {COMPANY.email}
              </a>
            </li>
            <li className="flex gap-3">
              <MapPin size={16} className="mt-0.5 shrink-0 text-brand" />
              <a
                href={COMPANY.mapsHref}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white"
              >
                {COMPANY.address}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-shell flex flex-col items-center justify-between gap-2 py-5 text-center text-xs text-white/50 sm:flex-row sm:text-left">
          <p>© {new Date().getFullYear()} Umiya Travel. All Rights Reserved.</p>
          <p>Exclusive Car Rental & Travel Services</p>
        </div>
      </div>
    </footer>
  )
}
