import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Cloud, CheckCircle, Server, Shield, Zap, Globe, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/sections/navigation/navigation"
import { Footer } from "@/components/sections/footer/footer"
import { TechStackGrid } from "@/components/sections/tech-stack/tech-stack-grid"
import type { Metadata } from "next"
import { PricingSection } from "@/components/sections/pricing/pricing-section"

export const metadata: Metadata = {
  title: "Cloud Services - AWS, Azure & DevOps Solutions | Mahix InfoTech",
  description: "Professional cloud migration and DevOps services in Dindigul. We provide AWS, Azure, and Google Cloud solutions, including cloud migration, CI/CD pipelines, and serverless architecture.",
  keywords: "cloud services, cloud migration, AWS services, Azure cloud, DevOps, CI/CD, serverless architecture, Docker, Kubernetes, Dindigul cloud solutions",
}

const features = [
  {
    icon: Server,
    title: "Infrastructure Management",
    description: "Complete cloud infrastructure setup and management",
    borderColor: "border-t-blue-500",
    hoverColor: "hover:border-blue-500/30"
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Enterprise-grade security and compliance standards",
    borderColor: "border-t-emerald-500",
    hoverColor: "hover:border-emerald-500/30"
  },
  {
    icon: Zap,
    title: "Auto Scaling",
    description: "Automatic scaling based on demand and traffic",
    borderColor: "border-t-purple-500",
    hoverColor: "hover:border-purple-500/30"
  },
  {
    icon: Globe,
    title: "Global Deployment",
    description: "Deploy applications across multiple regions worldwide",
    borderColor: "border-t-orange-500",
    hoverColor: "hover:border-orange-500/30"
  }
]

const servicesList = [
  {
    title: "Cloud Migration",
    description: "Seamlessly migrate your existing infrastructure to the cloud with zero-downtime workflows.",
    features: ["Migration Strategy", "Data Transfer", "Application Modernization", "Performance Optimization"],
    borderColor: "border-t-blue-500",
    hoverColor: "hover:border-blue-500/30"
  },
  {
    title: "DevOps & CI/CD",
    description: "Automated deployment pipelines and continuous integration for rapid product release.",
    features: ["Pipeline Setup", "Automated Testing", "Deployment Automation", "Monitoring & Alerts"],
    borderColor: "border-t-emerald-500",
    hoverColor: "hover:border-emerald-500/30"
  },
  {
    title: "Serverless Architecture",
    description: "Build scalable applications with serverless technologies to reduce running hosting costs.",
    features: ["Function Development", "API Gateway Setup", "Event-driven Architecture", "Cost Optimization"],
    borderColor: "border-t-purple-500",
    hoverColor: "hover:border-purple-500/30"
  }
]

const cloudProviders = [
  {
    name: "Amazon Web Services",
    logo: "AWS",
    services: ["EC2", "Lambda", "RDS", "S3", "CloudFront", "EKS"]
  },
  {
    name: "Microsoft Azure",
    logo: "Azure", 
    services: ["App Service", "Functions", "SQL Database", "Blob Storage", "CDN", "AKS"]
  },
  {
    name: "Google Cloud Platform",
    logo: "GCP",
    services: ["Compute Engine", "Cloud Functions", "Cloud SQL", "Cloud Storage", "CDN", "GKE"]
  }
]

const technologies = [
  "Docker", "Kubernetes", "Terraform", "Ansible", "Jenkins", "GitLab CI",
  "Prometheus", "Grafana", "ELK Stack", "Nginx", "Redis", "MongoDB"
]

const benefits = [
  {
    title: "Cost Optimization",
    description: "Reduce infrastructure costs by up to 40% with cloud optimization",
    percentage: "40%"
  },
  {
    title: "Improved Performance",
    description: "Faster load times and better user experience",
    percentage: "60%"
  },
  {
    title: "Enhanced Security",
    description: "Enterprise-grade security with automated backups",
    percentage: "99.9%"
  },
  {
    title: "Scalability",
    description: "Handle traffic spikes without manual intervention",
    percentage: "∞"
  }
]

