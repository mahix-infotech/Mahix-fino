import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Smartphone, Brain, Cloud, TrendingUp, Database, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"

const services = [
  {
    id: "web-development",
    icon: Code,
    title: "Web Development",
    description: "Custom websites and web applications built with modern frameworks like React, Next.js, and Node.js.",
    features: ["Responsive Design", "E-commerce Solutions", "CMS Development", "API Integration"],
    technologies: ["React", "Next.js", "Node.js", "TypeScript", "Tailwind CSS"],
    startingPrice: "$2,500",
    color: "blue"
  },
  {
    id: "mobile-apps",
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android using React Native and Flutter.",
    features: ["iOS & Android Apps", "Cross-platform Solutions", "App Store Optimization", "Push Notifications"],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
    startingPrice: "$5,000",
    color: "green"
  },
  {
    id: "ai-ml",
    icon: Brain,
    title: "AI & ML Solutions",
    description: "Artificial intelligence and machine learning solutions to automate processes and gain insights.",
    features: ["Predictive Analytics", "Natural Language Processing", "Computer Vision", "Chatbots & AI Assistants"],
    technologies: ["Python", "TensorFlow", "PyTorch", "OpenAI", "Hugging Face"],
    startingPrice: "$7,500",
    color: "purple"
  },
  {
    id: "cloud",
    icon: Cloud,
    title: "Cloud Services",
    description: "Cloud migration, deployment, and infrastructure management on AWS, Azure, and Google Cloud.",
    features: ["Cloud Migration", "DevOps & CI/CD", "Serverless Architecture", "Infrastructure as Code"],
    technologies: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform"],
    startingPrice: "$3,000",
    color: "orange"
  },
  {
    id: "seo",
    icon: TrendingUp,
    title: "SEO & Digital Marketing",
    description: "Search engine optimization and digital marketing strategies to grow your online presence.",
    features: ["SEO Optimization", "Content Marketing", "Social Media Management", "Analytics & Reporting"],
    technologies: ["Google Analytics", "SEMrush", "Ahrefs", "Google Ads", "Facebook Ads"],
    startingPrice: "$1,500",
    color: "red"
  },
  {
    id: "data-solutions",
    icon: Database,
    title: "Data Solutions",
    description: "Database design, data analytics, and business intelligence solutions for data-driven decisions.",
    features: ["Database Design", "Data Analytics", "Business Intelligence", "Data Visualization"],
    technologies: ["PostgreSQL", "MongoDB", "Power BI", "Tableau", "Python"],
    startingPrice: "$4,000",
    color: "indigo"
  }
]

const colorClasses = {
  blue: "text-blue-600 bg-blue-100 border-blue-200",
  green: "text-green-600 bg-green-100 border-green-200", 
  purple: "text-purple-600 bg-purple-100 border-purple-200",
  orange: "text-orange-600 bg-orange-100 border-orange-200",
  red: "text-red-600 bg-red-100 border-red-200",
  indigo: "text-indigo-600 bg-indigo-100 border-indigo-200"
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Our Services
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              Comprehensive digital solutions to transform your business and drive growth in the modern digital landscape
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <Card key={service.id} className="relative overflow-hidden transition-all hover:shadow-xl border-2">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <div className={`inline-flex h-12 w-12 items-center justify-center rounded-lg border-2 ${colorClasses[service.color as keyof typeof colorClasses]}`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <Badge variant="secondary" className="text-sm font-semibold">
                        From {service.startingPrice}
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3 pt-4">
                      <Button asChild className="flex-1">
                        <Link href={`/services/${service.id}`}>
                          Learn More <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                      <Button variant="outline" asChild>
                        <Link href="/contact">Get Quote</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Get Started?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
              Let's discuss your project and find the perfect solution for your business needs
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">Start Your Project</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}