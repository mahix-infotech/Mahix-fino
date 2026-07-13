import { Navigation } from "@/components/sections/navigation/navigation"
import { Footer } from "@/components/sections/footer/footer"
import { BlogList } from "@/components/pages/blog/blog-list"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog & Insights - Tech Tutorials & Guides | Mahix InfoTech",
  description: "Read the latest technology blogs, development guides, and software engineering insights from the digital innovators at Mahix InfoTech.",
  keywords: "blog Mahix InfoTech, software development tutorial, web engineering insights, AI marketing blogs",
}

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-background py-20 flex flex-col items-center justify-center">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/10 rounded-full blur-[100px] pointer-events-none animate-pulse" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-6xl max-w-3xl leading-[1.1]">
              Blog &{" "}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
                Insights
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              Insights, tutorials, and industry trends from our team of tech experts and digital innovators.
            </p>
          </div>
        </section>

        {/* Blog List (Modular client component with filters) */}
        <BlogList />

      </main>
      <Footer />
    </div>
  )
}