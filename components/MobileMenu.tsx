"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "./ui/button"

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
        <Menu className="h-6 w-6" />
        <span className="sr-only">Toggle menu</span>
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-white">
          <div className="flex h-16 items-center justify-between px-4">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <span className="text-xl font-bold">book</span>
                <span className="rounded bg-purple-600 px-1 text-xl font-bold text-white">eve</span>
              </Link>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
              <X className="h-6 w-6" />
              <span className="sr-only">Close menu</span>
            </Button>
          </div>

          <nav className="mt-8 px-4">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-lg font-medium text-gray-800 hover:text-purple-600"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/features"
                className="text-lg font-medium text-gray-800 hover:text-purple-600"
                onClick={() => setIsOpen(false)}
              >
                Features
              </Link>
              <Link
                href="/testimonials"
                className="text-lg font-medium text-gray-800 hover:text-purple-600"
                onClick={() => setIsOpen(false)}
              >
                Testimonials
              </Link>
              <Link
                href="/faqs"
                className="text-lg font-medium text-gray-800 hover:text-purple-600"
                onClick={() => setIsOpen(false)}
              >
                FAQs
              </Link>

              <Button className="mt-4 w-full rounded-full bg-purple-600 hover:bg-purple-700">
                Create Bookeve Profile
              </Button>
            </div>
          </nav>
        </div>
      )}
    </div>
  )
}
