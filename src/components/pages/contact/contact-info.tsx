"use client"

import { Phone, Mail, MapPin, Clock, CheckCircle2, MessageSquare } from "lucide-react"

const contactItems = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8608610760",
    sub: "Mon – Fri, 9am – 6pm IST",
    iconBg: "bg-red-50 border-red-100",
    iconColor: "text-red-800",
    href: "tel:+918608610760",
  },
  {
    icon: MessageSquare,
    label: "WhatsApp Inquiry",
    value: "+91 96888 96510",
    sub: "Click here to chat instantly",
    iconBg: "bg-emerald-50 border-emerald-100",
    iconColor: "text-emerald-600",
    href: "https://wa.me/919688896510?text=Hi%20Mahix%20InfoTech%2C%20I%20would%20like%20to%20make%20an%20enquiry%20about%20your%20services.",
  },
  {
    icon: Mail,
    label: "Email",
    value: "contact@mahixinfotech.com",
    sub: "We reply within 24 hours",
    iconBg: "bg-blue-50 border-blue-100",
    iconColor: "text-blue-800",
    href: "mailto:contact@mahixinfotech.com",
  },
  {
    icon: MapPin,
    label: "Headquarters",
    value: "Dindigul, Tamil Nadu 624001",
    sub: "89/4, Scheme Road, Krishna Raja Harini Illam, Near Head Post Office Road",
    iconBg: "bg-slate-100 border-slate-200",
    iconColor: "text-slate-700",
    href: "https://maps.google.com/?q=Dindigul,Tamil+Nadu",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon – Fri: 9am – 6pm",
    sub: "Saturday: 10am – 4pm  |  Sunday: Closed",
    iconBg: "bg-amber-50 border-amber-100",
    iconColor: "text-amber-700",
    href: null,
  },
]

const trustPoints = [
  "Response in under 24 hours — guaranteed",
  "98% project success rate across all clients",
  "Trusted by 50+ businesses globally",
  "5+ years of enterprise-grade experience",
  "Transparent pricing, no hidden charges",
]

export function ContactInfo() {
  return (
    <div className="space-y-8">
      {/* Heading */}
      <div>
        <span className="text-xs font-black uppercase tracking-widest text-red-800 mb-2 block">Our Details</span>
        <h2 className="text-3xl font-black text-slate-900 leading-tight">Contact Information</h2>
        <p className="text-slate-500 mt-3 leading-relaxed text-sm">
          Whether you want to launch a new platform, modernize an existing stack, or just explore what's possible — we're here to help.
        </p>
      </div>

      {/* Contact cards */}
      <div className="space-y-3">
        {contactItems.map((item) => {
          const Icon = item.icon
          const Wrapper = item.href ? "a" : "div"
          const wrapperProps = item.href
            ? { href: item.href, target: "_blank", rel: "noopener noreferrer" }
            : {}

          return (
            <Wrapper
              key={item.label}
              {...wrapperProps}
              className="group flex items-start gap-4 p-5 rounded-2xl border-2 border-slate-100 bg-white hover:border-red-200 hover:shadow-md transition-all duration-200 cursor-pointer"
            >
              <div className={`flex-shrink-0 h-11 w-11 rounded-xl border ${item.iconBg} ${item.iconColor} flex items-center justify-center transition-transform duration-200 group-hover:scale-110`}>
                <Icon className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-black uppercase tracking-wider text-slate-400 mb-0.5">{item.label}</p>
                <p className="text-sm font-bold text-slate-800 group-hover:text-red-800 transition-colors truncate">{item.value}</p>
                <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">{item.sub}</p>
              </div>
            </Wrapper>
          )
        })}
      </div>

      {/* Trust points */}
      <div className="rounded-2xl border-2 border-slate-100 bg-white p-6">
        <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4">Why Partner with Us?</h3>
        <ul className="space-y-3">
          {trustPoints.map((point) => (
            <li key={point} className="flex items-start gap-3 text-sm text-slate-600">
              <CheckCircle2 className="h-4 w-4 text-red-800 flex-shrink-0 mt-0.5" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Social / availability pill */}
      <div className="flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-green-50 border-2 border-green-100">
        <span className="h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse flex-shrink-0" />
        <div>
          <p className="text-sm font-bold text-green-800">Currently accepting new projects</p>
          <p className="text-xs text-green-600 mt-0.5">Limited availability — reach out now to reserve your slot</p>
        </div>
      </div>
    </div>
  )
}
