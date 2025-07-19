"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ServiceHero from "@/components/service-hero"
import PromotionalBar from "@/components/promotional-bar"
import EmailSignup from "@/components/email-signup"
import { ChevronRight } from "lucide-react"

// Service categories data
const serviceCategories = [
  {
    id: "residential",
    title: "Residential Lawn Care",
    description: "Transform your yard into a lush, green oasis with our comprehensive residential lawn care services.",
    benefits: ["Weekly mowing & edging", "Fertilization programs", "Weed control", "Aeration & overseeding"],
    subServices: [
      { name: "Lawn Mowing", link: "/services/lawn-mowing" },
      { name: "Fertilization", link: "/services/fertilization" },
      { name: "Aeration", link: "/services/aeration" },
      { name: "Weed Control", link: "/services/weed-control" },
    ],
    moreLink: "/for-home#lawn-care",
    backgroundImage: "/placeholder.svg?height=800&width=600",
    quote:
      "Imagine coming home to a perfectly manicured lawn that makes your neighbors green with envy and gives you a sense of pride every time you pull into your driveway.",
  },
  {
    id: "curbside",
    title: "Curbside Appeal",
    description:
      "Enhance your property's appearance and value with our expert landscaping and curbside appeal services.",
    benefits: ["Landscape design", "Flower bed installation", "Mulching", "Hedge & shrub trimming"],
    subServices: [
      { name: "Landscape Design", link: "/services/landscape-design" },
      { name: "Flower Beds", link: "/services/flower-beds" },
      { name: "Hedge Trimming", link: "/services/hedge-trimming" },
      { name: "Mulching", link: "/services/mulching" },
    ],
    moreLink: "/for-home#landscape-design",
    backgroundImage: "/placeholder.svg?height=800&width=600&text=Flowers+and+Plants",
    quote:
      "Step outside to a vibrant landscape that reflects your personal style and creates a welcoming atmosphere for family and friends to gather and enjoy.",
  },
  {
    id: "seasonal",
    title: "All Season Care",
    description: "Keep your property looking its best year-round with our seasonal maintenance and cleanup services.",
    benefits: ["Spring cleanup", "Fall leaf removal", "Winter preparation", "Storm damage cleanup"],
    subServices: [
      { name: "Spring Cleanup", link: "/services/spring-cleanup" },
      { name: "Fall Cleanup", link: "/services/fall-cleanup" },
      { name: "Leaf Removal", link: "/services/leaf-removal" },
      { name: "Storm Cleanup", link: "/services/storm-cleanup" },
    ],
    moreLink: "/seasonal",
    backgroundImage: "/placeholder.svg?height=800&width=600&text=Seasonal+Landscapes",
    quote:
      "Experience the peace of mind that comes from knowing your property is prepared for every season, allowing you to enjoy the changing beauty of nature without the work.",
  },
  {
    id: "commercial",
    title: "Commercial Services",
    description:
      "Maintain a professional appearance for your business with our reliable commercial landscaping services.",
    benefits: ["Property maintenance", "Snow removal", "Parking lot maintenance", "Common area upkeep"],
    subServices: [
      { name: "Commercial Maintenance", link: "/services/commercial-maintenance" },
      { name: "Property Enhancement", link: "/services/property-enhancement" },
      { name: "Snow Removal", link: "/services/snow-removal" },
      { name: "Irrigation", link: "/services/irrigation" },
    ],
    moreLink: "/for-business#commercial-maintenance",
    backgroundImage: "/placeholder.svg?height=800&width=600&text=Commercial+Properties",
    quote:
      "Present your business with confidence through immaculately maintained grounds that create positive first impressions and reflect your commitment to quality and professionalism.",
  },
]

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState(serviceCategories[0])
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([])

  // Set up intersection observer for each section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id
            const category = serviceCategories.find((cat) => cat.id === id)
            if (category) {
              setActiveCategory(category)
            }
          }
        })
      },
      { threshold: 0.5 },
    )

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref)
      })
    }
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Banner */}
        <ServiceHero
          title="Our Services"
          subtitle="Professional lawn care and landscaping services for every need"
          buttons={
            <>
              <Button asChild className="bg-green-600 hover:bg-green-700">
                <Link href="/contact">Request Service</Link>
              </Button>
              <Button asChild variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                <Link href="/book">Book Online</Link>
              </Button>
            </>
          }
        />

        {/* Promotional Bar */}
        <PromotionalBar />

        {/* Main Content */}
        <section className="relative">
          {/* Background Image Container - Changes based on active category */}
          <div
            className="fixed right-0 top-0 hidden h-screen w-1/2 bg-cover bg-center transition-opacity duration-1000 md:block"
            style={{
              backgroundImage: `url(${activeCategory.backgroundImage})`,
              opacity: 0.15,
            }}
          ></div>

          <div className="container relative z-10 py-12">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {/* Left Column - Scrolling Service Categories */}
              <div className="space-y-32">
                {serviceCategories.map((category, index) => (
                  <div
                    key={category.id}
                    id={category.id}
                    ref={(el) => (sectionRefs.current[index] = el)}
                    className="scroll-mt-24 rounded-lg border border-gray-200 bg-white p-8 py-12 shadow-sm transition-all duration-500 hover:shadow-md"
                  >
                    <h2 className="text-2xl font-bold text-green-800">{category.title}</h2>
                    <p className="mt-2 text-gray-600">{category.description}</p>

                    <div className="mt-6">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium text-green-700">Benefits</h3>
                        <Link
                          href={category.moreLink}
                          className="flex items-center text-sm font-medium text-green-600 hover:text-green-800"
                        >
                          See more <ChevronRight className="ml-1 h-3 w-3" />
                        </Link>
                      </div>
                      <ul className="mt-2 space-y-2">
                        {category.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <div className="mt-1 rounded-full bg-green-100 p-1 text-green-600">
                              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6">
                      <h3 className="font-medium text-green-700">Services</h3>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {category.subServices.map((service) => (
                          <Link
                            key={service.name}
                            href={service.link}
                            className="inline-flex rounded-full bg-green-50 px-3 py-1 text-sm text-green-700 hover:bg-green-100"
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Column - Fixed Quote Box */}
              <div className="relative hidden md:block">
                <div className="sticky top-24 flex h-[calc(100vh-8rem)] flex-col rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
                  <div className="flex-1">
                    <blockquote className="text-2xl font-light italic leading-relaxed text-gray-600 mt-8">
                      "{activeCategory.quote}"
                    </blockquote>
                  </div>
                  <Button asChild className="mt-4 w-full bg-green-600 hover:bg-green-700">
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </div>
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
