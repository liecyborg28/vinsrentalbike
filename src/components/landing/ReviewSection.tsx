"use client"

import * as React from "react"
import { Star, MessageSquare } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { REVIEWS } from "@/lib/data"

export function ReviewSection() {
  const [showForm, setShowForm] = React.useState(false)

  return (
    <section id="reviews" className="py-24 bg-muted/20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div 
            className="max-w-2xl"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Riders Say</h2>
            <p className="text-muted-foreground text-lg">
              Don't just take our word for it. Read the real experiences of our customers who explored Bali with Vins Rental Bike.
            </p>
          </motion.div>
          
          <a 
            href="https://www.google.com/search?q=Vins+Rental+Bike"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-md font-medium transition-colors bg-secondary text-secondary-foreground hover:bg-secondary/80 h-12 px-6"
          >
            <MessageSquare className="mr-2 h-5 w-5" />
            Write a Review
          </a>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review, i) => (
            <motion.div 
              key={review.id} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="bg-card text-card-foreground p-8 rounded-xl border shadow-sm flex flex-col hover:shadow-md transition-shadow"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, j) => (
                  <Star key={j} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-muted-foreground flex-1 italic relative before:content-['“'] before:text-4xl before:absolute before:-top-4 before:-left-2 before:text-muted/30">
                {review.text}
              </p>
              <div className="flex items-center gap-4 mt-8 pt-6 border-t">
                <img src={review.avatar} alt={review.name} className="h-12 w-12 rounded-full border bg-muted" />
                <div>
                  <h4 className="font-semibold">{review.name}</h4>
                  <p className="text-xs text-muted-foreground">{review.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
