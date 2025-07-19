import { Check, Star, User } from "lucide-react"

export default function PromotionalBar() {
  return (
    <section className="border-b bg-white py-6">
      <div className="container flex flex-col items-center justify-center space-y-2 text-center sm:flex-row sm:space-x-8 sm:space-y-0">
        <div className="flex items-center">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <span className="ml-2 text-sm font-medium">5-Star Rating on Google</span>
        </div>
        <div className="h-6 w-px bg-gray-300 hidden sm:block"></div>
        <div className="flex items-center">
          <User className="h-5 w-5 text-green-600" />
          <span className="ml-2 text-sm font-medium">1000+ Satisfied Customers</span>
        </div>
        <div className="h-6 w-px bg-gray-300 hidden sm:block"></div>
        <div className="flex items-center">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-600 text-white">
            <Check className="h-4 w-4" />
          </div>
          <span className="ml-2 text-sm font-medium">Google Guarantee</span>
        </div>
      </div>
    </section>
  )
}
