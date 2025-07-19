import ServiceDetailLayout from "@/components/service-detail-layout"

export default function PropertyEnhancementPage() {
  return (
    <ServiceDetailLayout
      title="Property Enhancement"
      description="Improve your commercial property's appearance and value with our enhancement services"
      imagePath="/placeholder.svg?height=800&width=1600&text=Property+Enhancement"
      features={[
        "Seasonal color rotations",
        "Entrance and common area focus",
        "Water-efficient landscape designs",
        "Hardscape installation and repair",
        "Outdoor seating area development",
        "Lighting and security enhancements",
      ]}
      benefits={[
        "Attract and retain tenants with appealing exteriors",
        "Increase property value and marketability",
        "Create functional outdoor spaces for employees",
        "Reduce water usage with smart landscaping",
        "Enhance safety and security with proper lighting",
        "Stand out from competing properties",
      ]}
      faqs={[
        {
          question: "How can I improve my property within budget constraints?",
          answer:
            "We offer phased enhancement plans that allow improvements to be implemented over time according to your budget. We prioritize high-visibility areas first and can develop a multi-year plan that systematically enhances your property while managing costs.",
        },
        {
          question: "What are the most impactful enhancements for commercial properties?",
          answer:
            "Entrance improvements typically provide the highest return on investment, as they create critical first impressions. This includes upgraded signage areas, seasonal color displays, and architectural landscape elements. Common area enhancements and outdoor gathering spaces are also highly valued by tenants and visitors.",
        },
        {
          question: "Can enhancements help reduce maintenance costs?",
          answer:
            "Yes, strategic enhancements can actually reduce long-term maintenance costs. Converting high-maintenance turf areas to mulched beds with drought-tolerant plants, installing smart irrigation systems, and incorporating hardscape elements can significantly reduce ongoing maintenance requirements and water usage.",
        },
      ]}
    />
  )
}
