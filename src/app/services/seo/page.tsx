import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, TrendingUp, Search, Target, Zap, ArrowUpRight } from "lucide-react"
import { Navigation } from "@/components/sections/navigation/navigation"
import { Footer } from "@/components/sections/footer/footer"
import { TechStackGrid } from "@/components/sections/tech-stack/tech-stack-grid"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "SEO & Digital Marketing Services - Mahix InfoTech",
  description: "Boost your online visibility with our expert SEO and digital marketing services in Dindigul. We offer technical SEO, keyword research, content optimization, and link building to improve your search rankings.",
  keywords: "SEO services, digital marketing, search engine optimization, keyword research, content optimization, link building, Dindigul SEO, Tamil Nadu",
}

const features = [
  {
    icon: Search,
    title: "Technical SEO Auditing",
    description: "Align core website architecture, crawlers access, site indexes, and performance scores with search specifications.",
    borderColor: "border-t-blue-500",
    hoverColor: "hover:border-blue-500/30"
  },
  {
    icon: Target,
    title: "Keyword & Search Intent",
    description: "Target transactional keyphrases mapped to exact customer purchasing behavior and intent structures.",
    borderColor: "border-t-emerald-500",
    hoverColor: "hover:border-emerald-500/30"
  },
  {
    icon: TrendingUp,
    title: "On-Page Optimization",
    description: "Structure copy, meta-tags, layout elements, internal links, and semantic structures for maximum keyword density.",
    borderColor: "border-t-purple-500",
    hoverColor: "hover:border-purple-500/30"
  },
  {
    icon: Zap,
    title: "Backlink Acquisition",
    description: "Acquire domain authority and ranking power through contextual guest posting and brand citations.",
    borderColor: "border-t-orange-500",
    hoverColor: "hover:border-orange-500/30"
  }
]

const servicesList = [
  {
    title: "National & Enterprise SEO",
    description: "Dominate search rankings across high-competition terms nationally with deep technical architectures.",
    features: ["Enterprise Keyword Strategy", "Headless CMS Configurations", "Semantic Content Mapping", "Comprehensive Authority Building"],
    borderColor: "border-t-blue-500",
    hoverColor: "hover:border-blue-500/30"
  },
  {
    title: "Local Search Optimization",
    description: "Connect with buyers in Dindigul and surrounding regions by optimizing local maps profiles.",
    features: ["Google Maps Profile Optimization", "Local Directory Citations", "Review Solicitation Workflows", "Geographic Content Creation"],
    borderColor: "border-t-emerald-500",
    hoverColor: "hover:border-emerald-500/30"
  },
  {
    title: "E-commerce SEO",
    description: "Scale product detail pages, category views, and indexing tags to rank above marketplaces.",
    features: ["Product Feed Optimizations", "Schema Markup Injection", "Faceted Navigation Control", "Dynamic Alt-text Generation"],
    borderColor: "border-t-purple-500",
    hoverColor: "hover:border-purple-500/30"
  }
]

const technologies = [
  "Google Analytics 4", "Search Console", "SEMrush", "Ahrefs", "Screaming Frog", "Google Tag Manager",
  "Schema.org", "PageSpeed Insights", "Looker Studio", "RankMath", "Yoast SEO", "Google Business Profile"
]

const relatedServices = [
  {
    title: "Digital Marketing",
    description: "Deploy social media funnels, email marketing, and lead acquisition pipelines.",
    href: "/services/digital-marketing",
    borderColor: "border-t-blue-500",
    hoverColor: "hover:border-blue-500/30"
  },
  {
    title: "Google Ads",
    description: "Launch Pay-Per-Click campaigns designed to capture immediate transactional traffic.",
    href: "/services/google-ads",
    borderColor: "border-t-emerald-500",
    hoverColor: "hover:border-emerald-500/30"
  },
  {
    title: "Meta Ads",
    description: "Run retargeting and creative campaigns on Facebook and Instagram feed displays.",
    href: "/services/meta-ads",
    borderColor: "border-t-purple-500",
    hoverColor: "hover:border-purple-500/30"
  }
]

export default function SEOPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <main className="flex-grow">
        {/* Hero Section */}
        <section 
          className="relative overflow-hidden bg-cover bg-center py-24 sm:py-36 flex flex-col items-center justify-center text-center text-white"
          style={{ 
            backgroundImage: `linear-gradient(to bottom, rgba(15, 23, 42, 0.88), rgba(9, 9, 11, 0.96)), url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600')` 
          }}
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30 pointer-events-none" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10 flex flex-col items-center">
            <Badge className="mb-4 bg-blue-500/10 text-blue-400 border border-blue-500/25 px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full">
              SEO & Digital Marketing
            </Badge>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl max-w-3xl leading-[1.12]">
              Dominate Search{" "}
              <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
                Results
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300 leading-relaxed">
              Boost your online visibility with data-driven SEO strategies that deliver measurable organic rankings and sustainable business growth.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl border-none shadow-lg px-8 hover:scale-105 transition-all duration-300" asChild>
                <Link href="/contact">Get SEO Audit</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section - Corporate Gray Background */}
        <section className="py-20 bg-slate-50 dark:bg-slate-900/20 border-b border-black/[0.05] dark:border-white/[0.08]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
                Our SEO Capabilities
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                We combine search intelligence with technical web optimization to secure sustainable rankings.
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

        {/* Services Section - White Background */}
        <section className="py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
                SEO & Ranking Packages
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {servicesList.map((service) => (
                <Card key={service.title} className={`border-t-4 ${service.borderColor} border-x border-b border-black/[0.05] dark:border-white/[0.08] bg-background flex flex-col justify-between shadow-sm transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl ${service.hoverColor}`}>
                  <CardHeader>
                    <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                    <CardDescription className="text-sm text-muted-foreground leading-relaxed mt-2">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <ul className="space-y-2.5">
                      {service.features.map((feature) => (
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

        {/* Results Section - White Background (Internal glow card) */}
        <section className="py-20 bg-background border-t border-black/[0.05] dark:border-white/[0.08]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl mb-12">Proven Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-8 border border-black/[0.05] dark:border-white/[0.08] bg-slate-50 dark:bg-slate-900/10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="text-5xl font-extrabold text-blue-600 dark:text-blue-400 mb-2">300%</div>
                <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Average Traffic Increase</div>
              </Card>
              <Card className="p-8 border border-black/[0.05] dark:border-white/[0.08] bg-slate-50 dark:bg-slate-900/10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="text-5xl font-extrabold text-blue-600 dark:text-blue-400 mb-2">85%</div>
                <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Keywords in Top 10</div>
              </Card>
              <Card className="p-8 border border-black/[0.05] dark:border-white/[0.08] bg-slate-50 dark:bg-slate-900/10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="text-5xl font-extrabold text-blue-600 dark:text-blue-400 mb-2">6 Months</div>
                <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Average Time to Results</div>
              </Card>
            </div>
          </div>
        </section>

        <TechStackGrid
          technologies={technologies}
          title="Analytics & Diagnostic Toolset"
          subtitle="We use top diagnostic search nodes to report accurate trends."
        />

        {/* Related Services Section - White Background */}
        <section className="py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
                Related Services
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                Explore complementary solutions to increase brand visibility.
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