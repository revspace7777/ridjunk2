import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, Phone, MessageSquare } from "lucide-react"
import EmailSignup from "@/components/email-signup"

export default function ThankYouPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header is in the layout */}

      <main className="flex-1">
        <div className="container py-12 md:py-24">
          <div className="mx-auto max-w-3xl rounded-lg border border-gray-200 bg-white p-8 text-center shadow-sm">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>

            <h1 className="mb-4 text-3xl font-bold text-green-800">Thank You for Your Request!</h1>

            <p className="mb-6 text-lg text-gray-600">
              We've received your service request and will be sending you a confirmation email shortly with all the
              details to prepare for our visit.
            </p>

            <div className="mb-8 rounded-lg bg-green-50 p-6">
              <h2 className="mb-4 text-xl font-bold text-green-800">Need Immediate Assistance?</h2>

              <p className="mb-4">Our friendly team is standing by, ready to speak with you in 30 seconds or less.</p>

              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button asChild className="flex items-center gap-2 bg-green-600 hover:bg-green-700">
                  <a href="tel:770-555-1234">
                    <Phone className="h-4 w-4" /> Call Us: 770-555-1234
                  </a>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="flex items-center gap-2 border-green-600 text-green-600 hover:bg-green-50"
                >
                  <Link href="/chat">
                    <MessageSquare className="h-4 w-4" /> Start Live Chat
                  </Link>
                </Button>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <h3 className="mb-2 text-lg font-medium">What Happens Next?</h3>

              <ol className="mx-auto mb-6 max-w-md space-y-2 text-left">
                <li className="flex items-start gap-2">
                  <span className="mt-1 rounded-full bg-green-100 p-1 text-green-600">
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>You'll receive a confirmation email with your appointment details.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 rounded-full bg-green-100 p-1 text-green-600">
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>A service specialist will contact you to confirm and discuss any specific requirements.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 rounded-full bg-green-100 p-1 text-green-600">
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>
                    We'll arrive at your property at the scheduled time, ready to provide exceptional service.
                  </span>
                </li>
              </ol>

              <div className="flex justify-center">
                <Button asChild variant="outline">
                  <Link href="/">Return to Homepage</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Email Signup */}
        <EmailSignup />
      </main>

      {/* Footer is in the layout */}
    </div>
  )
}
