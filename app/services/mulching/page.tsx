import ServiceDetailLayout from "@/components/service-detail-layout"

export default function MulchingPage() {
  return (
    <ServiceDetailLayout
      title="Mulching & Bed Maintenance"
      description="Enhance your landscape's appearance and health with professional mulching services"
      imagePath="/placeholder.svg?height=800&width=1600&text=Mulching"
      features={[
        "Premium mulch options in various colors",
        "Weed barrier installation",
        "Bed edging for clean, defined lines",
        "Seasonal flower planting",
        "Ongoing bed maintenance and weed control",
        "Proper application depth for optimal benefits",
      ]}
      benefits={[
        "Conserve soil moisture and reduce watering needs",
        "Suppress weed growth naturally",
        "Regulate soil temperature",
        "Add aesthetic appeal to your landscape",
        "Prevent soil erosion",
        "Improve soil health as organic mulches decompose",
      ]}
      faqs={[
        {
          question: "How often should mulch be replaced?",
          answer:
            "Most landscapes benefit from fresh mulch annually. Organic mulches naturally decompose, adding nutrients to the soil but diminishing in appearance and effectiveness over time. Some high-traffic or exposed areas may need refreshing twice a year.",
        },
        {
          question: "What type of mulch is best for my landscape?",
          answer:
            "The best mulch depends on your specific needs and aesthetic preferences. Hardwood mulch is versatile and natural-looking, pine straw works well for acid-loving plants, and cedar mulch offers natural pest resistance. We can recommend the optimal choice for your landscape.",
        },
        {
          question: "How deep should mulch be applied?",
          answer:
            "The ideal mulch depth is 2-3 inches. Too little won't provide the desired benefits, while too much can suffocate plants and create moisture problems. Around tree trunks and plant stems, mulch should be pulled back slightly to prevent rot and pest issues.",
        },
      ]}
    />
  )
}
