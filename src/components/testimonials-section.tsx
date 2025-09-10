import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Priya Krishnamurthy",
    role: "CEO, TechStart Inc.",
    content: "Mahix InfoTech transformed our business with their exceptional web development services. The team delivered beyond our expectations and helped us achieve a 300% increase in online conversions.",
    avatar: "/avatars/priya.jpg",
    rating: 5
  },
  {
    name: "Arjun Ramachandran",
    role: "CTO, DataFlow Solutions",
    content: "Their AI and ML expertise helped us automate our data processing pipeline, saving us 40 hours per week. The team is professional, knowledgeable, and delivers on time.",
    avatar: "/avatars/arjun.jpg", 
    rating: 5
  },
  {
    name: "Kavitha Subramanian",
    role: "Marketing Director, GrowthCorp",
    content: "The mobile app they developed for us has been a game-changer. User engagement increased by 250% and our app store ratings are consistently 4.8+. Highly recommended!",
    avatar: "/avatars/kavitha.jpg",
    rating: 5
  },
  {
    name: "Rajesh Murugan",
    role: "Founder, CloudVenture",
    content: "Mahix InfoTech's cloud migration services were seamless. They moved our entire infrastructure to AWS with zero downtime and reduced our hosting costs by 60%.",
    avatar: "/avatars/rajesh.jpg",
    rating: 5
  },
  {
    name: "Deepika Natarajan",
    role: "VP Marketing, EcomPlus",
    content: "Their SEO and digital marketing strategies helped us rank #1 for our target keywords. Our organic traffic increased by 400% in just 6 months.",
    avatar: "/avatars/deepika.jpg",
    rating: 5
  },
  {
    name: "Karthik Venkatesh",
    role: "Operations Manager, LogiTech",
    content: "The custom software solution they built streamlined our operations completely. What used to take days now takes hours. Exceptional work and ongoing support.",
    avatar: "/avatars/karthik.jpg",
    rating: 5
  }
]

export function TestimonialsSection() {
  return (
    <section className="py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Don't just take our word for it. Here's what our satisfied clients have to say about working with us.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="relative">
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-gray-600 mb-6">
                  "{testimonial.content}"
                </blockquote>
                <div className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}