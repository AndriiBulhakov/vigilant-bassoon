type StickyOverlayProps = {
  children: React.ReactNode
}

const StickyOverlay = ({children}: StickyOverlayProps) => {
  return (
    <div className="bg-gray-primary p-5">
      {children}
    </div>
  )
}

export default StickyOverlay