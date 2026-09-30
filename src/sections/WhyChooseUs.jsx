import { ArrowRight } from 'lucide-react'
import { BENEFITS } from '../data/site'

export default function WhyChooseUs() {
  return (
    <section
      id="why"
      aria-labelledby="why-title"
      className="section-y relative isolate overflow-hidden bg-ink text-white"
    >
      <div
        aria-hidden
        className="absolute -right-40 -top-40 -z-10 size-[36rem] rounded-full bg-[radial-gradient(closest-side,rgba(255,90,0,0.16),transparent)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.35] [background-image:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_at_top_left,#000_20%,transparent_70%)]"
      />

      <div className="container-rd grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <div data-reveal>
            <p className="eyebrow eyebrow-dark">Why RD Travel</p>
            <h2 id="why-title" className="h2-section mt-4 text-white">
              Why Travel With <span className="text-brand">RD</span>?
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-white/70 sm:text-lg">
              No complicated booking process. Tell us where you need to go, and we&apos;ll help arrange
              the right car for your journey.
            </p>
            <span aria-hidden className="accent-grow mt-8 block h-[3px] w-24 rounded-full bg-gradient-to-r from-brand to-brand-light" />
            <a href="#book" className="btn btn-primary group mt-8">
              Book a Ride
              <ArrowRight
                size={17}
                aria-hidden
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2 sm:gap-5">
          {BENEFITS.map(({ title, description, icon: Icon }, i) => (
            <li key={title} data-reveal style={{ '--reveal-delay': `${(i % 2) * 90}ms` }}>
              <div className="group h-full rounded-[20px] border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:border-brand/40 hover:bg-white/[0.06] sm:p-7">
                <span className="grid size-12 place-items-center rounded-[14px] bg-brand/15 text-brand-light ring-1 ring-brand/25 transition duration-300 group-hover:bg-brand group-hover:text-white">
                  <Icon size={22} strokeWidth={1.8} aria-hidden />
                </span>
                <h3 className="mt-5 text-lg font-bold text-white">{title}</h3>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-white/65">{description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
