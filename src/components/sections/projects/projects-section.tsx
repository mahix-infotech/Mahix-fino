"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ExternalLink } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "MedBook Pro",
    category: "Healthcare",
    tech: ["Next.js", "PostgreSQL", "Stripe"],
    gradient: "from-blue-900/80 via-blue-950/70 to-slate-950/90",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600&h=400",
    liveUrl: "https://mahixinfotech.com/portfolio",
  },
  {
    id: 2,
    title: "ShopNest",
    category: "E-Commerce",
    tech: ["Shopify", "React", "Node.js"],
    gradient: "from-emerald-900/80 via-teal-950/70 to-slate-950/90",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=600&h=400",
    liveUrl: "https://mahixinfotech.com/portfolio",
  },
  {
    id: 3,
    title: "TrackForce CRM",
    category: "SaaS / CRM",
    tech: ["React", "FastAPI", "MongoDB"],
    gradient: "from-violet-900/80 via-purple-950/70 to-slate-950/90",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600&h=400",
    liveUrl: "https://mahixinfotech.com/portfolio",
  },
  {
    id: 4,
    title: "GrubGo",
    category: "Mobile App",
    tech: ["Flutter", "Firebase", "Razorpay"],
    gradient: "from-orange-900/80 via-rose-950/70 to-slate-950/90",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=600&h=400",
    liveUrl: "https://mahixinfotech.com/portfolio",
  },
  {
    id: 5,
    title: "RankSprint",
    category: "SEO Platform",
    tech: ["Next.js", "Python", "Elasticsearch"],
    gradient: "from-sky-900/80 via-indigo-950/70 to-slate-950/90",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600&h=400",
    liveUrl: "https://mahixinfotech.com/portfolio",
  },
  {
    id: 6,
    title: "NeuroLens AI",
    category: "AI / ML",
    tech: ["Python", "TensorFlow", "Azure"],
    gradient: "from-pink-900/80 via-fuchsia-950/70 to-slate-950/90",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&q=80&w=600&h=400",
    liveUrl: "https://mahixinfotech.com/portfolio",
  },
]

export function ProjectsSection() {
  return (
    <section className="relative py-24 sm:py-32 bg-slate-950 overflow-hidden">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/3 w-[500px] h-[500px] bg-blue-700/8 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-violet-700/8 rounded-full blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-14 flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-bold uppercase tracking-widest text-slate-400 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Live Projects
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Our{" "}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="mt-4 max-w-xl text-slate-400 text-sm sm:text-base leading-relaxed">
            Real-world products we&apos;ve shipped — from SaaS platforms and mobile apps to AI tools.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project) => (
            <div
              key={project.id}
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

              {/* Gradient overlay — always present, darkens on hover */}
              <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} transition-opacity duration-500 opacity-80 group-hover:opacity-95`} />

              {/* Content — pinned to bottom */}
              <div className="absolute inset-0 flex flex-col justify-end p-5 z-10">
                {/* Category pill */}
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/60 mb-1">
                  {project.category}
                </span>

                {/* Title */}
                <h3 className="text-xl font-extrabold text-white leading-tight mb-3">
                  {project.title}
                </h3>

                {/* Tech tags + button row */}
                <div className="flex items-center justify-between gap-3">
                  {/* Tech badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-white/10 border border-white/10 text-white/70 backdrop-blur-sm"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Live Demo button */}
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

        {/* Bottom CTA */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-slate-900 font-bold text-sm hover:bg-slate-100 hover:scale-105 transition-all duration-300 shadow-xl"
          >
            View All Projects
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/15 bg-white/5 text-white font-bold text-sm hover:bg-white/10 hover:scale-105 transition-all duration-300"
          >
            Start Your Project
          </Link>
        </div>

      </div>
    </section>
  )
}
