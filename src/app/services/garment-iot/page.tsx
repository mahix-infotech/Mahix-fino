import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shirt, CheckCircle, Cpu, BarChart3, Layers, Radio, ArrowUpRight, Zap, ShieldCheck, RefreshCw } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/sections/navigation/navigation"
import { Footer } from "@/components/sections/footer/footer"
import { TechStackGrid } from "@/components/sections/tech-stack/tech-stack-grid"
import type { Metadata } from "next"
import { PricingSection, PricingPlan } from "@/components/sections/pricing/pricing-section"
import { IotShowcaseCard } from "@/components/ui/iot-showcase-card"

export const metadata: Metadata = {
  title: "Garment IoT Solutions - Smart Textile & Production Tracking | Mahix InfoTech",
  description: "End-to-end Garment IoT solutions for textile manufacturing, RFID garment tracking, line balancing, real-time piece-rate monitoring, and apparel factory automation.",
  keywords: "Garment IoT, Textile IoT, Apparel Factory Automation, RFID Garment Tracking, Piece Rate Monitoring, Line Balancing IoT, Smart Textile Manufacturing",
}

const features = [
  {
    icon: Shirt,
    title: "RFID Garment Tracking",
    description: "Track every piece of garment across cutting, stitching, washing, and packing in real time.",
    borderColor: "border-t-blue-500",
    hoverColor: "hover:border-blue-500/30"
  },
  {
    icon: BarChart3,
    title: "Real-time Line Balancing",
    description: "Automated bottleneck detection on production lines to optimize operator efficiency.",
    borderColor: "border-t-emerald-500",
    hoverColor: "hover:border-emerald-500/30"
  },
  {
    icon: Cpu,
    title: "Smart Sewing Machine Sensors",
    description: "IoT sensors attached to machines measuring stitch counts, active machine uptime, and needle speed.",
    borderColor: "border-t-purple-500",
    hoverColor: "hover:border-purple-500/30"
  },
  {
    icon: RefreshCw,
    title: "Piece-Rate Automated Payroll",
    description: "Direct sync between RFID work bundle scans and worker payroll calculation without manual log sheets.",
    borderColor: "border-t-orange-500",
    hoverColor: "hover:border-orange-500/30"
  }
]

const servicesList = [
  {
    title: "Bundle Tracking System",
    description: "RFID & Barcode tag scanning at each workstation to log progress instantly.",
    features: ["RFID Smart Tags", "Handheld & Overhead Readers", "WIP (Work-in-Progress) Dashboard", "Defect Tagging"],
    borderColor: "border-t-blue-500",
    hoverColor: "hover:border-blue-500/30"
  },
  {
    title: "Apparel Factory Floor Display (ANDON)",
    description: "Digital screens displaying live hourly target vs. actual outputs per production line.",
    features: ["Live TV Dashboards", "Audible Operator Alerts", "Quality Rejection Counter", "Efficiency KPI Metrics"],
    borderColor: "border-t-emerald-500",
    hoverColor: "hover:border-emerald-500/30"
  },
  {
    title: "Fabric Roll & Inventory IoT",
    description: "Automated stock tracking, fabric usage optimization, and shade band management.",
    features: ["Fabric Roll Barcoding", "GSM & Weight Sensors", "Cutting Room Analytics", "Waste Reduction Engine"],
    borderColor: "border-t-purple-500",
    hoverColor: "hover:border-purple-500/30"
  }
]

const garmentPricing: PricingPlan[] = [
  {
    name: "Starter Factory",
    price: "49,999",
    period: "/line /one-time",
    tagline: "Ideal for small stitching units wanting RFID bundle tracking.",
    features: [
      "Up to 20 IoT Machine Nodes",
      "RFID Bundle Tracking Software",
      "Live Production Dashboard",
      "Piece-rate output reports",
      "1 month onsite setup & training",
    ],
    cta: "Setup Starter Unit",
  },
  {
    name: "Smart Factory Pro",
    price: "1,49,999",
    period: "/production floor",
    tagline: "Complete IoT digitisation for medium-sized garment factories.",
    features: [
      "Up to 100 Smart Sewing Sensors",
      "Automated Line Balancing Engine",
      "Real-time ANDON Factory Display",
      "Quality Inspection Tablets Integration",
      "Payroll & ERP Sync API",
      "3 months dedicated support",
    ],
    highlighted: true,
    gradient: "from-blue-600 to-indigo-700",
    cta: "Request Demo Floor",
  },
  {
    name: "Enterprise Apparel",
    price: "3,99,999+",
    period: "/multi-plant",
    tagline: "Multi-factory IoT cloud deployment for major apparel exporters.",
    features: [
      "Unlimited Sewing Machine Nodes",
      "Multi-Plant Central Monitoring Cloud",
      "AI Predictive Maintenance & Downtime Alerts",
      "Custom ERP/SAP Integration",
      "SLA 99.9% Uptime Guarantee",
      "24/7 Priority Support & Onsite Engineer",
    ],
    cta: "Contact Enterprise Team",
  }
]

