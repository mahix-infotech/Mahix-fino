"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const slides = [
  {
    title: (
      <>
        Transform Your Business with{" "}
        <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent drop-shadow-sm">
          Digital Innovation
        </span>
      </>
    ),
    description: "Mahix InfoTech delivers cutting-edge software solutions, from custom web development and mobile apps to AI/ML services and cloud infrastructure. Let's build the future together."
  },
  {
    title: (
      <>
        Build Bleeding-Edge Applications{" "}
        <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent drop-shadow-sm">
          That Scale
        </span>
      </>
    ),
    description: "We craft robust web applications, responsive e-commerce storefronts, and cross-platform native mobile apps optimized for high-performance and absolute reliability."
  },
  {
    title: (
      <>
        Accelerate Growth With{" "}
        <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-400 bg-clip-text text-transparent drop-shadow-sm">
          Intelligent Software
        </span>
      </>
    ),
    description: "Integrate powerful machine learning modules, automate business operations on AWS/Azure, and scale your search rankings with technical SEO strategies."
  }
]

export function HeroSection() {
  const [activeSlide, setActiveSlide] = React.useState(0)
  const [activeVideo, setActiveVideo] = React.useState(0)
  
  const videoRef0 = React.useRef<HTMLVideoElement>(null)
  const videoRef1 = React.useRef<HTMLVideoElement>(null)

  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  const handleEnded0 = React.useCallback(() => {
    setActiveVideo(1)
    if (videoRef1.current) {
      videoRef1.current.currentTime = 0
      videoRef1.current.play().catch(() => {})
    }
  }, [])

  const handleEnded1 = React.useCallback(() => {
    setActiveVideo(0)
    if (videoRef0.current) {
      videoRef0.current.currentTime = 0
      videoRef0.current.play().catch(() => {})
    }
  }, [])

  React.useEffect(() => {
    if (activeVideo === 0 && videoRef0.current) {
      videoRef0.current.play().catch(() => {})
    } else if (activeVideo === 1 && videoRef1.current) {
      videoRef1.current.play().catch(() => {})
    }
  }, [activeVideo])

  return (
    <section className="relative overflow-hidden py-24 sm:py-32 md:py-40 lg:py-48 flex flex-col items-center justify-center min-h-screen bg-slate-950 text-white w-full">
      <style>{`
        @keyframes slideInFromLeft {
          0% { opacity: 0; transform: translateX(-50px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes textScrollUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-hero-slide-left {
          opacity: 0;
          animation: slideInFromLeft 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-text-scroll {
          animation: textScrollUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        @media (prefers-reduced-motion: reduce) {
          .animate-hero-slide-left,
          .animate-text-scroll {
            animation: none;
            opacity: 1;
          }
        }
      `}</style>

      {/* Background Videos with cross-fade */}
      <div className="absolute inset-0 z-0 bg-slate-950 overflow-hidden select-none">
        <video
          ref={videoRef0}
          src="/videos/2127-155244168_medium.mp4"
          autoPlay
          muted
          playsInline
          onEnded={handleEnded0}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            activeVideo === 0 ? "opacity-35" : "opacity-0"
          }`}
        />
        <video
          ref={videoRef1}
          src="/videos/18437-292228569_medium.mp4"
          muted
          playsInline
          onEnded={handleEnded1}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            activeVideo === 1 ? "opacity-35" : "opacity-0"
          }`}
        />
        {/* Dark overlay to ensure text contrast */}
        <div className="absolute inset-0 bg-slate-950/60 z-[1]" />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none z-10" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-9 xl:col-span-8 flex flex-col items-start text-left w-full animate-hero-slide-left z-20">
            <div key={`title-${activeSlide}`} className="animate-text-scroll w-full">
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.12] text-white w-full break-words">
                {slides[activeSlide].title}
              </h1>
            </div>

            <div key={`desc-${activeSlide}`} className="animate-text-scroll delay-100 w-full">
              <p className="mt-6 max-w-2xl text-sm sm:text-base md:text-lg lg:text-xl text-slate-200 leading-relaxed break-words">
                {slides[activeSlide].description}
              </p>
            </div>

            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-4 w-full sm:w-auto delay-200">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto text-sm px-8 py-5 rounded-full shadow-lg bg-[#a11a1a] hover:bg-[#8f1515] text-white hover:shadow-red-950/40 hover:scale-105 transition-all duration-300 group border-none"
              >
                <Link href="/contact" className="flex items-center justify-center">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>

              <Button
                variant="outline"
                asChild
                size="lg"
                className="w-full sm:w-auto text-sm px-8 py-5 rounded-full border-white/10 bg-white/5 text-white hover:bg-white/10 hover:scale-105 transition-all duration-300"
              >
                <Link href="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>

          <div className="hidden lg:col-span-3 xl:col-span-4" />
        </div>
      </div>
    </section>
  )
}


