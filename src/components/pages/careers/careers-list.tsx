"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Briefcase, MapPin, Clock, Bell, Send, ChevronDown,
  Users, Rocket, Globe, Heart, Zap, Shield, Star,
  CheckCircle2, ArrowRight, Coffee, TrendingUp, Award
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const jobs = [
  {
    id: "job-1",
    title: "Senior Full Stack Engineer",
    department: "Engineering",
    type: "Full-Time",
    location: "Dindigul (Hybrid) / Remote",
    experience: "3–5 years",
    salary: "Competitive",
    color: "from-red-900 to-red-800",
    accent: "bg-red-900",
    badge: "bg-red-50 text-red-800 border-red-200",
    dot: "bg-red-800",
    description:
      "Lead enterprise-scale full-stack development for our global clients. You will architect and ship production-grade features using modern React and Node.js stacks, ensuring best practices in code quality, security, and performance.",
    requirements: [
      "Strong understanding of React 19, Next.js (App Router), and TypeScript",
      "Experience building RESTful APIs with Node.js/Express or NestJS",
      "Knowledge of database design — PostgreSQL, Prisma ORM, Redis",
      "Familiarity with cloud hosting (AWS/Vercel) and CI/CD pipelines",
      "Strong problem-solving mindset and team collaboration skills",
    ],
    perks: ["Health Insurance", "Remote Options", "Learning Budget"],
  },
  {
    id: "job-2",
    title: "UI/UX & Frontend Developer",
    department: "Design & Frontend",
    type: "Full-Time",
    location: "Dindigul (Hybrid)",
    experience: "2–4 years",
    salary: "Competitive",
    color: "from-blue-900 to-blue-800",
    accent: "bg-blue-900",
    badge: "bg-blue-50 text-blue-800 border-blue-200",
    dot: "bg-blue-800",
    description:
      "Create pixel-perfect, premium web interfaces that clients love. You'll work hand-in-hand with stakeholders to build responsive frontends, interactive prototypes, and polished design systems that reflect brand identity.",
    requirements: [
      "Proficient in Tailwind CSS, CSS Grid/Flexbox, and responsive systems",
      "Strong experience in JavaScript, React, and modular styling practices",
      "Familiarity with design tools — Figma, Adobe XD",
      "Experience with animations (Framer Motion, CSS transitions) is a plus",
      "Strong attention to detail and visual design sensibility",
    ],
    perks: ["Figma Pro Access", "Design Conferences", "Flexible Hours"],
  },
  {
    id: "job-3",
    title: "SEO & Digital Marketing Specialist",
    department: "Marketing",
    type: "Full-Time / Part-Time",
    location: "Remote",
    experience: "1–3 years",
    salary: "Competitive",
    color: "from-slate-800 to-slate-700",
    accent: "bg-slate-800",
    badge: "bg-slate-100 text-slate-700 border-slate-200",
    dot: "bg-slate-700",
    description:
      "Own search visibility, content strategy, and paid campaign operations for our portfolio of client platforms. You'll produce audit reports, build scalable SEO architectures, and grow organic traffic month over month.",
    requirements: [
      "Proven track record of ranking pages for competitive keywords",
      "Knowledge of SEO tooling — Ahrefs, Semrush, Screaming Frog",
      "Experience managing Google Analytics, Search Console, and Tag Manager",
      "Strong understanding of copywriting and social media marketing strategies",
      "Data-driven mindset with ability to derive insights from analytics",
    ],
    perks: ["Tool Subscriptions", "Performance Bonuses", "Remote Work"],
  },
  {
    id: "job-4",
    title: "Mobile App Developer",
    department: "Engineering",
    type: "Full-Time",
    location: "Dindigul (Hybrid) / Remote",
    experience: "2–4 years",
    salary: "Competitive",
    color: "from-emerald-900 to-emerald-800",
    accent: "bg-emerald-900",
    badge: "bg-emerald-50 text-emerald-800 border-emerald-200",
    dot: "bg-emerald-800",
    description:
      "Build cross-platform mobile applications using React Native and Flutter that deliver native-level performance and beautiful UX. You'll integrate backend APIs, push services, and app store deployment pipelines.",
    requirements: [
      "Proficient in React Native or Flutter (both is a plus)",
      "Experience with mobile app state management — Redux, MobX, or Riverpod",
      "Familiarity with Firebase, push notifications, and in-app purchases",
      "Understanding of App Store and Google Play deployment workflows",
      "Strong debugging and performance optimization skills",
    ],
    perks: ["Device Allowance", "App Store Credits", "Remote Options"],
  },
]

