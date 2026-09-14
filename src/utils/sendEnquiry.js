import { COMPANY } from '../data/company'

function formatTravelDate(value) {
  if (!value) return 'Not specified'
  const date = new Date(`${value}T00:00:00`)
  if (Number.isNaN(date.getTime())) return value
  return date.toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export async function sendEnquiryEmail(form) {
  const name = form.name.trim()
  const phone = form.phone.replace(/\s+/g, '')
  const email = form.email.trim()
  const message = form.message.trim()
  const travelDate = formatTravelDate(form.travelDate)

  const response = await fetch(`https://formsubmit.co/ajax/${COMPANY.email}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      _subject: `New Business Enquiry — ${name} | Umiya Travel`,
      _template: 'table',
      _captcha: 'false',
      _replyto: email,
      Name: name,
      Phone: `+91 ${phone}`,
      'Customer Email': email,
      'Travel Date': travelDate,
      Message: message,
      Source: 'Umiya Travel Website — Contact Form',
    }),
  })

  const data = await response.json().catch(() => ({}))

  if (!response.ok || data.success === false || data.success === 'false') {
    throw new Error(data.message || 'Unable to send enquiry right now. Please try again.')
  }

  return data
}
