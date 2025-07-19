import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import ReviewCarousel from "@/components/review-carousel"
import EmailSignup from "@/components/email-signup"

interface ServiceDetailProps {
  title: string
  description: string
  imagePath: string
  features: string[]
  benefits: string[]
  faqs?: { question: string; answer: string }[]
  callToAction?: string
}

export default function ServiceDetailLayout({
  title,
  description,
  imagePath,
  features,
  benefits,
  faqs = [],
  callToAction = "Ready to get started? Contact us today for a free quote!",
}: ServiceDetailProps) {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header is in the layout */}

      <main className="flex-1">
        {/* Hero Banner */}
        <section className="relative bg-green-800 py-12 text-white">
          <div className="absolute inset-0 z-0 opacity-20">
            <Image src={imagePath || "/placeholder.svg"} alt={`${title} service`} fill className="object-cover" />
          </div>
          <div className="container relative z-10 flex flex-col items-center justify-center space-y-6 text-center">
            <h1 className="max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">{title}</h1>
            <p className="max-w-2xl text-lg text-green-100">{description}</p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button asChild className="bg-green-600 hover:bg-green-700">
                <Link href="/contact">Get a Quote</Link>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-green-700">
                <Link href="/book">Book Online</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12">
          <div className="container">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {/* Features */}
              <div>
                <h2 className="mb-6 text-2xl font-bold text-green-800">What's Included</h2>
                <ul className="space-y-4">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="mt-1 rounded-full bg-green-100 p-1 text-green-600">
                        <CheckCircle className="h-5 w-5" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div>
                <h2 className="mb-6 text-2xl font-bold text-green-800">Benefits</h2>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="mt-1 rounded-full bg-green-100 p-1 text-green-600">
                        <CheckCircle className="h-5 w-5" />
                      </div>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* FAQs */}
            {faqs.length > 0 && (
              <div className="mt-12">
                <h2 className="mb-6 text-2xl font-bold text-green-800">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="rounded-lg border border-gray-200 p-4">
                      <h3 className="font-bold text-green-700">{faq.question}</h3>
                      <p className="mt-2 text-gray-600">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Call to Action */}
            <div className="mt-12 rounded-lg bg-green-50 p-8 text-center">
              <h2 className="mb-4 text-2xl font-bold text-green-800">{callToAction}</h2>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button asChild className="bg-green-600 hover:bg-green-700">
                  <Link href="/contact">Contact Us</Link>
                </Button>
                <Button asChild variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                  <Link href="/book">Book Online</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="bg-gray-50 py-12">
          <div className="container">
            <h2 className="mb-8 text-center text-3xl font-bold tracking-tight text-gray-900">What Our Customers Say</h2>
            <ReviewCarousel />
          </div>
        </section>

        {/* Email Signup */}
        <EmailSignup />
      </main>

      {/* Footer is in the layout */}
    </div>
  )
}
