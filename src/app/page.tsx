import { Navigation } from "@/components/sections/navigation/navigation"
import { HeroSection } from "@/components/sections/hero/hero-section"
import { ServicesSection } from "@/components/sections/services/services-section"
import { AboutSection } from "@/components/sections/about/about-section"
import { ProjectsSection } from "@/components/sections/projects/projects-section"
import { LearningSection } from "@/components/sections/learning/learning-section"
import { TestimonialsSection } from "@/components/sections/testimonials/testimonials-section"
import { CTASection } from "@/components/sections/cta/cta-section"
import { Footer } from "@/components/sections/footer/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  alternates: {
    canonical: "https://mahixinfotech.com",
  },
}

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Mahix InfoTech",
    "url": "https://mahixinfotech.com",
    "logo": "https://mahixinfotech.com/mahix_logo.png",
    "image": "https://mahixinfotech.com/mahix_logo.png",
    "telephone": "+918608610760",
    "email": "hr@mahixinfotech.com",
    "sameAs": [
      "https://facebook.com/mahixinfotech",
      "https://twitter.com/mahixinfotech",
      "https://linkedin.com/company/mahixinfotech",
      "https://instagram.com/mahixinfotech"
    ],
    "address": [
      {
        "@type": "PostalAddress",
        "streetAddress": "Near Gandhipuram Bus Stand",
        "addressLocality": "Coimbatore",
        "addressRegion": "Tamil Nadu",
        "addressCountry": "IN"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "89/4, Scheme Road, Krishna Raja Harini Illam, Near Head Post Office Road",
        "addressLocality": "Dindigul",
        "addressRegion": "Tamil Nadu",
        "postalCode": "624001",
        "addressCountry": "IN"
      }
    ]
  }

  return (
    <div className="min-h-screen overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />
      <main className="overflow-x-hidden">
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <ProjectsSection />
        <LearningSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}