import {
  Briefcase,
  CarFront,
  Heart,
  Map,
  Plane,
  RefreshCcw,
  Route,
  Users,
} from 'lucide-react'
import { services } from '../../data/services'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import SectionHeading from '../ui/SectionHeading'

const icons = {
  local: CarFront,
  outstation: Map,
  airport: Plane,
  corporate: Briefcase,
  family: Users,
  chauffeur: CarFront,
  wedding: Heart,
  flexible: RefreshCcw,
}

export default function ServicesSection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="services" className="section-pad bg-white">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Our Services"
          title="Travel support for every need"
          description="From local city rides to outstation adventures — Umiya Travel offers simple, clear travel options."
        />

        <div
          ref={ref}
          className={`grid gap-4 sm:grid-cols-2 lg:grid-cols-4 ${
            isVisible ? 'reveal is-visible' : 'reveal'
          }`}
        >
          {services.map((service) => {
            const Icon = icons[service.id] || Route
            return (
              <article
                key={service.id}
                className="group rounded-xl border border-line bg-stone/40 p-5 transition duration-300 hover:-translate-y-1 hover:border-brand/30 hover:bg-white hover:shadow-soft"
              >
                <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand text-white transition duration-300 group-hover:scale-105">
                  <Icon size={20} />
                </span>
                <h3 className="font-display text-base font-semibold text-ink">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{service.description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
