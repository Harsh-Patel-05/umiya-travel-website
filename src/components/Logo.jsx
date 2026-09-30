const SOURCES = {
  mark: { light: '/brand/rd-travel-logo-mark.png', dark: '/brand/rd-travel-logo-mark-dark.png', w: 920, h: 250 },
  full: { light: '/brand/rd-travel-logo-full.png', dark: '/brand/rd-travel-logo-full-dark.png', w: 920, h: 314 },
}

/**
 * `tone="dark"` is the white-text version for dark backgrounds.
 */
export default function Logo({ variant = 'mark', tone = 'light', className = '', alt = 'RD Travel' }) {
  const src = SOURCES[variant]
  return (
    <img
      src={src[tone]}
      width={src.w}
      height={src.h}
      alt={alt}
      decoding="async"
      className={`h-auto select-none ${className}`}
      draggable="false"
    />
  )
}
