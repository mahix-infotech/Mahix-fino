import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Flame, CheckCircle, Gauge, Bell, ShieldAlert, Radio, ArrowUpRight, Activity } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/sections/navigation/navigation"
import { Footer } from "@/components/sections/footer/footer"
import { TechStackGrid } from "@/components/sections/tech-stack/tech-stack-grid"
import type { Metadata } from "next"
import { PricingSection, PricingPlan } from "@/components/sections/pricing/pricing-section"
import { IotShowcaseCard } from "@/components/ui/iot-showcase-card"

export const metadata: Metadata = {
  title: "Gas IoT Monitoring Systems - Leak Detection & Smart Metering | Mahix InfoTech",
  description: "Smart Gas IoT Systems for industrial, commercial, and residential applications. Real-time gas leak detection, automated shut-off valves, cylinder level monitoring, and smart telemetry.",
  keywords: "Gas IoT, Gas Leak Detection, LPG Cylinder Monitoring, Industrial Gas Sensors, Smart Gas Meters, Solenoid Shut-off Valve IoT",
}

const features = [
  {
    icon: Flame,
    title: "Gas Leakage Early Warning",
    description: "Multi-gas sensors (LPG, PNG, Methane, CO2) with sub-second threshold leak detection.",
    borderColor: "border-t-orange-500",
    hoverColor: "hover:border-orange-500/30"
  },
  {
    icon: ShieldAlert,
    title: "Automated Emergency Shut-Off",
    description: "IoT solenoid valve integration that automatically cuts off gas supply upon detecting leaks.",
    borderColor: "border-t-red-500",
    hoverColor: "hover:border-red-500/30"
  },
  {
    icon: Gauge,
    title: "Cylinder & Tank Pressure Telemetry",
    description: "Continuous hydrostatic pressure & weight tracking with automated reorder triggers.",
    borderColor: "border-t-blue-500",
    hoverColor: "hover:border-blue-500/30"
  },
  {
    icon: Bell,
    title: "Multi-channel Instant Alerts",
    description: "Instant SMS, WhatsApp, Siren, and Mobile Push Notifications sent to safety managers.",
    borderColor: "border-t-emerald-500",
    hoverColor: "hover:border-emerald-500/30"
  }
]

const servicesList = [
  {
    title: "Industrial & Factory Gas Safety",
    description: "Explosion-proof ATEX certified IoT sensors for chemical and processing plants.",
    features: ["ATEX / IECEx Certified Sensors", "Centralised Control Panel Sync", "24/7 Remote Gas Audit Log", "Automatic Exhaust Fan Activation"],
    borderColor: "border-t-orange-500",
    hoverColor: "hover:border-orange-500/30"
  },
  {
    title: "Commercial Kitchen & Restaurant IoT",
    description: "Gas monitoring for commercial kitchens, hotels, and food processing facilities.",
    features: ["Multi-Burner Pipeline Monitoring", "LPG Cylinder Bank Auto-Changer", "Fire Safety Compliance Reporting", "Mobile Safety Dashboard"],
    borderColor: "border-t-blue-500",
    hoverColor: "hover:border-blue-500/30"
  },
  {
    title: "Smart PNG Metering & Billing",
    description: "Cellular/LoRaWAN enabled smart gas meters for gated communities & apartments.",
    features: ["Prepaid / Postpaid Gas Billing", "Remote Valve Control", "Tamper Detection", "Daily Consumption Analytics"],
    borderColor: "border-t-emerald-500",
    hoverColor: "hover:border-emerald-500/30"
  }
]

