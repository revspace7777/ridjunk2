import ServiceDetailLayout from "@/components/service-detail-layout"

export default function LandscapeDesignPage() {
  return (
    <ServiceDetailLayout
      title="Landscape Design & Installation"
      description="Transform your outdoor space with custom landscape design and professional installation"
      imagePath="/placeholder.svg?height=800&width=1600&text=Landscape+Design"
      features={[
        "Custom design consultations",
        "Plant selection for your specific environment",
        "Installation of trees, shrubs, and flower beds",
        "Mulching and decorative stone placement",
        "Lighting and water feature options",
        "Hardscape integration (patios, walkways, retaining walls)",
      ]}
      benefits={[
        "Increase your property value",
        "Create beautiful outdoor living spaces",
        "Improve environmental sustainability",
        "Reduce maintenance needs with proper planning",
        "Enhance privacy and security",
        "Express your personal style through your landscape",
      ]}
      faqs={[
        {
          question: "What is involved in the landscape design process?",
          answer:
            "Our design process begins with an on-site consultation to understand your goals, preferences, and budget. We then create a custom design plan including plant selections, hardscape elements, and installation timeline. After your approval, we schedule and execute the installation.",
        },
        {
          question: "How long does a typical landscape installation take?",
          answer:
            "Project timelines vary based on scope and complexity. Small projects might take 1-3 days, while larger transformations could take 1-2 weeks or more. Weather and material availability can also affect timelines.",
        },
        {
          question: "Do you offer maintenance for newly installed landscapes?",
          answer:
            "Yes, we offer maintenance packages specifically designed for new landscapes. These include regular watering schedules, monitoring plant health, and adjustments as needed during the establishment period.",
        },
      ]}
    />
  )
}
