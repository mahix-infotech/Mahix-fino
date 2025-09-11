import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"
import { Logo } from "@/components/logo"

const navigation = {
  services: [
    { name: "Web Development", href: "/services/web-development" },
    { name: "Mobile Apps", href: "/services/mobile-apps" },
    { name: "AI & ML Solutions", href: "/services/ai-ml" },
    { name: "Cloud Services", href: "/services/cloud" },
    { name: "SEO & Marketing", href: "/services/seo" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/team" },
    { name: "Careers", href: "/careers" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
  ],
  support: [
    { name: "Contact Us", href: "/contact" },
    { name: "Help Center", href: "/help" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
  ],
  social: [
    {
      name: "Facebook",
      href: "#",
      icon: Facebook,
    },
    {
      name: "Twitter", 
      href: "#",
      icon: Twitter,
    },
    {
      name: "LinkedIn",
      href: "#",
      icon: Linkedin,
    },
    {
      name: "Instagram",
      href: "#",
      icon: Instagram,
    },
  ],
}

export function Footer() {
  return (
    <footer className="bg-gray-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Logo size="lg" className="[&_span]:text-white [&_div]:from-white [&_div]:to-gray-300" />
            </div>
            <p className="mt-4 text-sm text-gray-300">
              Transforming businesses through innovative digital solutions. We specialize in web development, mobile apps, AI/ML, cloud services, and digital marketing.
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex items-center text-sm text-gray-300">
                <MapPin className="mr-2 h-4 w-4" />
                <span>45 Avinashi Road, Coimbatore, Tamil Nadu 641018</span>
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <Phone className="mr-2 h-4 w-4" />
                <span>+91 8608610760</span>
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <Mail className="mr-2 h-4 w-4" />
                <span>contact@mahixinfotech.com</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 lg:col-span-3">
            <div>
              <h3 className="text-sm font-semibold text-white">Services</h3>
              <ul role="list" className="mt-4 space-y-3">
                {navigation.services.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm text-gray-300 hover:text-white transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-white">Company</h3>
              <ul role="list" className="mt-4 space-y-3">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm text-gray-300 hover:text-white transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-white">Support</h3>
              <ul role="list" className="mt-4 space-y-3">
                {navigation.support.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm text-gray-300 hover:text-white transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center justify-between sm:flex-row">
            <div className="flex space-x-6">
              {navigation.social.map((item) => {
                const Icon = item.icon
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <span className="sr-only">{item.name}</span>
                    <Icon className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
            <p className="mt-4 text-sm text-gray-400 sm:mt-0">
              &copy; {new Date().getFullYear()} Mahix InfoTech. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}