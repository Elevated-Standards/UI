import React from "react";
import { SectionContainer } from "./section-container";
import { Archive, Plus, MoreVertical, Home } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export function UtilityComponents() {
  return (
    <SectionContainer 
      id="utilities" 
      title="Utilities & Helpers" 
      description="Useful utility components"
    >
      <div className="space-y-6">
        {/* Icons */}
        <div className="space-y-3">
          <h3 className="text-md font-semibold text-gray-900">Icons</h3>
          <div className="grid grid-cols-4 gap-4">
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
          </div>
        </div>
        
        {/* Skeleton Loader */}
        <div className="space-y-3">
          <h3 className="text-md font-semibold text-gray-900">Skeleton Loader</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-4">
              <div className="rounded-full bg-gray-200 h-12 w-12"></div>
              <div className="space-y-2 flex-1">
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-2/3"></div>
            </div>
          </div>
        </div>
        
        {/* Dark Mode Toggle */}
        <div className="space-y-3">
          <h3 className="text-md font-semibold text-gray-900">Theme Toggle</h3>
          <div className="flex items-center justify-between">
            <Label htmlFor="dark-mode" className="text-sm text-gray-700">Dark Mode</Label>
            <Switch id="dark-mode" />
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
