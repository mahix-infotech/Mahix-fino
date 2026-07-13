"use client"

import * as React from "react"
import dynamic from "next/dynamic"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const Ballpit = dynamic(() => import("./ballpit"), {
  ssr: false,
  loading: () => null,
})

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
  const [isMobile, setIsMobile] = React.useState(false)
  const [loadSimulation, setLoadSimulation] = React.useState(false)

  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  React.useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const win = window as Window & {
      requestIdleCallback?: (callback: IdleRequestCallback, options?: IdleRequestOptions) => number
      cancelIdleCallback?: (handle: number) => void
    }

    let timeoutId: ReturnType<typeof setTimeout> | undefined
    let idleId: number | undefined

    timeoutId = setTimeout(() => {
      if (win.requestIdleCallback) {
        idleId = win.requestIdleCallback(() => setLoadSimulation(true), { timeout: 1200 })
      } else {
        setLoadSimulation(true)
      }
    }, 700)

    return () => {
      if (timeoutId) clearTimeout(timeoutId)
      if (idleId && win.cancelIdleCallback) win.cancelIdleCallback(idleId)
    }
  }, [])

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
        @keyframes heroDrift {
          0%, 100% { transform: translate3d(-2%, -1%, 0) scale(1); }
          50% { transform: translate3d(2%, 1%, 0) scale(1.03); }
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
        .hero-lightweight-bg {
          background:
            radial-gradient(circle at 18% 24%, rgba(161, 26, 26, 0.42), transparent 30%),
            radial-gradient(circle at 76% 20%, rgba(37, 99, 235, 0.24), transparent 28%),
            radial-gradient(circle at 64% 78%, rgba(99, 102, 241, 0.22), transparent 32%),
            linear-gradient(135deg, #020617 0%, #0f172a 48%, #111827 100%);
          animation: heroDrift 18s ease-in-out infinite;
          will-change: transform;
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-lightweight-bg,
          .animate-hero-slide-left,
          .animate-text-scroll {
            animation: none;
            opacity: 1;
          }
        }
      `}</style>

      <div className="hero-lightweight-bg absolute -inset-8 z-0 overflow-hidden select-none" />

      {loadSimulation && (
        <div className="absolute inset-0 z-[1] h-full w-full overflow-hidden select-none opacity-90">
          <Ballpit
            className="h-full w-full"
            count={isMobile ? 45 : 100}
            gravity={0.01}
            friction={0.9975}
            wallBounce={0.95}
            followCursor={true}
            fps={isMobile ? 24 : 30}
            maxPixelRatio={isMobile ? 0.75 : 1}
            minSize={isMobile ? 0.22 : 0.45}
            maxSize={isMobile ? 0.42 : 0.9}
            cursorInfluence={isMobile ? 0.035 : 0.055}
            cursorRadius={isMobile ? 6 : 9}
            colors={[0xff1f1f, 0xff3b3b, 0xffffff, 0xf8fafc, 0xb91c1c, 0xffffff]}
          />
        </div>
      )}

      <div className="absolute inset-0 z-10 bg-slate-950/25 pointer-events-none" />
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


