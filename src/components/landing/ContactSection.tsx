"use client"

import { MapPin, Phone, Mail, MessageCircle } from "lucide-react"
import { motion } from "framer-motion"

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-card border-b overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-muted-foreground text-lg">
            Have questions or need assistance? Reach out to us via WhatsApp for the fastest response, or visit our garage in Canggu.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="rounded-xl overflow-hidden border bg-muted shadow-sm h-[400px]"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63116.59103688463!2d115.1158654!3d-8.6360412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd2389dffffffff%3A0xcb1b510793af9647!2sCanggu%2C%20North%20Kuta%2C%20Badung%20Regency%2C%20Bali!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Vins Rental Bike Location"
            />
          </motion.div>

          {/* Contact Details */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center space-y-8"
          >
            <div className="flex items-start">
              <div className="bg-primary/10 p-3 rounded-full mr-4 text-primary">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">Our Garage</h3>
                <p className="text-muted-foreground mb-1">Jl. Pantai Batu Bolong, Canggu</p>
                <p className="text-muted-foreground">Kuta Utara, Badung, Bali 80361</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-primary/10 p-3 rounded-full mr-4 text-primary">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">WhatsApp Call / Text</h3>
                <p className="text-muted-foreground">+62 819 9923 5048</p>
                <p className="text-sm text-primary mt-1">Available 24/7 for booking & emergency</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-primary/10 p-3 rounded-full mr-4 text-primary">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">Email</h3>
                <p className="text-muted-foreground">hello@vinsrentalbike.com</p>
              </div>
            </div>

            <motion.div 
              whileHover={{ scale: 1.02 }} 
              whileTap={{ scale: 0.98 }}
              className="pt-6"
            >
              <a 
                href="https://wa.me/6281999235048?text=Hi%20Vins%20Rental%20Bike!%20I'm%20interested%20in%20renting%20a%20bike%20from%20your%20website.%20Could%20you%20please%20share%20the%20availability%20and%20rates?%20Thank%20you!" 
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors bg-green-500 text-white hover:bg-green-600 h-14 px-8 w-full md:w-auto shadow-lg hover:shadow-xl"
              >
                <MessageCircle className="mr-2 h-6 w-6" />
                <span className="text-lg">Chat with us on WhatsApp</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
