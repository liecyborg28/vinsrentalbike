"use client"

import { MapPin, Phone, Mail, MessageCircle, Instagram } from "lucide-react"
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
              src="https://maps.google.com/maps?q=Nyoman%20%26%20Susan%20Guesthouse%2C%20Jalan%20Pantai%20Berawa%2C%20Br%20Tegal%20Gundul%20Gg.%20Antik%20No.19%2C%20Tibubeneng%2C%20Kec.%20Kuta%20Utara%2C%20Kabupaten%20Badung%2C%20Bali%2080361&t=&z=15&ie=UTF8&iwloc=&output=embed" 
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
                <p className="text-muted-foreground mb-1">Nyoman & Susan Guesthouse, Jalan Pantai Berawa</p>
                <p className="text-muted-foreground">Br Tegal Gundul Gg. Antik No.19, Tibubeneng, Kec. Kuta Utara, Kabupaten Badung, Bali 80361</p>
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
                <p className="text-muted-foreground">vinsrentalbike@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-primary/10 p-3 rounded-full mr-4 text-primary">
                <Instagram className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">Instagram</h3>
                <p className="text-muted-foreground">@vinsroom_canggu</p>
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
