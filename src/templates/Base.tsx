import { Meta } from "./Meta"
import { ReactLenis } from "@studio-freight/react-lenis"
import { AppConfig } from "../utils/AppConfig"
import { Footer } from "../sections/footer/Footer"
import { Navbar } from "@/sections/navigation/Navbar"
import { Hero } from "@/sections/hero/Hero"
import Chat from "@/sections/Chat"
import Companies from "@/sections/Companies"
import Features from "@/sections/Features"
import Workflow from "@/sections/Workflow"
import BackgroundBubbles from "@/components/BackgroundBubbles"
import ResumeBuilder from "@/sections/ResumeBuilder"
import MockInterview from "@/sections/MockInterview"
import QuestionBank from "@/sections/QuestionBank"
import InterviewReport from "@/sections/InterviewReport"
import Testimonials from "@/sections/Testimonials"
import FAQ from "@/sections/FAQ"
import Mentions from "@/sections/Mentions"
import Tutorials from "@/sections/Tutorials"
import CTA from "@/sections/CTA"
import Subscription from "@/sections/Subscription"
// import { useScroll } from "framer-motion"
// import { useEffect, useRef } from "react"

const Base = function () {
  return (
    <>
      <ReactLenis root>
        <Meta title={AppConfig.title} description={AppConfig.description} />
        <BackgroundBubbles />
        <Navbar></Navbar>
        <main>
          <Hero></Hero>
          <Chat></Chat>
          <Companies></Companies>
          <Features></Features>
          <div className="relative flex flex-col gap-[100svh]">
            <Workflow></Workflow>
            <ResumeBuilder></ResumeBuilder>
            <MockInterview></MockInterview>
            <QuestionBank></QuestionBank>
            <InterviewReport></InterviewReport>
          </div>
          <Testimonials></Testimonials>
          <FAQ></FAQ>
          <Mentions></Mentions>
          <Tutorials></Tutorials>
          <CTA></CTA>
          <Subscription></Subscription>
        </main>
        <Footer />
      </ReactLenis>
    </>
  )
}

export { Base }
