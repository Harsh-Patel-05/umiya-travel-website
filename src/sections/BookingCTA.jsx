import { Phone } from 'lucide-react'
import WhatsAppIcon from '../components/WhatsAppIcon'
import { COMPANY } from '../data/site'
import { whatsappUrl } from '../utils/whatsapp'

const CTA_MESSAGE = 'Hello RD Travel, I am planning a ride and would like to know availability and fare.'

export default function BookingCTA() {
  return (
    <section aria-labelledby="cta-title" className="bg-white pb-[clamp(4.5rem,3rem+6vw,7.5rem)]">
      <div className="container-rd">
        <div
          data-reveal
          className="relative isolate overflow-hidden rounded-[28px] bg-ink px-6 py-12 text-white sm:px-10 sm:py-14 lg:rounded-[32px] lg:px-16 lg:py-20"
        >
          <img
            src="/images/cta-night-road.webp"
            alt=""
            width="1024"
            height="576"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 -z-20 size-full object-cover object-[70%_center] opacity-70"
          />
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,rgba(21,21,21,0.96)_0%,rgba(21,21,21,0.85)_45%,rgba(21,21,21,0.35)_100%)]"
          />
          <div
            aria-hidden
            className="absolute -bottom-32 -left-24 -z-10 size-[26rem] rounded-full bg-[radial-gradient(closest-side,rgba(255,90,0,0.35),transparent)]"
          />
          <span
            aria-hidden
            className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-brand via-brand-light to-transparent"
          />

          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <h2 id="cta-title" className="h2-section text-white">
                Planning a <span className="text-brand">Ride?</span>
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/75 sm:text-lg">
                Tell us where you&apos;re going. We&apos;ll help you arrange the right car.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:shrink-0">
              <a
                href={whatsappUrl(CTA_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg"
              >
                <WhatsAppIcon size={20} />
                WhatsApp Us
              </a>
              <a href={COMPANY.phoneHref} className="btn btn-ghost-light btn-lg">
                <Phone size={18} aria-hidden />
                Call {COMPANY.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
