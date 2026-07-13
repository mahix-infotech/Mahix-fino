import { Navigation } from "@/components/sections/navigation/navigation"
import { Footer } from "@/components/sections/footer/footer"
import { ContactForm } from "@/components/pages/contact/contact-form"
import { ContactInfo } from "@/components/pages/contact/contact-info"
import { MessageCircle } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us - Get in Touch with Mahix InfoTech | Dindigul",
  description: "Contact Mahix InfoTech for your software development needs. Located in Dindigul, Tamil Nadu. Call +91 8608610760 or email contact@mahixinfotech.com for web development, mobile apps, and AI solutions.",
  keywords: "contact Mahix InfoTech, software development company Dindigul, Dindigul office, web development contact, mobile app development inquiry",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />
      <main className="flex-grow">

        {/* ── Hero ─────────────────────────────────── */}
        <section
          className="relative overflow-hidden bg-cover bg-center py-28 sm:py-40 flex flex-col items-center justify-center text-center text-white"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(90,10,10,0.93), rgba(10,20,60,0.97)), url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=1600')`
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
              <MessageCircle className="h-8 w-8" />
            </div>

            {/* Eyebrow */}
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-red-400 mb-5">
              Let's work together
            </span>

            <h1 className="text-5xl font-black tracking-tight sm:text-7xl max-w-4xl leading-[1.05] mb-6">
              Get in{" "}
              <span className="bg-gradient-to-r from-red-400 via-red-300 to-blue-300 bg-clip-text text-transparent">
                Touch
              </span>
            </h1>

            <p className="mx-auto max-w-2xl text-lg text-white/70 leading-relaxed">
              Ready to start your next project? Let's discuss how we can help transform your business with innovative digital solutions — we typically reply within 24 hours.
            </p>

            {/* Trust pills */}
            <div className="flex flex-wrap justify-center gap-3 mt-10">
              {["⚡ Under 24hr Reply", "✅ 98% Success Rate", "🌍 Global Clients", "⭐ 4.9/5 Rating"].map((item) => (
                <span key={item} className="px-4 py-2 rounded-full bg-white/10 border border-white/15 text-sm font-semibold text-white/80 backdrop-blur-sm">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── Contact Body ─────────────────────────── */}
        <section className="py-24 bg-slate-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">

              {/* Form — wider column */}
              <div className="lg:col-span-3">
                <ContactForm />
              </div>

              {/* Info — narrower column */}
              <div className="lg:col-span-2">
                <ContactInfo />
              </div>

            </div>
          </div>
        </section>

        {/* ── Map / CTA Banner ─────────────────────── */}
        <section className="py-24 bg-white border-t border-slate-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-red-900 via-red-800 to-blue-900 p-1 shadow-2xl">
              <div className="rounded-[22px] bg-gradient-to-br from-red-900/95 to-blue-900/95 p-12 md:p-16 text-white relative overflow-hidden">
                <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-white/5 pointer-events-none" />
                <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-white/5 pointer-events-none" />

                <div className="relative grid md:grid-cols-2 gap-10 items-center">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-red-300 mb-3 block">Our Office</span>
                    <h2 className="text-3xl md:text-4xl font-black mb-4 leading-tight">Visit us in Dindigul</h2>
                    <p className="text-white/70 leading-relaxed text-base">
                      89/4, Scheme Road, Krishna Raja Harini Illam,<br />
                      Near Head Post Office Road, Dindigul,<br />
                      Tamil Nadu — 624001, India
                    </p>
                    <div className="mt-8 space-y-3">
                      <div className="flex items-center gap-3 text-white/80 text-sm">
                        <span className="text-red-300">📞</span>
                        <span>+91 8608610760</span>
                      </div>
                      <div className="flex items-center gap-3 text-white/80 text-sm">
                        <span className="text-red-300">✉</span>
                        <span>contact@mahixinfotech.com</span>
                      </div>
                      <div className="flex items-center gap-3 text-white/80 text-sm">
                        <span className="text-red-300">🕐</span>
                        <span>Mon–Fri: 9am – 6pm &nbsp;|&nbsp; Sat: 10am – 4pm</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: "Response Time", value: "< 24 hrs" },
                      { label: "Project Success", value: "98%" },
                      { label: "Client Rating", value: "4.9 / 5" },
                      { label: "Years Active", value: "5+" },
                    ].map((stat) => (
                      <div key={stat.label} className="rounded-2xl bg-white/10 border border-white/15 p-6 text-center backdrop-blur-sm">
                        <div className="text-3xl font-black text-white mb-1">{stat.value}</div>
                        <div className="text-xs text-white/60 font-semibold uppercase tracking-wider">{stat.label}</div>
                      </div>
                    ))}
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