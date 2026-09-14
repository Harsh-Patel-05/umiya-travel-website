import { Fuel, Gauge, Users, Wind } from 'lucide-react'
import Button from '../ui/Button'
import Modal from '../ui/Modal'

export default function CarModal({ car, open, onClose, onEnquire }) {
  if (!car) return null

  return (
    <Modal open={open} onClose={onClose} title={car.name} size="xl">
      <div className="grid gap-6 md:grid-cols-2">
        <img
          src={car.image}
          alt={car.name}
          className="h-56 w-full rounded-xl object-cover sm:h-72"
        />
        <div>
          <p className="text-xs font-bold tracking-[0.2em] text-brand uppercase">{car.category}</p>
          <p className="mt-3 text-sm leading-relaxed text-muted">{car.description}</p>

          <dl className="mt-5 grid grid-cols-2 gap-3 text-sm">
            <div className="rounded-lg bg-stone px-3 py-2.5">
              <dt className="flex items-center gap-1.5 text-xs text-muted">
                <Users size={14} /> Seats
              </dt>
              <dd className="mt-1 font-semibold text-ink">{car.seats}</dd>
            </div>
            <div className="rounded-lg bg-stone px-3 py-2.5">
              <dt className="flex items-center gap-1.5 text-xs text-muted">
                <Fuel size={14} /> Fuel
              </dt>
              <dd className="mt-1 font-semibold text-ink">{car.fuel}</dd>
            </div>
            <div className="rounded-lg bg-stone px-3 py-2.5">
              <dt className="flex items-center gap-1.5 text-xs text-muted">
                <Gauge size={14} /> Transmission
              </dt>
              <dd className="mt-1 font-semibold text-ink">{car.transmission}</dd>
            </div>
            <div className="rounded-lg bg-stone px-3 py-2.5">
              <dt className="flex items-center gap-1.5 text-xs text-muted">
                <Wind size={14} /> Climate
              </dt>
              <dd className="mt-1 font-semibold text-ink">{car.ac ? 'Air Conditioned' : 'Non-AC'}</dd>
            </div>
          </dl>

          <h4 className="mt-5 font-display text-sm font-semibold text-ink">Features</h4>
          <ul className="mt-2 flex flex-wrap gap-2">
            {car.features.map((feature) => (
              <li key={feature} className="rounded-full border border-line px-3 py-1 text-xs text-muted">
                {feature}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-col gap-2 min-[420px]:flex-row min-[420px]:flex-wrap">
            <Button
              className="w-full min-[420px]:w-auto"
              onClick={() => {
                onClose()
                onEnquire(car)
              }}
            >
              Enquire About This Car
            </Button>
            <Button
              to="/contact"
              variant="outline"
              className="w-full min-[420px]:w-auto"
              onClick={onClose}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  )
}
