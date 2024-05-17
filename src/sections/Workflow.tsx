import SectionHeadingCenter from '@/components/SectionHeadingCenter'

const Workflow = () => {
  return (
    <section className="py-32 flex flex-col items-center gap-16 sticky top-0">
      <SectionHeadingCenter
        title="A suite of AI superpowers for any career case"
        subtitle="From Day One to Final Rounds"
      />
      <div className="workflow-wrapper flex flex-row justify-between gap-16">
        <ul>
          <li>
            <h3 className="text-headlines/h3">Before Interviews</h3>
          </li>
          <li>
            <div className="workflow-badge">
              Resume Revision
            </div>
          </li>
          <li>
            <div className="workflow-badge">Cover Letter Generation</div>
          </li>
          <li>
            <div className="workflow-badge">Q&A Flashcards</div>
          </li>
          <li>
            <div className="workflow-badge">{"🧠 Mock Interview {Alpha}"}</div>
          </li>
        </ul>
        <ul>
          <li>
            <h3 className="text-headlines/h3">During Interviews</h3>
          </li>
          <li>
            <div className="workflow-badge">🚀 Interview Copilot®️</div>
          </li>
          <li>
            <div className="workflow-badge">Real-Time Transcription</div>
          </li>
          <li>
            <div className="workflow-badge">Personalized Support</div>
          </li>
          <li>
            <div className="workflow-badge">{"🦾 Coding Copilot {Beta}"}</div>
          </li>
        </ul>
        <ul>
          <li>
            <h3 className="text-headlines/h3">After Interviews</h3>
          </li>
          <li>
            <div className="workflow-badge">Interview Summary</div>
          </li>
          <li>
            <div className="workflow-badge">
              {"Salary Negotiation {Q2 2024}"}
            </div>
          </li>
          <li>
            <div className="workflow-badge">{"Autofollowup {Q2 2024}"}</div>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Workflow