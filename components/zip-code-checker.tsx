"use client"

import type React from "react"

import { useState } from "react"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function ZipCodeChecker() {
  const [zipCode, setZipCode] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real implementation, this would check if the zip code is in the service area
    alert(`Checking availability for zip code: ${zipCode}`)
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-md items-center space-x-2">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
        <Input
          type="text"
          placeholder="Enter your ZIP code"
          className="pl-9 bg-white text-black"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
          maxLength={5}
          pattern="[0-9]{5}"
          required
        />
      </div>
      <Button type="submit" className="bg-green-600 hover:bg-green-700">
        Check Availability
      </Button>
    </form>
  )
}
