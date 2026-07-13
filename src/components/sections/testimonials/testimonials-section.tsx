"use client"

import React, { useState, useEffect, useRef } from "react"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Priya Krishnamurthy",
    role: "CEO, TechStart Inc.",
    content: "Mahix InfoTech transformed our business with their exceptional web development services. The team delivered beyond our expectations and helped us achieve a 300% increase in online conversions.",
    rating: "4.9",
    date: "29 Aug, 2026",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    name: "Arjun Ramachandran",
    role: "CTO, DataFlow Solutions",
    content: "Their AI and ML expertise helped us automate our data processing pipeline, saving us 40 hours per week. The team is professional, knowledgeable, and delivers on time.",
    rating: "4.9",
    date: "14 Sep, 2026",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    name: "Kavitha Subramanian",
    role: "Marketing Director, GrowthCorp",
    content: "The mobile app they developed for us has been a game-changer. User engagement increased by 250% and our app store ratings are consistently 4.8+. Highly recommended!",
    rating: "4.8",
    date: "05 Oct, 2026",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    name: "Rajesh Murugan",
    role: "Founder, CloudVenture",
    content: "Mahix InfoTech's cloud migration services were seamless. They moved our entire infrastructure to AWS with zero downtime and reduced our hosting costs by 60%.",
    rating: "4.9",
    date: "20 Oct, 2026",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    name: "Deepika Natarajan",
    role: "VP Marketing, EcomPlus",
    content: "Their SEO and digital marketing strategies helped us rank #1 for our target keywords. Our organic traffic increased by 400% in just 6 months.",
    rating: "4.9",
    date: "03 Nov, 2026",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    name: "Karthik Venkatesh",
    role: "Operations Manager, LogiTech",
    content: "The custom software solution they built streamlined our operations completely. What used to take days now takes hours. Exceptional work and ongoing support.",
    rating: "5.0",
    date: "18 Nov, 2026",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=150&h=150"
  }
]

// ─── Arc geometry (matches screenshot exactly) ─────────────────────────────
//  Circle center: 30px LEFT of container left edge  (off screen)
//  Radius: 145px  →  peak at x = -30 + 145 = 115px
//  55° per step   →  only 3 slots fall inside the visible area (x > 0)
const CX   = -30      // circle center x from container left (px)
const CY   = 200      // circle center y from container top  (px)
const R    = 145      // radius (px)
const DEG  = 55       // degrees between adjacent slots
const LEN  = testimonials.length
const RAD  = Math.PI / 180

/** Shortest circular difference  */
function wrap(diff: number) {
  diff = ((diff % LEN) + LEN) % LEN
  if (diff > LEN / 2) diff -= LEN
  return diff
}

/** x,y on the arc for a given angle offset from 0°  */
function arcPt(angleDeg: number) {
  const θ = angleDeg * RAD
  const rawX = CX + R * Math.cos(θ)
  const rawY = CY + R * Math.sin(θ)
  return {
    x: Math.round(rawX * 1000) / 1000,
    y: Math.round(rawY * 1000) / 1000
  }
}

