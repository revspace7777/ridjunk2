import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone } from "lucide-react"

export default function SiteFooter() {
  return (
    <footer className="border-t bg-green-900 text-white">
      <div className="container py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/placeholder.svg?height=40&width=40"
                alt="Sanders Lawnscapes Logo"
                width={40}
                height={40}
                className="h-10 w-10 bg-white rounded-full p-1"
              />
              <span className="text-xl font-bold">Sanders Lawnscapes</span>
            </Link>
            <p className="mt-4 text-sm text-green-100">
              Providing meticulous and professional lawn care and landscaping services for 15 years in North Atlanta.
            </p>
            <div className="mt-4 flex items-center">
              <MapPin className="h-4 w-4 text-green-300" />
              <span className="ml-2 text-sm">Serving Cobb & Cherokee Counties</span>
            </div>
            <div className="mt-2 flex items-center">
              <Phone className="h-4 w-4 text-green-300" />
              <span className="ml-2 text-sm">770-555-1234</span>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium">Services</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/for-home" className="hover:text-green-300">
                  For Home
                </Link>
              </li>
              <li>
                <Link href="/for-business" className="hover:text-green-300">
                  For Business
                </Link>
              </li>
              <li>
                <Link href="/seasonal" className="hover:text-green-300">
                  Seasonal
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium">Company</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/locations" className="hover:text-green-300">
                  Locations
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-green-300">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="hover:text-green-300">
                  Reviews
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium">Contact</h3>
            <div className="mt-4">
              <Link
                href="/contact"
                className="inline-flex h-9 items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-green-800 shadow transition-colors hover:bg-green-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-green-500"
              >
                Get in Touch
              </Link>
            </div>
            <div className="mt-4">
              <Link href="/client-portal" className="text-sm hover:text-green-300">
                Client Portal
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-green-800 pt-8 text-center text-sm text-green-100">
          <p>© {new Date().getFullYear()} Sanders Lawnscapes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
