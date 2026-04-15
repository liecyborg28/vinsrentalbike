import { Bike } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-muted text-muted-foreground border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img src="/assets/images/logo.png" alt="Vins Rental Bike Logo" className="h-8 w-auto mix-blend-multiply dark:mix-blend-normal" />
              <span className="font-bold text-xl tracking-tight text-foreground">Vins Rental Bike</span>
            </div>
            <p className="mb-4 max-w-sm">
              Providing top-quality scooter rentals in Bali. Experience the island of gods fully with our well-maintained bikes and premium service.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/bikes" className="hover:text-primary transition-colors">Bikes & Pricing</Link></li>
              <li><Link href="/gallery" className="hover:text-primary transition-colors">Gallery</Link></li>
              <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="/#terms" className="hover:text-primary transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Insurance</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm gap-4">
          <p>&copy; {new Date().getFullYear()} Vins Rental Bike. All rights reserved.</p>
          <p>Designed in Bali.</p>
        </div>
      </div>
    </footer>
  )
}
