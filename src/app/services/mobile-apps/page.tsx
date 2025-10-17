import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Smartphone, CheckCircle, ArrowRight, Apple, Play, Zap, Users } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Mobile App Development - iOS & Android Apps | Mahix InfoTech",
  description: "Expert mobile app development services in Coimbatore. We build native iOS, Android, and cross-platform apps using React Native and Flutter. Transform your business with custom mobile solutions.",
  keywords: "mobile app development, iOS app development, Android app development, React Native, Flutter, cross-platform apps, Coimbatore mobile apps",
}

const features = [
  {
    icon: Apple,
    title: "iOS Development",
    description: "Native iOS apps built with Swift and modern iOS frameworks"
  },
  {
    icon: Play,
    title: "Android Development", 
    description: "Native Android apps using Kotlin and latest Android technologies"
  },
  {
    icon: Zap,
    title: "Cross-Platform",
    description: "Build once, deploy everywhere with React Native and Flutter"
  },
  {
    icon: Users,
    title: "User-Centric Design",
    description: "Intuitive interfaces designed for optimal user experience"
  }
]

const services = [
  {
    title: "Native Mobile Apps",
    description: "Platform-specific apps for iOS and Android with optimal performance",
    features: ["Native Performance", "Platform UI Guidelines", "Device Integration", "App Store Optimization"]
  },
  {
    title: "Cross-Platform Apps",
    description: "Single codebase apps that work on both iOS and Android",
    features: ["React Native/Flutter", "Shared Codebase", "Faster Development", "Cost Effective"]
  },
  {
    title: "App Modernization",
    description: "Update and modernize existing mobile applications",
    features: ["Performance Optimization", "UI/UX Redesign", "New Features", "Security Updates"]
  }
]

const technologies = [
  "React Native", "Flutter", "Swift", "Kotlin", "Expo", "Firebase", 
  "Redux", "MobX", "SQLite", "Realm", "Push Notifications", "In-App Purchases"
]

const portfolio = [
  {
    title: "Fitness Tracking App",
    description: "Cross-platform fitness app with workout tracking and social features",
    image: "/placeholder-app.jpg",
    technologies: ["React Native", "Firebase", "Redux"]
  },
  {
    title: "E-commerce Mobile App",
    description: "Shopping app with AR try-on and seamless checkout experience",
    image: "/placeholder-app.jpg",
    technologies: ["Flutter", "Stripe", "ARKit"]
  },
  {
    title: "Food Delivery App",
    description: "On-demand food delivery with real-time tracking and payments",
    image: "/placeholder-app.jpg",
    technologies: ["React Native", "Google Maps", "PayPal"]
  }
]

export default function MobileAppsPage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 sm:py-32 bg-gradient-to-r from-green-600 to-green-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm mb-6">
              <Smartphone className="h-8 w-8" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Mobile App Development
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-green-100">
              Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Get Started</Link>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/portfolio">View Apps</Link>
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
              Mobile App Development Expertise
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              We create mobile apps that users love and businesses depend on
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <Card key={feature.title} className="text-center">
                  <CardHeader>
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 text-green-600 mx-auto">
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
              Mobile App Services
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

      {/* Development Process */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Development Process
            </h2>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { step: "1", title: "Discovery", description: "Understanding your requirements and target audience" },
              { step: "2", title: "Design", description: "Creating wireframes and UI/UX designs" },
              { step: "3", title: "Development", description: "Building your app with regular updates" },
              { step: "4", title: "Launch", description: "App store submission and post-launch support" }
            ].map((phase) => (
              <div key={phase.step} className="text-center">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-600 text-white font-bold text-lg mb-4">
                  {phase.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{phase.title}</h3>
                <p className="text-gray-600">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Technologies & Frameworks
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              We use the most advanced mobile development technologies
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
      <section className="py-20 bg-green-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to Build Your Mobile App?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-green-100">
              Let's turn your app idea into reality with our expert development team
            </p>
            <div className="mt-8">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Start Your App Project</Link>
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