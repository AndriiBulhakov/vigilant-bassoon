import SectionHeadingCenter from '@/components/SectionHeadingCenter'
import { useEffect, useState } from "react"
import Carousel from "@/components/Carousel"
import { EmblaOptionsType } from "embla-carousel"

const OPTIONS: EmblaOptionsType = { loop: true }

const mentions = [
  {
    description:
      "Final Round AI is like having my interviews on autopilot—it's my secret weapon! I feel empowered and exceptionally prepared every time I use it.",
    author: "Carol Shepart",
    company: "@CNN",
    image: "/assets/images/mentions/cnn_logo.svg",
  },
  {
    description:
      "Final Round AI is like having my interviews on autopilot—it's my secret weapon! I feel empowered and exceptionally prepared every time I use it.",
    author: "Carol Shepart",
    company: "@CNN",
    image: "/assets/images/mentions/cnn_logo.svg",
  },
  {
    description:
      "Final Round AI is like having my interviews on autopilot—it's my secret weapon! I feel empowered and exceptionally prepared every time I use it.",
    author: "Carol Shepart",
    company: "@CNN",
    image: "/assets/images/mentions/cnn_logo.svg",
  },
  {
    description:
      "Final Round AI is like having my interviews on autopilot—it's my secret weapon! I feel empowered and exceptionally prepared every time I use it.",
    author: "Carol Shepart",
    company: "@CNN",
    image: "/assets/images/mentions/cnn_logo.svg",
  },
  {
    description:
      "Final Round AI is like having my interviews on autopilot—it's my secret weapon! I feel empowered and exceptionally prepared every time I use it.",
    author: "Carol Shepart",
    company: "@CNN",
    image: "/assets/images/mentions/cnn_logo.svg",
  },
  {
    description:
      "Final Round AI is like having my interviews on autopilot—it's my secret weapon! I feel empowered and exceptionally prepared every time I use it.",
    author: "Carol Shepart",
    company: "@CNN",
    image: "/assets/images/mentions/cnn_logo.svg",
  },
]

const Mentions = () => {
  const [mentionsSlides, setMentionsSlides] = useState<JSX.Element[]>([])

  useEffect(() => {
    const slides = mentions.map((mention, index) => (
      <div key={index} className="flex flex-col items-start max-w-[19.4rem] text-wrap">
        <h3 className="text-headlines/h3 text-blue-secondary mb-6">
          {mention.description}
        </h3>
        <p className="text-body/medium text-pink-secondary mb-10">
          {mention.author}, {mention.company}
        </p>
        <img src={mention.image} alt={mention.company}/>
      </div>
    ))
    setMentionsSlides(slides)
  }, [])

  return (
    <section className="p-4">
      <div className="mentions-wrapper py-[5.5rem] rounded-[2rem] overflow-hidden flex flex-col items-center gap-20">
        <SectionHeadingCenter
          title="Groundbreaking innovation for interviewees, as featured on"
          subtitle="We're Humble to Mention"
          textColor="text-blue-secondary"
        />
        <Carousel options={OPTIONS} slides={mentionsSlides} gap={57}/>
      </div>
    </section>
  )
}

export default Mentions