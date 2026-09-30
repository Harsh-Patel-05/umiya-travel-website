import { ArrowRight, MapPin, Phone } from 'lucide-react'
import { COMPANY, HERO_TRUST } from '../data/site'

export default function Hero({ ready }) {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className={`relative isolate overflow-hidden bg-ink text-white ${ready ? 'is-ready' : ''}`}
    >
      <img
        src="/images/hero-highway.webp"
        srcSet="/images/hero-highway-640.webp 640w, /images/hero-highway.webp 1024w"
        sizes="100vw"
        width="1024"
        height="576"
        alt="White sedan driving on an open highway outside Ahmedabad at sunset"
        fetchPriority="high"
        decoding="async"
        className="hero-bg absolute inset-0 -z-20 size-full object-cover object-[64%_center] lg:object-center"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(21,21,21,0.55)_0%,rgba(21,21,21,0.55)_40%,rgba(21,21,21,0.9)_100%)] lg:bg-[linear-gradient(90deg,rgba(21,21,21,0.92)_0%,rgba(21,21,21,0.72)_38%,rgba(21,21,21,0.15)_75%,rgba(21,21,21,0.05)_100%)]"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-t from-ink/80 to-transparent"
      />

      <div className="container-rd flex min-h-[100svh] items-center pb-24 pt-28 sm:pb-28 lg:min-h-[max(96svh,700px)] lg:pb-44 lg:pt-32">
        <div className="max-w-[40rem]">
          <p
            className="hero-anim inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 py-1.5 pl-2.5 pr-3.5 text-[0.8125rem] font-medium text-white/90 backdrop-blur-sm"
            style={{ '--d': '0ms' }}
          >
            <MapPin size={15} className="text-brand-light" aria-hidden />
            Ahmedabad&apos;s Reliable Travel Partner
          </p>

          <h1 id="hero-title" className="h1-hero hero-anim mt-6 text-white" style={{ '--d': '100ms' }}>
            Every Journey Deserves{' '}
            <span className="bg-gradient-to-r from-brand-light to-brand bg-clip-text text-transparent">Comfort</span>{' '}
            &amp;{' '}
            <span className="bg-gradient-to-r from-brand-light to-brand bg-clip-text text-transparent">
              Confidence.
            </span>
          </h1>

          <p
            className="hero-anim mt-6 max-w-[34rem] text-base leading-relaxed text-white/75 sm:text-lg"
            style={{ '--d': '220ms' }}
          >
            From everyday city rides to long-distance journeys, RD Travel makes car travel simple,
            comfortable and dependable.
          </p>

          <div
            className="hero-anim mt-9 flex flex-col gap-3 min-[430px]:flex-row"
            style={{ '--d': '320ms' }}
          >
            <a href="#book" className="btn btn-primary btn-lg group">
              Book Your Ride
              <ArrowRight
                size={18}
                aria-hidden
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
            <a href={COMPANY.phoneHref} className="btn btn-ghost-light btn-lg">
              <Phone size={18} aria-hidden />
              Call Now
            </a>
          </div>

          <ul
            className="hero-anim mt-10 flex flex-col gap-3 border-t border-white/15 pt-6 sm:flex-row sm:flex-wrap sm:gap-x-7 sm:gap-y-3"
            style={{ '--d': '440ms' }}
          >
            {HERO_TRUST.map(({ label, icon: Icon }) => (
              <li key={label} className="flex items-center gap-2.5 text-sm font-medium text-white/85">
                <span className="grid size-8 place-items-center rounded-lg bg-white/10 text-brand-light ring-1 ring-white/10">
                  <Icon size={16} aria-hidden />
                </span>
                {label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
