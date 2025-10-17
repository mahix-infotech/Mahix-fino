"use client"

import { useEffect } from "react"

export function PerformanceMonitor() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Reduce layout shifts by setting image dimensions
      const images = document.querySelectorAll("img:not([width]):not([height])")
      images.forEach(img => {
        const imgElement = img as HTMLImageElement
        imgElement.style.aspectRatio = "auto"
        imgElement.style.maxWidth = "100%"
        imgElement.style.height = "auto"
      })

      // Optimize existing stylesheets
      const stylesheets = document.querySelectorAll('link[rel="stylesheet"]')
      stylesheets.forEach(stylesheet => {
        const link = stylesheet as HTMLLinkElement
        if (link.href.includes('_next/static')) {
          link.setAttribute('fetchpriority', 'high')
        }
      })

      // Add performance observer for monitoring
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry) => {
            // Monitor LCP and other metrics
            if (entry.entryType === 'largest-contentful-paint') {
              console.log('LCP:', entry.startTime)
            }
          })
        })
        
        try {
          observer.observe({ entryTypes: ['largest-contentful-paint', 'layout-shift'] })
        } catch (e) {
          // Fallback for browsers that don't support all entry types
          console.log('Performance monitoring not fully supported')
        }
      }
    }
  }, [])

  return null
}