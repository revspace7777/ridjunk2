import ServiceDetailLayout from "@/components/service-detail-layout"

export default function CommercialMaintenancePage() {
  return (
    <ServiceDetailLayout
      title="Commercial Maintenance"
      description="Complete property maintenance for businesses and commercial properties"
      imagePath="/placeholder.svg?height=800&width=1600&text=Commercial+Maintenance"
      features={[
        "Customized maintenance schedules",
        "Early morning or weekend service options",
        "Liability insurance coverage",
        "Professional uniformed crews",
        "Monthly service reports",
        "Dedicated account manager",
      ]}
      benefits={[
        "Create positive first impressions for customers",
        "Maintain property value and appearance",
        "Reduce liability concerns with proactive maintenance",
        "Free up staff time for core business activities",
        "Single-source solution for all exterior needs",
        "Budget-friendly service packages",
      ]}
      faqs={[
        {
          question: "How are commercial maintenance contracts structured?",
          answer:
            "We offer flexible contract options including monthly, quarterly, and annual agreements. Services can be bundled for cost savings or selected à la carte based on your specific needs. All contracts include regular inspections and detailed service reports.",
        },
        {
          question: "Can you work around our business hours?",
          answer:
            "Absolutely. We understand the importance of minimizing disruption to your operations. We offer early morning, evening, and weekend service options for high-traffic areas. Our teams are trained to work efficiently and professionally around your customers and employees.",
        },
        {
          question: "What types of commercial properties do you service?",
          answer:
            "We maintain a wide range of commercial properties including office complexes, retail centers, industrial parks, homeowners associations, apartment communities, medical facilities, and educational campuses. Each property type receives a customized maintenance plan.",
        },
      ]}
    />
  )
}
