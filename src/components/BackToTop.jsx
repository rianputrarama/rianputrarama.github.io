// components/BackToTop.jsx
// Tombol yang muncul saat user scroll ke bawah
// Klik → langsung scroll ke atas halaman

import { useState, useEffect } from 'react'

function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Cari element yang beneran scroll — bisa body, html, atau div tertentu
    const scrollEl = document.scrollingElement || document.documentElement

    function handleScroll() {
      setVisible(scrollEl.scrollTop > 50)
    }

    // Pasang di semua kemungkinan
    window.addEventListener('scroll', handleScroll, true)
    document.addEventListener('scroll', handleScroll, true)

    return () => {
      window.removeEventListener('scroll', handleScroll, true)
      document.removeEventListener('scroll', handleScroll, true)
    }
  }, [])

  function scrollToTop() {
    document.scrollingElement.scrollTop = 0
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (!visible) return null

  return (
    <button className="back-to-top" onClick={scrollToTop}>
      ↑
    </button>
  )
}

export default BackToTop