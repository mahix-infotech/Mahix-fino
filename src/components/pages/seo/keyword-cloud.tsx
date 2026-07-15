"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface KeywordCloudProps {
  locationName: string
  keywords: string[]
}

export function KeywordCloud({ locationName, keywords }: KeywordCloudProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section className="bg-slate-50 border-y border-slate-100">
      {/* ── Clickable Header (always visible) ── */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full py-6 px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4 group transition-colors hover:bg-slate-100/60 cursor-pointer"
        aria-expanded={isOpen}
      >
        <div className="max-w-2xl text-left">
          <h2 className="text-lg sm:text-xl font-black text-slate-900 leading-snug">
            SEO Search Intent &amp; Capabilities in{" "}
            <span className="text-blue-600">{locationName}</span>
          </h2>
          <p className="mt-1 text-slate-500 text-xs leading-relaxed">
            {isOpen
              ? "Click to collapse — view all keywords we target for this location."
              : "Click to expand — see all the keywords we target for this location."}
          </p>
        </div>

        <div
          className={`flex-shrink-0 h-9 w-9 rounded-full border border-slate-200 bg-white flex items-center justify-center shadow-sm transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          <ChevronDown className="h-4 w-4 text-slate-600" />
        </div>
      </button>

      {/* ── Collapsible Body ── */}
      <div
        className="overflow-hidden transition-all duration-500 ease-in-out"
        style={{
          maxHeight: isOpen ? "9999px" : "0px",
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div className="pb-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <p className="text-center text-slate-500 text-xs sm:text-sm mb-8 leading-relaxed max-w-2xl mx-auto">
              We design and optimize software setups to match exact user queries,
              search criteria, and Google local listings. Below are the key SEO
              optimization themes we target:
            </p>

            <div className="flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto">
              {keywords.map((keyword, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="bg-white border border-slate-200/60 text-slate-600 text-xs font-semibold px-3 py-1.5 rounded-full shadow-xs hover:border-blue-400 hover:bg-blue-50/20 transition-all select-none"
                >
                  {keyword}
                </Badge>
              ))}
            </div>

            {/* Close button at bottom */}
            <div className="mt-8 flex justify-center">
              <button
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-slate-800 border border-slate-200 bg-white rounded-full px-4 py-2 shadow-sm hover:shadow transition-all duration-200"
              >
                <ChevronDown className="h-3.5 w-3.5 rotate-180" />
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
