import React, { useState } from "react";
import { SectionContainer } from "./section-container";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogTrigger } from "@/components/ui/dialog";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { X, CheckCircle } from "lucide-react";

export function OverlayComponents() {
  const [showToast, setShowToast] = useState(false);

  return (
    <SectionContainer 
      id="overlay" 
      title="Overlay & Popup" 
      description="Modal dialogs, tooltips, and notification components"
    >
      <div className="space-y-8">
        {/* Modal / Dialog */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Modal / Dialog</h3>
          <div className="p-4 border border-gray-200 rounded-md">
            <div className="flex justify-center">
              <Dialog>
                <DialogTrigger asChild>
                  <Button>Open Dialog</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Dialog Title</DialogTitle>
                    <DialogDescription>
                      This is an example dialog. In a real implementation, this would appear as an overlay when the button is clicked.
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter className="sm:justify-end">
                    <Button type="button" variant="secondary">Cancel</Button>
                    <Button type="button">Confirm</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
        
        {/* Tooltip */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Tooltip</h3>
          <div className="flex justify-center">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline">Hover over me</Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>This is a tooltip</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
        
        {/* Toast */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Toast Notification</h3>
          <div className="flex justify-end space-x-4">
            <div className="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto border border-gray-200">
              <div className="p-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-green-400" />
                  </div>
                  <div className="ml-3 w-0 flex-1 pt-0.5">
                    <p className="text-sm font-medium text-gray-900">Success!</p>
                    <p className="mt-1 text-sm text-gray-500">Your changes have been saved successfully.</p>
                  </div>
                  <div className="ml-4 flex-shrink-0 flex">
                    <Button variant="ghost" size="icon" className="h-5 w-5 p-0">
                      <span className="sr-only">Close</span>
                      <X className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <Button 
              variant="outline" 
              onClick={() => {
                setShowToast(true);
                setTimeout(() => setShowToast(false), 3000);
              }}
            >
              Show Toast Notification
            </Button>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
