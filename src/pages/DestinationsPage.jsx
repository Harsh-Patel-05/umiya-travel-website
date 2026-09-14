import PageHero from '../components/ui/PageHero'
import DestinationsSection from '../components/sections/DestinationsSection'
import TravelExperience from '../components/sections/TravelExperience'

export default function DestinationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Destinations"
        title="Popular destinations, familiar roads"
        description="Ahmedabad to Udaipur, Mount Abu, Jaipur, Mumbai, Goa — inspiration for your next journey. Not a booking portal."
        image="https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1800&q=80"
      />
      <DestinationsSection />
      <TravelExperience />
    </>
  )
}