const values = [
  { icon: Rocket, title: "Move Fast", desc: "We ship products in weeks, not months. Speed and quality coexist here.", color: "text-red-800", bg: "bg-red-50 border-red-100" },
  { icon: Heart, title: "Care Deeply", desc: "We care about our team's wellbeing as much as our clients' outcomes.", color: "text-blue-800", bg: "bg-blue-50 border-blue-100" },
  { icon: Globe, title: "Think Global", desc: "We build for a global audience with international standards.", color: "text-slate-700", bg: "bg-slate-50 border-slate-200" },
  { icon: Zap, title: "Grow Constantly", desc: "Every team member gets dedicated time for learning and upskilling.", color: "text-amber-700", bg: "bg-amber-50 border-amber-100" },
  { icon: Shield, title: "Own Your Work", desc: "We trust our people with full ownership and accountability.", color: "text-red-900", bg: "bg-red-50 border-red-100" },
  { icon: Users, title: "Win Together", desc: "Individual brilliance meets collaborative execution here.", color: "text-blue-900", bg: "bg-blue-50 border-blue-100" },
]

const perks = [
  { icon: Coffee, label: "Flexible Hours" },
  { icon: Globe, label: "Remote Friendly" },
  { icon: TrendingUp, label: "Growth Plans" },
  { icon: Award, label: "Performance Bonus" },
  { icon: Star, label: "Learning Budget" },
  { icon: Heart, label: "Health Cover" },
]

const stats = [
  { value: "100%", label: "Remote Friendly", sub: "Work from anywhere" },
  { value: "50+", label: "Projects Shipped", sub: "Global enterprise clients" },
  { value: "5+", label: "Years of Growth", sub: "Since 2019" },
  { value: "15+", label: "Team Members", sub: "And growing fast" },
]

