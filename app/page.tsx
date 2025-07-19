import { Check, Star, User } from "lucide-react"
import Image from "next/image"
import ZipCodeChecker from "@/components/zip-code-checker"
import ServiceTabs from "@/components/service-tabs"
import ReviewCarousel from "@/components/review-carousel"
import CommercialSection from "@/components/commercial-section"
import EmailSignup from "@/components/email-signup"

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero Banner */}
      <section className="relative bg-green-800 py-12 text-white">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/placeholder.svg?height=400&width=1920"
            alt="Lawn care background"
            fill
            className="object-cover"
          />
        </div>
        <div className="container relative z-10 flex flex-col items-center justify-center space-y-6 text-center">
          <h1 className="max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Professional Lawn Care & Landscaping Services in North Atlanta
          </h1>
          <p className="max-w-2xl text-lg text-green-100">
            Serving residential and commercial customers in Cobb & Cherokee Counties for 15 years
          </p>
          <ZipCodeChecker />
        </div>
      </section>

      {/* Emblem Section */}
      <section className="border-b bg-white py-6">
        <div className="container flex flex-col items-center justify-center space-y-2 text-center sm:flex-row sm:space-x-8 sm:space-y-0">
          <div className="flex items-center">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="ml-2 text-sm font-medium">5-Star Rating on Google</span>
          </div>
          <div className="h-6 w-px bg-gray-300 hidden sm:block"></div>
          <div className="flex items-center">
            <User className="h-5 w-5 text-green-600" />
            <span className="ml-2 text-sm font-medium">1000+ Satisfied Customers</span>
          </div>
          <div className="h-6 w-px bg-gray-300 hidden sm:block"></div>
          <div className="flex items-center">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-600 text-white">
              <Check className="h-4 w-4" />
            </div>
            <span className="ml-2 text-sm font-medium">Google Guarantee</span>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12">
        <div className="container">
          <h2 className="mb-8 text-center text-3xl font-bold tracking-tight text-gray-900">
            Our Comprehensive Services
          </h2>
          <ServiceTabs />
        </div>
      </section>

      {/* Reviews Section */}
      <section className="bg-gray-50 py-12">
        <div className="container">
          <h2 className="mb-8 text-center text-3xl font-bold tracking-tight text-gray-900">What Our Customers Say</h2>
          <ReviewCarousel />
        </div>
      </section>

      {/* Commercial Services Section */}
      <section className="py-12">
        <div className="container">
          <CommercialSection />
        </div>
      </section>

      {/* Email Signup */}
      <EmailSignup />
    </main>
  )
}
