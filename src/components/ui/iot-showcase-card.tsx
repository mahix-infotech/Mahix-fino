"use client"

import React from "react"
import Image from "next/image"
import { FileText, Globe, Shirt, Flame, Zap, Navigation, Radio, Fingerprint } from "lucide-react"

const iconMap = {
  shirt: Shirt,
  flame: Flame,
  zap: Zap,
  navigation: Navigation,
  radio: Radio,
  fingerprint: Fingerprint,
}

export type IconName = keyof typeof iconMap

export interface IotShowcaseCardProps {
  title: string
  description: string
  imageSrc?: string
  iconName?: IconName
  pdfUrl?: string
  demoUrl?: string
}

export function IotShowcaseCard({
  title = "Garment IOT Solution",
  description = "Complete Garments Protection System and Real Time Data.",
  imageSrc = "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800",
  iconName = "shirt",
  pdfUrl = "/Assets/PDF/g1.pdf",
  demoUrl = "http://103.125.154.118:8080/skiot/",
}: IotShowcaseCardProps) {
  const IconComponent = iconMap[iconName] || Shirt

  return (
    <div className="w-full max-w-md mx-auto rounded-3xl bg-[#f2f6fa] dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between">
      <div>
        {/* ── TOP IMAGE BANNER WITH FLOATING ICON BADGE ── */}
        <div className="relative w-full h-52 sm:h-56 rounded-2xl overflow-hidden bg-slate-200 dark:bg-slate-800 mb-6">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover object-center"
          />

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

          {/* Floating Icon Badge on bottom right */}
          <div className="absolute bottom-3 right-3 bg-white/95 dark:bg-slate-900/90 backdrop-blur-sm p-3 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-800 flex items-center justify-center">
            <IconComponent className="h-7 w-7 text-blue-600 dark:text-blue-400" />
          </div>
        </div>

        {/* ── CARD CONTENT ── */}
        <div className="px-1 mb-6">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#112347] dark:text-white tracking-tight mb-2">
            {title}
          </h3>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-medium leading-snug">
            {description}
          </p>
        </div>
      </div>

      {/* ── ACTION BUTTONS ── */}
      <div className="flex flex-col gap-3 pt-2">
        {/* PDF Button */}
        {pdfUrl ? (
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-40 sm:w-44 py-2.5 px-5 rounded-full bg-[#39dbee] hover:bg-[#2cc5d7] active:scale-95 text-slate-950 font-black text-sm tracking-wide flex items-center justify-center gap-2 shadow-sm transition-all duration-200 cursor-pointer"
          >
            <FileText className="h-4 w-4 stroke-[2.5]" />
            <span>PDF</span>
          </a>
        ) : null}

        {/* Demo Online Button */}
        {demoUrl ? (
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-48 sm:w-52 py-2.5 px-5 rounded-full bg-[#188048] hover:bg-[#136b3b] active:scale-95 text-white font-extrabold text-sm tracking-wide flex items-center justify-center gap-2 shadow-sm transition-all duration-200 cursor-pointer"
          >
            <Globe className="h-4 w-4 stroke-[2.5]" />
            <span>Demo Online</span>
          </a>
        ) : null}
      </div>
    </div>
  )
}
