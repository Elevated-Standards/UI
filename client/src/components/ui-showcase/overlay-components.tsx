import React, { useState, useRef } from "react";
import { SectionContainer } from "./section-container";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogTrigger } from "@/components/ui/dialog";
import { X, CheckCircle } from "lucide-react";
import { useFloating, arrow, offset, flip, shift, useHover, useFocus, useDismiss, useRole, useInteractions, FloatingArrow } from "@floating-ui/react";
import { toast, Toaster } from "sonner";

// Floating UI tooltip component
function FloatingTooltip() {
  const [isOpen, setIsOpen] = useState(false);
  const arrowRef = useRef(null);

  const {x, y, strategy, refs, context} = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [
      offset(10),
      flip(),
      shift(),
      arrow({ element: arrowRef })
    ],
  });

  const hover = useHover(context, { move: false });
  const focus = useFocus(context);
  const dismiss = useDismiss(context);
  const role = useRole(context, { role: "tooltip" });

  // Merge all the interactions into prop getters
  const {getReferenceProps, getFloatingProps} = useInteractions([
    hover,
    focus,
    dismiss,
    role
  ]);

  return (
    <div>
      <Button 
        variant="outline" 
        ref={refs.setReference} 
        {...getReferenceProps()}
      >
        Hover over me (Floating UI)
      </Button>
      {isOpen && (
        <div
          ref={refs.setFloating}
          style={{
            position: strategy,
            top: y ?? 0,
            left: x ?? 0,
            width: 'max-content',
          }}
          className="bg-black text-white text-sm px-3 py-2 rounded-md z-50"
          {...getFloatingProps()}
        >
          This is a Floating UI tooltip
          <FloatingArrow ref={arrowRef} context={context} fill="black" />
        </div>
      )}
    </div>
  );
}

export function OverlayComponents() {

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
        
        {/* Tooltip using Floating UI as per requirements */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Tooltip (Floating UI)</h3>
          <div className="flex justify-center">
            <FloatingTooltip />
          </div>
        </div>
        
        {/* Toast - using Sonner as per requirements */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Toast Notification (Sonner)</h3>
          <div className="flex justify-center space-x-4">
            <Button 
              variant="outline" 
              onClick={() => {
                toast.success('Changes saved successfully', {
                  description: 'Your changes have been saved to the database.',
                  action: {
                    label: 'Undo',
                    onClick: () => console.log('Undo changes')
                  },
                });
              }}
            >
              Success Toast
            </Button>
            <Button 
              variant="outline" 
              onClick={() => {
                toast.error('Error occurred', {
                  description: 'There was a problem saving your changes.',
                });
              }}
            >
              Error Toast
            </Button>
            <Button 
              variant="outline" 
              onClick={() => {
                toast('Notification', {
                  description: 'This is a neutral notification message.',
                });
              }}
            >
              Info Toast
            </Button>
          </div>
          <div className="mt-4">
            {/* Sonner component for rendering toasts */}
            <Toaster position="bottom-right" />
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
