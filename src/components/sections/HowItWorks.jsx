import { howItWorks } from '../../data/content'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import SectionHeading from '../ui/SectionHeading'

export default function HowItWorks() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section className="section-pad bg-white">
      <div className="container-shell">
        <SectionHeading
          eyebrow="How It Works"
          title="Four simple steps"
          description="No complicated booking portal — just clear conversation and planning."
        />

        <ol
          ref={ref}
          className={`grid gap-5 md:grid-cols-2 xl:grid-cols-4 ${
            isVisible ? 'reveal is-visible' : 'reveal'
          }`}
        >
          {howItWorks.map((item) => (
            <li key={item.step} className="rounded-xl border border-line bg-stone/50 p-6">
              <span className="font-display text-4xl font-bold text-brand">{item.step}</span>
              <h3 className="mt-3 font-display text-lg font-semibold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
