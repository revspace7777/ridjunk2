import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import ReviewCarousel from "@/components/review-carousel"
import EmailSignup from "@/components/email-signup"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left side - Image */}
            <div className="relative hidden h-full min-h-[400px] md:block">
              <Image
                src="/placeholder.svg?height=1000&width=800&text=Professional+Landscaping"
                alt="Professional landscaping services"
                fill
                className="object-cover"
              />
            </div>

            {/* Right side - Contact Form */}
            <div className="p-6 md:p-12">
              <h1 className="mb-6 text-3xl font-bold text-green-800">Get in Touch</h1>
              <p className="mb-8 text-gray-600">
                Have questions about our services or ready to schedule an appointment? Fill out the form below and one
                of our team members will get back to you shortly.
              </p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
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
                        <SelectItem value="lawn-care">Lawn Care</SelectItem>
                        <SelectItem value="landscaping">Landscaping</SelectItem>
                        <SelectItem value="tree-service">Tree Service</SelectItem>
                        <SelectItem value="seasonal">Seasonal Services</SelectItem>
                        <SelectItem value="commercial">Commercial Services</SelectItem>
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

                <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                  Submit Request
                </Button>
              </form>
            </div>
          </div>

          {/* Reviews Section - Overlapping both halves */}
          <div className="relative z-10 mx-auto -mt-16 max-w-5xl px-4">
            <div className="rounded-lg bg-white p-8 shadow-lg">
              <h2 className="mb-6 text-center text-2xl font-bold text-green-800">What Our Customers Say</h2>
              <ReviewCarousel />
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="bg-gray-50 py-12">
          <div className="container">
            <h2 className="mb-8 text-center text-2xl font-bold text-green-800">Contact Information</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="flex flex-col items-center rounded-lg border border-gray-200 bg-white p-6 text-center">
                <div className="mb-4 rounded-full bg-green-100 p-3">
                  <Phone className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="mb-2 font-bold">Phone</h3>
                <p className="text-gray-600">770-555-1234</p>
                <p className="mt-2 text-sm text-gray-500">Monday-Friday: 8am-6pm</p>
              </div>

              <div className="flex flex-col items-center rounded-lg border border-gray-200 bg-white p-6 text-center">
                <div className="mb-4 rounded-full bg-green-100 p-3">
                  <Mail className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="mb-2 font-bold">Email</h3>
                <p className="text-gray-600">info@sanderslawnscapes.com</p>
                <p className="mt-2 text-sm text-gray-500">We respond within 24 hours</p>
              </div>

              <div className="flex flex-col items-center rounded-lg border border-gray-200 bg-white p-6 text-center">
                <div className="mb-4 rounded-full bg-green-100 p-3">
                  <MapPin className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="mb-2 font-bold">Service Area</h3>
                <p className="text-gray-600">Cobb & Cherokee Counties</p>
                <p className="mt-2 text-sm text-gray-500">North Atlanta Metro Area</p>
              </div>
            </div>

            <div className="mt-8 rounded-lg border border-gray-200 bg-white p-6">
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-green-600" />
                <h3 className="font-bold">Business Hours</h3>
              </div>
              <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-4">
                <div>
                  <p className="font-medium">Monday - Friday</p>
                  <p className="text-gray-600">8:00 AM - 6:00 PM</p>
                </div>
                <div>
                  <p className="font-medium">Saturday</p>
                  <p className="text-gray-600">9:00 AM - 4:00 PM</p>
                </div>
                <div>
                  <p className="font-medium">Sunday</p>
                  <p className="text-gray-600">Closed</p>
                </div>
                <div>
                  <p className="font-medium">Emergency Service</p>
                  <p className="text-gray-600">Available 24/7</p>
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
