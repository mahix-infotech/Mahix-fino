import Link from "next/link"

interface LogoProps {
  className?: string
  size?: "sm" | "md" | "lg"
}

export function Logo({ className = "", size = "md" }: LogoProps) {
  const sizeClasses = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl"
  }

  return (
    <Link href="/" className={`flex items-center space-x-2 ${className}`}>
      <div className="relative">
        {/* Icon/Symbol */}
        <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg">
          <span className="text-white font-bold text-sm">M</span>
        </div>
        {/* Small accent dot */}
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-orange-400 to-red-500 rounded-full"></div>
      </div>
      <div className="flex flex-col">
        <span className={`font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent ${sizeClasses[size]}`}>
          Mahix
        </span>
        <span className={`text-gray-600 font-medium text-xs -mt-1`}>
          InfoTech
        </span>
      </div>
    </Link>
  )
}