import { ArrowRight, HeartHandshake, ShieldCheck, Sparkles, ThumbsUp } from 'lucide-react'
import { COMPANY } from '../../data/company'
import { aboutFeatures } from '../../data/content'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import Button from '../ui/Button'
import SectionHeading from '../ui/SectionHeading'

const icons = [Sparkles, ThumbsUp, ShieldCheck, HeartHandshake]

export default function AboutSection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section className="section-pad warm-surface">
      <div
        ref={ref}
        className={`container-shell grid items-center gap-12 lg:grid-cols-2 lg:gap-16 ${
          isVisible ? 'reveal is-visible' : 'reveal'
        }`}
      >
        <div className="overflow-hidden rounded-2xl shadow-soft">
          <img
            src="https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1200&q=80"
            alt="Comfortable Umiya Travel vehicle"
            className="h-full min-h-[360px] w-full object-cover sm:min-h-[460px]"
            loading="lazy"
          />
        </div>

        <div>
          <SectionHeading
            align="left"
            eyebrow="About Umiya Travel"
            title="Travel Better With Umiya Travel"
            description="Umiya Travel’s goal is simple: make every journey comfortable and reliable. City rides, airport transfers, family trips, business travel, or outstation adventures — we work to keep your travel smooth."
            className="mb-6"
          />

          <blockquote className="mb-6 rounded-xl border border-brand/20 bg-brand-soft px-4 py-3">
            <p className="font-display text-base font-semibold text-brand-deep sm:text-lg">
              {COMPANY.slogan}
            </p>
            <p className="mt-1 text-sm text-muted">{COMPANY.sloganMeaning}</p>
          </blockquote>

          <div className="grid gap-4 sm:grid-cols-2">
            {aboutFeatures.map((item, index) => {
              const Icon = icons[index % icons.length]
              return (
                <div key={item.title} className="flex gap-3">
                  <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand">
                    <Icon size={18} />
                  </span>
                  <div>
                    <h3 className="font-display text-base font-semibold text-ink">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{item.text}</p>
                  </div>
                </div>
              )
            })}
          </div>

          <Button to="/contact" className="mt-8">
            Enquire Now
            <ArrowRight size={16} />
          </Button>
        </div>
      </div>
    </section>
  )
}
