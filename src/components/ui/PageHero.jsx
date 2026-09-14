export default function PageHero({ eyebrow, title, description, image }) {
  return (
    <section className="relative isolate overflow-hidden pt-24 pb-12 sm:pt-32 sm:pb-20">
      <img
        src={
          image ||
          'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1800&q=80'
        }
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        aria-hidden
      />
      <div className="absolute inset-0 bg-ink/75" />
      <div className="relative container-shell max-w-3xl">
        {eyebrow ? (
          <p className="text-[0.7rem] font-bold tracking-[0.22em] text-brand uppercase sm:text-xs">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="mt-3 text-[1.85rem] leading-tight text-white min-[400px]:text-4xl sm:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/75 sm:mt-4 sm:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    </section>
  )
}
