import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { testimonials } from '../../data/content'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import SectionHeading from '../ui/SectionHeading'

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const { ref, isVisible } = useScrollReveal()

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % testimonials.length)
    }, 5500)
    return () => clearInterval(timer)
  }, [])

  const goPrev = () =>
    setIndex((current) => (current - 1 + testimonials.length) % testimonials.length)
  const goNext = () => setIndex((current) => (current + 1) % testimonials.length)
  const active = testimonials[index]

  return (
    <section className="section-pad warm-surface">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Customer Experience"
          title="What Our Customers Say"
          description="Sample demo reviews — replace with real customer feedback when available."
        />

        <div
          ref={ref}
          className={`relative mx-auto max-w-3xl ${isVisible ? 'reveal is-visible' : 'reveal'}`}
        >
          <article className="rounded-2xl border border-line bg-white p-6 shadow-soft sm:p-10">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h3 className="font-display text-lg font-semibold text-ink">{active.name}</h3>
                <p className="text-sm text-muted">
                  {active.location} · {active.trip}
                </p>
              </div>
              <div className="flex gap-1 text-brand" aria-label={`${active.rating} out of 5 stars`}>
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star
                    key={starIndex}
                    size={16}
                    fill={starIndex < active.rating ? 'currentColor' : 'none'}
                    className={starIndex < active.rating ? '' : 'text-line'}
                  />
                ))}
              </div>
            </div>

            <blockquote className="mt-6 text-xl leading-snug text-ink sm:text-2xl">
              “{active.review}”
            </blockquote>
            <p className="mt-4 text-xs tracking-wide text-muted/80 uppercase">
              Demo / sample review content
            </p>
          </article>

          <div className="mt-6 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={goPrev}
              className="rounded-full border border-line bg-white p-2 text-ink transition hover:border-brand hover:text-brand"
              aria-label="Previous review"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((item, dotIndex) => (
                <button
                  key={item.id}
                  type="button"
                  aria-label={`Go to review ${dotIndex + 1}`}
                  onClick={() => setIndex(dotIndex)}
                  className={`h-2.5 rounded-full transition-all ${
                    dotIndex === index ? 'w-6 bg-brand' : 'w-2.5 bg-line'
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={goNext}
              className="rounded-full border border-line bg-white p-2 text-ink transition hover:border-brand hover:text-brand"
              aria-label="Next review"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
