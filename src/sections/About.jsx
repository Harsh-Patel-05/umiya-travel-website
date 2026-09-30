import { Check, MapPin, Phone } from 'lucide-react'
import WhatsAppIcon from '../components/WhatsAppIcon'
import { ABOUT_POINTS, COMPANY } from '../data/site'

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="section-y overflow-hidden">
      <div className="container-rd grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div data-reveal className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div
            aria-hidden
            className="absolute -bottom-4 -left-4 top-8 right-8 rounded-[28px] border-2 border-brand/25 sm:-bottom-5 sm:-left-5"
          />
          <div className="group relative aspect-[4/5] overflow-hidden rounded-[28px] bg-mist shadow-lift lg:aspect-[3/4]">
            <img
              src="/images/about-chauffeur.webp"
              alt="RD Travel driver in a white shirt holding the door of a clean white sedan"
              width="768"
              height="1024"
              loading="lazy"
              decoding="async"
              className="img-zoom size-full object-cover object-[center_20%]"
            />
          </div>
          <div className="absolute -right-2 bottom-6 flex max-w-[15rem] items-center gap-3 rounded-2xl border border-line bg-white/95 p-3.5 pr-5 shadow-float backdrop-blur sm:-right-6 sm:bottom-10">
            <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand text-white">
              <MapPin size={19} aria-hidden />
            </span>
            <p className="text-sm leading-snug">
              <span className="block font-bold text-ink">Based in Ghatlodiya</span>
              <span className="text-muted">Ahmedabad, Gujarat</span>
            </p>
          </div>
        </div>

        <div data-reveal style={{ '--reveal-delay': '120ms' }}>
          <p className="eyebrow">About RD Travel</p>
          <h2 id="about-title" className="h2-section mt-4 text-ink">
            Comfortable journeys, handled personally.
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted sm:text-[1.0625rem]">
            <p>
              RD Travel is an Ahmedabad-based car travel service focused on making every journey smooth
              and dependable. Whether you need a local ride, airport transfer or an outstation car, our
              aim is simple — make the booking easy and the journey comfortable.
            </p>
            <p>
              We believe good travel service comes down to the things that matter: a clean car, a
              professional driver, clear communication and being there when you need us.
            </p>
          </div>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {ABOUT_POINTS.map((point) => (
              <li key={point} className="flex items-start gap-3 text-[0.9375rem] font-medium text-graphite">
                <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-brand-tint text-brand-dark">
                  <Check size={13} strokeWidth={3} aria-hidden />
                </span>
                {point}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col gap-3 min-[430px]:flex-row">
            <a href={COMPANY.phoneHref} className="btn btn-dark">
              <Phone size={17} aria-hidden />
              Talk to Us
            </a>
            <a
              href={COMPANY.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <WhatsAppIcon size={18} className="text-[#1f9d55]" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
