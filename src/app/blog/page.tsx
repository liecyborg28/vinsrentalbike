import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Blog | Vins Rental Bike",
  description: "Guides, tips, and articles for riding and exploring Bali."
}

const ARTICLES = [
  {
    title: "10 Best Beaches to Visit in Canggu by Scooter",
    date: "November 12, 2025",
    excerpt: "Discover the hidden gems of Canggu that are only accessible by motorbike. Avoid the traffic and enjoy the sunset.",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Bali Traffic Survival Guide: Tips for First Time Riders",
    date: "October 28, 2025",
    excerpt: "Driving in Bali can be intimidating. Here are our top safety tips to keep you riding smoothly and safely.",
    image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Ubud Day Trip Itinerary: Temples, Monkey Forest, and Rice Terraces",
    date: "September 15, 2025",
    excerpt: "Rent a powerful NMAX and take a scenic journey up to Ubud's cultural center in just one day.",
    image: "https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&w=600&q=80"
  }
]

export default function BlogPage() {
  return (
    <section className="py-24 container mx-auto px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Rider's Journal</h1>
        <p className="text-muted-foreground text-lg">
          Insights, tips, and itineraries for exploring Bali on two wheels.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ARTICLES.map((article, i) => (
          <article key={i} className="flex flex-col bg-card border rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-[16/10] bg-muted relative">
              <img 
                src={article.image} 
                alt={article.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <p className="text-sm text-muted-foreground mb-3">{article.date}</p>
              <h2 className="text-xl font-bold mb-3">{article.title}</h2>
              <p className="text-muted-foreground mb-6 flex-1">{article.excerpt}</p>
              <Link 
                href={`/blog/article-${i}`} 
                className="text-primary font-medium mr-auto hover:underline"
              >
                Read More &rarr;
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
