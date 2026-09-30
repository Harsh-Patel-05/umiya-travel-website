import SectionHeading from '../components/SectionHeading'
import { STEPS } from '../data/site'

export default function Process() {
  return (
    <section aria-labelledby="process-title" className="section-y bg-white">
      <div className="container-rd">
        <SectionHeading
          id="process-title"
          eyebrow="How it works"
          title="Booking a Ride is Easy"
          description="Three simple steps, over a quick call or on WhatsApp."
          align="center"
        />

        <div data-reveal className="relative mx-auto mt-14 max-w-5xl lg:mt-16">
          <div
            aria-hidden
            className="accent-grow absolute left-[16.66%] right-[16.66%] top-[2.1rem] hidden h-2 items-center rounded-full bg-ink md:flex"
          >
            <span className="road-line animate-road mx-2 h-[2px] w-full opacity-90" />
          </div>
          <div
            aria-hidden
            className="absolute bottom-10 left-[2.125rem] top-10 flex w-2 justify-center rounded-full bg-ink md:hidden"
          >
            <span className="road-line-vertical h-full w-[2px] opacity-90" />
          </div>

          <ol className="relative grid gap-10 md:grid-cols-3 md:gap-8">
            {STEPS.map((step, i) => {
              const last = i === STEPS.length - 1
              return (
                <li key={step.number} className="flex gap-5 md:flex-col md:items-center md:text-center">
                  <span
                    className={`relative z-10 grid size-[4.25rem] shrink-0 place-items-center rounded-full font-display text-xl font-extrabold ring-8 ring-white ${
                      last
                        ? 'bg-brand-strong text-white shadow-glow'
                        : 'border-2 border-brand/35 bg-white text-brand-dark'
                    }`}
                  >
                    {step.number}
                  </span>
                  <div className="pt-2 md:pt-5">
                    <h3 className="text-lg font-bold text-ink sm:text-xl">{step.title}</h3>
                    <p className="mt-2 max-w-xs text-[0.9375rem] leading-relaxed text-muted md:mx-auto">
                      {step.description}
                    </p>
                  </div>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
