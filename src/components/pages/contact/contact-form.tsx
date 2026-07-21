"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle2, AlertCircle, Send, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { sendInquiryEmails, isEmailJSConfigured } from "@/lib/email-service"

const services = [
  { value: "web-development", label: "Web Development" },
  { value: "mobile-apps", label: "Mobile App Development" },
  { value: "shopify", label: "Shopify Development" },
  { value: "e-commerce", label: "E-commerce Development" },
  { value: "ai-ml", label: "AI & ML Solutions" },
  { value: "cloud", label: "Cloud Services" },
  { value: "seo", label: "SEO Optimization" },
  { value: "google-ads", label: "Google Ads" },
  { value: "meta-ads", label: "Meta Ads" },
  { value: "digital-marketing", label: "Digital Marketing" },
  { value: "crm", label: "CRM Solutions" },
  { value: "it-consulting", label: "IT Consulting" },
  { value: "other", label: "Other / Not Sure" },
]

export function ContactForm() {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  })

  const [status, setStatus] = React.useState<"idle" | "submitting" | "success" | "error">("idle")
  const [errors, setErrors] = React.useState<Record<string, string>>({})
  const [errorMessage, setErrorMessage] = React.useState<string>("")
  const [submittedEmail, setSubmittedEmail] = React.useState<string>("")

  const validate = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required"
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required"
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email"
    }
    if (!formData.message.trim()) newErrors.message = "Message is required"
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setStatus("submitting")
    setErrorMessage("")

    try {
      const result = await sendInquiryEmails(formData)
      if (result.success) {
        setSubmittedEmail(formData.email)
        setStatus("success")
        setFormData({ firstName: "", lastName: "", email: "", phone: "", company: "", service: "", message: "" })
      } else {
        setErrorMessage(result.message)
        setStatus("error")
      }
    } catch (err: any) {
      setErrorMessage(err?.message || "An unexpected error occurred while sending your message.")
      setStatus("error")
    }
  }

  const field = (id: string) => ({
    className: cn(
      "rounded-xl border-2 bg-white h-12 px-4 text-sm text-slate-800 placeholder:text-slate-400",
      "focus:border-red-800 focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 transition-colors duration-200",
      errors[id] ? "border-red-400 bg-red-50/40" : "border-slate-200 hover:border-slate-300"
    ),
  })

  if (status === "success") {
    return (
      <div className="rounded-3xl border-2 border-green-200 bg-green-50/80 p-8 sm:p-12 text-center flex flex-col items-center justify-center min-h-[500px] animate-in fade-in zoom-in duration-300">
        <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-green-100 border-4 border-green-200 mb-6">
          <CheckCircle2 className="h-10 w-10 text-green-600" />
        </div>
        <h3 className="text-2xl font-black text-slate-900">Enquiry Received!</h3>
        <p className="text-slate-600 mt-3 max-w-md leading-relaxed text-sm">
          Thank you for reaching out to <strong>Mahix InfoTech</strong>. We have received your request and dispatched an automated confirmation email{submittedEmail ? ` to ${submittedEmail}` : ""}.
        </p>
        <p className="text-slate-500 mt-2 text-xs font-medium">
          Our team will contact you directly within <strong className="text-red-900">24 hours</strong>.
        </p>
        <Button
          onClick={() => setStatus("idle")}
          className="mt-8 rounded-xl bg-red-900 hover:bg-red-800 text-white px-8 font-bold"
        >
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
    <div className="rounded-3xl border-2 border-slate-100 bg-white shadow-xl shadow-slate-100 overflow-hidden">
      {/* Card top accent bar */}
      <div className="h-1.5 w-full bg-gradient-to-r from-red-900 via-red-700 to-blue-900" />

      {/* Header */}
      <div className="px-8 pt-8 pb-2">
        <h2 className="text-2xl font-black text-slate-900">Send us a message</h2>
        <p className="text-slate-500 text-sm mt-2 leading-relaxed">
          Fill out the form below and our team will get back to you within <span className="font-semibold text-red-800">24 hours</span>.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="px-8 pb-8 pt-6 space-y-5">

        {/* Name row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <Label htmlFor="firstName" className="text-xs font-black uppercase tracking-wider text-slate-500">
              First Name <span className="text-red-700">*</span>
            </Label>
            <Input
              id="firstName"
              placeholder="John"
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              {...field("firstName")}
            />
            {errors.firstName && (
              <p className="text-xs text-red-600 flex items-center gap-1">
                <AlertCircle className="h-3.5 w-3.5 flex-shrink-0" /> {errors.firstName}
              </p>
            )}
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="lastName" className="text-xs font-black uppercase tracking-wider text-slate-500">
              Last Name <span className="text-red-700">*</span>
            </Label>
            <Input
              id="lastName"
              placeholder="Doe"
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              {...field("lastName")}
            />
            {errors.lastName && (
              <p className="text-xs text-red-600 flex items-center gap-1">
                <AlertCircle className="h-3.5 w-3.5 flex-shrink-0" /> {errors.lastName}
              </p>
            )}
          </div>
        </div>

        {/* Email */}
        <div className="space-y-1.5">
          <Label htmlFor="email" className="text-xs font-black uppercase tracking-wider text-slate-500">
            Email Address <span className="text-red-700">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="john@company.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            {...field("email")}
          />
          {errors.email && (
            <p className="text-xs text-red-600 flex items-center gap-1">
              <AlertCircle className="h-3.5 w-3.5 flex-shrink-0" /> {errors.email}
            </p>
          )}
        </div>

        {/* Phone + Company */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <Label htmlFor="phone" className="text-xs font-black uppercase tracking-wider text-slate-500">Phone</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+91 8608610760"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="rounded-xl border-2 border-slate-200 hover:border-slate-300 focus:border-red-800 focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 bg-white h-12 px-4 text-sm text-slate-800 placeholder:text-slate-400 transition-colors duration-200"
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="company" className="text-xs font-black uppercase tracking-wider text-slate-500">Company</Label>
            <Input
              id="company"
              placeholder="Your Company Name"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="rounded-xl border-2 border-slate-200 hover:border-slate-300 focus:border-red-800 focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 bg-white h-12 px-4 text-sm text-slate-800 placeholder:text-slate-400 transition-colors duration-200"
            />
          </div>
        </div>

        {/* Service */}
        <div className="space-y-1.5">
          <Label htmlFor="service" className="text-xs font-black uppercase tracking-wider text-slate-500">Service of Interest</Label>
          <Select value={formData.service} onValueChange={(val) => setFormData({ ...formData, service: val })}>
            <SelectTrigger className="rounded-xl border-2 border-slate-200 hover:border-slate-300 focus:border-red-800 focus:ring-0 focus:ring-offset-0 bg-white h-12 px-4 text-sm text-slate-800 transition-colors duration-200">
              <SelectValue placeholder="Select a service..." />
            </SelectTrigger>
            <SelectContent className="rounded-xl border-2 border-slate-100 shadow-xl">
              {services.map((s) => (
                <SelectItem key={s.value} value={s.value} className="text-sm">
                  {s.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Message */}
        <div className="space-y-1.5">
          <Label htmlFor="message" className="text-xs font-black uppercase tracking-wider text-slate-500">
            Message <span className="text-red-700">*</span>
          </Label>
          <Textarea
            id="message"
            placeholder="Tell us about your project — goals, timeline, budget, and any specific requirements..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className={cn(
              "rounded-xl border-2 bg-white min-h-[140px] px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400",
              "focus:border-red-800 focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 transition-colors duration-200",
              errors.message ? "border-red-400 bg-red-50/40" : "border-slate-200 hover:border-slate-300"
            )}
          />
          {errors.message && (
            <p className="text-xs text-red-600 flex items-center gap-1">
              <AlertCircle className="h-3.5 w-3.5 flex-shrink-0" /> {errors.message}
            </p>
          )}
        </div>

        {/* Error state */}
        {status === "error" && (
          <div className="flex items-center gap-3 p-4 rounded-xl bg-red-50 text-red-700 text-sm border border-red-200">
            <AlertCircle className="h-5 w-5 flex-shrink-0" />
            <span>{errorMessage || "An unexpected error occurred. Please try again or email us directly at mahixinfotech@gmail.com."}</span>
          </div>
        )}

        {/* Submit */}
        <Button
          type="submit"
          size="lg"
          disabled={status === "submitting"}
          className="w-full rounded-xl bg-red-900 hover:bg-red-800 text-white py-6 font-bold shadow-lg shadow-red-900/20 hover:scale-[1.01] transition-all duration-300 mt-2"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="h-5 w-5 mr-2 animate-spin" />
              Sending Message...
            </>
          ) : (
            <>
              Send Message
              <Send className="h-4 w-4 ml-2" />
            </>
          )}
        </Button>

        <p className="text-center text-xs text-slate-400 mt-2">
          By submitting, you agree to our privacy policy. We never spam.
        </p>
      </form>
    </div>
  )
}
