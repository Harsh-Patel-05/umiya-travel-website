import { COMPANY } from '../data/site'

export function whatsappUrl(message) {
  const base = `https://wa.me/${COMPANY.whatsappNumber}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}

export function openWhatsApp(message) {
  const url = whatsappUrl(message)
  const win = window.open(url, '_blank')
  if (win) win.opener = null
  else window.location.href = url
}

export function formatDate(value) {
  if (!value) return ''
  const [y, m, d] = value.split('-').map(Number)
  return new Date(y, m - 1, d).toLocaleDateString('en-IN', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

export function formatTime(value) {
  if (!value) return ''
  const [h, min] = value.split(':').map(Number)
  const suffix = h >= 12 ? 'PM' : 'AM'
  return `${h % 12 || 12}:${String(min).padStart(2, '0')} ${suffix}`
}

export function todayISO() {
  const now = new Date()
  const offset = now.getTimezoneOffset() * 60000
  return new Date(now - offset).toISOString().slice(0, 10)
}

export function normalisePhone(value) {
  const digits = value.replace(/\D/g, '')
  if (digits.length === 12 && digits.startsWith('91')) return digits.slice(2)
  if (digits.length === 11 && digits.startsWith('0')) return digits.slice(1)
  return digits
}

export function isValidIndianMobile(value) {
  return /^[6-9]\d{9}$/.test(normalisePhone(value))
}

export function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)
}
