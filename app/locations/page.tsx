"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, MapPin, ArrowRight } from "lucide-react"
import EmailSignup from "@/components/email-signup"

// Location data
const locations = [
  {
    id: "marietta",
    name: "Marietta",
    county: "Cobb",
    zipCodes: ["30060", "30061", "30062", "30063", "30064", "30065", "30066", "30067", "30068", "30069"],
    description: "Our headquarters, serving Marietta and surrounding areas with premium lawn care since 2008.",
    image: "/placeholder.svg?height=300&width=500&text=Marietta",
    featured: true,
    services: ["Residential Lawn Care", "Commercial Maintenance", "Landscape Design", "Seasonal Services"],
  },
  {
    id: "kennesaw",
    name: "Kennesaw",
    county: "Cobb",
    zipCodes: ["30144", "30152"],
    description: "Providing expert landscaping and lawn maintenance to Kennesaw homes and businesses.",
    image: "/placeholder.svg?height=300&width=500&text=Kennesaw",
    featured: true,
    services: ["Residential Lawn Care", "Commercial Maintenance", "Irrigation Services"],
  },
  {
    id: "woodstock",
    name: "Woodstock",
    county: "Cherokee",
    zipCodes: ["30188", "30189"],
    description: "Serving Woodstock with comprehensive lawn and landscape solutions for all seasons.",
    image: "/placeholder.svg?height=300&width=500&text=Woodstock",
    featured: true,
    services: ["Residential Lawn Care", "Tree & Shrub Care", "Seasonal Cleanup"],
  },
  {
    id: "acworth",
    name: "Acworth",
    county: "Cobb",
    zipCodes: ["30101", "30102"],
    description: "Bringing beautiful landscapes to Acworth homes and businesses year-round.",
    image: "/placeholder.svg?height=300&width=500&text=Acworth",
    featured: false,
    services: ["Residential Lawn Care", "Landscape Design", "Irrigation Services"],
  },
  {
    id: "canton",
    name: "Canton",
    county: "Cherokee",
    zipCodes: ["30114", "30115"],
    description: "Providing Canton residents with exceptional lawn care and landscaping services.",
    image: "/placeholder.svg?height=300&width=500&text=Canton",
    featured: false,
    services: ["Residential Lawn Care", "Landscape Design", "Seasonal Services"],
  },
  {
    id: "smyrna",
    name: "Smyrna",
    county: "Cobb",
    zipCodes: ["30080", "30082"],
    description: "Delivering professional lawn and landscape services to the Smyrna community.",
    image: "/placeholder.svg?height=300&width=500&text=Smyrna",
    featured: false,
    services: ["Residential Lawn Care", "Commercial Maintenance", "Irrigation Services"],
  },
  {
    id: "roswell",
    name: "Roswell",
    county: "Fulton",
    zipCodes: ["30075", "30076", "30077"],
    description: "Extending our quality lawn care and landscaping expertise to Roswell properties.",
    image: "/placeholder.svg?height=300&width=500&text=Roswell",
    featured: false,
    services: ["Residential Lawn Care", "Tree & Shrub Care", "Landscape Design"],
  },
  {
    id: "alpharetta",
    name: "Alpharetta",
    county: "Fulton",
    zipCodes: ["30004", "30005", "30009", "30022"],
    description: "Bringing our landscaping expertise to Alpharetta homes and businesses.",
    image: "/placeholder.svg?height=300&width=500&text=Alpharetta",
    featured: false,
    services: ["Residential Lawn Care", "Commercial Maintenance", "Seasonal Services"],
  },
]

// Group locations by county
const locationsByCounty = locations.reduce(
  (acc, location) => {
    if (!acc[location.county]) {
      acc[location.county] = []
    }
    acc[location.county].push(location)
    return acc
  },
  {} as Record<string, typeof locations>,
)

