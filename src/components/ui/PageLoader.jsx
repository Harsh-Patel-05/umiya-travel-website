import { useEffect, useRef, useState } from 'react'

const MIN_MS = 3200
const LOADER_SRC = '/loader-icon.png'

export default function PageLoader({ onDone }) {
  const [progress, setProgress] = useState(8)
  const [hiding, setHiding] = useState(false)
  const onDoneRef = useRef(onDone)
  onDoneRef.current = onDone

  useEffect(() => {
    let raf
    let hideTimer
    let cancelled = false
    const started = performance.now()

    const imageReady = new Promise((resolve) => {
      const img = new Image()
      img.onload = resolve
      img.onerror = resolve
      img.src = LOADER_SRC
    })

    const pageReady = new Promise((resolve) => {
      if (document.readyState === 'complete') resolve()
      else window.addEventListener('load', resolve, { once: true })
    })

    const tick = (now) => {
      if (cancelled) return
      const elapsed = now - started
      const ratio = Math.min(elapsed / MIN_MS, 1)
      const eased = 1 - (1 - ratio) ** 2
      setProgress(Math.max(8, Math.round(eased * 100)))
      if (ratio < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    Promise.all([imageReady, pageReady]).then(() => {
      if (cancelled) return
      const wait = Math.max(0, MIN_MS - (performance.now() - started))
      hideTimer = window.setTimeout(() => {
        if (cancelled) return
        setProgress(100)
        setHiding(true)
        window.setTimeout(() => {
          if (!cancelled) onDoneRef.current?.()
        }, 380)
      }, wait)
    })

    return () => {
      cancelled = true
      cancelAnimationFrame(raf)
      window.clearTimeout(hideTimer)
    }
  }, [])

  return (
    <div
      className={`page-loader${hiding ? ' is-hiding' : ''}`}
      aria-busy="true"
      aria-live="polite"
      aria-label="Loading Umiya Travel"
    >
      <div className="page-loader__inner">
        <div className="page-loader__mark">
          <img src={LOADER_SRC} alt="Umiya Travel" width="128" height="128" />
        </div>
        <p className="page-loader__brand">Umiya Travel</p>
        <div
          className="page-loader__track"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={progress}
        >
          <span className="page-loader__fill" style={{ width: `${progress}%` }} />
        </div>
      </div>
    </div>
  )
}
