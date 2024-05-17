import StickyOverlay from "@/components/StickyOverlay"
import HorizontalTab from "@/components/horizontal-tab/HorizontalTab"

const tabsContent = [
  {
    title: "Industry-Specific Scenarios",
    description:
      "Get a competitive edge by practicing with questions designed to reflect the latest industry trends and expectations.",
    image: "/images/ats-optimized.svg",
  },
  {
    title: "Real-Time Feedback",
    description:
      "Facilitates accessibility by allowing individuals with hearing impairments to follow along with spoken content in real-time, enhancing inclusivity and understanding.",
    image: "/images/personalization-with-ai.svg",
  },
]

const MockInterview = () => {
  return (
    <section className="sticky top-0">
      <StickyOverlay>
        <HorizontalTab
          tabsContent={tabsContent}
          subtitleBackgroundColor="bg-blue-primary"
          subtitleTextColor="text-gray-primary"
          subtitle="AI Mock Interview"
          subtitleIcon="/assets/images/ai-mock-interview.svg"
          title="Prepare your session with the most  immersive mock interview powered by AI"
          buttonText="Launch Mock Interview"
          buttonLink="#"
          type="vertical"
          image="/assets/images/sticky-tabs/fr-intcop 3.png"
          additionalImage="/assets/images/sticky-tabs/fr-intcop 4.png"
        />
      </StickyOverlay>
    </section>
  )
}

export default MockInterview
