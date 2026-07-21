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
import { ServicesSection } from "@/components/sections/services/services-section"
import { KeywordCloud } from "@/components/pages/seo/keyword-cloud"
import { locationsList, getKeywordsForLocation, rawKeywords, parseSeoSlug, seoServicesList, getLocationRegionName } from "@/lib/seo-data"

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

// Generate metadata for each local service page dynamically
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const parsed = parseSeoSlug(slug)

  if (!parsed) {
    return {
      title: "Not Found",
    }
  }

  const name = parsed.location.name
  const regionName = getLocationRegionName(parsed.location.category)
  const keywords = getKeywordsForLocation(name)

  let title = `${name} Software Development & Digital Agency | Mahix InfoTech`
  let description = `Leading software development agency in ${name}, ${regionName}. We specialize in custom web development, mobile apps, SEO, UI/UX design, and enterprise software solutions in ${name}. Contact us for a free quote.`

  if (parsed.serviceType === "web-development") {
    title = `Web Development Services in ${name}, ${regionName} | Mahix InfoTech`
    description = `Premium web development agency in ${name}, ${regionName}. We design responsive, fast, and SEO-optimized web apps, Next.js portals, and custom e-commerce solutions in ${name}.`
  } else if (parsed.serviceType === "mobile-app-development") {
    title = `Mobile App Development in ${name}, ${regionName} | Mahix InfoTech`
    description = `Professional mobile app developers in ${name}, ${regionName}. We engineer cross-platform Android and iOS apps using Flutter and React Native in ${name}.`
  } else if (parsed.serviceType === "seo-services") {
    title = `SEO Services & Local Search Optimization in ${name}, ${regionName} | Mahix InfoTech`
    description = `Top SEO agency in ${name}, ${regionName}. Increase search traffic with professional local SEO audits, Google Ads PPC management, and page speed optimization in ${name}.`
  } else if (parsed.serviceType === "custom-software") {
    title = `Custom Software Development Company in ${name}, ${regionName} | Mahix InfoTech`
    description = `Leading custom software engineering agency in ${name}, ${regionName}. Enterprise ERPs, CRM software, API integration, and cloud application development in ${name}.`
  } else if (parsed.serviceType === "e-commerce-development") {
    title = `E-Commerce & Shopify Store Development in ${name}, ${regionName} | Mahix InfoTech`
    description = `Expert e-commerce website developers in ${name}, ${regionName}. Custom Shopify stores, WooCommerce platforms, and payment gateway integration in ${name}.`
  } else if (parsed.serviceType === "ai-ml-solutions") {
    title = `AI & Machine Learning Solutions in ${name}, ${regionName} | Mahix InfoTech`
    description = `Cutting-edge AI & Machine Learning software solutions in ${name}, ${regionName}. AI chatbots, predictive analytics, NLP, and automated workflow software in ${name}.`
  }

  return {
    title,
    description,
    keywords: keywords.slice(0, 20).join(", "),
    alternates: {
      canonical: `https://mahixinfotech.com/seo/${slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://mahixinfotech.com/seo/${slug}`,
      type: "website",
    },
  }
}

// Generate static routes for all locations and their respective services at build time
export async function generateStaticParams() {
  const params: { slug: string }[] = []
  
  locationsList.forEach((loc) => {
    // 1. Generic page
    params.push({ slug: loc.slug })
    
    // 2. Service pages
    seoServicesList.forEach((svc) => {
      params.push({ slug: `${svc.prefix}${loc.slug}` })
    })
  })
  
  return params
}

function getServiceHeroBgImage(serviceType: string): string {
  switch (serviceType) {
    case "web-development":
      return "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2000"
    case "mobile-app-development":
      return "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=2000"
    case "seo-services":
      return "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000"
    case "custom-software":
      return "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=2000"
    case "e-commerce-development":
      return "https://images.unsplash.com/photo-1556742049-0a67414d4554?auto=format&fit=crop&q=80&w=2000"
    case "ai-ml-solutions":
      return "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&q=80&w=2000"
    default:
      return "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2000"
  }
}

