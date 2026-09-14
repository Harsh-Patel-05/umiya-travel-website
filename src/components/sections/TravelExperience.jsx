import { useScrollReveal } from '../../hooks/useScrollReveal'
import { COMPANY } from '../../data/company'
import Button from '../ui/Button'

export default function TravelExperience() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section className="relative isolate overflow-hidden py-16 sm:py-24 md:py-28">
      <img
        src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=2000&q=80"
        alt="Scenic highway travel experience"
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-ink/75" />

      <div
        ref={ref}
        className={`relative container-shell max-w-3xl text-center ${
          isVisible ? 'reveal is-visible' : 'reveal'
        }`}
      >
        <p className="text-[0.7rem] font-bold tracking-[0.22em] text-brand uppercase sm:text-xs">
          Travel Experience
        </p>
        <h2 className="mt-3 text-[1.75rem] leading-tight text-white sm:mt-4 sm:text-4xl md:text-5xl">
          Every Road Has A Story. Let Umiya Travel Take You There.
        </h2>
        <p className="mx-auto mt-3 max-w-2xl font-display text-base text-brand-muted sm:mt-4 sm:text-xl">
          {COMPANY.slogan}
        </p>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-white/75 sm:mt-4 sm:text-lg">
          From quick city rides to long road trips — travel should feel comfortable with Umiya Travel.
          Share your requirements and we will help you plan.
        </p>
        <Button to="/contact" className="mt-7 w-full min-[420px]:mt-8 min-[420px]:w-auto" size="lg">
          Start Your Journey
        </Button>
      </div>
    </section>
  )
}
