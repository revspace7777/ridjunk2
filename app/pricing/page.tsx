"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Home, Building2, CalendarDays, Leaf, Scissors, Info, Star } from "lucide-react"
import ServiceHero from "@/components/service-hero"
import PromotionalBar from "@/components/promotional-bar"
import EmailSignup from "@/components/email-signup"

// Pricing data
const residentialPlans = [
  {
    name: "Essential Care",
    description: "Perfect for basic lawn maintenance needs",
    price: 49,
    frequency: "per visit",
    popular: false,
    features: [
      "Professional lawn mowing",
      "String trimming around obstacles",
      "Edging of walkways and driveways",
      "Blowing of clippings from hard surfaces",
      "Consistent cutting height",
    ],
    cta: "Get Started",
    ctaLink: "/contact",
  },
  {
    name: "Premium Care",
    description: "Our most popular comprehensive lawn service",
    price: 89,
    frequency: "per visit",
    popular: true,
    features: [
      "All Essential Care services",
      "Fertilization program (4x per year)",
      "Weed control treatments",
      "Seasonal cleanup (spring & fall)",
      "Monthly service reports",
      "Priority scheduling",
    ],
    cta: "Best Value",
    ctaLink: "/contact",
  },
  {
    name: "Complete Care",
    description: "Total property management solution",
    price: 149,
    frequency: "per visit",
    popular: false,
    features: [
      "All Premium Care services",
      "Shrub & hedge trimming",
      "Mulch refreshing (1x per year)",
      "Aeration & overseeding (1x per year)",
      "Irrigation system checks",
      "Dedicated account manager",
      "24/7 customer support",
    ],
    cta: "Contact Us",
    ctaLink: "/contact",
  },
]

const commercialPlans = [
  {
    name: "Basic Commercial",
    description: "Essential maintenance for small commercial properties",
    price: 199,
    frequency: "per month",
    popular: false,
    features: [
      "Weekly lawn mowing",
      "Edging and trimming",
      "Blowing of hard surfaces",
      "Monthly service reports",
      "Liability insurance coverage",
    ],
    cta: "Get Started",
    ctaLink: "/contact",
  },
  {
    name: "Professional Commercial",
    description: "Comprehensive care for medium-sized properties",
    price: 399,
    frequency: "per month",
    popular: true,
    features: [
      "All Basic Commercial services",
      "Fertilization program",
      "Weed control treatments",
      "Seasonal color rotations",
      "Irrigation system management",
      "Dedicated account manager",
      "Detailed service documentation",
    ],
    cta: "Best Value",
    ctaLink: "/contact",
  },
  {
    name: "Enterprise Commercial",
    description: "Complete property management for large commercial sites",
    price: "Custom",
    frequency: "",
    popular: false,
    features: [
      "All Professional Commercial services",
      "Custom maintenance schedule",
      "Landscape enhancements",
      "Snow & ice management (seasonal)",
      "24/7 emergency response",
      "Executive reporting",
      "Annual property assessment",
    ],
    cta: "Request Quote",
    ctaLink: "/contact",
  },
]

const seasonalPlans = [
  {
    name: "Spring Cleanup",
    description: "Refresh your property after winter",
    price: 299,
    frequency: "one-time",
    popular: false,
    features: [
      "Debris removal",
      "Bed preparation",
      "Pre-emergent weed control",
      "First mowing of the season",
      "Pruning of winter damage",
    ],
    cta: "Schedule Now",
    ctaLink: "/contact",
  },
  {
    name: "Fall Cleanup",
    description: "Prepare your property for winter",
    price: 349,
    frequency: "one-time",
    popular: true,
    features: [
      "Leaf removal and disposal",
      "Gutter cleaning",
      "Final mowing at reduced height",
      "Winterizing irrigation systems",
      "Plant protection for cold weather",
    ],
    cta: "Schedule Now",
    ctaLink: "/contact",
  },
  {
    name: "Four Season Package",
    description: "Year-round seasonal property care",
    price: 999,
    frequency: "per year",
    popular: false,
    features: [
      "Spring cleanup",
      "Summer maintenance (2 visits)",
      "Fall cleanup",
      "Winter preparation",
      "20% discount on additional services",
      "Priority scheduling",
    ],
    cta: "Best Value",
    ctaLink: "/contact",
  },
]

