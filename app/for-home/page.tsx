"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ServiceHero from "@/components/service-hero"
import PromotionalBar from "@/components/promotional-bar"
import EmailSignup from "@/components/email-signup"

// Home service categories data
const homeServiceCategories = [
  {
    id: "lawn-care",
    title: "Lawn Care & Maintenance",
    description: "Keep your lawn healthy, green, and beautiful year-round with our comprehensive lawn care services.",
    benefits: [
      "Weekly or bi-weekly mowing schedules",
      "Precision edging and trimming",
      "Professional-grade equipment for best results",
      "Consistent cutting height for healthy growth",
      "Clipping removal or mulching options",
    ],
    subServices: [
      { name: "Regular Mowing", link: "/services/regular-mowing" },
      { name: "Edging & Trimming", link: "/services/edging-trimming" },
      { name: "Lawn Fertilization", link: "/services/lawn-fertilization" },
      { name: "Weed Control", link: "/services/weed-control" },
      { name: "Aeration", link: "/services/aeration" },
    ],
    backgroundImage: "/placeholder.svg?height=800&width=600&text=Lawn+Care",
    quote:
      "Imagine stepping onto your lawn barefoot, feeling the soft, lush grass beneath your feet—a perfect green canvas for family memories and peaceful moments in your own backyard sanctuary.",
  },
  {
    id: "landscape-design",
    title: "Landscape Design & Installation",
    description: "Transform your outdoor space with custom landscape design and professional installation services.",
    benefits: [
      "Custom designs tailored to your property",
      "Expert plant selection for your climate",
      "Professional installation by trained technicians",
      "Sustainable landscaping options",
      "Ongoing maintenance plans available",
    ],
    subServices: [
      { name: "Garden Design", link: "/services/garden-design" },
      { name: "Plant Installation", link: "/services/plant-installation" },
      { name: "Hardscape Integration", link: "/services/hardscape-integration" },
      { name: "Outdoor Living Spaces", link: "/services/outdoor-living" },
      { name: "Water Features", link: "/services/water-features" },
    ],
    backgroundImage: "/placeholder.svg?height=800&width=600&text=Landscape+Design",
    quote:
      "Your garden should be a reflection of your personality—a living, breathing extension of your home where beauty meets function in perfect harmony.",
  },
  {
    id: "tree-shrub",
    title: "Tree & Shrub Care",
    description: "Maintain the health and beauty of your trees and shrubs with our specialized care services.",
    benefits: [
      "Expert pruning and shaping",
      "Disease and pest management",
      "Deep root fertilization",
      "Seasonal care programs",
      "Storm damage prevention",
    ],
    subServices: [
      { name: "Pruning & Trimming", link: "/services/pruning-trimming" },
      { name: "Disease Treatment", link: "/services/disease-treatment" },
      { name: "Insect Control", link: "/services/insect-control" },
      { name: "Root Care", link: "/services/root-care" },
      { name: "Tree Removal", link: "/services/tree-removal" },
    ],
    backgroundImage: "/placeholder.svg?height=800&width=600&text=Tree+Care",
    quote:
      "Trees are the silent guardians of your property, providing shade, beauty, and a connection to nature that evolves through the seasons and grows more valuable with each passing year.",
  },
  {
    id: "irrigation",
    title: "Irrigation & Water Management",
    description:
      "Ensure your landscape receives the right amount of water with our irrigation installation and maintenance services.",
    benefits: [
      "Custom irrigation system design",
      "Water-efficient sprinkler installation",
      "Smart controller technology",
      "Seasonal adjustments and maintenance",
      "Leak detection and repair",
    ],
    subServices: [
      { name: "System Installation", link: "/services/irrigation-installation" },
      { name: "System Maintenance", link: "/services/irrigation-maintenance" },
      { name: "Smart Controllers", link: "/services/smart-controllers" },
      { name: "Drip Irrigation", link: "/services/drip-irrigation" },
      { name: "Rainwater Harvesting", link: "/services/rainwater-harvesting" },
    ],
    backgroundImage: "/placeholder.svg?height=800&width=600&text=Irrigation",
    quote:
      "Water is life's most precious resource—our advanced irrigation solutions deliver exactly what your landscape needs, when it needs it, conserving water while keeping your garden thriving.",
  },
  {
    id: "outdoor-living",
    title: "Outdoor Living Spaces",
    description: "Extend your living space outdoors with custom patios, decks, and outdoor kitchens.",
    benefits: [
      "Custom design to match your home's style",
      "Quality materials for durability",
      "Professional installation",
      "Lighting and electrical integration",
      "Maintenance and repair services",
    ],
    subServices: [
      { name: "Patio Design", link: "/services/patio-design" },
      { name: "Outdoor Kitchens", link: "/services/outdoor-kitchens" },
      { name: "Fire Features", link: "/services/fire-features" },
      { name: "Pergolas & Shade", link: "/services/pergolas" },
      { name: "Outdoor Lighting", link: "/services/outdoor-lighting" },
    ],
    backgroundImage: "/placeholder.svg?height=800&width=600&text=Outdoor+Living",
    quote:
      "Your backyard should be your favorite destination—a personal retreat where comfort meets nature, and every evening feels like a perfect getaway without ever leaving home.",
  },
  {
    id: "lawn-renovation",
    title: "Lawn Renovation & Restoration",
    description: "Revitalize damaged or neglected lawns with our comprehensive renovation services.",
    benefits: [
      "Soil testing and amendment",
      "Grading and preparation",
      "Premium seed or sod installation",
      "Hydroseeding options",
      "Follow-up care program",
    ],
    subServices: [
      { name: "Sod Installation", link: "/services/sod-installation" },
      { name: "Hydroseeding", link: "/services/hydroseeding" },
      { name: "Soil Preparation", link: "/services/soil-preparation" },
      { name: "Grading", link: "/services/grading" },
      { name: "Erosion Control", link: "/services/erosion-control" },
    ],
    backgroundImage: "/placeholder.svg?height=800&width=600&text=Lawn+Renovation",
    quote:
      "Even the most neglected lawn holds potential for transformation—within weeks, what was once bare and brown can become a lush carpet of green that makes your whole property shine.",
  },
]

export default function ForHomePage() {
  const [activeCategory, setActiveCategory] = useState(homeServiceCategories[0])
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([])

  // Set up intersection observer for each section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id
            const category = homeServiceCategories.find((cat) => cat.id === id)
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
          title="For Your Home"
          subtitle="Comprehensive lawn care and landscaping services for residential properties"
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
                {homeServiceCategories.map((category, index) => (
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
