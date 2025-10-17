"use client"

import { useEffect } from "react"

export function LoadingOptimizer() {
  useEffect(() => {
    // Preload critical resources
    const preloadLinks = [
      "/_next/static/css/app/layout.css",
      "/_next/static/css/app/globals.css"
    ]

    preloadLinks.forEach(href => {
      const link = document.createElement("link")
      link.rel = "preload"
      link.as = "style"
      link.href = href
      document.head.appendChild(link)
    })

    // Optimize images loading
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
      })

      images.forEach(img => imageObserver.observe(img))
    }
  }, [])

  return null
}