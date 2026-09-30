import { useEffect, useRef, useState } from 'react'
import { CalendarDays, CarFront, Clock, MapPin, Navigation, Phone, Send, UserRound } from 'lucide-react'
import FormField from '../components/FormField'
import WhatsAppIcon from '../components/WhatsAppIcon'
import { CAR_PREFERENCES, COMPANY } from '../data/site'
import {
  formatDate,
  formatTime,
  isValidIndianMobile,
  normalisePhone,
  openWhatsApp,
  todayISO,
} from '../utils/whatsapp'

const EMPTY = { pickup: '', drop: '', date: '', time: '', car: '', name: '', mobile: '' }
const ORDER = ['pickup', 'drop', 'date', 'time', 'car', 'name', 'mobile']

function validate(values) {
  const errors = {}
  if (values.pickup.trim().length < 3) errors.pickup = 'Please enter your pickup location.'
  if (values.drop.trim().length < 3) errors.drop = 'Please enter where you want to go.'
  if (!values.date) errors.date = 'Please choose a travel date.'
  else if (values.date < todayISO()) errors.date = 'This date has already passed.'
  if (!values.time) errors.time = 'Please choose a pickup time.'
  else if (values.date === todayISO()) {
    const now = new Date()
    const [h, m] = values.time.split(':').map(Number)
    if (h * 60 + m < now.getHours() * 60 + now.getMinutes()) errors.time = 'Please pick a time later today.'
  }
  if (!values.car) errors.car = 'Please select a car type.'
  if (values.name.trim().length < 2) errors.name = 'Please enter your name.'
  if (!values.mobile.trim()) errors.mobile = 'Please enter your mobile number.'
  else if (!isValidIndianMobile(values.mobile)) errors.mobile = 'Please enter a valid 10-digit mobile number.'
  return errors
}

function buildMessage(v) {
  return [
    'Hello RD Travel,',
    '',
    'I would like to enquire about a car booking.',
    '',
    `Name: ${v.name.trim()}`,
    `Mobile: +91 ${normalisePhone(v.mobile)}`,
    `Pickup: ${v.pickup.trim()}`,
    `Drop: ${v.drop.trim()}`,
    `Date: ${formatDate(v.date)}`,
    `Time: ${formatTime(v.time)}`,
    `Car Preference: ${v.car}`,
    '',
    'Please share availability and fare.',
  ].join('\n')
}

export default function QuickBooking() {
  const [values, setValues] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [sent, setSent] = useState(false)
  const formRef = useRef(null)

  useEffect(() => {
    const onSelectCar = (e) => {
      setValues((v) => ({ ...v, car: e.detail }))
      setErrors((err) => ({ ...err, car: undefined }))
      window.setTimeout(() => formRef.current?.elements.pickup?.focus({ preventScroll: true }), 600)
    }
    window.addEventListener('rd:select-car', onSelectCar)
    return () => window.removeEventListener('rd:select-car', onSelectCar)
  }, [])

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
    <section id="book" aria-labelledby="book-title" className="relative z-10 -mt-14 sm:-mt-16 lg:-mt-32">
      <div className="container-rd">
        <div className="card rounded-[28px] border-line/70 p-5 shadow-float sm:p-7 lg:p-9">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between md:gap-8">
            <div>
              <p className="eyebrow">Quick booking</p>
              <h2 id="book-title" className="mt-3 text-2xl font-extrabold leading-tight text-ink sm:text-[1.75rem]">
                Where would you like to go?
              </h2>
            </div>
            <p className="flex max-w-sm items-start gap-2 text-sm leading-relaxed text-muted md:text-right">
              <WhatsAppIcon size={18} className="mt-0.5 shrink-0 text-[#1f9d55] md:order-last" />
              Fill in your trip details and we&apos;ll reply on WhatsApp with availability and fare.
            </p>
          </div>

          <form ref={formRef} onSubmit={onSubmit} noValidate className="mt-7">
            <div className="grid grid-cols-1 gap-x-4 gap-y-5 sm:grid-cols-2 lg:grid-cols-4">
              <FormField
                id="pickup"
                label="Pickup Location"
                icon={MapPin}
                placeholder="e.g. Ghatlodiya, Ahmedabad"
                autoComplete="street-address"
                {...field('pickup')}
              />
              <FormField
                id="drop"
                label="Drop Location"
                icon={Navigation}
                placeholder="e.g. Ahmedabad Airport"
                autoComplete="off"
                {...field('drop')}
              />
              <FormField
                id="date"
                label="Travel Date"
                icon={CalendarDays}
                type="date"
                min={todayISO()}
                {...field('date')}
              />
              <FormField id="time" label="Pickup Time" icon={Clock} type="time" {...field('time')} />
              <FormField id="car" label="Car Preference" icon={CarFront} as="select" {...field('car')}>
                <option value="" disabled>
                  Select a car type
                </option>
                {CAR_PREFERENCES.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </FormField>
              <FormField
                id="name"
                label="Your Name"
                icon={UserRound}
                placeholder="Full name"
                autoComplete="name"
                {...field('name')}
              />
              <FormField
                id="mobile"
                label="Mobile Number"
                icon={Phone}
                type="tel"
                inputMode="tel"
                placeholder="10-digit mobile number"
                autoComplete="tel-national"
                maxLength={16}
                {...field('mobile')}
              />
              <div className="flex flex-col">
                <span aria-hidden className="field-label invisible hidden sm:block">
                  &nbsp;
                </span>
                <button type="submit" className="btn btn-primary w-full min-h-12">
                  <Send size={17} aria-hidden />
                  Request a Ride
                </button>
              </div>
            </div>

            <div aria-live="polite" className="mt-5 min-h-5 text-sm">
              {sent ? (
                <p className="text-graphite">
                  WhatsApp should now be open with your trip details. Just tap send and we&apos;ll get
                  back to you. If it didn&apos;t open, call us on{' '}
                  <a href={COMPANY.phoneHref} className="font-semibold text-brand-ink underline-offset-2 hover:underline">
                    {COMPANY.phoneDisplay}
                  </a>
                  .
                </p>
              ) : (
                <p className="text-muted">No advance payment needed to enquire.</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
