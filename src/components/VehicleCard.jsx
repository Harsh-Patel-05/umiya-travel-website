import { ArrowRight, Luggage, Users } from 'lucide-react'

function selectCar(category) {
  window.dispatchEvent(new CustomEvent('rd:select-car', { detail: category }))
}

export default function VehicleCard({ vehicle, index = 0, className = '' }) {
  const { category, title = category, description, passengers, luggage, examples, image, alt } = vehicle

  return (
    <div data-reveal style={{ '--reveal-delay': `${index * 80}ms` }} className={className}>
      <article className="card group flex h-full flex-col overflow-hidden transition duration-300 ease-out hover:-translate-y-1 hover:shadow-lift">
        <div className="relative aspect-[4/3] overflow-hidden bg-mist">
          <img
            src={image}
            alt={alt}
            width="800"
            height="600"
            loading="lazy"
            decoding="async"
            className="img-zoom size-full object-cover"
          />
          <span className="absolute left-4 top-4 rounded-full bg-white/92 px-3 py-1 text-xs font-semibold tracking-wide text-ink shadow-sm backdrop-blur">
            {category}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <h3 className="text-xl font-bold text-ink">{title}</h3>
          <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">{description}</p>

          <ul className="mt-5 flex flex-wrap gap-2 text-[0.8125rem] font-medium text-graphite">
            <li className="inline-flex items-center gap-1.5 rounded-lg bg-mist px-2.5 py-1.5">
              <Users size={15} className="text-brand-dark" aria-hidden />
              <span className="sr-only">Passengers:</span>
              {passengers}
            </li>
            <li className="inline-flex items-center gap-1.5 rounded-lg bg-mist px-2.5 py-1.5">
              <Luggage size={15} className="text-brand-dark" aria-hidden />
              <span className="sr-only">Luggage:</span>
              {luggage}
            </li>
          </ul>

          {examples ? <p className="mt-4 text-xs text-muted">{examples}</p> : null}

          <a
            href="#book"
            onClick={() => selectCar(category)}
            className="btn btn-secondary group/btn mt-6 w-full hover:border-brand-strong hover:bg-brand-strong hover:text-white"
            aria-label={`Enquire now about ${title}`}
          >
            Enquire Now
            <ArrowRight
              size={17}
              aria-hidden
              className="transition-transform duration-300 group-hover/btn:translate-x-0.5"
            />
          </a>
        </div>
      </article>
    </div>
  )
}