const gasPricing: PricingPlan[] = [
  {
    name: "Commercial Kitchen",
    price: "34,999",
    period: "/location",
    tagline: "Essential gas safety and leak prevention for restaurants & hotels.",
    features: [
      "4 Multi-Gas Detector Nodes",
      "Automated Solenoid Cut-off Valve",
      "Local Alarm Siren Unit",
      "SMS & WhatsApp Safety Alerts",
      "Mobile App Monitoring",
    ],
    cta: "Protect Kitchen",
  },
  {
    name: "Industrial Safety Hub",
    price: "99,999",
    period: "/plant unit",
    tagline: "Comprehensive hazardous gas monitoring for factories & warehouses.",
    features: [
      "Up to 16 ATEX Explosion-Proof Sensors",
      "Central Touchscreen Safety Panel",
      "Exhaust Fan Auto-Relay Controller",
      "Gas Consumption Analytics Engine",
      "Cloud Telemetry & Audit Logs",
      "3 Years Sensor Warranty",
    ],
    highlighted: true,
    gradient: "from-orange-600 to-amber-700",
    cta: "Get Factory Audit",
  },
  {
    name: "Smart Gas Network",
    price: "2,99,999+",
    period: "/custom network",
    tagline: "Utility-scale smart gas metering for residential complexes & industrial parks.",
    features: [
      "LoRaWAN / NB-IoT Smart Gas Meters",
      "Prepaid / Postpaid Utility Billing Software",
      "Remote Pipe Valve Cut-off Engine",
      "Custom ERP & SCADA Integration",
      "Dedicated IoT Cloud Infrastructure",
      "24/7 Emergency Support SLA",
    ],
    cta: "Contact Gas Utility Team",
  }
]

const technologies = [
  "ATEX Gas Sensors", "Solenoid Relays", "LoRaWAN", "NB-IoT", "MQTT", "ESP32 / STM32", "PostgreSQL", "Grafana"
]

export default function GasIotPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <Navigation />
      
      <main className="pt-20">
        {/* ══ HERO SECTION ══ */}
        <section className="relative overflow-hidden bg-slate-900 text-white py-24 lg:py-32">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-900/40 via-slate-900 to-black" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
            <Badge className="bg-orange-600/20 text-orange-400 border-orange-500/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest mb-6">
              Industrial Safety & Telemetry
            </Badge>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight max-w-4xl leading-tight">
              Smart <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">Gas IoT</span> System
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed">
              Protect lives, prevent hazardous leaks, and automate gas consumption tracking with real-time IoT sensors and auto-shutoff safety valves.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700 text-white rounded-xl shadow-lg hover:scale-105 transition-all">
                <Link href="/contact">Get Safety Quote <ArrowUpRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800 rounded-xl">
                <Link href="#pricing">View Gas Packages</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* ══ LIVE DEMO & SHOWCASE CARD ══ */}
        <section className="py-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <Badge className="bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400 mb-3 px-3 py-1 text-xs uppercase font-extrabold tracking-widest">
                Interactive Portal &amp; Documentation
              </Badge>
              <h2 className="text-3xl font-black text-slate-900 dark:text-white">Live Gas Telemetry &amp; System Docs</h2>
              <p className="mt-2 text-slate-600 dark:text-slate-400">Experience our gas safety management cloud or review the technical documentation.</p>
            </div>

            <div className="flex justify-center">
              <IotShowcaseCard
                title="Gas IOT System"
                description="Complete Real-time Gas Leak Prevention & Monitoring System."
                iconName="flame"
                pdfUrl="/Assets/PDF/gas.pdf"
                demoUrl="https://iotsvcgpl.com/dakshiyatechnology/"
              />
            </div>
          </div>
        </section>

        {/* ══ FEATURES GRID ══ */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-black text-slate-900 dark:text-white">Continuous 24/7 Gas Security</h2>
            <p className="mt-3 text-slate-600 dark:text-slate-400">Intelligent sensors connected to instant alert networks and auto-shutoff hardware.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => {
              const Icon = f.icon
              return (
                <Card key={i} className={`border-t-4 ${f.borderColor} ${f.hoverColor} transition-all duration-300 hover:shadow-xl`}>
                  <CardHeader>
                    <Icon className="h-8 w-8 text-orange-500 mb-2" />
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
              <h2 className="text-3xl font-black text-slate-900 dark:text-white">Gas Monitoring Applications</h2>
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
            plans={gasPricing}
            title="Gas IoT Packages"
            subtitle="Turnkey safety hardware and telemetry software packages for commercial & industrial facilities."
          />
        </div>

        {/* ══ TECH STACK ══ */}
        <TechStackGrid 
          technologies={technologies}
          title="Gas Sensors & Communication Stack"
          subtitle="Explosion-proof hardware, wireless LoRaWAN gateways, and cloud telemetry."
        />
      </main>

      <Footer />
    </div>
  )
}
