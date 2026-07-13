"use client"

import { useRef, useEffect, useState } from "react"

const milestones = [
  {
    year: "2019",
    era: "The Beginning",
    icon: "💡",
    color: "#8b2020", // Mahix Red
    title: "Freelancing Roots & Brand Conception",
    desc: "Mahix began its journey in 2019 as a collaborative freelance initiative. Founded on a passion for custom engineering, we started by developing bespoke web platforms, script automations, and custom database designs for early regional clients.",
  },
  {
    year: "2021",
    era: "Growing Network",
    icon: "🖥️",
    color: "#e8c234", // Mahix Gold
    title: "Team & Services Expansion",
    desc: "We scaled our freelance network and brought together a core group of talented designers, full-stack developers, and search marketing specialists. Expanded our focus to e-commerce engines, advanced web apps, and performance SEO.",
  },
  {
    year: "2023",
    era: "Enterprise Solutions",
    icon: "🚀",
    color: "#1a0f07", // Mahix Charcoal
    title: "AI, Cloud & Custom Systems",
    desc: "Entering the advanced computing landscape, we started building cloud architectures, custom CRM applications, and specialized AI/ML workflows for growing business portfolios across diverse industries.",
  },
  {
    year: "2025",
    era: "Official Incorporation",
    icon: "🏢",
    color: "#8b2020", // Mahix Red
    title: "Officially Registered as a Private Limited Company",
    desc: "A milestone corporate transition. To support our global client base and scale enterprise operations, we officially incorporated as Mahix InfoTech Private Limited. Transitioning from a freelance collective to a registered corporate entity, setting up our headquarters to shape the future of digital solutions.",
  },
]

function TimelineCard({
  milestone,
  side,
  visible,
}: {
  milestone: (typeof milestones)[0]
  side: "left" | "right"
  visible: boolean
}) {
  // Determine animation transition styles depending on left/right side
  const animationClasses = visible
    ? "opacity-100 translate-x-0 translate-y-0 scale-100"
    : side === "left"
      ? "opacity-0 -translate-x-12 md:-translate-x-20 translate-y-4 scale-[0.97]"
      : "opacity-0 translate-x-12 md:translate-x-20 translate-y-4 scale-[0.97]"

  return (
    <div
      className={`
        relative flex items-center gap-6 md:gap-12 w-full
        ${side === "left" ? "flex-row-reverse md:flex-row" : "flex-row md:flex-row-reverse"}
      `}
    >
      {/* ── Card ── */}
      <div
        className={`
          flex-1 rounded-2xl p-6 md:p-8 border bg-white shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]
          hover:shadow-[0_15px_35px_-5px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-500 ease-out relative overflow-hidden group
          ${side === "left" ? "border-slate-100 md:border-r-4 text-left md:text-right" : "border-slate-100 md:border-l-4 text-left"}
          ${animationClasses}
        `}
        style={{
          borderRightColor: side === "left" ? milestone.color : undefined,
          borderLeftColor: side === "right" ? milestone.color : undefined,
          transitionDelay: visible ? "100ms" : "0ms"
        }}
      >
        {/* Subtle accent background glow on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-[0.02] transition-opacity duration-300 pointer-events-none"
          style={{ background: milestone.color }}
        />

        {/* Era badge */}
        <span
          className="inline-block text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4"
          style={{ background: milestone.color + "12", color: milestone.color }}
        >
          {milestone.era}
        </span>

        {/* Year with gradient look */}
        <div
          className="text-4xl font-extrabold tracking-tight mb-2 select-none"
          style={{ color: milestone.color }}
        >
          {milestone.year}
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-slate-900 mb-3 leading-snug group-hover:text-slate-800 transition-colors">
          {milestone.title}
        </h3>

        {/* Description */}
        <p className="text-sm md:text-[14px] text-slate-500 leading-relaxed font-normal">
          {milestone.desc}
        </p>
      </div>

      {/* ── Center dot / Icon ── */}
      <div className="hidden md:flex flex-col items-center z-10 relative">
        <div
          className={`
            w-14 h-14 rounded-full flex items-center justify-center text-2xl border-4 border-white flex-shrink-0
            transition-all duration-700 ease-out
            ${visible ? "scale-100 rotate-0 shadow-[0_4px_20px_rgba(0,0,0,0.15)]" : "scale-50 rotate-45 shadow-none opacity-40"}
          `}
          style={{
            background: visible
              ? `linear-gradient(135deg, ${milestone.color}e0, ${milestone.color})`
              : "#e2e8f0",
            color: visible ? "#ffffff" : "#94a3b8"
          }}
        >
          {milestone.icon}
        </div>
      </div>

      {/* ── Spacer on opposite side (desktop) ── */}
      <div className="hidden md:block flex-1" />
    </div>
  )
}

