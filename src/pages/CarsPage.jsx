import PageHero from '../components/ui/PageHero'
import CarsSection from '../components/sections/CarsSection'
import FeaturedCar from '../components/sections/FeaturedCar'

export default function CarsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Cars"
        title="Choose the right car for your journey"
        description="This is a display showcase. When you find a vehicle you like, click Enquire About This Car to get in touch."
        image="https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1800&q=80"
      />
      <CarsSection />
      <FeaturedCar />
    </>
  )
}
