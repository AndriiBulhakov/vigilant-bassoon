type SectionHeadingCenterProps = {
  title: string,
  subtitle?: string
  textColor?: string
}

const SectionHeadingCenter = ({title, subtitle, textColor}: SectionHeadingCenterProps) => {
  return (
    <>
      {subtitle ? (
        <div
          className={`flex flex-col gap-16 text-center ${textColor && textColor}`}
        >
          <p
            className={`text-body/large  ${textColor ? textColor && "opacity-50"  : "text-gray-quaternary"}`}
          >
            {subtitle}
          </p>
          <h2 className="text-headlines/h2 max-w-[46.9375rem]">{title}</h2>
        </div>
      ) : (
        <h2
          className={`text-headlines/h2 text-center max-w-[46.9375rem] ${textColor && textColor}`}
        >
          {title}
        </h2>
      )}
    </>
  )
}

export default SectionHeadingCenter