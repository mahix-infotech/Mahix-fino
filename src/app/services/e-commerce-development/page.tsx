import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, CheckCircle, ArrowRight, Shield, Zap, BarChart, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/sections/navigation/navigation"
import { Footer } from "@/components/sections/footer/footer"
import { TechStackGrid } from "@/components/sections/tech-stack/tech-stack-grid"
import type { Metadata } from "next"
import { PricingSection } from "@/components/sections/pricing/pricing-section"

export const metadata: Metadata = {
  title: "E-commerce Development Services | Mahix InfoTech",
  description: "Launch your online store with our premium E-commerce development services. We build scalable, high-performance, and secure e-commerce platforms using Shopify, WooCommerce, and custom Next.js solutions.",
  keywords: "e-commerce development, online store, Shopify, custom shop, nextjs commerce, payment integration",
}

const features = [
  {
    icon: ShoppingCart,
    title: "High Conversion UX",
    description: "Designed to turn visitors into buyers with modern and intuitive checkout flows.",
    borderColor: "border-t-blue-500",
    hoverColor: "hover:border-blue-500/30"
  },
  {
    icon: Shield,
    title: "Secure Payments",
    description: "Seamless integration with Stripe, PayPal, Razorpay, and regional gateways.",
    borderColor: "border-t-emerald-500",
    hoverColor: "hover:border-emerald-500/30"
  },
  {
    icon: Zap,
    title: "Blazing Fast Speed",
    description: "Optimized product pages and fast image loading to reduce cart abandonment.",
    borderColor: "border-t-purple-500",
    hoverColor: "hover:border-purple-500/30"
  },
  {
    icon: BarChart,
    title: "Analytics & Reports",
    description: "Full visibility into sales funnel, traffic insights, and conversion metrics.",
    borderColor: "border-t-orange-500",
    hoverColor: "hover:border-orange-500/30"
  }
]

const servicesList = [
  {
    title: "Custom Headless Commerce",
    description: "High-performance store infrastructure built with Next.js, Stripe, and headless CMS for complete design flexibility.",
    features: ["Instant transitions", "Omnichannel scaling", "Premium custom branding", "SEO-optimized structure"],
    borderColor: "border-t-blue-500",
    hoverColor: "hover:border-blue-500/30"
  },
  {
    title: "Shopify & Shopify Plus",
    description: "Custom template designs, custom app integrations, and backend configuration tailored to your sales volume.",
    features: ["Store setup & launch", "App integrations", "Custom liquid development", "Migration support"],
    borderColor: "border-t-emerald-500",
    hoverColor: "hover:border-emerald-500/30"
  },
  {
    title: "B2B E-commerce Portals",
    description: "Wholesale ordering dashboards, bulk pricing rules, tax exemption logic, and customer account structures.",
    features: ["Bulk checkout", "Invoice automation", "Tiered user levels", "CRM & ERP synchronization"],
    borderColor: "border-t-purple-500",
    hoverColor: "hover:border-purple-500/30"
  }
]

const technologies = [
  "Next.js Commerce", "Shopify Hydrogen", "MedusaJS", "Stripe API", "GraphQL", "Tailwind CSS",
  "WooCommerce", "PostgreSQL", "Node.js", "Redis Caching", "Sanity CMS", "Algolia Search"
]

