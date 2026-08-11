import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation, CheckCircle, MapPin, ShieldAlert, Route, Fuel, ArrowUpRight, Smartphone } from "lucide-react"
import Link from "next/link"
import { Navigation as HeaderNav } from "@/components/sections/navigation/navigation"
import { Footer } from "@/components/sections/footer/footer"
import { TechStackGrid } from "@/components/sections/tech-stack/tech-stack-grid"
import type { Metadata } from "next"
import { PricingSection, PricingPlan } from "@/components/sections/pricing/pricing-section"
import { IotShowcaseCard } from "@/components/ui/iot-showcase-card"

export const metadata: Metadata = {
  title: "GPS Vehicle Tracking IoT System - Real-time Fleet Telematics | Mahix InfoTech",
  description: "Advanced GPS Vehicle Tracking Solutions for commercial fleets, logistics, delivery trucks, and school buses. Geofencing, live tracking, fuel monitoring, engine immobiliser, and driver behavior analytics.",
  keywords: "GPS Vehicle Tracking, Fleet Telematics, Fuel Theft Protection, Live GPS Tracking, Geofence Alerts, Engine Immobilizer IoT, Vehicle Fleet Management",
}

const features = [
  {
    icon: MapPin,
    title: "Real-time Live Location",
    description: "Sub-second GPS & GLONASS positioning with 99.9% map precision and replay routes.",
    borderColor: "border-t-emerald-500",
    hoverColor: "hover:border-emerald-500/30"
  },
  {
    icon: Fuel,
    title: "Fuel Theft Protection",
    description: "Precision ultrasonic fuel level sensors with instant alerts for sudden fuel drops.",
    borderColor: "border-t-blue-500",
    hoverColor: "hover:border-blue-500/30"
  },
  {
    icon: ShieldAlert,
    title: "Remote Engine Immobiliser",
    description: "Remotely stop vehicle engine via mobile app in emergency or unauthorized movement cases.",
    borderColor: "border-t-red-500",
    hoverColor: "hover:border-red-500/30"
  },
  {
    icon: Route,
    title: "Geofence & Route Optimisation",
    description: "Custom virtual boundaries with instant entry/exit alerts and ETA calculation.",
    borderColor: "border-t-purple-500",
    hoverColor: "hover:border-purple-500/30"
  }
]

const servicesList = [
  {
    title: "Commercial Logistics & Transport Fleets",
    description: "Full telematics control for trucks, trailers, and interstate cargo fleets.",
    features: ["Multi-vehicle Live Fleet Map", "Driver Behavior Scorecard", "Harsh Braking & Speed Alerts", "Trip History Replay"],
    borderColor: "border-t-emerald-500",
    hoverColor: "hover:border-emerald-500/30"
  },
  {
    title: "Cold Chain & Temperature Tracking",
    description: "Refrigerated truck monitoring for pharmaceuticals, dairy, and perishable foods.",
    features: ["Digital Temperature Sensors", "Humidity & Door Open Logs", "Cold Chain Compliance Reports", "Spoilage Warning Alarms"],
    borderColor: "border-t-blue-500",
    hoverColor: "hover:border-blue-500/30"
  },
  {
    title: "School Bus & Passenger Safety",
    description: "Dedicated parent tracking apps and RFID student boarding verification.",
    features: ["Parent Mobile Tracking App", "Student RFID Boarding Scan", "Over-speeding Audio Buzzer", "SOS Emergency Switch"],
    borderColor: "border-t-purple-500",
    hoverColor: "hover:border-purple-500/30"
  }
]

