import Hero from '../components/sections/Hero'
import AboutSection from '../components/sections/AboutSection'
import ServicesSection from '../components/sections/ServicesSection'
import WhyChooseUs from '../components/sections/WhyChooseUs'
import FeaturedCar from '../components/sections/FeaturedCar'
import TravelExperience from '../components/sections/TravelExperience'
import Testimonials from '../components/sections/Testimonials'
import Button from '../components/ui/Button'
import SectionHeading from '../components/ui/SectionHeading'

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUs />
      <FeaturedCar />
      <TravelExperience />
      <Testimonials />

      <section className="section-pad bg-white">
        <div className="container-shell text-center">
          <SectionHeading
            title="Planning your next trip?"
            description="Explore cars, browse services, or send an enquiry — the Umiya Travel team is here to help."
          />
          <div className="flex flex-col items-stretch justify-center gap-3 min-[420px]:flex-row min-[420px]:flex-wrap min-[420px]:items-center">
            <Button to="/cars" className="w-full min-[420px]:w-auto">
              Explore Cars
            </Button>
            <Button to="/contact" variant="outline" className="w-full min-[420px]:w-auto">
              Contact Umiya Travel
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
