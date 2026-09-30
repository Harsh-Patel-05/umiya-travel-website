import { useRef, useState } from 'react'
import { Mail, MapPin, MessageSquareText, Navigation, Phone, Send, UserRound } from 'lucide-react'
import FormField from '../components/FormField'
import SectionHeading from '../components/SectionHeading'
import WhatsAppIcon from '../components/WhatsAppIcon'
import { COMPANY } from '../data/site'
import { isValidEmail, isValidIndianMobile, normalisePhone, openWhatsApp } from '../utils/whatsapp'

const EMPTY = { cname: '', cmobile: '', cemail: '', cpickup: '', cdestination: '', cmessage: '' }
const ORDER = ['cname', 'cmobile', 'cemail', 'cpickup', 'cdestination', 'cmessage']

function validate(v) {
  const errors = {}
  if (v.cname.trim().length < 2) errors.cname = 'Please enter your name.'
  if (!v.cmobile.trim()) errors.cmobile = 'Please enter your mobile number.'
  else if (!isValidIndianMobile(v.cmobile)) errors.cmobile = 'Please enter a valid 10-digit mobile number.'
  if (v.cemail.trim() && !isValidEmail(v.cemail.trim())) errors.cemail = 'This email doesn’t look right.'
  if (!v.cdestination.trim() && !v.cmessage.trim())
    errors.cmessage = 'Please add your destination or a short message.'
  return errors
}

function buildMessage(v) {
  const lines = [
    'Hello RD Travel,',
    '',
    'I have an enquiry.',
    '',
    `Name: ${v.cname.trim()}`,
    `Mobile: +91 ${normalisePhone(v.cmobile)}`,
  ]
  if (v.cemail.trim()) lines.push(`Email: ${v.cemail.trim()}`)
  if (v.cpickup.trim()) lines.push(`Pickup: ${v.cpickup.trim()}`)
  if (v.cdestination.trim()) lines.push(`Destination: ${v.cdestination.trim()}`)
  if (v.cmessage.trim()) lines.push('', `Message: ${v.cmessage.trim()}`)
  lines.push('', 'Please get back to me. Thank you.')
  return lines.join('\n')
}

const CONTACT_ITEMS = [
  {
    label: 'Phone',
    value: COMPANY.phoneRaw,
    href: COMPANY.phoneHref,
    icon: Phone,
  },
  {
    label: 'WhatsApp',
    value: COMPANY.phoneRaw,
    href: COMPANY.whatsappHref,
    icon: WhatsAppIcon,
    external: true,
  },
  {
    label: 'Email',
    value: COMPANY.email,
    href: COMPANY.emailHref,
    icon: Mail,
  },
]

