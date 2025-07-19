import ServiceDetailLayout from "@/components/service-detail-layout"

export default function SnowIceManagementPage() {
  return (
    <ServiceDetailLayout
      title="Snow & Ice Management"
      description="Keep your commercial property safe and accessible during winter weather"
      imagePath="/placeholder.svg?height=800&width=1600&text=Snow+Management"
      features={[
        "24/7 monitoring of weather conditions",
        "Pre-treatment before storms",
        "Plowing, shoveling, and snow blowing",
        "Ice melt application",
        "Liability documentation",
        "Priority response for contract clients",
      ]}
      benefits={[
        "Maintain business operations during winter weather",
        "Reduce slip-and-fall liability",
        "Ensure emergency access to your property",
        "Protect pavement from freeze-thaw damage",
        "Peace of mind with professional management",
        "Documented service for insurance purposes",
      ]}
      faqs={[
        {
          question: "How do you determine when to service our property?",
          answer:
            "We monitor weather forecasts 24/7 during winter months and deploy teams based on accumulation thresholds specified in your contract. Typically, we begin clearing when snow reaches 1-2 inches, but this can be customized to your needs. Pre-treatment occurs when forecasts indicate freezing conditions.",
        },
        {
          question: "What types of ice melt do you use?",
          answer:
            "We use a variety of ice melt products depending on temperature conditions and surface types. Options include traditional rock salt for standard conditions, calcium chloride for extreme cold, and environmentally friendly alternatives for sensitive areas. We can customize our approach based on your property's specific needs.",
        },
        {
          question: "When should I set up a snow removal contract?",
          answer:
            "The best time to establish a snow removal contract is in late summer or early fall, before the winter season begins. Early contracts often receive priority scheduling and may qualify for early booking discounts. However, we do accept new clients throughout the season as capacity allows.",
        },
      ]}
    />
  )
}
