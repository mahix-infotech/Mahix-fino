"use client"

import { useEffect } from "react"

export function LoadingOptimizer() {
  useEffect(() => {
    // Optimize images loading with intersection observer
    const images = document.querySelectorAll("img[loading='lazy']")
    if ("IntersectionObserver" in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement
            img.loading = "eager"
            imageObserver.unobserve(img)
          }
        })
      }, {
        rootMargin: "50px"
      })

      images.forEach(img => imageObserver.observe(img))
    }

    // Preload critical CSS files dynamically
    const existingStylesheets = Array.from(document.querySelectorAll('link[rel="stylesheet"]'))
    existingStylesheets.forEach(stylesheet => {
      const link = stylesheet as HTMLLinkElement
      if (link.href && link.href.includes('_next/static')) {
        // Add high priority to critical CSS
        link.setAttribute('fetchpriority', 'high')
      }
    })
  }, [])

  return null
}