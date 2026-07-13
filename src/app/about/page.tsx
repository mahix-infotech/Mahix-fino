import { Navigation } from "@/components/sections/navigation/navigation"
import { Footer } from "@/components/sections/footer/footer"
import { AboutTimeline } from "@/components/pages/about/about-timeline"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us - Mahix InfoTech | Software Development Company",
  description: "Learn about Mahix InfoTech, our story, core values, and our mission to transform businesses through cutting-edge web development, mobile apps, and AI/ML solutions.",
  keywords: "about Mahix InfoTech, software development company story, company values, digital transformation mission",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800">
      <Navigation />
      
      <main>
        {/* ══ 1. About Page Hero Section ══════════════════════════════════════ */}
        <section 
          className="relative overflow-hidden bg-cover bg-center py-28 lg:py-36 flex flex-col items-center justify-center text-center text-white"
          style={{ 
            backgroundImage: `linear-gradient(to bottom, rgba(15, 23, 42, 0.82), rgba(9, 9, 11, 0.9)), url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1600')` 
          }}
        >
          {/* Subtle grid pattern overlay for texture */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30 pointer-events-none" />

          <div className="relative mx-auto max-w-4xl px-6 sm:px-10 flex flex-col items-center z-10">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              About Mahix InfoTech
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-base sm:text-lg text-slate-300 leading-relaxed">
              We design, build, and scale digital engineering solutions that drive long-term business value.
            </p>
          </div>
        </section>

        {/* ══ 2. Story / Content Alternating Rows ════════════════════════════ */}
        <section className="py-12 pb-24">
          <div className="mx-auto max-w-[1100px] px-6 sm:px-10 flex flex-col gap-24">
            
            {/* Row 1: About (Text Left, Image Right) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
              <div className="flex flex-col gap-4">
                <div className="border-l-4 border-blue-600 pl-4">
                  <h2 className="text-2xl font-bold tracking-tight text-slate-900">About</h2>
                </div>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Mahix InfoTech is a digital engineering platform built on technical excellence and customer success. We bring together developers, cloud architects, designers, and consultants to deliver robust software solutions. We specialize in custom software, cloud migration, AI/ML systems, and performance SEO. Our commitment is to translate complex business goals into simple, high-performing digital environments.
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-md border border-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800&h=500"
                  alt="Team Collaboration"
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>

            {/* Row 2: Vision (Image Left, Text Right) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center md:flex-row-reverse">
              <div className="rounded-2xl overflow-hidden shadow-md border border-slate-100 order-2 md:order-1">
                <img
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800&h=500"
                  alt="Future Technology Nodes Network"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="flex flex-col gap-4 order-1 md:order-2">
                <div className="border-l-4 border-blue-600 pl-4">
                  <h2 className="text-2xl font-bold tracking-tight text-slate-900">Vision</h2>
                </div>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  To build a globally recognized tech ecosystems where businesses effortlessly scale, automate, and leverage modern digital architectures. We envision a future where high-grade software engineering is accessible to growing enterprises, empowering them to drive innovation, resilience, and collaborative success in their markets.
                </p>
              </div>
            </div>

            {/* Row 3: Mission (Text Left, Image Right) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
              <div className="flex flex-col gap-4">
                <div className="border-l-4 border-blue-600 pl-4">
                  <h2 className="text-2xl font-bold tracking-tight text-slate-900">Mission</h2>
                </div>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  To provide top-tier software engineering, cloud optimization, and digital growth services tailored to unique business models. We strive to guide brands back to operational simplicity, helping them deploy secure, scalable products that build trust with customers, stakeholders, and long-term partners.
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-md border border-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=500"
                  alt="Business Growth Analytics"
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>

          </div>
        </section>

        {/* ══ 3. Our Story Timeline ══════════════════════════════════════════ */}
        <AboutTimeline />

      </main>

      <Footer />
    </div>
  )
}