export default function ContactSection() {
  const [values, setValues] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [sent, setSent] = useState(false)
  const formRef = useRef(null)

  const onChange = (e) => {
    const next = { ...values, [e.target.name]: e.target.value }
    setValues(next)
    setSent(false)
    if (submitted) setErrors(validate(next))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    const found = validate(values)
    setErrors(found)
    const first = ORDER.find((key) => found[key])
    if (first) {
      formRef.current?.elements[first]?.focus()
      return
    }
    openWhatsApp(buildMessage(values))
    setSent(true)
  }

  const field = (id) => ({ value: values[id], onChange, error: errors[id] })

  return (
    <section id="contact" aria-labelledby="contact-title" className="section-y">
      <div className="container-rd grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
        <div>
          <SectionHeading
            id="contact-title"
            eyebrow="Contact"
            title="Let's Plan Your Journey"
            description="Call, WhatsApp or send us your trip details. We'll get back to you with the car options and fare."
          />

          <div data-reveal className="mt-10 space-y-3">
            <a
              href={COMPANY.directionsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex gap-4 rounded-2xl border border-line bg-white p-5 transition duration-300 hover:border-brand/40 hover:shadow-card"
            >
              <span className="icon-tile shrink-0 group-hover:bg-brand group-hover:text-white">
                <MapPin size={20} aria-hidden />
              </span>
              <span className="min-w-0">
                <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                  Address
                </span>
                <span className="mt-1 block font-display text-base font-bold text-ink">{COMPANY.name}</span>
                <address className="mt-1 text-[0.9375rem] not-italic leading-relaxed text-graphite">
                  {COMPANY.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              </span>
            </a>

            {CONTACT_ITEMS.map(({ label, value, href, icon: Icon, external }) => (
              <a
                key={label}
                href={href}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="group flex items-center gap-4 rounded-2xl border border-line bg-white p-4 pr-5 transition duration-300 hover:border-brand/40 hover:shadow-card sm:p-5"
              >
                <span className="icon-tile shrink-0 group-hover:bg-brand group-hover:text-white">
                  <Icon size={20} aria-hidden />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                    {label}
                  </span>
                  <span className="mt-0.5 block break-words font-display text-base font-bold text-ink">
                    {value}
                  </span>
                </span>
              </a>
            ))}

            <a
              href={COMPANY.directionsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark mt-3 w-full sm:w-auto"
            >
              <Navigation size={17} aria-hidden />
              Get Directions
            </a>
          </div>
        </div>

        <div data-reveal style={{ '--reveal-delay': '120ms' }}>
          <div className="card rounded-[28px] p-5 sm:p-8 lg:p-10">
            <h3 className="text-xl font-extrabold text-ink sm:text-2xl">Send an enquiry</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Your enquiry opens in WhatsApp so it reaches us directly. Fields marked optional can be
              left blank.
            </p>

            <form ref={formRef} onSubmit={onSubmit} noValidate className="mt-7 grid gap-5 sm:grid-cols-2">
              <FormField
                id="cname"
                label="Name"
                icon={UserRound}
                placeholder="Your name"
                autoComplete="name"
                {...field('cname')}
              />
              <FormField
                id="cmobile"
                label="Mobile Number"
                icon={Phone}
                type="tel"
                inputMode="tel"
                placeholder="10-digit mobile number"
                autoComplete="tel-national"
                maxLength={16}
                {...field('cmobile')}
              />
              <FormField
                id="cemail"
                label="Email"
                optional
                icon={Mail}
                type="email"
                inputMode="email"
                placeholder="you@example.com"
                autoComplete="email"
                className="sm:col-span-2"
                {...field('cemail')}
              />
              <FormField
                id="cpickup"
                label="Pickup Location"
                optional
                icon={MapPin}
                placeholder="Where should we pick you up?"
                {...field('cpickup')}
              />
              <FormField
                id="cdestination"
                label="Destination"
                icon={Navigation}
                placeholder="Where are you going?"
                {...field('cdestination')}
              />
              <FormField
                id="cmessage"
                label="Message"
                as="textarea"
                rows={4}
                placeholder="Travel date, number of people, luggage or anything else we should know."
                className="sm:col-span-2"
                {...field('cmessage')}
              />

              <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
                <button type="submit" className="btn btn-primary btn-lg w-full sm:w-auto">
                  <Send size={17} aria-hidden />
                  Send Enquiry
                </button>
                <p className="flex items-center gap-2 text-xs text-muted">
                  <WhatsAppIcon size={15} className="text-[#1f9d55]" />
                  Opens WhatsApp with your message ready
                </p>
              </div>

              <div aria-live="polite" className="text-sm sm:col-span-2">
                {sent ? (
                  <p className="flex items-start gap-2 rounded-xl bg-mist p-3.5 text-graphite">
                    <MessageSquareText size={18} className="mt-0.5 shrink-0 text-brand-dark" aria-hidden />
                    <span>
                      WhatsApp should now be open with your enquiry. Tap send to share it with us. If it
                      didn&apos;t open, email us at{' '}
                      <a href={COMPANY.emailHref} className="font-semibold text-brand-ink hover:underline">
                        {COMPANY.email}
                      </a>
                      .
                    </span>
                  </p>
                ) : null}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
