"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Scissors, Leaf, Flower2, TreePine, Droplets, Shovel, Home, Building2, CalendarDays } from "lucide-react"
import Link from "next/link"

// Service data structure
const services = {
  residential: {
    name: "Residential Lawn Care",
    icon: <Home className="h-5 w-5" />,
    services: [
      {
        id: "mowing",
        name: "Lawn Mowing",
        icon: <Scissors className="h-5 w-5" />,
        description: "Regular lawn mowing services to keep your yard looking its best.",
        features: [
          "Weekly or bi-weekly service options",
          "Precision edging along walkways and driveways",
          "Clipping removal or mulching options",
          "Attention to detail around obstacles and garden beds",
          "Consistent cutting height for healthy grass growth",
        ],
      },
      {
        id: "fertilization",
        name: "Fertilization & Weed Control",
        icon: <Leaf className="h-5 w-5" />,
        description: "Keep your lawn healthy and weed-free with our treatment programs.",
        features: [
          "Customized fertilization schedule based on grass type",
          "Pre-emergent and post-emergent weed control",
          "Environmentally responsible products",
          "Targeted spot treatments for problem areas",
          "Seasonal applications for year-round protection",
        ],
      },
      {
        id: "aeration",
        name: "Aeration & Overseeding",
        icon: <Droplets className="h-5 w-5" />,
        description: "Improve soil health and grass density with our aeration services.",
        features: [
          "Core aeration to reduce soil compaction",
          "Premium grass seed varieties for your region",
          "Improved water and nutrient absorption",
          "Enhanced root development",
          "Thicker, healthier lawn development",
        ],
      },
    ],
  },
  curbAppeal: {
    name: "Curbside Appeal",
    icon: <Flower2 className="h-5 w-5" />,
    services: [
      {
        id: "landscaping",
        name: "Landscape Design & Installation",
        icon: <Shovel className="h-5 w-5" />,
        description: "Transform your outdoor space with professional landscape design.",
        features: [
          "Custom design consultations",
          "Plant selection for your specific environment",
          "Installation of trees, shrubs, and flower beds",
          "Mulching and decorative stone placement",
          "Lighting and water feature options",
        ],
      },
      {
        id: "hedges",
        name: "Hedge & Shrub Trimming",
        icon: <Scissors className="h-5 w-5" />,
        description: "Keep your hedges and shrubs shaped and healthy.",
        features: [
          "Precision trimming and shaping",
          "Removal of dead or diseased branches",
          "Promotion of healthy new growth",
          "Maintenance of privacy screens",
          "Seasonal pruning for optimal plant health",
        ],
      },
      {
        id: "mulching",
        name: "Mulching & Bed Maintenance",
        icon: <Leaf className="h-5 w-5" />,
        description: "Fresh mulch and maintained beds enhance your landscape's appearance.",
        features: [
          "Premium mulch options in various colors",
          "Weed barrier installation",
          "Bed edging for clean, defined lines",
          "Seasonal flower planting",
          "Ongoing bed maintenance and weed control",
        ],
      },
    ],
  },
  seasonal: {
    name: "Property Upkeep & All Season Care",
    icon: <CalendarDays className="h-5 w-5" />,
    services: [
      {
        id: "fallCleanup",
        name: "Fall Cleanup",
        icon: <Leaf className="h-5 w-5" />,
        description: "Prepare your property for winter with our comprehensive fall cleanup.",
        features: [
          "Leaf removal and disposal",
          "Gutter cleaning",
          "Final mowing at reduced height",
          "Winterizing irrigation systems",
          "Plant protection for cold weather",
        ],
      },
      {
        id: "springCleanup",
        name: "Spring Cleanup",
        icon: <Flower2 className="h-5 w-5" />,
        description: "Refresh your landscape after winter with our spring cleanup services.",
        features: [
          "Debris removal from winter storms",
          "Pruning of winter damage",
          "Bed preparation for new growth",
          "Pre-emergent weed control application",
          "First mowing and edging of the season",
        ],
      },
      {
        id: "treeService",
        name: "Tree & Shrub Care",
        icon: <TreePine className="h-5 w-5" />,
        description: "Maintain the health and beauty of your trees and shrubs year-round.",
        features: [
          "Disease and pest management",
          "Deep root fertilization",
          "Structural pruning for safety",
          "Growth regulation treatments",
          "Storm damage prevention",
        ],
      },
    ],
  },
  commercial: {
    name: "Commercial Services",
    icon: <Building2 className="h-5 w-5" />,
    services: [
      {
        id: "commercialMaint",
        name: "Commercial Maintenance",
        icon: <Building2 className="h-5 w-5" />,
        description: "Complete property maintenance for businesses and commercial properties.",
        features: [
          "Customized maintenance schedules",
          "Early morning or weekend service options",
          "Liability insurance coverage",
          "Professional uniformed crews",
          "Monthly service reports",
        ],
      },
      {
        id: "propertyEnhancement",
        name: "Property Enhancement",
        icon: <Shovel className="h-5 w-5" />,
        description: "Improve your commercial property's appearance and value.",
        features: [
          "Seasonal color rotations",
          "Entrance and common area focus",
          "Water-efficient landscape designs",
          "Hardscape installation and repair",
          "Outdoor seating area development",
        ],
      },
      {
        id: "snowRemoval",
        name: "Snow & Ice Management",
        icon: <Droplets className="h-5 w-5" />,
        description: "Keep your commercial property safe and accessible during winter weather.",
        features: [
          "24/7 monitoring of weather conditions",
          "Pre-treatment before storms",
          "Plowing, shoveling, and snow blowing",
          "Ice melt application",
          "Liability documentation",
        ],
      },
    ],
  },
}

