import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Smartphone, CheckCircle, Apple, Play, Zap, Users, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/sections/navigation/navigation"
import { Footer } from "@/components/sections/footer/footer"
import { TechStackGrid } from "@/components/sections/tech-stack/tech-stack-grid"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Mobile App Development - iOS & Android Apps | Mahix InfoTech",
  description: "Expert mobile app development services in Dindigul. We build native iOS, Android, and cross-platform apps using React Native and Flutter. Transform your business with custom mobile solutions.",
  keywords: "mobile app development, iOS app development, Android app development, React Native, Flutter, cross-platform apps, Dindigul mobile apps",
}

const features = [
  {
    icon: Apple,
    title: "iOS Development",
    description: "Native iOS apps built with Swift and modern iOS frameworks",
    borderColor: "border-t-blue-500",
    hoverColor: "hover:border-blue-500/30"
  },
  {
    icon: Play,
    title: "Android Development", 
    description: "Native Android apps using Kotlin and latest Android technologies",
    borderColor: "border-t-emerald-500",
    hoverColor: "hover:border-emerald-500/30"
  },
  {
    icon: Zap,
    title: "Cross-Platform",
    description: "Build once, deploy everywhere with React Native and Flutter",
    borderColor: "border-t-purple-500",
    hoverColor: "hover:border-purple-500/30"
  },
  {
    icon: Users,
    title: "User-Centric Design",
    description: "Intuitive interfaces designed for optimal user experience",
    borderColor: "border-t-orange-500",
    hoverColor: "hover:border-orange-500/30"
  }
]

const servicesList = [
  {
    title: "Native Mobile Apps",
    description: "Platform-specific apps for iOS and Android with optimal performance",
    features: ["Native Performance", "Platform UI Guidelines", "Device Integration", "App Store Optimization"],
    borderColor: "border-t-blue-500",
    hoverColor: "hover:border-blue-500/30"
  },
  {
    title: "Cross-Platform Apps",
    description: "Single codebase apps that work on both iOS and Android",
    features: ["React Native/Flutter", "Shared Codebase", "Faster Development", "Cost Effective"],
    borderColor: "border-t-emerald-500",
    hoverColor: "hover:border-emerald-500/30"
  },
  {
    title: "App Modernization",
    description: "Update and modernize existing mobile applications",
    features: ["Performance Optimization", "UI/UX Redesign", "New Features", "Security Updates"],
    borderColor: "border-t-purple-500",
    hoverColor: "hover:border-purple-500/30"
  }
]

const technologies = [
  "React Native", "Flutter", "Swift", "Kotlin", "Expo", "Firebase", 
  "Redux", "MobX", "SQLite", "Realm", "Push Notifications", "In-App Purchases"
]

const relatedServices = [
  {
    title: "Custom Software",
    description: "Scale business logic with tailored software development and microservices.",
    href: "/services/custom-software",
    borderColor: "border-t-blue-500",
    hoverColor: "hover:border-blue-500/30"
  },
  {
    title: "Web Development",
    description: "Deploy responsive web pages and Next.js applications that rank.",
    href: "/services/web-development",
    borderColor: "border-t-emerald-500",
    hoverColor: "hover:border-emerald-500/30"
  },
  {
    title: "Cloud Services",
    description: "Host database pipelines and deploy virtual machines securely on AWS.",
    href: "/services/cloud",
    borderColor: "border-t-purple-500",
    hoverColor: "hover:border-purple-500/30"
  }
]

export default function MobileAppsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <main className="flex-grow">
        {/* Hero Section */}
        <section 
          className="relative overflow-hidden bg-cover bg-center py-24 sm:py-36 flex flex-col items-center justify-center text-center text-white"
          style={{ 
            backgroundImage: `linear-gradient(to bottom, rgba(15, 23, 42, 0.88), rgba(9, 9, 11, 0.96)), url('https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1600')` 
          }}
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30 pointer-events-none" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10 flex flex-col items-center">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400 border border-blue-500/25 mb-6">
              <Smartphone className="h-8 w-8" />
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl max-w-3xl leading-[1.12]">
              Mobile App{" "}
              <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
                Development
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300 leading-relaxed">
              Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl border-none shadow-lg px-8 hover:scale-105 transition-all duration-300" asChild>
                <Link href="/contact">Get Started</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white/10 bg-white/5 text-white hover:bg-white/10 rounded-xl px-8 hover:scale-105 transition-all duration-300" asChild>
                <Link href="/portfolio">View Portfolio</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section - Corporate Gray Background */}
        <section className="py-20 bg-slate-50 dark:bg-slate-900/20 border-b border-black/[0.05] dark:border-white/[0.08]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
                Mobile App Engineering Capabilities
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                We create mobile apps that users love and businesses depend on.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature) => {
                const Icon = feature.icon
                return (
                  <Card key={feature.title} className={`border-t-4 ${feature.borderColor} border-x border-b border-black/[0.05] dark:border-white/[0.08] bg-background/70 backdrop-blur-md shadow-sm transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl ${feature.hoverColor}`}>
                    <CardHeader className="text-center">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 mx-auto mb-4">
                        <Icon className="h-6 w-6" />
                      </div>
                      <CardTitle className="text-lg font-bold">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Services Section - White Background */}
        <section className="py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
                Our Mobile Development Services
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

        <TechStackGrid
          technologies={technologies}
          title="Mobile Tech Stack"
          subtitle="We build apps using reliable native tools and modern cross-platform libraries."
        />

        {/* Related Services Section - White Background */}
        <section className="py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
                Related Services
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                Explore complementary services to accelerate your digital growth.
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