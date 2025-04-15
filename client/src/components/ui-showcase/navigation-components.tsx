import React from "react";
import { SectionContainer } from "./section-container";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ChevronRight, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export function NavigationComponents() {
  return (
    <SectionContainer 
      id="navigation" 
      title="Navigation & Layout" 
      description="Navigation components for application structure"
    >
      <div className="space-y-8">
        {/* Tabs */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Tabs</h3>
          <Tabs defaultValue="dashboard">
            <TabsList className="w-full justify-start space-x-8 border-b rounded-none bg-transparent h-auto pb-0">
              <TabsTrigger 
                value="dashboard" 
                className="rounded-none border-b-2 border-primary data-[state=active]:border-primary text-primary data-[state=active]:text-primary data-[state=active]:bg-transparent px-1 pb-4"
              >
                Dashboard
              </TabsTrigger>
              <TabsTrigger 
                value="team" 
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary text-gray-500 data-[state=active]:text-primary data-[state=active]:bg-transparent px-1 pb-4"
              >
                Team
              </TabsTrigger>
              <TabsTrigger 
                value="projects" 
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary text-gray-500 data-[state=active]:text-primary data-[state=active]:bg-transparent px-1 pb-4"
              >
                Projects
              </TabsTrigger>
              <TabsTrigger 
                value="settings" 
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary text-gray-500 data-[state=active]:text-primary data-[state=active]:bg-transparent px-1 pb-4"
              >
                Settings
              </TabsTrigger>
            </TabsList>
            <TabsContent value="dashboard" className="p-4 bg-gray-50 rounded-md mt-4">
              <p className="text-sm text-gray-600">Dashboard content goes here. This is the active tab.</p>
            </TabsContent>
            <TabsContent value="team">
              <p className="text-sm text-gray-600">Team content would go here.</p>
            </TabsContent>
            <TabsContent value="projects">
              <p className="text-sm text-gray-600">Projects content would go here.</p>
            </TabsContent>
            <TabsContent value="settings">
              <p className="text-sm text-gray-600">Settings content would go here.</p>
            </TabsContent>
          </Tabs>
        </div>
        
        {/* Accordion */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Accordion</h3>
          <Accordion type="single" collapsible className="space-y-2">
            <AccordionItem value="item-1" className="border border-gray-200 rounded-md overflow-hidden">
              <AccordionTrigger className="px-4 py-3 text-sm font-medium bg-gray-50 hover:bg-gray-100 text-gray-900">
                Section 1: Getting Started
              </AccordionTrigger>
              <AccordionContent className="px-4 py-3 border-t border-gray-200 text-sm text-gray-600">
                This is the content for section 1. It contains important information about getting started with the application.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="border border-gray-200 rounded-md overflow-hidden">
              <AccordionTrigger className="px-4 py-3 text-sm font-medium bg-gray-50 hover:bg-gray-100 text-gray-900">
                Section 2: Advanced Features
              </AccordionTrigger>
              <AccordionContent className="px-4 py-3 border-t border-gray-200 text-sm text-gray-600">
                This is the content for section 2. It explains advanced features of the application.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3" className="border border-gray-200 rounded-md overflow-hidden">
              <AccordionTrigger className="px-4 py-3 text-sm font-medium bg-gray-50 hover:bg-gray-100 text-gray-900">
                Section 3: Troubleshooting
              </AccordionTrigger>
              <AccordionContent className="px-4 py-3 border-t border-gray-200 text-sm text-gray-600">
                This is the content for section 3. It provides common troubleshooting steps.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        
        {/* Breadcrumbs */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Breadcrumbs</h3>
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <a href="#" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-primary">
                  <Home className="mr-2 w-4 h-4" />
                  Home
                </a>
              </li>
              <li>
                <div className="flex items-center">
                  <ChevronRight className="w-6 h-6 text-gray-400" />
                  <a href="#" className="ml-1 text-sm font-medium text-gray-700 hover:text-primary md:ml-2">Components</a>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <ChevronRight className="w-6 h-6 text-gray-400" />
                  <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">Navigation</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
        
        {/* Pagination */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Pagination</h3>
          <nav className="flex justify-between items-center" aria-label="Pagination">
            <div className="flex-1 flex justify-between sm:hidden">
              <Button variant="outline" size="sm">Previous</Button>
              <Button variant="outline" size="sm">Next</Button>
            </div>
            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-gray-700">
                  Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of <span className="font-medium">97</span> results
                </p>
              </div>
              <div>
                <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                  <Button variant="outline" size="icon" className="rounded-l-md">
                    <ChevronRight className="h-5 w-5 rotate-180" />
                    <span className="sr-only">Previous</span>
                  </Button>
                  <Button variant="outline" className="bg-primary border-primary text-white">1</Button>
                  <Button variant="outline">2</Button>
                  <Button variant="outline" className="hidden md:inline-flex">3</Button>
                  <Button variant="outline" disabled>...</Button>
                  <Button variant="outline" className="hidden md:inline-flex">8</Button>
                  <Button variant="outline">9</Button>
                  <Button variant="outline">10</Button>
                  <Button variant="outline" size="icon" className="rounded-r-md">
                    <ChevronRight className="h-5 w-5" />
                    <span className="sr-only">Next</span>
                  </Button>
                </nav>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </SectionContainer>
  );
}
