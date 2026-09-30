export default function FormField({
  id,
  label,
  error,
  icon: Icon,
  as: Tag = 'input',
  optional = false,
  className = '',
  children,
  ...props
}) {
  const errorId = `${id}-error`
  return (
    <div className={className}>
      <label htmlFor={id} className="field-label">
        {label}
        {optional ? <span className="ml-1 font-normal text-muted">(optional)</span> : null}
      </label>
      <div className="relative">
        {Icon ? <Icon size={18} className="field-icon" aria-hidden /> : null}
        <Tag
          id={id}
          name={id}
          aria-invalid={error ? 'true' : undefined}
          aria-describedby={error ? errorId : undefined}
          className={`field ${Icon ? 'field-with-icon' : ''}`}
          {...props}
        >
          {children}
        </Tag>
      </div>
      {error ? (
        <p id={errorId} className="field-error">
          {error}
        </p>
      ) : null}
    </div>
  )
}
