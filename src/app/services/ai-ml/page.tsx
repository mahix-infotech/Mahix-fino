import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, CheckCircle, Bot, BarChart3, Eye, MessageSquare } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const features = [
  {
    icon: Bot,
    title: "Machine Learning",
    description: "Custom ML models trained on your data for specific business needs"
  },
  {
    icon: BarChart3,
    title: "Predictive Analytics",
    description: "Forecast trends and make data-driven decisions with AI insights"
  },
  {
    icon: Eye,
    title: "Computer Vision",
    description: "Image and video analysis for automation and quality control"
  },
  {
    icon: MessageSquare,
    title: "Natural Language Processing",
    description: "Text analysis, chatbots, and language understanding solutions"
  }
]

const services = [
  {
    title: "Custom AI Solutions",
    description: "Tailored artificial intelligence solutions for your specific business challenges",
    features: ["Custom Model Development", "Data Pipeline Setup", "Model Training", "Performance Optimization"]
  },
  {
    title: "Chatbots & Virtual Assistants",
    description: "Intelligent conversational AI for customer service and support",
    features: ["Natural Language Understanding", "Multi-platform Integration", "Learning Capabilities", "Analytics Dashboard"]
  },
  {
    title: "Data Analytics & Insights",
    description: "Transform your data into actionable business insights with AI",
    features: ["Predictive Modeling", "Data Visualization", "Automated Reporting", "Real-time Analytics"]
  }
]

const technologies = [
  "Python", "TensorFlow", "PyTorch", "Scikit-learn", "OpenAI GPT", "Hugging Face", 
  "Pandas", "NumPy", "Jupyter", "Docker", "Kubernetes", "AWS SageMaker"
]

const useCases = [
  {
    title: "Customer Service Automation",
    description: "AI-powered chatbots that handle customer inquiries 24/7",
    icon: MessageSquare,
    benefits: ["Reduced response time", "24/7 availability", "Cost savings", "Improved satisfaction"]
  },
  {
    title: "Predictive Maintenance",
    description: "Predict equipment failures before they happen",
    icon: BarChart3,
    benefits: ["Reduced downtime", "Lower maintenance costs", "Extended equipment life", "Better planning"]
  },
  {
    title: "Quality Control",
    description: "Automated visual inspection using computer vision",
    icon: Eye,
    benefits: ["Consistent quality", "Faster inspection", "Reduced errors", "Cost efficiency"]
  },
  {
    title: "Fraud Detection",
    description: "Real-time fraud detection and prevention systems",
    icon: Bot,
    benefits: ["Real-time detection", "Reduced false positives", "Automated responses", "Risk mitigation"]
  }
]

export default function AIMLPage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 sm:py-32 bg-gradient-to-r from-purple-600 to-purple-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm mb-6">
              <Brain className="h-8 w-8" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              AI & Machine Learning
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-purple-100">
              Harness the power of artificial intelligence to automate processes, gain insights, and drive innovation in your business
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Get Started</Link>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/portfolio">View Projects</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              AI & ML Capabilities
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Comprehensive artificial intelligence solutions for modern businesses
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <Card key={feature.title} className="text-center">
                  <CardHeader>
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 text-purple-600 mx-auto">
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              AI & ML Services
            </h2>
          </div>
          
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {services.map((service) => (
              <Card key={service.title} className="relative">
                <CardHeader>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" asChild>
                    <Link href="/contact">Get Quote</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              AI Use Cases
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Real-world applications of AI that drive business value
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {useCases.map((useCase) => {
              const Icon = useCase.icon
              return (
                <Card key={useCase.title} className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 text-purple-600 flex-shrink-0">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{useCase.title}</h3>
                      <p className="text-gray-600 mb-4">{useCase.description}</p>
                      <div className="grid grid-cols-2 gap-2">
                        {useCase.benefits.map((benefit) => (
                          <div key={benefit} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="mr-2 h-3 w-3 text-green-500 flex-shrink-0" />
                            {benefit}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              AI Technologies & Tools
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              We work with cutting-edge AI and machine learning technologies
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {technologies.map((tech) => (
              <Card key={tech} className="p-4 text-center hover:shadow-md transition-shadow">
                <CardContent className="p-0">
                  <p className="text-sm font-medium text-gray-700">{tech}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our AI Development Process
            </h2>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
            {[
              { step: "1", title: "Data Assessment", description: "Evaluate your data quality and availability" },
              { step: "2", title: "Problem Definition", description: "Define the AI problem and success metrics" },
              { step: "3", title: "Model Development", description: "Build and train custom AI models" },
              { step: "4", title: "Testing & Validation", description: "Rigorous testing and performance validation" },
              { step: "5", title: "Deployment & Monitoring", description: "Deploy to production with ongoing monitoring" }
            ].map((phase) => (
              <div key={phase.step} className="text-center">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-purple-600 text-white font-bold text-lg mb-4">
                  {phase.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">{phase.title}</h3>
                <p className="text-sm text-gray-600">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to Implement AI in Your Business?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-purple-100">
              Let's explore how artificial intelligence can transform your operations and drive growth
            </p>
            <div className="mt-8">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Start Your AI Project</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer />
    </>
  )
}