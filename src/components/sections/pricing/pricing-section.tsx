"use client"

import * as React from "react"
import Link from "next/link"
import { Check, ArrowRight, Sparkles, Star } from "lucide-react"

export interface PricingPlan {
  name: string
  price: string      // e.g. "49,999" — non-digit prefix is stripped automatically
  period?: string    // e.g. "/project" | "/month" | "/hour"
  tagline: string
  features: string[]
  cta?: string
  highlighted?: boolean
  gradient?: string  // Tailwind gradient for the highlighted card
}

interface PricingSectionProps {
  plans: PricingPlan[]
  title?: string
  subtitle?: string
}

/** Strip any encoding artifacts or currency symbols before first digit */
function cleanPrice(raw: string) {
  return raw.replace(/^[^\d]+/, "")
}

const RUPEE = "\u20B9" // ₹ — Unicode escape, always renders correctly

export function PricingSection({
  plans,
  title = "Plans & Packages",
  subtitle = "Straightforward pricing built around your goals — no lock-ins, no surprises.",
}: PricingSectionProps) {
  return (
    <section className="relative py-16 sm:py-20 bg-white overflow-hidden">
      {/* Decorative background blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-indigo-50 blur-[100px] opacity-70" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-blue-50 blur-[100px] opacity-80" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-violet-50 blur-[80px] opacity-60" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ── Section Header ── */}
        <div className="mb-10 flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-100 bg-indigo-50 text-[10px] font-extrabold uppercase tracking-widest text-indigo-600 mb-4 shadow-sm">
            <Sparkles className="h-3 w-3 text-amber-500" />
            Pricing Plans
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-slate-900 leading-tight">
            {title}
          </h2>
          <p className="mt-3 max-w-xl text-slate-500 text-sm leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* ── Cards Grid ── */}
        <div
          className={`grid gap-6 items-stretch ${
            plans.length === 2
              ? "grid-cols-1 sm:grid-cols-2 max-w-3xl mx-auto"
              : plans.length === 3
              ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
              : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          }`}
        >
          {plans.map((plan) => {
            const isHot = !!plan.highlighted
            const grad = plan.gradient ?? "from-indigo-500 to-blue-600"

            return (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-3xl overflow-visible transition-all duration-300 ${
                  isHot
                    ? "z-10 scale-[1.04] drop-shadow-2xl"
                    : "hover:-translate-y-2 hover:shadow-xl hover:shadow-slate-200/80"
                }`}
              >
                {/* Card shell */}
                {isHot ? (
                  /* Highlighted: gradient bg card */
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${grad} shadow-2xl`} />
                ) : (
                  /* Regular: white card with subtle border */
                  <div className="absolute inset-0 rounded-3xl bg-white border border-slate-200 shadow-md" />
                )}

                {/* Most Popular ribbon */}
                {isHot && (
                  <div className="absolute -top-4 inset-x-0 flex justify-center z-20">
                    <span className="inline-flex items-center gap-1.5 px-5 py-1.5 rounded-full text-[10px] font-extrabold uppercase tracking-widest text-white bg-slate-900 shadow-lg">
                      <Star className="h-2.5 w-2.5 fill-white" />
                      Most Popular
                    </span>
                  </div>
                )}

                {/* ── Card Content ── */}
                <div className={`relative flex flex-col flex-1 p-5 gap-4 ${isHot ? "pt-8" : ""}`}>

                  {/* Plan name + tagline */}
                  <div>
                    <p className={`text-[9px] font-extrabold uppercase tracking-[0.22em] mb-1 ${
                      isHot ? "text-white/70" : "text-slate-400"
                    }`}>
                      {plan.name}
                    </p>
                    <p className={`text-xs leading-relaxed ${
                      isHot ? "text-white/80" : "text-slate-500"
                    }`}>
                      {plan.tagline}
                    </p>
                  </div>

                  {/* ── Price ── */}
                  <div className={`flex items-end gap-1 pb-4 border-b ${
                    isHot ? "border-white/20" : "border-slate-100"
                  }`}>
                    <span className={`text-sm font-black self-start mt-1 leading-none ${
                      isHot ? "text-white/80" : "text-indigo-600"
                    }`}>
                      {RUPEE}
                    </span>
                    <span className={`text-3xl sm:text-4xl font-black tracking-tight leading-none ${
                      isHot ? "text-white" : "text-slate-900"
                    }`}>
                      {cleanPrice(plan.price)}
                    </span>
                    {plan.period && (
                      <span className={`text-xs font-semibold mb-1 ml-1 ${
                        isHot ? "text-white/60" : "text-slate-400"
                      }`}>
                        {plan.period}
                      </span>
                    )}
                  </div>

                  {/* ── Features ── */}
                  <ul className="flex flex-col gap-3 flex-1">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <span className={`mt-0.5 flex-shrink-0 h-4 w-4 rounded-full flex items-center justify-center ${
                          isHot
                            ? "bg-white/20 text-white"
                            : "bg-indigo-50 text-indigo-600"
                        }`}>
                          <Check className="h-3 w-3" strokeWidth={3} />
                        </span>
                        <span className={`text-xs leading-snug ${
                          isHot ? "text-white/90" : "text-slate-600"
                        }`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* ── CTA Button ── */}
                  <Link
                    href="/contact"
                    className={`mt-1 inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl text-xs font-extrabold transition-all duration-200 hover:scale-[1.02] active:scale-[0.99] shadow-sm ${
                      isHot
                        ? "bg-white text-slate-900 hover:bg-slate-50 shadow-lg"
                        : `bg-gradient-to-r ${grad} text-white hover:opacity-90 hover:shadow-md`
                    }`}
                  >
                    {plan.cta ?? "Get Started"}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

        {/* ── Footer note ── */}
        <div className="mt-10 flex flex-col items-center gap-1.5">
          <p className="text-center text-xs text-slate-400 font-medium tracking-wide">
            All prices are in Indian Rupees ({RUPEE}) and exclusive of applicable GST
            &nbsp;&middot;&nbsp;
            Custom enterprise plans available on request
          </p>
          <p className="text-center text-xs text-slate-400">
            Need something different?{" "}
            <Link href="/contact" className="font-bold text-indigo-600 hover:text-indigo-700 underline underline-offset-2">
              Let&apos;s talk
            </Link>
          </p>
        </div>

      </div>
    </section>
  )
}
