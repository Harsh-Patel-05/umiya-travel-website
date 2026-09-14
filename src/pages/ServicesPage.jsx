import PageHero from '../components/ui/PageHero'
import ServicesSection from '../components/sections/ServicesSection'
import WhyChooseUs from '../components/sections/WhyChooseUs'
import HowItWorks from '../components/sections/HowItWorks'

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Simple travel solutions for every kind of trip"
        description="Local, outstation, airport, family, corporate, or wedding — tell us what you need and we will plan with you."
      />
      <ServicesSection />
      <WhyChooseUs />
      <HowItWorks />
    </>
  )
}
