import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, CheckCircle, ArrowRight, Globe, Smartphone, Zap, Shield } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Web Development Services - Custom Websites & Web Apps | Mahix InfoTech",
  description: "Professional web development services in Dindigul. We create custom websites, e-commerce solutions, and web applications using React, Next.js, and modern technologies. Get responsive, fast, and secure websites.",
  keywords: "web development, custom websites, e-commerce development, web applications, React development, Next.js, responsive design, Dindigul web development",
}

const features = [
  {
    icon: Globe,
    title: "Responsive Design",
    description: "Websites that look perfect on all devices and screen sizes"
  },
  {
    icon: Zap,
    title: "Fast Performance",
    description: "Optimized for speed with modern build tools and best practices"
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Built with security in mind and hosted on reliable infrastructure"
  },
  {
    icon: Smartphone,
    title: "Mobile-First",
    description: "Designed for mobile users first, then enhanced for desktop"
  }
]

const services = [
  {
    title: "Custom Website Development",
    description: "Tailored websites built from scratch to match your brand and requirements",
    features: ["Custom Design", "CMS Integration", "SEO Optimization", "Analytics Setup"]
  },
  {
    title: "E-commerce Solutions",
    description: "Full-featured online stores with payment processing and inventory management",
    features: ["Shopping Cart", "Payment Gateway", "Inventory Management", "Order Tracking"]
  },
  {
    title: "Web Applications",
    description: "Complex web applications with user authentication and database integration",
    features: ["User Authentication", "Database Design", "API Development", "Admin Dashboard"]
  }
]

const technologies = [
  "React", "Next.js", "TypeScript", "Node.js", "Express.js", "MongoDB", "PostgreSQL", 
  "Tailwind CSS", "Prisma", "Vercel", "AWS", "Docker"
]

const portfolio = [
  {
    title: "E-commerce Platform",
    description: "Modern online store with advanced filtering and payment processing",
    image: "/placeholder-project.jpg",
    technologies: ["Next.js", "Stripe", "PostgreSQL"]
  },
  {
    title: "SaaS Dashboard",
    description: "Analytics dashboard with real-time data visualization",
    image: "/placeholder-project.jpg", 
    technologies: ["React", "D3.js", "Node.js"]
  },
  {
    title: "Corporate Website",
    description: "Professional website with CMS and multi-language support",
    image: "/placeholder-project.jpg",
    technologies: ["Next.js", "Sanity", "Tailwind"]
  }
]

export default function WebDevelopmentPage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 sm:py-32 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm mb-6">
              <Code className="h-8 w-8" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Web Development
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
              Custom websites and web applications built with modern technologies to help your business succeed online
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Get Started</Link>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/portfolio">View Portfolio</Link>
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
              Why Choose Our Web Development Services?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              We combine cutting-edge technology with proven development practices
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <Card key={feature.title} className="text-center">
                  <CardHeader>
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600 mx-auto">
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
              Our Web Development Services
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

      {/* Technologies Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Technologies We Use
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              We work with the latest and most reliable web technologies
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



      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to Build Your Website?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
              Let's discuss your project and create something amazing together
            </p>
            <div className="mt-8">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Start Your Project</Link>
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