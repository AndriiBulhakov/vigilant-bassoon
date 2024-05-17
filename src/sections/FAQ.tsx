import { useState } from "react"
import Accordion from "@/components/Accordion"
import SectionHeadingCenter from "@/components/SectionHeadingCenter"

const faqs = [
  {
    title: "What is the best thing about Switzerland?",
    content:
      "I don't know, but the flag is a big plus!",
  },
  {
    title: "How does a penguin build its house?",
    content:
      "Igloos it together.",
  },
  {
    title: "What do you call a fake noodle?",
    content:
      "An impasta.",
  },
  {
    title: "What do you call a belt made out of watches?",
    content:
      "A waist of time.",
  },
  {
    title: "Why don't skeletons fight each other?",
    content:
      "They don't have the guts.",
  },
  {
    title: "What do you call a factory that makes okay products?",
    content:
      "A satisfactory.",
  },
]

const FAQ = () => {
    const [openAccordionIndex, setOpenAccordionIndex] = useState<number | null>(0)

    const handleAccordionToggle = (index: number) => {
      setOpenAccordionIndex(openAccordionIndex === index ? null : index)
    }


  return (
    <section className="pt-6 pb-40 flex flex-col items-center gap-20">
      <SectionHeadingCenter
        title="If you still have questions. Here are the answers"
        subtitle="Questions & Answers"
      />
      <div className="max-w-[64.3rem] w-full flex flex-col gap-2">
        {faqs.map((faq, index) => (
          <Accordion
            key={index}
            title={faq.title}
            isOpen={openAccordionIndex === index}
            onToggle={() => handleAccordionToggle(index)}
            content={faq.content}
          ></Accordion>
        ))}
      </div>
    </section>
  )
}

export default FAQ
