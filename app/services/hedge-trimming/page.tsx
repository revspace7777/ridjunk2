import ServiceDetailLayout from "@/components/service-detail-layout"

export default function HedgeTrimmingPage() {
  return (
    <ServiceDetailLayout
      title="Hedge & Shrub Trimming"
      description="Keep your hedges and shrubs shaped and healthy with our professional trimming services"
      imagePath="/placeholder.svg?height=800&width=1600&text=Hedge+Trimming"
      features={[
        "Precision trimming and shaping",
        "Removal of dead or diseased branches",
        "Promotion of healthy new growth",
        "Maintenance of privacy screens",
        "Seasonal pruning for optimal plant health",
        "Cleanup and debris removal",
      ]}
      benefits={[
        "Maintain the aesthetic appeal of your landscape",
        "Improve plant health and longevity",
        "Control size and prevent overgrowth",
        "Increase flowering and fruiting on appropriate species",
        "Maintain privacy and security features",
        "Prevent damage to structures from overgrown plants",
      ]}
      faqs={[
        {
          question: "How often should hedges and shrubs be trimmed?",
          answer:
            "Most hedges and shrubs benefit from trimming 2-3 times per year. Formal hedges may need more frequent trimming (4-6 times annually) to maintain their crisp appearance. Flowering shrubs require specific timing to avoid removing flower buds.",
        },
        {
          question: "What's the best time of year to trim different types of shrubs?",
          answer:
            "The optimal timing depends on the plant species. Spring-flowering shrubs should be pruned immediately after flowering. Summer-flowering shrubs are typically pruned in late winter or early spring. Evergreen hedges are best trimmed in late spring and mid-summer.",
        },
        {
          question: "Can overgrown shrubs be restored with proper trimming?",
          answer:
            "Yes, many overgrown shrubs can be rejuvenated through proper pruning techniques. This may involve a multi-year approach of selective pruning to avoid shocking the plant. Our experts can assess your specific shrubs and recommend the best restoration approach.",
        },
      ]}
    />
  )
}
