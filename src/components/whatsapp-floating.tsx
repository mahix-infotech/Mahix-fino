"use client"

import { useState, useRef, useEffect, useCallback } from "react"

export function WhatsAppFloating() {
  const [show, setShow] = useState(false)
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [hasDragged, setHasDragged] = useState(false)

  const buttonRef = useRef<HTMLDivElement>(null)
  const dragStart = useRef<{ mouseX: number; mouseY: number; posX: number; posY: number } | null>(null)

  // Position from bottom-right corner by default
  useEffect(() => {
    setPos({ x: window.innerWidth - 64, y: window.innerHeight - 64 })
    const timer = setTimeout(() => setShow(true), 800)
    return () => clearTimeout(timer)
  }, [])

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    dragStart.current = {
      mouseX: e.clientX,
      mouseY: e.clientY,
      posX: pos.x,
      posY: pos.y,
    }
    setIsDragging(true)
    setHasDragged(false)
  }, [pos])

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    const touch = e.touches[0]
    dragStart.current = {
      mouseX: touch.clientX,
      mouseY: touch.clientY,
      posX: pos.x,
      posY: pos.y,
    }
    setIsDragging(true)
    setHasDragged(false)
  }, [pos])

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (!dragStart.current) return
      const dx = e.clientX - dragStart.current.mouseX
      const dy = e.clientY - dragStart.current.mouseY
      if (Math.abs(dx) > 3 || Math.abs(dy) > 3) setHasDragged(true)

      const newX = Math.min(Math.max(dragStart.current.posX + dx, 0), window.innerWidth - 44)
      const newY = Math.min(Math.max(dragStart.current.posY + dy, 0), window.innerHeight - 44)
      setPos({ x: newX, y: newY })
    }

    const onTouchMove = (e: TouchEvent) => {
      if (!dragStart.current) return
      const touch = e.touches[0]
      const dx = touch.clientX - dragStart.current.mouseX
      const dy = touch.clientY - dragStart.current.mouseY
      if (Math.abs(dx) > 3 || Math.abs(dy) > 3) setHasDragged(true)

      const newX = Math.min(Math.max(dragStart.current.posX + dx, 0), window.innerWidth - 44)
      const newY = Math.min(Math.max(dragStart.current.posY + dy, 0), window.innerHeight - 44)
      setPos({ x: newX, y: newY })
      e.preventDefault()
    }

    const onUp = () => {
      dragStart.current = null
      setIsDragging(false)
    }

    window.addEventListener("mousemove", onMouseMove)
    window.addEventListener("mouseup", onUp)
    window.addEventListener("touchmove", onTouchMove, { passive: false })
    window.addEventListener("touchend", onUp)

    return () => {
      window.removeEventListener("mousemove", onMouseMove)
      window.removeEventListener("mouseup", onUp)
      window.removeEventListener("touchmove", onTouchMove)
      window.removeEventListener("touchend", onUp)
    }
  }, [])

  const handleClick = () => {
    if (hasDragged) return
    window.open(
      "https://wa.me/919688896510?text=Hi%20Mahix%20InfoTech%2C%20I%20would%20like%20to%20make%20an%20enquiry%20about%20your%20services.",
      "_blank",
      "noopener,noreferrer"
    )
  }

  if (!show) return null

  return (
    <div
      ref={buttonRef}
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
      onClick={handleClick}
      className="fixed z-50 flex items-center justify-center group"
      style={{
        left: pos.x,
        top: pos.y,
        cursor: isDragging ? "grabbing" : "grab",
        userSelect: "none",
        touchAction: "none",
      }}
      aria-label="Chat on WhatsApp"
    >
      {/* Tooltip */}
      {!isDragging && (
        <span className="absolute -top-9 left-1/2 -translate-x-1/2 scale-0 transition-all duration-200 origin-bottom group-hover:scale-100 bg-slate-900 text-white text-[11px] font-bold px-2.5 py-1 rounded-lg shadow-lg whitespace-nowrap pointer-events-none select-none">
          WhatsApp Us 💬
        </span>
      )}

      {/* Ripple */}
      <span className="absolute inline-flex h-10 w-10 rounded-full bg-emerald-400/30 animate-ping pointer-events-none" />

      {/* Button */}
      <div className={`relative flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-xl transition-all duration-200 ${isDragging ? "scale-95 shadow-md" : "hover:scale-110"}`}>
        <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.705 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </div>
    </div>
  )
}
