import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Award, Clock, Globe } from "lucide-react"
import Link from "next/link"

const stats = [
  {
    icon: Users,
    value: "50+",
    label: "Happy Clients",
    description: "Trusted by businesses worldwide"
  },
  {
    icon: Award,
    value: "100+",
    label: "Projects Completed",
    description: "Successful deliveries across industries"
  },
  {
    icon: Clock,
    value: "5+",
    label: "Years Experience",
    description: "Proven track record in software development"
  },
  {
    icon: Globe,
    value: "15+",
    label: "Countries Served",
    description: "Global reach with local expertise"
  }
]

export function AboutSection() {
  return (
    <section className="bg-gray-50 py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-20 lg:grid-cols-2 lg:gap-32">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              About Mahix InfoTech
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We are a leading software development company dedicated to transforming businesses through innovative digital solutions. Our team of expert developers, designers, and strategists work together to deliver cutting-edge technology solutions that drive growth and success.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              From startups to enterprise-level organizations, we've helped businesses across various industries leverage technology to achieve their goals. Our commitment to quality, innovation, and client satisfaction sets us apart in the competitive digital landscape.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/about">Learn More About Us</Link>
              </Button>
              <Button variant="outline" asChild size="lg">
                <Link href="/contact">Start Your Project</Link>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat) => {
              const Icon = stat.icon
              return (
                <Card key={stat.label} className="text-center">
                  <CardContent className="p-6">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="mt-4">
                      <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                      <div className="text-sm font-semibold text-gray-900">{stat.label}</div>
                      <div className="mt-1 text-xs text-gray-600">{stat.description}</div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}