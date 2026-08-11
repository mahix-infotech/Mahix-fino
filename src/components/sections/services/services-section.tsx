"use client"

import { useRef, useState, useEffect, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowUpRight,
  Code2, Smartphone, ShoppingCart, Megaphone, Search,
  BarChart2, Share2, Cpu, ShoppingBag, Cloud, Brain,
  Users, Settings, Lightbulb, Shirt, Flame, Zap, Navigation, Radio, Fingerprint,
  FileText, Globe
} from "lucide-react"

/* ─────────────────────────────────────────
   14 core services
───────────────────────────────────────── */
const services = [
  {
    title: "Web\nDevelopment",
    href: "/services/web-development",
    icon: Code2,
    bg: "linear-gradient(160deg,#1c2d44 0%,#0f1e2e 100%)",
    accent: "#3b82f6",
    image: "/svc-web-dev.png",
  },
  {
    title: "Mobile App\nDevelopment",
    href: "/services/mobile-apps",
    icon: Smartphone,
    bg: "linear-gradient(160deg,#1e1540 0%,#12102a 100%)",
    accent: "#8b5cf6",
    image: "/svc-mobile-app.png",
  },
  {
    title: "E-commerce\nDevelopment",
    href: "/services/e-commerce-development",
    icon: ShoppingCart,
    bg: "linear-gradient(160deg,#3a1a0c 0%,#1e0e06 100%)",
    accent: "#f97316",
    image: "/svc-ecommerce.png",
  },
  {
    title: "Digital\nMarketing",
    href: "/services/digital-marketing",
    icon: Megaphone,
    bg: "linear-gradient(160deg,#0f2b1e 0%,#081a12 100%)",
    accent: "#10b981",
    image: "/svc-digital-marketing.png",
  },
  {
    title: "SEO\nOptimization",
    href: "/services/seo",
    icon: Search,
    bg: "linear-gradient(160deg,#152538 0%,#0c1820 100%)",
    accent: "#06b6d4",
    image: "/svc-seo.png",
  },
  {
    title: "Google Ads",
    href: "/services/google-ads",
    icon: BarChart2,
    bg: "linear-gradient(160deg,#38200c 0%,#201208 100%)",
    accent: "#f59e0b",
    image: null,
  },
  {
    title: "Meta Ads",
    href: "/services/meta-ads",
    icon: Share2,
    bg: "linear-gradient(160deg,#0e1938 0%,#080f22 100%)",
    accent: "#4f76f6",
    image: null,
  },
  {
    title: "Custom\nSoftware",
    href: "/services/custom-software",
    icon: Cpu,
    bg: "linear-gradient(160deg,#0f2e2e 0%,#081c1c 100%)",
    accent: "#14b8a6",
    image: null,
  },
  {
    title: "Shopify\nDevelopment",
    href: "/services/shopify-development",
    icon: ShoppingBag,
    bg: "linear-gradient(160deg,#1c2e10 0%,#101c08 100%)",
    accent: "#22c55e",
    image: null,
  },
  {
    title: "Cloud\nServices",
    href: "/services/cloud",
    icon: Cloud,
    bg: "linear-gradient(160deg,#0a2030 0%,#06141e 100%)",
    accent: "#38bdf8",
    image: null,
  },
  {
    title: "AI & ML",
    href: "/services/ai-ml",
    icon: Brain,
    bg: "linear-gradient(160deg,#200a38 0%,#14062a 100%)",
    accent: "#a855f7",
    image: null,
  },
  {
    title: "CRM\nSolutions",
    href: "/services/crm-solutions",
    icon: Users,
    bg: "linear-gradient(160deg,#2e100e 0%,#1c0808 100%)",
    accent: "#ef4444",
    image: null,
  },
  {
    title: "IT\nConsulting",
    href: "/services/it-consulting",
    icon: Settings,
    bg: "linear-gradient(160deg,#162216 0%,#0c160c 100%)",
    accent: "#84cc16",
    image: null,
  },
  {
    title: "Digital\nTransformation",
    href: "/services/digital-transformation",
    icon: Lightbulb,
    bg: "linear-gradient(160deg,#0c1830 0%,#080f1e 100%)",
    accent: "#6366f1",
    image: null,
  },
  {
    title: "IoT & AI\nSolutions",
    href: "/services/gas-iot",
    icon: Cpu,
    bg: "linear-gradient(160deg,#0f2e20 0%,#081c12 100%)",
    accent: "#10b981",
    image: null,
  },
]