// FAQ data
const pricingFaqs = [
  {
    question: "How are your lawn care services priced?",
    answer:
      "Our lawn care services are priced based on several factors including property size, service frequency, terrain complexity, and specific services requested. We provide transparent, upfront pricing with no hidden fees. For most residential properties, we offer package options that provide the best value while meeting your specific needs.",
  },
  {
    question: "Do you require long-term contracts?",
    answer:
      "We offer both contract and non-contract options. Our seasonal packages and maintenance plans typically provide the best value and include priority scheduling. However, we also offer one-time services with no long-term commitment. We're confident in our service quality and don't believe in locking customers into lengthy contracts.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, checks, and electronic bank transfers. For ongoing service plans, we offer convenient automatic billing options. We also provide itemized invoices and receipts for all services performed.",
  },
  {
    question: "Are there additional charges for larger properties?",
    answer:
      "Yes, pricing is partially determined by property size. Our standard pricing is for properties up to 1/4 acre. For larger properties, we adjust pricing accordingly. During your consultation, we'll assess your property size and provide a precise quote based on your specific needs and property characteristics.",
  },
  {
    question: "Do you offer discounts for regular service?",
    answer:
      "Yes, we offer discounts for recurring service plans. The more frequently we service your property, the more you save per visit. We also offer seasonal packages that provide significant savings compared to booking individual services. Additionally, we have referral programs and occasional promotions for both new and existing customers.",
  },
  {
    question: "What happens if I'm not satisfied with the service?",
    answer:
      "Your satisfaction is our priority. If you're ever not completely satisfied with our work, please contact us within 48 hours of service completion, and we'll return to address any issues at no additional cost. We stand behind our work with our satisfaction guarantee.",
  },
]

// Testimonials
const testimonials = [
  {
    name: "Michael Johnson",
    location: "Marietta, GA",
    text: "I've tried cheaper services before, but Sanders Lawnscapes delivers a level of quality and attention to detail that's worth every penny. My lawn has never looked better.",
    rating: 5,
  },
  {
    name: "Jennifer Martinez",
    location: "Kennesaw, GA",
    text: "Their Premium Care plan is the perfect balance of quality and value. I appreciate the consistent service and the peace of mind knowing my lawn is being properly cared for year-round.",
    rating: 5,
  },
  {
    name: "David Thompson",
    location: "Woodstock, GA",
    text: "As a property manager, I need reliable service at a fair price. Sanders Lawnscapes delivers exceptional value with their commercial packages, and the detailed reporting helps me track everything.",
    rating: 5,
  },
]

