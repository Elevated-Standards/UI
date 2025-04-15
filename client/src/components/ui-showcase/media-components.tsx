import React from "react";
import { SectionContainer } from "./section-container";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Play, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import ReactPlayer from "react-player/lazy";

export function MediaComponents() {
  return (
    <SectionContainer 
      id="media" 
      title="Media Components" 
      description="Components for multimedia content"
    >
      <div className="space-y-6">
        {/* Image Gallery */}
        <div className="space-y-3">
          <h3 className="text-md font-semibold text-gray-900">Image Gallery</h3>
          <div className="grid grid-cols-2 gap-2">
            <div className="overflow-hidden rounded-md">
              <AspectRatio ratio={1/1}>
                <img 
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" 
                  alt="Mountain landscape" 
                  className="w-full h-full object-cover"
                />
              </AspectRatio>
            </div>
            <div className="overflow-hidden rounded-md">
              <AspectRatio ratio={1/1}>
                <img 
                  src="https://images.unsplash.com/photo-1511884642898-4c92249e20b6" 
                  alt="Ocean view" 
                  className="w-full h-full object-cover"
                />
              </AspectRatio>
            </div>
            <div className="overflow-hidden rounded-md">
              <AspectRatio ratio={1/1}>
                <img 
                  src="https://images.unsplash.com/photo-1500382017468-9049fed747ef" 
                  alt="Forest landscape" 
                  className="w-full h-full object-cover"
                />
              </AspectRatio>
            </div>
            <div className="overflow-hidden rounded-md">
              <AspectRatio ratio={1/1}>
                <img 
                  src="https://images.unsplash.com/photo-1527856263669-12c3a0af2aa6" 
                  alt="Desert landscape" 
                  className="w-full h-full object-cover"
                />
              </AspectRatio>
            </div>
          </div>
        </div>
        
        {/* Video Player - using ReactPlayer as per requirements */}
        <div className="space-y-3">
          <h3 className="text-md font-semibold text-gray-900">Video Player (ReactPlayer)</h3>
          <div className="rounded-md overflow-hidden border border-gray-200">
            <AspectRatio ratio={16/9} className="bg-black">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                width="100%"
                height="100%"
                controls={true}
                light="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7"
                playIcon={
                  <Button variant="outline" size="icon" className="h-16 w-16 rounded-full bg-white bg-opacity-75 text-primary hover:bg-opacity-100 transition-colors border-0">
                    <Play className="h-8 w-8 ml-1" />
                  </Button>
                }
              />
            </AspectRatio>
          </div>
          <div className="mt-4">
            <h4 className="text-sm font-medium text-gray-900 mb-1">Features:</h4>
            <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
              <li>Supports YouTube, Facebook, Twitch, SoundCloud, Streamable, Vimeo, Wistia, and file URLs</li>
              <li>Responsive design with customizable controls</li>
              <li>Lazy loading for better performance</li>
              <li>Custom thumbnail support with light prop</li>
            </ul>
          </div>
        </div>
        
        {/* Audio Player */}
        <div className="space-y-3">
          <h3 className="text-md font-semibold text-gray-900">Audio Player</h3>
          <div className="bg-gray-100 rounded-md p-4">
            <div className="flex items-center space-x-4">
              <Button size="icon" className="rounded-full bg-primary h-10 w-10 flex items-center justify-center text-white">
                <Play className="h-5 w-5 ml-0.5" />
              </Button>
              <div className="flex-1">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-medium text-gray-900">Audio Title</span>
                  <span className="text-xs text-gray-500">1:23 / 3:45</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div className="bg-primary h-1.5 rounded-full" style={{ width: "35%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
