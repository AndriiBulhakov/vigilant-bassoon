import { Button } from "@/components/Button"
import Feature from "@/components/Feature"
import SectionHeadingCenter from "@/components/SectionHeadingCenter"
import Link from "next/link"

const featureContent = [
  {
    image: "/assets/images/features/Icons-2.svg",
    title: "Plan ahead",
    description:
      "Master your Resume, create Cover Letter, test yourself with the help of Mock Interview.",
  },
  {
    image: "/assets/images/features/Icons-1.svg",
    title: "Ace an interview",
    description:
      "Feel confident with the help of Interview and Coding Copilot®, with real-time transcription and personalised support.",
  },
  {
    image: "/assets/images/features/Icons.svg",
    title: "Stay in touch",
    description:
      "Stay in a loop by auto followup, go through the summary of an interview and negotiate on the salary.",
  },
]

const Features = () => {
  return (
    <section className="pb-40 flex flex-col items-center gap-20">
      <SectionHeadingCenter
        title="A suite of AI tools to navigate through this difficult recruiting season"
        subtitle="AI Superpower for You"
      />
      <ul className="flex justify-between gap-14 max-w-[63.8rem]">
        {featureContent.map((feature, index) => (
          <Feature index={index} {...feature} />
        ))}
      </ul>
      <Link href="/features">
        <Button className="btn-tetriary">Learn more</Button>
      </Link>
    </section>
  )
}

export default Features