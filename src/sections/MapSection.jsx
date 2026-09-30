import { ExternalLink, MapPin, Navigation } from 'lucide-react'
import { COMPANY } from '../data/site'

export default function MapSection() {
  return (
    <section id="location" aria-labelledby="map-title" className="pb-[clamp(4.5rem,3rem+6vw,7.5rem)]">
      <div className="container-rd">
        <div data-reveal className="relative overflow-hidden rounded-[28px] border border-line bg-mist shadow-card">
          <iframe
            title="RD Travel office location on Google Maps"
            src={COMPANY.mapEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            className="block h-[320px] w-full border-0 grayscale-[25%] sm:h-[400px] lg:h-[480px]"
          />

          <div className="border-t border-line bg-white p-5 sm:p-7 lg:absolute lg:left-8 lg:top-8 lg:w-[23rem] lg:rounded-2xl lg:border lg:shadow-float">
            <p className="eyebrow">Our office</p>
            <h2 id="map-title" className="mt-3 text-2xl font-extrabold text-ink">
              Find RD Travel
            </h2>
            <p className="mt-3 flex gap-2.5 text-[0.9375rem] leading-relaxed text-graphite">
              <MapPin size={18} className="mt-1 shrink-0 text-brand-dark" aria-hidden />
              <span>
                Vasukanan Tower, KK Nagar Rd, Opp. Satkar Bunglows, Sector 4, Ghatlodiya, Ahmedabad
                380061
              </span>
            </p>
            <div className="mt-5 flex flex-col gap-2.5 min-[400px]:flex-row lg:flex-col xl:flex-row">
              <a
                href={COMPANY.directionsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary flex-1"
              >
                <Navigation size={17} aria-hidden />
                Get Directions
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=23.0725598,72.5529417"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary flex-1"
              >
                <ExternalLink size={16} aria-hidden />
                Open Map
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