export function TestimonialsSection() {
  const [active,   setActive]   = useState(1)   // index of profile at arc peak
  const [quoteKey, setQuoteKey] = useState(0)   // triggers quote fade-in
  const [dragging, setDragging] = useState(false)

  const autoRef  = useRef<ReturnType<typeof setInterval> | null>(null)
  const dragY0   = useRef(0)
  const dragged  = useRef(false)

  // ── Advance / retreat ───────────────────────────────────────────────────
  const go = (dir: 1 | -1) => {
    setActive(i => ((i + dir) % LEN + LEN) % LEN)
    setQuoteKey(k => k + 1)
  }

  // ── Autoplay: every 2 seconds ───────────────────────────────────────────
  const stopAuto  = () => { if (autoRef.current) clearInterval(autoRef.current) }
  const startAuto = () => {
    stopAuto()
    autoRef.current = setInterval(() => go(1), 2000)
  }
  useEffect(() => { startAuto(); return stopAuto }, [])

  // ── Drag (vertical swipe) ───────────────────────────────────────────────
  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    stopAuto()
    dragged.current = false
    dragY0.current  = e.clientY
    setDragging(true)
    e.currentTarget.setPointerCapture(e.pointerId)
    e.preventDefault()
  }
  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging) return
    const dy = e.clientY - dragY0.current
    if (!dragged.current && Math.abs(dy) > 35) {
      dragged.current = true
      go(dy < 0 ? 1 : -1)   // drag up → next, drag down → prev
      dragY0.current = e.clientY
    }
  }
  const onPointerUp = () => {
    setDragging(false)
    startAuto()
  }

  // ── Arc SVG endpoints ───────────────────────────────────────────────────
  const top = arcPt(-DEG)   // ≈ (53, 81)
  const bot = arcPt(+DEG)   // ≈ (53, 319)

  // ── Render ──────────────────────────────────────────────────────────────
  const activeT = testimonials[active]

  return (
    <section
      className="py-20 sm:py-28 bg-white overflow-hidden"
      onMouseEnter={stopAuto}
      onMouseLeave={startAuto}
    >
      <style>{`
        @keyframes quoteIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0px); }
        }
        .q-enter { animation: quoteIn 0.4s cubic-bezier(.16,1,.3,1) both; }
      `}</style>

      <div className="mx-auto max-w-[1300px] px-6 sm:px-10 lg:px-14">

        {/* Header */}
        <div className="mb-14">
          <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">Customer Reviews</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">

          {/* ══ Left: Arc + 6 rolling profiles ══════════════════════════════ */}
          <div
            className={`lg:col-span-5 relative h-[400px] w-full select-none touch-none overflow-visible ${dragging ? "cursor-grabbing" : "cursor-grab"}`}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
          >
            {/* Decorative arc SVG */}
            <svg
              className="absolute pointer-events-none"
              style={{ left: 0, top: 0, width: 220, height: 400, overflow: "visible" }}
              viewBox="0 0 220 400"
            >
              <path
                d={`M ${top.x} ${top.y} A ${R} ${R} 0 0 1 ${bot.x} ${bot.y}`}
                stroke="#d1d5db"
                strokeWidth="1.2"
                fill="none"
                strokeLinecap="round"
              />
            </svg>

            {/* All 6 profiles — each positioned at its arc coordinate */}
            {testimonials.map((t, idx) => {
              const slot = wrap(idx - active)           // -2..+2 (±3 for LEN=6)
              const angleDeg = slot * DEG               // degrees on the arc
              const { x, y } = arcPt(angleDeg)

              const isActive = slot === 0
              const visible  = y > 15 && y < 385 && x > 5   // inside visible window
              const size     = isActive ? 68 : 50
              const opacity  = isActive ? 1 : visible ? 0.62 : 0

              // Position the image so its CENTER is at (x, y)
              const imgLeft = x - size / 2
              const imgTop  = y - size / 2

              return (
                <div
                  key={t.name}
                  onClick={() => { if (!isActive && !dragging) go(slot > 0 ? 1 : -1) }}
                  className="absolute flex items-center gap-3"
                  style={{
                    // Animate left / top smoothly along the arc path
                    left: `${Math.round(imgLeft * 1000) / 1000}px`,
                    top:  `${Math.round(imgTop * 1000) / 1000}px`,
                    transition: "left 1.2s cubic-bezier(.16,1,.3,1), top 1.2s cubic-bezier(.16,1,.3,1), opacity 0.6s ease",
                    opacity,
                    zIndex:  isActive ? 30 : visible ? 20 : 5,
                    cursor:  isActive ? "default" : "pointer",
                    pointerEvents: opacity === 0 ? "none" : "auto",
                  }}
                >
                  {/* Avatar */}
                  <img
                    src={t.avatar}
                    alt={t.name}
                    draggable={false}
                    className="rounded-full object-cover flex-shrink-0"
                    style={{
                      width:  size,
                      height: size,
                      border: isActive ? "2px solid #1e293b" : "1.5px solid #e2e8f0",
                      transition: "width 1.2s ease, height 1.2s ease",
                      filter: "grayscale(25%)",
                    }}
                  />

                  {/* Name + rating */}
                  <div style={{ pointerEvents: "none" }}>
                    <p
                      className="whitespace-nowrap leading-tight"
                      style={{
                        fontSize:   isActive ? 15 : 12.5,
                        fontWeight: isActive ? 700 : 600,
                        color:      isActive ? "#0f172a" : "#64748b",
                        transition: "font-size 1.2s ease, color 1.2s ease",
                      }}
                    >
                      {t.name}
                    </p>
                    <div className="flex items-center gap-1 mt-0.5 whitespace-nowrap">
                      <Star
                        style={{
                          width:  isActive ? 13 : 11,
                          height: isActive ? 13 : 11,
                          fill:   "#15803d",
                          color:  "#15803d",
                          flexShrink: 0,
                          transition: "width 0.55s ease, height 0.55s ease",
                        }}
                      />
                      <span style={{ fontSize: isActive ? 11 : 10, fontWeight: 600, color: isActive ? "#15803d" : "#94a3b8" }}>
                        {t.rating}
                      </span>
                      <span style={{ fontSize: 10, color: "#cbd5e1" }}>on</span>
                      <span style={{ fontSize: 10, color: "#94a3b8" }}>{t.date}</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* ══ Right: Quote ════════════════════════════════════════════════ */}
          <div className="lg:col-span-7 flex flex-col justify-center relative pl-2 lg:pl-8">
            <div key={quoteKey} className="q-enter relative">
              {/* Large grey opening quote mark */}
              <span
                className="absolute -left-4 -top-4 select-none pointer-events-none font-serif leading-none text-slate-200"
                style={{ fontSize: "3.5rem" }}
              >
                &ldquo;
              </span>

              <blockquote
                className="pl-1 text-[1.2rem] sm:text-[1.3rem] italic leading-[1.7] text-slate-500"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                {/* Drop-cap first letter */}
                <span
                  className="float-left mr-[0.05em] font-normal text-slate-700 leading-[0.85]"
                  style={{ fontSize: "2em", fontFamily: "Georgia, serif" }}
                >
                  {activeT.content.charAt(0)}
                </span>
                {activeT.content.slice(1)}
              </blockquote>

              <p className="mt-5 pl-1 text-[10.5px] font-bold uppercase tracking-widest text-slate-400">
                — {activeT.name} · {activeT.role}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
