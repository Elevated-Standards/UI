import React, { useState, useRef } from "react";
import { SectionContainer } from "./section-container";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogTrigger } from "@/components/ui/dialog";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger, ContextMenuSeparator, ContextMenuSub, ContextMenuSubContent, ContextMenuSubTrigger } from "@/components/ui/context-menu";
import { X, CheckCircle, AlertTriangle, Settings, FilePen, Copy, PlusCircle, Trash } from "lucide-react";
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
        {/* Modal / Dialog from Radix UI */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Modal / Dialog (Radix UI Dialog)</h3>
          <div className="p-4 border border-gray-200 rounded-md">
            <div className="flex justify-center">
              <Dialog>
                <DialogTrigger asChild>
                  <Button>Open Dialog</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Edit Profile</DialogTitle>
                    <DialogDescription>
                      Make changes to your profile information. Click save when you're done.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="py-4">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Name</label>
                        <input id="name" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="username" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Username</label>
                        <input id="username" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background" />
                      </div>
                    </div>
                  </div>
                  <DialogFooter className="sm:justify-end">
                    <Button type="button" variant="secondary">Cancel</Button>
                    <Button type="button">Save Changes</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
        
        {/* Popover from Floating UI */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Popover (Floating UI)</h3>
          <div className="p-4 border border-gray-200 rounded-md flex justify-center">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">Open Popover</Button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium leading-none">Dimensions</h4>
                    <p className="text-sm text-muted-foreground">
                      Set the dimensions for the layer.
                    </p>
                  </div>
                  <div className="grid gap-2">
                    <div className="grid grid-cols-3 items-center gap-4">
                      <label htmlFor="width" className="text-sm">Width</label>
                      <input id="width" defaultValue="100%" className="col-span-2 h-8 rounded-md border border-input bg-transparent px-3 py-1 text-sm" />
                    </div>
                    <div className="grid grid-cols-3 items-center gap-4">
                      <label htmlFor="height" className="text-sm">Height</label>
                      <input id="height" defaultValue="25px" className="col-span-2 h-8 rounded-md border border-input bg-transparent px-3 py-1 text-sm" />
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
        
        {/* Alert Dialog from Radix UI */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Alert Dialog (Radix UI AlertDialog)</h3>
          <div className="p-4 border border-gray-200 rounded-md flex justify-center">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive">Delete Account</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete your account
                    and remove your data from our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
        
        {/* Context Menu from Radix UI */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Context Menu (Radix UI ContextMenu)</h3>
          <div className="p-4 border border-gray-200 rounded-md flex justify-center">
            <ContextMenu>
              <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
                Right click here to open the context menu
              </ContextMenuTrigger>
              <ContextMenuContent className="w-64">
                <ContextMenuItem className="flex items-center gap-2">
                  <FilePen className="h-4 w-4" /> Edit
                </ContextMenuItem>
                <ContextMenuItem className="flex items-center gap-2">
                  <Copy className="h-4 w-4" /> Duplicate
                </ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuSub>
                  <ContextMenuSubTrigger className="flex items-center gap-2">
                    <Settings className="h-4 w-4" /> Settings
                  </ContextMenuSubTrigger>
                  <ContextMenuSubContent className="w-48">
                    <ContextMenuItem>Profile</ContextMenuItem>
                    <ContextMenuItem>Billing</ContextMenuItem>
                    <ContextMenuItem>Team</ContextMenuItem>
                    <ContextMenuItem>Subscription</ContextMenuItem>
                  </ContextMenuSubContent>
                </ContextMenuSub>
                <ContextMenuSeparator />
                <ContextMenuItem className="flex items-center gap-2">
                  <PlusCircle className="h-4 w-4" /> Add New
                </ContextMenuItem>
                <ContextMenuItem className="flex items-center gap-2 text-red-500">
                  <Trash className="h-4 w-4" /> Delete
                </ContextMenuItem>
              </ContextMenuContent>
            </ContextMenu>
          </div>
        </div>
        
        {/* Tooltip using Floating UI */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Tooltip (Floating UI)</h3>
          <div className="flex justify-center">
            <FloatingTooltip />
          </div>
        </div>
        
        {/* Toast - using Sonner */}
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
