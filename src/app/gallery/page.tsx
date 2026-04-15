import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Gallery | Vins Rental Bike",
  description: "See our happy customers and well-maintained scooter fleet in action."
}

const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1627488057288-756543bfee4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1614165518059-eb0eec49e295?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1594002660505-ffce10996885?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  // adding couple more placeholders
  "https://images.unsplash.com/photo-1596473550882-9029a96f13ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
]

export default function GalleryPage() {
  return (
    <section className="py-24 container mx-auto px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Customer Gallery</h1>
        <p className="text-muted-foreground text-lg">
          Snapshots from our happy riders exploring the beautiful island of Bali.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {GALLERY_IMAGES.map((img, i) => (
          <div key={i} className="aspect-square relative overflow-hidden rounded-xl border bg-muted group">
            <img 
              src={img} 
              alt={`Gallery Image ${i+1}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-white font-medium">View Picture</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
