import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BookOpen, Clock, Bell, Rss, Briefcase } from "lucide-react"
import Link from "next/link"

export default function BlogPage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-lg bg-purple-100 text-purple-600 mb-6">
              <BookOpen className="h-8 w-8" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Blog
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Insights, tutorials, and industry trends from our team of tech experts and digital innovators.
            </p>
          </div>
        </section>

        {/* Coming Soon Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="text-center p-8">
              <CardHeader>
                <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-orange-100 text-orange-600 mx-auto mb-6">
                  <Clock className="h-10 w-10" />
                </div>
                <CardTitle className="text-3xl mb-4">Coming Soon!</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-600 mb-8">
                  We're crafting amazing content about web development, mobile apps, AI/ML, cloud technologies, and digital marketing. 
                  Our blog will feature tutorials, case studies, industry insights, and behind-the-scenes stories from our projects.
                </p>
                
                <div className="bg-purple-50 rounded-lg p-6 mb-8">
                  <div className="flex items-center justify-center mb-4">
                    <Rss className="h-6 w-6 text-purple-600 mr-2" />
                    <h3 className="text-lg font-semibold text-purple-900">Stay Updated</h3>
                  </div>
                  <p className="text-purple-700 mb-4">
                    Be the first to read our latest articles and tech insights when we launch!
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild>
                    <Link href="/contact">Get Notified</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/services">Explore Our Services</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* What to Expect */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">What to Expect from Our Blog</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center p-6">
                <CardHeader>
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600 mx-auto mb-4">
                    <BookOpen className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg">Tutorials</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Step-by-step guides on web development, mobile apps, and emerging technologies.</p>
                </CardContent>
              </Card>
              
              <Card className="text-center p-6">
                <CardHeader>
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 text-green-600 mx-auto mb-4">
                    <Briefcase className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg">Case Studies</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Real project stories and lessons learned from our client work.</p>
                </CardContent>
              </Card>
              
              <Card className="text-center p-6">
                <CardHeader>
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 text-purple-600 mx-auto mb-4">
                    <Bell className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg">Industry News</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Latest trends and updates in technology and digital marketing.</p>
                </CardContent>
              </Card>
              
              <Card className="text-center p-6">
                <CardHeader>
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 text-orange-600 mx-auto mb-4">
                    <Rss className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg">Best Practices</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Tips and strategies for building better software and digital solutions.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}