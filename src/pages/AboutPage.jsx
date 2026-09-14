import { COMPANY } from '../data/company'
import PageHero from '../components/ui/PageHero'
import AboutSection from '../components/sections/AboutSection'
import HowItWorks from '../components/sections/HowItWorks'
import WhyChooseUs from '../components/sections/WhyChooseUs'

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Umiya Travel"
        title="Built on comfort, trust, and better travel"
        description={`${COMPANY.slogan} — more than a line, it reflects how we approach every journey.`}
      />
      <AboutSection />
      <HowItWorks />
      <WhyChooseUs />
    </>
  )
}
