import { useCallback, useState } from 'react'
import FloatingActions from './components/FloatingActions'
import Footer from './components/Footer'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import useReveal from './hooks/useReveal'
import About from './sections/About'
import BookingCTA from './sections/BookingCTA'
import Cars from './sections/Cars'
import ContactSection from './sections/ContactSection'
import Hero from './sections/Hero'
import MapSection from './sections/MapSection'
import Process from './sections/Process'
import QuickBooking from './sections/QuickBooking'
import Services from './sections/Services'
import WhyChooseUs from './sections/WhyChooseUs'

const INTRO_KEY = 'rd-intro-seen'

function introSeen() {
  try {
    return sessionStorage.getItem(INTRO_KEY) === '1'
  } catch {
    return false
  }
}

export default function App() {
  const [showLoader, setShowLoader] = useState(() => !introSeen())
  const [ready, setReady] = useState(() => introSeen())

  useReveal()

  const handleReveal = useCallback(() => {
    setReady(true)
    try {
      sessionStorage.setItem(INTRO_KEY, '1')
    } catch {
      /* storage blocked: intro will simply play again next visit */
    }
  }, [])

  const handleDone = useCallback(() => setShowLoader(false), [])

  return (
    <>
      {showLoader ? <Loader onReveal={handleReveal} onDone={handleDone} /> : null}

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-ink focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>

      <Navbar />
      <main id="main">
        <Hero ready={ready} />
        <QuickBooking />
        <Services />
        <Cars />
        <WhyChooseUs />
        <About />
        <Process />
        <BookingCTA />
        <ContactSection />
        <MapSection />
      </main>
      <Footer />
      <FloatingActions />
    </>
  )
}
