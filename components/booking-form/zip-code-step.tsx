"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

interface ZipCodeStepProps {
  onSubmit: (zipCode: string) => void
}

export default function ZipCodeStep({ onSubmit }: ZipCodeStepProps) {
  const [zipCode, setZipCode] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate a short delay to check the zip code
    setTimeout(() => {
      onSubmit(zipCode)
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-green-800">Check Service Availability</h2>
        <p className="mt-2 text-gray-600">
          Enter your ZIP code to check if we service your area and schedule an appointment.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mx-auto flex max-w-md items-center space-x-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <Input
            type="text"
            placeholder="Enter your ZIP code"
            className="pl-9"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
            maxLength={5}
            pattern="[0-9]{5}"
            required
            disabled={isLoading}
          />
        </div>
        <Button type="submit" className="bg-green-600 hover:bg-green-700" disabled={isLoading}>
          {isLoading ? "Checking..." : "Check Availability"}
        </Button>
      </form>
    </div>
  )
}
