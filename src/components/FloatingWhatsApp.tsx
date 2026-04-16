"use client"

import { MessageCircle } from "lucide-react"
import { motion } from "framer-motion"

export function FloatingWhatsApp() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center"
    >
      <a
        href="https://wa.me/6281999235048?text=Hi%20Vins%20Rental%20Bike!%20I'm%20interested%20in%20renting%20a%20bike%20from%20your%20website.%20Could%20you%20please%20share%20the%20availability%20and%20rates?%20Thank%20you!"
        target="_blank"
        rel="noreferrer"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-colors"
      >
        <MessageCircle className="h-7 w-7" />
        <span className="absolute -top-10 right-0 w-max opacity-0 transition-opacity bg-black text-white text-xs py-1 px-2 rounded group-hover:opacity-100">
          Chat with us
        </span>
      </a>
    </motion.div>
  )
}
