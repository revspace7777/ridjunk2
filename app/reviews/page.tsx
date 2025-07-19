"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Star, Search, MapPin, Quote, ThumbsUp, MessageSquare, Filter, Camera, Video, CheckCircle } from "lucide-react"
import EmailSignup from "@/components/email-signup"

// Sample review data
const reviews = [
  {
    id: 1,
    name: "Michael Johnson",
    location: "Marietta, GA",
    rating: 5,
    date: "2023-08-15",
    text: "Sanders Lawnscapes has been maintaining our yard for 3 years now. Their attention to detail is incredible, and our lawn has never looked better. The team is always punctual, professional, and they go above and beyond to ensure our property looks its best. Highly recommend their services!",
    service: "Residential Lawn Care",
    verified: true,
    helpful: 24,
    hasImages: true,
    images: [
      "/placeholder.svg?height=400&width=600&text=Lawn+Before",
      "/placeholder.svg?height=400&width=600&text=Lawn+After",
    ],
    response: {
      name: "John Sanders",
      text: "Thank you for your kind words, Michael! We're thrilled to hear that you're happy with our services. We take pride in our attention to detail and it's wonderful to know that it shows in our work.",
      date: "2023-08-17",
    },
  },
  {
    id: 2,
    name: "Sarah Williams",
    location: "Kennesaw, GA",
    rating: 5,
    date: "2023-07-22",
    text: "We hired Sanders for a complete landscape redesign and couldn't be happier with the results. They transformed our boring yard into a beautiful outdoor space that we enjoy year-round. The design team listened to our needs and created exactly what we envisioned. The installation crew was professional and efficient.",
    service: "Landscape Design",
    verified: true,
    helpful: 18,
    hasVideo: true,
    videoThumbnail: "/placeholder.svg?height=400&width=600&text=Landscape+Video+Testimonial",
    response: null,
  },
  {
    id: 3,
    name: "David Thompson",
    location: "Woodstock, GA",
    rating: 5,
    date: "2023-09-05",
    text: "As a property manager, I need reliable contractors. Sanders Lawnscapes has been exceptional - always on time, professional, and they make my properties look fantastic. Their commercial maintenance packages are comprehensive and reasonably priced. I manage 5 properties and use them for all of them now.",
    service: "Commercial Maintenance",
    verified: true,
    helpful: 32,
    hasImages: false,
    response: {
      name: "John Sanders",
      text: "Thank you for trusting us with your properties, David! We value our commercial clients and strive to provide consistent, reliable service. We appreciate your business and look forward to continuing our partnership.",
      date: "2023-09-06",
    },
  },
  {
    id: 4,
    name: "Jennifer Martinez",
    location: "Acworth, GA",
    rating: 5,
    date: "2023-11-12",
    text: "The fall cleanup service was thorough and efficient. They removed all the leaves, cleaned the gutters, and left everything spotless. Will definitely use them again next year! The crew was friendly and worked quickly without sacrificing quality.",
    service: "Fall Cleanup",
    verified: true,
    helpful: 15,
    hasImages: true,
    images: [
      "/placeholder.svg?height=400&width=600&text=Fall+Cleanup+Before",
      "/placeholder.svg?height=400&width=600&text=Fall+Cleanup+After",
    ],
    response: null,
  },
  {
    id: 5,
    name: "Robert Wilson",
    location: "Canton, GA",
    rating: 5,
    date: "2023-06-30",
    text: "I've tried several lawn care companies over the years, but Sanders Lawnscapes is by far the best. Their fertilization program has eliminated all the weeds and my lawn is the envy of the neighborhood. Their technicians are knowledgeable and always take time to answer my questions.",
    service: "Fertilization & Weed Control",
    verified: true,
    helpful: 27,
    hasImages: false,
    response: {
      name: "John Sanders",
      text: "We're delighted to hear about your results, Robert! Our fertilization program is designed to provide optimal results, and we're glad to see it's working so well for your lawn. Thank you for your business!",
      date: "2023-07-02",
    },
  },
  {
    id: 6,
    name: "Emily Davis",
    location: "Roswell, GA",
    rating: 4,
    date: "2023-05-18",
    text: "Sanders Lawnscapes did a great job with our spring cleanup and mulch installation. The only reason I'm giving 4 stars instead of 5 is that they were a day late starting the project due to equipment issues. However, they communicated this promptly and made up for it with excellent service.",
    service: "Spring Cleanup",
    verified: true,
    helpful: 12,
    hasImages: true,
    images: ["/placeholder.svg?height=400&width=600&text=Spring+Mulch+Installation"],
    response: {
      name: "John Sanders",
      text: "Thank you for your feedback, Emily. We apologize for the delay in starting your project. We appreciate your understanding and are glad that you were pleased with the final results. We've since added additional equipment to prevent similar issues in the future.",
      date: "2023-05-19",
    },
  },
  {
    id: 7,
    name: "Thomas Brown",
    location: "Alpharetta, GA",
    rating: 5,
    date: "2023-10-08",
    text: "Sanders Lawnscapes installed an irrigation system for our property last month, and we're extremely satisfied with the results. The system was expertly designed to provide optimal coverage, and the installation was completed with minimal disruption to our landscape. Their team was professional and knowledgeable.",
    service: "Irrigation Installation",
    verified: true,
    helpful: 19,
    hasImages: false,
    response: null,
  },
  {
    id: 8,
    name: "Lisa Garcia",
    location: "Smyrna, GA",
    rating: 5,
    date: "2023-07-14",
    text: "We recently had Sanders Lawnscapes install a patio and outdoor kitchen in our backyard, and the results exceeded our expectations. From the initial design consultation to the final walkthrough, their team was professional, creative, and attentive to detail. We now have the perfect outdoor entertaining space!",
    service: "Outdoor Living Spaces",
    verified: true,
    helpful: 31,
    hasVideo: true,
    videoThumbnail: "/placeholder.svg?height=400&width=600&text=Patio+Video+Testimonial",
    response: {
      name: "John Sanders",
      text: "Thank you for your wonderful review, Lisa! We're thrilled that you're enjoying your new outdoor living space. It was a pleasure working with you to create your dream patio and outdoor kitchen.",
      date: "2023-07-16",
    },
  },
  {
    id: 9,
    name: "Kevin Miller",
    location: "Marietta, GA",
    rating: 5,
    date: "2023-08-29",
    text: "Sanders Lawnscapes has been taking care of our HOA common areas for the past year, and the difference is remarkable. The grounds have never looked better, and their communication with our board has been excellent. They provide detailed service reports and are always responsive to our requests.",
    service: "HOA Maintenance",
    verified: true,
    helpful: 22,
    hasImages: true,
    images: [
      "/placeholder.svg?height=400&width=600&text=HOA+Entrance",
      "/placeholder.svg?height=400&width=600&text=HOA+Common+Area",
    ],
    response: null,
  },
  {
    id: 10,
    name: "Amanda Taylor",
    location: "Kennesaw, GA",
    rating: 5,
    date: "2023-09-22",
    text: "I hired Sanders Lawnscapes for tree trimming and removal services, and they did an outstanding job. Their arborist provided expert advice on which trees needed attention, and their crew worked safely and efficiently. They completely cleaned up after the job and left my property looking great.",
    service: "Tree & Shrub Care",
    verified: true,
    helpful: 16,
    hasImages: false,
    response: {
      name: "John Sanders",
      text: "Thank you for trusting us with your tree care needs, Amanda! We're glad to hear that you were satisfied with our services. Our arborists take pride in providing expert advice and quality work.",
      date: "2023-09-24",
    },
  },
]

