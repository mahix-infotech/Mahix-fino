"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Users, Target, Award, Lightbulb } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description: "We're committed to helping businesses succeed through innovative technology solutions that drive real results.",
    color: "blue"
  },
  {
    icon: Users,
    title: "Client-Focused",
    description: "Our clients' success is our success. We build long-term partnerships based on trust, transparency, and exceptional service.",
    color: "green"
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We stay ahead of technology trends to deliver cutting-edge solutions that give our clients a competitive advantage.",
    color: "purple"
  },
  {
    icon: Award,
    title: "Quality Excellence",
    description: "We maintain the highest standards in everything we do, from code quality to project delivery and ongoing support.",
    color: "orange"
  }
]

const colorClasses = {
  blue: "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 border-blue-100 dark:border-blue-800/30",
  green: "text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 border-green-100 dark:border-green-800/30", 
  purple: "text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/20 border-purple-100 dark:border-purple-800/30",
  orange: "text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-900/20 border-orange-100 dark:border-orange-800/30"
}

export function AboutValues() {
  return (
    <section className="bg-transparent border-y border-black/[0.05] dark:border-white/[0.08] py-20 relative">
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Our Core Values
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            The guiding principles that shape our culture, decisions, and dedication to our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => {
            const Icon = value.icon
            return (
              <Card key={value.title} className="rounded-3xl border border-black/[0.05] dark:border-white/[0.08] bg-background/50 backdrop-blur-md hover:-translate-y-1.5 hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-8 flex flex-col items-start">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${colorClasses[value.color as keyof typeof colorClasses]} mb-6 transition-transform duration-300 group-hover:scale-110`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground tracking-tight">{value.title}</h3>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
