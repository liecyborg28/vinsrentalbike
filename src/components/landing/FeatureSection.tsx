"use client"

import { Shield, Wrench, Clock, MapPin } from "lucide-react"
import { motion } from "framer-motion"
import { FEATURES } from "@/lib/data"

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

export function FeatureSection() {
  return (
    <section id="features" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Vins Rental?</h2>
          <p className="text-muted-foreground text-lg">
            We don't just rent bikes, we provide peace of mind so you can focus on enjoying your holiday in Bali.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {FEATURES.map((feat, i) => (
            <motion.div 
              key={i} 
              variants={itemVariants}
              className="flex flex-col items-center text-center p-6 bg-card border rounded-xl hover:border-primary/50 transition-colors"
            >
              <div className="h-16 w-16 bg-primary/10 text-primary flex items-center justify-center rounded-full mb-6">
                <feat.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feat.title}</h3>
              <p className="text-muted-foreground">{feat.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