/* ─────────────────────────────────────────
   IoT Services — 6 cards with image bg, PDF & Demo URLs
───────────────────────────────────────── */
const iotServices = [
  {
    title: "Garment IOT\nSolution",
    description: "Real-time textile monitoring & protection systems.",
    href: "/services/garment-iot",
    icon: Shirt,
    bg: "linear-gradient(160deg,#1c2836 0%,#0e1722 100%)",
    accent: "#38bdf8",
    image: "/svc-web-dev.png",
    pdfUrl: "/Assets/PDF/g1.pdf",
    demoUrl: "http://103.125.154.118:8080/skiot/",
  },
  {
    title: "Gas IOT\nSystem",
    description: "Automated gas leak detection & solenoid shutoff valves.",
    href: "/services/gas-iot",
    icon: Flame,
    bg: "linear-gradient(160deg,#381c0c 0%,#1e0e06 100%)",
    accent: "#f97316",
    image: "/svc-ecommerce.png",
    pdfUrl: "/Assets/PDF/gas.pdf",
    demoUrl: "https://iotsvcgpl.com/dakshiyatechnology/",
  },
  {
    title: "Energy Monitoring\nIoT",
    description: "Sub-metering, 24/7 power analytics & load control.",
    href: "/services/energy-monitoring-iot",
    icon: Zap,
    bg: "linear-gradient(160deg,#2e280c 0%,#1a1606 100%)",
    accent: "#eab308",
    image: "/svc-digital-marketing.png",
    pdfUrl: "/Assets/PDF/eb.pdf",
    demoUrl: "https://dakshiyatechnology.in/demo/eb.html",
  },
  {
    title: "GPS Vehicle\nTracking",
    description: "Live GPS location tracking & fleet telematics management.",
    href: "/services/gps-vehicle-tracking",
    icon: Navigation,
    bg: "linear-gradient(160deg,#0f2e20 0%,#081c12 100%)",
    accent: "#10b981",
    image: "/svc-mobile-app.png",
    pdfUrl: "https://dakshiyatechnology.in/demo/#",
    demoUrl: "https://mahixinfotech.in/gps-tracking/pages/login.php",
  },
  {
    title: "Asset Tracking\nSystem",
    description: "Indoor & outdoor BLE / LoRaWAN location tracking.",
    href: "/services/asset-tracking",
    icon: Radio,
    bg: "linear-gradient(160deg,#1e0a38 0%,#13062a 100%)",
    accent: "#a855f7",
    image: "/svc-seo.png",
    pdfUrl: "/Assets/PDF/ble.pdf",
    demoUrl: "https://dakshiyatechnology.in/demo/#",
  },
  {
    title: "HR & eSSL\nAttendance",
    description: "Biometric eSSL device syncing & cloud HRMS portal.",
    href: "/services/hr-essl-attendance",
    icon: Fingerprint,
    bg: "linear-gradient(160deg,#0e1938 0%,#080f22 100%)",
    accent: "#6366f1",
    image: "/svc-web-dev.png",
    pdfUrl: "/Assets/PDF/hr_page-0001.pdf",
    demoUrl: "https://dakshiyatechnology.in/demo/#",
  },
]

// Duplicate each list for seamless infinite loop
const loopedServices    = [...services, ...services]
const loopedIotServices = [...iotServices, ...iotServices]

const CARD_W     = 212   // px
const CARD_GAP   = 16    // px
const CARD_UNIT  = CARD_W + CARD_GAP
const AUTO_SPEED = 0.6   // px per frame

/* ─────────────────────────────────────────
   Reusable draggable / auto-scrolling strip
───────────────────────────────────────── */
type ServiceItem = {
  title: string
  href: string
  icon: React.ElementType
  bg: string
  accent: string
  image: string | null
}

