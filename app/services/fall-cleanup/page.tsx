import ServiceDetailLayout from "@/components/service-detail-layout"

export default function FallCleanupPage() {
  return (
    <ServiceDetailLayout
      title="Fall Cleanup Services"
      description="Prepare your property for winter with our comprehensive fall cleanup services"
      imagePath="/placeholder.svg?height=800&width=1600&text=Fall+Cleanup"
      features={[
        "Leaf removal and disposal",
        "Gutter cleaning",
        "Final mowing at reduced height",
        "Winterizing irrigation systems",
        "Plant protection for cold weather",
        "Debris removal and property cleanup",
      ]}
      benefits={[
        "Prevent lawn damage from leaf buildup",
        "Reduce spring cleanup needs",
        "Minimize disease and pest problems",
        "Protect hardscapes from winter damage",
        "Prepare plants for healthy spring growth",
        "Maintain property appearance through fall and winter",
      ]}
      faqs={[
        {
          question: "When should fall cleanup be scheduled?",
          answer:
            "Optimal timing for fall cleanup is after the majority of leaves have fallen but before the first snowfall, typically late October through November in our region. We can schedule your service at the ideal time for your specific property and tree types.",
        },
        {
          question: "Is gutter cleaning included in fall cleanup?",
          answer:
            "Basic gutter cleaning is included in our comprehensive fall cleanup package. For homes with extensive gutter systems or significant debris, we offer additional gutter cleaning services that can be added to your cleanup package.",
        },
        {
          question: "What happens to the leaves and debris collected?",
          answer:
            "We offer several disposal options. Leaves can be composted on-site if you have a designated area, removed for off-site composting, or collected for municipal pickup where available. We follow all local regulations for yard waste disposal.",
        },
      ]}
    />
  )
}
