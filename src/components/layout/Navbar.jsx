import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS } from '../../data/company'
import Button from '../ui/Button'
import Logo from '../ui/Logo'

export default function Navbar({ transparentOnTop = false }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const onResize = () => {
      if (window.matchMedia('(min-width: 1024px)').matches) setOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const closeMenu = () => setOpen(false)
  const solid = !transparentOnTop || scrolled || open

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? 'border-b border-line/80 bg-white/95 shadow-[0_8px_30px_rgba(22,22,22,0.06)] backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="container-shell flex h-[4.25rem] items-center justify-between gap-3 md:h-[4.75rem] md:gap-4">
        <Logo variant="compact" onClick={closeMenu} className="min-w-0 shrink" />

        <nav className="hidden items-center gap-0.5 xl:gap-1 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                [
                  'rounded-md px-2.5 py-2 text-sm font-semibold whitespace-nowrap transition xl:px-3',
                  solid
                    ? isActive
                      ? 'bg-brand-soft text-brand'
                      : 'text-ink/75 hover:bg-stone hover:text-brand'
                    : isActive
                      ? 'bg-white/15 text-white'
                      : 'text-white/85 hover:bg-white/10 hover:text-white',
                ].join(' ')
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden shrink-0 lg:block">
          <Button to="/contact" size="sm">
            Enquire Now
          </Button>
        </div>

        <button
          type="button"
          className={`rounded-md p-2.5 transition lg:hidden ${
            solid ? 'text-ink hover:bg-stone' : 'text-white hover:bg-white/10'
          }`}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="animate-menu-in max-h-[min(80svh,calc(100svh-4.25rem))] overflow-y-auto border-t border-line bg-white lg:hidden"
        >
          <nav className="container-shell flex flex-col gap-1 py-4 pb-6" aria-label="Mobile">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={closeMenu}
                className="rounded-md px-3 py-3.5 text-base font-semibold text-ink transition hover:bg-brand-soft hover:text-brand"
              >
                {link.label}
              </Link>
            ))}
            <div className="px-3 pt-3 pb-2">
              <Button to="/contact" className="w-full" onClick={closeMenu}>
                Enquire Now
              </Button>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  )
}
