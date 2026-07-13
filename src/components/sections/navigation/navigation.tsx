"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, ChevronDown, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { Logo } from "@/components/logo"

const serviceCategories = [
  {
    category: "DIGITAL COMMERCE & MARKETING",
    items: [
      { title: "E-commerce Development", href: "/services/e-commerce-development" },
      { title: "Digital Marketing", href: "/services/digital-marketing" },
      { title: "SEO Optimization", href: "/services/seo" },
      { title: "Google Ads", href: "/services/google-ads" },
      { title: "Meta Ads", href: "/services/meta-ads" }
    ]
  },
  {
    category: "SOFTWARE DEVELOPMENT",
    items: [
      { title: "Web Development", href: "/services/web-development" },
      { title: "Mobile App Development", href: "/services/mobile-apps" },
      { title: "Custom Software", href: "/services/custom-software" },
      { title: "Shopify Development", href: "/services/shopify-development" }
    ]
  },
  {
    category: "ADVANCED TECHNOLOGIES",
    items: [
      { title: "Cloud Services", href: "/services/cloud" },
      { title: "AI & ML", href: "/services/ai-ml" }
    ]
  },
  {
    category: "BUSINESS SOLUTIONS",
    items: [
      { title: "CRM Solutions", href: "/services/crm-solutions" },
      { title: "IT Consulting", href: "/services/it-consulting" },
      { title: "Digital Transformation", href: "/services/digital-transformation" }
    ]
  }
]

