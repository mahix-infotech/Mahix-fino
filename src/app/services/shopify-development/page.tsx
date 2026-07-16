import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShoppingBag, ArrowRight, Settings, ShieldCheck, Zap, ArrowUpRight, CheckCircle } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/sections/navigation/navigation"
import { Footer } from "@/components/sections/footer/footer"
import { TechStackGrid } from "@/components/sections/tech-stack/tech-stack-grid"
import type { Metadata } from "next"
import { PricingSection } from "@/components/sections/pricing/pricing-section"

export const metadata: Metadata = {
  title: "Shopify Store Design & Development | Mahix InfoTech",
  description: "Get a professional, custom-designed Shopify store. We specialize in custom theme development, Shopify app integrations, payment gateway configuration, and speed optimization.",
  keywords: "Shopify development, custom shopify theme, shopify setup, shopify builder, liquid coding",
}

const features = [
  {
    icon: ShoppingBag,
    title: "Custom Liquid Design",
    description: "Move past basic templates. We code custom layouts and features directly in Shopify's Liquid template language.",
    borderColor: "border-t-blue-500",
    hoverColor: "hover:border-blue-500/30"
  },
  {
    icon: Settings,
    title: "App Configuration",
    description: "Install, connect, and configure subscription management, reviews, and loyalty reward programs without slowing down your site.",
    borderColor: "border-t-emerald-500",
    hoverColor: "hover:border-emerald-500/30"
  },
  {
    icon: ShieldCheck,
    title: "Gateway Connections",
    description: "Integrate localized checkout options, dynamic tax calculations, and fulfillment partners seamlessly.",
    borderColor: "border-t-purple-500",
    hoverColor: "hover:border-purple-500/30"
  },
  {
    icon: Zap,
    title: "Page Speed Boost",
    description: "Optimize image compression, script loading rules, and CSS files to maximize your Shopify speed score.",
    borderColor: "border-t-orange-500",
    hoverColor: "hover:border-orange-500/30"
  }
]

const offerings = [
  {
    title: "Theme Design & Setup",
    description: "Custom branding, storefront design, and complete theme setup tailored to your identity.",
    features: ["Custom Theme Customization", "Mobile Optimization", "Navigation & Filtering", "Initial Product Uploads"],
    borderColor: "border-t-blue-500",
    hoverColor: "hover:border-blue-500/30"
  },
  {
    title: "Shopify App Development",
    description: "Custom app creation and API integrations to extend your Shopify store's capabilities.",
    features: ["Custom API Integration", "Private Shopify Apps", "Subscription System Setup", "Inventory Management Sync"],
    borderColor: "border-t-emerald-500",
    hoverColor: "hover:border-emerald-500/30"
  },
  {
    title: "Migration & Optimization",
    description: "Migrate your existing store to Shopify with complete SEO and speed optimization.",
    features: ["Zero-Downtime Migration", "SEO Link Redirection", "Page Speed Optimization", "Custom Checkout Layouts"],
    borderColor: "border-t-purple-500",
    hoverColor: "hover:border-purple-500/30"
  }
]

const technologies = [
  "Shopify Plus", "Liquid", "GraphQL", "Ruby on Rails", "React", "Next.js (Hydrogen)",
  "Tailwind CSS", "JavaScript", "HTML5/CSS3", "Stripe API", "Klaviyo", "Recharge API"
]

const shopifyPricing = [
  {
    name: "Basic Setup",
    price: "â‚¹12,999",
    period: "/project",
    tagline: "Get your Shopify store live with a premium theme.",
    features: [
      "Shopify Basic store setup",
      "Premium theme customization",
      "Up to 50 products upload",
      "Payment gateway setup",
      "Basic SEO & meta tags",
      "1 month free support",
    ],
    cta: "Get Started",
  },
  {
    name: "Custom Store",
    price: "â‚¹34,999",
    period: "/project",
    tagline: "Fully custom Shopify store designed for conversions.",
    features: [
      "Custom Liquid theme build",
      "Unlimited products",
      "Shopify apps integration",
      "Upsell & cross-sell setup",
      "Abandoned cart recovery",
      "Speed optimization",
      "3 months free support",
    ],
    highlighted: true,
    gradient: "from-green-500 to-emerald-600",
    cta: "Most Popular",
  },
  {
    name: "Shopify Plus",
    price: "â‚¹89,999+",
    period: "/project",
    tagline: "Enterprise Shopify Plus with custom checkout & integrations.",
    features: [
      "Shopify Plus build",
      "Custom checkout experience",
      "ERP / 3PL integration",
      "Multi-currency & multi-lang",
      "B2B wholesale portal",
      "Headless commerce option",
      "Dedicated Shopify developer",
    ],
    cta: "Contact Us",
  },
]
export default function ShopifyDevelopmentPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <main className="flex-grow">
        {/* Hero Section */}
        <section 
          className="relative overflow-hidden bg-cover bg-center py-24 sm:py-36 flex flex-col items-center justify-center text-center text-white"
          style={{ 
            backgroundImage: `linear-gradient(to bottom, rgba(15, 23, 42, 0.88), rgba(9, 9, 11, 0.96)), url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1600')` 
          }}
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30 pointer-events-none" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10 flex flex-col items-center">
            <Badge className="bg-blue-500/10 text-blue-400 border border-blue-500/25 mb-4 px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full">
              Shopify Partners
            </Badge>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl max-w-3xl leading-[1.12]">
              Scale Sales with{" "}
              <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
                Shopify Development
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300 leading-relaxed">
              We design premium e-commerce storefronts tailored to optimize conversion rate, order value, and repeat customer retention.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl border-none shadow-lg px-8 hover:scale-105 transition-all duration-300" asChild>
                <Link href="/contact" className="flex items-center gap-1.5 cursor-pointer">
                  Start Shopify Project
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section - Corporate Gray Background */}
        <section className="py-20 bg-slate-50 dark:bg-slate-900/20 border-b border-black/[0.05] dark:border-white/[0.08]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
                Expert Shopify Engineering
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                We handle store migrations, theme redesigns, localized tax compliance rules, and API connection pipelines.
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

        {/* Offerings Section - White Background */}
        <section className="py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
                Shopify Development Solutions
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {offerings.map((offering) => (
                <Card key={offering.title} className={`border-t-4 ${offering.borderColor} border-x border-b border-black/[0.05] dark:border-white/[0.08] bg-background flex flex-col justify-between shadow-sm transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl ${offering.hoverColor}`}>
                  <CardHeader>
                    <CardTitle className="text-xl font-bold">{offering.title}</CardTitle>
                    <CardDescription className="text-sm text-muted-foreground leading-relaxed mt-2">
                      {offering.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <ul className="space-y-2.5">
                      {offering.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm text-muted-foreground">
                          <CheckCircle className="mr-2 h-4 w-4 text-green-500 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full rounded-xl py-5" asChild>
                      <Link href="/contact">Get Quote</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <TechStackGrid
          technologies={technologies}
          title="Shopify Tech Stack"
          subtitle="We work with standard Shopify APIs and frameworks for stable headless or custom setups."
        />

        
        {/* Transparent Pricing */}
        <PricingSection
          plans={shopifyPricing}
          title="Plans & Packages"
          subtitle="Straightforward pricing built for your goals. No lock-ins, no surprises."
        />
      </main>
      <Footer />
    </div>
  )
}
