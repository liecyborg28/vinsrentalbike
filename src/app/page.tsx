import { HeroSection } from "@/components/landing/HeroSection"
import { FleetSection } from "@/components/landing/FleetSection"
import { FeatureSection } from "@/components/landing/FeatureSection"
import { ReviewSection } from "@/components/landing/ReviewSection"
import { TermsSection } from "@/components/landing/TermsSection"

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeatureSection />
      <FleetSection />
      <ReviewSection />
      <TermsSection />
    </>
  )
}