export default function PricingPage() {
  const [propertyType, setPropertyType] = useState("residential")
  const [propertySize, setPropertySize] = useState(0.25)
  const [annualBilling, setAnnualBilling] = useState(false)
  const [estimatedPrice, setEstimatedPrice] = useState("$45-60")

  // Update estimated price based on inputs
  const updateEstimate = (size: number, type: string, annual: boolean) => {
    let basePrice = 0

    if (type === "residential") {
      basePrice = size <= 0.25 ? 50 : size <= 0.5 ? 75 : size <= 1 ? 100 : 150
    } else {
      basePrice = size <= 0.5 ? 200 : size <= 1 ? 350 : size <= 2 ? 500 : 750
    }

    const discount = annual ? 0.1 : 0
    const finalPrice = basePrice * (1 - discount)

    const lowerRange = Math.floor(finalPrice * 0.9)
    const upperRange = Math.ceil(finalPrice * 1.1)

    setEstimatedPrice(`$${lowerRange}-${upperRange}`)
  }

  const handlePropertySizeChange = (value: number[]) => {
    const size = value[0]
    setPropertySize(size)
    updateEstimate(size, propertyType, annualBilling)
  }

  const handlePropertyTypeChange = (value: string) => {
    setPropertyType(value)
    updateEstimate(propertySize, value, annualBilling)
  }

  const handleBillingChange = (checked: boolean) => {
    setAnnualBilling(checked)
    updateEstimate(propertySize, propertyType, checked)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Banner */}
        <ServiceHero
          title="Transparent Pricing"
          subtitle="Quality lawn care and landscaping services at competitive rates"
          buttons={
            <>
              <Button asChild className="bg-green-600 hover:bg-green-700">
                <Link href="/contact">Request Custom Quote</Link>
              </Button>
              <Button asChild variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                <Link href="/book">Schedule Consultation</Link>
              </Button>
            </>
          }
        />

        {/* Promotional Bar */}
        <PromotionalBar />

        {/* Value Proposition Section */}
        <section className="py-12 bg-white">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-green-800">Investing in Your Property's Beauty</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                At Sanders Lawnscapes, we believe in providing exceptional value through quality service, experienced
                professionals, and reliable results—not by cutting corners or offering the lowest price.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-green-50 rounded-lg p-6 text-center">
                <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-green-100 text-green-600 mb-4">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-2">Quality Guarantee</h3>
                <p className="text-gray-600">
                  We stand behind our work with a satisfaction guarantee. If you're not happy, we'll make it right at no
                  additional cost.
                </p>
              </div>

              <div className="bg-green-50 rounded-lg p-6 text-center">
                <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-green-100 text-green-600 mb-4">
                  <Scissors className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-2">Professional Equipment</h3>
                <p className="text-gray-600">
                  We invest in commercial-grade equipment and proper maintenance to ensure consistent, superior results.
                </p>
              </div>

              <div className="bg-green-50 rounded-lg p-6 text-center">
                <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-green-100 text-green-600 mb-4">
                  <Leaf className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-2">Trained Experts</h3>
                <p className="text-gray-600">
                  Our team consists of trained professionals with extensive knowledge in lawn care and landscaping best
                  practices.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Price Calculator */}
        <section className="py-12 bg-gray-50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-green-800">Estimate Your Service Cost</h2>
                <p className="mt-2 text-gray-600">
                  Get a ballpark estimate based on your property details. For an exact quote, request a consultation.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <div className="space-y-6">
                      <div>
                        <Label className="text-base font-medium">Property Type</Label>
                        <div className="mt-2 grid grid-cols-2 gap-4">
                          <div
                            className={`cursor-pointer rounded-lg border p-4 text-center transition-all ${
                              propertyType === "residential"
                                ? "border-green-600 bg-green-50"
                                : "border-gray-200 hover:border-green-200"
                            }`}
                            onClick={() => handlePropertyTypeChange("residential")}
                          >
                            <Home
                              className={`mx-auto h-6 w-6 ${propertyType === "residential" ? "text-green-600" : "text-gray-400"}`}
                            />
                            <span
                              className={`mt-2 block text-sm font-medium ${propertyType === "residential" ? "text-green-700" : "text-gray-600"}`}
                            >
                              Residential
                            </span>
                          </div>
                          <div
                            className={`cursor-pointer rounded-lg border p-4 text-center transition-all ${
                              propertyType === "commercial"
                                ? "border-green-600 bg-green-50"
                                : "border-gray-200 hover:border-green-200"
                            }`}
                            onClick={() => handlePropertyTypeChange("commercial")}
                          >
                            <Building2
                              className={`mx-auto h-6 w-6 ${propertyType === "commercial" ? "text-green-600" : "text-gray-400"}`}
                            />
                            <span
                              className={`mt-2 block text-sm font-medium ${propertyType === "commercial" ? "text-green-700" : "text-gray-600"}`}
                            >
                              Commercial
                            </span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between items-center">
                          <Label className="text-base font-medium">Property Size</Label>
                          <span className="text-sm text-gray-500">
                            {propertySize <= 0.25
                              ? "Up to 1/4 acre"
                              : propertySize <= 0.5
                                ? "1/4 to 1/2 acre"
                                : propertySize <= 1
                                  ? "1/2 to 1 acre"
                                  : propertySize <= 2
                                    ? "1 to 2 acres"
                                    : "2+ acres"}
                          </span>
                        </div>
                        <div className="mt-2">
                          <Slider
                            defaultValue={[0.25]}
                            max={3}
                            step={0.25}
                            onValueChange={handlePropertySizeChange}
                            className="py-4"
                          />
                          <div className="flex justify-between text-xs text-gray-500 mt-1">
                            <span>Small</span>
                            <span>Medium</span>
                            <span>Large</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Switch id="annual-billing" checked={annualBilling} onCheckedChange={handleBillingChange} />
                        <Label htmlFor="annual-billing" className="text-sm">
                          Annual plan (10% savings)
                        </Label>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center border-t pt-6 md:border-t-0 md:border-l md:pl-8 md:pt-0">
                    <div className="text-center">
                      <p className="text-sm text-gray-500">Estimated price per visit</p>
                      <div className="mt-2 text-4xl font-bold text-green-700">{estimatedPrice}</div>
                      <p className="mt-2 text-sm text-gray-500">
                        Actual price may vary based on specific property conditions and service requirements
                      </p>
                      <div className="mt-6">
                        <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                          <Link href="/contact">Get Exact Quote</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Plans */}
        <section className="py-12">
          <div className="container">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-green-800">Service Plans</h2>
              <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
                Choose from our carefully designed service packages or contact us for a custom solution tailored to your
                specific needs.
              </p>
            </div>

            <Tabs defaultValue="residential" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="residential" className="text-sm sm:text-base">
                  <Home className="mr-2 h-4 w-4 hidden sm:inline" />
                  Residential
                </TabsTrigger>
                <TabsTrigger value="commercial" className="text-sm sm:text-base">
                  <Building2 className="mr-2 h-4 w-4 hidden sm:inline" />
                  Commercial
                </TabsTrigger>
                <TabsTrigger value="seasonal" className="text-sm sm:text-base">
                  <CalendarDays className="mr-2 h-4 w-4 hidden sm:inline" />
                  Seasonal
                </TabsTrigger>
              </TabsList>

              <TabsContent value="residential">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {residentialPlans.map((plan) => (
                    <Card
                      key={plan.name}
                      className={`flex flex-col ${plan.popular ? "border-green-500 shadow-md" : ""}`}
                    >
                      <CardHeader>
                        {plan.popular && (
                          <Badge className="self-start mb-2 bg-green-100 text-green-700 hover:bg-green-100">
                            Most Popular
                          </Badge>
                        )}
                        <CardTitle>{plan.name}</CardTitle>
                        <CardDescription>{plan.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-1">
                        <div className="flex items-baseline text-2xl font-bold">
                          {typeof plan.price === "number" ? (
                            <>
                              <span>${plan.price}</span>
                              <span className="ml-1 text-sm font-normal text-gray-500">{plan.frequency}</span>
                            </>
                          ) : (
                            <span>{plan.price}</span>
                          )}
                        </div>
                        <ul className="mt-6 space-y-3">
                          {plan.features.map((feature) => (
                            <li key={feature} className="flex items-start">
                              <CheckCircle className="mr-2 h-5 w-5 shrink-0 text-green-500" />
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button
                          asChild
                          className={`w-full ${plan.popular ? "bg-green-600 hover:bg-green-700" : ""}`}
                          variant={plan.popular ? "default" : "outline"}
                        >
                          <Link href={plan.ctaLink}>{plan.cta}</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="commercial">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {commercialPlans.map((plan) => (
                    <Card
                      key={plan.name}
                      className={`flex flex-col ${plan.popular ? "border-green-500 shadow-md" : ""}`}
                    >
                      <CardHeader>
                        {plan.popular && (
                          <Badge className="self-start mb-2 bg-green-100 text-green-700 hover:bg-green-100">
                            Most Popular
                          </Badge>
                        )}
                        <CardTitle>{plan.name}</CardTitle>
                        <CardDescription>{plan.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-1">
                        <div className="flex items-baseline text-2xl font-bold">
                          {typeof plan.price === "number" ? (
                            <>
                              <span>${plan.price}</span>
                              <span className="ml-1 text-sm font-normal text-gray-500">{plan.frequency}</span>
                            </>
                          ) : (
                            <span>{plan.price}</span>
                          )}
                        </div>
                        <ul className="mt-6 space-y-3">
                          {plan.features.map((feature) => (
                            <li key={feature} className="flex items-start">
                              <CheckCircle className="mr-2 h-5 w-5 shrink-0 text-green-500" />
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button
                          asChild
                          className={`w-full ${plan.popular ? "bg-green-600 hover:bg-green-700" : ""}`}
                          variant={plan.popular ? "default" : "outline"}
                        >
                          <Link href={plan.ctaLink}>{plan.cta}</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="seasonal">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {seasonalPlans.map((plan) => (
                    <Card
                      key={plan.name}
                      className={`flex flex-col ${plan.popular ? "border-green-500 shadow-md" : ""}`}
                    >
                      <CardHeader>
                        {plan.popular && (
                          <Badge className="self-start mb-2 bg-green-100 text-green-700 hover:bg-green-100">
                            Most Popular
                          </Badge>
                        )}
                        <CardTitle>{plan.name}</CardTitle>
                        <CardDescription>{plan.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-1">
                        <div className="flex items-baseline text-2xl font-bold">
                          {typeof plan.price === "number" ? (
                            <>
                              <span>${plan.price}</span>
                              <span className="ml-1 text-sm font-normal text-gray-500">{plan.frequency}</span>
                            </>
                          ) : (
                            <span>{plan.price}</span>
                          )}
                        </div>
                        <ul className="mt-6 space-y-3">
                          {plan.features.map((feature) => (
                            <li key={feature} className="flex items-start">
                              <CheckCircle className="mr-2 h-5 w-5 shrink-0 text-green-500" />
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button
                          asChild
                          className={`w-full ${plan.popular ? "bg-green-600 hover:bg-green-700" : ""}`}
                          variant={plan.popular ? "default" : "outline"}
                        >
                          <Link href={plan.ctaLink}>{plan.cta}</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>

            <div className="mt-12 text-center">
              <div className="inline-flex items-center rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm text-green-700">
                <Info className="mr-2 h-4 w-4" />
                Need a custom solution? We're happy to create a tailored plan for your specific needs.
              </div>
              <div className="mt-6">
                <Button asChild className="bg-green-600 hover:bg-green-700">
                  <Link href="/contact">Request Custom Quote</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-12 bg-gray-50">
          <div className="container">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-green-800">Compare Our Services</h2>
              <p className="mt-2 text-gray-600">
                See how our service plans compare to help you choose the right option for your needs.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[800px] border-collapse rounded-lg bg-white shadow-sm">
                <thead>
                  <tr className="border-b">
                    <th className="p-4 text-left font-medium text-gray-500">Features</th>
                    <th className="p-4 text-center font-medium text-gray-500">Essential Care</th>
                    <th className="p-4 text-center font-medium text-gray-500 bg-green-50">Premium Care</th>
                    <th className="p-4 text-center font-medium text-gray-500">Complete Care</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-4 font-medium">Professional Mowing</td>
                    <td className="p-4 text-center">
                      <CheckCircle className="mx-auto h-5 w-5 text-green-500" />
                    </td>
                    <td className="p-4 text-center bg-green-50">
                      <CheckCircle className="mx-auto h-5 w-5 text-green-500" />
                    </td>
                    <td className="p-4 text-center">
                      <CheckCircle className="mx-auto h-5 w-5 text-green-500" />
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-medium">Edging & Trimming</td>
                    <td className="p-4 text-center">
                      <CheckCircle className="mx-auto h-5 w-5 text-green-500" />
                    </td>
                    <td className="p-4 text-center bg-green-50">
                      <CheckCircle className="mx-auto h-5 w-5 text-green-500" />
                    </td>
                    <td className="p-4 text-center">
                      <CheckCircle className="mx-auto h-5 w-5 text-green-500" />
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-medium">Fertilization Program</td>
                    <td className="p-4 text-center">—</td>
                    <td className="p-4 text-center bg-green-50">
                      <CheckCircle className="mx-auto h-5 w-5 text-green-500" />
                    </td>
                    <td className="p-4 text-center">
                      <CheckCircle className="mx-auto h-5 w-5 text-green-500" />
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-medium">Weed Control</td>
                    <td className="p-4 text-center">—</td>
                    <td className="p-4 text-center bg-green-50">
                      <CheckCircle className="mx-auto h-5 w-5 text-green-500" />
                    </td>
                    <td className="p-4 text-center">
                      <CheckCircle className="mx-auto h-5 w-5 text-green-500" />
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-medium">Seasonal Cleanup</td>
                    <td className="p-4 text-center">—</td>
                    <td className="p-4 text-center bg-green-50">
                      <CheckCircle className="mx-auto h-5 w-5 text-green-500" />
                    </td>
                    <td className="p-4 text-center">
                      <CheckCircle className="mx-auto h-5 w-5 text-green-500" />
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-medium">Shrub & Hedge Trimming</td>
                    <td className="p-4 text-center">—</td>
                    <td className="p-4 text-center bg-green-50">—</td>
                    <td className="p-4 text-center">
                      <CheckCircle className="mx-auto h-5 w-5 text-green-500" />
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-medium">Mulch Refreshing</td>
                    <td className="p-4 text-center">—</td>
                    <td className="p-4 text-center bg-green-50">—</td>
                    <td className="p-4 text-center">
                      <CheckCircle className="mx-auto h-5 w-5 text-green-500" />
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-medium">Aeration & Overseeding</td>
                    <td className="p-4 text-center">—</td>
                    <td className="p-4 text-center bg-green-50">—</td>
                    <td className="p-4 text-center">
                      <CheckCircle className="mx-auto h-5 w-5 text-green-500" />
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-medium">Dedicated Account Manager</td>
                    <td className="p-4 text-center">—</td>
                    <td className="p-4 text-center bg-green-50">—</td>
                    <td className="p-4 text-center">
                      <CheckCircle className="mx-auto h-5 w-5 text-green-500" />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">Priority Scheduling</td>
                    <td className="p-4 text-center">—</td>
                    <td className="p-4 text-center bg-green-50">
                      <CheckCircle className="mx-auto h-5 w-5 text-green-500" />
                    </td>
                    <td className="p-4 text-center">
                      <CheckCircle className="mx-auto h-5 w-5 text-green-500" />
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr className="border-t bg-gray-50">
                    <td className="p-4"></td>
                    <td className="p-4 text-center">
                      <Button asChild variant="outline" size="sm">
                        <Link href="/contact">Get Started</Link>
                      </Button>
                    </td>
                    <td className="p-4 text-center bg-green-50">
                      <Button asChild size="sm" className="bg-green-600 hover:bg-green-700">
                        <Link href="/contact">Best Value</Link>
                      </Button>
                    </td>
                    <td className="p-4 text-center">
                      <Button asChild variant="outline" size="sm">
                        <Link href="/contact">Contact Us</Link>
                      </Button>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </section>

        {/* Customer Testimonials */}
        <section className="py-12">
          <div className="container">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-green-800">What Our Customers Say About Value</h2>
              <p className="mt-2 text-gray-600">
                Hear from customers who have experienced the quality and value of our services.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="flex flex-col">
                  <CardHeader>
                    <div className="flex mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="italic text-gray-600">"{testimonial.text}"</p>
                  </CardContent>
                  <CardFooter className="border-t pt-4">
                    <div>
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.location}</p>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Custom Quote CTA */}
        <section className="py-12 bg-green-50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-green-800">Need a Custom Solution?</h2>
              <p className="mt-4 text-gray-600">
                Every property is unique. Contact us for a personalized quote tailored to your specific needs and
                property characteristics.
              </p>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                  <h3 className="text-lg font-bold text-green-700 mb-2">Request a Quote</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Fill out our simple form and we'll provide a detailed quote for your property.
                  </p>
                  <Button asChild className="bg-green-600 hover:bg-green-700">
                    <Link href="/contact">Get Quote</Link>
                  </Button>
                </div>

                <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                  <h3 className="text-lg font-bold text-green-700 mb-2">Schedule a Consultation</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Meet with our experts for an on-site assessment and personalized recommendations.
                  </p>
                  <Button asChild variant="outline">
                    <Link href="/book">Book Now</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12">
          <div className="container">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-green-800">Frequently Asked Questions</h2>
              <p className="mt-2 text-gray-600">Find answers to common questions about our pricing and services.</p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {pricingFaqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-600">Have more questions? We're happy to help.</p>
              <div className="mt-4">
                <Button asChild variant="outline">
                  <Link href="/contact">Contact Us</Link>
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
