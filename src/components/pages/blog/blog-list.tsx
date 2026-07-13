"use client"

import * as React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Clock, Search, BookOpen, Rss, ArrowRight } from "lucide-react"
import Link from "next/link"

const blogPosts = [
  {
    id: "post-1",
    title: "Navigating Next.js 15 App Router: Best Practices",
    description: "Learn how to optimize routing, utilize React Server Components (RSC), and leverage the new caching primitives in Next.js 15 for faster initial load times.",
    date: "July 01, 2026",
    readTime: "5 min read",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop&crop=center",
    tags: ["Next.js", "React", "Web Engineering"]
  },
  {
    id: "post-2",
    title: "Scaling Mobile Apps with Cross-Platform Architectures",
    description: "An in-depth analysis of Flutter vs React Native for enterprise mobile application architectures. Discover how to choose the right framework for your product.",
    date: "June 25, 2026",
    readTime: "7 min read",
    category: "Mobile Apps",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop&crop=center",
    tags: ["React Native", "Flutter", "Mobile Engineering"]
  },
  {
    id: "post-3",
    title: "Practical AI Integrations for SaaS Applications",
    description: "How to integrate large language models (LLMs) and predictive analytics nodes into standard business workflows to boost user conversions and automate customer support.",
    date: "June 18, 2026",
    readTime: "8 min read",
    category: "AI & ML",
    image: "https://images.unsplash.com/photo-1677442136019-21780efad99a?w=600&h=400&fit=crop&crop=center",
    tags: ["AI", "Machine Learning", "SaaS"]
  },
  {
    id: "post-4",
    title: "Reducing Cloud Infrastructure Costs by 60% on AWS",
    description: "A detailed migration study outlining serverless architectures, node scaling configurations, and infrastructure-as-code automation that successfully optimized cloud costs.",
    date: "June 10, 2026",
    readTime: "6 min read",
    category: "Cloud Services",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop&crop=center",
    tags: ["AWS", "DevOps", "Serverless"]
  }
]

const categories = ["All", "Web Development", "Mobile Apps", "AI & ML", "Cloud Services"]

export function BlogList() {
  const [selectedCategory, setSelectedCategory] = React.useState("All")
  const [searchQuery, setSearchQuery] = React.useState("")

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Filters and Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-16 border-b border-black/[0.05] dark:border-white/[0.08] pb-10">
          
          {/* Categories */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              type="text" 
              placeholder="Search articles..." 
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="pl-11 rounded-full border-black/[0.08] dark:border-white/[0.1] bg-background/50 focus:ring-2 w-full"
            />
          </div>

        </div>

        {/* Blog Grid */}
        {filteredPosts.length === 0 ? (
          <div className="text-center py-20 border border-dashed border-black/[0.08] dark:border-white/[0.08] rounded-3xl bg-accent/[0.02]">
            <p className="text-muted-foreground text-lg">No articles found.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {filteredPosts.map((post) => (
              <Card key={post.id} className="relative overflow-hidden border border-black/[0.05] dark:border-white/[0.08] bg-background/50 backdrop-blur-md rounded-3xl hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 group flex flex-col md:flex-row justify-between h-[360px] md:h-[240px]">
                
                {/* Image */}
                <div className="relative w-full md:w-48 h-48 md:h-full overflow-hidden rounded-t-[23px] md:rounded-tr-none md:rounded-l-[23px] flex-shrink-0">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-background/90 text-foreground font-semibold hover:bg-background/90 backdrop-blur-sm shadow-md rounded-full px-2.5 py-0.5 text-[10px]">
                      {post.category}
                    </Badge>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-2">
                      <span>{post.date}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        {post.readTime}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-foreground tracking-tight leading-snug group-hover:text-primary transition-colors line-clamp-1">
                      {post.title}
                    </h3>
                    
                    <p className="text-xs text-muted-foreground leading-relaxed mt-2.5 line-clamp-2">
                      {post.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between border-t border-black/[0.04] dark:border-white/[0.04] pt-4 mt-4">
                    <div className="flex gap-1">
                      {post.tags.slice(0, 2).map(tag => (
                        <Badge key={tag} variant="secondary" className="rounded-full text-[9px] px-2 py-0 bg-accent/40 text-muted-foreground border-none uppercase tracking-wider font-bold">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <Button variant="ghost" size="sm" className="rounded-full group/btn text-xs text-primary font-semibold flex items-center p-0 hover:bg-transparent" asChild>
                      <Link href="/contact">
                        Read Article
                        <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </div>

              </Card>
            ))}
          </div>
        )}

        {/* Subscribe Banner */}
        <Card className="rounded-3xl border border-purple-500/20 bg-purple-500/5 backdrop-blur-md p-8 text-center flex flex-col items-center justify-center mt-16 max-w-4xl mx-auto">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 border border-purple-200 dark:border-purple-800/30 mb-4">
            <Rss className="h-5 w-5" />
          </div>
          <h3 className="text-xl font-bold text-foreground">Subscribe to our Newsletter</h3>
          <p className="text-muted-foreground mt-3 max-w-lg leading-relaxed text-sm">
            Get the latest insights, tutorial guides, and technology articles delivered directly to your inbox every month.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mt-8 w-full max-w-md">
            <Input type="email" placeholder="Your Email Address" className="rounded-full border-black/[0.08] dark:border-white/[0.1] bg-background/50 focus:ring-2 w-full" />
            <Button size="lg" className="rounded-full shadow-lg hover:shadow-primary/20 flex-shrink-0" asChild>
              <Link href="/contact">Get Notified</Link>
            </Button>
          </div>
        </Card>

      </div>
    </section>
  )
}
