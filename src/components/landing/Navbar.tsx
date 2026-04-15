"use client"

import * as React from "react"
import { Moon, Sun, Menu, X, Bike } from "lucide-react"
import { useTheme } from "next-themes"
import Link from "next/link"

export function Navbar() {
  const { setTheme, resolvedTheme } = useTheme()
  const [isOpen, setIsOpen] = React.useState(false)
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <img src="/assets/images/logo.png" alt="Vins Rental Bike Logo" className="h-8 w-auto" />
            <span className="font-bold text-xl tracking-tight">Vins Rental Bike</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <Link href="/bikes" className="hover:text-primary transition-colors">Bikes</Link>
              <Link href="/gallery" className="hover:text-primary transition-colors">Gallery</Link>
              <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
              <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
            </div>
          </div>
          
          <div className="hidden md:flex items-center">
            {mounted && (
              <button
                onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                className="p-2 rounded-md hover:bg-muted transition-colors relative h-9 w-9 flex items-center justify-center"
                aria-label="Toggle dark mode"
              >
                {resolvedTheme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
            )}
          </div>
          
          <div className="md:hidden flex items-center">
            {mounted && (
              <button
                onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                className="p-2 mr-2 rounded-md hover:bg-muted transition-colors relative h-9 w-9 flex items-center justify-center"
                aria-label="Toggle dark mode"
              >
                {resolvedTheme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
            )}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md hover:bg-muted transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background">
            <Link href="/" className="block px-3 py-2 hover:bg-muted rounded-md" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/bikes" className="block px-3 py-2 hover:bg-muted rounded-md" onClick={() => setIsOpen(false)}>Bikes</Link>
            <Link href="/gallery" className="block px-3 py-2 hover:bg-muted rounded-md" onClick={() => setIsOpen(false)}>Gallery</Link>
            <Link href="/blog" className="block px-3 py-2 hover:bg-muted rounded-md" onClick={() => setIsOpen(false)}>Blog</Link>
            <Link href="/contact" className="block px-3 py-2 hover:bg-muted rounded-md" onClick={() => setIsOpen(false)}>Contact</Link>
          </div>
        </div>
      )}
    </nav>
  )
}