const technologies = [
  "RFID Readers", "UHF Smart Tags", "MQTT Protocol", "Modbus RS485", "AWS IoT Core", "Node-RED", "Next.js", "PostgreSQL"
]

export default function GarmentIotPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <Navigation />
      
      <main className="pt-20">
        {/* ══ HERO SECTION ══ */}
        <section className="relative overflow-hidden bg-slate-900 text-white py-24 lg:py-32">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-900 to-black" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
            <Badge className="bg-blue-600/20 text-blue-400 border-blue-500/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest mb-6">
              Garment Industry 4.0
            </Badge>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight max-w-4xl leading-tight">
              Smart <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300">Garment IoT</span> Solution
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed">
              Transform your garment factory into an intelligent digitised plant. Track piece rates, eliminate production bottlenecks, and boost overall plant efficiency by up to 35%.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-lg hover:scale-105 transition-all">
                <Link href="/contact">Book Floor Demo <ArrowUpRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800 rounded-xl">
                <Link href="#pricing">Explore Pricing</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* ══ LIVE DEMO & SHOWCASE CARD ══ */}
        <section className="py-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 mb-3 px-3 py-1 text-xs uppercase font-extrabold tracking-widest">
                Interactive Portal &amp; Documentation
              </Badge>
              <h2 className="text-3xl font-black text-slate-900 dark:text-white">Live Online Demo &amp; Brochure</h2>
              <p className="mt-2 text-slate-600 dark:text-slate-400">Try our live IoT portal demo or download the complete system PDF brochure.</p>
            </div>

            <div className="flex justify-center">
              <IotShowcaseCard
                title="Garment IOT Solution"
                description="Complete Garments Protection System and Real Time Data."
                iconName="shirt"
                pdfUrl="/Assets/PDF/g1.pdf"
                demoUrl="http://103.125.154.118:8080/skiot/"
              />
            </div>
          </div>
        </section>

        {/* ══ FEATURES GRID ══ */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-black text-slate-900 dark:text-white">Why Digitise Garment Production?</h2>
            <p className="mt-3 text-slate-600 dark:text-slate-400">Eliminate manual tracking sheets and gain total visibility over every stitch.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => {
              const Icon = f.icon
              return (
                <Card key={i} className={`border-t-4 ${f.borderColor} ${f.hoverColor} transition-all duration-300 hover:shadow-xl`}>
                  <CardHeader>
                    <Icon className="h-8 w-8 text-blue-600 mb-2" />
                    <CardTitle className="text-lg font-bold">{f.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{f.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* ══ SERVICES DETAILS ══ */}
        <section className="py-16 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-black text-slate-900 dark:text-white">End-to-End Module Offerings</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {servicesList.map((s, i) => (
                <Card key={i} className={`border-t-4 ${s.borderColor} ${s.hoverColor} hover:shadow-lg`}>
                  <CardHeader>
                    <CardTitle className="text-xl font-bold">{s.title}</CardTitle>
                    <CardDescription>{s.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mt-2">
                      {s.features.map((feat, idx) => (
                        <li key={idx} className="flex items-center text-sm text-slate-700 dark:text-slate-300">
                          <CheckCircle className="h-4 w-4 text-emerald-500 mr-2 flex-shrink-0" />
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ══ PRICING SECTION ══ */}
        <div id="pricing">
          <PricingSection 
            plans={garmentPricing}
            title="Garment IoT Packages"
            subtitle="Scalable pricing tailored for single-line units to multi-factory textile setups."
          />
        </div>

        {/* ══ TECH STACK ══ */}
        <TechStackGrid 
          technologies={technologies}
          title="Hardware & IoT Stack"
          subtitle="Industrial-grade RFID readers, microcontrollers, and cloud telemetry protocols."
        />
      </main>

      <Footer />
    </div>
  )
}