export function CareersList() {
  const [openJob, setOpenJob] = useState<string | null>(null)

  return (
    <>
      {/* ── Stats Bar ───────────────────────────────── */}
      <section className="bg-white border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-slate-100">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col items-center justify-center py-10 px-6 text-center">
                <span className="text-4xl font-black text-red-900">{s.value}</span>
                <span className="mt-1 text-sm font-bold text-slate-800">{s.label}</span>
                <span className="mt-0.5 text-xs text-slate-400">{s.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Join Us (Values) ─────────────────────── */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-red-800 mb-3">Why Mahix?</span>
            <h2 className="text-4xl font-black text-slate-900">Built on values, driven by people</h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-500 text-lg leading-relaxed">
              We don't just build software. We build careers, skills, and a culture where great work thrives.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => {
              const Icon = v.icon
              return (
                <div
                  key={v.title}
                  className={`rounded-2xl border p-8 ${v.bg} transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group`}
                >
                  <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm mb-5 ${v.color}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className={`text-lg font-bold mb-2 ${v.color}`}>{v.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{v.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Perks Strip ─────────────────────────────── */}
      <section className="py-14 bg-white border-y border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-400 mb-8">What you get</p>
          <div className="flex flex-wrap justify-center gap-4">
            {perks.map((p) => {
              const Icon = p.icon
              return (
                <div
                  key={p.label}
                  className="inline-flex items-center gap-2.5 px-5 py-3 rounded-full border border-slate-200 bg-slate-50 hover:bg-red-50 hover:border-red-200 transition-all duration-200 group cursor-default"
                >
                  <Icon className="h-4 w-4 text-slate-400 group-hover:text-red-800 transition-colors" />
                  <span className="text-sm font-semibold text-slate-600 group-hover:text-red-900 transition-colors">{p.label}</span>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Open Positions ──────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 pb-8 border-b-2 border-slate-100">
            <div>
              <span className="text-xs font-bold tracking-widest uppercase text-red-800">We're hiring</span>
              <h2 className="text-4xl font-black text-slate-900 mt-2">Open Positions</h2>
              <p className="text-slate-500 mt-2 text-base">
                {jobs.length} roles open across engineering, design, and marketing.
              </p>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-200 self-start md:self-auto">
              <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-bold text-green-700">Actively Recruiting</span>
            </div>
          </div>

          {/* Job Cards */}
          <div className="space-y-5">
            {jobs.map((job) => {
              const isOpen = openJob === job.id
              return (
                <div
                  key={job.id}
                  className={`rounded-2xl border-2 overflow-hidden transition-all duration-300 ${
                    isOpen ? "border-slate-200 shadow-xl" : "border-slate-100 hover:border-slate-200 hover:shadow-md"
                  }`}
                >
                  {/* Card Header — always visible */}
                  <button
                    onClick={() => setOpenJob(isOpen ? null : job.id)}
                    className="w-full text-left"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-start gap-5 p-6 md:p-8">
                      {/* Color accent bar */}
                      <div className={`hidden md:flex flex-shrink-0 w-1.5 self-stretch rounded-full bg-gradient-to-b ${job.color}`} />

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${job.badge}`}>
                            {job.department}
                          </span>
                          <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                            {job.type}
                          </span>
                        </div>

                        <h3 className="text-xl md:text-2xl font-black text-slate-900 leading-tight">{job.title}</h3>

                        <div className="flex flex-wrap gap-4 mt-3 text-sm text-slate-500">
                          <span className="flex items-center gap-1.5">
                            <MapPin className="h-4 w-4 text-slate-400" />
                            {job.location}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Clock className="h-4 w-4 text-slate-400" />
                            {job.experience}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Briefcase className="h-4 w-4 text-slate-400" />
                            {job.salary}
                          </span>
                        </div>
                      </div>

                      {/* Expand icon */}
                      <div className={`flex-shrink-0 h-9 w-9 rounded-full border-2 flex items-center justify-center transition-all duration-300 mt-1 ${
                        isOpen ? "border-red-800 bg-red-800 text-white rotate-180" : "border-slate-200 bg-slate-50 text-slate-500 hover:border-red-800 hover:text-red-800"
                      }`}>
                        <ChevronDown className="h-4 w-4 transition-transform duration-300" />
                      </div>
                    </div>
                  </button>

                  {/* Expanded body */}
                  {isOpen && (
                    <div className="border-t-2 border-slate-100 px-6 md:px-8 py-8 bg-slate-50/50 animate-in slide-in-from-top-2 duration-300">
                      <div className="grid md:grid-cols-3 gap-10">
                        {/* Description + Requirements */}
                        <div className="md:col-span-2 space-y-8">
                          <div>
                            <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-3">About this Role</h4>
                            <p className="text-slate-700 leading-relaxed text-sm">{job.description}</p>
                          </div>

                          <div>
                            <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4">What We're Looking For</h4>
                            <ul className="space-y-3">
                              {job.requirements.map((req, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                                  <CheckCircle2 className="h-4 w-4 text-red-800 mt-0.5 flex-shrink-0" />
                                  <span>{req}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Sidebar — Perks + CTA */}
                        <div className="space-y-6">
                          <div className="rounded-xl border border-slate-200 bg-white p-5">
                            <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4">Role Benefits</h4>
                            <div className="space-y-2.5">
                              {job.perks.map((perk) => (
                                <div key={perk} className="flex items-center gap-2 text-sm text-slate-600">
                                  <span className={`h-2 w-2 rounded-full ${job.dot}`} />
                                  {perk}
                                </div>
                              ))}
                            </div>
                          </div>

                          <Button
                            asChild
                            size="lg"
                            className="w-full rounded-xl bg-red-900 hover:bg-red-800 text-white shadow-lg shadow-red-900/20 transition-all duration-300 hover:scale-[1.02]"
                          >
                            <Link href="/contact" className="flex items-center justify-center gap-2">
                              Apply Now
                              <Send className="h-4 w-4" />
                            </Link>
                          </Button>

                          <Button
                            asChild
                            variant="outline"
                            size="lg"
                            className="w-full rounded-xl border-slate-200 text-slate-600 hover:text-red-900 hover:border-red-200 transition-all duration-300"
                          >
                            <Link href="/contact" className="flex items-center justify-center gap-2">
                              Ask a Question
                              <ArrowRight className="h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Open Application CTA ────────────────────── */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-red-900 via-red-800 to-blue-900 p-1 shadow-2xl">
            <div className="rounded-[22px] bg-gradient-to-br from-red-900/95 to-blue-900/95 p-12 md:p-16 text-white relative overflow-hidden">
              {/* Decorative circles */}
              <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-white/5 pointer-events-none" />
              <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-white/5 pointer-events-none" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-80 w-80 rounded-full bg-white/[0.02] pointer-events-none" />

              <div className="relative text-center">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 border border-white/20 mb-6">
                  <Bell className="h-6 w-6 text-white animate-bounce" />
                </div>

                <h3 className="text-3xl md:text-4xl font-black leading-tight mb-4">
                  Don't see a perfect fit?
                </h3>
                <p className="text-white/70 max-w-xl mx-auto leading-relaxed text-base md:text-lg mb-10">
                  We're always interested in meeting talented developers, designers, content writers, and digital strategists. Send us your resume and we'll reach out when the right role opens up.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    size="lg"
                    className="rounded-xl bg-white text-red-900 hover:bg-slate-100 font-bold shadow-lg px-8 transition-all duration-300 hover:scale-105"
                  >
                    <Link href="/contact" className="flex items-center gap-2">
                      Send Your Resume
                      <Send className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="rounded-xl border-white/20 bg-white/10 text-white hover:bg-white/20 font-semibold px-8 transition-all duration-300 hover:scale-105"
                  >
                    <Link href="/about" className="flex items-center gap-2">
                      Learn About Us
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
