"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import ZipCodeStep from "./zip-code-step"
import ScheduleStep from "./schedule-step"
import ContactStep from "./contact-step"
import ConfirmationStep from "./confirmation-step"
import { checkZipCode } from "@/utils/zip-code-validator"

export type BookingFormData = {
  zipCode: string
  date: Date | undefined
  time: string
  name: string
  email: string
  phone: string
  serviceType: string
  contactMethod: "email" | "phone" | "text"
  message: string
  imageUrl?: string
}

export default function BookingForm() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<BookingFormData>({
    zipCode: "",
    date: undefined,
    time: "",
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    contactMethod: "email",
    message: "",
  })

  const handleZipCodeSubmit = (zipCode: string) => {
    const isValid = checkZipCode(zipCode)

    if (isValid) {
      setFormData((prev) => ({ ...prev, zipCode }))
      setCurrentStep(2)
    } else {
      alert("We're sorry, but we don't currently service your area. Please contact us for more information.")
    }
  }

  const handleScheduleSubmit = (date: Date, time: string) => {
    setFormData((prev) => ({ ...prev, date, time }))
    setCurrentStep(3)
  }

  const handleContactSubmit = (contactData: Partial<BookingFormData>) => {
    setFormData((prev) => ({ ...prev, ...contactData }))
    setCurrentStep(4)
  }

  const handleFormSubmit = () => {
    // In a real implementation, this would submit the form data to a server
    console.log("Form submitted:", formData)
    router.push("/thank-you")
  }

  return (
    <div className="mx-auto max-w-3xl rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
      {currentStep === 1 && <ZipCodeStep onSubmit={handleZipCodeSubmit} />}
      {currentStep === 2 && <ScheduleStep onSubmit={handleScheduleSubmit} />}
      {currentStep === 3 && <ContactStep onSubmit={handleContactSubmit} />}
      {currentStep === 4 && <ConfirmationStep formData={formData} onSubmit={handleFormSubmit} />}
    </div>
  )
}
