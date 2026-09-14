import { useCallback, useEffect, useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import PageLoader from './components/ui/PageLoader'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import CarsPage from './pages/CarsPage'
import ServicesPage from './pages/ServicesPage'
import DestinationsPage from './pages/DestinationsPage'
import GalleryPage from './pages/GalleryPage'
import ContactPage from './pages/ContactPage'

function removeBootLoader() {
  const boot = document.getElementById('boot-loader')
  if (!boot) return
  boot.classList.add('is-done')
  window.setTimeout(() => boot.remove(), 200)
}

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    removeBootLoader()
  }, [])

  const handleLoaderDone = useCallback(() => {
    setLoading(false)
  }, [])

  return (
    <>
      {loading ? <PageLoader onDone={handleLoaderDone} /> : null}

      <div className={loading ? 'app-shell is-loading' : 'app-shell is-ready'}>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="cars" element={<CarsPage />} />
              <Route path="services" element={<ServicesPage />} />
              <Route path="destinations" element={<DestinationsPage />} />
              <Route path="gallery" element={<GalleryPage />} />
              <Route path="contact" element={<ContactPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}
