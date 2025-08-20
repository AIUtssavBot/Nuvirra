"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function Hero() {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-purple-50 to-teal-100 py-20 lg:py-32 snap-center scroll-mt-16 min-h-[calc(100vh-4rem)] flex items-center justify-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8 flex justify-center">
            <Image
              src="/nuvirra-logo.png"
              alt="Nuvirra logo"
              width={400}
              height={220}
              className="h-30 md:h-36 w-auto"
              priority
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Transform Your Business with
            {" "}
            <span className="text-nuvirra-primary">
              <Typewriter phrases={["AI Automation", "Intelligent Workflows", "Smart Integrations"]} />
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Streamline operations, boost productivity, and unlock new possibilities with cutting-edge AI solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="bg-nuvirra-primary hover:bg-nuvirra-primary-dark text-white px-8 py-3 text-lg rounded-lg transition-colors duration-200 flex items-center gap-2"
            >
              <a href="#contact">
                Start Your Journey
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="outline"
              className="border-nuvirra-accent text-nuvirra-accent hover:bg-nuvirra-accent hover:text-white px-8 py-3 text-lg rounded-lg transition-colors duration-200 bg-transparent"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

type TypewriterProps = {
  phrases: string[]
}

function Typewriter({ phrases }: TypewriterProps) {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [visibleText, setVisibleText] = useState("")

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex] || ""
    const hasFinishedTyping = visibleText === currentPhrase
    const hasFinishedDeleting = visibleText === ""

    let nextDelayMs = isDeleting ? 45 : 90

    if (!isDeleting && hasFinishedTyping) {
      nextDelayMs = 1200
      const timeoutId = setTimeout(() => setIsDeleting(true), nextDelayMs)
      return () => clearTimeout(timeoutId)
    }

    if (isDeleting && hasFinishedDeleting) {
      setIsDeleting(false)
      setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length)
      nextDelayMs = 300
    } else {
      const nextLength = visibleText.length + (isDeleting ? -1 : 1)
      const nextText = currentPhrase.slice(0, nextLength)
      const timeoutId = setTimeout(() => setVisibleText(nextText), nextDelayMs)
      return () => clearTimeout(timeoutId)
    }
  }, [visibleText, isDeleting, currentPhraseIndex, phrases])

  // Kick off typing on mount
  useEffect(() => {
    if (visibleText === "") {
      const startId = setTimeout(() => setVisibleText(phrases[0]?.slice(0, 1) || ""), 300)
      return () => clearTimeout(startId)
    }
  }, [phrases, visibleText])

  return (
    <span>
      {visibleText}
      <span className="ml-1 inline-block align-baseline border-r-4 border-nuvirra-primary animate-pulse" aria-hidden>
        
      </span>
    </span>
  )
}
