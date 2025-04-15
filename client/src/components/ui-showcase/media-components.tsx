import React, { useState } from "react";
import { SectionContainer } from "./section-container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import ReactPlayer from "react-player";

export function MediaComponents() {
  // Sample gallery photos - using placeholder images
  const photos = [
    {
      src: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      width: 4,
      height: 3,
      title: "Breakfast",
    },
    {
      src: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
      width: 4,
      height: 3,
      title: "Burger",
    },
    {
      src: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
      width: 4,
      height: 3,
      title: "Camera",
    },
    {
      src: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
      width: 4,
      height: 3,
      title: "Coffee",
    },
    {
      src: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
      width: 3,
      height: 4,
      title: "Hats",
    },
    {
      src: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
      width: 4,
      height: 3,
      title: "Honey",
    },
  ];

  // Sample video URLs
  const videoSources = {
    mp4: "https://www.w3schools.com/html/mov_bbb.mp4",
    youtube: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
    vimeo: "https://vimeo.com/243556536",
  };

  // Sample audio URL
  const audioSources = {
    mp3: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  };

  return (
    <SectionContainer
      id="media"
      title="Media Components"
      description="Components for displaying and interacting with media content"
    >
      <div className="space-y-8">
        {/* Image Gallery */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Image Gallery</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {photos.map((photo, index) => (
              <Card key={index} className="overflow-hidden">
                <AspectRatio ratio={photo.width / photo.height}>
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="object-cover w-full h-full"
                  />
                </AspectRatio>
                <CardContent className="p-2">
                  <p className="text-sm font-medium">{photo.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Video Player */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Video Player</h3>
          <Card>
            <CardHeader>
              <CardTitle className="text-md">ReactPlayer</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="mp4">
                <TabsList>
                  <TabsTrigger value="mp4">MP4</TabsTrigger>
                  <TabsTrigger value="youtube">YouTube</TabsTrigger>
                  <TabsTrigger value="vimeo">Vimeo</TabsTrigger>
                </TabsList>
                <TabsContent value="mp4" className="w-full mt-4">
                  <div className="w-full aspect-video">
                    <ReactPlayer
                      url={videoSources.mp4}
                      controls
                      width="100%"
                      height="100%"
                    />
                  </div>
                </TabsContent>
                <TabsContent value="youtube" className="w-full mt-4">
                  <div className="w-full aspect-video">
                    <ReactPlayer
                      url={videoSources.youtube}
                      controls
                      width="100%"
                      height="100%"
                    />
                  </div>
                </TabsContent>
                <TabsContent value="vimeo" className="w-full mt-4">
                  <div className="w-full aspect-video">
                    <ReactPlayer
                      url={videoSources.vimeo}
                      controls
                      width="100%"
                      height="100%"
                    />
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        {/* Audio Player */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Audio Player</h3>
          <Card>
            <CardHeader>
              <CardTitle className="text-md">HTML5 Audio Player</CardTitle>
            </CardHeader>
            <CardContent>
              <audio
                className="w-full"
                controls
                src={audioSources.mp3}
              >
                Your browser does not support the audio element.
              </audio>
            </CardContent>
          </Card>
        </div>
      </div>
    </SectionContainer>
  );
}