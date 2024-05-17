import SectionHeadingCenter from "@/components/SectionHeadingCenter"
import { useEffect, useState } from "react"
import Carousel from "@/components/Carousel"
import { EmblaOptionsType } from "embla-carousel"

const OPTIONS: EmblaOptionsType = { loop: true }

const tutorials = [
  {
    title: "How to set up Interview Copilot for success",
    date: "Mar 26 2024",
    description:
      "To make sure the Interview Copilot®️ receive your audio input from online interviews, please follow the instruction to correctly configure your setting",
    image: "/assets/images/tutorials/tutor-1.png",
  },
  {
    title: "How to set up Interview Copilot for success",
    date: "Mar 26 2024",
    description:
      "To make sure the Interview Copilot®️ receive your audio input from online interviews, please follow the instruction to correctly configure your setting",
    image: "/assets/images/tutorials/tutor-2.png",
  },
  {
    title: "How to set up Interview Copilot for success",
    date: "Mar 26 2024",
    description:
      "To make sure the Interview Copilot®️ receive your audio input from online interviews, please follow the instruction to correctly configure your setting",
    image: "/assets/images/tutorials/tutor-3.png",
  },
  {
    title: "How to set up Interview Copilot for success",
    date: "Mar 26 2024",
    description:
      "To make sure the Interview Copilot®️ receive your audio input from online interviews, please follow the instruction to correctly configure your setting",
    image: "/assets/images/tutorials/tutor-1.png",
  },
  {
    title: "How to set up Interview Copilot for success",
    date: "Mar 26 2024",
    description:
      "To make sure the Interview Copilot®️ receive your audio input from online interviews, please follow the instruction to correctly configure your setting",
    image: "/assets/images/tutorials/tutor-2.png",
  },
  {
    title: "How to set up Interview Copilot for success",
    date: "Mar 26 2024",
    description:
      "To make sure the Interview Copilot®️ receive your audio input from online interviews, please follow the instruction to correctly configure your setting",
    image: "/assets/images/tutorials/tutor-3.png",
  },
]

const Tutorials = () => {
  const [tutorialsSlides, setTutorialsSlides] = useState<JSX.Element[]>([])

  useEffect(() => {
    const testimonialsArray = tutorials.map((tutorials, index) => {
    const truncatedDescription = tutorials.description.split("\n").slice(0, 4).join("\n").slice(0, 220) + "..."
    return (
      <div
        key={index}
        className="p-8 rounded-[2rem] w-[25.9rem] flex flex-col justify-between items-start gap-6 bg-white-background text-wrap"
      >
        <img src={tutorials.image} alt="" className="w-full rounded-lg max-h-[10.125rem]" />
        <p className="text-body/medium text-gray-primary opacity-40">
          {tutorials.date}
        </p>
        <h3 className="text-headlines/h3">{tutorials.title}</h3>
        <p className="text-body/medium text-gray-primary opacity-40">
          {truncatedDescription}
        </p>
      </div>
    )})
    setTutorialsSlides(testimonialsArray)
  }, [])

  return (
    <section className="pt-24 pb-28 px flex flex-col items-center gap-20 overflow-hidden">
      <SectionHeadingCenter
        title="Learn more about AI superpowers to navigate this recruiting season"
        subtitle="AI Will Not Take Your Job But Someone Using AI Will"
      />
      <Carousel slides={tutorialsSlides} options={OPTIONS} gap={20} />
    </section>
  )
}

export default Tutorials
