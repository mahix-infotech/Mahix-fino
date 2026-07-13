"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Users, TrendingUp, Search, ArrowUpRight, CheckCircle2 } from "lucide-react"
import { Input } from "@/components/ui/input"

const projects = [
  {
    title: "ShopFlow E-Commerce Platform",
    description: "A comprehensive e-commerce solution for a retail chain with 50+ stores. Features real-time inventory sync, multi-store management, advanced analytics, and mobile-responsive design.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop&crop=center",
    tags: ["Next.js", "React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
    category: "Web Development",
    duration: "6 months",
    teamSize: "8 developers",
    impact: "300% increase in online sales",
    highlights: [
      "Multi-store checkout pipeline with Next.js microservices",
      "Real-time ERP inventory syncing via Stripe Webhooks",
      "45% page load improvement with Server Component rendering",
      "Comprehensive analytics dashboard for regional managers",
    ],
    clientType: "Enterprise Retailer",
    accentFrom: "from-red-900",
    accentTo: "to-red-700",
    badgeBg: "bg-red-50",
    badgeText: "text-red-800",
    badgeBorder: "border-red-200",
    impactBg: "bg-red-50",
    impactText: "text-red-900",
    impactBorder: "border-red-100",
    impactIcon: "text-red-800",
  },
  {
    title: "MediCare Pro Mobile App",
    description: "Healthcare management app serving 10,000+ patients across 25 clinics. Includes telemedicine, appointment booking, prescription management, and encrypted health records.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=500&fit=crop&crop=center",
    tags: ["React Native", "Firebase", "Node.js", "WebRTC", "HIPAA Compliant"],
    category: "Mobile App",
    duration: "8 months",
    teamSize: "6 developers",
    impact: "40% reduction in wait times",
    highlights: [
      "HIPAA-compliant end-to-end encrypted video via WebRTC",
      "Offline sync logic using SQLite + Firebase Realtime Database",
      "Push notifications reducing missed consultations by 25%",
      "Appointment booking with Google Calendar integration",
    ],
    clientType: "Healthcare Provider",
    accentFrom: "from-blue-900",
    accentTo: "to-blue-700",
    badgeBg: "bg-blue-50",
    badgeText: "text-blue-800",
    badgeBorder: "border-blue-200",
    impactBg: "bg-blue-50",
    impactText: "text-blue-900",
    impactBorder: "border-blue-100",
    impactIcon: "text-blue-800",
  },
  {
    title: "DataInsight AI Analytics",
    description: "Machine learning platform for financial services analyzing market trends and customer behavior. Processes 1M+ transactions daily with real-time insights and predictive modeling.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop&crop=center",
    tags: ["Python", "TensorFlow", "React", "D3.js", "AWS", "Apache Kafka"],
    category: "AI & ML",
    duration: "10 months",
    teamSize: "12 specialists",
    impact: "25% improvement in predictions",
    highlights: [
      "PyTorch & TensorFlow predictive trend models on raw client logs",
      "Real-time transaction pipeline via Apache Kafka streams",
      "Interactive D3.js charting dashboard for live analytics",
      "Auto-scaling AWS Elastic Container deployment for ML models",
    ],
    clientType: "Financial Services Group",
    accentFrom: "from-purple-900",
    accentTo: "to-purple-700",
    badgeBg: "bg-purple-50",
    badgeText: "text-purple-800",
    badgeBorder: "border-purple-200",
    impactBg: "bg-purple-50",
    impactText: "text-purple-900",
    impactBorder: "border-purple-100",
    impactIcon: "text-purple-800",
  },
  {
    title: "CloudScale Infrastructure",
    description: "Enterprise cloud migration for a Fortune 500 company. Migrated 200+ applications to AWS with zero downtime, implementing microservices architecture and DevOps pipelines.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop&crop=center",
    tags: ["AWS", "Docker", "Kubernetes", "Terraform", "Jenkins", "Microservices"],
    category: "Cloud Services",
    duration: "12 months",
    teamSize: "15 engineers",
    impact: "60% infrastructure cost reduction",
    highlights: [
      "Declarative multi-region Terraform cloud blueprints",
      "Zero-downtime blue/green automated deployment routes",
      "Kubernetes worker autoscaling clusters on AWS EKS",
      "Monolith refactored into lightweight Docker microservices",
    ],
    clientType: "Logistics Enterprise",
    accentFrom: "from-emerald-900",
    accentTo: "to-emerald-700",
    badgeBg: "bg-emerald-50",
    badgeText: "text-emerald-800",
    badgeBorder: "border-emerald-200",
    impactBg: "bg-emerald-50",
    impactText: "text-emerald-900",
    impactBorder: "border-emerald-100",
    impactIcon: "text-emerald-800",
  },
  {
    title: "RestaurantOS Management Suite",
    description: "Complete restaurant management ecosystem for a 30-location chain. Includes POS system, inventory management, staff scheduling, and a loyalty program with mobile ordering.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=500&fit=crop&crop=center",
    tags: ["Vue.js", "Laravel", "MySQL", "Square API", "PWA"],
    category: "Web Development",
    duration: "7 months",
    teamSize: "10 developers",
    impact: "35% increase in operational efficiency",
    highlights: [
      "Square API POS terminal integration for rapid checkouts",
      "Progressive Web App enabling QR-code mobile ordering",
      "Automated supplier restocking alerts via MySQL triggers",
      "Staff shift scheduler with SMS alert integration",
    ],
    clientType: "Hospitality Chain",
    accentFrom: "from-orange-900",
    accentTo: "to-orange-700",
    badgeBg: "bg-orange-50",
    badgeText: "text-orange-800",
    badgeBorder: "border-orange-200",
    impactBg: "bg-orange-50",
    impactText: "text-orange-900",
    impactBorder: "border-orange-100",
    impactIcon: "text-orange-800",
  },
  {
    title: "FitTracker Pro Wellness App",
    description: "Comprehensive fitness and wellness platform with 100K+ active users. Workout tracking, nutrition planning, social challenges, and integration with 15+ wearable devices.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=500&fit=crop&crop=center",
    tags: ["Flutter", "Firebase", "HealthKit", "Google Fit", "Machine Learning"],
    category: "Mobile App",
    duration: "9 months",
    teamSize: "8 developers",
    impact: "4.8★ App Store Rating",
    highlights: [
      "iOS HealthKit & Android Google Fit step-tracking integration",
      "Real-time social competition widgets via Firebase",
      "Personalized ML-generated fitness routines",
      "Single Flutter codebase for both Android & iOS",
    ],
    clientType: "Health & Fitness Startup",
    accentFrom: "from-pink-900",
    accentTo: "to-pink-700",
    badgeBg: "bg-pink-50",
    badgeText: "text-pink-800",
    badgeBorder: "border-pink-200",
    impactBg: "bg-pink-50",
    impactText: "text-pink-900",
    impactBorder: "border-pink-100",
    impactIcon: "text-pink-800",
  },
]

const categories = ["All", "Web Development", "Mobile App", "AI & ML", "Cloud Services"]

export function PortfolioGrid() {
  const [selectedCategory, setSelectedCategory] = React.useState("All")
  const [searchQuery, setSearchQuery] = React.useState("")

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === "All" || project.category === selectedCategory
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  return (
    <section className="py-24 bg-white" id="portfolio-grid">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Filters + Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-14 border-b border-slate-100 pb-10">
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <Button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200 ${
                  selectedCategory === cat
                    ? "bg-red-900 hover:bg-red-800 text-white shadow-md"
                    : "bg-white border border-slate-200 text-slate-600 hover:border-red-800 hover:text-red-900 shadow-none"
                }`}
              >
                {cat}
              </Button>
            ))}
          </div>
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <Input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="pl-11 rounded-full border-2 border-slate-200 hover:border-slate-300 focus:border-red-800 focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 h-11 text-sm bg-white"
            />
          </div>
        </div>

        {/* No results */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-20 border-2 border-dashed border-slate-100 rounded-3xl">
            <p className="text-slate-400 text-lg">No projects match your criteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.title}
                className="rounded-2xl border-2 border-slate-100 bg-white overflow-hidden hover:border-slate-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                {/* Image */}
                <div className="relative h-36 overflow-hidden bg-slate-100 group flex-shrink-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${project.badgeBg} ${project.badgeText} ${project.badgeBorder} bg-white/90 backdrop-blur-sm`}>
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Card body */}
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-base font-black text-slate-900 leading-snug mb-1.5">{project.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed mb-4 line-clamp-2">{project.description}</p>

                  {/* Tags — max 4 shown */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span key={tag} className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-500">
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-400">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Meta */}
                  <div className="flex items-center gap-4 text-xs text-slate-400 mb-4 pb-4 border-b border-slate-100">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>{project.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-3.5 w-3.5" />
                      <span>{project.teamSize}</span>
                    </div>
                  </div>

                  {/* Impact bar */}
                  <div className={`mt-auto flex items-center justify-between p-3 rounded-xl border ${project.impactBorder} ${project.impactBg}`}>
                    <div className="flex items-center gap-2">
                      <TrendingUp className={`h-4 w-4 flex-shrink-0 ${project.impactIcon}`} />
                      <p className={`text-xs font-black ${project.impactText}`}>{project.impact}</p>
                    </div>
                    <a
                      href="#"
                      className={`inline-flex items-center gap-0.5 text-[10px] font-bold uppercase tracking-wider hover:underline ${project.impactText}`}
                    >
                      Soon
                      <ArrowUpRight className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
