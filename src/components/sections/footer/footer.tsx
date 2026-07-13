"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ArrowRight } from "lucide-react"
import { Logo } from "@/components/logo"

const navigation = {
  services: [
    { name: "Digital Commerce & Marketing", href: "/services" },
    { name: "Software Development", href: "/services" },
    { name: "Advanced Technologies", href: "/services" },
    { name: "Business Solutions", href: "/services" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/about" }, // Linking to about since team isn't a route
    { name: "Careers", href: "/careers" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
  ],
  support: [
    { name: "Contact Us", href: "/contact" },
    { name: "Help Center", href: "/contact" },
    { name: "Privacy Policy", href: "/contact" },
    { name: "Terms of Service", href: "/contact" },
  ],
  social: [
    {
      name: "Facebook",
      href: "https://facebook.com/mahixinfotech",
      icon: Facebook,
    },
    {
      name: "Twitter", 
      href: "https://twitter.com/mahixinfotech",
      icon: Twitter,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/company/mahixinfotech",
      icon: Linkedin,
    },
    {
      name: "Instagram",
      href: "https://instagram.com/mahixinfotech",
      icon: Instagram,
    },
  ],
}

export function Footer() {
  const pathname = usePathname()

  return (
    <footer className="relative overflow-hidden bg-[#09090b] text-zinc-400 border-t border-zinc-900" aria-labelledby="footer-heading">
      {/* Embedded Google Map - Displays ONLY on the /contact page */}
      {pathname === "/contact" && (
        <div className="w-full h-[400px] border-b border-zinc-800/60 overflow-hidden relative z-10">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3924.574!2d77.9695!3d10.3624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c58db3e6c12d%3A0x4b7a2f3e5b8d3c5e!2sDindigul%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1760683209544!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true}
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full opacity-90 contrast-[95%] dark:opacity-80"
          />
        </div>
      )}

      {/* Decorative gradient glowing orb */}
      <div className="absolute -bottom-24 -right-24 w-[300px] h-[300px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -top-24 -left-24 w-[300px] h-[300px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />

      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          
          {/* Logo & Intro Column (Compact) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div>
              <Logo size="md" className="[&_span]:text-white [&_div]:from-emerald-400 [&_div]:to-indigo-500" />
            </div>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-sm">
              Transforming businesses through innovative digital solutions. We specialize in custom software systems, scalable cloud services, and search engine optimization.
            </p>
          </div>
          
          {/* Links & Contact Columns on the Right */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            <div className="sm:col-span-2 lg:col-span-2">
              <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-200">Services</h3>
              <ul role="list" className="mt-4 space-y-3">
                {navigation.services.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-xs sm:text-sm text-zinc-400 hover:text-white transition-all duration-250 flex items-center group relative pl-0 hover:pl-4">
                      <ArrowRight className="absolute left-0 h-3 w-3 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 text-emerald-500 flex-shrink-0" />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="col-span-1">
              <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-200">Company</h3>
              <ul role="list" className="mt-4 space-y-3">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-xs sm:text-sm text-zinc-400 hover:text-white transition-all duration-250 flex items-center group relative pl-0 hover:pl-4">
                      <ArrowRight className="absolute left-0 h-3 w-3 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 text-emerald-500 flex-shrink-0" />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="col-span-1">
              <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-200">Support</h3>
              <ul role="list" className="mt-4 space-y-3">
                {navigation.support.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-xs sm:text-sm text-zinc-400 hover:text-white transition-all duration-250 flex items-center group relative pl-0 hover:pl-4">
                      <ArrowRight className="absolute left-0 h-3 w-3 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 text-emerald-500 flex-shrink-0" />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Address & Contact Info (Properly aligned spanning 2 columns) */}
            <div className="sm:col-span-2 lg:col-span-2">
              <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-200">Contact Us</h3>
              <p className="mt-4 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                89/4, Scheme Road, Krishna Raja Harini Illam, Near Head Post Office Road, Dindigul, Tamil Nadu 624001, India.
              </p>
              <div className="mt-3.5 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm text-zinc-400">
                <a href="tel:+918608610760" className="flex items-center hover:text-white transition-colors whitespace-nowrap">
                  <Phone className="mr-2 h-4 w-4 text-emerald-500 flex-shrink-0" />
                  <span>+91 8608610760</span>
                </a>
                <span className="hidden md:inline text-zinc-800">|</span>
                <a href="mailto:hr@mahixinfotech.com" className="flex items-center hover:text-white transition-colors whitespace-nowrap">
                  <Mail className="mr-2 h-4 w-4 text-emerald-500 flex-shrink-0" />
                  <span>hr@mahixinfotech.com</span>
                </a>
              </div>
            </div>
          </div>

        </div>
        
        {/* Bottom bar */}
        <div className="mt-12 border-t border-zinc-900 pt-6 flex flex-col items-center justify-between sm:flex-row gap-4">
          <p className="text-[10px] sm:text-xs text-zinc-500 text-center sm:text-left order-2 sm:order-1">
            &copy; {new Date().getFullYear()} Mahix InfoTech. All rights reserved.
          </p>
          <div className="flex space-x-3.5 order-1 sm:order-2">
            {navigation.social.map((item) => {
              const Icon = item.icon
              return (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-900 text-zinc-400 hover:bg-zinc-800 hover:text-white hover:scale-105 transition-all duration-300"
                >
                  <span className="sr-only">{item.name}</span>
                  <Icon className="h-4 w-4" />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}
