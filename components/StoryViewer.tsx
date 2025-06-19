"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Story {
  id: number
  image: string
  duration: number
  title: string
}

interface StoryViewerProps {
  stories: Story[]
  onClose: () => void
  title: string
}

export default function StoryViewer({ stories, onClose, title }: StoryViewerProps) {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const startTimeRef = useRef<number>(0)
  const pausedTimeRef = useRef<number>(0)

  const currentStory = stories[currentStoryIndex]

  const startTimer = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)

    startTimeRef.current = Date.now() - pausedTimeRef.current

    intervalRef.current = setInterval(() => {
      const elapsed = Date.now() - startTimeRef.current
      const progressPercent = (elapsed / currentStory.duration) * 100

      setProgress(progressPercent)

      if (progressPercent >= 100) {
        nextStory()
      }
    }, 50)
  }

  const pauseTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      pausedTimeRef.current = Date.now() - startTimeRef.current
    }
  }

  const resetTimer = () => {
    setProgress(0)
    pausedTimeRef.current = 0
    startTimeRef.current = 0
  }

  const nextStory = () => {
    if (currentStoryIndex < stories.length - 1) {
      setCurrentStoryIndex((prev) => prev + 1)
      resetTimer()
    } else {
      onClose()
    }
  }

  const prevStory = () => {
    if (currentStoryIndex > 0) {
      setCurrentStoryIndex((prev) => prev - 1)
      resetTimer()
    }
  }

  const goToStory = (index: number) => {
    setCurrentStoryIndex(index)
    resetTimer()
  }

  useEffect(() => {
    if (!isPaused) {
      startTimer()
    } else {
      pauseTimer()
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [currentStoryIndex, isPaused, currentStory.duration])

  const handleMouseDown = () => setIsPaused(true)
  const handleMouseUp = () => setIsPaused(false)
  const handleTouchStart = () => setIsPaused(true)
  const handleTouchEnd = () => setIsPaused(false)

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <div className="relative w-full h-full max-w-sm mx-auto">
        {/* Progress Bars */}
        <div className="absolute top-4 left-4 right-4 z-10 flex gap-1">
          {stories.map((_, index) => (
            <div
              key={index}
              className="flex-1 h-1 bg-white/30 rounded-full overflow-hidden cursor-pointer"
              onClick={() => goToStory(index)}
            >
              <div
                className="h-full bg-white rounded-full transition-all duration-100 ease-linear"
                style={{
                  width: index < currentStoryIndex ? "100%" : index === currentStoryIndex ? `${progress}%` : "0%",
                }}
              />
            </div>
          ))}
        </div>

        {/* Header */}
        <div className="absolute top-12 left-4 right-4 z-10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 p-0.5">
              <div className="w-full h-full rounded-full bg-white"></div>
            </div>
            <span className="text-white font-medium">{title}</span>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose} className="text-white hover:bg-white/20">
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Story Content */}
        <div
          className="relative w-full h-full"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <Image
            src={currentStory.image || "/placeholder.svg"}
            alt={currentStory.title}
            fill
            className="object-cover"
            priority
          />

          {/* Navigation Areas */}
          <div className="absolute inset-0 flex">
            {/* Left tap area */}
            <div className="flex-1 cursor-pointer" onClick={prevStory} />
            {/* Right tap area */}
            <div className="flex-1 cursor-pointer" onClick={nextStory} />
          </div>

          {/* Navigation Buttons (visible on hover) */}
          <div className="absolute inset-y-0 left-4 flex items-center opacity-0 hover:opacity-100 transition-opacity">
            <Button
              variant="ghost"
              size="icon"
              onClick={prevStory}
              disabled={currentStoryIndex === 0}
              className="text-white hover:bg-white/20 disabled:opacity-50"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
          </div>

          <div className="absolute inset-y-0 right-4 flex items-center opacity-0 hover:opacity-100 transition-opacity">
            <Button variant="ghost" size="icon" onClick={nextStory} className="text-white hover:bg-white/20">
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
        </div>

        {/* Story Title Overlay */}
        <div className="absolute bottom-8 left-4 right-4 z-10">
          <h3 className="text-white text-lg font-semibold drop-shadow-lg">{currentStory.title}</h3>
        </div>
      </div>
    </div>
  )
}
