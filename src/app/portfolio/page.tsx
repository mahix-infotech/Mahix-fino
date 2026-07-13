import { Navigation } from "@/components/sections/navigation/navigation"
import { Footer } from "@/components/sections/footer/footer"
import { PortfolioGrid } from "@/components/pages/portfolio/portfolio-grid"
import { Button } from "@/components/ui/button"
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
        <section className="py-24 bg-slate-50 border-t border-slate-100">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-red-900 via-red-800 to-blue-900 p-1 shadow-2xl">
              <div className="rounded-[22px] bg-gradient-to-br from-red-900/95 to-blue-900/95 p-12 md:p-16 text-white relative overflow-hidden">
                <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-white/5 pointer-events-none" />
                <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-white/5 pointer-events-none" />

                <div className="relative text-center">
                  <h3 className="text-3xl md:text-4xl font-black leading-tight mb-4">
                    Have a project in mind?
                  </h3>
                  <p className="text-white/70 max-w-xl mx-auto leading-relaxed text-base md:text-lg mb-10">
                    Let's collaborate to build something remarkable. Get in touch with our team for a free consultation and project roadmap analysis.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      asChild
                      size="lg"
                      className="rounded-xl bg-white text-red-900 hover:bg-slate-100 font-bold shadow-lg px-8 transition-all duration-300 hover:scale-105"
                    >
                      <Link href="/contact" className="flex items-center gap-2">
                        Start Your Project
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button
                      asChild
                      size="lg"
                      variant="outline"
                      className="rounded-xl border-white/20 bg-white/10 text-white hover:bg-white/20 font-semibold px-8 transition-all duration-300 hover:scale-105"
                    >
                      <Link href="/about">About Us</Link>
                    </Button>
                  </div>
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