import { useEffect, useState } from 'react'
import { Phone } from 'lucide-react'
import { COMPANY } from '../data/site'
import WhatsAppIcon from './WhatsAppIcon'

const ACTIONS = [
  {
    label: 'Chat with RD Travel on WhatsApp',
    hint: 'WhatsApp us',
    href: COMPANY.whatsappHref,
    external: true,
    className: 'bg-[#1fa855] hover:bg-[#178c46] shadow-[0_12px_28px_-10px_rgba(31,168,85,0.7)]',
    icon: <WhatsAppIcon size={24} />,
  },
  {
    label: `Call RD Travel on ${COMPANY.phoneDisplay}`,
    hint: 'Call now',
    href: COMPANY.phoneHref,
    className: 'bg-brand-strong hover:bg-brand-deeper shadow-glow',
    icon: <Phone size={21} aria-hidden />,
  },
]

export default function FloatingActions() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      const { scrollY, innerHeight } = window
      const nearBottom = innerHeight + scrollY > document.documentElement.scrollHeight - 160
      setVisible(scrollY > innerHeight * 0.6 && !nearBottom)
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div
      className={`fixed bottom-[max(0.875rem,env(safe-area-inset-bottom))] right-[max(0.75rem,env(safe-area-inset-right))] z-40 flex flex-col gap-2.5 transition duration-300 sm:bottom-6 sm:right-6 sm:gap-3 ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
      inert={!visible}
    >
      {ACTIONS.map((action) => (
        <a
          key={action.hint}
          href={action.href}
          aria-label={action.label}
          {...(action.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          className={`group relative grid size-12 place-items-center rounded-full text-white ring-4 ring-white/70 transition duration-300 hover:-translate-y-0.5 sm:size-14 ${action.className}`}
        >
          {action.icon}
          <span
            aria-hidden
            className="pointer-events-none absolute right-full mr-3 hidden translate-x-1 whitespace-nowrap rounded-lg bg-ink px-3 py-1.5 text-xs font-semibold text-white opacity-0 shadow-lg transition duration-200 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100 lg:block"
          >
            {action.hint}
          </span>
        </a>
      ))}
    </div>
  )
}