const ecommercePricing = [
  {
    name: "Starter Store",
    price: "â‚¹19,999",
    period: "/project",
    tagline: "Launch a clean online store with essential features.",
    features: [
      "Up to 100 products",
      "Payment gateway (Razorpay/Stripe)",
      "Order management",
      "Mobile-responsive design",
      "Basic SEO",
      "1 month free support",
    ],
    cta: "Launch Store",
  },
  {
    name: "Growth Store",
    price: "â‚¹54,999",
    period: "/project",
    tagline: "Feature-rich e-commerce with inventory & analytics.",
    features: [
      "Unlimited products",
      "Multi-payment gateway",
      "Inventory management",
      "Coupon & discount engine",
      "Customer account portal",
      "Advanced analytics",
      "Email marketing setup",
      "3 months free support",
    ],
    highlighted: true,
    gradient: "from-orange-500 to-rose-600",
    cta: "Most Popular",
  },
  {
    name: "Enterprise Store",
    price: "â‚¹1,29,999+",
    period: "/project",
    tagline: "Multi-vendor marketplace or high-volume retail platform.",
    features: [
      "Multi-vendor support",
      "Custom checkout flow",
      "ERP / CRM integration",
      "AI product recommendations",
      "Loyalty rewards program",
      "Performance optimization",
      "Dedicated support team",
    ],
    cta: "Contact Us",
  },
]
export default function EcommerceDevelopmentPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <main className="flex-grow">
        {/* Hero Section */}
        <section 
          className="relative overflow-hidden bg-cover bg-center py-24 sm:py-36 flex flex-col items-center justify-center text-center text-white"
          style={{ 
            backgroundImage: `linear-gradient(to bottom, rgba(15, 23, 42, 0.88), rgba(9, 9, 11, 0.96)), url('https://images.unsplash.com/photo-1472851294608-062f824d296e?auto=format&fit=crop&q=80&w=1600')` 
          }}
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30 pointer-events-none" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10 flex flex-col items-center">
            <Badge className="bg-blue-500/10 text-blue-400 border border-blue-500/25 mb-4 px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full">
              E-commerce Development
            </Badge>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl max-w-3xl leading-[1.12]">
              Build a High-Converting{" "}
              <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
                Online Store
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300 leading-relaxed">
              Launch scalable storefronts that rank high in search, load in milliseconds, and maximize your product sales worldwide.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl border-none shadow-lg px-8 hover:scale-105 transition-all duration-300" asChild>
                <Link href="/contact" className="flex items-center gap-1.5 cursor-pointer">
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white/10 bg-white/5 text-white hover:bg-white/10 rounded-xl px-8 hover:scale-105 transition-all duration-300" asChild>
                <Link href="/portfolio">View Showcase</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section - Corporate Gray Background */}
        <section className="py-20 bg-slate-50 dark:bg-slate-900/20 border-b border-black/[0.05] dark:border-white/[0.08]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
                Storefronts Optimized for Growth
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                We combine bleeding-edge technology with conversion-focused UX patterns to build store experiences customers love.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <Card key={idx} className={`border-t-4 ${feature.borderColor} border-x border-b border-black/[0.05] dark:border-white/[0.08] bg-background/70 backdrop-blur-md shadow-sm transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl ${feature.hoverColor}`}>
                    <CardHeader className="text-center">
                      <div className="h-12 w-12 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-6 w-6" />
                      </div>
                      <CardTitle className="text-lg font-bold">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Modular Solutions Section - White Background */}
        <section className="py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
                E-commerce Architecture Styles
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Whether you need a fully custom web shop or a fast Shopify implementation, we construct the ideal backend solution.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {servicesList.map((service, idx) => (
                <Card key={idx} className={`border-t-4 ${service.borderColor} border-x border-b border-black/[0.05] dark:border-white/[0.08] bg-background flex flex-col justify-between shadow-sm transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl ${service.hoverColor}`}>
                  <CardHeader>
                    <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                    <CardDescription className="text-sm text-muted-foreground leading-relaxed mt-2">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <ul className="space-y-3">
                      {service.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="w-full rounded-xl py-5">
                      <Link href="/contact" className="flex items-center justify-center gap-1.5">
                        Consult with Us
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <TechStackGrid
          technologies={technologies}
          title="Merchant Platforms & Engines"
          subtitle="We select programming frameworks optimized for checkout speed, security, and scaling."
        />

        
        {/* Transparent Pricing */}
        <PricingSection
          plans={ecommercePricing}
          title="Plans & Packages"
          subtitle="Straightforward pricing built for your goals. No lock-ins, no surprises."
        />
      </main>
      <Footer />
    </div>
  )
}