const cloudPricing = [
  {
    name: "Cloud Starter",
    price: "â‚¹24,999",
    period: "/project",
    tagline: "Get your first app or workload running on the cloud.",
    features: [
      "Cloud account setup (AWS/GCP/Azure)",
      "1 application deployment",
      "Basic CI/CD pipeline",
      "SSL, domain & DNS setup",
      "Monitoring & alerts",
      "1 month free support",
    ],
    cta: "Get Started",
  },
  {
    name: "Business Cloud",
    price: "â‚¹74,999",
    period: "/project",
    tagline: "Scalable, production-ready cloud infrastructure.",
    features: [
      "Multi-environment setup (Dev/Stage/Prod)",
      "Kubernetes / ECS cluster",
      "Auto-scaling configuration",
      "Terraform infrastructure as code",
      "Backup & disaster recovery",
      "Cost optimization audit",
      "3 months free support",
    ],
    highlighted: true,
    gradient: "from-sky-500 to-indigo-600",
    cta: "Most Popular",
  },
  {
    name: "Enterprise Cloud",
    price: "â‚¹1,99,999+",
    period: "/project",
    tagline: "Full cloud migration and DevOps transformation.",
    features: [
      "Full legacy migration to cloud",
      "Multi-cloud / hybrid strategy",
      "Zero-downtime migration",
      "Security & compliance audit",
      "24/7 monitoring setup",
      "Dedicated DevOps engineer",
    ],
    cta: "Contact Us",
  },
]
export default function CloudServicesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <main className="flex-grow">
        {/* Hero Section */}
        <section 
          className="relative overflow-hidden bg-cover bg-center py-24 sm:py-36 flex flex-col items-center justify-center text-center text-white"
          style={{ 
            backgroundImage: `linear-gradient(to bottom, rgba(15, 23, 42, 0.88), rgba(9, 9, 11, 0.96)), url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1600')` 
          }}
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30 pointer-events-none" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10 flex flex-col items-center">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400 border border-blue-500/25 mb-6">
              <Cloud className="h-8 w-8" />
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl max-w-3xl leading-[1.12]">
              Cloud{" "}
              <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300 leading-relaxed">
              Migrate, deploy, and manage your applications in the cloud with our comprehensive cloud services and DevOps expertise.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl border-none shadow-lg px-8 hover:scale-105 transition-all duration-300" asChild>
                <Link href="/contact">Get Started</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white/10 bg-white/5 text-white hover:bg-white/10 rounded-xl px-8 hover:scale-105 transition-all duration-300" asChild>
                <Link href="/portfolio">View Projects</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section - Corporate Gray Background */}
        <section className="py-20 bg-slate-50 dark:bg-slate-900/20 border-b border-black/[0.05] dark:border-white/[0.08]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
                Cloud Service Capabilities
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                Complete cloud solutions for modern businesses.
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
                DevOps & Architecture Solutions
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

        {/* Cloud Providers Section - Corporate Gray Background */}
        <section className="py-20 bg-slate-50 dark:bg-slate-900/20 border-y border-black/[0.05] dark:border-white/[0.08]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
                Cloud Platforms We Work With
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                Expertise across all major cloud platforms.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {cloudProviders.map((provider) => (
                <Card key={provider.name} className="border border-black/[0.05] dark:border-white/[0.08] bg-background hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className="inline-flex h-16 w-16 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 mx-auto mb-4 text-xl font-bold border border-blue-500/10">
                      {provider.logo}
                    </div>
                    <CardTitle className="text-lg font-bold">{provider.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-wrap justify-center gap-2">
                    {provider.services.map((service) => (
                      <Badge key={service} variant="outline" className="text-xs rounded-full px-2.5 py-0.5">
                        {service}
                      </Badge>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section - White Background */}
        <section className="py-20 bg-background border-b border-black/[0.05] dark:border-white/[0.08]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
                Cloud Benefits
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                Measurable improvements for your business operations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {benefits.map((benefit) => (
                <Card key={benefit.title} className="border border-black/[0.05] dark:border-white/[0.08] bg-slate-50 dark:bg-slate-900/10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className="text-4xl font-extrabold text-blue-600 dark:text-blue-400 mb-2">
                      {benefit.percentage}
                    </div>
                    <CardTitle className="text-lg font-bold">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <TechStackGrid
          technologies={technologies}
          title="DevOps Technologies"
          subtitle="Modern tools for cloud infrastructure and continuous deployment."
        />

        
        {/* Transparent Pricing */}
        <PricingSection
          plans={cloudPricing}
          title="Plans & Packages"
          subtitle="Straightforward pricing built for your goals. No lock-ins, no surprises."
        />
      </main>
      <Footer />
    </div>
  )
}