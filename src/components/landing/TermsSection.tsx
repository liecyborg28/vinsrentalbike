"use client"

import { FileText, CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"
import { TERMS } from "@/lib/data"

export function TermsSection() {
  return (
    <section id="terms" className="py-24 bg-card border-t border-b overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="flex flex-col items-center text-center mb-12"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="h-16 w-16 bg-primary/10 text-primary flex items-center justify-center rounded-full mb-6">
              <FileText className="h-8 w-8" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Terms & Conditions</h2>
            <p className="text-muted-foreground text-lg">
              Please read our straightforward rental rules before booking to ensure a smooth riding experience in Bali.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            {TERMS.map((term, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start"
              >
                <CheckCircle2 className="h-5 w-5 mr-3 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground leading-relaxed">{term}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
