import { Navigation } from "@/components/sections/navigation/navigation"
import { Footer } from "@/components/sections/footer/footer"
import { PortfolioGrid } from "@/components/pages/portfolio/portfolio-grid"
import Link from "next/link"
import { ArrowRight, FolderKanban } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Portfolio - Case Studies & Project Showcases | Mahix InfoTech",
  description: "Explore our recent projects and see how we've helped businesses transform their digital presence with innovative software engineering and custom applications.",
  keywords: "portfolio Mahix InfoTech, custom software showcase, client case studies, web mobile solutions portfolio",
}

export default function PortfolioPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />
      <main className="flex-grow">
        
        {/* ── Hero Section ─────────────────────────── */}
        <section
          className="relative overflow-hidden bg-cover bg-center py-28 sm:py-40 flex flex-col items-center justify-center text-center text-white"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(90,10,10,0.93), rgba(10,20,60,0.97)), url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600')`
          }}
        >
          {/* Grid overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

          {/* Glow orbs */}
          <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-red-800/20 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-900/20 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 z-10 flex flex-col items-center">
            {/* Icon badge */}
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-red-900/30 border border-red-700/40 text-red-300 mb-8">
              <FolderKanban className="h-8 w-8" />
            </div>

            {/* Eyebrow */}
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-red-400 mb-5">
              Case Studies & Highlights
            </span>

            <h1 className="text-5xl font-black tracking-tight sm:text-7xl max-w-4xl leading-[1.05] mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-red-400 via-red-300 to-blue-300 bg-clip-text text-transparent">
                Portfolio
              </span>
            </h1>

            <p className="mx-auto max-w-2xl text-lg text-white/70 leading-relaxed">
              Discover how we build high-performance products, scale infrastructure, and deliver real business value to companies across the globe.
            </p>
          </div>
        </section>

        {/* ── Portfolio Grid ───────────────────────── */}
        <PortfolioGrid />

        {/* ── CTA Section ───────────────────────────── */}
        <section className="py-24 bg-white border-t border-slate-100">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-3xl border border-slate-100 bg-slate-50 p-12 md:p-16 text-center shadow-sm">
              {/* Subtle glow orbs */}
              <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-blue-100/60 blur-[80px] pointer-events-none" />
              <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-violet-100/40 blur-[60px] pointer-events-none" />
              <div className="relative">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-200 bg-white text-xs font-bold uppercase tracking-widest text-slate-500 mb-6 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Let&apos;s Collaborate
                </span>
                <h3 className="text-3xl md:text-4xl font-black leading-tight mb-4 text-slate-900">
                  Have a{" "}
                  <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
                    project in mind?
                  </span>
                </h3>
                <p className="text-slate-500 max-w-xl mx-auto leading-relaxed text-base mb-10">
                  Let&apos;s build something remarkable together. Get in touch for a free consultation and project roadmap.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-slate-900 text-white font-bold text-sm hover:bg-slate-700 hover:scale-105 transition-all duration-300 shadow-lg"
                  >
                    Start Your Project
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/about"
                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border border-slate-200 bg-white text-slate-700 font-bold text-sm hover:bg-slate-50 hover:scale-105 transition-all duration-300"
                  >
                    About Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>


      </main>
      <Footer />
    </div>
  )
}