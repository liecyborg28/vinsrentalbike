import { ContactSection } from "@/components/landing/ContactSection"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | Vins Rental Bike",
  description: "Get in touch with us for booking inquiries and scooter delivery in Bali."
}

export default function ContactPage() {
  return (
    <div className="pt-8 min-h-screen flex flex-col justify-center">
      <ContactSection />
    </div>
  )
}
