"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Phone, Mail, Sparkles, Zap, BarChart3, Globe } from "lucide-react"
import ScrollStack, { ScrollStackItem } from "@/components/ui/scroll-stack"

/* ─────────────────────────────────────────────────────────────
   CTA card background images.
   Set `image` to a /public path when you have the real photo.
   Leave null to show the original gradient background.
───────────────────────────────────────────────────────────── */
const ctaCards = {
  card1Image: null as string | null,   // e.g. "/cta-transform.jpg"
  card2Image: null as string | null,   // e.g. "/cta-stats.jpg"
  card3Image: null as string | null,   // e.g. "/cta-services.jpg"
  card4Image: null as string | null,   // e.g. "/cta-contact.jpg"
}

/** Reusable full-bleed image layer — sits behind all card content */
function CardBgImage({ src, overlay }: { src: string; overlay: string }) {
  return (
    <>
      <Image
        src={src}
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center"
        draggable={false}
        priority={false}
      />
      {/* Dark/colored overlay for text readability */}
      <div className="absolute inset-0" style={{ background: overlay }} />
    </>
  )
}

export function CTASection() {
  return (
    /*
      height: 100vh  → the section takes exactly one viewport height on the page.
      The ScrollStack scrolls WITHIN this container (useWindowScroll=false).
      This means:
        - The rest of the page (Hero, Services, About, Testimonials, Footer) is
          fully reachable by scrolling on the page.
        - Once the user scrolls down to this section, they scroll INSIDE it to
          see the cards stack one on top of another.
        - No second scrollbar on the right — the inner scroller is contained.
    */
    <section className="relative">
      <ScrollStack
        itemDistance={50}
        itemScale={0.03}
        itemStackDistance={30}
        stackPosition="20%"
        scaleEndPosition="10%"
        baseScale={0.85}
        rotationAmount={0}
        blurAmount={0}
        useWindowScroll={true}
      >

        {/* ── Card 1 — Main CTA ── */}
        <ScrollStackItem itemClassName="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white flex flex-col items-center justify-center text-center overflow-hidden">
          {/* BG Image layer */}
          {ctaCards.card1Image && (
            <CardBgImage
              src={ctaCards.card1Image}
              overlay="linear-gradient(135deg, rgba(37,99,235,0.82) 0%, rgba(79,70,229,0.80) 50%, rgba(109,40,217,0.82) 100%)"
            />
          )}
          {/* Glow orbs */}
          <div className="absolute top-0 right-0 -translate-y-1/3 translate-x-1/3 w-96 h-96 bg-white/5 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-96 h-96 bg-white/10 rounded-full blur-[80px] pointer-events-none" />
          {/* Content */}
          <div className="relative z-10 flex flex-col items-center gap-4 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/20 bg-white/10 text-xs font-semibold text-white">
              <Sparkles className="h-4 w-4" />
              Let&apos;s collaborate
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
              Ready to Transform Your Business?
            </h2>
            <p className="text-blue-100/90 text-base leading-relaxed max-w-lg">
              Let&apos;s discuss your project requirements and see how we can build, scale, and
              transform your business online. Get a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white text-blue-700 font-bold text-sm hover:bg-blue-50 hover:scale-105 transition-all duration-300 shadow-xl"
              >
                Get Free Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="tel:+918608610760"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/30 text-white text-sm font-semibold hover:bg-white/10 transition-all duration-300"
              >
                <Phone className="h-4 w-4" />
                +91 8608610760
              </a>
            </div>
          </div>
        </ScrollStackItem>

        {/* ── Card 2 — Stats ── */}
        <ScrollStackItem itemClassName="bg-slate-900 text-white flex flex-col justify-center gap-6 overflow-hidden">
          {ctaCards.card2Image && (
            <CardBgImage
              src={ctaCards.card2Image}
              overlay="linear-gradient(135deg, rgba(15,23,42,0.88) 0%, rgba(30,41,59,0.85) 100%)"
            />
          )}
          <div className="relative z-10 flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-yellow-400" />
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Why Mahix InfoTech</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug">
              Built for speed. Designed to scale.
            </h3>
            <div className="grid grid-cols-3 gap-4">
              {[
                { label: "50+",  sub: "Happy Clients",      icon: "🌍" },
                { label: "100+", sub: "Projects Delivered", icon: "🚀" },
                { label: "5+",   sub: "Years Experience",   icon: "⭐" },
              ].map(stat => (
                <div key={stat.label} className="bg-white/5 rounded-2xl px-5 py-4 text-center border border-white/10">
                  <div className="text-2xl mb-1">{stat.icon}</div>
                  <div className="text-2xl font-extrabold text-white">{stat.label}</div>
                  <div className="text-xs text-slate-400 mt-0.5">{stat.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </ScrollStackItem>

        {/* ── Card 3 — Services ── */}
        <ScrollStackItem itemClassName="bg-gradient-to-br from-emerald-500 to-teal-700 text-white flex flex-col justify-center gap-5 overflow-hidden">
          {ctaCards.card3Image && (
            <CardBgImage
              src={ctaCards.card3Image}
              overlay="linear-gradient(135deg, rgba(16,185,129,0.82) 0%, rgba(15,118,110,0.85) 100%)"
            />
          )}
          <div className="relative z-10 flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-emerald-200" />
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-100">Our Core Services</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug">
              Everything your business needs — in one place.
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Web Development", "Mobile Apps", "AI & ML", "Cloud Services",
                "SEO Optimization", "E-commerce", "Digital Marketing", "CRM Solutions",
              ].map(tag => (
                <span key={tag} className="px-3 py-1.5 rounded-full bg-white/15 text-sm font-semibold text-white border border-white/20">
                  {tag}
                </span>
              ))}
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 mt-2 px-6 py-3 rounded-full bg-white text-emerald-700 font-bold text-sm w-fit hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Explore All Services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </ScrollStackItem>

        {/* ── Card 4 — Contact ── */}
        <ScrollStackItem itemClassName="bg-white border border-slate-100 flex flex-col justify-center gap-5 overflow-hidden">
          {ctaCards.card4Image && (
            <CardBgImage
              src={ctaCards.card4Image}
              overlay="rgba(255,255,255,0.88)"
            />
          )}
          <div className="relative z-10 flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-blue-600" />
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Get in Touch</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-snug">
              Start your project today.
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed max-w-md">
              Reach out through any channel — our team responds within 24 hours and we&apos;ll
              schedule a free consultation to understand your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="mailto:contact@mahixinfotech.com"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-slate-900 text-white text-sm font-semibold hover:bg-slate-700 hover:scale-105 transition-all duration-300 w-fit"
              >
                <Mail className="h-4 w-4" />
                contact@mahixinfotech.com
              </a>
              <a
                href="tel:+918608610760"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-slate-200 text-slate-700 text-sm font-semibold hover:bg-slate-50 hover:scale-105 transition-all duration-300 w-fit"
              >
                <Phone className="h-4 w-4" />
                +91 8608610760
              </a>
            </div>
          </div>
        </ScrollStackItem>

      </ScrollStack>
    </section>
  )
}
