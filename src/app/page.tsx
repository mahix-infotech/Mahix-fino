import { Navigation } from "@/components/sections/navigation/navigation"
import { HeroSection } from "@/components/sections/hero/hero-section"
import { ServicesSection } from "@/components/sections/services/services-section"
import { AboutSection } from "@/components/sections/about/about-section"
import { ProjectsSection } from "@/components/sections/projects/projects-section"
import { TestimonialsSection } from "@/components/sections/testimonials/testimonials-section"
import { CTASection } from "@/components/sections/cta/cta-section"
import { Footer } from "@/components/sections/footer/footer"

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navigation />
      <main className="overflow-x-hidden">
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <ProjectsSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}