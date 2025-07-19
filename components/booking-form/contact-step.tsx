"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChevronLeft } from "lucide-react"
import type { BookingFormData } from "."

interface ContactStepProps {
  onSubmit: (data: Partial<BookingFormData>) => void
}

const serviceTypes = [
  "Lawn Mowing",
  "Landscape Maintenance",
  "Tree & Shrub Care",
  "Fertilization & Weed Control",
  "Irrigation Service",
  "Landscape Design",
  "Seasonal Cleanup",
  "Other",
]

export default function ContactStep({ onSubmit }: ContactStepProps) {
  const [formData, setFormData] = useState<Partial<BookingFormData>>({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    contactMethod: "email",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-green-800">Your Information</h2>
        <p className="mt-2 text-gray-600">Please provide your contact details and service requirements.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="serviceType">Service Type</Label>
            <Select
              value={formData.serviceType}
              onValueChange={(value) => setFormData((prev) => ({ ...prev, serviceType: value }))}
            >
              <SelectTrigger id="serviceType">
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                {serviceTypes.map((service) => (
                  <SelectItem key={service} value={service}>
                    {service}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Additional Information</Label>
          <Textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Please provide any specific details about your service needs"
          />
        </div>

        <div className="space-y-2">
          <Label>Preferred Contact Method</Label>
          <RadioGroup
            value={formData.contactMethod}
            onValueChange={(value) =>
              setFormData((prev) => ({ ...prev, contactMethod: value as "email" | "phone" | "text" }))
            }
            className="flex space-x-4"
          >
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

        <div className="flex justify-end space-x-2">
          <Button
            type="button"
            variant="outline"
            onClick={() => window.history.back()}
            className="flex items-center gap-1"
          >
            <ChevronLeft className="h-4 w-4" /> Back
          </Button>
          <Button type="submit" className="bg-green-600 hover:bg-green-700">
            Review & Confirm
          </Button>
        </div>
      </form>
    </div>
  )
}
