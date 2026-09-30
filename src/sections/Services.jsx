import { Phone } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import ServiceCard from '../components/ServiceCard'
import { COMPANY, SERVICES } from '../data/site'

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="section-y">
      <div className="container-rd">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="services-title"
            eyebrow="Our services"
            title="Travel Made Simple."
            description="Whether it's a short city ride or a journey beyond Ahmedabad, we'll help you travel comfortably."
          />
          <p data-reveal className="text-sm text-muted lg:max-w-[16rem] lg:pb-2 lg:text-right">
            Not sure which one you need?{' '}
            <a
              href={COMPANY.phoneHref}
              className="inline-flex items-center gap-1 font-semibold text-brand-ink underline-offset-4 hover:underline"
            >
              <Phone size={14} aria-hidden />
              Give us a call
            </a>
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:mt-14 lg:grid-cols-4">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.title} index={i} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}
