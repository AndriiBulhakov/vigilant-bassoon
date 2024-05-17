import StickyOverlay from '@/components/StickyOverlay'
import HorizontalTab from '@/components/horizontal-tab/HorizontalTab'

const tabsContent = [
  {
    title: "ATS Optimized",
    description:
      "Designed to ensure ATS optimization so your credentials stand out to top employers and pass machine screening process.",
  },
  {
    title: "Personalization with AI",
    description:
      "Customize your document with intelligent suggestions tailored to your career goals. Stand out from the crowd with a resume that's uniquely yours, yet professionally appealing.",
  },
]

const ResumeBuilder = () => {
  return (
    <section className="sticky top-0">
      <StickyOverlay>
        <HorizontalTab
          tabsContent={tabsContent}
          subtitleBackgroundColor="bg-red-primary"
          subtitleTextColor="text-blue-secondary"
          subtitle="AI Resume Builder"
          subtitleIcon="/assets/images/ai-resume-builder.svg"
          title="Generate a hireable resume with ease in one-click."
          buttonText="Launch Resume Builder"
          buttonLink="#"
          type="horizontal"
          image="/assets/images/sticky-tabs/ats-optimized.png"
        />
      </StickyOverlay>
    </section>
  )
}

export default ResumeBuilder