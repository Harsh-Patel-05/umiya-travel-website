import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { destinations } from '../../data/destinations'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import SectionHeading from '../ui/SectionHeading'

export default function DestinationsSection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section className="section-pad warm-surface">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Destinations"
          title="Explore Popular Destinations"
          description="Popular routes across Gujarat, Rajasthan, and beyond — a visual showcase only, not a booking portal."
        />

        <div
          ref={ref}
          className={`grid gap-4 sm:grid-cols-2 lg:grid-cols-3 ${
            isVisible ? 'reveal is-visible' : 'reveal'
          }`}
        >
          {destinations.map((destination) => (
            <article
              key={destination.id}
              className="group relative isolate min-h-[240px] overflow-hidden rounded-xl sm:min-h-[270px]"
            >
              <img
                src={destination.image}
                alt={`${destination.name} travel destination`}
                className="img-zoom absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
              <div className="relative flex h-full min-h-[240px] flex-col justify-end p-4 sm:min-h-[270px] sm:p-6">
                <h3 className="font-display text-xl font-semibold text-white sm:text-2xl">
                  {destination.name}
                </h3>
                <p className="mt-2 max-w-sm text-sm text-white/75">{destination.description}</p>
                <Link
                  to="/contact"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition group-hover:gap-2.5"
                >
                  Explore Journey
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
