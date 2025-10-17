import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Briefcase, Clock, Bell } from "lucide-react"
import Link from "next/link"

export default function CareersPage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-lg bg-blue-100 text-blue-600 mb-6">
              <Briefcase className="h-8 w-8" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Careers
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join our team of innovative developers and digital experts. We're building something amazing!
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
                  We're currently building our careers page where you'll find exciting opportunities to join the Mahix InfoTech team. 
                  Stay tuned for updates on open positions in web development, mobile apps, AI/ML, and more!
                </p>
                
                <div className="bg-blue-50 rounded-lg p-6 mb-8">
                  <div className="flex items-center justify-center mb-4">
                    <Bell className="h-6 w-6 text-blue-600 mr-2" />
                    <h3 className="text-lg font-semibold text-blue-900">Get Notified</h3>
                  </div>
                  <p className="text-blue-700 mb-4">
                    Want to be the first to know when we're hiring? Send us your resume and we'll keep you in the loop!
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild>
                    <Link href="/contact">Send Your Resume</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/about">Learn About Us</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Why Work With Mahix InfoTech?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center p-6">
                <CardContent>
                  <div className="text-4xl font-bold text-blue-600 mb-2">5+</div>
                  <div className="text-gray-600">Years of Innovation</div>
                </CardContent>
              </Card>
              <Card className="text-center p-6">
                <CardContent>
                  <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
                  <div className="text-gray-600">Projects Delivered</div>
                </CardContent>
              </Card>
              <Card className="text-center p-6">
                <CardContent>
                  <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
                  <div className="text-gray-600">Remote Friendly</div>
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