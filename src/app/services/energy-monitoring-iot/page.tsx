import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Zap, CheckCircle, BarChart2, Cpu, TrendingDown, ArrowUpRight, Gauge, ShieldCheck } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/sections/navigation/navigation"
import { Footer } from "@/components/sections/footer/footer"
import { TechStackGrid } from "@/components/sections/tech-stack/tech-stack-grid"
import type { Metadata } from "next"
import { PricingSection, PricingPlan } from "@/components/sections/pricing/pricing-section"
import { IotShowcaseCard } from "@/components/ui/iot-showcase-card"

export const metadata: Metadata = {
  title: "Energy Monitoring IoT Systems - Smart Power Analytics | Mahix InfoTech",
  description: "Real-time Energy Monitoring IoT solutions for factories, commercial buildings, and solar plants. Sub-metering, power factor tracking, peak load management, and energy cost optimization.",
  keywords: "Energy Monitoring IoT, Smart Power Meters, Sub-metering IoT, Power Factor Optimization, Maximum Demand Controller, Energy Audit Software",
}

const features = [
  {
    icon: Zap,
    title: "Real-time Sub-Metering",
    description: "Track voltage, current, power factor (PF), kW, kWh, and harmonics per machine line.",
    borderColor: "border-t-amber-500",
    hoverColor: "hover:border-amber-500/30"
  },
  {
    icon: TrendingDown,
    title: "Maximum Demand (MD) Control",
    description: "Prevent utility penalty charges with automated load shedding when approaching peak limits.",
    borderColor: "border-t-emerald-500",
    hoverColor: "hover:border-emerald-500/30"
  },
  {
    icon: BarChart2,
    title: "Specific Energy Consumption (SEC)",
    description: "Correlate units of electricity consumed per unit of production output.",
    borderColor: "border-t-blue-500",
    hoverColor: "hover:border-blue-500/30"
  },
  {
    icon: Gauge,
    title: "Power Quality Analytics",
    description: "Detect voltage sags, harmonics (THD), phase unbalance, and transformer heat dissipation.",
    borderColor: "border-t-purple-500",
    hoverColor: "hover:border-purple-500/30"
  }
]

const servicesList = [
  {
    title: "Factory Power Sub-Metering",
    description: "CT sensor installation on feeder panels, individual high-power motors, and HVAC systems.",
    features: ["Multi-channel Energy Meters", "RS485 Modbus to IoT Gateway", "Custom Energy Cost Center Dashboards", "Shift-wise Consumption Reports"],
    borderColor: "border-t-amber-500",
    hoverColor: "hover:border-amber-500/30"
  },
  {
    title: "Commercial Building BMS Integration",
    description: "Energy efficiency management for shopping malls, IT parks, and hospital chains.",
    features: ["Tenant Billing & Sub-meters", "Solar vs Grid Power Ratio Tracking", "HVAC & Chiller Energy Optimiser", "Carbon Footprint Analytics"],
    borderColor: "border-t-blue-500",
    hoverColor: "hover:border-blue-500/30"
  },
  {
    title: "DG Set & Diesel Consumption IoT",
    description: "Monitor generator fuel levels vs electricity generated to prevent fuel theft & inefficiency.",
    features: ["Digital Fuel Level Sensors", "KWh Generated per Liter (KWh/L)", "DG On/Off Auto-log", "Maintenance Reminder System"],
    borderColor: "border-t-emerald-500",
    hoverColor: "hover:border-emerald-500/30"
  }
]

