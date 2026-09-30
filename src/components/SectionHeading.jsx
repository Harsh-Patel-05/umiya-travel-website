export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  dark = false,
  id,
  className = '',
}) {
  const centered = align === 'center'
  return (
    <div
      data-reveal
      className={`${centered ? 'mx-auto text-center' : ''} max-w-2xl ${className}`}
    >
      {eyebrow ? (
        <p className={`eyebrow ${dark ? 'eyebrow-dark' : ''} ${centered ? 'justify-center' : ''}`}>
          {eyebrow}
        </p>
      ) : null}
      <h2 id={id} className={`h2-section mt-4 ${dark ? 'text-white' : 'text-ink'}`}>
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            dark ? 'text-white/70' : 'text-muted'
          } ${centered ? 'mx-auto max-w-xl' : 'max-w-xl'}`}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}
