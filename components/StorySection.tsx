"use client"

import Image from "next/image"
import { ScrollArea } from "@/components/ui/scroll-area"

interface Story {
  id: number
  image: string
  duration: number
  title: string
}

interface StoryGroup {
  id: string
  title: string
  thumbnail: string
  stories: Story[]
}

interface StoriesSectionProps {
  stories: StoryGroup[]
  onStoryClick: (storyId: string) => void
}

export default function StoriesSection({ stories, onStoryClick }: StoriesSectionProps) {
  return (
    <div className="p-4 border-b border-gray-100">
      <ScrollArea className="w-full">
        <div className="flex gap-4 pb-2">
          {stories.map((storyGroup) => (
            <div
              key={storyGroup.id}
              className="flex-shrink-0 cursor-pointer"
              onClick={() => onStoryClick(storyGroup.id)}
            >
              <div className="relative">
                {/* Story Ring */}
                <div className="w-20 h-28 rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 p-0.5">
                  <div className="w-full h-full rounded-2xl bg-white p-1">
                    <div className="w-full h-full rounded-xl overflow-hidden">
                      <Image
                        src={storyGroup.thumbnail || "/placeholder.svg"}
                        alt={storyGroup.title}
                        width={80}
                        height={120}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* Story Title */}
              <p className="text-xs text-center mt-2 text-gray-700 font-medium">{storyGroup.title}</p>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}
