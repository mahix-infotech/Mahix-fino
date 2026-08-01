"use client"

import * as React from "react"
import { GraduationCap, ExternalLink, Clock, Users } from "lucide-react"

const LEARNING_PLATFORM_URL = process.env.NEXT_PUBLIC_LEARNING_URL || "https://learning.mahixinfotech.com"

const featuredBootcamps = [
  {
    id: "full-stack",
    title: "Full Stack Web Development",
    level: "Beginner to Advanced",
    duration: "12 Weeks",
    mode: "Live Mentorship",
    badge: "Most Popular",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200/80",
    skills: ["React 19", "Next.js 15", "Node.js", "PostgreSQL", "Tailwind CSS"],
    href: `${LEARNING_PLATFORM_URL}/courses/full-stack`,
    gradient: "from-blue-600 to-indigo-600"
  },
  {
    id: "ai-ml",
    title: "AI & Machine Learning Engineering",
    level: "Intermediate",
    duration: "10 Weeks",
    mode: "Hands-on Labs",
    badge: "High Demand",
    badgeColor: "bg-purple-50 text-purple-700 border-purple-200/80",
    skills: ["Python", "PyTorch", "LLMs & RAG", "LangChain", "Vector DBs"],
    href: `${LEARNING_PLATFORM_URL}/courses/ai-ml`,
    gradient: "from-purple-600 to-violet-600"
  },
  {
    id: "mobile-apps",
    title: "Cross-Platform Mobile App Dev",
    level: "All Levels",
    duration: "8 Weeks",
    mode: "Project Based",
    badge: "Trending",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200/80",
    skills: ["Flutter", "React Native", "Firebase", "App Store Release"],
    href: `${LEARNING_PLATFORM_URL}/courses/mobile-apps`,
    gradient: "from-emerald-600 to-teal-600"
  },
  {
    id: "cloud-devops",
    title: "Cloud Infrastructure & DevOps",
    level: "Intermediate",
    duration: "8 Weeks",
    mode: "Live Environment",
    badge: "Industry Certified",
    badgeColor: "bg-amber-50 text-amber-700 border-amber-200/80",
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD Pipelines", "Terraform"],
    href: `${LEARNING_PLATFORM_URL}/courses/cloud-devops`,
    gradient: "from-amber-600 to-orange-600"
  }
]

export function LearningSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-slate-50/60 to-white text-slate-800 relative overflow-hidden border-t border-slate-200/60">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-purple-100/30 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <GraduationCap className="h-4 w-4 text-blue-600" />
            <span>Mahix Academy & Learning Hub</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-tight">
            Master Next-Gen Tech Skills With{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Live Industry Mentorship
            </span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed font-normal">
            Upskill your career or train your enterprise team with hands-on bootcamps, real project building, & accredited digital certifications.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredBootcamps.map((course) => (
            <div
              key={course.id}
              className="bg-white border border-slate-200/80 rounded-2xl p-6 flex flex-col justify-between hover:border-blue-500/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group shadow-md relative overflow-hidden"
            >
              {/* Top Card Gradient Line */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${course.gradient}`} />

              <div>
                {/* Badge & Meta */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase border ${course.badgeColor}`}>
                    {course.badge}
                  </span>
                  <span className="text-[11px] font-bold text-slate-500 flex items-center gap-1">
                    <Clock className="h-3 w-3 text-blue-600" />
                    {course.duration}
                  </span>
                </div>

                {/* Course Title */}
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug mb-2">
                  {course.title}
                </h3>

                <p className="text-xs text-slate-500 font-medium mb-4 flex items-center gap-1">
                  <Users className="h-3.5 w-3.5 text-slate-400" />
                  {course.level} • {course.mode}
                </p>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {course.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded-md bg-slate-100 text-[10px] font-semibold text-slate-700 border border-slate-200/60"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <a
                href={course.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all duration-200 shadow-md shadow-blue-500/20 group/btn"
              >
                <span>View Bootcamp</span>
                <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5" />
              </a>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="bg-white border border-slate-200/80 rounded-2xl p-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center shadow-sm">
          <div className="flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-black text-blue-600">500+</span>
            <span className="text-xs text-slate-600 font-semibold mt-1">Engineers Graduated</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-black text-purple-600">94%</span>
            <span className="text-xs text-slate-600 font-semibold mt-1">Career Placement Rate</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-black text-emerald-600">20+</span>
            <span className="text-xs text-slate-600 font-semibold mt-1">Hands-On Projects</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-black text-amber-600">100%</span>
            <span className="text-xs text-slate-600 font-semibold mt-1">Verified Certificate</span>
          </div>
        </div>


      </div>
    </section>
  )
}
