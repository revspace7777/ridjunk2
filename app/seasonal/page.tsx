import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import ServiceHero from "@/components/service-hero"
import PromotionalBar from "@/components/promotional-bar"
import EmailSignup from "@/components/email-signup"

export default function SeasonalPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header is in the layout */}

      <main className="flex-1">
        {/* Hero Banner */}
        <ServiceHero
          title="Seasonal Services"
          subtitle="Year-round care for your property through every season"
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

        {/* Spring Section */}
        <section className="py-12">
          <div className="container">
            <div className="mb-8 overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=300&width=1200&text=Spring+Landscape"
                alt="Spring Landscape"
                width={1200}
                height={300}
                className="h-48 w-full object-cover sm:h-64"
              />
            </div>

            <h2 className="mb-6 text-center text-3xl font-bold text-green-800">Spring Services</h2>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="mb-3 font-bold text-green-700">Spring Cleanup</h3>
                <p className="text-gray-600">
                  Our comprehensive spring cleanup service removes winter debris, clears beds, and prepares your
                  landscape for the growing season. We'll remove fallen branches, rake out beds, and clean up any
                  leftover leaves to give your property a fresh start.
                </p>
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="mb-3 font-bold text-green-700">Lawn Renovation</h3>
                <p className="text-gray-600">
                  Revitalize your lawn after winter with our lawn renovation services. We'll address bare spots,
                  overseed thin areas, and apply early-season fertilizer to promote healthy growth and a lush, green
                  lawn throughout the summer.
                </p>
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="mb-3 font-bold text-green-700">Mulch Installation</h3>
                <p className="text-gray-600">
                  Fresh mulch not only enhances your landscape's appearance but also helps retain moisture, suppress
                  weeds, and regulate soil temperature. Our spring mulch installation service will refresh your beds
                  with premium mulch in your choice of colors.
                </p>
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="mb-3 font-bold text-green-700">Flower Planting</h3>
                <p className="text-gray-600">
                  Add vibrant color to your landscape with our spring flower planting service. We'll help you select
                  seasonal flowers that thrive in our climate and professionally install them to create eye-catching
                  displays that enhance your property's curb appeal.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Summer Section */}
        <section className="bg-gray-50 py-12">
          <div className="container">
            <div className="mb-8 overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=300&width=1200&text=Summer+Landscape"
                alt="Summer Landscape"
                width={1200}
                height={300}
                className="h-48 w-full object-cover sm:h-64"
              />
            </div>

            <h2 className="mb-6 text-center text-3xl font-bold text-green-800">Summer Services</h2>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="mb-3 font-bold text-green-700">Drought Management</h3>
                <p className="text-gray-600">
                  Keep your lawn healthy during hot, dry periods with our drought management services. We'll adjust
                  mowing heights, implement specialized watering techniques, and apply treatments to help your lawn
                  withstand summer stress and maintain its vibrant green color.
                </p>
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="mb-3 font-bold text-green-700">Insect & Disease Control</h3>
                <p className="text-gray-600">
                  Summer brings increased pest and disease pressure. Our targeted treatments identify and address
                  specific issues before they cause significant damage, protecting your landscape investment and keeping
                  your plants healthy throughout the growing season.
                </p>
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="mb-3 font-bold text-green-700">Irrigation Management</h3>
                <p className="text-gray-600">
                  Efficient irrigation is crucial during summer months. We'll inspect, adjust, and maintain your
                  irrigation system to ensure optimal coverage, minimize water waste, and keep your landscape properly
                  hydrated even during the hottest days.
                </p>
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="mb-3 font-bold text-green-700">Summer Pruning</h3>
                <p className="text-gray-600">
                  Strategic summer pruning helps maintain plant health and shape. Our experts know exactly what and when
                  to prune during summer months to control growth, remove damaged branches, and encourage flowering for
                  certain species without stressing plants.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Fall Section */}
        <section className="py-12">
          <div className="container">
            <div className="mb-8 overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=300&width=1200&text=Fall+Landscape"
                alt="Fall Landscape"
                width={1200}
                height={300}
                className="h-48 w-full object-cover sm:h-64"
              />
            </div>

            <h2 className="mb-6 text-center text-3xl font-bold text-green-800">Fall Services</h2>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="mb-3 font-bold text-green-700">Leaf Removal</h3>
                <p className="text-gray-600">
                  Our thorough leaf removal service clears your property of fallen leaves to prevent lawn damage and
                  disease. We use professional equipment to efficiently collect and remove leaves from lawns, beds, and
                  hard surfaces, leaving your property clean and well-maintained.
                </p>
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="mb-3 font-bold text-green-700">Fall Aeration & Overseeding</h3>
                <p className="text-gray-600">
                  Fall is the ideal time for lawn aeration and overseeding. This service reduces soil compaction,
                  improves root development, and introduces new grass varieties to thicken your lawn and enhance its
                  resistance to disease, drought, and wear.
                </p>
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="mb-3 font-bold text-green-700">Gutter Cleaning</h3>
                <p className="text-gray-600">
                  Prevent water damage and ice dams with our fall gutter cleaning service. We'll remove leaves, debris,
                  and blockages from your gutters and downspouts to ensure proper drainage and protect your home's
                  foundation and exterior from water damage.
                </p>
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="mb-3 font-bold text-green-700">Fall Fertilization</h3>
                <p className="text-gray-600">
                  Our specialized fall fertilization program strengthens your lawn's root system before winter dormancy.
                  This application provides essential nutrients that support root development during cooler months,
                  ensuring your lawn emerges thicker and healthier in spring.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Winter Section */}
        <section className="bg-gray-50 py-12">
          <div className="container">
            <div className="mb-8 overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=300&width=1200&text=Winter+Landscape"
                alt="Winter Landscape"
                width={1200}
                height={300}
                className="h-48 w-full object-cover sm:h-64"
              />
            </div>

            <h2 className="mb-6 text-center text-3xl font-bold text-green-800">Winter Services</h2>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="mb-3 font-bold text-green-700">Snow Removal</h3>
                <p className="text-gray-600">
                  Keep your property safe and accessible with our reliable snow removal services. We provide timely
                  clearing of driveways, walkways, and parking areas after winter storms, with options for both
                  residential and commercial properties.
                </p>
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="mb-3 font-bold text-green-700">Ice Management</h3>
                <p className="text-gray-600">
                  Our ice management services prevent dangerous conditions on your property. We apply professional-grade
                  ice melt products to walkways, driveways, and other high-traffic areas to ensure safe passage and
                  reduce liability during freezing conditions.
                </p>
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="mb-3 font-bold text-green-700">Winter Pruning</h3>
                <p className="text-gray-600">
                  Winter is the ideal time for structural pruning of many trees and shrubs. Our winter pruning service
                  improves plant architecture, removes damaged branches, and controls size while plants are dormant,
                  promoting healthier growth in spring.
                </p>
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="mb-3 font-bold text-green-700">Holiday Lighting</h3>
                <p className="text-gray-600">
                  Transform your property with our professional holiday lighting installation. We design, install,
                  maintain, and remove custom lighting displays that highlight your home's architecture and landscape
                  features, creating a festive atmosphere without the hassle.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="bg-green-50 py-12">
          <div className="container">
            <div className="mx-auto max-w-3xl rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
              <h2 className="mb-6 text-center text-2xl font-bold text-green-800">Request Seasonal Service</h2>

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

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="Your phone number" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service-type">Service Type</Label>
                    <Select>
                      <SelectTrigger id="service-type">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="spring-cleanup">Spring Cleanup</SelectItem>
                        <SelectItem value="summer-maintenance">Summer Maintenance</SelectItem>
                        <SelectItem value="fall-cleanup">Fall Cleanup</SelectItem>
                        <SelectItem value="winter-services">Winter Services</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Property Type</Label>
                  <RadioGroup defaultValue="residential" className="flex space-x-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="residential" id="residential" />
                      <Label htmlFor="residential" className="font-normal">
                        Residential
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="commercial" id="commercial" />
                      <Label htmlFor="commercial" className="font-normal">
                        Commercial
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Please describe your service needs" rows={4} />
                </div>

                <div className="space-y-2">
                  <Label>Preferred Contact Method</Label>
                  <RadioGroup defaultValue="email" className="flex flex-wrap gap-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="email" id="email-contact" />
                      <Label htmlFor="email-contact" className="font-normal">
                        Email
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="phone" id="phone-contact" />
                      <Label htmlFor="phone-contact" className="font-normal">
                        Phone
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="text" id="text-contact" />
                      <Label htmlFor="text-contact" className="font-normal">
                        Text
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="file">Upload Photos (Optional)</Label>
                  <Input id="file" type="file" className="cursor-pointer" />
                  <p className="text-xs text-gray-500">Upload photos of your property or area needing service</p>
                </div>

                <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                  Submit Request
                </Button>
              </form>
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
