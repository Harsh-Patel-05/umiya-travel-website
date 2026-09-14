import { useState } from 'react'
import { galleryItems } from '../../data/content'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import Lightbox from '../ui/Lightbox'
import SectionHeading from '../ui/SectionHeading'

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="gallery" className="section-pad bg-white">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Gallery"
          title="Umiya Travel Gallery"
          description="Cars, roads, destinations and moments that capture comfortable travel."
        />

        <div
          ref={ref}
          className={`columns-1 gap-4 sm:columns-2 lg:columns-3 ${
            isVisible ? 'reveal is-visible' : 'reveal'
          }`}
        >
          {galleryItems.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setLightboxIndex(index)}
              className="group mb-4 block w-full break-inside-avoid overflow-hidden rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="img-zoom w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/75 via-ink/20 to-transparent opacity-100 transition duration-300 sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-within:opacity-100">
                  <div className="p-3 text-left sm:p-4">
                    <p className="text-[0.65rem] tracking-[0.18em] text-brand uppercase sm:text-xs">
                      {item.category}
                    </p>
                    <p className="text-sm text-white">{item.title}</p>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <Lightbox
        items={galleryItems}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onPrev={() =>
          setLightboxIndex((current) =>
            current === null ? null : (current - 1 + galleryItems.length) % galleryItems.length,
          )
        }
        onNext={() =>
          setLightboxIndex((current) =>
            current === null ? null : (current + 1) % galleryItems.length,
          )
        }
      />
    </section>
  )
}
