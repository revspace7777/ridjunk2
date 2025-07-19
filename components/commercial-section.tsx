import { Building2, ClipboardCheck, Clock, DollarSign, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CommercialSection() {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-gray-900">Commercial & Property Services</h2>
        <p className="mt-4 text-lg text-gray-600">
          Sanders Lawnscapes provides professional landscaping and maintenance services for commercial properties
          throughout North Atlanta.
        </p>

        <div className="mt-6 space-y-4">
          <div className="flex items-start gap-3">
            <div className="rounded-full bg-green-100 p-2 text-green-600">
              <ClipboardCheck className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-medium">Reliable & Consistent</h3>
              <p className="text-sm text-gray-600">
                We understand that consistency is crucial for commercial properties. Our team delivers reliable service
                on schedule, every time.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="rounded-full bg-green-100 p-2 text-green-600">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-medium">Fully Insured & Licensed</h3>
              <p className="text-sm text-gray-600">
                Our comprehensive insurance coverage protects your property and eliminates liability concerns.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="rounded-full bg-green-100 p-2 text-green-600">
              <Clock className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-medium">Flexible Scheduling</h3>
              <p className="text-sm text-gray-600">
                We work around your business hours to minimize disruption to your operations and customers.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="rounded-full bg-green-100 p-2 text-green-600">
              <DollarSign className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-medium">Competitive Pricing</h3>
              <p className="text-sm text-gray-600">
                Our transparent pricing and customized service packages ensure you get the best value for your
                investment.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <Button asChild className="bg-green-600 hover:bg-green-700">
            <Link href="/for-business">Learn More</Link>
          </Button>
        </div>
      </div>

      <div className="relative rounded-lg bg-gray-100 p-6">
        <div className="absolute -top-4 left-6 rounded-full bg-green-600 px-4 py-1 text-sm font-medium text-white">
          For Property Managers
        </div>
        <div className="mt-4">
          <h3 className="text-xl font-bold">Solving Your Property Maintenance Challenges</h3>
          <p className="mt-2 text-gray-600">
            We understand the unique challenges property managers face when dealing with contractors.
          </p>

          <div className="mt-6 space-y-4">
            <div className="rounded-lg bg-white p-4 shadow-sm">
              <h4 className="font-medium text-green-700">Pain Point: Unreliable Contractors</h4>
              <p className="mt-1 text-sm text-gray-600">
                No more chasing down contractors or dealing with missed appointments. Our dedicated account managers
                ensure consistent service delivery.
              </p>
            </div>

            <div className="rounded-lg bg-white p-4 shadow-sm">
              <h4 className="font-medium text-green-700">Pain Point: Quality Control</h4>
              <p className="mt-1 text-sm text-gray-600">
                Our detailed service reports and regular quality inspections ensure your properties always meet the
                highest standards.
              </p>
            </div>

            <div className="rounded-lg bg-white p-4 shadow-sm">
              <h4 className="font-medium text-green-700">Pain Point: Budget Management</h4>
              <p className="mt-1 text-sm text-gray-600">
                Our transparent pricing and customized service packages help you stay within budget while maintaining
                beautiful properties.
              </p>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Building2 className="h-5 w-5 text-green-600" />
              <span className="text-sm font-medium">Serving HOAs, Office Parks, Retail Centers & More</span>
            </div>
            <Button asChild variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
              <Link href="/contact">Request a Quote</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
