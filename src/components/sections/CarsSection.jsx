import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { cars, categories } from '../../data/cars'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { enquireAboutCar } from '../../utils/enquiry'
import Button from '../ui/Button'
import SectionHeading from '../ui/SectionHeading'
import CarCard from './CarCard'
import CarModal from './CarModal'

export default function CarsSection() {
  const navigate = useNavigate()
  const [activeCategory, setActiveCategory] = useState('All')
  const [showAll, setShowAll] = useState(false)
  const [selectedCar, setSelectedCar] = useState(null)
  const { ref, isVisible } = useScrollReveal()

  const filtered = useMemo(() => {
    if (activeCategory === 'All') return cars
    if (activeCategory === 'Premium') {
      return cars.filter((car) => ['Luxury', 'SUV', 'MUV'].includes(car.category))
    }
    return cars.filter((car) => car.category === activeCategory)
  }, [activeCategory])

  const visibleCars = showAll ? filtered : filtered.slice(0, 6)

  const handleEnquire = (car) => enquireAboutCar(car, navigate)

  return (
    <section className="section-pad warm-surface">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Our Cars"
          title="Explore Our Cars"
          description="This is a vehicle showcase — not online shopping. Pick an option that fits your trip and send us an enquiry."
        />

        <div className="mb-8 flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] sm:mb-10 sm:flex-wrap sm:justify-center sm:overflow-visible [&::-webkit-scrollbar]:hidden">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => {
                setActiveCategory(category)
                setShowAll(false)
              }}
              className={`shrink-0 rounded-full px-4 py-2.5 text-sm font-semibold transition ${
                activeCategory === category
                  ? 'bg-brand text-white'
                  : 'bg-white text-muted hover:bg-brand-soft hover:text-brand'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div
          ref={ref}
          className={`grid gap-6 sm:grid-cols-2 xl:grid-cols-3 ${
            isVisible ? 'reveal is-visible' : 'reveal'
          }`}
        >
          {visibleCars.map((car) => (
            <CarCard
              key={car.id}
              car={car}
              onViewDetails={setSelectedCar}
              onEnquire={handleEnquire}
            />
          ))}
        </div>

        {!showAll && filtered.length > 6 ? (
          <div className="mt-10 text-center">
            <Button variant="outline" onClick={() => setShowAll(true)}>
              View All Cars
            </Button>
          </div>
        ) : null}
      </div>

      <CarModal
        car={selectedCar}
        open={Boolean(selectedCar)}
        onClose={() => setSelectedCar(null)}
        onEnquire={handleEnquire}
      />
    </section>
  )
}
