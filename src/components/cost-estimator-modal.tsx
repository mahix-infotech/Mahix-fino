"use client"

import * as React from "react"
import { 
  Calculator, 
  Check, 
  ArrowRight, 
  ArrowLeft, 
  Clock, 
  Sparkles, 
  Send, 
  ShieldCheck, 
  User, 
  Mail, 
  Phone, 
  Building,
  Laptop,
  Smartphone,
  Brain,
  ShoppingBag,
  Cloud
} from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { sendInquiryEmails } from "@/lib/email-service"

const projectTypes = [
  {
    id: "web-app",
    title: "Web Application / SaaS",
    desc: "Custom web platform built with Next.js & React",
    basePrice: 1200,
    baseWeeks: 3,
    icon: Laptop
  },
  {
    id: "mobile-app",
    title: "Native / Cross-Mobile App",
    desc: "iOS & Android mobile apps (React Native / Flutter)",
    basePrice: 1800,
    baseWeeks: 4,
    icon: Smartphone
  },
  {
    id: "ai-ml",
    title: "AI & Machine Learning Module",
    desc: "Custom LLM integrations, predictive models & automation",
    basePrice: 2200,
    baseWeeks: 4,
    icon: Brain
  },
  {
    id: "e-commerce",
    title: "E-Commerce Storefront",
    desc: "Custom Shopify store, payment gateways & cart systems",
    basePrice: 1000,
    baseWeeks: 2,
    icon: ShoppingBag
  },
  {
    id: "cloud-infra",
    title: "Cloud Migration & DevOps",
    desc: "AWS/Azure cloud architecture, CI/CD & optimization",
    basePrice: 1500,
    baseWeeks: 3,
    icon: Cloud
  }
]

const featureModules = [
  { id: "auth", title: "User Auth & Roles", price: 300, weeks: 1 },
  { id: "payments", title: "Stripe/Razorpay Gateway", price: 400, weeks: 1 },
  { id: "admin", title: "Admin Dashboard & CMS", price: 500, weeks: 1 },
  { id: "analytics", title: "Real-time Analytics & Charts", price: 400, weeks: 1 },
  { id: "api", title: "Third-party API Integration", price: 350, weeks: 1 },
  { id: "seo", title: "Advanced Technical SEO", price: 300, weeks: 1 },
]

const timelineSpeeds = [
  { id: "standard", title: "Standard Delivery", multiplier: 1, label: "Regular paced development" },
  { id: "express", title: "Express Delivery (Fast-Track)", multiplier: 1.25, label: "Accelerated development sprint" },
]

interface CostEstimatorModalProps {
  trigger?: React.ReactNode
}

