"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function AboutSection() {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden" style={{ backgroundColor: "#f3f4f6" }}>
      <style>{`
        .about-title {
          font-family: Garamond, Baskerville, "Playfair Display", Georgia, serif;
          font-weight: 400;
          color: #1a0f07;
          line-height: 1;
        }
        .about-text {
          font-family: system-ui, -apple-system, sans-serif;
          color: #40362c;
        }
        .about-lead {
          font-family: system-ui, -apple-system, sans-serif;
          color: #1a0f07;
          line-height: 1.4;
        }
        .about-portrait {
          width: 100%;
          height: 380px;
          object-fit: cover;
          filter: grayscale(40%) contrast(95%) sepia(20%);
          border-radius: 4px;
        }
        .about-landscape {
          width: 100%;
          height: 280px;
          object-fit: cover;
          filter: grayscale(40%) contrast(95%) sepia(20%);
          border-radius: 4px;
        }
      `}</style>

      <div className="mx-auto max-w-[1300px] px-6 sm:px-10 lg:px-14">
        {/* Mobile Layout (Visible on screens smaller than lg) */}
        <div className="flex flex-col lg:hidden gap-10">
          <div className="flex justify-between items-center border-b border-black/10 pb-4">
            <h2 className="about-title text-5xl">About us</h2>
            <span className="text-[11px] uppercase tracking-widest text-[#8b7a6b] font-bold">/ Who We Are</span>
          </div>

          <div className="relative w-full">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800&h=600"
              alt="Our Creative Studio"
              className="w-full h-64 object-cover rounded"
              style={{ filter: "grayscale(40%) sepia(20%)" }}
            />
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="about-lead text-2xl font-normal tracking-tight">
              <strong className="font-semibold">Mahix InfoTech</strong> is more than software development — it&apos;s a digital space for brands to reconnect with innovation and build lasting value.
            </h3>

            <div className="about-text text-[14px] leading-relaxed space-y-5 text-slate-700">
              <p>
                Here, developers, creatives, technical guides, and problem solvers work side by side. Some come to automate, others to build secure architectures, and many to simply find a digital presence that belongs only to them.
              </p>
              <p>
                We offer engineering of all scales — web platforms, mobile apps, custom systems, and cloud architectures — because we know every company&apos;s journey speaks a different language each day.
              </p>
              <p>
                Our mission is simple: to help you return to simplicity, build with absolute focus, and carry that technical quality back into your market — to your customers, your partners, and your team.
              </p>
              <p>
                Because when a brand is built with true engineering excellence, the industry around it begins to thrive.
              </p>
            </div>

            {/* Know More Button */}
            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1a0f07] text-[#f3f4f6] text-sm font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-md"
              >
                Know More
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Desktop Layout (Visible on lg screens and up) */}
        <div className="hidden lg:grid grid-cols-12 gap-10 items-start">
          
          {/* Column 1 (Left) — Portrait Image */}
          <div className="col-span-3 pt-6">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600&h=800"
                alt="Leadership Team Member"
                className="about-portrait shadow-sm"
              />
            </div>
          </div>

          {/* Column 2 (Center) — Main Storytelling Copy */}
          <div className="col-span-6 px-4">
            <div className="flex flex-col gap-8">
              {/* Lead Text */}
              <h3 className="about-lead text-3xl font-light tracking-tight mt-6">
                <span className="font-semibold">Mahix InfoTech</span> is more than<br />
                software development — it&apos;s a space for<br />
                brands to reconnect with innovation and<br />
                build lasting value.
              </h3>

              {/* Body Text Blocks */}
              <div className="about-text text-[14.5px] leading-relaxed space-y-6 text-[#5c4f43]">
                <p>
                  Here, developers, designers, product minds, and cloud engineers collaborate side by side. Some come to deploy custom web environments, others to optimize cloud operations, and many to simply define a secure product ecosystem that belongs only to them.
                </p>
                <p>
                  We offer digital engineering of all complexities — web frameworks, cross-platform apps, predictive analytics, and automated cloud setups — because we know every business path speaks a unique language each day.
                </p>
                <p>
                  Our mission is simple: to help you return to stability, scale your operations, and carry that technical focus back into your market — to your clients, your partners, your team, and your long-term success.
                </p>
                <p>
                  Because when a company is fully supported, the tech environment around it begins to shine.
                </p>
              </div>

              {/* Know More Button */}
              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#1a0f07] text-[#f3f4f6] text-sm font-semibold hover:bg-opacity-90 hover:scale-105 transition-all duration-300 shadow-md w-fit"
                >
                  Know More
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Column 3 (Right) — Title at Top, Landscape Image at Bottom */}
          <div className="col-span-3 flex flex-col justify-between min-h-[640px]">
            {/* Title right aligned */}
            <div className="text-right">
              <h2 className="about-title text-[4rem] xl:text-[5rem] whitespace-nowrap lg:-ml-28 pr-2">About us</h2>
            </div>

            {/* Bottom overlap landscape photo */}
            <div className="relative mt-auto">
              <img
                src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&q=80&w=600&h=450"
                alt="Creative Collaboration Workspace"
                className="about-landscape shadow-sm"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
