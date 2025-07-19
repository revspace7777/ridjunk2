"use client"

import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"
import type { BookingFormData } from "."

interface ConfirmationStepProps {
  formData: BookingFormData
  onSubmit: () => void
}

export default function ConfirmationStep({ formData, onSubmit }: ConfirmationStepProps) {
  const formatDate = (date: Date | undefined) => {
    if (!date) return "Not selected"
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-green-800">Review Your Booking</h2>
        <p className="mt-2 text-gray-600">Please review your information before submitting your request.</p>
      </div>

      <div className="rounded-lg border border-gray-200 p-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <h3 className="font-medium text-gray-700">Service Details</h3>
            <div className="mt-2 space-y-1">
              <p>
                <span className="text-sm font-medium text-gray-500">Service Type:</span>{" "}
                <span>{formData.serviceType || "Not specified"}</span>
              </p>
              <p>
                <span className="text-sm font-medium text-gray-500">Date:</span>{" "}
                <span>{formatDate(formData.date)}</span>
              </p>
              <p>
                <span className="text-sm font-medium text-gray-500">Time:</span> <span>{formData.time}</span>
              </p>
              <p>
                <span className="text-sm font-medium text-gray-500">ZIP Code:</span> <span>{formData.zipCode}</span>
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-gray-700">Contact Information</h3>
            <div className="mt-2 space-y-1">
              <p>
                <span className="text-sm font-medium text-gray-500">Name:</span> <span>{formData.name}</span>
              </p>
              <p>
                <span className="text-sm font-medium text-gray-500">Email:</span> <span>{formData.email}</span>
              </p>
              <p>
                <span className="text-sm font-medium text-gray-500">Phone:</span> <span>{formData.phone}</span>
              </p>
              <p>
                <span className="text-sm font-medium text-gray-500">Preferred Contact:</span>{" "}
                <span className="capitalize">{formData.contactMethod}</span>
              </p>
            </div>
          </div>
        </div>

        {formData.message && (
          <div className="mt-4">
            <h3 className="font-medium text-gray-700">Additional Information</h3>
            <p className="mt-1 whitespace-pre-wrap text-gray-600">{formData.message}</p>
          </div>
        )}

        <div className="mt-6 text-sm text-gray-500">
          <p>
            By submitting this form, you agree to our{" "}
            <a href="/terms" className="text-green-600 hover:underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="/privacy" className="text-green-600 hover:underline">
              Privacy Policy
            </a>
            . We'll use the information you've provided to schedule your service and contact you with any questions.
          </p>
        </div>
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
        <Button onClick={onSubmit} className="bg-green-600 hover:bg-green-700">
          Submit Request
        </Button>
      </div>
    </div>
  )
}
