import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Cloud, CheckCircle, Server, Shield, Zap, Globe } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cloud Services - AWS, Azure & DevOps Solutions | Mahix InfoTech",
  description: "Professional cloud migration and DevOps services in Dindigul. We provide AWS, Azure, and Google Cloud solutions, including cloud migration, CI/CD pipelines, and serverless architecture.",
  keywords: "cloud services, cloud migration, AWS services, Azure cloud, DevOps, CI/CD, serverless architecture, Docker, Kubernetes, Dindigul cloud solutions",
}

const features = [
  {
    icon: Server,
    title: "Infrastructure Management",
    description: "Complete cloud infrastructure setup and management"
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Enterprise-grade security and compliance standards"
  },
  {
    icon: Zap,
    title: "Auto Scaling",
    description: "Automatic scaling based on demand and traffic"
  },
  {
    icon: Globe,
    title: "Global Deployment",
    description: "Deploy applications across multiple regions worldwide"
  }
]

const services = [
  {
    title: "Cloud Migration",
    description: "Seamlessly migrate your existing infrastructure to the cloud",
    features: ["Migration Strategy", "Data Transfer", "Application Modernization", "Performance Optimization"]
  },
  {
    title: "DevOps & CI/CD",
    description: "Automated deployment pipelines and continuous integration",
    features: ["Pipeline Setup", "Automated Testing", "Deployment Automation", "Monitoring & Alerts"]
  },
  {
    title: "Serverless Architecture",
    description: "Build scalable applications with serverless technologies",
    features: ["Function Development", "API Gateway Setup", "Event-driven Architecture", "Cost Optimization"]
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

export default function CloudServicesPage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 sm:py-32 bg-gradient-to-r from-orange-600 to-orange-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm mb-6">
              <Cloud className="h-8 w-8" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Cloud Services
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-orange-100">
              Migrate, deploy, and manage your applications in the cloud with our comprehensive cloud services and DevOps expertise
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Get Started</Link>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/portfolio">View Projects</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Cloud Service Capabilities
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Complete cloud solutions for modern businesses
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <Card key={feature.title} className="text-center">
                  <CardHeader>
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 text-orange-600 mx-auto">
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Cloud Services
            </h2>
          </div>
          
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {services.map((service) => (
              <Card key={service.title} className="relative">
                <CardHeader>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" asChild>
                    <Link href="/contact">Get Quote</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Providers Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Cloud Platforms We Work With
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Expertise across all major cloud platforms
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {cloudProviders.map((provider) => (
              <Card key={provider.name} className="text-center">
                <CardHeader>
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-lg bg-gray-100 text-gray-600 mx-auto mb-4 text-xl font-bold">
                    {provider.logo}
                  </div>
                  <CardTitle className="text-xl">{provider.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap justify-center gap-2">
                    {provider.services.map((service) => (
                      <Badge key={service} variant="outline" className="text-xs">
                        {service}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Cloud Benefits
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Measurable improvements for your business
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <Card key={benefit.title} className="text-center">
                <CardHeader>
                  <div className="text-4xl font-bold text-orange-600 mb-2">
                    {benefit.percentage}
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              DevOps Technologies
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Modern tools for cloud infrastructure and deployment
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {technologies.map((tech) => (
              <Card key={tech} className="p-4 text-center hover:shadow-md transition-shadow">
                <CardContent className="p-0">
                  <p className="text-sm font-medium text-gray-700">{tech}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Cloud Migration Process
            </h2>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { step: "1", title: "Assessment", description: "Evaluate current infrastructure and requirements" },
              { step: "2", title: "Planning", description: "Create detailed migration strategy and timeline" },
              { step: "3", title: "Migration", description: "Execute migration with minimal downtime" },
              { step: "4", title: "Optimization", description: "Optimize performance and costs post-migration" }
            ].map((phase) => (
              <div key={phase.step} className="text-center">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-orange-600 text-white font-bold text-lg mb-4">
                  {phase.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{phase.title}</h3>
                <p className="text-gray-600">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to Move to the Cloud?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-orange-100">
              Let's discuss your cloud migration strategy and optimize your infrastructure
            </p>
            <div className="mt-8">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Start Cloud Migration</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer />
    </>
  )
}