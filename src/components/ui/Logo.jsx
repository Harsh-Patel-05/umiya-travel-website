import { Link } from 'react-router-dom'
import { COMPANY } from '../../data/company'

/**
 * Official Umiya Travel logo provided by the user.
 * File: public/brand/umiya-logo-clean.png
 */
export default function Logo({
  variant = 'compact',
  className = '',
  onClick,
}) {
  const isFull = variant === 'full'

  return (
    <Link
      to="/"
      onClick={onClick}
      className={`group inline-flex shrink-0 items-center ${className}`}
      aria-label={`${COMPANY.name} home`}
    >
      <img
        src="/brand/umiya-logo-clean.png"
        alt={`${COMPANY.name} — ${COMPANY.tagline}`}
        className={
          isFull
            ? 'h-auto w-full max-w-[260px] object-contain object-left transition duration-300 group-hover:brightness-105 sm:max-w-[300px]'
            : 'h-10 w-auto max-w-[min(200px,52vw)] object-contain object-left transition duration-300 group-hover:brightness-105 min-[400px]:h-11 min-[400px]:max-w-[min(240px,58vw)] sm:h-12 md:h-[3.35rem]'
        }
        decoding="async"
        fetchPriority="high"
      />
    </Link>
  )
}
