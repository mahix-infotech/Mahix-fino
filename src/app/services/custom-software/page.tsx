import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Cpu, CheckCircle, ArrowRight, ShieldCheck, Database, Layers, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/sections/navigation/navigation"
import { Footer } from "@/components/sections/footer/footer"
import { TechStackGrid } from "@/components/sections/tech-stack/tech-stack-grid"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Custom Software Development | Mahix InfoTech",
  description: "Bespoke software development solutions tailored to your business. We design and deploy high-performance web applications, custom APIs, database management systems, and specialized portal solutions.",
  keywords: "custom software, bespoke systems, database applications, API systems, backend services",
}

const features = [
  {
    icon: Layers,
    title: "Tailored Architecture",
    description: "Systems designed around your exact operational workflows, eliminating unnecessary software bloated costs.",
    borderColor: "border-t-blue-500",
    hoverColor: "hover:border-blue-500/30"
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    description: "Robust role-based permission sets, encryption standards, and threat protection measures.",
    borderColor: "border-t-emerald-500",
    hoverColor: "hover:border-emerald-500/30"
  },
  {
    icon: Database,
    title: "System Integration",
    description: "Connect legacy databases, local CRMs, and third-party SaaS tools seamlessly via custom APIs.",
    borderColor: "border-t-purple-500",
    hoverColor: "hover:border-purple-500/30"
  },
  {
    icon: Cpu,
    title: "Scalable Infrastructure",
    description: "Build for the future with modern tech stacks like Node.js, Go, Python, and scalable cloud hosting.",
    borderColor: "border-t-orange-500",
    hoverColor: "hover:border-orange-500/30"
  }
]

const offerings = [
  {
    title: "Enterprise Portals & ERPs",
    description: "Centralize business data, staff schedules, and logistics pipelines in a unified, private dashboard.",
    features: ["Role-Based Access Control", "Data Stream Visuals", "Legacy Database Sync", "Excel/CSV Report Automation"],
    borderColor: "border-t-blue-500",
    hoverColor: "hover:border-blue-500/30"
  },
  {
    title: "Custom API & Middleware",
    description: "Bridge external platforms and internal storage nodes through high-performance, validated APIs.",
    features: ["FastAPI & Node.js Restful API", "GraphQL Schema Pipelines", "Webhooks Notification Loops", "Third-Party SaaS Bridging"],
    borderColor: "border-t-emerald-500",
    hoverColor: "hover:border-emerald-500/30"
  },
  {
    title: "Bespoke Database Systems",
    description: "Design transactional database schemas optimized for storage speed, scale, and backup stability.",
    features: ["PostgreSQL & MongoDB Nodes", "Partitioning & Index Schemes", "Automated Encryption Backups", "Low-Latency Data Retrieval"],
    borderColor: "border-t-purple-500",
    hoverColor: "hover:border-purple-500/30"
  }
]

const technologies = [
  "Node.js", "Go (Golang)", "Python", "TypeScript", "PostgreSQL", "MongoDB",
  "GraphQL", "Docker", "Kubernetes", "AWS Lambda", "Redis", "FastAPI"
]

const relatedServices = [
  {
    title: "Web Development",
    description: "Deploy responsive web pages and Next.js applications that rank.",
    href: "/services/web-development",
    borderColor: "border-t-blue-500",
    hoverColor: "hover:border-blue-500/30"
  },
  {
    title: "Cloud Services",
    description: "Host database pipelines and deploy virtual machines securely on AWS.",
    href: "/services/cloud",
    borderColor: "border-t-emerald-500",
    hoverColor: "hover:border-emerald-500/30"
  },
  {
    title: "AI & ML",
    description: "Deploy neural networks and predictive analytics directly to your applications.",
    href: "/services/ai-ml",
    borderColor: "border-t-purple-500",
    hoverColor: "hover:border-purple-500/30"
  }
]

export default function CustomSoftwarePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <main className="flex-grow">
        {/* Hero Section */}
        <section 
          className="relative overflow-hidden bg-cover bg-center py-24 sm:py-36 flex flex-col items-center justify-center text-center text-white"
          style={{ 
            backgroundImage: `linear-gradient(to bottom, rgba(15, 23, 42, 0.88), rgba(9, 9, 11, 0.96)), url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1600')` 
          }}
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30 pointer-events-none" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10 flex flex-col items-center">
            <Badge className="bg-blue-500/10 text-blue-400 border border-blue-500/25 mb-4 px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full">
              Bespoke Development
            </Badge>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl max-w-3xl leading-[1.12]">
              Bespoke Software for{" "}
              <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
                Your Workflows
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300 leading-relaxed">
              Ditch generic off-the-shelf software. We engineer high-performance systems optimized specifically for your team's unique operational needs.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl border-none shadow-lg px-8 hover:scale-105 transition-all duration-300" asChild>
                <Link href="/contact" className="flex items-center gap-1.5 cursor-pointer">
                  Request Consultation
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
                Engineered for Performance
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                We manage everything from conceptual database schemas and UI wireframes to software testing, production deployment, and maintenance.
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
                Custom Engineered Systems
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
          title="Bespoke Technology Stack"
          subtitle="We select programming paradigms and database frameworks optimized for speed, reliability, and security."
        />

        {/* Related Services Section - White Background */}
        <section className="py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
                Related Services
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                Explore complementary solutions to increase e-commerce performance.
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
