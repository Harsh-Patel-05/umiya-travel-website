import PageHero from '../components/ui/PageHero'
import Gallery from '../components/sections/Gallery'
import Testimonials from '../components/sections/Testimonials'

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Umiya Travel Gallery"
        description="Cars, roads, family trips, and destinations — a glimpse of comfortable travel."
        image="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1800&q=80"
      />
      <Gallery />
      <Testimonials />
    </>
  )
}
