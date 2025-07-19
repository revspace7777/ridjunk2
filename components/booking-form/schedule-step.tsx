"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { ChevronLeft } from "lucide-react"

interface ScheduleStepProps {
  onSubmit: (date: Date, time: string) => void
}

// Available time slots
const timeSlots = ["8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"]

export default function ScheduleStep({ onSubmit }: ScheduleStepProps) {
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [time, setTime] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (date && time) {
      onSubmit(date, time)
    }
  }

  // Disable weekends and past dates
  const disabledDays = (date: Date) => {
    const day = date.getDay()
    const isPastDate = date < new Date(new Date().setHours(0, 0, 0, 0))
    return day === 0 || day === 6 || isPastDate
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-green-800">Schedule Your Service</h2>
        <p className="mt-2 text-gray-600">Select a date and time that works best for you.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="mx-auto max-w-sm">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            disabled={disabledDays}
            className="rounded-md border"
          />
        </div>

        <div className="mx-auto max-w-sm space-y-2">
          <Label htmlFor="time">Select a Time</Label>
          <Select value={time} onValueChange={setTime} disabled={!date}>
            <SelectTrigger id="time">
              <SelectValue placeholder="Select a time" />
            </SelectTrigger>
            <SelectContent>
              {timeSlots.map((slot) => (
                <SelectItem key={slot} value={slot}>
                  {slot}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
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
          <Button type="submit" className="bg-green-600 hover:bg-green-700" disabled={!date || !time}>
            Continue
          </Button>
        </div>
      </form>
    </div>
  )
}
