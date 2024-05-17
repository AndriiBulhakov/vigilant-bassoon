import React, { useEffect, useState } from 'react'
import tabStyles from "./TabContent.module.css"

type TabContentProps = {
  tabs: any[],
  activeTab: number
}

type Message = {
  text: string
  time: string
}

function TabContent({tabs, activeTab}: TabContentProps) {
  const [video, setVideo] = useState<string>()

  useEffect(() => {
    setVideo(tabs[activeTab].interviewer.video)
  }, [activeTab])

  return (
    <div className="tab-list">
      <div className={`flex justify-between gap-2 ${tabStyles["tab-content"]}`}>
        <div>
          <span>
            Interviewer
            <img src="/assets/images/Black.svg" />
          </span>
          <ul>
            <li>
              <video src={video} autoPlay loop muted playsInline></video>
            </li>
            {tabs[activeTab].interviewer.messages.map(
              (message: Message, i: number) => {
                return (
                  <li key={i + 1} className="relative">
                    <span>{message.text}</span>
                    <span className="message-time">{message.time}</span>
                  </li>
                )
              }
            )}
          </ul>
        </div>
        <div>
          <span>Interview Copilot®️</span>
          <ul>
            {tabs[activeTab].copilot.messages.map(
              (message: Message, i: number) => {
                return (
                  <li key={i + 1} className="relative">
                    <span>{message.text}</span>
                    <span className="message-time">{message.time}</span>
                  </li>
                )
              }
            )}
          </ul>
        </div>
        <div>
          <span>You</span>
          <ul>
            {tabs[activeTab].you.messages.map((message: Message, i: number) => {
              return (
                <li key={i + 1} className="relative">
                  <span>{message.text}</span>
                  <span className="message-time">{message.time}</span>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default TabContent
