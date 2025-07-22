export const runtime = 'edge';
import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Clock, Check, ArrowLeft } from "lucide-react"
import EmailSignup from "@/components/email-signup"

// This would typically come from a database or API
const locationData = {
  marietta: {
    name: "Marietta",
    county: "Cobb",
    zipCodes: ["30060", "30061", "30062", "30063", "30064", "30065", "30066", "30067", "30068", "30069"],
    description:
      "Sanders Lawnscapes has been proudly serving Marietta, GA since 2008. Our headquarters is located here, and we provide comprehensive lawn care and landscaping services to residential and commercial properties throughout the area.",
    image: "/placeholder.svg?height=600&width=1200&text=Marietta+GA",
    services: [
      {
        name: "Residential Lawn Care",
        description: "Complete lawn maintenance for Marietta homes, including mowing, edging, and fertilization.",
        link: "/services/lawn-mowing",
      },
      {
        name: "Commercial Maintenance",
        description: "Professional landscape maintenance for Marietta businesses, HOAs, and commercial properties.",
        link: "/services/commercial-maintenance",
      },
      {
        name: "Landscape Design",
        description: "Custom landscape design and installation services for Marietta properties.",
        link: "/services/landscape-design",
      },
      {
        name: "Seasonal Services",
        description: "Year-round care including spring cleanup, fall leaf removal, and winter preparation.",
        link: "/seasonal",
      },
    ],
    testimonials: [
      {
        name: "Michael Johnson",
        text: "Sanders Lawnscapes has been maintaining our Marietta home for 3 years now. Their attention to detail is incredible, and our lawn has never looked better.",
        rating: 5,
      },
      {
        name: "Sarah Williams",
        text: "We hired Sanders for a complete landscape redesign at our Marietta property and couldn't be happier with the results.",
        rating: 5,
      },
    ],
    projects: [
      {
        title: "East Cobb Residential Renovation",
        description: "Complete landscape renovation including new sod, irrigation, and plantings.",
        image: "/placeholder.svg?height=300&width=400&text=East+Cobb+Project",
      },
      {
        title: "Marietta Square Commercial Property",
        description: "Year-round maintenance for a commercial property near Marietta Square.",
        image: "/placeholder.svg?height=300&width=400&text=Marietta+Square+Project",
      },
    ],
  },
  // Additional cities would be added here
}

export default function LocationPage({ params }: { params: { city: string } }) {
  const city = params.city
  const location = locationData[city as keyof typeof locationData] || locationData.marietta // Default to Marietta if not found

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-green-800 py-12 text-white">
          <div className="absolute inset-0 z-0 opacity-30">
            <Image src={location.image || "/placeholder.svg"} alt={location.name} fill className="object-cover" />
          </div>
          <div className="container relative z-10">
            <Link
              href="/locations"
              className="mb-6 inline-flex items-center text-sm font-medium text-green-100 hover:text-white"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to All Locations
            </Link>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Lawn Care & Landscaping in {location.name}, GA
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-green-100">{location.description}</p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button asChild className="bg-green-600 hover:bg-green-700">
                <Link href="/contact">Request Service in {location.name}</Link>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-green-700">
                <Link href="/book">Book Online</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Location Info */}
        <section className="py-12">
          <div className="container">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="md:col-span-2">
                <h2 className="text-2xl font-bold text-green-800">Our Services in {location.name}</h2>
                <p className="mt-4 text-gray-600">
                  Sanders Lawnscapes offers a comprehensive range of lawn care and landscaping services to{" "}
                  {location.name} residents and businesses. Our local team is familiar with the specific needs and
                  challenges of the {location.name} area.
                </p>

                <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {location.services.map((service) => (
                    <div key={service.name} className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                      <h3 className="font-bold text-green-700">{service.name}</h3>
                      <p className="mt-2 text-gray-600">{service.description}</p>
                      <Link
                        href={service.link}
                        className="mt-4 inline-flex items-center text-sm font-medium text-green-600 hover:text-green-800"
                      >
                        Learn More <ArrowLeft className="ml-1 h-4 w-4 rotate-180" />
                      </Link>
                    </div>
                  ))}
                </div>

                {/* Featured Projects */}
                <div className="mt-12">
                  <h2 className="text-2xl font-bold text-green-800">Featured Projects in {location.name}</h2>
                  <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
                    {location.projects.map((project) => (
                      <div
                        key={project.title}
                        className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm"
                      >
                        <div className="relative h-48 w-full">
                          <Image
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="font-bold text-green-700">{project.title}</h3>
                          <p className="mt-2 text-sm text-gray-600">{project.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                {/* Location Sidebar */}
                <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                  <h3 className="font-bold text-green-700">Service Area Information</h3>
                  <div className="mt-4 space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="mt-1 h-5 w-5 text-green-600" />
                      <div>
                        <p className="font-medium">{location.name}, GA</p>
                        <p className="text-sm text-gray-500">{location.county} County</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="mt-1 rounded-full bg-green-100 p-1 text-green-600">
                        <Check className="h-3 w-3" />
                      </div>
                      <div>
                        <p className="font-medium">ZIP Codes Served</p>
                        <p className="text-sm text-gray-500">{location.zipCodes.join(", ")}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="mt-1 h-5 w-5 text-green-600" />
                      <div>
                        <p className="font-medium">Service Hours</p>
                        <p className="text-sm text-gray-500">Monday - Friday: 8am - 6pm</p>
                        <p className="text-sm text-gray-500">Saturday: 9am - 4pm</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="mt-1 h-5 w-5 text-green-600" />
                      <div>
                        <p className="font-medium">Contact</p>
                        <p className="text-sm text-gray-500">770-555-1234</p>
                        <p className="text-sm text-gray-500">info@sanderslawnscapes.com</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Testimonials */}
                <div className="mt-6 space-y-4">
                  <h3 className="font-bold text-green-700">{location.name} Customer Reviews</h3>
                  {location.testimonials.map((testimonial, index) => (
                    <div key={index} className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
                      <div className="mb-2 flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                          />
                        ))}
                      </div>
                      <p className="text-sm text-gray-600">"{testimonial.text}"</p>
                      <p className="mt-2 text-sm font-medium">{testimonial.name}</p>
                    </div>
                  ))}
                  <div className="text-center">
                    <Link href="/reviews" className="text-sm font-medium text-green-600 hover:text-green-800">
                      View All Reviews
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-green-50 py-12">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-bold text-green-800">Ready to Transform Your {location.name} Property?</h2>
              <p className="mt-4 text-gray-600">
                Contact Sanders Lawnscapes today to schedule a consultation or request a free quote for your{" "}
                {location.name} home or business.
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
                <Button asChild className="bg-green-600 hover:bg-green-700">
                  <Link href="/contact">Request a Quote</Link>
                </Button>
                <Button asChild variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                  <Link href="/book">Schedule Service</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Email Signup */}
        <EmailSignup />
      </main>
    </div>
  )
}

function Star(props: React.ComponentProps<typeof Check>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}
