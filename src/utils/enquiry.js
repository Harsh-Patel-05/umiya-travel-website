export function enquireAboutCar(car, navigate) {
  const payload = {
        requirement: car ? `Enquiry for ${car.name} (${car.category})` : '',
    vehicle: car?.name || '',
  }

  sessionStorage.setItem('umiya-enquiry', JSON.stringify(payload))

  if (typeof navigate === 'function') {
    navigate('/contact')
    return
  }

  window.location.assign('/contact')
}

export function readEnquiryPrefill() {
  try {
    const raw = sessionStorage.getItem('umiya-enquiry')
    if (!raw) return null
    sessionStorage.removeItem('umiya-enquiry')
    return JSON.parse(raw)
  } catch {
    return null
  }
}
