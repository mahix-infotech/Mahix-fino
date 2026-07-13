import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sparkles, ArrowRight, Layers, Workflow, Server, Lightbulb, CheckCircle2, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/sections/navigation/navigation"
import { Footer } from "@/components/sections/footer/footer"
import { TechStackGrid } from "@/components/sections/tech-stack/tech-stack-grid"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Digital Transformation Strategy & Systems | Mahix InfoTech",
  description: "Modernize your company operations. We assist businesses in digital transformation by replacing legacy manual tasks with automated cloud software, web dashboards, and mobile sync systems.",
  keywords: "digital transformation, workflow automation, cloud migration, legacy modernization, paperless office",
}

const features = [
  {
    icon: Workflow,
    title: "Process Automation",
    description: "Map operations to identify bottlenecks and automate manual reporting, calculations, and message alerts.",
    borderColor: "border-t-blue-500",
    hoverColor: "hover:border-blue-500/30"
  },
  {
    icon: Server,
    title: "Legacy Migration",
    description: "Securely port old, local database installations into fast, scalable AWS/Azure cloud environments.",
    borderColor: "border-t-emerald-500",
    hoverColor: "hover:border-emerald-500/30"
  },
  {
    icon: Lightbulb,
    title: "Innovative Tools",
    description: "Launch modern customer-facing web and mobile portals that dramatically increase customer engagement.",
    borderColor: "border-t-purple-500",
    hoverColor: "hover:border-purple-500/30"
  },
  {
    icon: Layers,
    title: "Information Security",
    description: "Unify company communications, credentials management, and access levels in a secure, central network.",
    borderColor: "border-t-orange-500",
    hoverColor: "hover:border-orange-500/30"
  }
]

const offerings = [
  {
    title: "Operations Digitization",
    description: "Audit current physical workflow nodes and construct unified, automated digital interfaces.",
    features: ["Paperless Workspace Designs", "Automated Task Assignments", "Integrated Communications Layers", "Performance Metrics Dashboards"],
    borderColor: "border-t-blue-500",
    hoverColor: "hover:border-blue-500/30"
  },
  {
    title: "Legacy Code Migration",
    description: "Redesign aging mainframe systems into fast, serverless web APIs and responsive cloud nodes.",
    features: ["Zero-Downtime Data Relocation", "Old Schema Optimization", "Microservices Redesigns", "Modern Framework Re-builds"],
    borderColor: "border-t-emerald-500",
    hoverColor: "hover:border-emerald-500/30"
  },
  {
    title: "Product Innovation Strategy",
    description: "Formulate technical strategy plans to launch custom consumer-facing software applications.",
    features: ["Market Fit Evaluations", "System Scaling Layouts", "API Vendor Integrations", "Deployment Launch Frameworks"],
    borderColor: "border-t-purple-500",
    hoverColor: "hover:border-purple-500/30"
  }
]

const technologies = [
  "Docker & K8s", "AWS CloudFormation", "Terraform", "REST & GraphQL", "Python Solutions", "Node.js Engines",
  "React & Next.js", "Zapier Webhooks", "OAuth 2.0 Security", "Elasticsearch Nodes", "Kafka Pipelines", "GitLab CI"
]

const relatedServices = [
  {
    title: "IT Consulting",
    description: "Obtain audit guidelines for code bases and operational processes.",
    href: "/services/it-consulting",
    borderColor: "border-t-blue-500",
    hoverColor: "hover:border-blue-500/30"
  },
  {
    title: "CRM Solutions",
    description: "Deploy and optimize HubSpot and Salesforce configurations to capture leads.",
    href: "/services/crm-solutions",
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

export default function DigitalTransformationPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <main className="flex-grow">
        {/* Hero Section */}
        <section 
          className="relative overflow-hidden bg-cover bg-center py-24 sm:py-36 flex flex-col items-center justify-center text-center text-white"
          style={{ 
            backgroundImage: `linear-gradient(to bottom, rgba(15, 23, 42, 0.88), rgba(9, 9, 11, 0.96)), url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1600')` 
          }}
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30 pointer-events-none" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10 flex flex-col items-center">
            <Badge className="bg-blue-500/10 text-blue-400 border border-blue-500/25 mb-4 px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full">
              Legacy Modernization
            </Badge>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl max-w-3xl leading-[1.12]">
              Modernize Your Company{" "}
              <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
                Operations
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300 leading-relaxed">
              Transition away from outdated manual entry sheets. We build connected digital systems to make your business lean, agile, and automated.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl border-none shadow-lg px-8 hover:scale-105 transition-all duration-300" asChild>
                <Link href="/contact" className="flex items-center gap-1.5 cursor-pointer">
                  Modernize Your Business
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
                Comprehensive Digital Modernization
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                We handle infrastructure planning, custom integration APIs, secure cloud deployment, and onboarding.
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
                Transformation Offerings
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
                          <CheckCircle2 className="mr-2 h-4 w-4 text-green-500 flex-shrink-0" />
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
          title="Transformation Tech Stack"
          subtitle="We select programming languages and server components suited for scaling."
        />

        {/* Related Services Section - White Background */}
        <section className="py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
                Related Services
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                Explore complementary solutions to scale your systems.
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
