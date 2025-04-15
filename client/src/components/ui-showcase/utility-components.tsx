import React, { useState } from "react";
import { SectionContainer } from "./section-container";
import { Archive, Plus, MoreVertical, Home, Sun, Moon, MessageSquare, Heart, Share2, Bookmark, ChevronRight } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";

export function UtilityComponents() {
  const { theme, setTheme } = useTheme();
  const [isAnimating, setIsAnimating] = useState(false);
  const [showSkeleton, setShowSkeleton] = useState(true);

  return (
    <SectionContainer 
      id="utilities" 
      title="Utilities & Helpers" 
      description="Useful utility components"
    >
      <div className="space-y-8">
        {/* Icons - Lucide */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Icons (Lucide)</h3>
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600">
                <Home className="h-6 w-6" />
              </div>
              <span className="text-xs mt-1 text-gray-500">Home</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600">
                <Archive className="h-6 w-6" />
              </div>
              <span className="text-xs mt-1 text-gray-500">Archive</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600">
                <Plus className="h-6 w-6" />
              </div>
              <span className="text-xs mt-1 text-gray-500">Add</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600">
                <MoreVertical className="h-6 w-6" />
              </div>
              <span className="text-xs mt-1 text-gray-500">More</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600">
                <Heart className="h-6 w-6" />
              </div>
              <span className="text-xs mt-1 text-gray-500">Like</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600">
                <Share2 className="h-6 w-6" />
              </div>
              <span className="text-xs mt-1 text-gray-500">Share</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600">
                <Bookmark className="h-6 w-6" />
              </div>
              <span className="text-xs mt-1 text-gray-500">Save</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600">
                <MessageSquare className="h-6 w-6" />
              </div>
              <span className="text-xs mt-1 text-gray-500">Comment</span>
            </div>
          </div>
        </div>
        
        {/* Animations - Framer Motion */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Animations (Framer Motion)</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Simple Animation */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Simple Animation</CardTitle>
                <CardDescription>Click to animate</CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center py-4">
                <motion.div
                  className="w-20 h-20 bg-primary rounded-lg"
                  animate={{ rotate: isAnimating ? 360 : 0 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsAnimating(!isAnimating)}
                />
              </CardContent>
            </Card>
            
            {/* List Animation */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">List Animation</CardTitle>
                <CardDescription>Staggered animations</CardDescription>
              </CardHeader>
              <CardContent>
                <motion.ul className="space-y-2">
                  {[1, 2, 3].map((item) => (
                    <motion.li
                      key={item}
                      className="bg-gray-100 p-2 rounded-md"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: item * 0.2 }}
                      whileHover={{ x: 5 }}
                    >
                      <div className="flex items-center">
                        <ChevronRight className="h-4 w-4 mr-2 text-primary" />
                        <span>Item {item}</span>
                      </div>
                    </motion.li>
                  ))}
                </motion.ul>
              </CardContent>
            </Card>
            
            {/* Animation with Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Hover Effects</CardTitle>
                <CardDescription>Hover over the card</CardDescription>
              </CardHeader>
              <CardContent>
                <motion.div
                  className="p-3 bg-gray-50 rounded-md"
                  whileHover={{ 
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
                    y: -5 
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center space-x-3">
                    <Avatar>
                      <AvatarImage src="https://api.dicebear.com/7.x/adventurer/svg?seed=Felix" alt="Felix" />
                      <AvatarFallback>FX</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">Animated Card</p>
                      <p className="text-xs text-gray-500">Hover to see effect</p>
                    </div>
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Skeleton Loader - Chakra UI inspired */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Skeleton Loader (Chakra UI inspired)</h3>
          <div className="flex items-center mb-4">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => setShowSkeleton(!showSkeleton)}
              className="mr-2"
            >
              {showSkeleton ? "Show Content" : "Show Skeleton"}
            </Button>
            <span className="text-sm text-gray-500">
              Click to toggle between skeleton and content
            </span>
          </div>
          
          <div className="space-y-6">
            <AnimatePresence mode="wait">
              {showSkeleton ? (
                <motion.div
                  key="skeleton"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-4"
                >
                  {/* Card skeleton */}
                  <div className="border rounded-lg overflow-hidden">
                    <Skeleton className="h-40 w-full" />
                    <div className="p-4 space-y-3">
                      <Skeleton className="h-6 w-2/3" />
                      <div className="space-y-2">
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-2/3" />
                      </div>
                    </div>
                  </div>
                  
                  {/* List item skeletons */}
                  <div className="space-y-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-center space-x-4">
                        <Skeleton className="rounded-full h-12 w-12" />
                        <div className="space-y-2 flex-1">
                          <Skeleton className="h-4 w-3/4" />
                          <Skeleton className="h-4 w-1/2" />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="content"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-4"
                >
                  {/* Card content */}
                  <Card>
                    <div className="h-40 bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-white">
                      <h3 className="text-xl font-bold">Featured Article</h3>
                    </div>
                    <CardHeader>
                      <CardTitle>Getting Started with UI Components</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">
                        Learn how to leverage modern UI components to build beautiful interfaces.
                        This guide covers everything from basic setup to advanced patterns.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline">Read More</Button>
                    </CardFooter>
                  </Card>
                  
                  {/* List content */}
                  <div className="space-y-3">
                    {["John Doe", "Jane Smith", "Robert Johnson"].map((name, i) => (
                      <div key={i} className="flex items-center p-3 border rounded-md">
                        <Avatar className="h-12 w-12 mr-4">
                          <AvatarImage src={`https://api.dicebear.com/7.x/adventurer/svg?seed=${name}`} alt={name} />
                          <AvatarFallback>{name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{name}</p>
                          <p className="text-sm text-gray-500">Team Member</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
        
        {/* Theme Toggle - NextThemes */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Theme Toggle (NextThemes)</h3>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  {theme === 'dark' ? (
                    <Moon className="h-5 w-5 text-primary" />
                  ) : (
                    <Sun className="h-5 w-5 text-primary" />
                  )}
                  <div>
                    <p className="font-medium">Theme Preference</p>
                    <p className="text-sm text-gray-500">
                      Current theme: {theme === 'dark' ? 'Dark' : 'Light'}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className={theme === 'light' ? 'bg-primary text-white' : ''}
                    onClick={() => setTheme('light')}
                  >
                    <Sun className="h-4 w-4 mr-2" />
                    Light
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className={theme === 'dark' ? 'bg-primary text-white' : ''}
                    onClick={() => setTheme('dark')}
                  >
                    <Moon className="h-4 w-4 mr-2" />
                    Dark
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </SectionContainer>
  );
}