function CardStrip({
  items,
  totalCount,
}: {
  items: ServiceItem[]
  totalCount: number
}) {
  const trackRef       = useRef<HTMLDivElement>(null)
  const rafRef         = useRef<number | null>(null)
  const isDragging     = useRef(false)
  const isHovered      = useRef(false)
  const dragStartX     = useRef(0)
  const dragScrollLeft = useRef(0)
  const [progress, setProgress] = useState(0)

  /* ── Seamless auto-scroll ── */
  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const midpoint = totalCount * CARD_UNIT

    const tick = () => {
      if (!isDragging.current && !isHovered.current) {
        track.scrollLeft += AUTO_SPEED
        // Seamless loop: jump back once we've passed the first copy
        if (track.scrollLeft >= midpoint) track.scrollLeft -= midpoint
      }
      const maxScroll = midpoint - track.clientWidth
      const p = maxScroll > 0 ? Math.min((track.scrollLeft / maxScroll) * 100, 100) : 0
      setProgress(p)
      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current) }
  }, [totalCount])

  /* ── Pointer drag ── */
  const onPointerDown = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    const track = trackRef.current
    if (!track) return
    isDragging.current     = true
    dragStartX.current     = e.clientX
    dragScrollLeft.current = track.scrollLeft
    track.setPointerCapture(e.pointerId)
    e.preventDefault()
  }, [])

  const onPointerMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging.current) return
    const track = trackRef.current
    if (!track) return
    track.scrollLeft = dragScrollLeft.current + (dragStartX.current - e.clientX)
    e.preventDefault()
  }, [])

  const onPointerUp = useCallback(() => { isDragging.current = false }, [])

  return (
    <>
      {/* Draggable card strip */}
      <div
        ref={trackRef}
        className="svc-track flex gap-4 pb-1"
        style={{ scrollBehavior: "auto" }}
        onMouseEnter={() => { isHovered.current = true }}
        onMouseLeave={() => { isHovered.current = false; isDragging.current = false }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        {items.map((svc, idx) => {
          const Icon = svc.icon
          const isFirst = idx === 0
          return (
            <div
              key={`${svc.href}-${idx}`}
              className="svc-card relative flex-shrink-0 rounded-2xl overflow-hidden select-none"
              style={{ width: CARD_W, height: 310, background: svc.bg }}
            >
              {/* TOP: Image or icon placeholder */}
              <div className="relative w-full pointer-events-none" style={{ height: "62%" }}>
                {svc.image ? (
                  <>
                    <Image
                      src={svc.image}
                      alt={svc.title.replace("\n", " ")}
                      fill
                      sizes="212px"
                      className="object-cover object-center"
                      draggable={false}
                    />
                    {/* subtle dark vignette */}
                    <div
                      className="absolute inset-0"
                      style={{ background: "linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.55) 100%)" }}
                    />
                  </>
                ) : (
                  /* Accent icon placeholder */
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon
                      className="opacity-[0.18]"
                      style={{ width: 72, height: 72, color: svc.accent }}
                      strokeWidth={1}
                    />
                  </div>
                )}
              </div>

              {/* BOTTOM: Accent glow + title + arrow */}
              <div
                className="absolute bottom-0 left-0 right-0 flex flex-col justify-end"
                style={{ height: "42%" }}
              >
                {/* glow */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: `linear-gradient(to top, ${svc.accent}30 0%, transparent 100%)` }}
                />

                <div className="relative px-4 pb-4 flex items-end justify-between">
                  <p
                    className="svc-card-title text-[13px] font-bold leading-snug whitespace-pre-line"
                    style={{ color: isFirst ? "#e8c234" : "#ffffff" }}
                  >
                    {svc.title}
                  </p>

                  {/* Arrow button */}
                  <Link
                    href={svc.href}
                    className="svc-card-arrow flex-shrink-0 h-9 w-9 rounded-full flex items-center justify-center"
                    style={{ background: "#1a0f07" }}
                    onClick={(e) => isDragging.current && e.preventDefault()}
                    draggable={false}
                  >
                    <ArrowUpRight
                      className="h-4 w-4"
                      style={{ color: "#e8c234" }}
                      strokeWidth={2.5}
                    />
                  </Link>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Scroll progress bar */}
      <div className="mt-5 h-[2px] rounded-full overflow-hidden" style={{ background: "#d4c4b0" }}>
        <div
          className="h-full rounded-full transition-none"
          style={{ width: `${progress}%`, background: "#1a0f07" }}
        />
      </div>
    </>
  )
}

/* ─────────────────────────────────────────
   Main exported section
───────────────────────────────────────── */
export function ServicesSection() {
  return (
    <section className="overflow-hidden" style={{ background: "#f5f0e8" }}>
      <style>{`
        .svc-track { overflow-x: auto; cursor: grab; user-select: none; }
        .svc-track::-webkit-scrollbar { display: none; }
        .svc-track { -ms-overflow-style: none; scrollbar-width: none; }
        .svc-track.dragging { cursor: grabbing; }
        .svc-card-arrow {
          transition: transform 0.25s cubic-bezier(0.16,1,0.3,1), background 0.2s ease;
        }
        .svc-card:hover .svc-card-arrow {
          transform: scale(1.12);
        }
        .svc-card-title {
          transition: color 0.2s ease;
        }
        .svc-card:hover .svc-card-title {
          color: #e8c234;
        }
        @media (prefers-reduced-motion: reduce) {
          .svc-card-arrow, .svc-card-title { transition: none; }
        }
      `}</style>

      {/* ══════════════════════════════════════
          BLOCK 1 — Our Services
      ══════════════════════════════════════ */}
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-14 pt-16 sm:pt-20 pb-14 sm:pb-16">

        {/* Header Row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">

          {/* Left — Big title */}
          <div className="flex-shrink-0">
            <p
              className="flex items-center gap-1.5 text-[11px] font-semibold tracking-widest uppercase mb-4"
              style={{ color: "#9a8272" }}
            >
              <span style={{ color: "#9a8272" }}>/</span> Services We Offer
            </p>
            <h2
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-[5.25rem] font-black leading-[1.04] tracking-tight"
              style={{ color: "#1a0f07" }}
            >
              Our<br />Services
            </h2>
          </div>

          {/* Right — description + CTAs */}
          <div className="lg:max-w-xs xl:max-w-sm lg:pb-2">
            <p className="text-[13.5px] leading-relaxed mb-5" style={{ color: "#6b5a4a" }}>
              From custom web apps and mobile solutions to AI-powered automation and digital marketing — we cover every corner of your growth journey. Choose innovation, choose Mahix.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/services"
                className="flex items-center gap-1 text-[12px] font-bold tracking-wide hover:underline underline-offset-4 transition-opacity hover:opacity-75"
                style={{ color: "#8b2020" }}
              >
                View All Services
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="/contact"
                className="flex items-center gap-1 text-[12px] font-bold tracking-wide hover:underline underline-offset-4 transition-opacity hover:opacity-75"
                style={{ color: "#8b2020" }}
              >
                Get Started
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>

        <CardStrip items={loopedServices} totalCount={services.length} />
      </div>

      {/* Subtle divider */}
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-14">
        <div
          className="h-px"
          style={{ background: "linear-gradient(to right, transparent, #c8b8a0, transparent)" }}
        />
      </div>

      {/* ══════════════════════════════════════
          BLOCK 2 — IoT & AI Solutions (Compact 6 Cards Grid with Bright Light Theme)
      ══════════════════════════════════════ */}
      <div id="iot-solutions" className="bg-gradient-to-b from-[#edf4ff] via-[#f4f8ff] to-[#f8fafc] text-slate-900 py-14 sm:py-16 border-t border-blue-100/80">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-14">

          {/* Header Row */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">

            {/* Left — Single-line headline */}
            <div className="flex-shrink-0">
              <p className="flex items-center gap-1.5 text-[11px] font-bold tracking-widest uppercase mb-3 text-blue-600">
                <span>/</span> Next-Gen Technology
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight tracking-tight whitespace-nowrap text-slate-900">
                IoT &amp; AI Solutions
              </h2>
            </div>

            {/* Right — description + CTAs */}
            <div className="lg:max-w-xs xl:max-w-sm lg:pb-1">
              <p className="text-xs sm:text-[13px] leading-relaxed mb-4 text-slate-600 font-medium">
                Harness the power of Internet of Things (IoT) and Artificial Intelligence to automate operations, unlock real-time insights, and build smarter systems.
              </p>
              <div className="flex items-center gap-6">
                <Link
                  href="/services/gas-iot"
                  className="flex items-center gap-1 text-[12px] font-bold tracking-wide text-blue-700 hover:text-blue-900 hover:underline underline-offset-4 transition-colors"
                >
                  Explore Gas IoT
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
                <Link
                  href="/contact"
                  className="flex items-center gap-1 text-[12px] font-bold tracking-wide text-blue-700 hover:text-blue-900 hover:underline underline-offset-4 transition-colors"
                >
                  Get Started
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* 6 CARDS COMPACT GRID WITH FULL IMAGE BG, DEMO & PDF BUTTONS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {iotServices.map((svc, idx) => {
              const Icon = svc.icon
              return (
                <div
                  key={svc.href}
                  className="group relative rounded-xl sm:rounded-2xl p-4 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl overflow-hidden border border-slate-200 bg-white min-h-[220px]"
                >
                  {/* ── Full Background Image (Sharp, Clear, No Blur) ── */}
                  {svc.image ? (
                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                      <Image
                        src={svc.image}
                        alt={svc.title.replace("\n", " ")}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover object-center opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                      />
                      {/* Soft gradient overlay to keep text legible over crisp image */}
                      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-white/20" />
                    </div>
                  ) : null}

                  <div className="relative z-10">
                    {/* Top Badge & Icon */}
                    <div className="flex items-center justify-between mb-2.5">
                      <div
                        className="p-2 rounded-lg flex items-center justify-center shadow-sm border border-slate-200 bg-white"
                      >
                        <Icon className="h-4 w-4" style={{ color: svc.accent }} strokeWidth={2.5} />
                      </div>
                      <span className="text-[9px] font-extrabold tracking-wider uppercase px-2 py-0.5 rounded-full text-slate-700 bg-white border border-slate-200 shadow-sm">
                        0{idx + 1}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-base sm:text-lg font-black text-slate-900 leading-tight mb-1 whitespace-pre-line drop-shadow-sm">
                      {svc.title}
                    </h3>
                    <p className="text-[11px] text-slate-700 leading-tight font-semibold mb-3 line-clamp-2 drop-shadow-sm">
                      {svc.description}
                    </p>
                  </div>

                  {/* Bottom Actions: PDF & Demo Buttons + Explore Link */}
                  <div className="relative z-10 pt-2 border-t border-slate-300/80 flex flex-col gap-2">
                    {/* Action Buttons: PDF + Demo Online */}
                    <div className="flex items-center gap-1.5 flex-wrap">
                      {svc.pdfUrl ? (
                        <a
                          href={svc.pdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="py-1 px-2.5 rounded-full bg-[#0284c7] hover:bg-[#0369a1] active:scale-95 text-white font-black text-[10px] tracking-wide flex items-center gap-1 shadow-sm transition-all duration-200 cursor-pointer"
                        >
                          <FileText className="h-3 w-3 stroke-[2.5]" />
                          <span>PDF</span>
                        </a>
                      ) : null}

                      {svc.demoUrl ? (
                        <a
                          href={svc.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="py-1 px-2.5 rounded-full bg-[#16a34a] hover:bg-[#15803d] active:scale-95 text-white font-extrabold text-[10px] tracking-wide flex items-center gap-1 shadow-sm transition-all duration-200 cursor-pointer"
                        >
                          <Globe className="h-3 w-3 stroke-[2.5]" />
                          <span>Demo Online</span>
                        </a>
                      ) : null}
                    </div>

                    {/* Detail page link */}
                    <div className="flex items-center justify-between pt-0.5">
                      <Link
                        href={svc.href}
                        className="text-[10px] font-black text-slate-800 hover:text-blue-700 transition-colors flex items-center gap-1 hover:underline drop-shadow-sm"
                      >
                        <span>Explore System</span>
                      </Link>
                      <Link
                        href={svc.href}
                        className="h-6 w-6 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-sm"
                        style={{ background: "#1a0f07" }}
                      >
                        <ArrowUpRight className="h-3 w-3 text-[#e8c234]" strokeWidth={2.5} />
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

    </section>
  )
}
