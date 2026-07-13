"use client"

import { useRef, useState, useEffect, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowUpRight,
  Code2, Smartphone, ShoppingCart, Megaphone, Search,
  BarChart2, Share2, Cpu, ShoppingBag, Cloud, Brain,
  Users, Settings, Lightbulb
} from "lucide-react"

/* ─────────────────────────────────────────
   All 14 services
   `image`: path in /public — swap with real
   photos whenever ready. Leave null to show
   the accent-icon placeholder instead.
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
]

// Duplicate for seamless infinite loop
const loopedServices = [...services, ...services]

const CARD_W   = 212   // px — card width
const CARD_GAP = 16    // px — gap between cards
const CARD_UNIT = CARD_W + CARD_GAP
const AUTO_SPEED = 0.6 // px per frame

export function ServicesSection() {
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

    const midpoint = services.length * CARD_UNIT

    const tick = () => {
      if (!isDragging.current && !isHovered.current) {
        track.scrollLeft += AUTO_SPEED
        // Seamless loop: jump back when we've scrolled through the first copy
        if (track.scrollLeft >= midpoint) {
          track.scrollLeft -= midpoint
        }
      }
      // Progress within the first copy
      const maxScroll = midpoint - track.clientWidth
      const p = maxScroll > 0 ? Math.min((track.scrollLeft / maxScroll) * 100, 100) : 0
      setProgress(p)
      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current) }
  }, [])

  /* ── Pointer drag ── */
  const onPointerDown = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    const track = trackRef.current
    if (!track) return
    isDragging.current = true
    dragStartX.current     = e.clientX
    dragScrollLeft.current = track.scrollLeft
    track.setPointerCapture(e.pointerId)
    e.preventDefault()
  }, [])

  const onPointerMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging.current) return
    const track = trackRef.current
    if (!track) return
    const delta = dragStartX.current - e.clientX
    track.scrollLeft = dragScrollLeft.current + delta
    e.preventDefault()
  }, [])

  const onPointerUp = useCallback(() => {
    isDragging.current = false
  }, [])

  return (
    <section className="py-16 sm:py-20 overflow-hidden" style={{ background: "#f5f0e8" }}>
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

      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-14">

        {/* ══ Header Row ══ */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">

          {/* Left — Big title */}
          <div className="flex-shrink-0">
            <p className="flex items-center gap-1.5 text-[11px] font-semibold tracking-widest uppercase mb-4"
              style={{ color: "#9a8272" }}>
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

        {/* ══ Draggable Card Strip ══ */}
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
          {loopedServices.map((svc, idx) => {
            const Icon = svc.icon
            const isFirst = idx === 0
            return (
              <div
                key={`${svc.href}-${idx}`}
                className="svc-card relative flex-shrink-0 rounded-2xl overflow-hidden select-none"
                style={{
                  width: CARD_W,
                  height: 310,
                  background: svc.bg,
                }}
              >
                {/* ── TOP: Image or icon placeholder ── */}
                <div
                  className="relative w-full pointer-events-none"
                  style={{ height: "62%" }}
                >
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
                      {/* subtle dark vignette so bottom text is readable */}
                      <div
                        className="absolute inset-0"
                        style={{
                          background:
                            "linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.55) 100%)",
                        }}
                      />
                    </>
                  ) : (
                    /* Accent icon placeholder for cards without a real image */
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Icon
                        className="opacity-[0.18]"
                        style={{ width: 72, height: 72, color: svc.accent }}
                        strokeWidth={1}
                      />
                    </div>
                  )}
                </div>

                {/* ── BOTTOM: Accent glow + title + arrow ── */}
                <div
                  className="absolute bottom-0 left-0 right-0 flex flex-col justify-end"
                  style={{ height: "42%" }}
                >
                  {/* glow */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: `linear-gradient(to top, ${svc.accent}30 0%, transparent 100%)`,
                    }}
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

        {/* ══ Scroll Progress Bar ══ */}
        <div className="mt-5 h-[2px] rounded-full overflow-hidden" style={{ background: "#d4c4b0" }}>
          <div
            className="h-full rounded-full transition-none"
            style={{
              width: `${progress}%`,
              background: "#1a0f07",
            }}
          />
        </div>

      </div>
    </section>
  )
}
