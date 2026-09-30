import { useEffect, useState } from 'react'
import { Menu, Phone, X } from 'lucide-react'
import { COMPANY, NAV_LINKS } from '../data/site'
import useScrollSpy from '../hooks/useScrollSpy'
import Logo from './Logo'
import WhatsAppIcon from './WhatsAppIcon'

const SECTION_IDS = NAV_LINKS.map((l) => l.id)

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const active = useScrollSpy(SECTION_IDS)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('is-locked', open)
    if (!open) return undefined

    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    const onResize = () => window.innerWidth >= 1024 && setOpen(false)
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
      document.body.classList.remove('is-locked')
    }
  }, [open])

  const solid = scrolled || open
  const close = () => setOpen(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`relative z-10 transition-[background-color,box-shadow,border-color] duration-300 ${
          solid
            ? 'border-b border-line/80 bg-paper/92 shadow-[0_8px_30px_-18px_rgba(21,21,21,0.35)] backdrop-blur-md'
            : 'border-b border-transparent bg-gradient-to-b from-black/45 to-transparent'
        }`}
      >
        <nav
          aria-label="Main"
          className="container-rd flex h-16 items-center justify-between gap-4 lg:h-[4.75rem]"
        >
          <a
            href="#home"
            onClick={close}
            className="inline-flex shrink-0 items-center rounded-md bg-white px-1.5 py-1 shadow-sm"
            aria-label="RD Travel — back to top"
          >
            <Logo
              variant="full"
              tone="light"
              alt=""
              className="w-[128px] min-[400px]:w-[140px] lg:w-[160px]"
            />
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => {
              const isActive = active === link.id
              return (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    aria-current={isActive ? 'true' : undefined}
                    className={`group relative inline-flex h-10 items-center rounded-lg px-3 text-[0.9375rem] font-medium transition-colors xl:px-3.5 ${
                      isActive
                        ? solid
                          ? 'text-brand-ink'
                          : 'text-white'
                        : solid
                          ? 'text-graphite hover:text-ink'
                          : 'text-white/80 hover:text-white'
                    }`}
                  >
                    {link.label}
                    <span
                      aria-hidden
                      className={`absolute inset-x-3 -bottom-0.5 h-0.5 origin-left rounded-full bg-brand transition-transform duration-300 xl:inset-x-3.5 ${
                        isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      }`}
                    />
                  </a>
                </li>
              )
            })}
          </ul>

          <div className="flex items-center gap-2">
            <a href={COMPANY.phoneHref} className="btn btn-primary hidden min-h-11 px-5 lg:inline-flex">
              <Phone size={17} aria-hidden />
              Call Now
            </a>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
              className={`relative grid size-11 place-items-center rounded-xl border transition-colors lg:hidden ${
                solid
                  ? 'border-line bg-white text-ink hover:border-graphite/40'
                  : 'border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20'
              }`}
            >
              <Menu
                size={22}
                aria-hidden
                className={`absolute transition-all duration-300 ${open ? 'rotate-90 opacity-0' : 'opacity-100'}`}
              />
              <X
                size={22}
                aria-hidden
                className={`absolute transition-all duration-300 ${open ? 'opacity-100' : '-rotate-90 opacity-0'}`}
              />
            </button>
          </div>
        </nav>
      </div>

      <button
        type="button"
        tabIndex={-1}
        aria-hidden
        onClick={close}
        className={`fixed inset-0 bg-ink/40 backdrop-blur-[2px] transition-opacity duration-300 lg:hidden ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      />

      <div
        id="mobile-menu"
        className={`mobile-menu absolute inset-x-0 top-full z-0 max-h-[calc(100svh-4rem)] overflow-y-auto rounded-b-3xl border-b border-line bg-paper shadow-float lg:hidden ${
          open ? 'is-open' : ''
        }`}
        inert={!open}
      >
        <div className="container-rd pb-6 pt-2">
          <ul className="divide-y divide-line">
            {NAV_LINKS.map((link, i) => (
              <li key={link.id} style={{ '--i': i }}>
                <a
                  href={`#${link.id}`}
                  onClick={close}
                  aria-current={active === link.id ? 'true' : undefined}
                  className={`flex items-center justify-between py-3.5 font-display text-lg font-semibold ${
                    active === link.id ? 'text-brand-ink' : 'text-ink'
                  }`}
                >
                  {link.label}
                  <span
                    aria-hidden
                    className={`size-1.5 rounded-full bg-brand transition-opacity ${
                      active === link.id ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-5 grid grid-cols-1 gap-3 min-[400px]:grid-cols-2">
            <a href={COMPANY.phoneHref} className="btn btn-primary w-full">
              <Phone size={18} aria-hidden />
              Call Now
            </a>
            <a
              href={COMPANY.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary w-full"
            >
              <WhatsAppIcon size={18} className="text-[#1f9d55]" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
