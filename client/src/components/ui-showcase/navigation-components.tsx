import React, { useState } from "react";
import { SectionContainer } from "./section-container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ReactPaginate from 'react-paginate';
import { Button } from "@/components/ui/button";
import { PanelRightOpen, Menu, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";

// Simple breadcrumbs component (Chakra UI inspired)
function Breadcrumbs() {
  const items = [
    { label: "Home", href: "#" },
    { label: "Components", href: "#" },
    { label: "Navigation", href: "#" },
  ];

  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex space-x-2 text-sm">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && <span className="mx-2 text-gray-400">/</span>}
            <a 
              href={item.href} 
              className={`
                ${index === items.length - 1 
                  ? "text-gray-700 font-medium" 
                  : "text-primary hover:text-primary-700 hover:underline"
                }
              `}
              aria-current={index === items.length - 1 ? "page" : undefined}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

// Pagination component with react-paginate
function Pagination() {
  const [currentPage, setCurrentPage] = useState(0);
  
  const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
  };
  
  return (
    <div className="space-y-4">
      <div className="border p-4 rounded">
        <p className="text-lg">Current Page: {currentPage + 1}</p>
        <p>Showing example content for page {currentPage + 1}</p>
      </div>
      
      <ReactPaginate
        pageCount={10}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        onPageChange={handlePageChange}
        containerClassName="flex justify-center mt-4 gap-1"
        pageClassName="border rounded hover:bg-gray-50"
        pageLinkClassName="px-3 py-1 block"
        previousClassName="border rounded hover:bg-gray-50"
        previousLinkClassName="px-3 py-1 block"
        nextClassName="border rounded hover:bg-gray-50"
        nextLinkClassName="px-3 py-1 block"
        breakClassName="px-3 py-1"
        activeClassName="bg-primary text-white border-primary"
        activeLinkClassName="text-white"
        previousLabel={<ChevronLeft size={16} />}
        nextLabel={<ChevronRight size={16} />}
        renderOnZeroPageCount={null}
      />
    </div>
  );
}

export function NavigationComponents() {
  return (
    <SectionContainer 
      id="navigation" 
      title="Navigation Components" 
      description="Components for app navigation and content organization"
    >
      <div className="space-y-8">
        {/* Tabs from Radix UI */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Tabs (Radix UI)</h3>
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="p-4 border rounded-md mt-2">
              <h4 className="font-medium mb-2">Product Overview</h4>
              <p className="text-gray-600">
                This is an example of the overview tab content. Tabs are great for organizing content
                without requiring navigation to a new page.
              </p>
            </TabsContent>
            <TabsContent value="features" className="p-4 border rounded-md mt-2">
              <h4 className="font-medium mb-2">Features List</h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-600">
                <li>Accessible keyboard navigation</li>
                <li>Responsive design</li>
                <li>Custom styling options</li>
              </ul>
            </TabsContent>
            <TabsContent value="settings" className="p-4 border rounded-md mt-2">
              <h4 className="font-medium mb-2">Settings Panel</h4>
              <div className="space-y-2 text-gray-600">
                <p>Adjust your preferences here.</p>
                <div className="flex items-center">
                  <Button size="sm" variant="outline">Save Settings</Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        {/* Accordion from Radix UI */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Accordion (Radix UI)</h3>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>What are accordions used for?</AccordionTrigger>
              <AccordionContent>
                Accordions are commonly used for FAQs, product details, or any content that
                needs to be organized in collapsible sections to save space.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Are accordions accessible?</AccordionTrigger>
              <AccordionContent>
                Yes, Radix UI accordions are built with accessibility in mind. They support keyboard
                navigation and proper ARIA attributes for screen readers.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>How to style accordions?</AccordionTrigger>
              <AccordionContent>
                Accordions can be styled using Tailwind CSS or any other CSS framework. You can customize
                the appearance, animations, and spacing to match your design system.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        
        {/* Breadcrumbs (Chakra UI inspired) */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Breadcrumbs (Chakra UI inspired)</h3>
          <div className="p-4 border rounded-md">
            <Breadcrumbs />
          </div>
        </div>
        
        {/* Pagination with react-paginate */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Pagination (react-paginate)</h3>
          <Pagination />
        </div>
        
        {/* Sidebar/Drawer with Radix UI Sheet */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Sidebar/Drawer (Radix UI)</h3>
          <div className="flex gap-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2">
                  <PanelRightOpen size={16} />
                  Open Sidebar
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle>Navigation Menu</SheetTitle>
                  <SheetDescription>
                    This is an example of a sidebar/drawer navigation.
                  </SheetDescription>
                </SheetHeader>
                <div className="py-4">
                  <ul className="space-y-2">
                    <li className="px-2 py-1 rounded hover:bg-gray-100 cursor-pointer font-medium">Dashboard</li>
                    <li className="px-2 py-1 rounded hover:bg-gray-100 cursor-pointer">Projects</li>
                    <li className="px-2 py-1 rounded hover:bg-gray-100 cursor-pointer">Team</li>
                    <li className="px-2 py-1 rounded hover:bg-gray-100 cursor-pointer">Reports</li>
                    <li className="px-2 py-1 rounded hover:bg-gray-100 cursor-pointer">Settings</li>
                  </ul>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
        
        {/* Dropdown Menu from Radix UI */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Dropdown Menu (Radix UI)</h3>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                <Menu size={16} />
                Menu <ChevronDown size={16} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Sign out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </SectionContainer>
  );
}