export function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [servicesOpen, setServicesOpen] = React.useState(false)
  const [mobileMenuState, setMobileMenuState] = React.useState<"main" | "services">("main")
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  }

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open)
    if (!open) {
      setTimeout(() => setMobileMenuState("main"), 300)
    }
  }

  const navLinks = [
    { label: "HOME", href: "/" },
    { label: "ABOUT", href: "/about" },
    { label: "SERVICES", href: "/services", isDropdown: true },
    { label: "CAREERS", href: "/careers" },
    { label: "CONTACT", href: "/contact" }
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-40 w-full border-b border-black/[0.05] dark:border-white/[0.08] bg-background/95 transition-colors duration-200">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8 relative">
        
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <Logo size="md" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-5 lg:gap-8">
          {navLinks.map((link) => {
            if (link.isDropdown) {
              return (
                <div
                  key={link.label}
                  className="relative py-6"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button
                    className={cn(
                      "flex items-center gap-1 text-[13px] font-bold uppercase tracking-wider transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400 relative cursor-pointer",
                      isActive(link.href) || servicesOpen
                        ? "text-blue-600 dark:text-blue-400 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-blue-600 dark:after:bg-blue-400"
                        : "text-muted-foreground"
                    )}
                  >
                    {link.label}
                    <ChevronDown className={cn("h-4 w-4 transition-transform duration-300 text-blue-600 dark:text-blue-400", servicesOpen && "rotate-180")} />
                  </button>
                </div>
              )
            }

            return (
              <Link
                key={link.label}
                href={link.href}
                prefetch={false}
                className={cn(
                  "py-6 text-[13px] font-bold uppercase tracking-wider transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400 relative",
                  isActive(link.href)
                    ? "text-blue-600 dark:text-blue-400 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-blue-600 dark:after:bg-blue-400"
                    : "text-muted-foreground"
                )}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        {/* Desktop Mega-Menu Dropdown */}
        <div 
          className={cn(
            "hidden md:block absolute left-4 right-4 lg:left-8 lg:right-8 top-full bg-background border border-black/[0.05] dark:border-white/[0.08] p-8 rounded-none shadow-xl transition-all duration-200 origin-top z-40",
            servicesOpen ? "opacity-100 scale-100 translate-y-0 pointer-events-auto" : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
          )}
          onMouseEnter={() => setServicesOpen(true)}
          onMouseLeave={() => setServicesOpen(false)}
        >
          {/* 4 Columns Mega Menu */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {serviceCategories.map((category) => (
              <div key={category.category} className="flex flex-col gap-3">
                <h4 className="text-[13px] font-bold text-slate-800 dark:text-slate-200 border-l-[3px] border-blue-600 dark:border-blue-500 pl-2.5 tracking-wider uppercase select-none">
                  {category.category}
                </h4>
                <div className="flex flex-col gap-1.5 mt-2">
                  {category.items.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      prefetch={false}
                      onClick={() => setServicesOpen(false)}
                      className="flex items-center text-[13px] font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-1 group"
                    >
                      <span className="text-blue-500 dark:text-blue-400 font-semibold mr-2 transition-transform duration-200 group-hover:translate-x-0.5 select-none">
                        &gt;
                      </span>
                      <span>{item.title}</span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Footer Bar */}
          <div className="border-t border-black/[0.05] dark:border-white/[0.08] mt-8 pt-4 flex items-center justify-between">
            <div className="flex items-center text-xs">
              <Link
                href="/services"
                prefetch={false}
                onClick={() => setServicesOpen(false)}
                className="font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors flex items-center gap-1 group/footer"
              >
                View All Services
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/footer:translate-x-0.5" />
              </Link>
              <span className="mx-3.5 text-slate-300 dark:text-slate-700 select-none">|</span>
              <Link
                href="/contact"
                prefetch={false}
                onClick={() => setServicesOpen(false)}
                className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4 text-slate-400"
                >
                  <path d="M3 4a2 2 0 0 0-2 2v1.161l8.441 4.221a1.25 1.25 0 0 0 1.118 0L19 7.162V6a2 2 0 0 0-2-2H3Z" />
                  <path d="M19 8.839 10.559 13.06a2.25 2.25 0 0 1-2.018 0L1 8.839V14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.839Z" />
                </svg>
                Need Help? Contact Us
              </Link>
            </div>
            <div className="text-xs text-slate-400 dark:text-slate-500 font-bold select-none">
              14+ Services Available
            </div>
          </div>
        </div>

        {/* CTA Actions */}
        <div className="hidden md:flex items-center gap-4">
          <Button 
            asChild 
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-lg border-none hover:scale-105 transition-all duration-300 px-6 py-2.5 font-medium text-[13px] tracking-wide flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <Link href="/contact" prefetch={false}>
              Get Started
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="flex md:hidden">
          <Sheet open={isOpen} onOpenChange={handleOpenChange}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full cursor-pointer">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[320px] border-l border-black/[0.05] dark:border-white/[0.08] bg-background p-6 flex flex-col">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              
              <div className="flex items-center justify-between mt-4 select-none">
                <Logo size="md" />
              </div>

              {/* Sliding Container */}
              <div className="relative overflow-hidden w-full flex-grow mt-6">
                
                {/* Main Menu Panel */}
                <div 
                  className={cn(
                    "transition-all duration-300 flex flex-col gap-6 w-full h-full absolute top-0 left-0",
                    mobileMenuState === "main" ? "translate-x-0 opacity-100 pointer-events-auto" : "-translate-x-full opacity-0 pointer-events-none"
                  )}
                >
                  <nav className="flex flex-col gap-4">
                    <Link
                      href="/"
                      prefetch={false}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "text-[15px] font-bold uppercase tracking-wider py-1 transition-colors",
                        pathname === "/" ? "text-blue-600 dark:text-blue-400" : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      Home
                    </Link>

                    <button
                      onClick={() => setMobileMenuState("services")}
                      className="text-[15px] font-bold uppercase tracking-wider py-1 text-left text-muted-foreground hover:text-foreground flex items-center justify-between cursor-pointer w-full"
                    >
                      <span>Services</span>
                      <ArrowRight className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                    </button>

                    <Link
                      href="/about"
                      prefetch={false}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "text-[15px] font-bold uppercase tracking-wider py-1 transition-colors",
                        pathname === "/about" ? "text-blue-600 dark:text-blue-400" : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      About
                    </Link>
                    <Link
                      href="/careers"
                      prefetch={false}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "text-[15px] font-bold uppercase tracking-wider py-1 transition-colors",
                        pathname === "/careers" ? "text-blue-600 dark:text-blue-400" : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      Careers
                    </Link>
                    <Link
                      href="/contact"
                      prefetch={false}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "text-[15px] font-bold uppercase tracking-wider py-1 transition-colors",
                        pathname === "/contact" ? "text-blue-600 dark:text-blue-400" : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      Contact
                    </Link>
                  </nav>

                  <Button asChild className="w-full rounded-xl bg-blue-600 hover:bg-blue-700 text-white border-none mt-auto py-2.5 cursor-pointer">
                    <Link href="/contact" prefetch={false} onClick={() => setIsOpen(false)}>Get Started</Link>
                  </Button>
                </div>

                {/* Services Panel */}
                <div 
                  className={cn(
                    "transition-all duration-300 flex flex-col gap-4 w-full h-full absolute top-0 left-0 bg-background/95",
                    mobileMenuState === "services" ? "translate-x-0 opacity-100 pointer-events-auto" : "translate-x-full opacity-0 pointer-events-none"
                  )}
                >
                  <button
                    onClick={() => setMobileMenuState("main")}
                    className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 transition-colors flex items-center gap-1.5 py-2 cursor-pointer uppercase tracking-wider select-none border-b border-black/[0.05] dark:border-white/[0.08] mb-2 w-full text-left"
                  >
                    <span className="text-sm font-semibold">&larr;</span> Back to Menu
                  </button>

                  <div className="flex flex-col gap-4 overflow-y-auto max-h-[70vh] pr-2 pb-10">
                    {serviceCategories.map((category) => (
                      <div key={category.category} className="flex flex-col gap-2">
                        <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider border-l-2 border-blue-600 pl-2">
                          {category.category}
                        </span>
                        <div className="flex flex-col gap-2.5 pl-3 border-l border-black/[0.05] dark:border-white/[0.08]">
                          {category.items.map((item) => (
                            <Link
                              key={item.title}
                              href={item.href}
                              prefetch={false}
                              onClick={() => setIsOpen(false)}
                              className={cn(
                                "text-[13px] font-medium py-0.5 transition-colors flex items-center group",
                                pathname === item.href ? "text-blue-600 dark:text-blue-400 font-semibold" : "text-muted-foreground hover:text-foreground"
                              )}
                            >
                              <span className="text-blue-500 mr-2 select-none">&gt;</span>
                              {item.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </header>
  )
}