const energyPricing: PricingPlan[] = [
  {
    name: "Factory Starter",
    price: "39,999",
    period: "/panel installation",
    tagline: "Essential sub-metering for single main LT panels.",
    features: [
      "Up to 8 Multifunction Smart Meters",
      "IoT Modbus Gateway (WiFi/4G)",
      "Real-time Dashboard & Mobile App",
      "Power Factor & MD Alert Engine",
      "Daily / Weekly Email PDF Reports",
    ],
    cta: "Start Power Audit",
  },
  {
    name: "Energy Pro Plant",
    price: "1,19,999",
    period: "/facility setup",
    tagline: "Complete factory energy audit & maximum demand automation.",
    features: [
      "Up to 32 Smart Energy Nodes",
      "Maximum Demand (MD) Load Shedding Relay",
      "DG Fuel Level & SEC Analytics",
      "Harmonic (THD) Analysis Module",
      "Automated Shift-wise Energy Billing",
      "1 Year Cloud Telemetry Subscription",
    ],
    highlighted: true,
    gradient: "from-amber-600 to-yellow-600",
    cta: "Cut Energy Costs",
  },
  {
    name: "Enterprise Energy Cloud",
    price: "3,49,999+",
    period: "/multi-site enterprise",
    tagline: "Multi-plant energy intelligence platform for major industrial conglomerates.",
    features: [
      "Unlimited Energy Sub-meters & Gateways",
      "AI Energy Anomaly & Waste Prediction",
      "Solar + Grid + Generator Hybrid Telemetry",
      "Custom ERP & SCADA Integration",
      "ISO 50001 Energy Compliance Manager",
      "Dedicated Onsite Electrical IoT Specialist",
    ],
    cta: "Contact Enterprise Engineers",
  }
]

const technologies = [
  "Modbus RTU", "CT Current Transformers", "RS485", "Energy Metering ICs", "TimescaleDB", "Node.js", "Grafana", "MQTT"
]

export default function EnergyMonitoringIotPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <Navigation />
      
      <main className="pt-20">
        {/* ══ HERO SECTION ══ */}
        <section className="relative overflow-hidden bg-slate-900 text-white py-24 lg:py-32">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-900/40 via-slate-900 to-black" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
            <Badge className="bg-amber-600/20 text-amber-400 border-amber-500/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest mb-6">
              Energy Intelligence & Sustainability
            </Badge>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight max-w-4xl leading-tight">
              Energy Monitoring <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">IoT System</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed">
              Slash electricity bills by up to 25%. Monitor real-time power consumption, optimize Power Factor, and eliminate maximum demand penalty charges.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700 text-white rounded-xl shadow-lg hover:scale-105 transition-all">
                <Link href="/contact">Schedule Energy Audit <ArrowUpRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800 rounded-xl">
                <Link href="#pricing">View Pricing Plans</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* ══ LIVE DEMO & SHOWCASE CARD ══ */}
        <section className="py-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <Badge className="bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 mb-3 px-3 py-1 text-xs uppercase font-extrabold tracking-widest">
                Interactive Portal &amp; Documentation
              </Badge>
              <h2 className="text-3xl font-black text-slate-900 dark:text-white">Live Power Telemetry &amp; System Docs</h2>
              <p className="mt-2 text-slate-600 dark:text-slate-400">Try our live energy monitoring IoT portal or download the complete system brochure.</p>
            </div>

            <div className="flex justify-center">
              <IotShowcaseCard
                title="Energy Monitoring IoT"
                description="Complete Power & Sub-metering Management System."
                iconName="zap"
                pdfUrl="/Assets/PDF/eb.pdf"
                demoUrl="https://dakshiyatechnology.in/demo/eb.html"
              />
            </div>
          </div>
        </section>

        {/* ══ FEATURES GRID ══ */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-black text-slate-900 dark:text-white">Smart Power Management</h2>
            <p className="mt-3 text-slate-600 dark:text-slate-400">Granular visibility into electricity, fuel, and renewable power usage.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => {
              const Icon = f.icon
              return (
                <Card key={i} className={`border-t-4 ${f.borderColor} ${f.hoverColor} transition-all duration-300 hover:shadow-xl`}>
                  <CardHeader>
                    <Icon className="h-8 w-8 text-amber-500 mb-2" />
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
              <h2 className="text-3xl font-black text-slate-900 dark:text-white">Sub-Metering Capabilities</h2>
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
            plans={energyPricing}
            title="Energy IoT Packages"
            subtitle="Transparent packages with quick payback periods through immediate electricity savings."
          />
        </div>

        {/* ══ TECH STACK ══ */}
        <TechStackGrid 
          technologies={technologies}
          title="Energy Measurement Architecture"
          subtitle="Modbus sub-meters, high-precision CT transformers, and real-time cloud energy engines."
        />
      </main>

      <Footer />
    </div>
  )
}
