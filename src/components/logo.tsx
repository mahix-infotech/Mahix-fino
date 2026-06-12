import Link from "next/link"
import Image from "next/image"

interface LogoProps {
  className?: string
  size?: "sm" | "md" | "lg"
}

export function Logo({ className = "", size = "md" }: LogoProps) {
  const sizeMap = {
    sm: { width: 120, height: 40 },
    md: { width: 150, height: 50 },
    lg: { width: 180, height: 60 },
  }

  const { width, height } = sizeMap[size]

  return (
    <Link href="/" className={`flex items-center ${className}`}>
      <Image
        src="/mahix_logo.png"
        alt="Mahix InfoTech"
        width={width}
        height={height}
        className="object-contain"
        priority
      />
    </Link>
  )
}