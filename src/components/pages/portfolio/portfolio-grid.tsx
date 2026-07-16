"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Search, ArrowRight } from "lucide-react"
import { Input } from "@/components/ui/input"

const projects = [
  {
    title: "ShopFlow",
    subtitle: "E-Commerce Platform",
    category: "Web Development",
    tech: ["Next.js", "Node.js", "Stripe", "AWS"],
    impact: "300% sales lift",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800&h=500",
    gradient: "from-red-950/85 via-red-900/60 to-transparent",
    accentColor: "bg-red-500/20 text-red-300 border-red-500/25",
    liveUrl: "#",
  },
  {
    title: "MediCare Pro",
    subtitle: "Healthcare Mobile App",
    category: "Mobile App",
    tech: ["React Native", "Firebase", "WebRTC"],
    impact: "40% less wait times",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800&h=500",
    gradient: "from-blue-950/85 via-blue-900/60 to-transparent",
    accentColor: "bg-blue-500/20 text-blue-300 border-blue-500/25",
    liveUrl: "#",
  },
  {
    title: "DataInsight AI",
    subtitle: "ML Analytics Platform",
    category: "AI & ML",
    tech: ["Python", "TensorFlow", "Kafka", "D3.js"],
    impact: "1M+ daily transactions",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=500",
    gradient: "from-violet-950/85 via-violet-900/60 to-transparent",
    accentColor: "bg-violet-500/20 text-violet-300 border-violet-500/25",
    liveUrl: "#",
  },
  {
    title: "CloudScale",
    subtitle: "Cloud Infrastructure",
    category: "Cloud Services",
    tech: ["AWS", "Kubernetes", "Terraform", "Docker"],
    impact: "60% cost reduction",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800&h=500",
    gradient: "from-emerald-950/85 via-emerald-900/60 to-transparent",
    accentColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/25",
    liveUrl: "#",
  },
  {
    title: "RestaurantOS",
    subtitle: "Management Suite",
    category: "Web Development",
    tech: ["Vue.js", "Laravel", "MySQL", "PWA"],
    impact: "35% efficiency gain",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800&h=500",
    gradient: "from-orange-950/85 via-orange-900/60 to-transparent",
    accentColor: "bg-orange-500/20 text-orange-300 border-orange-500/25",
    liveUrl: "#",
  },
  {
    title: "FitTracker Pro",
    subtitle: "Wellness & Fitness App",
    category: "Mobile App",
    tech: ["Flutter", "Firebase", "HealthKit", "ML"],
    impact: "4.8★ App Store",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800&h=500",
    gradient: "from-pink-950/85 via-pink-900/60 to-transparent",
    accentColor: "bg-pink-500/20 text-pink-300 border-pink-500/25",
    liveUrl: "#",
  },
]

const categories = ["All", "Web Development", "Mobile App", "AI & ML", "Cloud Services"]

export function PortfolioGrid() {
  const [selectedCategory, setSelectedCategory] = React.useState("All")
  const [searchQuery, setSearchQuery] = React.useState("")

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      selectedCategory === "All" || project.category === selectedCategory
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tech.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  return (
    <section className="relative py-24 bg-slate-50 overflow-hidden" id="portfolio-grid">
      {/* Subtle top-right ambient glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 right-0 w-[400px] h-[400px] bg-blue-100/60 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-violet-100/40 rounded-full blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Filters + Search */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5 mb-12">
          {/* Category Filters */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider border transition-all duration-200 ${
                  selectedCategory === cat
                    ? "bg-slate-900 text-white border-slate-900 shadow-md"
                    : "bg-white text-slate-500 border-slate-200 hover:border-slate-400 hover:text-slate-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full lg:w-72">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <Input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-11 rounded-full border border-slate-200 bg-white text-slate-800 placeholder:text-slate-400 focus:border-slate-400 focus-visible:ring-0 focus-visible:ring-offset-0 h-10 text-sm shadow-sm"
            />
          </div>
        </div>

        {/* No results */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-24 border-2 border-dashed border-slate-200 rounded-3xl">
            <p className="text-slate-400 text-lg">No projects match your criteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredProjects.map((project) => (
              <div
                key={project.title}
                className="group relative rounded-2xl overflow-hidden h-64 sm:h-72 cursor-pointer"
              >
                {/* Background Image */}
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />

                {/* Gradient overlay — from bottom */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${project.gradient} transition-opacity duration-500 opacity-90 group-hover:opacity-100`}
                />

                {/* Category badge — top-left */}
                <div className="absolute top-4 left-4 z-10">
                  <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border backdrop-blur-sm ${project.accentColor}`}>
                    {project.category}
                  </span>
                </div>

                {/* Impact badge — top-right */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-black/40 border border-white/10 text-white/80 backdrop-blur-sm">
                    {project.impact}
                  </span>
                </div>

                {/* Bottom content */}
                <div className="absolute inset-x-0 bottom-0 p-5 z-10 flex flex-col gap-3">
                  {/* Title + Subtitle */}
                  <div>
                    <h3 className="text-lg font-extrabold text-white leading-tight">{project.title}</h3>
                    <p className="text-xs text-white/50 mt-0.5">{project.subtitle}</p>
                  </div>

                  {/* Tech + Demo row */}
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.slice(0, 3).map((t) => (
                        <span
                          key={t}
                          className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-white/10 border border-white/10 text-white/70 backdrop-blur-sm"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex-shrink-0 inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white text-slate-900 text-xs font-bold hover:bg-slate-100 hover:scale-105 transition-all duration-200 shadow-lg"
                    >
                      <ExternalLink className="h-3 w-3" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-slate-900 text-white font-bold text-sm hover:bg-slate-700 hover:scale-105 transition-all duration-300 shadow-xl"
          >
            Start Your Project
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-slate-200 bg-white text-slate-700 font-bold text-sm hover:bg-slate-50 hover:scale-105 transition-all duration-300"
          >
            About Us
          </Link>
        </div>

      </div>
    </section>
  )
}
