import { useState } from "react"
import TabList from "./TabList"
import TabContent from "./TabContent"

const tabContent = [
  {
    title: "Software Engineering",
    interviewer: {
      video: "/assets/video/Chat-1.mp4",
      messages: [
        { text: "Hello", time: "12:54:58" },
        { text: "Let's start from some basics.", time: "12:55:10" },
        { text: "Hhhhhm...", time: "12:55:20" },
        {
          text: "Describe a time when you used your leadership skills to motivate your team.",
          time: "12:55:30",
        },
      ],
      icon: true,
    },
    copilot: {
      messages: [
        {
          text: "During a particularly challenging project at work, our team was facing tight deadlines and mounting pressure. It was a critical project for the company, and tensions were running high. Sensing the need for motivation and cohesion, I decided to step up and utilize my leadership skills to rally the team.",
          time: "12:54:59",
        },
        {
          text: "Throughout the project, I made sure to lead by example, demonstrating resilience, determination, and a willingness to roll up my sleeves and tackle challenges alongside my team. I provided continuous support and guidance, offering constructive feedback and celebrating small victories along the way. During my time as the Lead Designer, I used my leadership skills to motivate my team and colleagues in several instances:",
          list: [
            "I implemented a collaborative work environment, where all team members felt valued and heard.",
            "I organized team-building activities to boost morale and foster a sense of camaraderie.",
            "I recognized and rewarded individual and team achievements, reinforcing a culture of appreciation and acknowledgment.",
            "I facilitated open communication and feedback sessions, encouraging transparency and trust within the team.",
          ],
          time: "12:55:15",
        },
      ],
      icon: false,
    },
    you: {
      messages: [
        { text: "Hi", time: "12:54:59" },
        { text: "Nice to meet you", time: "12:55:15" },
      ],
      icon: false,
    },
  },
  {
    title: "Product Management",
    interviewer: {
      video: "/assets/video/Chat-2.mp4",
      messages: [
        { text: "Hello", time: "12:54:58" },
        { text: "Let's start from some basics.", time: "12:55:10" },
        { text: "Hhhhhm...", time: "12:55:20" },
        {
          text: "Describe a time when you used your leadership skills to motivate your team.",
          time: "12:55:30",
        },
      ],
      icon: true,
    },
    copilot: {
      messages: [
        {
          text: "During a particularly challenging project at work, our team was facing tight deadlines and mounting pressure. It was a critical project for the company, and tensions were running high. Sensing the need for motivation and cohesion, I decided to step up and utilize my leadership skills to rally the team.",
          time: "12:54:59",
        },
        {
          text: "Throughout the project, I made sure to lead by example, demonstrating resilience, determination, and a willingness to roll up my sleeves and tackle challenges alongside my team. I provided continuous support and guidance, offering constructive feedback and celebrating small victories along the way. During my time as the Lead Designer, I used my leadership skills to motivate my team and colleagues in several instances:",
          list: [
            "I implemented a collaborative work environment, where all team members felt valued and heard.",
            "I organized team-building activities to boost morale and foster a sense of camaraderie.",
            "I recognized and rewarded individual and team achievements, reinforcing a culture of appreciation and acknowledgment.",
            "I facilitated open communication and feedback sessions, encouraging transparency and trust within the team.",
          ],
          time: "12:55:15",
        },
      ],
      icon: false,
    },
    you: {
      messages: [
        { text: "Hi", time: "12:54:59" },
        { text: "Nice to meet you", time: "12:55:15" },
      ],
      icon: false,
    },
  },
  {
    title: "Consulting",
    interviewer: {
      video: "/assets/video/Chat-3.mp4",
      messages: [
        { text: "Hello", time: "12:54:58" },
        { text: "Let's start from some basics.", time: "12:55:10" },
        { text: "Hhhhhm...", time: "12:55:20" },
        {
          text: "Describe a time when you used your leadership skills to motivate your team.",
          time: "12:55:30",
        },
      ],
      icon: true,
    },
    copilot: {
      messages: [
        {
          text: "During a particularly challenging project at work, our team was facing tight deadlines and mounting pressure. It was a critical project for the company, and tensions were running high. Sensing the need for motivation and cohesion, I decided to step up and utilize my leadership skills to rally the team.",
          time: "12:54:59",
        },
        {
          text: "Throughout the project, I made sure to lead by example, demonstrating resilience, determination, and a willingness to roll up my sleeves and tackle challenges alongside my team. I provided continuous support and guidance, offering constructive feedback and celebrating small victories along the way. During my time as the Lead Designer, I used my leadership skills to motivate my team and colleagues in several instances:",
          list: [
            "I implemented a collaborative work environment, where all team members felt valued and heard.",
            "I organized team-building activities to boost morale and foster a sense of camaraderie.",
            "I recognized and rewarded individual and team achievements, reinforcing a culture of appreciation and acknowledgment.",
            "I facilitated open communication and feedback sessions, encouraging transparency and trust within the team.",
          ],
          time: "12:55:15",
        },
      ],
      icon: false,
    },
    you: {
      messages: [
        { text: "Hi", time: "12:54:59" },
        { text: "Nice to meet you", time: "12:55:15" },
      ],
      icon: false,
    },
  },
  {
    title: "Marketing",
    interviewer: {
      video: "/assets/video/Chat-4.mp4",
      messages: [
        { text: "Hello", time: "12:54:58" },
        { text: "Let's start from some basics.", time: "12:55:10" },
        { text: "Hhhhhm...", time: "12:55:20" },
        {
          text: "Describe a time when you used your leadership skills to motivate your team.",
          time: "12:55:30",
        },
      ],
      icon: true,
    },
    copilot: {
      messages: [
        {
          text: "During a particularly challenging project at work, our team was facing tight deadlines and mounting pressure. It was a critical project for the company, and tensions were running high. Sensing the need for motivation and cohesion, I decided to step up and utilize my leadership skills to rally the team.",
          time: "12:54:59",
        },
        {
          text: "Throughout the project, I made sure to lead by example, demonstrating resilience, determination, and a willingness to roll up my sleeves and tackle challenges alongside my team. I provided continuous support and guidance, offering constructive feedback and celebrating small victories along the way. During my time as the Lead Designer, I used my leadership skills to motivate my team and colleagues in several instances:",
          list: [
            "I implemented a collaborative work environment, where all team members felt valued and heard.",
            "I organized team-building activities to boost morale and foster a sense of camaraderie.",
            "I recognized and rewarded individual and team achievements, reinforcing a culture of appreciation and acknowledgment.",
            "I facilitated open communication and feedback sessions, encouraging transparency and trust within the team.",
          ],
          time: "12:55:15",
        },
      ],
      icon: false,
    },
    you: {
      messages: [
        { text: "Hi", time: "12:54:59" },
        { text: "Nice to meet you", time: "12:55:15" },
      ],
      icon: false,
    },
  },
  {
    title: "Finance",
    interviewer: {
      video: "/assets/video/Chat-6.mp4",
      messages: [
        { text: "Hello", time: "12:54:58" },
        { text: "Let's start from some basics.", time: "12:55:10" },
        { text: "Hhhhhm...", time: "12:55:20" },
        {
          text: "Describe a time when you used your leadership skills to motivate your team.",
          time: "12:55:30",
        },
      ],
      icon: true,
    },
    copilot: {
      messages: [
        {
          text: "During a particularly challenging project at work, our team was facing tight deadlines and mounting pressure. It was a critical project for the company, and tensions were running high. Sensing the need for motivation and cohesion, I decided to step up and utilize my leadership skills to rally the team.",
          time: "12:54:59",
        },
        {
          text: "Throughout the project, I made sure to lead by example, demonstrating resilience, determination, and a willingness to roll up my sleeves and tackle challenges alongside my team. I provided continuous support and guidance, offering constructive feedback and celebrating small victories along the way. During my time as the Lead Designer, I used my leadership skills to motivate my team and colleagues in several instances:",
          list: [
            "I implemented a collaborative work environment, where all team members felt valued and heard.",
            "I organized team-building activities to boost morale and foster a sense of camaraderie.",
            "I recognized and rewarded individual and team achievements, reinforcing a culture of appreciation and acknowledgment.",
            "I facilitated open communication and feedback sessions, encouraging transparency and trust within the team.",
          ],
          time: "12:55:15",
        },
      ],
      icon: false,
    },
    you: {
      messages: [
        { text: "Hi", time: "12:54:59" },
        { text: "Nice to meet you", time: "12:55:15" },
      ],
      icon: false,
    },
  },
]

function TabComponent() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className="mx-auto max-w-[66.125rem]">
      <TabList
        tabContent={tabContent}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <TabContent tabs={tabContent} activeTab={activeTab} />
    </div>
  )
}

export default TabComponent
