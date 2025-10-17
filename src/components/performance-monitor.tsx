"use client"

import { useEffect } from "react"

export function PerformanceMonitor() {
  useEffect(() => {
    // Optimize critical rendering path
    if (typeof window !== "undefined") {
      // Reduce layout shifts by setting image dimensions
      const images = document.querySelectorAll("img:not([width]):not([height])")
      images.forEach(img => {
        const imgElement = img as HTMLImageElement
        imgElement.style.aspectRatio = "auto"
      })

      // Preload critical resources
      const criticalResources = [
        { href: "/_next/static/css/app/layout.css", as: "style" },
        { href: "/_next/static/css/app/globals.css", as: "style" }
      ]

      criticalResources.forEach(resource => {
        const existingLink = document.querySelector(`link[href="${resource.href}"]`)
        if (!existingLink) {
          const link = document.createElement("link")
          link.rel = "preload"
          link.as = resource.as
          link.href = resource.href
          document.head.appendChild(link)
        }
      })
    }
  }, [])

  return null
}