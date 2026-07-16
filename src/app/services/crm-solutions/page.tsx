import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Shield, ArrowRight, Zap, CheckCircle2, BarChart2, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/sections/navigation/navigation"
import { Footer } from "@/components/sections/footer/footer"
import { TechStackGrid } from "@/components/sections/tech-stack/tech-stack-grid"
import type { Metadata } from "next"
import { PricingSection } from "@/components/sections/pricing/pricing-section"

export const metadata: Metadata = {
  title: "CRM Integrations & Solutions | Mahix InfoTech",
  description: "Optimize your sales workflows with our CRM integration solutions. We connect HubSpot, Salesforce, and custom CRM architectures to centralize customer communications and support pipelines.",
  keywords: "CRM integration, Salesforce setup, HubSpot configurations, Customer management system, customer database",
}

const features = [
  {
    icon: Users,
    title: "Pipeline Management",
    description: "Visually track deals, client interaction history, and conversion rates across different sales stages.",
    borderColor: "border-t-blue-500",
    hoverColor: "hover:border-blue-500/30"
  },
  {
    icon: Zap,
    title: "Workflow Automation",
    description: "Eliminate administrative manual entries with auto-created tasks, email follow-ups, and calendar reminders.",
    borderColor: "border-t-emerald-500",
    hoverColor: "hover:border-emerald-500/30"
  },
  {
    icon: BarChart2,
    title: "Insight Analytics",
    description: "Generate sales reports, team performance charts, and customer lifetime value metrics.",
    borderColor: "border-t-purple-500",
    hoverColor: "hover:border-purple-500/30"
  },
  {
    icon: Shield,
    title: "Data Compliance",
    description: "Implement role-based permissions to ensure strict client record confidentiality.",
    borderColor: "border-t-orange-500",
    hoverColor: "hover:border-orange-500/30"
  }
]

const offerings = [
  {
    title: "Salesforce & HubSpot Setup",
    description: "Tailored deployment and onboarding for leading global CRM configurations.",
    features: ["Object Customization", "Contact Pipeline Syncing", "Email Client Integration", "User Training Modules"],
    borderColor: "border-t-blue-500",
    hoverColor: "hover:border-blue-500/30"
  },
  {
    title: "Custom CRM Architectures",
    description: "Bespoke database solutions built from scratch to accommodate unique enterprise sales procedures.",
    features: ["Dedicated Storage Nodes", "Flexible Field Definitions", "Custom API Integration", "Private On-Premise Hosting"],
    borderColor: "border-t-emerald-500",
    hoverColor: "hover:border-emerald-500/30"
  },
  {
    title: "Support Desk Integration",
    description: "Connect customer ticketing, chat dialogs, and emails directly into a unified dashboard.",
    features: ["SLA Rule Setups", "Auto-routing Logic", "Conversation History Logs", "Satisfaction Scoring Metrics"],
    borderColor: "border-t-purple-500",
    hoverColor: "hover:border-purple-500/30"
  }
]

const technologies = [
  "HubSpot API", "Salesforce Apex", "Zoho CRM", "Pipedrive", "PostgreSQL", "Node.js",
  "Zapier Webhooks", "OAuth 2.0 Auth", "TypeScript", "Looker Studio", "GraphQL", "Redis"
]

const crmPricing = [
  {
    name: "Basic CRM",
    price: "â‚¹29,999",
    period: "/project",
    tagline: "A simple CRM to track leads and manage customers.",
    features: [
      "Contact & lead management",
      "Pipeline view",
      "Task & follow-up reminders",
      "Email notifications",
      "Basic reporting",
      "2 months free support",
    ],
    cta: "Get Started",
  },
  {
    name: "Advanced CRM",
    price: "â‚¹79,999",
    period: "/project",
    tagline: "Full-featured CRM with automation and analytics.",
    features: [
      "Custom sales pipeline",
      "Workflow automation",
      "Email & WhatsApp integration",
      "Role-based access control",
      "Advanced analytics dashboard",
      "API integrations",
      "Mobile app (Android/iOS)",
      "4 months free support",
    ],
    highlighted: true,
    gradient: "from-teal-500 to-emerald-600",
    cta: "Most Popular",
  },
  {
    name: "Enterprise CRM",
    price: "â‚¹1,79,999+",
    period: "/project",
    tagline: "Enterprise CRM with ERP integration and AI insights.",
    features: [
      "Custom module development",
      "ERP / accounting integration",
      "AI lead scoring",
      "Multi-branch support",
      "Custom reports & exports",
      "Dedicated CRM consultant",
    ],
    cta: "Contact Us",
  },
]
export default function CRMSolutionsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <main className="flex-grow">
        {/* Hero Section */}
        <section 
          className="relative overflow-hidden bg-cover bg-center py-24 sm:py-36 flex flex-col items-center justify-center text-center text-white"
          style={{ 
            backgroundImage: `linear-gradient(to bottom, rgba(15, 23, 42, 0.88), rgba(9, 9, 11, 0.96)), url('https://images.unsplash.com/photo-1552581230-c015914626ed?auto=format&fit=crop&q=80&w=1600')` 
          }}
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30 pointer-events-none" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10 flex flex-col items-center">
            <Badge className="bg-blue-500/10 text-blue-400 border border-blue-500/25 mb-4 px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full">
              Enterprise Sales Tech
            </Badge>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl max-w-3xl leading-[1.12]">
              Streamline Sales with{" "}
              <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
                CRM Solutions
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300 leading-relaxed">
              We customize and deploy advanced Salesforce, HubSpot, and bespoke CRM instances designed to centralize conversations and accelerate deal flow.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl border-none shadow-lg px-8 hover:scale-105 transition-all duration-300" asChild>
                <Link href="/contact" className="flex items-center gap-1.5 cursor-pointer">
                  Request CRM Demo
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
                Integrated Relationship Management
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                We handle API data syncing, trigger integrations, contact imports, and user training sessions.
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
                Bespoke & Managed CRM Solutions
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
          title="CRM Platform Tech Stack"
          subtitle="We work with standard SaaS APIs to ensure data synchronization."
        />

        
        {/* Transparent Pricing */}
        <PricingSection
          plans={crmPricing}
          title="Plans & Packages"
          subtitle="Straightforward pricing built for your goals. No lock-ins, no surprises."
        />
      </main>
      <Footer />
    </div>
  )
}
