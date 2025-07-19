"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail } from "lucide-react"

export default function EmailSignup() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real implementation, this would submit the email to a server
    setSubmitted(true)
  }

  return (
    <section className="bg-green-700 py-6 text-white">
      <div className="container">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-3">
            <Mail className="h-6 w-6" />
            <div>
              <h3 className="text-lg font-bold">Sign up for 10% off your first service</h3>
              <p className="text-sm text-green-100">Join our mailing list for exclusive offers and lawn care tips</p>
            </div>
          </div>

          {submitted ? (
            <div className="rounded-md bg-green-600 px-4 py-2 text-white">Thank you for signing up!</div>
          ) : (
            <form onSubmit={handleSubmit} className="flex w-full max-w-md gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-white text-black"
              />
              <Button type="submit" className="bg-green-600 hover:bg-green-500">
                Subscribe
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