// Service categories for filtering
const serviceCategories = [
  "All Services",
  "Residential Lawn Care",
  "Landscape Design",
  "Commercial Maintenance",
  "Fall Cleanup",
  "Spring Cleanup",
  "Fertilization & Weed Control",
  "Irrigation Installation",
  "Outdoor Living Spaces",
  "HOA Maintenance",
  "Tree & Shrub Care",
]

// Locations for filtering
const locations = [
  "All Locations",
  "Marietta, GA",
  "Kennesaw, GA",
  "Woodstock, GA",
  "Acworth, GA",
  "Canton, GA",
  "Roswell, GA",
  "Alpharetta, GA",
  "Smyrna, GA",
]

export default function ReviewsPage() {
  const [activeTab, setActiveTab] = useState("all")
  const [filteredReviews, setFilteredReviews] = useState(reviews)
  const [searchTerm, setSearchTerm] = useState("")
  const [serviceFilter, setServiceFilter] = useState("All Services")
  const [locationFilter, setLocationFilter] = useState("All Locations")
  const [showFilters, setShowFilters] = useState(false)
  const [sortBy, setSortBy] = useState("newest")
  const [featuredReview, setFeaturedReview] = useState(reviews[0])
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  // Apply filters and sorting
  useEffect(() => {
    let result = [...reviews]

    // Filter by tab
    if (activeTab === "with-images") {
      result = result.filter((review) => review.hasImages || review.hasVideo)
    } else if (activeTab === "with-responses") {
      result = result.filter((review) => review.response)
    } else if (activeTab === "video") {
      result = result.filter((review) => review.hasVideo)
    }

    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase()
      result = result.filter(
        (review) =>
          review.text.toLowerCase().includes(term) ||
          review.name.toLowerCase().includes(term) ||
          review.service.toLowerCase().includes(term) ||
          review.location.toLowerCase().includes(term),
      )
    }

    // Filter by service
    if (serviceFilter !== "All Services") {
      result = result.filter((review) => review.service === serviceFilter)
    }

    // Filter by location
    if (locationFilter !== "All Locations") {
      result = result.filter((review) => review.location === locationFilter)
    }

    // Sort reviews
    if (sortBy === "newest") {
      result.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    } else if (sortBy === "oldest") {
      result.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    } else if (sortBy === "highest") {
      result.sort((a, b) => b.rating - a.rating)
    } else if (sortBy === "most-helpful") {
      result.sort((a, b) => b.helpful - a.helpful)
    }

    setFilteredReviews(result)

    // Set a featured review (first one with image or video)
    const withMedia = result.find((review) => review.hasImages || review.hasVideo)
    if (withMedia) {
      setFeaturedReview(withMedia)
    } else if (result.length > 0) {
      setFeaturedReview(result[0])
    }
  }, [activeTab, searchTerm, serviceFilter, locationFilter, sortBy])

  // Format date to readable string
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric" }
    return new Date(dateString).toLocaleDateString("en-US", options)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-green-800 py-12 text-white">
          <div className="absolute inset-0 z-0 opacity-20">
            <Image
              src="/placeholder.svg?height=400&width=1920&text=Happy+Customers"
              alt="Happy Customers"
              fill
              className="object-cover"
            />
          </div>
          <div className="container relative z-10 text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Customer Reviews</h1>
            <div className="mx-auto mt-4 flex max-w-lg items-center justify-center">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="ml-2 text-xl font-bold">4.9/5</span>
              <span className="ml-2 text-green-100">based on 248 reviews</span>
            </div>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-green-100">
              See what our customers are saying about our lawn care and landscaping services
            </p>
          </div>
        </section>

        {/* Featured Review Section */}
        {featuredReview && (
          <section className="bg-green-50 py-12">
            <div className="container">
              <div className="mb-8 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-green-800">Featured Review</h2>
                <Button asChild variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                  <Link href="#write-review">Share Your Experience</Link>
                </Button>
              </div>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className="relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
                  {featuredReview.hasVideo ? (
                    <div className="relative h-80 w-full">
                      <Image
                        src={featuredReview.videoThumbnail || "/placeholder.svg"}
                        alt="Video testimonial"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-16 w-16 rounded-full bg-white/80 text-green-600 hover:bg-white hover:text-green-700"
                              onClick={() => setIsVideoPlaying(true)}
                            >
                              <Video className="h-8 w-8" />
                              <span className="sr-only">Play Video</span>
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-[800px]">
                            <DialogHeader>
                              <DialogTitle>Video Testimonial from {featuredReview.name}</DialogTitle>
                            </DialogHeader>
                            <div className="aspect-video bg-black">
                              <div className="flex h-full items-center justify-center text-white">
                                Video would play here in a real implementation
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </div>
                  ) : featuredReview.hasImages ? (
                    <div className="relative h-80 w-full">
                      <Image
                        src={featuredReview.images?.[0] || "/placeholder.svg"}
                        alt="Review image"
                        fill
                        className="object-cover"
                      />
                      {featuredReview.images && featuredReview.images.length > 1 && (
                        <div className="absolute bottom-4 right-4">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button
                                variant="outline"
                                size="sm"
                                className="bg-white/80 text-green-600 hover:bg-white hover:text-green-700"
                              >
                                <Camera className="mr-2 h-4 w-4" />
                                View All Photos
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[800px]">
                              <DialogHeader>
                                <DialogTitle>Photos from {featuredReview.name}</DialogTitle>
                              </DialogHeader>
                              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                {featuredReview.images?.map((image, index) => (
                                  <div key={index} className="relative h-60 overflow-hidden rounded-md">
                                    <Image
                                      src={image || "/placeholder.svg"}
                                      alt={`Review image ${index + 1}`}
                                      fill
                                      className="object-cover"
                                    />
                                  </div>
                                ))}
                              </div>
                            </DialogContent>
                          </Dialog>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="flex h-80 items-center justify-center bg-green-50 p-8">
                      <Quote className="h-24 w-24 text-green-200" />
                    </div>
                  )}
                </div>

                <div className="flex flex-col justify-between rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                  <div>
                    <div className="mb-4 flex items-center justify-between">
                      <div>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-5 w-5 ${
                                i < featuredReview.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <h3 className="mt-1 text-lg font-bold">{featuredReview.name}</h3>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 text-green-600" />
                          <span className="ml-1 text-sm text-gray-500">{featuredReview.location}</span>
                        </div>
                        <p className="text-sm text-gray-500">{formatDate(featuredReview.date)}</p>
                      </div>
                    </div>

                    <div className="mb-4 flex items-center gap-2">
                      <Badge variant="outline" className="bg-green-50 text-green-700">
                        {featuredReview.service}
                      </Badge>
                      {featuredReview.verified && (
                        <Badge variant="outline" className="border-green-200 bg-green-50 text-green-700">
                          <CheckCircle className="mr-1 h-3 w-3" /> Verified Customer
                        </Badge>
                      )}
                    </div>

                    <div className="prose max-w-none">
                      <p className="text-gray-700">{featuredReview.text}</p>
                    </div>

                    {featuredReview.response && (
                      <div className="mt-4 rounded-lg bg-gray-50 p-4">
                        <div className="mb-2 flex items-center justify-between">
                          <p className="font-medium">Response from {featuredReview.response.name}</p>
                          <p className="text-sm text-gray-500">{formatDate(featuredReview.response.date)}</p>
                        </div>
                        <p className="text-sm text-gray-700">{featuredReview.response.text}</p>
                      </div>
                    )}
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center">
                      <Button variant="ghost" size="sm" className="text-gray-500 hover:text-green-600">
                        <ThumbsUp className="mr-1 h-4 w-4" />
                        Helpful ({featuredReview.helpful})
                      </Button>
                    </div>
                    <Button variant="ghost" size="sm" className="text-gray-500 hover:text-green-600">
                      <MessageSquare className="mr-1 h-4 w-4" />
                      Share
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Reviews Section */}
        <section className="py-12">
          <div className="container">
            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-2xl font-bold text-green-800">Customer Reviews</h2>
              <div className="flex flex-wrap items-center gap-2">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Search reviews"
                    className="pl-9"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <Button
                  variant="outline"
                  className="flex items-center gap-1"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <Filter className="h-4 w-4" />
                  Filters
                </Button>
              </div>
            </div>

            {/* Filters */}
            {showFilters && (
              <div className="mb-6 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                  <div>
                    <Label htmlFor="service-filter">Filter by Service</Label>
                    <select
                      id="service-filter"
                      className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:border-green-500 focus:outline-none focus:ring-green-500"
                      value={serviceFilter}
                      onChange={(e) => setServiceFilter(e.target.value)}
                    >
                      {serviceCategories.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="location-filter">Filter by Location</Label>
                    <select
                      id="location-filter"
                      className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:border-green-500 focus:outline-none focus:ring-green-500"
                      value={locationFilter}
                      onChange={(e) => setLocationFilter(e.target.value)}
                    >
                      {locations.map((location) => (
                        <option key={location} value={location}>
                          {location}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="sort-by">Sort By</Label>
                    <select
                      id="sort-by"
                      className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:border-green-500 focus:outline-none focus:ring-green-500"
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                    >
                      <option value="newest">Newest First</option>
                      <option value="oldest">Oldest First</option>
                      <option value="highest">Highest Rating</option>
                      <option value="most-helpful">Most Helpful</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Tabs */}
            <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="mb-6 grid w-full grid-cols-2 md:grid-cols-4">
                <TabsTrigger value="all" className="data-[state=active]:bg-green-50 data-[state=active]:text-green-700">
                  All Reviews
                </TabsTrigger>
                <TabsTrigger
                  value="with-images"
                  className="data-[state=active]:bg-green-50 data-[state=active]:text-green-700"
                >
                  With Photos/Videos
                </TabsTrigger>
                <TabsTrigger
                  value="with-responses"
                  className="data-[state=active]:bg-green-50 data-[state=active]:text-green-700"
                >
                  With Responses
                </TabsTrigger>
                <TabsTrigger
                  value="video"
                  className="data-[state=active]:bg-green-50 data-[state=active]:text-green-700"
                >
                  Video Testimonials
                </TabsTrigger>
              </TabsList>

              <TabsContent value={activeTab} className="mt-0">
                {filteredReviews.length === 0 ? (
                  <div className="rounded-lg border border-gray-200 bg-white p-8 text-center shadow-sm">
                    <p className="text-gray-500">No reviews match your current filters. Try adjusting your criteria.</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {filteredReviews.map((review) => (
                      <Card key={review.id} className="overflow-hidden">
                        <div className="p-6">
                          <div className="mb-4 flex items-center justify-between">
                            <div>
                              <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`h-5 w-5 ${
                                      i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                                    }`}
                                  />
                                ))}
                              </div>
                              <h3 className="mt-1 font-bold">{review.name}</h3>
                            </div>
                            <div className="text-right">
                              <div className="flex items-center">
                                <MapPin className="h-4 w-4 text-green-600" />
                                <span className="ml-1 text-sm text-gray-500">{review.location}</span>
                              </div>
                              <p className="text-sm text-gray-500">{formatDate(review.date)}</p>
                            </div>
                          </div>

                          <div className="mb-4 flex items-center gap-2">
                            <Badge variant="outline" className="bg-green-50 text-green-700">
                              {review.service}
                            </Badge>
                            {review.verified && (
                              <Badge variant="outline" className="border-green-200 bg-green-50 text-green-700">
                                <CheckCircle className="mr-1 h-3 w-3" /> Verified
                              </Badge>
                            )}
                          </div>

                          <p className="text-gray-700">{review.text}</p>

                          {/* Media Preview */}
                          {(review.hasImages || review.hasVideo) && (
                            <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
                              {review.hasVideo && (
                                <Dialog>
                                  <DialogTrigger asChild>
                                    <div className="relative h-20 w-32 cursor-pointer overflow-hidden rounded-md">
                                      <Image
                                        src={review.videoThumbnail || "/placeholder.svg"}
                                        alt="Video thumbnail"
                                        fill
                                        className="object-cover"
                                      />
                                      <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                                        <Video className="h-8 w-8 text-white" />
                                      </div>
                                    </div>
                                  </DialogTrigger>
                                  <DialogContent className="sm:max-w-[800px]">
                                    <DialogHeader>
                                      <DialogTitle>Video Testimonial from {review.name}</DialogTitle>
                                    </DialogHeader>
                                    <div className="aspect-video bg-black">
                                      <div className="flex h-full items-center justify-center text-white">
                                        Video would play here in a real implementation
                                      </div>
                                    </div>
                                  </DialogContent>
                                </Dialog>
                              )}
                              {review.hasImages &&
                                review.images?.map((image, index) => (
                                  <Dialog key={index}>
                                    <DialogTrigger asChild>
                                      <div className="relative h-20 w-32 cursor-pointer overflow-hidden rounded-md">
                                        <Image
                                          src={image || "/placeholder.svg"}
                                          alt={`Review image ${index + 1}`}
                                          fill
                                          className="object-cover"
                                        />
                                      </div>
                                    </DialogTrigger>
                                    <DialogContent className="sm:max-w-[800px]">
                                      <DialogHeader>
                                        <DialogTitle>Photo from {review.name}</DialogTitle>
                                      </DialogHeader>
                                      <div className="relative h-[500px] w-full overflow-hidden rounded-md">
                                        <Image
                                          src={image || "/placeholder.svg"}
                                          alt={`Review image ${index + 1}`}
                                          fill
                                          className="object-contain"
                                        />
                                      </div>
                                    </DialogContent>
                                  </Dialog>
                                ))}
                            </div>
                          )}

                          {/* Owner Response */}
                          {review.response && (
                            <div className="mt-4 rounded-lg bg-gray-50 p-4">
                              <div className="mb-2 flex items-center justify-between">
                                <p className="font-medium">Response from {review.response.name}</p>
                                <p className="text-sm text-gray-500">{formatDate(review.response.date)}</p>
                              </div>
                              <p className="text-sm text-gray-700">{review.response.text}</p>
                            </div>
                          )}

                          <div className="mt-4 flex items-center justify-between">
                            <div className="flex items-center">
                              <Button variant="ghost" size="sm" className="text-gray-500 hover:text-green-600">
                                <ThumbsUp className="mr-1 h-4 w-4" />
                                Helpful ({review.helpful})
                              </Button>
                            </div>
                            <Button variant="ghost" size="sm" className="text-gray-500 hover:text-green-600">
                              <MessageSquare className="mr-1 h-4 w-4" />
                              Share
                            </Button>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                )}
              </TabsContent>
            </Tabs>

            {/* Pagination */}
            {filteredReviews.length > 0 && (
              <div className="mt-8 flex justify-center">
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" disabled>
                    Previous
                  </Button>
                  <Button variant="outline" size="sm" className="bg-green-50 text-green-700">
                    1
                  </Button>
                  <Button variant="outline" size="sm">
                    2
                  </Button>
                  <Button variant="outline" size="sm">
                    3
                  </Button>
                  <Button variant="outline" size="sm">
                    Next
                  </Button>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Write a Review Section */}
        <section id="write-review" className="bg-green-50 py-12">
          <div className="container">
            <div className="mx-auto max-w-3xl rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
              <h2 className="mb-6 text-center text-2xl font-bold text-green-800">Share Your Experience</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="Your name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="Your email" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Your Rating</Label>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Button key={i} type="button" variant="ghost" className="h-10 w-10 p-0 hover:bg-transparent">
                        <Star className="h-8 w-8 text-gray-300 hover:fill-yellow-400 hover:text-yellow-400" />
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">Service Received</Label>
                  <select
                    id="service"
                    className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:border-green-500 focus:outline-none focus:ring-green-500"
                    required
                  >
                    <option value="">Select a service</option>
                    {serviceCategories.slice(1).map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="review">Your Review</Label>
                  <Textarea id="review" placeholder="Share your experience with our services..." rows={5} required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="photos">Upload Photos (Optional)</Label>
                  <Input id="photos" type="file" multiple accept="image/*" className="cursor-pointer" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="video">Upload Video Testimonial (Optional)</Label>
                  <Input id="video" type="file" accept="video/*" className="cursor-pointer" />
                </div>

                <div className="text-center">
                  <Button type="submit" className="bg-green-600 hover:bg-green-700">
                    Submit Review
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Review Stats */}
        <section className="py-12">
          <div className="container">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="rounded-lg border border-gray-200 bg-white p-6 text-center shadow-sm">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <Star className="h-8 w-8 fill-green-600 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-green-800">4.9/5</h3>
                <p className="text-gray-600">Average Rating</p>
                <div className="mt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">5 Stars</span>
                    <div className="mx-2 h-2 flex-1 rounded-full bg-gray-200">
                      <div className="h-2 w-[92%] rounded-full bg-green-600"></div>
                    </div>
                    <span className="text-sm">92%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">4 Stars</span>
                    <div className="mx-2 h-2 flex-1 rounded-full bg-gray-200">
                      <div className="h-2 w-[6%] rounded-full bg-green-600"></div>
                    </div>
                    <span className="text-sm">6%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">3 Stars</span>
                    <div className="mx-2 h-2 flex-1 rounded-full bg-gray-200">
                      <div className="h-2 w-[2%] rounded-full bg-green-600"></div>
                    </div>
                    <span className="text-sm">2%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">2 Stars</span>
                    <div className="mx-2 h-2 flex-1 rounded-full bg-gray-200">
                      <div className="h-2 w-0 rounded-full bg-green-600"></div>
                    </div>
                    <span className="text-sm">0%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">1 Star</span>
                    <div className="mx-2 h-2 flex-1 rounded-full bg-gray-200">
                      <div className="h-2 w-0 rounded-full bg-green-600"></div>
                    </div>
                    <span className="text-sm">0%</span>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="mb-4 text-xl font-bold text-green-800">Most Reviewed Services</h3>
                <ul className="space-y-4">
                  <li className="flex items-center justify-between">
                    <span>Residential Lawn Care</span>
                    <Badge className="bg-green-100 text-green-700">86 reviews</Badge>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Landscape Design</span>
                    <Badge className="bg-green-100 text-green-700">52 reviews</Badge>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Fall Cleanup</span>
                    <Badge className="bg-green-100 text-green-700">37 reviews</Badge>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Tree & Shrub Care</span>
                    <Badge className="bg-green-100 text-green-700">29 reviews</Badge>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Commercial Maintenance</span>
                    <Badge className="bg-green-100 text-green-700">24 reviews</Badge>
                  </li>
                </ul>
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="mb-4 text-xl font-bold text-green-800">Customer Satisfaction</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between">
                      <span>Service Quality</span>
                      <span className="font-medium">98%</span>
                    </div>
                    <div className="mt-1 h-2 rounded-full bg-gray-200">
                      <div className="h-2 w-[98%] rounded-full bg-green-600"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <span>Timeliness</span>
                      <span className="font-medium">96%</span>
                    </div>
                    <div className="mt-1 h-2 rounded-full bg-gray-200">
                      <div className="h-2 w-[96%] rounded-full bg-green-600"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <span>Communication</span>
                      <span className="font-medium">97%</span>
                    </div>
                    <div className="mt-1 h-2 rounded-full bg-gray-200">
                      <div className="h-2 w-[97%] rounded-full bg-green-600"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <span>Value for Money</span>
                      <span className="font-medium">95%</span>
                    </div>
                    <div className="mt-1 h-2 rounded-full bg-gray-200">
                      <div className="h-2 w-[95%] rounded-full bg-green-600"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <span>Would Recommend</span>
                      <span className="font-medium">99%</span>
                    </div>
                    <div className="mt-1 h-2 rounded-full bg-gray-200">
                      <div className="h-2 w-[99%] rounded-full bg-green-600"></div>
                    </div>
                  </div>
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
