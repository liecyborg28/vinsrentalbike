import { Inter } from "next/font/google";
import "./globals.css";
import { StoreProvider } from "@/store/StoreProvider";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vins Rental Bike | Best Scooter Rental in Canggu & Seminyak",
  description: "Rent top-quality, well-maintained scooters in Canggu and across Bali with Vins Rental Bike. Free delivery and 2 helmets included. Book your ride today via WhatsApp!",
  keywords: "scooter rental bali, bike rental canggu, rent scooter seminyak, bali motorbike rental, vins rental bike, sewa motor bali, sewa motor canggu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} font-sans h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <StoreProvider>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </StoreProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
