import { Link } from 'react-router-dom'

const variantClasses = {
  primary: 'bg-brand text-white hover:bg-brand-dark shadow-[0_12px_28px_rgba(255,95,31,0.28)]',
  secondary:
    'bg-transparent text-white border border-white/50 hover:bg-white hover:text-ink',
  outline: 'bg-transparent text-ink border border-line hover:border-brand hover:text-brand',
  dark: 'bg-charcoal text-white hover:bg-ink',
  soft: 'bg-brand-soft text-brand-dark hover:bg-brand-muted',
}

const sizeClasses = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-3.5 text-base',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  href,
  to,
  type = 'button',
  onClick,
  ...props
}) {
  const classes = [
    'inline-flex items-center justify-center gap-2 rounded-md font-display font-semibold tracking-wide',
    'transition-all duration-300 ease-out disabled:cursor-not-allowed disabled:opacity-60',
    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand',
    variantClasses[variant],
    sizeClasses[size],
    className,
  ]
    .filter(Boolean)
    .join(' ')

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick} {...props}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  )
}
