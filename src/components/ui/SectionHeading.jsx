export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  light = false,
  className = '',
}) {
  const alignment =
    align === 'left' ? 'items-start text-left' : 'items-center text-center mx-auto'

  return (
    <div className={`mb-8 flex max-w-2xl flex-col gap-3 sm:mb-10 ${alignment} ${className}`}>
      {eyebrow ? (
        <p
          className={`text-[0.7rem] font-bold tracking-[0.22em] uppercase sm:text-xs ${
            light ? 'text-brand-muted' : 'text-brand'
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`text-balance text-[1.75rem] leading-tight sm:text-4xl md:text-[2.75rem] ${
          light ? 'text-white' : 'text-ink'
        }`}
      >
        {title}
      </h2>
      <div className={`accent-line ${align === 'center' ? 'mx-auto' : ''}`} />
      {description ? (
        <p
          className={`text-sm leading-relaxed sm:text-lg ${
            light ? 'text-white/75' : 'text-muted'
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}