export default function ServiceTabs() {
  const [selectedService, setSelectedService] = useState(services.residential.services[0])

  const handleServiceHover = (service: typeof selectedService) => {
    setSelectedService(service)
  }

  return (
    <Tabs defaultValue="residential" className="w-full">
      <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
        <TabsTrigger value="residential" className="flex items-center gap-2">
          <Home className="h-4 w-4" />
          <span className="hidden sm:inline">Residential</span>
        </TabsTrigger>
        <TabsTrigger value="curbAppeal" className="flex items-center gap-2">
          <Flower2 className="h-4 w-4" />
          <span className="hidden sm:inline">Curbside Appeal</span>
        </TabsTrigger>
        <TabsTrigger value="seasonal" className="flex items-center gap-2">
          <CalendarDays className="h-4 w-4" />
          <span className="hidden sm:inline">All Season Care</span>
        </TabsTrigger>
        <TabsTrigger value="commercial" className="flex items-center gap-2">
          <Building2 className="h-4 w-4" />
          <span className="hidden sm:inline">Commercial</span>
        </TabsTrigger>
      </TabsList>

      {Object.entries(services).map(([key, category]) => (
        <TabsContent key={key} value={key} className="mt-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="md:col-span-2">
              <h3 className="mb-4 text-xl font-bold">{category.name}</h3>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {category.services.map((service) => (
                  <Card
                    key={service.id}
                    className={`cursor-pointer p-4 transition-all hover:border-green-500 hover:shadow-md ${
                      selectedService.id === service.id ? "border-green-500 shadow-md" : ""
                    }`}
                    onMouseEnter={() => handleServiceHover(service)}
                    onClick={() => handleServiceHover(service)}
                  >
                    <div className="flex items-center gap-2">
                      <div className="rounded-full bg-green-100 p-2 text-green-600">{service.icon}</div>
                      <h4 className="font-medium">{service.name}</h4>
                    </div>
                    <p className="mt-2 text-sm text-gray-500">{service.description}</p>
                  </Card>
                ))}
              </div>
            </div>

            <div className="md:col-span-1">
              <Card className="h-full p-6">
                <h4 className="mb-4 text-lg font-bold">{selectedService.name}</h4>
                <ul className="mb-6 space-y-2">
                  {selectedService.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="mt-1 rounded-full bg-green-100 p-1 text-green-600">
                        <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col gap-2">
                  <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full">
                    <Link href={`/services/${selectedService.id}`}>Learn More</Link>
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </TabsContent>
      ))}
    </Tabs>
  )
}
