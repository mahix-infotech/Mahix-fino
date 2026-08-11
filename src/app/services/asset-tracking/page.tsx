import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Radio, CheckCircle, Package, ShieldCheck, MapPin, Cpu, ArrowUpRight, BarChart3 } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/sections/navigation/navigation"
import { Footer } from "@/components/sections/footer/footer"
import { TechStackGrid } from "@/components/sections/tech-stack/tech-stack-grid"
import type { Metadata } from "next"
import { PricingSection, PricingPlan } from "@/components/sections/pricing/pricing-section"
import { IotShowcaseCard } from "@/components/ui/iot-showcase-card"

export const metadata: Metadata = {
  title: "Asset Tracking IoT System - BLE, RFID & GPS Location | Mahix InfoTech",
  description: "Enterprise IoT Asset Tracking Systems using Bluetooth Low Energy (BLE) Beacons, RFID Tags, and GPS. Real-time indoor location tracking, tool tracking, and equipment audit.",
  keywords: "Asset Tracking IoT, BLE Beacons, RFID Asset Audit, Indoor Location System, Tool Tracking IoT, Warehouse Inventory IoT, Hospital Equipment Tracker",
}

const features = [
  {
    icon: Radio,
    title: "Indoor BLE Beacon Positioning",
    description: "Sub-meter accuracy indoor positioning using Bluetooth Low Energy (BLE) mesh anchors.",
    borderColor: "border-t-purple-500",
    hoverColor: "hover:border-purple-500/30"
  },
  {
    icon: Package,
    title: "Long-range RFID Asset Scans",
    description: "Perform 500+ item stock audits in seconds using fixed portal overhead readers.",
    borderColor: "border-t-blue-500",
    hoverColor: "hover:border-blue-500/30"
  },
  {
    icon: ShieldCheck,
    title: "Anti-Theft Geofence Alarms",
    description: "Instant perimeter alert when high-value tools or medical equipment cross facility gates.",
    borderColor: "border-t-red-500",
    hoverColor: "hover:border-red-500/30"
  },
  {
    icon: BarChart3,
    title: "Asset Lifecycle & Depreciation",
    description: "Log maintenance history, calibration due dates, and depreciation values automatically.",
    borderColor: "border-t-emerald-500",
    hoverColor: "hover:border-emerald-500/30"
  }
]

const servicesList = [
  {
    title: "Healthcare & Hospital Equipment Tracking",
    description: "Locate wheelchairs, IV pumps, and ventilators instantly across hospital floors.",
    features: ["Floor Plan Live Heatmap", "Equipment Search & Navigation", "Sterilization Lifecycle Log", "Emergency Lost Equipment Alarm"],
    borderColor: "border-t-purple-500",
    hoverColor: "hover:border-purple-500/30"
  },
  {
    title: "Construction & Industrial Tool Tracking",
    description: "Prevent tool loss, theft, and unauthorized usage across job sites.",
    features: ["Rugged Weatherproof BLE Tags", "Jobsite Gate Scanners", "Check-in / Check-out Mobile App", "Operator Responsibility Log"],
    borderColor: "border-t-blue-500",
    hoverColor: "hover:border-blue-500/30"
  },
  {
    title: "IT Equipment & Data Center Asset Audit",
    description: "Server rack asset monitoring, audit automation, and chain-of-custody tracking.",
    features: ["Rack-level RFID Sensors", "Automated Asset Verification", "Tamper Evident Security Tags", "ERP & ServiceNow Integration"],
    borderColor: "border-t-emerald-500",
    hoverColor: "hover:border-emerald-500/30"
  }
]

