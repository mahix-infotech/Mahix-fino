import { Navigation } from "@/components/sections/navigation/navigation"
import { Footer } from "@/components/sections/footer/footer"
import { CareersList } from "@/components/pages/careers/careers-list"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Briefcase } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Careers - Join Our Team | Mahix InfoTech",
  description: "Join Mahix InfoTech. Explore hybrid and remote opportunities for software engineers, fullstack developers, designers, and marketing experts in Dindigul.",
  keywords: "careers Mahix InfoTech, software development jobs Dindigul, remote software developer vacancies, tech jobs Dindigul",
}

export default function CareersPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />
      <main className="flex-grow">

        {/* ── Hero ─────────────────────────────────── */}
        <section
          className="relative overflow-hidden bg-cover bg-center py-28 sm:py-40 flex flex-col items-center justify-center text-center text-white"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(90,10,10,0.92), rgba(10,20,60,0.97)), url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1600')`
          }}
        >
          {/* Grid overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

          {/* Glow orbs */}
          <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-red-800/20 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-blue-900/20 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10 flex flex-col items-center">
            {/* Icon badge */}
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-red-900/30 border border-red-700/40 text-red-300 mb-8">
              <Briefcase className="h-8 w-8" />
            </div>

            {/* Eyebrow */}
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-red-400 mb-5">
              We're hiring · Join our team
            </span>

            <h1 className="text-5xl font-black tracking-tight sm:text-7xl max-w-4xl leading-[1.05] mb-6">
              Build your{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-red-400 via-red-300 to-blue-300 bg-clip-text text-transparent">
                  career
                </span>
              </span>
              {" "}at Mahix
            </h1>

            <p className="mx-auto max-w-2xl text-lg text-white/70 leading-relaxed mb-10">
              Join a team of passionate developers, designers, and digital experts building products that matter — for clients across the globe.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-red-900 hover:bg-red-800 text-white rounded-xl border-none shadow-xl px-8 hover:scale-105 transition-all duration-300 font-bold"
                asChild
              >
                <Link href="#open-positions" className="flex items-center gap-2">
                  View Open Roles
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/15 bg-white/8 text-white hover:bg-white/15 rounded-xl px-8 hover:scale-105 transition-all duration-300"
                asChild
              >
                <Link href="/about">About Mahix</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* ── Careers Body ─────────────────────────── */}
        <CareersList />

      </main>
      <Footer />
    </div>
  )
}