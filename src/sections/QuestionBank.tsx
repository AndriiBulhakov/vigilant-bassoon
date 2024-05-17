import StickyOverlay from "@/components/StickyOverlay"
import HorizontalTab from "@/components/horizontal-tab/HorizontalTab"

const tabsContent = [
  {
    title: "Verified Question Database",
    description:
      "featuring real interview questions collected directly from recruiters and successful candidates. Ensure you’re prepared for what employers really ask, backed by insights from industry experts.",
    image: "/images/ats-optimized.svg",
  },
  {
    title: "AI-enabled best practices",
    description:
      "Get optimal answers for each question in our verified database. Get expert-level guidance on crafting responses that align with industry standards and impress your interviewers.",
    image: "/images/personalization-with-ai.svg",
  },
]

const QuestionBank = () => {
  return (
    <section className="sticky top-0">
      <StickyOverlay>
        <HorizontalTab
          tabsContent={tabsContent}
          subtitleBackgroundColor="bg-orange-primary"
          subtitleTextColor="text-gray-primary"
          subtitle="Question Bank"
          subtitleIcon="/assets/images/question-bank.png"
          title="Review top interview questions and learn AI-empowered answers to optimize your preparation."
          buttonText="Launch Mock Interview"
          buttonLink="#"
          type="vertical"
          image="/assets/images/sticky-tabs/fr-intcop 5.png"
          additionalImage="/assets/images/sticky-tabs/fr-incop 6.png"
        />
      </StickyOverlay>
    </section>
  )
}

export default QuestionBank