const assetPricing: PricingPlan[] = [
  {
    name: "Starter Tag Pack",
    price: "29,999",
    period: "/location setup",
    tagline: "Ideal for small offices or tool cribs managing up to 100 assets.",
    features: [
      "100 Weatherproof BLE/RFID Asset Tags",
      "2 Gateway Reader Anchors",
      "Asset Audit Mobile App",
      "Check-in / Check-out Logging",
      "Email Export & Excel Inventory Sync",
    ],
    cta: "Tag First 100 Assets",
  },
  {
    name: "Facility Asset Pro",
    price: "89,999",
    period: "/building floor",
    tagline: "Complete indoor tracking solution for hospitals, warehouses & plants.",
    features: [
      "500 Industrial BLE Beacon Tags",
      "8 Overhead Gateway Anchors",
      "Live Floor Plan Map Dashboard",
      "Geofence Anti-theft Siren Relays",
      "Automated Maintenance Scheduler",
      "1 Year Cloud Platform & Support",
    ],
    highlighted: true,
    gradient: "from-purple-600 to-indigo-700",
    cta: "Request Facility Audit",
  },
  {
    name: "Enterprise Global Asset",
    price: "2,49,999+",
    period: "/multi-site setup",
    tagline: "Global GPS + BLE hybrid asset tracking for supply chain & enterprise.",
    features: [
      "Unlimited RFID & Cellular GPS/BLE Tags",
      "Multi-Warehouse Central Asset Platform",
      "Custom ERP / SAP Integration API",
      "Dedicated Asset Management Cloud",
      "Onsite Deployment Engineers",
      "SLA 99.9% System Uptime Guarantee",
    ],
    cta: "Contact Enterprise Specialist",
  }
]

const technologies = [
  "BLE 5.0 Beacons", "Ultra-Wideband (UWB)", "UHF RFID Tags", "LoRaWAN Gateways", "Indoor Location Engine", "MQTT", "React", "PostgreSQL"
]

export default function AssetTrackingPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <Navigation />
      
      <main className="pt-20">
        {/* ══ HERO SECTION ══ */}
        <section className="relative overflow-hidden bg-slate-900 text-white py-24 lg:py-32">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-900/40 via-slate-900 to-black" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
            <Badge className="bg-purple-600/20 text-purple-400 border-purple-500/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest mb-6">
              Indoor & Outdoor Asset Telemetry
            </Badge>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight max-w-4xl leading-tight">
              IoT <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-300">Asset Tracking</span> System
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed">
              Never lose valuable tools, machinery, or hospital equipment again. Locate high-value assets in real time on interactive floor plans.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700 text-white rounded-xl shadow-lg hover:scale-105 transition-all">
                <Link href="/contact">Book Asset Audit <ArrowUpRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800 rounded-xl">
                <Link href="#pricing">Explore Packages</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* ══ LIVE DEMO & SHOWCASE CARD ══ */}
        <section className="py-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <Badge className="bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400 mb-3 px-3 py-1 text-xs uppercase font-extrabold tracking-widest">
                Interactive Portal &amp; Documentation
              </Badge>
              <h2 className="text-3xl font-black text-slate-900 dark:text-white">Live Asset Telemetry &amp; System Docs</h2>
              <p className="mt-2 text-slate-600 dark:text-slate-400">Experience our indoor/outdoor asset location cloud or download the technical system brochure.</p>
            </div>

            <div className="flex justify-center">
              <IotShowcaseCard
                title="Asset Tracking System"
                description="Complete Real-time Indoor & Outdoor Asset Location System."
                iconName="radio"
                pdfUrl="/Assets/PDF/ble.pdf"
                demoUrl="https://dakshiyatechnology.in/demo/#"
              />
            </div>
          </div>
        </section>

        {/* ══ FEATURES GRID ══ */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-black text-slate-900 dark:text-white">Smart Inventory & Location Control</h2>
            <p className="mt-3 text-slate-600 dark:text-slate-400">Streamline physical audits and prevent costly equipment loss.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => {
              const Icon = f.icon
              return (
                <Card key={i} className={`border-t-4 ${f.borderColor} ${f.hoverColor} transition-all duration-300 hover:shadow-xl`}>
                  <CardHeader>
                    <Icon className="h-8 w-8 text-purple-500 mb-2" />
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
              <h2 className="text-3xl font-black text-slate-900 dark:text-white">Industry Applications</h2>
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
            plans={assetPricing}
            title="Asset Tracking Packages"
            subtitle="Flexible RFID and BLE hardware packages tailored to your facility size."
          />
        </div>

        {/* ══ TECH STACK ══ */}
        <TechStackGrid 
          technologies={technologies}
          title="Indoor Positioning & Hardware Stack"
          subtitle="BLE 5.0 mesh, active RFID tags, and real-time floor plan engines."
        />
      </main>

      <Footer />
    </div>
  )
}
