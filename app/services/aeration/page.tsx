import ServiceDetailLayout from "@/components/service-detail-layout"

export default function AerationPage() {
  return (
    <ServiceDetailLayout
      title="Aeration & Overseeding"
      description="Revitalize your lawn with professional aeration and overseeding services"
      imagePath="/placeholder.svg?height=800&width=1600&text=Aeration"
      features={[
        "Core aeration to reduce soil compaction",
        "Premium grass seed varieties for your region",
        "Even distribution of seed across the entire lawn",
        "Fertilization to support new seedling growth",
        "Post-service care instructions",
        "Scheduling during optimal growing seasons",
      ]}
      benefits={[
        "Improve water and nutrient absorption",
        "Enhance root development and depth",
        "Reduce thatch buildup",
        "Fill in bare or thin areas with new grass",
        "Increase resistance to drought and disease",
        "Create a thicker, healthier lawn",
      ]}
      faqs={[
        {
          question: "When is the best time for aeration and overseeding?",
          answer:
            "For cool-season grasses (like fescue and bluegrass), early fall is ideal. For warm-season grasses (like Bermuda and Zoysia), late spring to early summer is best. We'll recommend the optimal timing for your specific lawn type.",
        },
        {
          question: "How often should I aerate my lawn?",
          answer:
            "Most lawns benefit from annual aeration, especially those with heavy clay soil, high foot traffic, or thatch buildup. For less stressed lawns, aeration every 2-3 years may be sufficient.",
        },
        {
          question: "How long does it take to see results after overseeding?",
          answer:
            "New grass seedlings typically begin to emerge within 7-14 days, depending on grass type and weather conditions. Full establishment takes about 4-8 weeks. During this time, proper watering is essential for success.",
        },
      ]}
    />
  )
}
