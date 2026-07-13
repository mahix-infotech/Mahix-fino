import * as React from "react"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Metadata } from "next"
import { ArrowRight, CheckCircle, Code, Globe, Smartphone, Megaphone, Terminal, Cpu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/sections/navigation/navigation"
import { Footer } from "@/components/sections/footer/footer"
import { locationsList, getKeywordsForLocation, rawKeywords } from "@/lib/seo-data"

interface PageProps {
  params: Promise<{
    location: string
  }>
}

// Generate metadata for each location dynamically
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { location: slug } = await params
  const matched = locationsList.find((loc) => loc.slug === slug)

  if (!matched) {
    return {
      title: "Not Found",
    }
  }

  const name = matched.name
  const keywords = getKeywordsForLocation(name)

  return {
    title: `${name} Website Development & SEO Services | Mahix InfoTech`,
    description: `Leading software development company in ${name}, Chennai. We specialize in custom web development, mobile apps, SEO, UI/UX design, and digital marketing services in ${name}. Contact us for a free quote.`,
    keywords: keywords.slice(0, 15).join(", "),
    alternates: {
      canonical: `https://mahixinfotech.com/chennai/${slug}`,
    },
    openGraph: {
      title: `Website Development & Digital Solutions in ${name}, Chennai`,
      description: `Transform your business in ${name} with high-performing custom software, responsive website designs, and performance-focused SEO audits.`,
      url: `https://mahixinfotech.com/chennai/${slug}`,
      type: "website",
    },
  }
}

// Generate static routes for all Chennai locations at build time
export async function generateStaticParams() {
  return locationsList.map((loc) => ({
    location: loc.slug,
  }))
}

export default async function LocationPage({ params }: PageProps) {
  const { location: slug } = await params
  const matched = locationsList.find((loc) => loc.slug === slug)

  if (!matched) {
    notFound()
  }

  const name = matched.name
  const category = matched.category
  const localKeywords = getKeywordsForLocation(name)

  // Sub-services list specifically designed for pSEO
  const services = [
    {
      icon: Code,
      title: "Website & Web App Development",
      desc: `We engineer highly responsive, lightning-fast custom websites and web applications in ${name}. Utilizing React and Next.js, we build platforms that scale seamlessly.`,
      slug: "web-development",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      desc: `Build cross-platform Android and iOS applications using Flutter and React Native. Fully optimized native experiences tailored to businesses in ${name}.`,
      slug: "mobile-apps",
    },
    {
      icon: Megaphone,
      title: "Local SEO & Marketing",
      desc: `Dominate search results near you. We provide custom SEO audits, technical schema implementation, Google Ads management, and paid social campaigns.`,
      slug: "seo",
    },
    {
      icon: Cpu,
      title: "AI Chatbots & Automation",
      desc: `Automate customer interactions and backend business workflows on AWS. We design and integrate intelligent custom software solutions.`,
      slug: "ai-ml",
    },
  ]

  // Value props list
  const valueProps = [
    "Enterprise-grade software engineering",
    "Complete mobile responsiveness & optimization",
    "SEO-optimized layout architectures",
    "Integrated WhatsApp & lead automation setups",
    "Transparent pricing & dedicated developer support",
  ]

  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-50 text-slate-900">
      <Navigation />

      <main className="pt-20">
        {/* ─── Hero Section ────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-slate-950 py-24 sm:py-32 text-white">
          {/* Background Grid Pattern Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
          
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-500/10 text-blue-400 border border-blue-500/20 uppercase tracking-widest mb-6">
                📍 Local SEO Hub: {category}
              </span>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-white">
                Website Development & Digital Marketing Services in{" "}
                <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
                  {name}
                </span>
              </h1>
              
              <p className="mt-6 text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed max-w-2xl">
                Mahix InfoTech delivers high-end web design, native mobile apps, and technical SEO services in {name}, Chennai. We help local enterprises scale with robust software architectures.
              </p>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full shadow-lg bg-blue-600 hover:bg-blue-700 text-white hover:scale-105 transition-all duration-300 border-none px-8 py-5"
                >
                  <Link href="/contact" className="flex items-center justify-center">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                
                <Button
                  variant="outline"
                  asChild
                  size="lg"
                  className="rounded-full border-white/10 bg-white/5 text-white hover:bg-white/10 hover:scale-105 transition-all duration-300 px-8 py-5"
                >
                  <Link href="/portfolio">View Our Work</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Services Grid ──────────────────────────────────────────────── */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                What We Do in {name}
              </h2>
              <p className="mt-4 text-slate-500 text-sm sm:text-base leading-relaxed">
                From responsive UI mockups to scalable backend integrations, we provide comprehensive software engineering tailored to your industry.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((svc) => {
                const Icon = svc.icon
                return (
                  <Card key={svc.title} className="border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all duration-300 rounded-3xl p-6">
                    <CardHeader className="p-0 flex flex-row items-center gap-4 mb-4">
                      <div className="h-12 w-12 rounded-2xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <CardTitle className="text-lg font-bold text-slate-900">{svc.title}</CardTitle>
                        <CardDescription className="text-xs text-slate-400 mt-0.5">Custom Solutions</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent className="p-0">
                      <p className="text-sm text-slate-600 leading-relaxed mb-6">{svc.desc}</p>
                      <Link
                        href={`/services/${svc.slug}`}
                        className="text-xs font-bold text-blue-600 hover:text-blue-700 hover:underline flex items-center gap-1 w-fit group"
                      >
                        Explore Service
                        <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                      </Link>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* ─── Programmatic SEO Tag Cloud Section (Natural Keyword Integration) ── */}
        <section className="py-20 bg-slate-50 border-y border-slate-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-2xl font-black text-slate-900 sm:text-3xl">
                SEO Search Intent & Capabilities in {name}
              </h2>
              <p className="mt-3 text-slate-500 text-xs sm:text-sm leading-relaxed">
                We design and optimize software setups to match exact user queries, search criteria, and Google local listings. Below are the key SEO optimization themes we target:
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto">
              {localKeywords.map((keyword, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="bg-white border border-slate-200/60 text-slate-600 text-xs font-semibold px-3 py-1.5 rounded-full shadow-xs hover:border-blue-400 hover:bg-blue-50/20 transition-all select-none"
                >
                  {keyword}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Localized Call To Action Section ────────────────────────────── */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none opacity-40" />
              
              <h2 className="text-3xl font-black tracking-tight sm:text-4xl text-white relative z-10">
                Ready to Grow Your Business in {name}?
              </h2>
              
              <p className="mt-4 text-slate-100 max-w-xl mx-auto text-sm sm:text-base leading-relaxed relative z-10">
                Get a custom website design, mobile application blueprint, or professional SEO audit. Our consultants respond within 24 hours.
              </p>

              {/* Value checks */}
              <div className="mt-8 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-x-6 gap-y-2.5 relative z-10">
                {valueProps.map((val) => (
                  <div key={val} className="flex items-center gap-1.5 text-xs text-slate-100">
                    <CheckCircle className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                    <span>{val}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
                <Button
                  asChild
                  className="w-full sm:w-auto px-8 py-5 rounded-full bg-white text-slate-900 font-bold hover:bg-slate-50 border-none shadow-lg hover:scale-105 transition-all duration-300"
                >
                  <Link href="/contact">Get a Free Consultation</Link>
                </Button>
                
                <a
                  href="tel:+918608610760"
                  className="text-xs font-bold text-white hover:underline flex items-center gap-1"
                >
                  Or call +91 8608610760
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
