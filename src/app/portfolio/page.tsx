import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Users, TrendingUp } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "ShopFlow E-Commerce Platform",
    description: "A comprehensive e-commerce solution for a retail chain with 50+ stores. Features include real-time inventory sync, multi-store management, advanced analytics, and mobile-responsive design.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=center",
    tags: ["Next.js", "React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
    category: "Web Development",
    duration: "6 months",
    teamSize: "8 developers",
    impact: "300% increase in online sales"
  },
  {
    title: "MediCare Pro Mobile App",
    description: "Healthcare management app serving 10,000+ patients across 25 clinics. Includes telemedicine, appointment booking, prescription management, and health records.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop&crop=center",
    tags: ["React Native", "Firebase", "Node.js", "WebRTC", "HIPAA Compliant"],
    category: "Mobile App",
    duration: "8 months",
    teamSize: "6 developers",
    impact: "40% reduction in wait times"
  },
  {
    title: "DataInsight AI Analytics",
    description: "Machine learning platform for financial services analyzing market trends and customer behavior. Processes 1M+ transactions daily with real-time insights and predictive modeling.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center",
    tags: ["Python", "TensorFlow", "React", "D3.js", "AWS", "Apache Kafka"],
    category: "AI & ML",
    duration: "10 months",
    teamSize: "12 specialists",
    impact: "25% improvement in predictions"
  },
  {
    title: "CloudScale Infrastructure",
    description: "Enterprise cloud migration for a Fortune 500 company. Migrated 200+ applications to AWS with zero downtime, implementing microservices architecture and DevOps practices.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop&crop=center",
    tags: ["AWS", "Docker", "Kubernetes", "Terraform", "Jenkins", "Microservices"],
    category: "Cloud Services",
    duration: "12 months",
    teamSize: "15 engineers",
    impact: "60% cost reduction"
  },
  {
    title: "RestaurantOS Management Suite",
    description: "Complete restaurant management ecosystem for a 30-location chain. Includes POS system, inventory management, staff scheduling, and customer loyalty program with mobile ordering.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop&crop=center",
    tags: ["Vue.js", "Laravel", "MySQL", "Square API", "PWA"],
    category: "Web Development",
    duration: "7 months",
    teamSize: "10 developers",
    impact: "35% increase in efficiency"
  },
  {
    title: "FitTracker Pro Wellness App",
    description: "Comprehensive fitness and wellness platform with 100K+ active users. Features workout tracking, nutrition planning, social challenges, and integration with 15+ wearable devices.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop&crop=center",
    tags: ["Flutter", "Firebase", "HealthKit", "Google Fit", "Machine Learning"],
    category: "Mobile App",
    duration: "9 months",
    teamSize: "8 developers",
    impact: "4.8★ app store rating"
  }
]

const categories = ["All", "Web Development", "Mobile App", "AI & ML", "Cloud Services"]

export default function PortfolioPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Our Portfolio
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
                Explore our recent projects and see how we've helped businesses transform their digital presence with innovative solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === "All" ? "default" : "outline"}
                  className="rounded-full"
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <Card key={project.title} className="overflow-hidden transition-all hover:shadow-lg group">
                  <div 
                    className="aspect-video relative overflow-hidden bg-cover bg-center transition-transform group-hover:scale-105"
                    style={{ backgroundImage: `url(${project.image})` }}
                  >
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{project.category}</Badge>
                    </div>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <CardDescription className="text-sm leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Project Stats */}
                    <div className="grid grid-cols-3 gap-2 text-xs text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{project.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="h-3 w-3" />
                        <span>{project.teamSize}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <TrendingUp className="h-3 w-3" />
                        <span className="text-green-600 font-medium">{project.impact}</span>
                      </div>
                    </div>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-50 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Ready to Start Your Project?
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
                Let's discuss your ideas and create something amazing together. Get in touch for a free consultation.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Button asChild size="lg">
                  <Link href="/contact">Start Your Project</Link>
                </Button>
                <Button variant="outline" asChild size="lg">
                  <Link href="/about">Learn More About Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}