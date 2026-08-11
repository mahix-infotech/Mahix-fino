import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Fingerprint, CheckCircle, Clock, Users, ShieldCheck, Cpu, ArrowUpRight, FileSpreadsheet } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/sections/navigation/navigation"
import { Footer } from "@/components/sections/footer/footer"
import { TechStackGrid } from "@/components/sections/tech-stack/tech-stack-grid"
import type { Metadata } from "next"
import { PricingSection, PricingPlan } from "@/components/sections/pricing/pricing-section"
import { IotShowcaseCard } from "@/components/ui/iot-showcase-card"

export const metadata: Metadata = {
  title: "HR & eSSL Biometric Attendance Integration | Mahix InfoTech",
  description: "Seamless eSSL biometric fingerprint, face recognition, and RFID attendance integration with cloud HRMS. Automated payroll processing, shift management, and mobile punch logging.",
  keywords: "eSSL Attendance Integration, Biometric HRMS, Face Recognition Punch, Fingerprint Attendance Cloud, Automated Payroll System, eSSL Machine API",
}

const features = [
  {
    icon: Fingerprint,
    title: "eSSL Hardware Auto-Sync",
    description: "Direct cloud sync with eSSL biometric machines over LAN, WiFi, or 4G without static IPs.",
    borderColor: "border-t-indigo-500",
    hoverColor: "hover:border-indigo-500/30"
  },
  {
    icon: Clock,
    title: "Real-time Shift & Overtime Logic",
    description: "Automated calculation of late arrivals, early departures, night shifts, and OT hours.",
    borderColor: "border-t-blue-500",
    hoverColor: "hover:border-blue-500/30"
  },
  {
    icon: ShieldCheck,
    title: "AI Face Recognition & Anti-Spoof",
    description: "Contactless AI facial recognition attendance with liveness detection to prevent buddy punching.",
    borderColor: "border-t-emerald-500",
    hoverColor: "hover:border-emerald-500/30"
  },
  {
    icon: FileSpreadsheet,
    title: "1-Click Statutory Payroll Sync",
    description: "Export clean attendance data directly into Tally, Zoho Payroll, SAP, or GreytHR.",
    borderColor: "border-t-purple-500",
    hoverColor: "hover:border-purple-500/30"
  }
]

const servicesList = [
  {
    title: "eSSL Hardware Cloud Push SDK",
    description: "Connect legacy eSSL machines to modern web apps seamlessly.",
    features: ["ADMS / Push Communication Protocol", "Multi-branch Centralized Punch Log", "Machine Offline Buffer Sync", "Remote User Enrollment Sync"],
    borderColor: "border-t-indigo-500",
    hoverColor: "hover:border-indigo-500/30"
  },
  {
    title: "Mobile Attendance with Geo-Fencing",
    description: "Empower field staff and remote employees to mark attendance with selfie & GPS location.",
    features: ["GPS Location Verification", "Selfie Face Match AI", "Field Visit Tracking", "Manager Approval Workflow"],
    borderColor: "border-t-blue-500",
    hoverColor: "hover:border-blue-500/30"
  },
  {
    title: "Complete HRMS & Leave Portal",
    description: "All-in-one employee self-service portal for leaves, payslips, and shift rosters.",
    features: ["Leave Application & Approval", "Digital Payslip Generation", "Shift Rotation & Roster Builder", "WhatsApp Daily Attendance Reports"],
    borderColor: "border-t-emerald-500",
    hoverColor: "hover:border-emerald-500/30"
  }
]

