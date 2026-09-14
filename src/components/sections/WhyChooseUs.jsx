import {
  Car,
  Headphones,
  ShieldCheck,
  Smile,
  Users,
  Wrench,
  Waypoints,
  BadgeCheck,
} from 'lucide-react'
import { whyChoose } from '../../data/content'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import SectionHeading from '../ui/SectionHeading'

const icons = [Headphones, Wrench, Car, Users, ShieldCheck, Smile, BadgeCheck, Waypoints]

export default function WhyChooseUs() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section className="section-pad dark-surface">
      <div className="container-shell">
        <SectionHeading
          light
          eyebrow="Why Umiya Travel"
          title="Why Choose Umiya Travel?"
          description="Comfort, support, and reliable cars — that is what we build trust on."
        />

        <div
          ref={ref}
          className={`grid gap-4 sm:grid-cols-2 lg:grid-cols-4 ${
            isVisible ? 'reveal is-visible' : 'reveal'
          }`}
        >
          {whyChoose.map((item, index) => {
            const Icon = icons[index % icons.length]
            return (
              <article
                key={item.title}
                className="rounded-xl border border-white/10 bg-white/5 p-5 transition duration-300 hover:border-brand/50 hover:bg-white/10"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand text-white">
                  <Icon size={20} />
                </span>
                <h3 className="mt-4 font-display text-base font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{item.description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
