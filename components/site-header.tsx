import Link from "next/link"
import Image from "next/image"
import { Phone } from "lucide-react"

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/placeholder.svg?height=40&width=40"
              alt="Sanders Lawnscapes Logo"
              width={40}
              height={40}
              className="h-10 w-10"
            />
            <span className="text-xl font-bold text-green-800">Sanders Lawnscapes</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/for-home" className="text-sm font-medium hover:text-green-600">
              For Home
            </Link>
            <Link href="/for-business" className="text-sm font-medium hover:text-green-600">
              For Business
            </Link>
            <Link href="/seasonal" className="text-sm font-medium hover:text-green-600">
              Seasonal
            </Link>
            <Link href="/locations" className="text-sm font-medium hover:text-green-600">
              Locations
            </Link>
            <Link href="/pricing" className="text-sm font-medium hover:text-green-600">
              Pricing
            </Link>
            <Link href="/reviews" className="text-sm font-medium hover:text-green-600">
              Reviews
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/client-portal" className="hidden md:block text-sm font-medium hover:text-green-600">
            Client Portal
          </Link>
          <div className="hidden md:flex items-center gap-2">
            <Phone className="h-4 w-4 text-green-600" />
            <span className="text-sm font-medium">770-555-1234</span>
          </div>
          <Link
            href="/contact"
            className="inline-flex h-9 items-center justify-center rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-green-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-green-500"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </header>
  )
}
