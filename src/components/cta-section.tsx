import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Mail } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Transform Your Business?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
            Let's discuss your project and see how we can help you achieve your digital goals. 
            Get a free consultation and quote today.
          </p>
          <div className="mt-12 flex flex-col items-center justify-center gap-8 sm:flex-row">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Link href="/contact">
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-8">
              <a 
                href="tel:+918608610760" 
                className="flex items-center text-white hover:text-blue-100 transition-colors"
              >
                <Phone className="mr-2 h-5 w-5" />
                <span className="text-lg">+91 8608610760</span>
              </a>
              <a 
                href="mailto:contact@mahixinfotech.com" 
                className="flex items-center text-white hover:text-blue-100 transition-colors"
              >
                <Mail className="mr-2 h-5 w-5" />
                <span className="text-lg">contact@mahixinfotech.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}