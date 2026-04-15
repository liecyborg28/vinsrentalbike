"use client"

import Link from "next/link"
import { MessageCircle } from "lucide-react"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section id="home" className="relative pt-24 pb-32 flex items-center justify-center min-h-[80vh] overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/50 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
          alt="Scooter in Bali" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-3xl space-y-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors border-transparent bg-primary/10 text-primary"
          >
            Premium Scooter Rental
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight"
          >
            Explore Bali with <br className="hidden md:block"/>
            <span className="text-primary">Vins Rental Bike</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl"
          >
            Rent top-quality, well-maintained scooters in Canggu and across Bali. 
            Enjoy free delivery, 2 helmets, and 24/7 customer support for a seamless ride.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <Link 
              href="https://wa.me/6281999235048?text=Hi%20Vins%20Rental%20Bike!%20I'm%20interested%20in%20renting%20a%20bike%20from%20your%20website.%20Could%20you%20please%20share%20the%20availability%20and%20rates?%20Thank%20you!" 
              target="_blank"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 py-2"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Book via WhatsApp
            </Link>
            <Link 
              href="#fleet"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors border border-input bg-background hover:bg-accent hover:text-accent-foreground h-12 px-8 py-2"
            >
              View Our Fleet
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
