import { useEffect, useState } from "react"
import SectionHeadingCenter from "@/components/SectionHeadingCenter"
import Carousel from "@/components/Carousel"
import { EmblaOptionsType } from "embla-carousel"

const OPTIONS: EmblaOptionsType = { loop: true }

const companiesLogo = [
  "/assets/images/companies/airbnb_logo.svg",
  "/assets/images/companies/bain__company_logo.svg",
  "/assets/images/companies/boston_consulting_group_bcg_logo.svg",
  "/assets/images/companies/canva_logo.svg",
  "/assets/images/companies/cisco_id1sjFyzeF.svg",
  "/assets/images/companies/citicom_logo.svg",
  "/assets/images/companies/deloitte_logo.svg",
  "/assets/images/companies/discord_logo.svg",
  "/assets/images/companies/expedia_group_logo.svg",
  "/assets/images/companies/ey_logo.svg",
  "/assets/images/companies/goldman_sachs_logo.svg",
  "/assets/images/companies/instacart_logo.svg",
  "/assets/images/companies/jp_morgan_logo.svg",
  "/assets/images/companies/kpmg_logo.svg",
  "/assets/images/companies/lockheed_martin_logo.svg",
  "/assets/images/companies/mckinsey__company_logo.svg",
  "/assets/images/companies/morgan_stanley_logo.svg",
  "/assets/images/companies/pwc_logo.svg",
  "/assets/images/companies/stripe_logo.svg",
  "/assets/images/companies/tesla_logo.svg",
  "/assets/images/companies/tiktok_logo.svg",
  "/assets/images/companies/twitch_logo.svg",
  "/assets/images/companies/ubs_logo.svg",
]

const Companies = () => {
  const [companies, setCompanies] = useState<JSX.Element[]>([])

  useEffect(() => {
    const logosArray = companiesLogo.map((logo, index) => (
      <img key={index} src={logo} alt="Company Logo" />
    ))
    setCompanies(logosArray)
  }, [])

  return (
    <section className="py-56 flex flex-col items-center gap-16 overflow-hidden">
      <SectionHeadingCenter title="A suite of AI tools to navigate through this difficult recruiting season" />
      <Carousel slides={companies} options={OPTIONS} gap={72} />
    </section>
  )
}

export default Companies
