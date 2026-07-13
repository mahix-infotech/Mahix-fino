import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, CheckCircle, Bot, BarChart3, Eye, MessageSquare, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/sections/navigation/navigation"
import { Footer } from "@/components/sections/footer/footer"
import { TechStackGrid } from "@/components/sections/tech-stack/tech-stack-grid"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI & Machine Learning Solutions - Custom AI Development | Mahix InfoTech",
  description: "Advanced AI and machine learning solutions in Dindigul. We develop custom AI models, chatbots, predictive analytics, and computer vision systems using Python, TensorFlow, and PyTorch.",
  keywords: "AI development, machine learning, artificial intelligence, chatbots, predictive analytics, computer vision, NLP, Python AI, TensorFlow, Dindigul AI services",
}

const features = [
  {
    icon: Bot,
    title: "Machine Learning",
    description: "Custom ML models trained on your data for specific business needs",
    borderColor: "border-t-blue-500",
    hoverColor: "hover:border-blue-500/30"
  },
  {
    icon: BarChart3,
    title: "Predictive Analytics",
    description: "Forecast trends and make data-driven decisions with AI insights",
    borderColor: "border-t-emerald-500",
    hoverColor: "hover:border-emerald-500/30"
  },
  {
    icon: Eye,
    title: "Computer Vision",
    description: "Image and video analysis for automation and quality control",
    borderColor: "border-t-purple-500",
    hoverColor: "hover:border-purple-500/30"
  },
  {
    icon: MessageSquare,
    title: "Natural Language Processing",
    description: "Text analysis, chatbots, and language understanding solutions",
    borderColor: "border-t-orange-500",
    hoverColor: "hover:border-orange-500/30"
  }
]

const servicesList = [
  {
    title: "Custom AI Solutions",
    description: "Tailored artificial intelligence solutions for your specific business challenges",
    features: ["Custom Model Development", "Data Pipeline Setup", "Model Training", "Performance Optimization"],
    borderColor: "border-t-blue-500",
    hoverColor: "hover:border-blue-500/30"
  },
  {
    title: "Chatbots & Virtual Assistants",
    description: "Intelligent conversational AI for customer service and support",
    features: ["Natural Language Understanding", "Multi-platform Integration", "Learning Capabilities", "Analytics Dashboard"],
    borderColor: "border-t-emerald-500",
    hoverColor: "hover:border-emerald-500/30"
  },
  {
    title: "Data Analytics & Insights",
    description: "Transform your data into actionable business insights with AI",
    features: ["Predictive Modeling", "Data Visualization", "Automated Reporting", "Real-time Analytics"],
    borderColor: "border-t-purple-500",
    hoverColor: "hover:border-purple-500/30"
  }
]

const useCases = [
  {
    title: "Customer Service Automation",
    description: "AI-powered chatbots that handle customer inquiries 24/7",
    icon: MessageSquare,
    benefits: ["Reduced response time", "24/7 availability", "Cost savings", "Improved satisfaction"],
    borderColor: "border-t-blue-500",
    hoverColor: "hover:border-blue-500/30"
  },
  {
    title: "Predictive Maintenance",
    description: "Predict equipment failures before they happen",
    icon: BarChart3,
    benefits: ["Reduced downtime", "Lower maintenance costs", "Extended equipment life", "Better planning"],
    borderColor: "border-t-emerald-500",
    hoverColor: "hover:border-emerald-500/30"
  },
  {
    title: "Quality Control",
    description: "Automated visual inspection using computer vision",
    icon: Eye,
    benefits: ["Consistent quality", "Faster inspection", "Reduced errors", "Cost efficiency"],
    borderColor: "border-t-purple-500",
    hoverColor: "hover:border-purple-500/30"
  },
  {
    title: "Fraud Detection",
    description: "Real-time fraud detection and prevention systems",
    icon: Bot,
    benefits: ["Real-time detection", "Reduced false positives", "Automated responses", "Risk mitigation"],
    borderColor: "border-t-orange-500",
    hoverColor: "hover:border-orange-500/30"
  }
]

const technologies = [
  "Python", "TensorFlow", "PyTorch", "Scikit-learn", "OpenAI GPT", "Hugging Face", 
  "Pandas", "NumPy", "Jupyter", "Docker", "Kubernetes", "AWS SageMaker"
]

const relatedServices = [
  {
    title: "Cloud Services",
    description: "Host database pipelines and deploy virtual machines securely on AWS.",
    href: "/services/cloud",
    borderColor: "border-t-blue-500",
    hoverColor: "hover:border-blue-500/30"
  },
  {
    title: "Custom Software",
    description: "Scale business logic with tailored software development and microservices.",
    href: "/services/custom-software",
    borderColor: "border-t-emerald-500",
    hoverColor: "hover:border-emerald-500/30"
  },
  {
    title: "Digital Transformation",
    description: "Modernize legacy systems and digitize workflows for absolute speed.",
    href: "/services/digital-transformation",
    borderColor: "border-t-purple-500",
    hoverColor: "hover:border-purple-500/30"
  }
]