export default function LocationsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeLocation, setActiveLocation] = useState(locations[0])
  const [mapView, setMapView] = useState(false)
  const [filteredLocations, setFilteredLocations] = useState(locations)

  useEffect(() => {
    if (searchTerm) {
      const filtered = locations.filter(
        (location) =>
          location.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          location.county.toLowerCase().includes(searchTerm.toLowerCase()) ||
          location.zipCodes.some((zip) => zip.includes(searchTerm)),
      )
      setFilteredLocations(filtered)
    } else {
      setFilteredLocations(locations)
    }
  }, [searchTerm])

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-green-800 py-12 text-white">
          <div className="absolute inset-0 z-0 opacity-20">
            <Image
              src="/placeholder.svg?height=400&width=1920&text=Service+Areas"
              alt="Service Areas"
              fill
              className="object-cover"
            />
          </div>
          <div className="container relative z-10">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Our Service Areas</h1>
              <p className="mt-4 text-lg text-green-100">
                Sanders Lawnscapes proudly serves communities throughout North Atlanta, with a focus on Cobb and
                Cherokee counties.
              </p>
              <div className="mt-8">
                <div className="relative mx-auto max-w-md">
                  <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Search by city, county, or ZIP code"
                    className="pl-10 bg-white text-black"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Map Section */}
        <section className="py-12">
          <div className="container">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-green-800">Explore Our Service Areas</h2>
              <div className="flex items-center space-x-2">
                <Button
                  variant={mapView ? "outline" : "default"}
                  className={mapView ? "border-green-600 text-green-600" : "bg-green-600"}
                  onClick={() => setMapView(false)}
                >
                  List View
                </Button>
                <Button
                  variant={!mapView ? "outline" : "default"}
                  className={!mapView ? "border-green-600 text-green-600" : "bg-green-600"}
                  onClick={() => setMapView(true)}
                >
                  Map View
                </Button>
              </div>
            </div>

            {mapView ? (
              <div className="relative h-[600px] w-full rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
                <div className="absolute inset-0 m-4">
                  <div className="relative h-full w-full overflow-hidden rounded-lg bg-gray-100">
                    <Image
                      src="/placeholder.svg?height=600&width=1200&text=Interactive+Map"
                      alt="Interactive Map"
                      fill
                      className="object-cover"
                    />

                    {/* Map Pins */}
                    {locations.map((location, index) => (
                      <div
                        key={location.id}
                        className={`absolute cursor-pointer transition-all duration-300 ${
                          activeLocation.id === location.id ? "z-10 scale-125" : "z-0"
                        }`}
                        style={{
                          top: `${20 + ((index * 7) % 70)}%`,
                          left: `${15 + ((index * 11) % 70)}%`,
                        }}
                        onClick={() => setActiveLocation(location)}
                      >
                        <div className="flex flex-col items-center">
                          <MapPin
                            className={`h-8 w-8 ${
                              activeLocation.id === location.id ? "text-green-600" : "text-gray-500"
                            }`}
                            fill={activeLocation.id === location.id ? "#16a34a" : "#f3f4f6"}
                          />
                          <span
                            className={`mt-1 rounded-full px-2 py-0.5 text-xs font-medium ${
                              activeLocation.id === location.id
                                ? "bg-green-600 text-white"
                                : "bg-gray-200 text-gray-700"
                            }`}
                          >
                            {location.name}
                          </span>
                        </div>
                      </div>
                    ))}

                    {/* Location Info Card */}
                    {activeLocation && (
                      <div className="absolute bottom-4 right-4 w-72 rounded-lg bg-white p-4 shadow-lg">
                        <h3 className="text-lg font-bold text-green-800">{activeLocation.name}</h3>
                        <p className="text-sm text-gray-500">{activeLocation.county} County</p>
                        <p className="mt-2 text-sm text-gray-600">{activeLocation.description}</p>
                        <div className="mt-3 flex justify-between">
                          <span className="text-xs text-gray-500">ZIP Codes: {activeLocation.zipCodes.join(", ")}</span>
                          <Link
                            href={`/locations/${activeLocation.id}`}
                            className="flex items-center text-xs font-medium text-green-600 hover:text-green-800"
                          >
                            Details <ArrowRight className="ml-1 h-3 w-3" />
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-8">
                {/* Featured Locations */}
                <div>
                  <h3 className="mb-4 text-xl font-bold text-gray-800">Featured Areas</h3>
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    {filteredLocations
                      .filter((location) => location.featured)
                      .map((location) => (
                        <Link
                          key={location.id}
                          href={`/locations/${location.id}`}
                          className="group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md"
                        >
                          <div className="relative h-48 w-full overflow-hidden">
                            <Image
                              src={location.image || "/placeholder.svg"}
                              alt={location.name}
                              fill
                              className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-4">
                              <h4 className="text-xl font-bold text-white">{location.name}</h4>
                              <p className="text-sm text-green-100">{location.county} County</p>
                            </div>
                          </div>
                          <div className="p-4">
                            <p className="text-sm text-gray-600">{location.description}</p>
                            <div className="mt-3 flex flex-wrap gap-1">
                              {location.services.slice(0, 2).map((service) => (
                                <span
                                  key={service}
                                  className="rounded-full bg-green-50 px-2 py-0.5 text-xs text-green-700"
                                >
                                  {service}
                                </span>
                              ))}
                              {location.services.length > 2 && (
                                <span className="rounded-full bg-gray-50 px-2 py-0.5 text-xs text-gray-700">
                                  +{location.services.length - 2} more
                                </span>
                              )}
                            </div>
                          </div>
                        </Link>
                      ))}
                  </div>
                </div>

                {/* Counties Accordion */}
                <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                  <h3 className="mb-6 text-xl font-bold text-gray-800">All Service Areas by County</h3>
                  <div className="space-y-6">
                    {Object.entries(locationsByCounty).map(([county, countyLocations]) => {
                      const filteredCountyLocations = countyLocations.filter((location) =>
                        filteredLocations.some((fl) => fl.id === location.id),
                      )

                      if (filteredCountyLocations.length === 0) return null

                      return (
                        <div key={county} className="rounded-lg border border-gray-200 p-4">
                          <h4 className="text-lg font-medium text-green-800">{county} County</h4>
                          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                            {filteredCountyLocations.map((location) => (
                              <Link
                                key={location.id}
                                href={`/locations/${location.id}`}
                                className="flex items-center justify-between rounded-lg border border-gray-100 bg-gray-50 p-3 transition-colors hover:bg-green-50"
                              >
                                <div>
                                  <h5 className="font-medium">{location.name}</h5>
                                  <p className="text-xs text-gray-500">ZIP: {location.zipCodes.join(", ")}</p>
                                </div>
                                <ArrowRight className="h-4 w-4 text-green-600" />
                              </Link>
                            ))}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* ZIP Code Finder */}
        <section className="bg-green-50 py-12">
          <div className="container">
            <div className="mx-auto max-w-3xl rounded-lg bg-white p-8 shadow-sm">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-green-800">Not Sure If We Serve Your Area?</h2>
                <p className="mt-2 text-gray-600">
                  Enter your ZIP code below to check if we provide service to your location.
                </p>
              </div>
              <div className="mt-6 flex items-center justify-center">
                <div className="relative w-full max-w-md">
                  <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                  <Input type="text" placeholder="Enter your ZIP code" className="pl-10 bg-white text-black" />
                  <Button className="absolute right-0 top-0 h-full rounded-l-none bg-green-600 hover:bg-green-700">
                    Check
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Radius Map */}
        <section className="py-12">
          <div className="container">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <h2 className="text-2xl font-bold text-green-800">Our Service Radius</h2>
                <p className="mt-4 text-gray-600">
                  Sanders Lawnscapes provides service throughout North Atlanta, with a focus on Cobb and Cherokee
                  counties. Our service radius extends approximately 40 miles from our Marietta headquarters.
                </p>
                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="rounded-full bg-green-100 p-2 text-green-600">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">Primary Service Areas</h3>
                      <p className="text-sm text-gray-600">
                        We provide full service to all locations within Cobb and Cherokee counties, including Marietta,
                        Kennesaw, Woodstock, Acworth, and more.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="rounded-full bg-green-100 p-2 text-green-600">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">Extended Service Areas</h3>
                      <p className="text-sm text-gray-600">
                        We also serve select areas in Fulton, Forsyth, and Paulding counties that fall within our
                        40-mile service radius.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <Button asChild className="bg-green-600 hover:bg-green-700">
                    <Link href="/contact">Contact Us for Service</Link>
                  </Button>
                </div>
              </div>
              <div className="relative h-[400px] rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
                <Image
                  src="/placeholder.svg?height=400&width=600&text=Service+Radius+Map"
                  alt="Service Radius Map"
                  fill
                  className="rounded-lg object-cover"
                />
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
