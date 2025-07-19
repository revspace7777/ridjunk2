import ServiceDetailLayout from "@/components/service-detail-layout"

export default function FertilizationPage() {
  return (
    <ServiceDetailLayout
      title="Fertilization & Weed Control"
      description="Keep your lawn healthy, green, and weed-free with our professional fertilization services"
      imagePath="/placeholder.svg?height=800&width=1600&text=Fertilization"
      features={[
        "Customized fertilization schedule based on grass type",
        "Pre-emergent and post-emergent weed control",
        "Environmentally responsible products",
        "Targeted spot treatments for problem areas",
        "Seasonal applications for year-round protection",
        "Soil testing and pH balancing",
      ]}
      benefits={[
        "Achieve a lush, green lawn that enhances curb appeal",
        "Eliminate unsightly weeds without harming desirable plants",
        "Strengthen grass roots for better drought and disease resistance",
        "Improve soil health for long-term lawn vitality",
        "Reduce the need for watering with healthier grass",
        "Professional application ensures proper coverage and timing",
      ]}
      faqs={[
        {
          question: "How many fertilizer applications does my lawn need per year?",
          answer:
            "Most lawns benefit from 4-6 fertilizer applications per year, depending on grass type, soil conditions, and climate. We'll create a custom schedule for your specific lawn needs.",
        },
        {
          question: "Are your fertilization products safe for children and pets?",
          answer:
            "Yes, we use environmentally responsible products that are safe for families and pets when used as directed. We recommend keeping pets and children off treated areas until dry, typically 1-2 hours after application.",
        },
        {
          question: "How soon will I see results from weed control treatments?",
          answer:
            "Results vary depending on the type of weeds and products used. Pre-emergent treatments prevent weeds from growing, while post-emergent treatments typically show results within 2-3 weeks. Some stubborn weeds may require multiple treatments.",
        },
      ]}
    />
  )
}
