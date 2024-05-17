import Link from "next/link"
import { Button } from "../../components/Button"
import { HeroOneButton } from "./HeroOneButton"

const Hero = () => (
  <>
    <HeroOneButton
      video="/assets/video/hero.mp4"
      title="Crushing job interviews with AI. Meet your Interview Copilot®"
      description="Interview Copilot®️ generating actionable guidance for interviews in real-time"
      button={
        <Link href="#">
          <Button className="btn-secondary">Unlock AI Superpower</Button>
        </Link>
      }
    />
  </>
)

export { Hero }