export default async function LocationPage({ params }: PageProps) {
  const { slug } = await params
  const parsed = parseSeoSlug(slug)

  if (!parsed) {
    notFound()
  }

  const name = parsed.location.name
  const category = parsed.location.category
  const regionName = getLocationRegionName(category)
  const localKeywords = getKeywordsForLocation(name)
  const serviceType = parsed.serviceType

  // Set up service-specific titles and hero text
  let heroTitle = (
    <>
      Software Development & Digital Marketing Services in{" "}
      <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
        {name}
      </span>
    </>
  )
  let heroDesc = `Mahix InfoTech delivers high-end web design, native mobile apps, custom ERPs, and technical SEO services in ${name}, ${regionName}. We help local enterprises scale with robust software architectures.`

  if (serviceType === "web-development") {
    heroTitle = (
      <>
        Web Development & E-Commerce Solutions in{" "}
        <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
          {name}
        </span>
      </>
    )
    heroDesc = `Custom web developers in ${name}, ${regionName}. We build high-speed Next.js web applications, Shopify storefronts, WordPress layouts, and secure database integrations.`
  } else if (serviceType === "mobile-app-development") {
    heroTitle = (
      <>
        Mobile App Development (Flutter & React Native) in{" "}
        <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
          {name}
        </span>
      </>
    )
    heroDesc = `Professional mobile app developers in ${name}, ${regionName}. We build beautiful, high-performing iOS and Android apps with secure cloud backends on AWS.`
  } else if (serviceType === "seo-services") {
    heroTitle = (
      <>
        Technical SEO & Local Search Optimization in{" "}
        <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
          {name}
        </span>
      </>
    )
    heroDesc = `Grow your organic search traffic in ${name}, ${regionName}. We provide technical SEO audits, on-page optimization, backlink building, and PPC campaign management.`
  } else if (serviceType === "custom-software") {
    heroTitle = (
      <>
        Custom Software Engineering & Enterprise ERPs in{" "}
        <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
          {name}
        </span>
      </>
    )
    heroDesc = `Dedicated custom software developers in ${name}, ${regionName}. Tailored billing systems, textile/leather ERPs, CRM tools, and cloud software integrations.`
  } else if (serviceType === "e-commerce-development") {
    heroTitle = (
      <>
        E-Commerce & Shopify Store Development in{" "}
        <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
          {name}
        </span>
      </>
    )
    heroDesc = `Build high-converting online stores in ${name}, ${regionName}. Custom Shopify themes, WooCommerce portals, payment gateways, and inventory automation.`
  } else if (serviceType === "ai-ml-solutions") {
    heroTitle = (
      <>
        Artificial Intelligence & Machine Learning Solutions in{" "}
        <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
          {name}
        </span>
      </>
    )
    heroDesc = `Transform your business with AI innovation in ${name}, ${regionName}. Intelligent AI chatbots, predictive data models, NLP systems, and business process automation.`
  }

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

  const heroBgImage = getServiceHeroBgImage(serviceType)

  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-50 text-slate-900">
      <Navigation />

      <main className="pt-20">
        {/* ─── Hero Section ────────────────────────────────────────────────── */}
        <section 
          className="relative overflow-hidden bg-cover bg-center py-24 sm:py-32 text-white"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(10, 15, 30, 0.88), rgba(15, 23, 42, 0.95)), url('${heroBgImage}')`
          }}
        >
          {/* Background Grid Pattern Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
          
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-500/10 text-blue-400 border border-blue-500/20 uppercase tracking-widest mb-6">
                📍 Local SEO Hub: {category}
              </span>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-white">
                {heroTitle}
              </h1>
              
              <p className="mt-6 text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed max-w-2xl">
                {heroDesc}
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

        {/* ─── Our Services Carousel ────────────────────────────────────── */}
        <ServicesSection />

        {/* ─── Collapsible SEO Keyword Cloud ────────────────────────────── */}
        <KeywordCloud locationName={name} keywords={localKeywords} />

        {/* ─── Localized Call To Action Section ────────────────────────────── */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none opacity-40" />
              
              <h2 className="text-3xl font-black tracking-tight sm:text-4xl text-white relative z-10">
                Ready to Grow Your Business in {name}?
              </h2>
              
              <p className="mt-4 text-slate-100 max-w-xl mx-auto text-sm sm:text-base leading-relaxed relative z-10">
                Get a custom web layouts blueprint, mobile application blueprint, or professional SEO audit. Our consultants respond within 24 hours.
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
