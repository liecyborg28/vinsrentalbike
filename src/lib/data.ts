import { Shield, Wrench, Clock, MapPin } from "lucide-react";

export const BIKES = [
  {
    id: "yamaha-fazzio",
    name: "Yamaha Fazzio",
    image: "/assets/images/yamaha-fazzio.png",
    description:
      "Classic styling with modern features. Perfect for navigating Canggu traffic.",
    prices: { days3: "Rp 330.000", week: "Rp 735.000", month: "Rp 1.500.000" },
    features: ["110cc Engine", "USB Charger", "Helmets Included"],
  },
  {
    id: "yamaha-nmax-neo",
    name: "Yamaha NMAX Neo",
    image: "/assets/images/yamaha-nmax-neo.png",
    description:
      "Premium maxi-scooter offering superior comfort for longer trips around Bali.",
    prices: { days3: "Rp 480.000", week: "Rp 910.000", month: "Rp 2.200.000" },
    features: ["155cc Engine", "ABS Brakes", "Spacious Storage"],
  },
  {
    id: "yamaha-xmax",
    name: "Yamaha XMAX",
    image: "/assets/images/yamaha-xmax.png",
    description:
      "Tough, rugged and reliable. Great utility scooter for everyday explorers.",
    prices: {
      days3: "Rp 900.000",
      week: "Rp 1.750.000",
      month: "Rp 3.500.000",
    },
    features: ["125cc Engine", "Hooks & Storage", "Fuel Efficient"],
  },
  {
    id: "vespa-primavera",
    name: "Vespa Primavera",
    image: "/assets/images/vespa-primavera.png",
    description:
      "Tough, rugged and reliable. Great utility scooter for everyday explorers.",
    prices: {
      days3: "Rp 900.000",
      week: "Rp 1.750.000",
      month: "Rp 3.500.000",
    },
    features: ["125cc Engine", "Hooks & Storage", "Fuel Efficient"],
  },
];

export const FEATURES = [
  {
    icon: Shield,
    title: "2 Helmets Included",
    description:
      "Safety first. We provide two clean, SNI-standard helmets for every scooter rental.",
  },
  {
    icon: Wrench,
    title: "Well Maintained",
    description:
      "Our mechanics regularly service all vehicles to ensure you have a smooth and safe ride.",
  },
  {
    icon: Clock,
    title: "Fast Delivery",
    description:
      "Free delivery and pickup straight to your villa or hotel in the Canggu & Seminyak area.",
  },
  {
    icon: MapPin,
    title: "Explore Freely",
    description:
      "No mileage limits. Take your scooter across Bali and discover hidden gems.",
  },
];

export const REVIEWS = [
  {
    id: 1,
    name: "Thomas Mueller",
    date: "October 2025",
    rating: 5,
    text: "Excellent service! We booked two NMAX scooters via WhatsApp. They delivered them directly to our villa in Berawa exactly on time. The bikes were brand new and in perfect condition.",
    avatar: "https://i.pravatar.cc/150?u=thomas",
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    date: "September 2025",
    rating: 5,
    text: "So easy to rent from Vins Rental Bike. The helmets provided were actually clean and high quality. Good price for a monthly rental. Highly recommended for digital nomads!",
    avatar: "https://i.pravatar.cc/150?u=sarah",
  },
  {
    id: 3,
    name: "Carlos Rivera",
    date: "August 2025",
    rating: 5,
    text: "First time riding in Bali and the team gave us great tips. The Honda Scoopy was reliable. Had a minor flat tire in Ubud and they sent someone to fix it within an hour. Amazing support.",
    avatar: "https://i.pravatar.cc/150?u=carlos",
  },
];

export const TERMS = [
  "Renter must provide a valid International Driving Permit (IDP) or Indonesian Motorcycle License (SIM C).",
  "Minimum rental period is 1 day (24 hours). Returning late may incur additional charges.",
  "Payment must be made in full upon delivery of the scooter either via Cash or Transfer.",
  "Renter is responsible for any damage to the scooter during the rental period.",
  "Helmets must be worn at all times. Fine for not wearing helmets is the renter's responsibility.",
  "Motorbikes cannot be taken out of Bali island under any circumstances.",
  "In case of emergency or breakdown, contact our support team immediately. Do not repair without authorization.",
  "A passport or valid government ID will be photographed securely upon delivery as a guarantee.",
];
