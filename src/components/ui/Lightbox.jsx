import { useEffect } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

export default function Lightbox({ items, index, onClose, onPrev, onNext }) {
  useEffect(() => {
    if (index === null) return undefined

    const onKey = (event) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowLeft') onPrev()
      if (event.key === 'ArrowRight') onNext()
    }

    document.addEventListener('keydown', onKey)
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = previous
    }
  }, [index, onClose, onPrev, onNext])

  if (index === null || !items[index]) return null

  const item = items[index]

  return (
    <div
      className="animate-fade-in fixed inset-0 z-[90] flex items-center justify-center bg-ink/92 p-3 sm:p-4"
      onClick={onClose}
      role="presentation"
    >
      <button
        type="button"
        className="absolute top-[max(1rem,env(safe-area-inset-top))] right-[max(1rem,env(safe-area-inset-right))] rounded-full bg-white/10 p-2.5 text-white transition hover:bg-white/20"
        onClick={onClose}
        aria-label="Close lightbox"
      >
        <X size={22} />
      </button>

      <button
        type="button"
        className="absolute top-1/2 left-2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20 sm:left-6"
        onClick={(event) => {
          event.stopPropagation()
          onPrev()
        }}
        aria-label="Previous image"
      >
        <ChevronLeft size={24} />
      </button>

      <figure
        className="animate-slide-up max-h-[85svh] w-full max-w-5xl px-8 sm:px-12"
        onClick={(event) => event.stopPropagation()}
      >
        <img
          src={item.image}
          alt={item.title}
          className="mx-auto max-h-[70svh] w-auto max-w-full rounded-lg object-contain shadow-lift"
        />
        <figcaption className="mt-3 px-2 text-center text-sm text-white/80 sm:mt-4">
          <span className="text-brand">{item.category}</span>
          <span className="mx-2 text-white/30">·</span>
          {item.title}
        </figcaption>
      </figure>

      <button
        type="button"
        className="absolute top-1/2 right-2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20 sm:right-6"
        onClick={(event) => {
          event.stopPropagation()
          onNext()
        }}
        aria-label="Next image"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  )
}
