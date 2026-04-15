import { FleetSection } from "@/components/landing/FleetSection"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Fleet | Vins Rental Bike",
  description: "Browse our premium selection of rental scooters in Bali."
}

export default function BikesPage() {
  return (
    <div className="pt-8">
      <FleetSection />
    </div>
  )
}
