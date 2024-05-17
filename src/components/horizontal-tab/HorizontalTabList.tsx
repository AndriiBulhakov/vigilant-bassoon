type Tab = {
  title: string
  description: string
}

type HorizontalTabListProps = {
  activeTab: number
  tabList: object[]
  type: string
  setActiveTab: (index: number) => void
}

const HorizontalTabList = ({ activeTab, tabList, type, setActiveTab }: HorizontalTabListProps) => {
  return (
    <ul className={`flex gap-6 ${type === "horizontal" ? "flex-col" : "flex-row"}`}>
      {tabList.map((tab, index) => (
        <li key={index} className={`${type === "horizontal" ? "" : "flex-1"}`}>
          <button
            className={`text-left pt-6 border-t-2 text-body/medium ${activeTab === index ? "border-gray-primary" : "border-gray-quinary"}`}
            onClick={() => setActiveTab(index)}
          >
            <h4
              className={`mb-4 ${activeTab === index ? "text-gray-primary" : "text-gray-quaternary"}`}
            >
              {(tab as Tab).title}
            </h4>
            <p
              className={`${activeTab === index ? "text-gray-tetriary" : "text-gray-quaternary"}`}
            >
              {(tab as Tab).description}
            </p>
          </button>
        </li>
      ))}
    </ul>
  )
}

export default HorizontalTabList
