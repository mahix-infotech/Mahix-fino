import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Smartphone, Brain, Cloud, TrendingUp, Database, ArrowRight, CheckCircle } from "lucide-react"
import { Navigation } from "@/components/sections/navigation/navigation"
import { Footer } from "@/components/sections/footer/footer"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Services - Web Development, Mobile Apps, AI & Cloud Solutions | Mahix InfoTech",
  description: "Comprehensive digital services in Dindigul including web development, mobile app development, AI/ML solutions, cloud services, and SEO. Transform your business with our expert technology solutions.",
  keywords: "digital services, software development services, web development, mobile apps, AI solutions, cloud services, SEO services, Dindigul technology company",
}

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
  blue: "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 border-blue-100 dark:border-blue-800/30",
  green: "text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 border-green-100 dark:border-green-800/30", 
  purple: "text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/20 border-purple-100 dark:border-purple-800/30",
  orange: "text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-900/20 border-orange-100 dark:border-orange-800/30",
  red: "text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 border-red-100 dark:border-red-800/30",
  indigo: "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/20 border-indigo-100 dark:border-indigo-800/30"
}

export default function ServicesPage() {
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
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl max-w-3xl leading-[1.12]">
              Our{" "}
              <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300 leading-relaxed">
              Comprehensive digital solutions to transform your business and drive growth in the modern digital landscape.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 relative">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {services.map((service) => {
                const Icon = service.icon
                return (
                  <Card key={service.id} className="relative overflow-hidden border border-black/[0.05] dark:border-white/[0.08] bg-background/50 backdrop-blur-md rounded-3xl hover:shadow-xl transition-all duration-300 group flex flex-col justify-between">
                    
                    <CardHeader className="p-8 pb-4">
                      <div className="flex items-center justify-between mb-4">
                        <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl border ${colorClasses[service.color as keyof typeof colorClasses]} transition-transform duration-300 group-hover:scale-110`}>
                          <Icon className="h-6 w-6" />
                        </div>
                        <Badge className="bg-primary/10 text-primary font-bold hover:bg-primary/10 rounded-full px-3 py-1 text-xs">
                          From {service.startingPrice}
                        </Badge>
                      </div>
                      <CardTitle className="text-2xl font-bold tracking-tight text-foreground">{service.title}</CardTitle>
                      <CardDescription className="text-sm text-muted-foreground leading-relaxed mt-2">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="p-8 pt-0 space-y-6">
                      <div className="border-t border-black/[0.04] dark:border-white/[0.04] pt-4">
                        <h4 className="font-bold text-foreground mb-3 text-xs uppercase tracking-wider">Key Features:</h4>
                        <ul className="space-y-2">
                          {service.features.map((feature) => (
                            <li key={feature} className="flex items-center text-sm text-muted-foreground">
                              <CheckCircle className="mr-3 h-4 w-4 text-green-500 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="border-t border-black/[0.04] dark:border-white/[0.04] pt-4">
                        <h4 className="font-bold text-foreground mb-3 text-xs uppercase tracking-wider">Technologies:</h4>
                        <div className="flex flex-wrap gap-1.5">
                          {service.technologies.map((tech) => (
                            <Badge key={tech} variant="outline" className="rounded-full text-[10px] px-2.5 py-0.5 font-semibold text-muted-foreground border-black/[0.08] dark:border-white/[0.1]">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-black/[0.04] dark:border-white/[0.04] w-full">
                        {service.id !== "data-solutions" ? (
                          <Button asChild className="flex-1 rounded-full shadow-lg hover:shadow-primary/20 group/btn">
                            <Link href={`/services/${service.id}`} className="flex items-center justify-center">
                              View Service Details 
                              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                            </Link>
                          </Button>
                        ) : (
                          <Button asChild className="flex-1 rounded-full shadow-lg hover:shadow-primary/20 group/btn">
                            <Link href="/contact" className="flex items-center justify-center">
                              Inquire Service Details
                              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                            </Link>
                          </Button>
                        )}
                        <Button variant="outline" asChild className="rounded-full border-black/[0.08] dark:border-white/[0.1]">
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

        {/* Dynamic CTA Banner */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-purple-600/5 pointer-events-none" />
          
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
            <div className="relative overflow-hidden rounded-[30px] border border-black/[0.05] dark:border-white/[0.08] bg-background/50 backdrop-blur-md px-8 py-16 shadow-xl sm:px-16 md:py-20 lg:px-24 text-center flex flex-col items-center justify-center">
              
              <div className="relative max-w-2xl flex flex-col items-center">
                <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                  Ready to Get Started?
                </h2>
                
                <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground leading-relaxed">
                  Let's discuss your project and find the perfect solution for your business needs.
                </p>
                
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                  <Button asChild size="lg" className="w-full sm:w-auto rounded-full shadow-lg hover:shadow-primary/20 hover:scale-105 transition-all duration-300">
                    <Link href="/contact">Start Your Project</Link>
                  </Button>
                  <Button variant="outline" asChild size="lg" className="w-full sm:w-auto rounded-full border-black/[0.08] dark:border-white/[0.1] hover:scale-105 transition-all duration-300">
                    <Link href="/portfolio">View Our Work</Link>
                  </Button>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}