export function AboutTimeline() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [lineHeight, setLineHeight] = useState(0)
  const [visible, setVisible] = useState<boolean[]>(
    new Array(milestones.length).fill(false)
  )
  const refs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    // 1. Scroll listener to update central line progress dynamically
    const handleScroll = () => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const viewportHeight = window.innerHeight
      
      // Calculate scroll progress starting when the top of timeline reaches 80% viewport height
      const triggerStart = viewportHeight * 0.8
      const relativeTop = rect.top - triggerStart
      const totalHeight = rect.height
      
      let progress = 0
      if (relativeTop < 0) {
        progress = Math.min(Math.abs(relativeTop) / (totalHeight - 150), 1)
      }
      setLineHeight(progress * 100)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", handleScroll)
    handleScroll() // initial call

    // 2. Intersection Observer to trigger individual card reveals
    const observers = milestones.map((_, i) => {
      const el = refs.current[i]
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible((prev) => {
              const next = [...prev]
              next[i] = true
              return next
            })
            obs.disconnect()
          }
        },
        { threshold: 0.1, rootMargin: "0px 0px -100px 0px" } // offset slightly so it triggers cleanly
      )
      obs.observe(el)
      return obs
    })

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleScroll)
      observers.forEach((o) => o?.disconnect())
    }
  }, [])

  return (
    <section className="py-24 pb-32 relative overflow-hidden" style={{ background: "#fdfdfd" }}>
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-[1100px] px-6 sm:px-10 relative">

        {/* ── Section Header ── */}
        <div className="text-center mb-20">
          <p className="text-[11px] font-black uppercase tracking-widest mb-3" style={{ color: "#8b2020" }}>
            / OUR ROADMAP
          </p>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900 leading-tight">
            Our Story & Journey
          </h2>
          <p className="mt-4 text-base text-slate-500 max-w-2xl mx-auto leading-relaxed font-normal">
            From early freelance consulting in 2019 to our official registration as a Private Limited company in 2025, discover the milestones that shaped Mahix InfoTech.
          </p>
          <div className="mt-6 mx-auto w-12 h-1 rounded-full" style={{ backgroundColor: "#8b2020" }} />
        </div>

        {/* ── Timeline ── */}
        <div className="relative" ref={containerRef}>

          {/* Background center line (inactive/grey state) */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-[2px] -translate-x-1/2 bg-slate-100 pointer-events-none" />

          {/* Active colored path drawn on scroll */}
          <div
            className="hidden md:block absolute left-1/2 top-4 w-[2px] -translate-x-1/2 origin-top transition-all duration-300 ease-out pointer-events-none"
            style={{
              height: `${lineHeight}%`,
              background: "linear-gradient(to bottom, #8b2020 0%, #e8c234 40%, #1a0f07 70%, #8b2020 100%)"
            }}
          />

          {/* Milestone rows */}
          <div className="flex flex-col gap-16 md:gap-12">
            {milestones.map((m, i) => (
              <div
                key={m.year}
                ref={(el) => { refs.current[i] = el }}
                className="w-full"
              >
                <TimelineCard
                  milestone={m}
                  side={i % 2 === 0 ? "left" : "right"}
                  visible={visible[i]}
                />
              </div>
            ))}
          </div>

        </div>

        {/* ── Bottom badge ── */}
        <div className="mt-20 flex justify-center">
          <div className="inline-flex items-center gap-3 bg-slate-900 text-white px-8 py-3.5 rounded-full shadow-[0_10px_30px_rgba(15,23,42,0.15)] hover:scale-105 transition-transform duration-300">
            <span className="text-yellow-400 text-lg">🌟</span>
            <span className="text-xs sm:text-sm font-bold tracking-wide">Mahix InfoTech — Shaping Digital Futures Since the Start</span>
          </div>
        </div>

      </div>
    </section>
  )
}
