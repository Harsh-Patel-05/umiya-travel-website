import { useEffect, useRef, useState } from 'react'

const INTRO_MS = 2150
const REDUCED_MS = 500
const EXIT_MS = 550

export default function Loader({ onReveal, onDone }) {
  const [leaving, setLeaving] = useState(false)
  const callbacks = useRef({ onReveal, onDone })

  useEffect(() => {
    callbacks.current = { onReveal, onDone }
  }, [onReveal, onDone])

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let exitTimer
    document.body.classList.add('is-locked')
    const introTimer = window.setTimeout(
      () => {
        setLeaving(true)
        document.body.classList.remove('is-locked')
        callbacks.current.onReveal?.()
        exitTimer = window.setTimeout(() => callbacks.current.onDone?.(), EXIT_MS)
      },
      reduced ? REDUCED_MS : INTRO_MS,
    )
    return () => {
      window.clearTimeout(introTimer)
      window.clearTimeout(exitTimer)
      document.body.classList.remove('is-locked')
    }
  }, [])

  return (
    <div className={`rd-loader ${leaving ? 'is-leaving' : ''}`} role="status" aria-live="polite">
      <span className="sr-only">Loading RD Travel</span>
      <div className="rd-loader__stage" aria-hidden="true">
        <span className="rd-loader__sweep" />
        <img src="/brand/rd-emblem.png" width="332" height="250" alt="" className="rd-loader__emblem" />
        <p className="rd-loader__name">
          <span className="text-brand-dark">RD</span> Travel
        </p>
        <p className="rd-loader__tagline">Your Journey. Our Responsibility.</p>
        <span className="rd-loader__road" />
      </div>
    </div>
  )
}
