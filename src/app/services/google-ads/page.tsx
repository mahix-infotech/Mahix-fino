import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, Percent, Target, ArrowRight, BarChart4, CheckCircle, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/sections/navigation/navigation"
import { Footer } from "@/components/sections/footer/footer"
import { TechStackGrid } from "@/components/sections/tech-stack/tech-stack-grid"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Google Ads Campaigns Management | Mahix InfoTech",
  description: "Maximize your ROI with expert Google Ads campaign management. We setup and optimize Search, Display, YouTube, and Performance Max campaigns to drive sales and high-quality leads.",
  keywords: "Google Ads, PPC, Pay-per-click, Search Ads, YouTube ads, Performance Max, local search marketing",
}

const features = [
  {
    icon: Search,
    title: "Search Ads (PPC)",
    description: "Capture high-intent traffic bidding on keywords that convert into phone calls, sales, and leads.",
    borderColor: "border-t-blue-500",
    hoverColor: "hover:border-blue-500/30"
  },
  {
    icon: Percent,
    title: "Shopping & Performance Max",
    description: "Display products directly in Google Search and Shopping tab to capture ready-to-buy consumers.",
    borderColor: "border-t-emerald-500",
    hoverColor: "hover:border-emerald-500/30"
  },
  {
    icon: Target,
    title: "Remarketing Campaigns",
    description: "Bring back past website visitors by showing optimized display banners across Google's massive partner network.",
    borderColor: "border-t-purple-500",
    hoverColor: "hover:border-purple-500/30"
  },
  {
    icon: BarChart4,
    title: "Data Attribution",
    description: "Integrate exact conversion tracking using Google Analytics 4 (GA4) and Google Tag Manager.",
    borderColor: "border-t-orange-500",
    hoverColor: "hover:border-orange-500/30"
  }
]

const packages = [
  {
    title: "Lead Generation PPC",
    description: "Ideal for B2B and service businesses seeking consistent phone calls, consult appointments, or quote forms.",
    features: ["Keyword Intent Analysis", "Negative Keyword Scrubbing", "Ad Text Copywriting", "Conversion Tag Diagnostics"],
    borderColor: "border-t-blue-500",
    hoverColor: "hover:border-blue-500/30"
  },
  {
    title: "E-commerce Shopping Setup",
    description: "Optimized for direct sales. Setup Google Merchant Center and run smart Performance Max campaigns.",
    features: ["Merchant Feed Setup", "Performance Max Optimization", "Asset Group Building", "ROAS Target Bidding"],
    borderColor: "border-t-emerald-500",
    hoverColor: "hover:border-emerald-500/30"
  },
  {
    title: "Enterprise Ad Retargeting",
    description: "Run retargeting, display branding, and YouTube pre-roll campaigns to capture mid-funnel interest.",
    features: ["YouTube Video Ads", "Dynamic Display Remarketing", "Audience List Segmenting", "Cross-Domain Tracking"],
    borderColor: "border-t-purple-500",
    hoverColor: "hover:border-purple-500/30"
  }
]

const technologies = [
  "Google Ads Editor", "Google Merchant Center", "Google Tag Manager", "GA4", "Looker Studio",
  "Google Sheets", "YouTube Ads Console", "Keyword Planner", "API Integration", "HTML5 Creatives"
]

const relatedServices = [
  {
    title: "Meta Ads",
    description: "Run retargeting and creative campaigns on Facebook and Instagram feed displays.",
    href: "/services/meta-ads",
    borderColor: "border-t-blue-500",
    hoverColor: "hover:border-blue-500/30"
  },
  {
    title: "Digital Marketing",
    description: "Deploy social media funnels, email marketing, and lead acquisition pipelines.",
    href: "/services/digital-marketing",
    borderColor: "border-t-emerald-500",
    hoverColor: "hover:border-emerald-500/30"
  },
  {
    title: "SEO Optimization",
    description: "Accelerate your search presence and drive high-intent organic sales traffic.",
    href: "/services/seo",
    borderColor: "border-t-purple-500",
    hoverColor: "hover:border-purple-500/30"
  }
]

export default function GoogleAdsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <main className="flex-grow">
        {/* Hero Section */}
        <section 
          className="relative overflow-hidden bg-cover bg-center py-24 sm:py-36 flex flex-col items-center justify-center text-center text-white"
          style={{ 
            backgroundImage: `linear-gradient(to bottom, rgba(15, 23, 42, 0.88), rgba(9, 9, 11, 0.96)), url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600')` 
          }}
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30 pointer-events-none" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10 flex flex-col items-center">
            <Badge className="bg-blue-500/10 text-blue-400 border border-blue-500/25 mb-4 px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full">
              Paid Search Marketing
            </Badge>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl max-w-3xl leading-[1.12]">
              Scale Traffic with{" "}
              <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
                Google Ads
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300 leading-relaxed">
              We engineer conversion-optimized Search and Shopping campaigns designed to capture customers right when they are looking for you.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl border-none shadow-lg px-8 hover:scale-105 transition-all duration-300" asChild>
                <Link href="/contact" className="flex items-center gap-1.5 cursor-pointer">
                  Launch Google Ads
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
                Google Advertising Channels
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                We handle keyword analysis, ad copy testing, bid management, and negative matching to maximize budget efficiency.
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

        {/* Packages Section - White Background */}
        <section className="py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
                Ad Management Packages
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {packages.map((pkg) => (
                <Card key={pkg.title} className={`border-t-4 ${pkg.borderColor} border-x border-b border-black/[0.05] dark:border-white/[0.08] bg-background flex flex-col justify-between shadow-sm transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl ${pkg.hoverColor}`}>
                  <CardHeader>
                    <CardTitle className="text-xl font-bold">{pkg.title}</CardTitle>
                    <CardDescription className="text-sm text-muted-foreground leading-relaxed mt-2">
                      {pkg.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <ul className="space-y-2.5">
                      {pkg.features.map((feature) => (
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
          title="Paid Search Tech Stack"
          subtitle="We integrate conversion tracking and reporting directly to your custom data dashboards."
        />

        {/* Related Services Section - White Background */}
        <section className="py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
                Related Services
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                Explore complementary paid media channels for unified growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedServices.map((service) => (
                <Card key={service.title} className={`border-t-4 ${service.borderColor} border-x border-b border-black/[0.05] dark:border-white/[0.08] bg-background/50 flex flex-col justify-between shadow-sm transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl ${service.hoverColor}`}>
                  <CardHeader>
                    <CardTitle className="text-lg font-bold">{service.title}</CardTitle>
                    <CardDescription className="text-sm text-muted-foreground mt-2 leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <Link 
                      href={service.href} 
                      className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 hover:text-blue-700 hover:underline gap-1 group"
                    >
                      Learn More
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
