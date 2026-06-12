import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, TrendingUp, Search, BarChart3, Target, Zap } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "SEO & Digital Marketing Services - Mahix InfoTech",
    description: "Boost your online visibility with our expert SEO and digital marketing services in Dindigul. We offer technical SEO, keyword research, content optimization, and link building to improve your search rankings.",
    keywords: "SEO services, digital marketing, search engine optimization, keyword research, content optimization, link building, Dindigul SEO, Tamil Nadu",
}

export default function SEOPage() {
    return (
        <>
            <Navigation />
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
                {/* Hero Section */}
                <section className="pt-32 pb-20 px-4">
                    <div className="max-w-6xl mx-auto text-center">
                        <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
                            SEO & Digital Marketing
                        </Badge>
                        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                            Dominate Search Results
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                            Boost your online visibility with data-driven SEO strategies that deliver measurable results and sustainable growth.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                                Get SEO Audit
                            </Button>
                            <Button size="lg" variant="secondary">
                                View Case Studies
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Services Grid */}
                <section className="py-20 px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl font-bold text-center mb-12">Our SEO Services</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <Card className="hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <Search className="w-12 h-12 text-blue-600 mb-4" />
                                    <CardTitle>Technical SEO</CardTitle>
                                    <CardDescription>
                                        Optimize your site's foundation for search engines
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2">
                                        <li className="flex items-center gap-2">
                                            <CheckCircle className="w-4 h-4 text-green-500" />
                                            Site speed optimization
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle className="w-4 h-4 text-green-500" />
                                            Mobile responsiveness
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle className="w-4 h-4 text-green-500" />
                                            Schema markup
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>

                            <Card className="hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <Target className="w-12 h-12 text-blue-600 mb-4" />
                                    <CardTitle>Keyword Research</CardTitle>
                                    <CardDescription>
                                        Find high-value keywords your audience is searching for
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2">
                                        <li className="flex items-center gap-2">
                                            <CheckCircle className="w-4 h-4 text-green-500" />
                                            Competitor analysis
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle className="w-4 h-4 text-green-500" />
                                            Search intent mapping
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle className="w-4 h-4 text-green-500" />
                                            Long-tail opportunities
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>

                            <Card className="hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <TrendingUp className="w-12 h-12 text-blue-600 mb-4" />
                                    <CardTitle>Content Optimization</CardTitle>
                                    <CardDescription>
                                        Create content that ranks and converts
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2">
                                        <li className="flex items-center gap-2">
                                            <CheckCircle className="w-4 h-4 text-green-500" />
                                            On-page optimization
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle className="w-4 h-4 text-green-500" />
                                            Content strategy
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle className="w-4 h-4 text-green-500" />
                                            Meta optimization
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>

                            <Card className="hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <Zap className="w-12 h-12 text-blue-600 mb-4" />
                                    <CardTitle>Link Building</CardTitle>
                                    <CardDescription>
                                        Build authority with high-quality backlinks
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2">
                                        <li className="flex items-center gap-2">
                                            <CheckCircle className="w-4 h-4 text-green-500" />
                                            Guest posting
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle className="w-4 h-4 text-green-500" />
                                            Digital PR
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle className="w-4 h-4 text-green-500" />
                                            Resource page outreach
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>

                            <Card className="hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <BarChart3 className="w-12 h-12 text-blue-600 mb-4" />
                                    <CardTitle>Analytics & Reporting</CardTitle>
                                    <CardDescription>
                                        Track progress with detailed insights
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2">
                                        <li className="flex items-center gap-2">
                                            <CheckCircle className="w-4 h-4 text-green-500" />
                                            Monthly reports
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle className="w-4 h-4 text-green-500" />
                                            Ranking tracking
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle className="w-4 h-4 text-green-500" />
                                            ROI analysis
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>

                            <Card className="hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <Search className="w-12 h-12 text-blue-600 mb-4" />
                                    <CardTitle>Local SEO</CardTitle>
                                    <CardDescription>
                                        Dominate local search results
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2">
                                        <li className="flex items-center gap-2">
                                            <CheckCircle className="w-4 h-4 text-green-500" />
                                            Google Business optimization
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle className="w-4 h-4 text-green-500" />
                                            Local citations
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle className="w-4 h-4 text-green-500" />
                                            Review management
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Results Section */}
                <section className="py-20 px-4 bg-white">
                    <div className="max-w-6xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-12">Proven Results</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="p-6">
                                <div className="text-4xl font-bold text-blue-600 mb-2">300%</div>
                                <div className="text-gray-600">Average traffic increase</div>
                            </div>
                            <div className="p-6">
                                <div className="text-4xl font-bold text-blue-600 mb-2">85%</div>
                                <div className="text-gray-600">Keywords in top 10</div>
                            </div>
                            <div className="p-6">
                                <div className="text-4xl font-bold text-blue-600 mb-2">6 months</div>
                                <div className="text-gray-600">Average time to results</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 px-4 bg-blue-600">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-white mb-6">
                            Ready to Boost Your Rankings?
                        </h2>
                        <p className="text-xl text-blue-100 mb-8">
                            Get a free SEO audit and discover opportunities to improve your search visibility.
                        </p>
                        <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                            Start Your Free Audit
                        </Button>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    )
}