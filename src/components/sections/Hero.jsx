import { Check } from 'lucide-react'
import { COMPANY } from '../../data/company'
import Button from '../ui/Button'

const trustItems = [
  '24/7 Customer Service',
  'Roadside Assistance',
  'Wide Range of Cars',
  'Professional Chauffeur Service',
]

export default function Hero() {
  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1485291571150-772bcfc10da5?auto=format&fit=crop&w=2000&q=80"
        alt="Premium car on a scenic highway journey"
        className="absolute inset-0 h-full w-full object-cover object-[70%_center] sm:object-center"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/92 via-ink/72 to-ink/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-transparent to-ink/30" />

      <div className="relative container-shell flex min-h-[100svh] flex-col justify-end pb-0 pt-24 sm:justify-center sm:pb-24 sm:pt-32">
        <div className="max-w-2xl pb-8 sm:pb-0">
          <p className="mb-3 text-[0.7rem] font-bold tracking-[0.24em] text-brand uppercase sm:text-sm sm:tracking-[0.28em]">
            Exclusive Car Rental
          </p>
          <h1 className="text-[2rem] leading-[1.1] text-white min-[400px]:text-4xl sm:text-5xl md:text-6xl lg:text-[4.1rem]">
            Your Journey,{' '}
            <span className="text-brand">Our Responsibility.</span>
          </h1>
          <p className="mt-3 font-devanagari text-base leading-relaxed text-brand-muted sm:mt-4 sm:text-xl">
            {COMPANY.slogan}
          </p>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/75 sm:mt-4 sm:text-lg">
            Whether you need a local ride, airport transfer, family trip, or outstation adventure
            — Umiya Travel offers comfortable and reliable car rental.
          </p>
          <div className="mt-7 flex w-full flex-col gap-3 min-[420px]:flex-row min-[420px]:flex-wrap sm:mt-8">
            <Button to="/cars" size="lg" className="w-full min-[420px]:w-auto">
              Explore Our Cars
            </Button>
            <Button to="/contact" variant="secondary" size="lg" className="w-full min-[420px]:w-auto">
              Contact Us
            </Button>
          </div>
        </div>

        <div className="mt-auto border-t border-white/15 bg-ink/55 backdrop-blur-md sm:mt-14">
          <ul className="grid grid-cols-1 gap-px bg-white/10 min-[420px]:grid-cols-2 md:grid-cols-4">
            {trustItems.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2.5 bg-ink/80 px-4 py-3.5 text-sm text-white/90 sm:px-5 sm:py-5"
              >
                <Check size={16} className="shrink-0 text-brand" aria-hidden />
                <span className="leading-snug">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
