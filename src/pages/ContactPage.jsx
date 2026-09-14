import { COMPANY } from '../data/company'
import PageHero from '../components/ui/PageHero'
import Contact from '../components/sections/Contact'
import FAQ from '../components/sections/FAQ'

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in touch with Umiya Travel"
        description={`Call or WhatsApp ${COMPANY.phone}, or send an enquiry — our team will reply soon.`}
      />
      <Contact />
      <FAQ />
    </>
  )
}
