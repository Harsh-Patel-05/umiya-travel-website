import { Check } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { cars } from '../../data/cars'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { enquireAboutCar } from '../../utils/enquiry'
import Button from '../ui/Button'

const highlights = [
  'Spacious interiors',
  'Comfortable seating',
  'Air conditioning',
  'Family-friendly travel',
  'Outstation journeys',
  'Chauffeur-driven option',
]

export default function FeaturedCar() {
  const navigate = useNavigate()
  const featured = cars.find((car) => car.featured) || cars[0]
  const { ref, isVisible } = useScrollReveal()

  return (
    <section className="section-pad bg-white">
      <div
        ref={ref}
        className={`container-shell grid items-center gap-10 lg:grid-cols-2 lg:gap-14 ${
          isVisible ? 'reveal is-visible' : 'reveal'
        }`}
      >
        <div className="overflow-hidden rounded-2xl shadow-soft">
          <img
            src={featured.image}
            alt={`${featured.name} featured vehicle`}
            className="h-full min-h-[320px] w-full object-cover sm:min-h-[420px]"
            loading="lazy"
          />
        </div>

        <div>
          <p className="text-xs font-bold tracking-[0.22em] text-brand uppercase">Featured Vehicle</p>
          <h2 className="mt-3 text-3xl leading-tight sm:text-4xl md:text-[2.75rem]">
            Comfort For Every Journey
          </h2>
          <div className="accent-line mt-4" />
          <p className="mt-4 text-lg font-semibold text-ink">{featured.name}</p>
          <p className="mt-3 text-base leading-relaxed text-muted">
            For family trips or long outstation journeys, a spacious ride like the Innova Crysta
            keeps everyone comfortable. AC, generous seating, and chauffeur options make the trip
            feel easy.
          </p>

          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-ink">
                <Check size={16} className="text-brand" />
                {item}
              </li>
            ))}
          </ul>

          <Button className="mt-8" onClick={() => enquireAboutCar(featured, navigate)}>
            Enquire Now
          </Button>
        </div>
      </div>
    </section>
  )
}
