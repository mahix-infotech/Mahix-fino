"use client"

import * as React from "react"
import { Calendar, MapPin, Star } from "lucide-react"

const events = [
  {
    id: "tech-summit-2025",
    number: "01",
    title: "Tamil Nadu Tech Summit",
    role: "Chief Guest & Keynote Speaker",
    location: "Chennai Convention Center, TN",
    date: "November 2025",
    category: "State Tech Summit",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=1200&h=900",
    stat: "1,200+ Attendees",
    accent: "#2563eb",
    span: "lg:col-span-2 lg:row-span-2", // big card
  },
  {
    id: "hackathon-judge-2025",
    number: "02",
    title: "National AI Hackathon",
    role: "Grand Final Judge & Mentor",
    location: "Anna University, Chennai",
    date: "August 2025",
    category: "National Hackathon",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=900&h=600",
    stat: "150+ Projects Judged",
    accent: "#7c3aed",
    span: "",
  },
  {
    id: "dindigul-digital-expo",
    number: "03",
    title: "Dindigul Digital Expo",
    role: "Chief Guest Speaker",
    location: "Dindigul Trade Center",
    date: "March 2025",
    category: "Regional Summit",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=900&h=600",
    stat: "500+ Leaders",
    accent: "#0891b2",
    span: "",
  },
  {
    id: "corporate-workshop",
    number: "04",
    title: "Full Stack Masterclass",
    role: "Workshop Lead",
    location: "Mahix Innovation Hub",
    date: "January 2026",
    category: "Academy Workshop",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=900&h=600",
    stat: "200+ Engineers",
    accent: "#059669",
    span: "",
  },
]

export function EventsGallery() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-[1100px] px-6 sm:px-10">

        {/* ── Header ── */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-600 mb-2">
              — Events & Recognition
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight">
              Chief Guest Invitations &<br className="hidden sm:block" />{" "}
              <span className="text-blue-600">Industry Leadership</span>
            </h2>
          </div>
          <p className="text-sm text-slate-500 max-w-xs leading-relaxed sm:text-right">
            Mahix InfoTech represents at national tech summits, hackathons, and enterprise workshops across India.
          </p>
        </div>

        {/* ── Gallery Bento Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">

          {/* Card 1 — Large featured (spans 2 cols × 2 rows on lg) */}
          <GalleryCard event={events[0]} tall />

          {/* Cards 2 & 3 stacked */}
          <div className="flex flex-col gap-3">
            <GalleryCard event={events[1]} />
            <GalleryCard event={events[2]} />
          </div>

          {/* Card 4 — bottom spanning full width on sm, one col on lg */}
          <GalleryCard event={events[3]} />

        </div>

      </div>
    </section>
  )
}

function GalleryCard({ event, tall = false }: { event: typeof events[0]; tall?: boolean }) {
  const [hovered, setHovered] = React.useState(false)

  return (
    <div
      className={`relative overflow-hidden rounded-2xl cursor-pointer group ${tall ? "min-h-[420px] sm:min-h-[480px]" : "min-h-[200px] sm:min-h-[225px]"}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <img
        src={event.image}
        alt={event.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out"
        style={{ transform: hovered ? "scale(1.08)" : "scale(1.0)" }}
      />

      {/* Always-visible dark gradient at bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* Category pill — top left */}
      <div className="absolute top-3.5 left-3.5 z-10">
        <span
          className="inline-block px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-white"
          style={{ backgroundColor: event.accent }}
        >
          {event.category}
        </span>
      </div>

      {/* Stat pill — top right */}
      <div className="absolute top-3.5 right-3.5 z-10">
        <span className="inline-flex items-center gap-1 bg-white/90 backdrop-blur-sm text-slate-900 text-[10px] font-black px-2.5 py-1 rounded-full shadow-sm">
          <Star className="h-2.5 w-2.5 fill-amber-400 text-amber-400" />
          {event.stat}
        </span>
      </div>

      {/* Always-visible bottom content */}
      <div className="absolute bottom-0 left-0 right-0 z-10 p-4">
        {/* Role */}
        <p
          className="text-[10px] font-black uppercase tracking-widest mb-1 transition-all duration-300"
          style={{ color: `${event.accent}dd` }}
        >
          {event.role}
        </p>

        {/* Title */}
        <h3 className={`font-black text-white leading-tight ${tall ? "text-xl sm:text-2xl" : "text-base"}`}>
          {event.title}
        </h3>

        {/* Date & Location — visible on hover */}
        <div
          className="overflow-hidden transition-all duration-400 ease-out"
          style={{
            maxHeight: hovered ? "60px" : "0px",
            opacity: hovered ? 1 : 0,
            marginTop: hovered ? "10px" : "0px",
            transition: "max-height 0.35s ease, opacity 0.3s ease, margin-top 0.3s ease"
          }}
        >
          <div className="flex flex-wrap gap-x-4 gap-y-1.5">
            <span className="flex items-center gap-1.5 text-[11px] font-semibold text-white/80">
              <Calendar className="h-3 w-3 flex-shrink-0" style={{ color: `${event.accent}cc` }} />
              {event.date}
            </span>
            <span className="flex items-center gap-1.5 text-[11px] font-semibold text-white/80">
              <MapPin className="h-3 w-3 flex-shrink-0" style={{ color: `${event.accent}cc` }} />
              {event.location}
            </span>
          </div>
        </div>
      </div>

      {/* Hover — accent bottom border */}
      <div
        className="absolute bottom-0 left-0 right-0 h-0.5 transition-all duration-300"
        style={{ backgroundColor: event.accent, opacity: hovered ? 1 : 0 }}
      />
    </div>
  )
}
