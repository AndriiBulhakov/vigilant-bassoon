import StickyOverlay from "@/components/StickyOverlay"
import HorizontalTab from "@/components/horizontal-tab/HorizontalTab"

const tabsContent = [
  {
    title: "Detailed Performance Analysis",
    description:
      "Discover your strengths and areas for improvement with metrics and feedback that help you refine your approach.",
  },
  {
    title: "Customized Improvement Recommendations",
    description:
      "Get tailored advice on communication skills, technical question handling, and behavioral responses to ensure you're fully prepared for the real thing.",
  },
]

const InterviewReport = () => {
  return (
    <section className="sticky top-0">
      <StickyOverlay>
        <HorizontalTab
          tabsContent={tabsContent}
          subtitleBackgroundColor="bg-pink-primary"
          subtitleTextColor="text-gray-primary"
          subtitle="Interview Report"
          subtitleIcon="/assets/images/interview.svg"
          title="Receive comprehensive interview report after each session. Understand your performance so that you can always improve."
          buttonText="Get Interview Report  "
          buttonLink="#"
          type="horizontal"
          image="/assets/images/sticky-tabs/detailed-performance-analysis.png"
          additionalImage="/assets/images/sticky-tabs/interview-report-2.png"
        />
      </StickyOverlay>
    </section>
  )
}

export default InterviewReport
