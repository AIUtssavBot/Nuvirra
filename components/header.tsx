"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 border-b-2 border-nuvirra-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 relative">
          <div className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 flex-shrink-0 flex items-center gap-3">
            <Image src="/logo.png" alt="Nuvirra Logo" width={120} height={40} className="h-16 w-auto" />
            <span className="text-xl font-bold text-nuvirra-primary hidden sm:block"></span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#home"
              className="text-gray-700 hover:text-nuvirra-primary transition-colors duration-200 font-medium"
            >
              Home
            </a>
            <a
              href="#services"
              className="text-gray-700 hover:text-nuvirra-primary transition-colors duration-200 font-medium"
            >
              Services
            </a>
            <a
              href="#features"
              className="text-gray-700 hover:text-nuvirra-primary transition-colors duration-200 font-medium"
            >
              Features
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-nuvirra-primary transition-colors duration-200 font-medium"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-nuvirra-primary transition-colors duration-200 font-medium"
            >
              Contact
            </a>
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Button
              asChild
              className="bg-gradient-to-r from-nuvirra-primary to-nuvirra-accent hover:from-nuvirra-primary-dark hover:to-teal-600 text-white px-6 py-2 rounded-lg transition-all duration-200 font-semibold"
            >
              <a href="#contact">Get Started</a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={toggleMenu} className="text-gray-700">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              <a
                href="#home"
                className="block px-3 py-2 text-gray-700 hover:text-nuvirra-primary transition-colors duration-200"
                onClick={toggleMenu}
              >
                Home
              </a>
              <a
                href="#services"
                className="block px-3 py-2 text-gray-700 hover:text-nuvirra-primary transition-colors duration-200"
                onClick={toggleMenu}
              >
                Services
              </a>
              <a
                href="#features"
                className="block px-3 py-2 text-gray-700 hover:text-nuvirra-primary transition-colors duration-200"
                onClick={toggleMenu}
              >
                Features
              </a>
              <a
                href="#about"
                className="block px-3 py-2 text-gray-700 hover:text-nuvirra-primary transition-colors duration-200"
                onClick={toggleMenu}
              >
                About
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-gray-700 hover:text-nuvirra-primary transition-colors duration-200"
                onClick={toggleMenu}
              >
                Contact
              </a>
              <div className="px-3 py-2">
                <Button
                  asChild
                  className="w-full bg-nuvirra-primary hover:bg-nuvirra-primary-dark text-white py-2 rounded-lg transition-colors duration-200"
                >
                  <a href="#contact" onClick={toggleMenu}>Get Started</a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
