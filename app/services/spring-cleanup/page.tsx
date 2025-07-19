import ServiceDetailLayout from "@/components/service-detail-layout"

export default function SpringCleanupPage() {
  return (
    <ServiceDetailLayout
      title="Spring Cleanup Services"
      description="Refresh your landscape after winter with our comprehensive spring cleanup services"
      imagePath="/placeholder.svg?height=800&width=1600&text=Spring+Cleanup"
      features={[
        "Debris removal from winter storms",
        "Pruning of winter damage",
        "Bed preparation for new growth",
        "Pre-emergent weed control application",
        "First mowing and edging of the season",
        "Mulch refreshing and bed definition",
      ]}
      benefits={[
        "Jump-start your landscape for the growing season",
        "Prevent weed establishment early",
        "Remove potential disease and pest harbors",
        "Improve curb appeal after winter dormancy",
        "Prepare planting beds for spring flowers",
        "Identify winter damage requiring attention",
      ]}
      faqs={[
        {
          question: "When is the best time for spring cleanup?",
          answer:
            "The ideal time for spring cleanup is after the threat of hard frost has passed but before significant new growth begins, typically March to early April in our region. We schedule services based on weather patterns and your specific landscape needs.",
        },
        {
          question: "What's included in a standard spring cleanup?",
          answer:
            "Our standard spring cleanup includes removing winter debris, cutting back perennials, pruning winter damage, cleaning planting beds, applying pre-emergent weed control, edging beds, and an initial mowing. Additional services like mulch application can be added as needed.",
        },
        {
          question: "How does spring cleanup differ from regular maintenance?",
          answer:
            "Spring cleanup is a comprehensive, one-time service that prepares your property for the growing season after winter dormancy. Regular maintenance provides ongoing care throughout the growing season. Many clients start with spring cleanup and then transition to regular maintenance.",
        },
      ]}
    />
  )
}
