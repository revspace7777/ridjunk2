import ServiceDetailLayout from "@/components/service-detail-layout"

export default function LawnMowingPage() {
  return (
    <ServiceDetailLayout
      title="Professional Lawn Mowing Services"
      description="Keep your lawn looking its best with our professional mowing services"
      imagePath="/placeholder.svg?height=800&width=1600&text=Lawn+Mowing"
      features={[
        "Weekly or bi-weekly mowing schedules",
        "Precision edging along walkways and driveways",
        "Trimming around obstacles and garden beds",
        "Blowing of clippings from hard surfaces",
        "Bagging or mulching options available",
        "Consistent cutting height for healthy grass growth",
      ]}
      benefits={[
        "Save time and energy for activities you enjoy",
        "Maintain a professionally manicured appearance",
        "Promote healthier grass through proper mowing techniques",
        "Prevent weed growth with regular maintenance",
        "Enhance your property's curb appeal",
        "Identify potential lawn issues early",
      ]}
      faqs={[
        {
          question: "How often should I have my lawn mowed?",
          answer:
            "During the growing season, most lawns benefit from weekly mowing. In slower growth periods, bi-weekly mowing may be sufficient. We'll help you determine the best schedule for your specific lawn type and conditions.",
        },
        {
          question: "Do you offer one-time mowing services?",
          answer:
            "Yes, we offer one-time mowing services for special situations. However, regular maintenance provides the best results for lawn health and appearance.",
        },
        {
          question: "What happens if it rains on my scheduled service day?",
          answer:
            "If weather prevents us from servicing your lawn on the scheduled day, we'll reschedule for the next available day. We avoid mowing wet lawns as it can damage the grass and soil structure.",
        },
      ]}
    />
  )
}
