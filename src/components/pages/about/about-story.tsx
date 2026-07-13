"use client"

import { Card, CardContent } from "@/components/ui/card"

export function AboutStory() {
  return (
    <section className="py-20 relative">
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24 items-center">
          
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Our Story
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Founded in 2019, Mahix InfoTech began with a simple mission: to help businesses leverage technology to achieve their goals. What started as a small team of passionate developers has grown into a full-service digital solutions company.
            </p>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Today, we serve clients across 15+ countries, from innovative startups to established enterprises. Our diverse team brings together expertise in web development, mobile applications, artificial intelligence, cloud computing, and digital marketing.
            </p>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              We believe that great technology should be accessible to businesses of all sizes. That's why we focus on delivering high-quality, scalable solutions that grow with our clients' needs.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            <Card className="rounded-3xl border border-black/[0.05] dark:border-white/[0.08] bg-background/50 backdrop-blur-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="text-4xl font-extrabold text-blue-600 dark:text-blue-400">50+</div>
                <div className="text-sm font-bold text-foreground mt-2">Happy Clients</div>
              </CardContent>
            </Card>
            <Card className="rounded-3xl border border-black/[0.05] dark:border-white/[0.08] bg-background/50 backdrop-blur-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="text-4xl font-extrabold text-green-600 dark:text-green-400">100+</div>
                <div className="text-sm font-bold text-foreground mt-2">Projects Delivered</div>
              </CardContent>
            </Card>
            <Card className="rounded-3xl border border-black/[0.05] dark:border-white/[0.08] bg-background/50 backdrop-blur-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="text-4xl font-extrabold text-purple-600 dark:text-purple-400">15+</div>
                <div className="text-sm font-bold text-foreground mt-2">Countries Served</div>
              </CardContent>
            </Card>
            <Card className="rounded-3xl border border-black/[0.05] dark:border-white/[0.08] bg-background/50 backdrop-blur-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="text-4xl font-extrabold text-orange-600 dark:text-orange-400">5+</div>
                <div className="text-sm font-bold text-foreground mt-2">Years Experience</div>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </section>
  )
}