export function CostEstimatorModal({ trigger }: CostEstimatorModalProps) {
  const [open, setOpen] = React.useState(false)
  const [step, setStep] = React.useState(1)
  
  // Selection state
  const [selectedType, setSelectedType] = React.useState(projectTypes[0].id)
  const [selectedFeatures, setSelectedFeatures] = React.useState<string[]>(["auth", "admin"])
  const [selectedSpeed, setSelectedSpeed] = React.useState("standard")
  
  // Lead info
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    notes: ""
  })
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [submitStatus, setSubmitStatus] = React.useState<{ success: boolean; message: string } | null>(null)

  // Calculations
  const activeTypeObj = projectTypes.find(t => t.id === selectedType) || projectTypes[0]
  const activeFeaturesObjs = featureModules.filter(f => selectedFeatures.includes(f.id))
  const speedObj = timelineSpeeds.find(s => s.id === selectedSpeed) || timelineSpeeds[0]

  const rawPrice = (activeTypeObj.basePrice + activeFeaturesObjs.reduce((acc, f) => acc + f.price, 0)) * speedObj.multiplier
  const rawWeeks = Math.ceil((activeTypeObj.baseWeeks + activeFeaturesObjs.reduce((acc, f) => acc + f.weeks, 0)) / (speedObj.id === "express" ? 1.4 : 1))

  const minPrice = Math.round(rawPrice * 0.9)
  const maxPrice = Math.round(rawPrice * 1.15)

  const toggleFeature = (id: string) => {
    setSelectedFeatures(prev => 
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    )
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    const nameParts = formData.name.trim().split(" ")
    const firstName = nameParts[0] || "Client"
    const lastName = nameParts.slice(1).join(" ") || ""

    const estimateSummary = `
[ESTIMATE BREAKDOWN]
• Project Type: ${activeTypeObj.title}
• Features: ${activeFeaturesObjs.map(f => f.title).join(", ") || "Base setup"}
• Delivery Speed: ${speedObj.title}
• Estimated Range: $${minPrice.toLocaleString()} - $${maxPrice.toLocaleString()} USD (~${rawWeeks} Weeks)

Additional Notes:
${formData.notes || "None"}
`

    try {
      const res = await sendInquiryEmails({
        firstName,
        lastName,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        service: `Estimate: ${activeTypeObj.title}`,
        message: estimateSummary
      })

      if (res.success) {
        setSubmitStatus({
          success: true,
          message: "Estimate request received! Our technical lead will reach out within 2 hours with a detailed proposal."
        })
      } else {
        setSubmitStatus({
          success: false,
          message: res.message || "Failed to send estimate. Please contact us directly."
        })
      }
    } catch {
      setSubmitStatus({
        success: false,
        message: "Network error. Please try again or reach out via email."
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetForm = () => {
    setStep(1)
    setSubmitStatus(null)
    setFormData({ name: "", email: "", phone: "", company: "", notes: "" })
  }

  return (
    <Dialog open={open} onOpenChange={(val) => { setOpen(val); if (!val) resetForm(); }}>
      <DialogTrigger asChild>
        {trigger || (
          <Button 
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-lg border-none px-5 py-2.5 font-bold text-xs tracking-wider uppercase flex items-center gap-2 cursor-pointer transition-all hover:scale-105"
          >
            <Calculator className="h-4 w-4" />
            <span>Instant Cost Estimator</span>
          </Button>
        )}
      </DialogTrigger>
      
      <DialogContent className="max-w-2xl bg-background border border-black/[0.08] dark:border-white/[0.1] rounded-2xl shadow-2xl p-0 overflow-hidden">
        {/* Top Header Bar */}
        <div className="bg-slate-900 text-white p-6 relative">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-blue-600/30 border border-blue-400/30 text-blue-400">
                <Calculator className="h-5 w-5" />
              </div>
              <div>
                <DialogTitle className="text-base font-bold text-white flex items-center gap-2">
                  Project Cost & Timeline Estimator
                  <span className="px-2 py-0.5 text-[9px] font-extrabold text-blue-300 bg-blue-950 rounded-full border border-blue-800">
                    Step {step} of 4
                  </span>
                </DialogTitle>
                <DialogDescription className="text-xs text-slate-400 mt-0.5">
                  Calculate real-time estimates for your software build
                </DialogDescription>
              </div>
            </div>
          </div>

          {/* Progress bar */}
          <div className="w-full bg-slate-800 h-1.5 rounded-full mt-5 overflow-hidden">
            <div 
              className="bg-blue-500 h-full transition-all duration-300 rounded-full"
              style={{ width: `${(step / 4) * 100}%` }}
            />
          </div>
        </div>

        <div className="p-6">
          {/* STEP 1: Select Project Type */}
          {step === 1 && (
            <div className="flex flex-col gap-4">
              <h3 className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                Select your primary project architecture:
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {projectTypes.map((type) => {
                  const IconComp = type.icon
                  const isSelected = selectedType === type.id
                  return (
                    <div
                      key={type.id}
                      onClick={() => setSelectedType(type.id)}
                      className={`p-4 rounded-xl border cursor-pointer transition-all flex flex-col justify-between gap-2 ${
                        isSelected 
                          ? "border-blue-600 bg-blue-50/50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400 shadow-sm" 
                          : "border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-card text-card-foreground"
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className={`p-2 rounded-lg ${isSelected ? "bg-blue-600 text-white" : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"}`}>
                          <IconComp className="h-4 w-4" />
                        </div>
                        {isSelected && (
                          <div className="h-5 w-5 rounded-full bg-blue-600 text-white flex items-center justify-center">
                            <Check className="h-3 w-3" />
                          </div>
                        )}
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-slate-900 dark:text-slate-100">{type.title}</h4>
                        <p className="text-[11px] text-muted-foreground mt-0.5">{type.desc}</p>
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="flex justify-end mt-4">
                <Button onClick={() => setStep(2)} className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold px-6 py-2">
                  Next: Select Features
                  <ArrowRight className="h-4 w-4 ml-1.5" />
                </Button>
              </div>
            </div>
          )}

          {/* STEP 2: Select Features */}
          {step === 2 && (
            <div className="flex flex-col gap-4">
              <h3 className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                Select additional modules & integrations:
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {featureModules.map((feature) => {
                  const isChecked = selectedFeatures.includes(feature.id)
                  return (
                    <div
                      key={feature.id}
                      onClick={() => toggleFeature(feature.id)}
                      className={`p-3 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                        isChecked 
                          ? "border-blue-600 bg-blue-50/40 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400" 
                          : "border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-card"
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div className={`h-4 w-4 rounded border flex items-center justify-center transition-colors ${isChecked ? "bg-blue-600 border-blue-600 text-white" : "border-slate-300 dark:border-slate-700"}`}>
                          {isChecked && <Check className="h-3 w-3" />}
                        </div>
                        <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">{feature.title}</span>
                      </div>
                      <span className="text-[10px] font-bold text-muted-foreground">+${feature.price}</span>
                    </div>
                  )
                })}
              </div>

              <div className="flex items-center justify-between mt-4">
                <Button variant="outline" onClick={() => setStep(1)} className="rounded-xl text-xs font-semibold">
                  <ArrowLeft className="h-4 w-4 mr-1" />
                  Back
                </Button>
                <Button onClick={() => setStep(3)} className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold px-6">
                  Next: Delivery Speed
                  <ArrowRight className="h-4 w-4 ml-1.5" />
                </Button>
              </div>
            </div>
          )}

          {/* STEP 3: Timeline & Speed */}
          {step === 3 && (
            <div className="flex flex-col gap-4">
              <h3 className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                Select target delivery speed:
              </h3>

              <div className="flex flex-col gap-3">
                {timelineSpeeds.map((speed) => {
                  const isSelected = selectedSpeed === speed.id
                  return (
                    <div
                      key={speed.id}
                      onClick={() => setSelectedSpeed(speed.id)}
                      className={`p-4 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                        isSelected 
                          ? "border-blue-600 bg-blue-50/50 dark:bg-blue-950/30" 
                          : "border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-card"
                      }`}
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-xs font-bold text-slate-900 dark:text-slate-100">{speed.title}</h4>
                          {speed.id === "express" && (
                            <span className="px-2 py-0.5 text-[9px] font-extrabold text-amber-600 dark:text-amber-400 bg-amber-100 dark:bg-amber-950 rounded-full">
                              Fast Track
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] text-muted-foreground mt-0.5">{speed.label}</p>
                      </div>
                      {isSelected && <Check className="h-4 w-4 text-blue-600" />}
                    </div>
                  )
                })}
              </div>

              {/* Estimate Preview Widget */}
              <div className="bg-slate-900 text-white p-4 rounded-xl mt-2 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Estimated Cost Range</span>
                  <div className="text-lg font-black text-blue-400">${minPrice.toLocaleString()} – ${maxPrice.toLocaleString()} <span className="text-xs text-slate-400 font-normal">USD</span></div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Est. Delivery</span>
                  <div className="text-sm font-bold text-slate-200 flex items-center justify-end gap-1">
                    <Clock className="h-3.5 w-3.5 text-blue-400" />
                    ~{rawWeeks} Weeks
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between mt-2">
                <Button variant="outline" onClick={() => setStep(2)} className="rounded-xl text-xs font-semibold">
                  <ArrowLeft className="h-4 w-4 mr-1" />
                  Back
                </Button>
                <Button onClick={() => setStep(4)} className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold px-6">
                  Get Detailed Proposal
                  <ArrowRight className="h-4 w-4 ml-1.5" />
                </Button>
              </div>
            </div>
          )}

          {/* STEP 4: Lead Submission & Final Estimate */}
          {step === 4 && (
            <div>
              {submitStatus?.success ? (
                <div className="flex flex-col items-center justify-center text-center py-6 gap-3">
                  <div className="h-12 w-12 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">Estimate Submitted Successfully!</h3>
                  <p className="text-xs text-muted-foreground max-w-md">{submitStatus.message}</p>
                  <Button onClick={() => setOpen(false)} className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold mt-3 px-6">
                    Close Window
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                  {/* Summary Bar */}
                  <div className="bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900 p-3.5 rounded-xl flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase">Selected Plan: {activeTypeObj.title}</span>
                      <div className="text-sm font-black text-slate-900 dark:text-slate-100">${minPrice.toLocaleString()} - ${maxPrice.toLocaleString()} USD</div>
                    </div>
                    <div className="text-xs text-muted-foreground font-medium flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5 text-blue-500" />
                      ~{rawWeeks} Weeks
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-1">
                    <div className="relative">
                      <User className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                      <Input 
                        required
                        placeholder="Your Full Name *" 
                        value={formData.name}
                        onChange={(e) => setFormData(p => ({ ...p, name: e.target.value }))}
                        className="pl-9 text-xs h-9 rounded-xl"
                      />
                    </div>
                    <div className="relative">
                      <Mail className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                      <Input 
                        required
                        type="email"
                        placeholder="Email Address *" 
                        value={formData.email}
                        onChange={(e) => setFormData(p => ({ ...p, email: e.target.value }))}
                        className="pl-9 text-xs h-9 rounded-xl"
                      />
                    </div>
                    <div className="relative">
                      <Phone className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                      <Input 
                        placeholder="Phone Number (Optional)" 
                        value={formData.phone}
                        onChange={(e) => setFormData(p => ({ ...p, phone: e.target.value }))}
                        className="pl-9 text-xs h-9 rounded-xl"
                      />
                    </div>
                    <div className="relative">
                      <Building className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                      <Input 
                        placeholder="Company / Org (Optional)" 
                        value={formData.company}
                        onChange={(e) => setFormData(p => ({ ...p, company: e.target.value }))}
                        className="pl-9 text-xs h-9 rounded-xl"
                      />
                    </div>
                  </div>

                  <div>
                    <Textarea 
                      placeholder="Any specific feature requirements or notes? (Optional)"
                      value={formData.notes}
                      onChange={(e) => setFormData(p => ({ ...p, notes: e.target.value }))}
                      className="text-xs min-h-[60px] rounded-xl"
                    />
                  </div>

                  {submitStatus && !submitStatus.success && (
                    <p className="text-xs text-red-500 font-semibold">{submitStatus.message}</p>
                  )}

                  <div className="flex items-center justify-between mt-2">
                    <Button type="button" variant="outline" onClick={() => setStep(3)} className="rounded-xl text-xs font-semibold">
                      <ArrowLeft className="h-4 w-4 mr-1" />
                      Back
                    </Button>
                    <Button type="submit" disabled={isSubmitting} className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold px-6">
                      {isSubmitting ? "Sending Estimate..." : "Send Me Proposal"}
                      <Send className="h-3.5 w-3.5 ml-1.5" />
                    </Button>
                  </div>
                </form>
              )}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
