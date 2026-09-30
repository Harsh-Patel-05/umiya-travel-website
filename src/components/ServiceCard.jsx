export default function ServiceCard({ icon: Icon, title, description, index = 0 }) {
  return (
    <div data-reveal style={{ '--reveal-delay': `${(index % 4) * 70}ms` }}>
      <article className="card group relative flex h-full flex-col overflow-hidden p-6 transition duration-300 ease-out hover:-translate-y-1 hover:border-brand/30 hover:shadow-lift sm:p-7">
        <span className="icon-tile group-hover:bg-brand group-hover:text-white">
          <Icon size={22} strokeWidth={1.8} aria-hidden />
        </span>
        <h3 className="mt-6 text-lg font-bold leading-snug text-ink">{title}</h3>
        <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">{description}</p>
        <span
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-brand-light to-brand transition-transform duration-500 ease-out group-hover:scale-x-100"
        />
      </article>
    </div>
  )
}
