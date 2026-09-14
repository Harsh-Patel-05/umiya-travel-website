import { Fuel, Users, Wind } from 'lucide-react'
import Button from '../ui/Button'

export default function CarCard({ car, onViewDetails, onEnquire }) {
  return (
    <article className="group overflow-hidden rounded-xl border border-line bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-lift">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={car.image}
          alt={car.name}
          className="img-zoom h-full w-full object-cover"
          loading="lazy"
        />
        <span className="absolute top-3 left-3 rounded bg-ink/90 px-2.5 py-1 text-xs font-semibold tracking-wide text-white uppercase">
          {car.category}
        </span>
      </div>

      <div className="p-5 sm:p-6">
        <h3 className="font-display text-lg font-semibold text-ink sm:text-xl">{car.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{car.description}</p>

        <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs text-muted">
          <li className="inline-flex items-center gap-1.5">
            <Users size={14} className="text-brand" />
            {car.seats} Seater
          </li>
          <li className="inline-flex items-center gap-1.5">
            <Fuel size={14} className="text-brand" />
            {car.fuel} · {car.transmission}
          </li>
          <li className="inline-flex items-center gap-1.5">
            <Wind size={14} className="text-brand" />
            {car.ac ? 'AC' : 'Non-AC'}
          </li>
        </ul>

        <div className="mt-5 flex flex-col gap-2 min-[380px]:flex-row min-[380px]:flex-wrap">
          <Button
            variant="outline"
            size="sm"
            className="w-full min-[380px]:w-auto"
            onClick={() => onViewDetails(car)}
          >
            View Details
          </Button>
          <Button size="sm" className="w-full min-[380px]:w-auto" onClick={() => onEnquire(car)}>
            Enquire About This Car
          </Button>
        </div>
      </div>
    </article>
  )
}