const hrPricing: PricingPlan[] = [
  {
    name: "eSSL Sync Lite",
    price: "19,999",
    period: "/branch setup",
    tagline: "Sync eSSL biometric machines to cloud database for up to 50 employees.",
    features: [
      "eSSL Machine Cloud Push Integration",
      "Up to 50 Employee Profiles",
      "Real-time In/Out Logs Dashboard",
      "Monthly Excel Attendance Summary",
      "WhatsApp Daily Manager Summary",
    ],
    cta: "Connect eSSL Machine",
  },
  {
    name: "HRMS & Payroll Pro",
    price: "49,999",
    period: "/plant /year",
    tagline: "Complete biometric + mobile HRMS platform for up to 250 employees.",
    features: [
      "Unlimited eSSL Biometric Devices",
      "Up to 250 Employee User Licences",
      "Mobile App Geo-Fenced Punching",
      "Shift Roster & Automated Overtime Engine",
      "Tally / Zoho Payroll 1-Click Export",
      "Dedicated Onboarding & Support",
    ],
    highlighted: true,
    gradient: "from-indigo-600 to-blue-700",
    cta: "Get Complete HRMS",
  },
  {
    name: "Enterprise Multi-Branch",
    price: "1,49,999+",
    period: "/enterprise cloud",
    tagline: "High-volume biometric API pipeline for 1000+ employees across 20+ locations.",
    features: [
      "Unlimited Employees & Biometric Machines",
      "AI Face Recognition Kiosk Software",
      "Custom ERP / SAP Payroll Integration",
      "Multi-tenant Dedicated Server Infrastructure",
      "Custom HR Workflow Automation",
      "SLA 99.9% Uptime Guarantee & 24/7 Support",
    ],
    cta: "Contact HR Tech Specialist",
  }
]

const technologies = [
  "eSSL ADMS Push API", "Fingerprint Biometrics", "AI Face Recognition", "ZKLib SDK", "REST APIs", "Node.js", "PostgreSQL", "Docker"
]

export default function HrEsslAttendancePage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <Navigation />
      
      <main className="pt-20">
        {/* ══ HERO SECTION ══ */}
        <section className="relative overflow-hidden bg-slate-900 text-white py-24 lg:py-32">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/40 via-slate-900 to-black" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
            <Badge className="bg-indigo-600/20 text-indigo-400 border-indigo-500/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest mb-6">
              Biometric Telemetry & HR Tech
            </Badge>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight max-w-4xl leading-tight">
              HR &amp; eSSL <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-300">Biometric Attendance</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed">
              Eliminate manual attendance spreadsheets. Connect eSSL fingerprint & facial recognition devices directly to cloud HRMS and payroll.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl shadow-lg hover:scale-105 transition-all">
                <Link href="/contact">Integrate eSSL Now <ArrowUpRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800 rounded-xl">
                <Link href="#pricing">Explore HR Packages</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* ══ LIVE DEMO & SHOWCASE CARD ══ */}
        <section className="py-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <Badge className="bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400 mb-3 px-3 py-1 text-xs uppercase font-extrabold tracking-widest">
                Interactive Portal &amp; Documentation
              </Badge>
              <h2 className="text-3xl font-black text-slate-900 dark:text-white">Live Attendance Portal &amp; System Docs</h2>
              <p className="mt-2 text-slate-600 dark:text-slate-400">Experience our eSSL biometric HR cloud portal or download the complete integration brochure.</p>
            </div>

            <div className="flex justify-center">
              <IotShowcaseCard
                title="HR & eSSL Attendance"
                description="Complete Biometric eSSL Cloud Attendance & HRMS Integration."
                iconName="fingerprint"
                pdfUrl="/Assets/PDF/hr_page-0001.pdf"
                demoUrl="https://dakshiyatechnology.in/demo/#"
              />
            </div>
          </div>
        </section>

        {/* ══ FEATURES GRID ══ */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-black text-slate-900 dark:text-white">Automated Workforce Attendance</h2>
            <p className="mt-3 text-slate-600 dark:text-slate-400">Zero human error in overtime, shift allowances, and payroll calculation.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => {
              const Icon = f.icon
              return (
                <Card key={i} className={`border-t-4 ${f.borderColor} ${f.hoverColor} transition-all duration-300 hover:shadow-xl`}>
                  <CardHeader>
                    <Icon className="h-8 w-8 text-indigo-500 mb-2" />
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
              <h2 className="text-3xl font-black text-slate-900 dark:text-white">Core Integration Modules</h2>
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
            plans={hrPricing}
            title="HR & Attendance Packages"
            subtitle="Simple pricing per machine or per employee for seamless biometric cloud integration."
          />
        </div>

        {/* ══ TECH STACK ══ */}
        <TechStackGrid 
          technologies={technologies}
          title="Biometric SDK & Cloud Integration Stack"
          subtitle="eSSL ADMS protocols, AI face recognition models, and RESTful HRMS connectors."
        />
      </main>

      <Footer />
    </div>
  )
}
