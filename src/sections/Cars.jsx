import SectionHeading from '../components/SectionHeading'
import VehicleCard from '../components/VehicleCard'
import { VEHICLES } from '../data/site'

export default function Cars() {
  return (
    <section id="cars" aria-labelledby="cars-title" className="section-y bg-white">
      <div className="container-rd">
        <SectionHeading
          id="cars-title"
          eyebrow="Our cars"
          title="Choose the Car That Fits Your Journey"
          description="Tell us how many people are travelling and how much luggage you have. We'll suggest the right car."
        />

        <div className="no-scrollbar -mx-[1.125rem] mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-[1.125rem] px-[1.125rem] pb-3 sm:-mx-7 sm:scroll-px-7 sm:px-7 md:mx-0 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:px-0 md:pb-0 lg:mt-14 xl:grid-cols-4 xl:gap-5">
          {VEHICLES.map((vehicle, i) => (
            <VehicleCard
              key={vehicle.category}
              vehicle={vehicle}
              index={i}
              className="w-[82%] max-w-[340px] shrink-0 snap-start md:w-auto md:max-w-none"
            />
          ))}
        </div>
        <p className="mt-3 text-center text-xs text-muted md:hidden" aria-hidden>
          Swipe to see more cars
        </p>

        <p data-reveal className="mt-10 text-center text-sm text-muted">
          Car models vary by availability. Share your requirement and we&apos;ll confirm the exact car
          before your trip.
        </p>
      </div>
    </section>
  )
}
