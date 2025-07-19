"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

// Sample review data
const reviews = [
  {
    id: 1,
    name: "Michael Johnson",
    location: "Marietta, GA",
    rating: 5,
    text: "Sanders Lawnscapes has been maintaining our yard for 3 years now. Their attention to detail is incredible, and our lawn has never looked better. Highly recommend their services!",
    service: "Residential Lawn Care",
  },
  {
    id: 2,
    name: "Sarah Williams",
    location: "Kennesaw, GA",
    rating: 5,
    text: "We hired Sanders for a complete landscape redesign and couldn't be happier with the results. They transformed our boring yard into a beautiful outdoor space that we enjoy year-round.",
    service: "Landscape Design",
  },
  {
    id: 3,
    name: "David Thompson",
    location: "Woodstock, GA",
    rating: 5,
    text: "As a property manager, I need reliable contractors. Sanders Lawnscapes has been exceptional - always on time, professional, and they make my properties look fantastic.",
    service: "Commercial Maintenance",
  },
  {
    id: 4,
    name: "Jennifer Martinez",
    location: "Acworth, GA",
    rating: 5,
    text: "The fall cleanup service was thorough and efficient. They removed all the leaves, cleaned the gutters, and left everything spotless. Will definitely use them again next year!",
    service: "Fall Cleanup",
  },
  {
    id: 5,
    name: "Robert Wilson",
    location: "Canton, GA",
    rating: 5,
    text: "I've tried several lawn care companies over the years, but Sanders Lawnscapes is by far the best. Their fertilization program has eliminated all the weeds and my lawn is the envy of the neighborhood.",
    service: "Fertilization & Weed Control",
  },
]

export default function ReviewCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleReviews, setVisibleReviews] = useState<typeof reviews>([])

  // Determine how many reviews to show based on screen size
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      if (width < 640) {
        setVisibleReviews(reviews.slice(currentIndex, currentIndex + 1))
      } else if (width < 1024) {
        setVisibleReviews(reviews.slice(currentIndex, currentIndex + 2))
      } else {
        setVisibleReviews(reviews.slice(currentIndex, currentIndex + 3))
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [currentIndex])

  const nextSlide = () => {
    const reviewsPerPage = getReviewsPerPage()
    setCurrentIndex((prevIndex) => (prevIndex + reviewsPerPage >= reviews.length ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    const reviewsPerPage = getReviewsPerPage()
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? Math.max(0, reviews.length - reviewsPerPage) : prevIndex - 1))
  }

  const getReviewsPerPage = () => {
    const width = window.innerWidth
    if (width < 640) return 1
    if (width < 1024) return 2
    return 3
  }

  return (
    <div className="relative">
      <div className="flex overflow-hidden">
        <div className="flex w-full transition-transform duration-300">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visibleReviews.map((review) => (
              <Card key={review.id} className="flex h-full flex-col p-6">
                <div className="mb-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <p className="flex-1 text-gray-700">"{review.text}"</p>
                <div className="mt-4">
                  <p className="font-medium">{review.name}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-500">{review.location}</p>
                    <p className="text-xs text-green-600">{review.service}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute -left-4 top-1/2 h-8 w-8 -translate-y-1/2 rounded-full border border-gray-200 bg-white"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-4 w-4" />
        <span className="sr-only">Previous slide</span>
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute -right-4 top-1/2 h-8 w-8 -translate-y-1/2 rounded-full border border-gray-200 bg-white"
        onClick={nextSlide}
      >
        <ChevronRight className="h-4 w-4" />
        <span className="sr-only">Next slide</span>
      </Button>

      <div className="mt-6 flex justify-center">
        <Link href="/reviews" className="text-sm font-medium text-green-600 hover:text-green-800">
          View All Reviews
        </Link>
      </div>
    </div>
  )
}

// Helper component for Link
function Link({ href, className, children }: { href: string; className?: string; children: React.ReactNode }) {
  return (
    <a href={href} className={className}>
      {children}
    </a>
  )
}
