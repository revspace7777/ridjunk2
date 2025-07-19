import ServiceDetailLayout from "@/components/service-detail-layout"

export default function TreeShrubCarePage() {
  return (
    <ServiceDetailLayout
      title="Tree & Shrub Care"
      description="Maintain the health and beauty of your trees and shrubs with our specialized care services"
      imagePath="/placeholder.svg?height=800&width=1600&text=Tree+Care"
      features={[
        "Disease and pest management",
        "Deep root fertilization",
        "Structural pruning for safety",
        "Growth regulation treatments",
        "Storm damage prevention",
        "Seasonal care programs",
      ]}
      benefits={[
        "Extend the life of valuable trees and shrubs",
        "Prevent costly damage from falling limbs",
        "Enhance flowering and foliage display",
        "Early detection of potential problems",
        "Maintain property value with healthy specimens",
        "Protect your landscape investment",
      ]}
      faqs={[
        {
          question: "How can I tell if my trees need professional care?",
          answer:
            "Warning signs include dead branches, leaf discoloration, early leaf drop, visible insects or fungus, cracks in the trunk, or leaning trees. Our certified arborists can assess your trees and recommend appropriate treatments.",
        },
        {
          question: "What is deep root fertilization and why is it important?",
          answer:
            "Deep root fertilization delivers nutrients directly to the root zone of trees and shrubs, bypassing turf competition. This technique promotes stronger root development, improves stress tolerance, and enhances overall plant health, especially in urban environments where natural nutrient cycling is disrupted.",
        },
        {
          question: "Do you treat for emerald ash borer and other invasive pests?",
          answer:
            "Yes, we offer preventative and therapeutic treatments for various invasive pests, including emerald ash borer, Japanese beetles, and scale insects. Early intervention is crucial for effective management, so regular monitoring is included in our care programs.",
        },
      ]}
    />
  )
}
