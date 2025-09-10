import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Target, Award, Lightbulb } from "lucide-react"
import Link from "next/link"

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description: "We're committed to helping businesses succeed through innovative technology solutions that drive real results."
  },
  {
    icon: Users,
    title: "Client-Focused",
    description: "Our clients' success is our success. We build long-term partnerships based on trust, transparency, and exceptional service."
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We stay ahead of technology trends to deliver cutting-edge solutions that give our clients a competitive advantage."
  },
  {
    icon: Award,
    title: "Quality Excellence",
    description: "We maintain the highest standards in everything we do, from code quality to project delivery and ongoing support."
  }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                About Mahix InfoTech
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
                We're a passionate team of developers, designers, and digital strategists dedicated to transforming businesses through innovative technology solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Our Story
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Founded in 2019, Mahix InfoTech began with a simple mission: to help businesses leverage technology to achieve their goals. What started as a small team of passionate developers has grown into a full-service digital solutions company.
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Today, we serve clients across 15+ countries, from innovative startups to established enterprises. Our diverse team brings together expertise in web development, mobile applications, artificial intelligence, cloud computing, and digital marketing.
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  We believe that great technology should be accessible to businesses of all sizes. That's why we focus on delivering high-quality, scalable solutions that grow with our clients' needs.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-blue-600">50+</div>
                    <div className="text-sm font-semibold text-gray-900">Happy Clients</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-green-600">100+</div>
                    <div className="text-sm font-semibold text-gray-900">Projects Delivered</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-purple-600">15+</div>
                    <div className="text-sm font-semibold text-gray-900">Countries Served</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-orange-600">5+</div>
                    <div className="text-sm font-semibold text-gray-900">Years Experience</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-gray-50 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Our Values
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
                These core values guide everything we do and shape how we work with our clients and each other.
              </p>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => {
                const Icon = value.icon
                return (
                  <Card key={value.title}>
                    <CardContent className="p-6 text-center">
                      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="mt-4 text-lg font-semibold text-gray-900">{value.title}</h3>
                      <p className="mt-2 text-sm text-gray-600">{value.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Ready to Work Together?
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
                Let's discuss your project and see how we can help you achieve your digital transformation goals.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Button asChild size="lg">
                  <Link href="/contact">Get Started</Link>
                </Button>
                <Button variant="outline" asChild size="lg">
                  <Link href="/portfolio">View Our Work</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}