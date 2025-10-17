"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Smartphone, Cloud, TrendingUp, Brain } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 py-24 sm:py-32 lg:py-40">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
            Transform Your Business with{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Digital Innovation
            </span>
          </h1>
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-600 sm:text-xl lg:text-2xl">
            Mahix InfoTech delivers cutting-edge software solutions, from web development and mobile apps to AI/ML services and cloud infrastructure. Let's build the future together.
          </p>
          <div className="mt-12 flex items-center justify-center gap-x-6 flex-col sm:flex-row gap-y-4">
            <Button asChild size="lg" className="text-lg px-8 py-6">
              <Link href="/contact">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" asChild size="lg" className="text-lg px-8 py-6">
              <Link href="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>

        {/* Service Icons */}
        <div className="mt-24">
          <h2 className="sr-only">Our Services</h2>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5 px-4">
            <div className="flex flex-col items-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                <Code className="h-8 w-8" />
              </div>
              <h3 className="mt-4 text-sm font-semibold text-gray-900">Web Development</h3>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
                <Smartphone className="h-8 w-8" />
              </div>
              <h3 className="mt-4 text-sm font-semibold text-gray-900">Mobile Apps</h3>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                <Brain className="h-8 w-8" />
              </div>
              <h3 className="mt-4 text-sm font-semibold text-gray-900">AI & ML</h3>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                <Cloud className="h-8 w-8" />
              </div>
              <h3 className="mt-4 text-sm font-semibold text-gray-900">Cloud Services</h3>
            </div>
            <div className="flex flex-col items-center sm:col-span-3 lg:col-span-1">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-100 text-red-600">
                <TrendingUp className="h-8 w-8" />
              </div>
              <h3 className="mt-4 text-sm font-semibold text-gray-900">SEO & Marketing</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}