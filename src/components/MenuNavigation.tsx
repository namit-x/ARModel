"use client"

import { useState, useEffect } from "react"
import { Button } from "../components/ui/button"
import { ChefHat, Utensils, Cookie, Wine } from "lucide-react"

const navItems = [
  { id: "starters", label: "Starters", icon: ChefHat },
  { id: "mains", label: "Mains", icon: Utensils },
  { id: "desserts", label: "Desserts", icon: Cookie },
  { id: "cocktails", label: "Cocktails", icon: Wine },
]

export function MenuNavigation() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight

      // Show navigation after scrolling past hero section
      setIsVisible(scrollY > windowHeight * 0.5)

      // Update active section based on scroll position
      const sections = navItems.map((item) => item.id)
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav
      className={`fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
      }`}
    >
      <div className="bg-card/95 backdrop-blur-lg border border-border rounded-2xl shadow-2xl p-2">
        <div className="flex gap-2">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = activeSection === item.id

            return (
              <Button
                key={item.id}
                variant={isActive ? "default" : "ghost"}
                size="sm"
                onClick={() => scrollToSection(item.id)}
                className={`flex flex-col items-center gap-1 h-auto py-3 px-4 min-w-[80px] transition-all duration-300 ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-lg scale-105"
                    : "hover:bg-accent hover:text-accent-foreground"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-xs font-medium">{item.label}</span>
              </Button>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
