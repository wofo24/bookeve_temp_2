import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import Image from 'next/image';

interface Story {
  id: number;
  image: string;
  title: string;
  duration: number; // in seconds
  isViewed?: boolean;
}

interface StoriesProps {
  stories: Story[];
}

// Story Viewer Component - Full Screen
const StoryViewer: React.FC<{
  stories: Story[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
}> = ({ stories, currentIndex, onClose, onNext, onPrevious }) => {
  const [progress, setProgress] = useState(0);
  const currentStory = stories[currentIndex];

  useEffect(() => {
    const duration = currentStory.duration * 1000; // Convert to milliseconds
    const interval = 50; // Update every 50ms for smooth progress
    const increment = (100 / duration) * interval;

    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          if (currentIndex < stories.length - 1) {
            onNext();
          } else {
            onClose();
          }
          return 0;
        }
        return prev + increment;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [currentIndex, currentStory.duration, onNext, onClose]);

  useEffect(() => {
    setProgress(0);
  }, [currentIndex]);

  const handleClick = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const centerX = rect.width / 2;

    if (clickX < centerX) {
      // Clicked left side - previous story
      if (currentIndex > 0) {
        onPrevious();
      }
    } else {
      // Clicked right side - next story
      if (currentIndex < stories.length - 1) {
        onNext();
      } else {
        onClose();
      }
    }
  };

  return (
    <div className="fixed inset-0 bg-black z-50 flex flex-col max-w-sm mx-auto">
      {/* Progress bars */}
      <div className="flex gap-1 p-4 pb-2">
        {stories.map((_, index) => (
          <div key={index} className="flex-1 h-1 bg-white/30 rounded-full overflow-hidden">
            <div
              className="h-full bg-white transition-all duration-100 ease-linear"
              style={{
                width: index < currentIndex ? '100%' : index === currentIndex ? `${progress}%` : '0%'
              }}
            />
          </div>
        ))}
      </div>

      {/* Header */}
      <div className="flex items-center justify-between p-4 pb-2">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#7B3CE5] to-[#6D17FF] p-0.5">
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
              <span className="text-xs font-bold text-[#7B3CE5]">AG</span>
            </div>
          </div>
          <div>
            <p className="text-white font-medium text-sm">Akanksha</p>
            <p className="text-white/70 text-xs">2h ago</p>
          </div>
        </div>
        <button onClick={onClose} className="text-white p-1">
          <X size={24} />
        </button>
      </div>

      {/* Story Content */}
      <div className="flex-1 relative" onClick={handleClick}>
        <Image
          src={currentStory.image}
          alt={currentStory.title}
          fill
          className="object-cover"
        />
        
        {/* Story Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
          <p className="text-white font-medium">{currentStory.title}</p>
        </div>

        {/* Click areas (invisible) */}
        <div className="absolute inset-0 flex">
          <div className="w-1/2 h-full" />
          <div className="w-1/2 h-full" />
        </div>
      </div>

      {/* Story indicators */}
      <div className="p-4 pt-2">
        <div className="flex justify-center gap-2">
          {stories.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === currentIndex ? 'bg-white' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Main Stories Component - Rectangular Design
const Stories: React.FC<StoriesProps> = ({ stories }) => {
  const [showViewer, setShowViewer] = useState(false);
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [viewedStories, setViewedStories] = useState<number[]>([]);

  const handleStoryClick = (index: number) => {
    setCurrentStoryIndex(index);
    setShowViewer(true);
    
    // Mark story as viewed
    if (!viewedStories.includes(index)) {
      setViewedStories(prev => [...prev, index]);
    }
  };

  const handleNext = () => {
    if (currentStoryIndex < stories.length - 1) {
      setCurrentStoryIndex(prev => prev + 1);
      if (!viewedStories.includes(currentStoryIndex + 1)) {
        setViewedStories(prev => [...prev, currentStoryIndex + 1]);
      }
    }
  };

  const handlePrevious = () => {
    if (currentStoryIndex > 0) {
      setCurrentStoryIndex(prev => prev - 1);
    }
  };

  const handleClose = () => {
    setShowViewer(false);
  };

  return (
    <>
      {/* Stories Section - Rectangular Design */}
      <div className="px-6 bg-white py-4">
        <div className="flex gap-3 overflow-x-auto scrollbar-hide">
          {stories.map((story, index) => (
            <div
              key={story.id}
              className="flex-shrink-0 cursor-pointer"
              onClick={() => handleStoryClick(index)}
            >
              {/* Rectangular Story Container */}
              <div 
                className={`relative w-[80px] h-[120px] rounded-[12px] overflow-hidden ${
                  viewedStories.includes(index) 
                    ? 'border-[2px] border-[rgba(222,222,231,1)]' 
                    : 'border-[2px] border-[#7B3CE5]'
                }`}
              >
                {/* Story Image */}
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  className="object-cover"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                
                {/* Story Title */}
                <div className="absolute bottom-2 left-2 right-2">
                  <span className="text-white text-[10px] font-[500] leading-[12px] drop-shadow-md">
                    {story.title}
                  </span>
                </div>

                {/* Viewed indicator */}
                {viewedStories.includes(index) && (
                  <div className="absolute top-2 right-2 w-3 h-3 bg-gray-400 rounded-full flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-white rounded-full" />
                  </div>
                )}

                {/* Unviewed indicator */}
                {!viewedStories.includes(index) && (
                  <div className="absolute top-2 right-2 w-3 h-3 bg-[#7B3CE5] rounded-full flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-white rounded-full" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Story Viewer */}
      {showViewer && (
        <StoryViewer
          stories={stories}
          currentIndex={currentStoryIndex}
          onClose={handleClose}
          onNext={handleNext}
          onPrevious={handlePrevious}
        />
      )}

      <style jsx global>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  );
};

export default Stories;