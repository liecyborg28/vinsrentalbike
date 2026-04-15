"use client"

import { MessageCircle, CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"
import { BIKES } from "@/lib/data"

export function FleetSection() {
  return (
    <section id="fleet" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Premium Fleet</h2>
          <p className="text-muted-foreground text-lg">
            Choose from our selection of well-maintained, brand new scooters. 
            All rentals include 2 helmets and delivery within the Canggu area.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BIKES.map((bike, index) => (
            <motion.div 
              key={bike.id} 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="rounded-xl border bg-card text-card-foreground shadow overflow-hidden flex flex-col transition-all hover:shadow-lg"
            >
              <div className="aspect-video relative overflow-hidden bg-muted p-6 flex items-center justify-center">
                <img 
                  src={bike.image} 
                  alt={bike.name} 
                  className="w-full h-full object-contain transition-transform hover:scale-110 drop-shadow-md"
                />
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold mb-2">{bike.name}</h3>
                <p className="text-muted-foreground mb-6 flex-1">{bike.description}</p>
                
                <div className="space-y-2 mb-6">
                  {bike.features.map((feature, i) => (
                    <div key={i} className="flex items-center text-sm">
                      <CheckCircle2 className="h-4 w-4 mr-2 text-primary" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="bg-muted p-4 rounded-lg mb-6 space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-medium">3 Days</span>
                    <span className="font-bold">{bike.prices.days3}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm border-t border-border/50 pt-2">
                    <span className="font-medium">1 Week</span>
                    <span className="font-bold">{bike.prices.week}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm border-t border-border/50 pt-2">
                    <span className="font-medium">1 Month</span>
                    <span className="font-bold text-primary">{bike.prices.month}</span>
                  </div>
                </div>
                
                <a 
                  href={`https://wa.me/6281999235048?text=${encodeURIComponent(`Hi Vins Rental Bike! 🏍️\n\nI'm interested in renting: *${bike.name}*\n• Start Date: [Fill Date]\n• Duration: [How many days]\n\nIs this unit available? Thank you!`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Rent via WhatsApp
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
