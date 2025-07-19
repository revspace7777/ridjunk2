import BookingForm from "@/components/booking-form"
import EmailSignup from "@/components/email-signup"

export default function BookPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header is in the layout */}

      <main className="flex-1">
        <div className="container py-12">
          <div className="mx-auto max-w-3xl">
            <h1 className="mb-8 text-center text-3xl font-bold text-green-800">Book Your Service</h1>
            <BookingForm />
          </div>
        </div>

        {/* Email Signup */}
        <EmailSignup />
      </main>

      {/* Footer is in the layout */}
    </div>
  )
}
