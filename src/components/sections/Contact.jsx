import { useState } from 'react'
import { CheckCircle2, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { COMPANY } from '../../data/company'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { readEnquiryPrefill } from '../../utils/enquiry'
import { sendEnquiryEmail } from '../../utils/sendEnquiry'
import Button from '../ui/Button'
import SectionHeading from '../ui/SectionHeading'

const initialForm = {
  name: '',
  phone: '',
  email: '',
  travelDate: '',
  message: '',
}

export default function Contact() {
  const [form, setForm] = useState(() => {
    const prefill = readEnquiryPrefill()
    if (!prefill) return initialForm
    const parts = [prefill.requirement, prefill.vehicle ? `Vehicle: ${prefill.vehicle}` : '']
      .filter(Boolean)
      .join('\n')
    return {
      ...initialForm,
      message: parts,
    }
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const { ref, isVisible } = useScrollReveal()

  const updateField = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
    setErrors((current) => ({ ...current, [name]: '' }))
    setSubmitError('')
  }

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Please enter your full name.'
    if (!/^[6-9]\d{9}$/.test(form.phone.replace(/\s+/g, ''))) {
      next.phone = 'Enter a valid 10-digit mobile number.'
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = 'Enter a valid email address.'
    }
    if (!form.message.trim() || form.message.trim().length < 10) {
      next.message = 'Please share a short message (at least 10 characters).'
    }
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!validate() || submitting) return

    setSubmitting(true)
    setSubmitError('')

    try {
      await sendEnquiryEmail(form)
      setSubmitted(true)
      setForm(initialForm)
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : 'Unable to send enquiry right now. Please try again or WhatsApp us.',
      )
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section-pad bg-white">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Contact"
          title="Plan Your Next Journey With Umiya Travel"
          description="Call, WhatsApp, or fill the form — our team will contact you shortly."
        />

        <div
          ref={ref}
          className={`grid gap-8 lg:grid-cols-[0.9fr_1.1fr] ${
            isVisible ? 'reveal is-visible' : 'reveal'
          }`}
        >
          <aside className="rounded-2xl dark-surface p-6 text-white sm:p-8">
            <h3 className="font-display text-2xl font-semibold text-white sm:text-3xl">
              Get in touch
            </h3>
            <p className="mt-2 text-sm text-white/70">
              Prefer a quick conversation? Reach Umiya Travel directly.
            </p>

            <ul className="mt-8 space-y-5 text-sm">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 shrink-0 text-brand" size={18} />
                <div>
                  <p className="font-semibold">Address</p>
                  <a
                    href={COMPANY.mapsHref}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 block text-white/75 hover:text-white"
                  >
                    {COMPANY.address}
                  </a>
                </div>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 shrink-0 text-brand" size={18} />
                <div>
                  <p className="font-semibold">Phone</p>
                  <a href={COMPANY.phoneHref} className="mt-1 block text-white/75 hover:text-white">
                    {COMPANY.phone}
                  </a>
                </div>
              </li>
              <li className="flex gap-3">
                <MessageCircle className="mt-0.5 shrink-0 text-brand" size={18} />
                <div>
                  <p className="font-semibold">WhatsApp</p>
                  <a
                    href={COMPANY.whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 block text-white/75 hover:text-white"
                  >
                    {COMPANY.whatsapp}
                  </a>
                </div>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 shrink-0 text-brand" size={18} />
                <div>
                  <p className="font-semibold">Email</p>
                  <a
                    href={COMPANY.emailHref}
                    className="mt-1 block break-all text-white/75 hover:text-white"
                  >
                    {COMPANY.email}
                  </a>
                </div>
              </li>
            </ul>

            <div className="mt-8 flex flex-col gap-2 min-[420px]:flex-row min-[420px]:flex-wrap">
              <Button href={COMPANY.phoneHref} size="sm" className="w-full min-[420px]:w-auto">
                Call Now
              </Button>
              <Button
                href={COMPANY.whatsappHref}
                variant="secondary"
                size="sm"
                className="w-full min-[420px]:w-auto"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </Button>
              <Button
                href={COMPANY.mapsHref}
                variant="secondary"
                size="sm"
                className="w-full min-[420px]:w-auto"
                target="_blank"
                rel="noreferrer"
              >
                Get Directions
              </Button>
            </div>
          </aside>

          <div className="rounded-2xl border border-line bg-stone/40 p-6 sm:p-8">
            {submitted ? (
              <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                <CheckCircle2 size={48} className="text-brand" />
                <h3 className="mt-4 font-display text-2xl font-semibold text-ink sm:text-3xl">
                  Thank you!
                </h3>
                <p className="mt-2 max-w-md text-muted">
                  Thank you! Our Umiya Travel team will contact you shortly.
                </p>
                <Button className="mt-6" variant="outline" onClick={() => setSubmitted(false)}>
                  Send Another Enquiry
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <h3 className="font-display text-2xl font-semibold text-ink">Business Enquiry</h3>

                <div className="grid gap-4 sm:grid-cols-2">
                  <Field
                    label="Full Name"
                    name="name"
                    value={form.name}
                    onChange={updateField}
                    error={errors.name}
                    placeholder="Your full name"
                  />
                  <Field
                    label="Mobile Number"
                    name="phone"
                    value={form.phone}
                    onChange={updateField}
                    error={errors.phone}
                    placeholder="10-digit mobile"
                  />
                </div>

                <Field
                  label="Email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={updateField}
                  error={errors.email}
                  placeholder="you@example.com"
                />

                <Field
                  label="Travel Date"
                  name="travelDate"
                  type="date"
                  value={form.travelDate}
                  onChange={updateField}
                />

                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-ink">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={updateField}
                    placeholder="Share destination, passengers and any special requests"
                    className="w-full rounded-lg border border-line bg-white px-4 py-3 text-base text-ink outline-none transition focus:border-brand"
                  />
                  {errors.message ? <p className="mt-1 text-xs text-red-600">{errors.message}</p> : null}
                </div>

                {submitError ? (
                  <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                    {submitError}
                  </p>
                ) : null}

                <Button type="submit" className="w-full sm:w-auto" disabled={submitting}>
                  {submitting ? 'Sending...' : 'Send Enquiry'}
                </Button>
              </form>
            )}
          </div>
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl border border-line shadow-soft sm:mt-10">
          <iframe
            title="Umiya Travel location — Vasukanan Tower, Ghatlodia, Ahmedabad"
            src={COMPANY.mapsEmbed}
            className="h-[260px] w-full border-0 min-[480px]:h-[320px] sm:h-[420px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  )
}

function Field({ label, name, type = 'text', value, onChange, error, placeholder }) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-semibold text-ink">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-lg border border-line bg-white px-4 py-3 text-base text-ink outline-none transition focus:border-brand"
      />
      {error ? <p className="mt-1 text-xs text-red-600">{error}</p> : null}
    </div>
  )
}