export default function AIMLPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <main className="flex-grow">
        {/* Hero Section */}
        <section 
          className="relative overflow-hidden bg-cover bg-center py-24 sm:py-36 flex flex-col items-center justify-center text-center text-white"
          style={{ 
            backgroundImage: `linear-gradient(to bottom, rgba(15, 23, 42, 0.88), rgba(9, 9, 11, 0.96)), url('https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&q=80&w=1600')` 
          }}
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30 pointer-events-none" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10 flex flex-col items-center">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400 border border-blue-500/25 mb-6">
              <Brain className="h-8 w-8" />
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl max-w-3xl leading-[1.12]">
              AI & Machine{" "}
              <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
                Learning
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300 leading-relaxed">
              Harness the power of artificial intelligence to automate processes, gain predictive insights, and drive innovation in your business.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl border-none shadow-lg px-8 hover:scale-105 transition-all duration-300" asChild>
                <Link href="/contact">Get Started</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white/10 bg-white/5 text-white hover:bg-white/10 rounded-xl px-8 hover:scale-105 transition-all duration-300" asChild>
                <Link href="/portfolio">View Projects</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section - Corporate Gray Background */}
        <section className="py-20 bg-slate-50 dark:bg-slate-900/20 border-b border-black/[0.05] dark:border-white/[0.08]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
                AI & ML Capabilities
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                Comprehensive artificial intelligence solutions for modern businesses.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature) => {
                const Icon = feature.icon
                return (
                  <Card key={feature.title} className={`border-t-4 ${feature.borderColor} border-x border-b border-black/[0.05] dark:border-white/[0.08] bg-background/70 backdrop-blur-md shadow-sm transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl ${feature.hoverColor}`}>
                    <CardHeader className="text-center">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 mx-auto mb-4">
                        <Icon className="h-6 w-6" />
                      </div>
                      <CardTitle className="text-lg font-bold">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Services Section - White Background */}
        <section className="py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
                AI & ML Solutions
              </h2>
            </div>
            
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {servicesList.map((service) => (
                <Card key={service.title} className={`border-t-4 ${service.borderColor} border-x border-b border-black/[0.05] dark:border-white/[0.08] bg-background flex flex-col justify-between shadow-sm transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl ${service.hoverColor}`}>
                  <CardHeader>
                    <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                    <CardDescription className="text-sm text-muted-foreground leading-relaxed mt-2">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <ul className="space-y-2.5">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm text-muted-foreground">
                          <CheckCircle className="mr-2 h-4 w-4 text-green-500 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full rounded-xl py-5" asChild>
                      <Link href="/contact">Get Quote</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section - Corporate Gray Background */}
        <section className="py-20 bg-slate-50 dark:bg-slate-900/20 border-y border-black/[0.05] dark:border-white/[0.08]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
                AI Use Cases
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                Real-world applications of AI that drive business value.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {useCases.map((useCase) => {
                const Icon = useCase.icon
                return (
                  <Card key={useCase.title} className={`border-t-4 ${useCase.borderColor} border-x border-b border-black/[0.05] dark:border-white/[0.08] bg-background/70 backdrop-blur-md p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl ${useCase.hoverColor}`}>
                    <div className="flex items-start space-x-4">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex-shrink-0">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2">{useCase.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">{useCase.description}</p>
                        <div className="grid grid-cols-2 gap-2">
                          {useCase.benefits.map((benefit) => (
                            <div key={benefit} className="flex items-center text-xs text-muted-foreground">
                              <CheckCircle className="mr-2 h-3.5 w-3.5 text-green-500 flex-shrink-0" />
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

        {/* Process Section - White Background */}
        <section className="py-20 bg-background border-b border-black/[0.05] dark:border-white/[0.08]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
                Our AI Development Process
              </h2>
            </div>
            
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
              {[
                { step: "1", title: "Data Assessment", description: "Evaluate data quality and availability." },
                { step: "2", title: "Problem Definition", description: "Define clear business success metrics." },
                { step: "3", title: "Model Design", description: "Build and train custom models." },
                { step: "4", title: "Validation", description: "Rigorous testing and verification." },
                { step: "5", title: "Deployment", description: "Deploy with continuous metrics monitoring." }
              ].map((phase) => (
                <div key={phase.step} className="text-center">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white font-bold text-lg mb-4">
                    {phase.step}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{phase.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{phase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <TechStackGrid
          technologies={technologies}
          title="AI Technologies & Tools"
          subtitle="We work with cutting-edge AI and machine learning frameworks."
        />

        {/* Related Services Section - White Background */}
        <section className="py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
                Related Services
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                Explore complementary services to accelerate your digital growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedServices.map((service) => (
                <Card key={service.title} className={`border-t-4 ${service.borderColor} border-x border-b border-black/[0.05] dark:border-white/[0.08] bg-background/50 flex flex-col justify-between shadow-sm transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl ${service.hoverColor}`}>
                  <CardHeader>
                    <CardTitle className="text-lg font-bold">{service.title}</CardTitle>
                    <CardDescription className="text-sm text-muted-foreground mt-2 leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <Link 
                      href={service.href} 
                      className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 hover:text-blue-700 hover:underline gap-1 group"
                    >
                      Learn More
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}