const gpsPricing: PricingPlan[] = [
  {
    name: "Standard GPS Tracker",
    price: "3,499",
    period: "/vehicle + GST",
    tagline: "Ideal for cabs, bikes, and small delivery fleets.",
    features: [
      "4G Waterproof GPS Tracker Hardware",
      "Real-time Live Tracking Mobile App",
      "Ignition On/Off Alert",
      "90-day Route Replay History",
      "1 Year SIM & Software Subscription",
    ],
    cta: "Track Single Vehicle",
  },
  {
    name: "Fleet Pro + Fuel IoT",
    price: "9,999",
    period: "/commercial truck",
    tagline: "Complete fleet telematics with fuel level sensor & engine cut-off.",
    features: [
      "High-Precision GPS Hardware",
      "Ultrasonic Fuel Level Sensor Kit",
      "Remote Engine Immobilizer Relay",
      "Geofence & Driver Scorecard Engine",
      "Speed Violation & Idle Time Logs",
      "Free 1 Year Software & SIM Card",
    ],
    highlighted: true,
    gradient: "from-emerald-600 to-teal-700",
    cta: "Equip Commercial Fleet",
  },
  {
    name: "Enterprise Fleet Cloud",
    price: "49,999+",
    period: "/custom fleet setup",
    tagline: "Dedicated telematics platform for 50+ vehicles & logistics hubs.",
    features: [
      "Cold Chain Temp Sensors + Door Sensors",
      "Custom Fleet Management Dashboard",
      "Fastag & Toll API Integration",
      "Dedicated Server & Custom Branding",
      "Automated Maintenance Scheduling",
      "24/7 Priority Field Service Support",
    ],
    cta: "Contact Fleet Manager",
  }
]

const technologies = [
  "GPS / GLONASS", "4G LTE Telematics", "CAN Bus OBD-II", "Ultrasonic Sensors", "Geofencing Engine", "WebSockets", "Leaflet Maps", "Redis"
]

export default function GpsVehicleTrackingPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <HeaderNav />
      
      <main className="pt-20">
        {/* ══ HERO SECTION ══ */}
        <section className="relative overflow-hidden bg-slate-900 text-white py-24 lg:py-32">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-900/40 via-slate-900 to-black" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
            <Badge className="bg-emerald-600/20 text-emerald-400 border-emerald-500/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest mb-6">
              Fleet Telematics & Security
            </Badge>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight max-w-4xl leading-tight">
              GPS Vehicle <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Tracking System</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed">
              Track your vehicles anywhere, anytime. Prevent fuel theft, immobilise engines remotely, and optimize delivery routes with real-time IoT telematics.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl shadow-lg hover:scale-105 transition-all">
                <Link href="/contact">Get GPS Demo <ArrowUpRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800 rounded-xl">
                <Link href="#pricing">View Fleet Pricing</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* ══ LIVE DEMO & SHOWCASE CARD ══ */}
        <section className="py-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <Badge className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 mb-3 px-3 py-1 text-xs uppercase font-extrabold tracking-widest">
                Interactive Portal &amp; Documentation
              </Badge>
              <h2 className="text-3xl font-black text-slate-900 dark:text-white">Live GPS Fleet Portal &amp; Brochure</h2>
              <p className="mt-2 text-slate-600 dark:text-slate-400">Test live GPS vehicle location tracking or download the technical system brochure.</p>
            </div>

            <div className="flex justify-center">
              <IotShowcaseCard
                title="GPS Vehicle Tracking"
                description="Complete Live GPS & Fleet Telematics Management System."
                iconName="navigation"
                pdfUrl="https://dakshiyatechnology.in/demo/#"
                demoUrl="https://mahixinfotech.in/gps-tracking/pages/login.php"
              />
            </div>
          </div>
        </section>

        {/* ══ FEATURES GRID ══ */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-black text-slate-900 dark:text-white">Smart Fleet Intelligence</h2>
            <p className="mt-3 text-slate-600 dark:text-slate-400">Total control over your transport operations from a single dashboard.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => {
              const Icon = f.icon
              return (
                <Card key={i} className={`border-t-4 ${f.borderColor} ${f.hoverColor} transition-all duration-300 hover:shadow-xl`}>
                  <CardHeader>
                    <Icon className="h-8 w-8 text-emerald-500 mb-2" />
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
              <h2 className="text-3xl font-black text-slate-900 dark:text-white">Tailored Solutions for Every Fleet</h2>
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
            plans={gpsPricing}
            title="GPS Telematics Pricing"
            subtitle="Affordable hardware & software plans for individual vehicles or large logistics fleets."
          />
        </div>

        {/* ══ TECH STACK ══ */}
        <TechStackGrid 
          technologies={technologies}
          title="Telematics & Mapping Stack"
          subtitle="Precision GPS/GLONASS receivers, OBD-II vehicle diagnostics, and high-frequency WebSocket streams."
        />
      </main>

      <Footer />
    </div>
  )
}
