import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Smartphone, Brain, Cloud, TrendingUp, Database } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom websites and web applications built with modern frameworks like React, Next.js, and Node.js.",
    features: ["Responsive Design", "E-commerce Solutions", "CMS Development", "API Integration"],
    color: "blue"
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android using React Native and Flutter.",
    features: ["iOS & Android Apps", "Cross-platform Solutions", "App Store Optimization", "Push Notifications"],
    color: "green"
  },
  {
    icon: Brain,
    title: "AI & ML Solutions",
    description: "Artificial intelligence and machine learning solutions to automate processes and gain insights.",
    features: ["Predictive Analytics", "Natural Language Processing", "Computer Vision", "Chatbots & AI Assistants"],
    color: "purple"
  },
  {
    icon: Cloud,
    title: "Cloud Services",
    description: "Cloud migration, deployment, and infrastructure management on AWS, Azure, and Google Cloud.",
    features: ["Cloud Migration", "DevOps & CI/CD", "Serverless Architecture", "Infrastructure as Code"],
    color: "orange"
  },
  {
    icon: TrendingUp,
    title: "SEO & Digital Marketing",
    description: "Search engine optimization and digital marketing strategies to grow your online presence.",
    features: ["SEO Optimization", "Content Marketing", "Social Media Management", "Analytics & Reporting"],
    color: "red"
  },
  {
    icon: Database,
    title: "Data Solutions",
    description: "Database design, data analytics, and business intelligence solutions for data-driven decisions.",
    features: ["Database Design", "Data Analytics", "Business Intelligence", "Data Visualization"],
    color: "indigo"
  }
]

const colorClasses = {
  blue: "text-blue-600 bg-blue-100",
  green: "text-green-600 bg-green-100", 
  purple: "text-purple-600 bg-purple-100",
  orange: "text-orange-600 bg-orange-100",
  red: "text-red-600 bg-red-100",
  indigo: "text-indigo-600 bg-indigo-100"
}

export function ServicesSection() {
  return (
    <section className="py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            We offer comprehensive digital solutions to help your business thrive in the modern world
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Card key={service.title} className="relative overflow-hidden transition-all hover:shadow-lg">
                <CardHeader>
                  <div className={`inline-flex h-12 w-12 items-center justify-center rounded-lg ${colorClasses[service.color as keyof typeof colorClasses]}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-gray-600">
                        <div className="mr-2 h-1.5 w-1.5 rounded-full bg-gray-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="mt-6 w-full" asChild>
                    <Link href="/contact">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-20 text-center">
          <Button asChild size="lg">
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}