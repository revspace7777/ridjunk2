"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ServiceHero from "@/components/service-hero"
import PromotionalBar from "@/components/promotional-bar"
import EmailSignup from "@/components/email-signup"

// Business service categories data
const businessServiceCategories = [
  {
    id: "commercial-maintenance",
    title: "Commercial Maintenance",
    description: "Comprehensive maintenance programs for commercial properties of all sizes.",
    benefits: [
      "Customized maintenance schedules",
      "Trained and uniformed crews",
      "Liability insurance coverage",
      "Detailed service reports",
      "Dedicated account manager",
    ],
    subServices: [
      { name: "Lawn Maintenance", link: "/services/commercial-lawn" },
      { name: "Landscape Maintenance", link: "/services/commercial-landscape" },
      { name: "Irrigation Management", link: "/services/commercial-irrigation" },
      { name: "Seasonal Color", link: "/services/seasonal-color" },
      { name: "Pest Control", link: "/services/commercial-pest-control" },
    ],
    backgroundImage: "/placeholder.svg?height=800&width=600&text=Commercial+Maintenance",
    quote:
      "Your property's appearance speaks volumes about your business before customers ever walk through the door—let us help you make that first impression count.",
  },
  {
    id: "property-enhancement",
    title: "Property Enhancement",
    description: "Upgrade your commercial property's appearance and functionality with our enhancement services.",
    benefits: [
      "Custom design for your property",
      "Phased implementation options",
      "Minimal disruption to operations",
      "Quality materials and workmanship",
      "Sustainable landscaping options",
    ],
    subServices: [
      { name: "Landscape Renovation", link: "/services/landscape-renovation" },
      { name: "Entrance Enhancement", link: "/services/entrance-enhancement" },
      { name: "Common Area Improvements", link: "/services/common-areas" },
      { name: "Outdoor Seating", link: "/services/outdoor-seating" },
      { name: "Water Features", link: "/services/commercial-water-features" },
    ],
    backgroundImage: "/placeholder.svg?height=800&width=600&text=Property+Enhancement",
    quote:
      "A thoughtfully designed commercial landscape doesn't just beautify—it creates functional spaces that enhance employee satisfaction and customer experience while increasing property value.",
  },
  {
    id: "hoa-services",
    title: "HOA & Community Services",
    description: "Specialized services for homeowners associations and managed communities.",
    benefits: [
      "Comprehensive community maintenance",
      "Common area management",
      "Entrance and amenity area focus",
      "Board meeting attendance",
      "Transparent budgeting and planning",
    ],
    subServices: [
      { name: "Common Area Maintenance", link: "/services/common-area-maintenance" },
      { name: "Entrance Maintenance", link: "/services/entrance-maintenance" },
      { name: "Community Planning", link: "/services/community-planning" },
      { name: "Amenity Areas", link: "/services/amenity-areas" },
      { name: "Budget Planning", link: "/services/budget-planning" },
    ],
    backgroundImage: "/placeholder.svg?height=800&width=600&text=HOA+Services",
    quote:
      "Communities thrive when their shared spaces are meticulously maintained—creating environments where neighbors connect, property values increase, and pride of ownership is evident throughout.",
  },
  {
    id: "snow-ice",
    title: "Snow & Ice Management",
    description: "Keep your commercial property safe and accessible during winter weather events.",
    benefits: [
      "24/7 weather monitoring",
      "Pre-treatment before storms",
      "Rapid response teams",
      "Commercial-grade equipment",
      "Liability documentation",
    ],
    subServices: [
      { name: "Snow Plowing", link: "/services/snow-plowing" },
      { name: "Ice Management", link: "/services/ice-management" },
      { name: "Sidewalk Clearing", link: "/services/sidewalk-clearing" },
      { name: "Pre-treatment", link: "/services/pre-treatment" },
      { name: "Seasonal Contracts", link: "/services/seasonal-contracts" },
    ],
    backgroundImage: "/placeholder.svg?height=800&width=600&text=Snow+Management",
    quote:
      "When winter weather strikes, the difference between being open for business or closed for the day often comes down to having a reliable snow management partner with the right equipment and experience.",
  },
  {
    id: "construction",
    title: "Commercial Construction & Development",
    description: "Landscape construction services for new developments and renovation projects.",
    benefits: [
      "Project management expertise",
      "Code compliance knowledge",
      "Coordination with other contractors",
      "Quality control processes",
      "On-time and on-budget delivery",
    ],
    subServices: [
      { name: "New Construction", link: "/services/new-construction" },
      { name: "Renovation Projects", link: "/services/renovation-projects" },
      { name: "Hardscape Installation", link: "/services/commercial-hardscape" },
      { name: "Drainage Solutions", link: "/services/drainage-solutions" },
      { name: "Erosion Control", link: "/services/commercial-erosion" },
    ],
    backgroundImage: "/placeholder.svg?height=800&width=600&text=Commercial+Construction",
    quote:
      "Successful landscape development requires both vision and precision—transforming architectural plans into living environments that balance aesthetics, functionality, and long-term sustainability.",
  },
  {
    id: "sustainability",
    title: "Sustainable Landscaping",
    description: "Environmentally responsible landscaping solutions for forward-thinking businesses.",
    benefits: [
      "Water conservation strategies",
      "Native plant selections",
      "Reduced maintenance requirements",
      "Stormwater management",
      "LEED certification support",
    ],
    subServices: [
      { name: "Water Conservation", link: "/services/water-conservation" },
      { name: "Native Landscaping", link: "/services/native-landscaping" },
      { name: "Rain Gardens", link: "/services/rain-gardens" },
      { name: "Green Roofs", link: "/services/green-roofs" },
      { name: "Sustainable Maintenance", link: "/services/sustainable-maintenance" },
    ],
    backgroundImage: "/placeholder.svg?height=800&width=600&text=Sustainable+Landscaping",
    quote:
      "Sustainable landscapes do more than look beautiful—they work in harmony with nature to conserve resources, support local ecosystems, and demonstrate your company's commitment to environmental stewardship.",
  },
]

export default function ForBusinessPage() {
  const [activeCategory, setActiveCategory] = useState(businessServiceCategories[0])
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([])

  // Set up intersection observer for each section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id
            const category = businessServiceCategories.find((cat) => cat.id === id)
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
      {/* Header is in the layout */}

      <main className="flex-1">
        {/* Hero Banner */}
        <ServiceHero
          title="For Your Business"
          subtitle="Professional landscaping solutions for commercial properties and organizations"
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
                {businessServiceCategories.map((category, index) => (
                  <div
                    key={category.id}
                    id={category.id}
                    ref={(el) => (sectionRefs.current[index] = el)}
                    className="scroll-mt-24 rounded-lg border border-gray-200 bg-white p-8 py-12 shadow-sm transition-all duration-500 hover:shadow-md"
                  >
                    <h2 className="text-2xl font-bold text-green-800">{category.title}</h2>
                    <p className="mt-2 text-gray-600">{category.description}</p>

                    <div className="mt-6">
                      <h3 className="font-medium text-green-700">Benefits</h3>
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
                    <blockquote className="mt-8 text-2xl font-light italic leading-relaxed text-gray-600">
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

      {/* Footer is in the layout */}
    </div>
  )
}
