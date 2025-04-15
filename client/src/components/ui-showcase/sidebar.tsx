import React, { useState } from "react";
import { ComponentSection } from "@/types/demo";
import { cn } from "@/lib/utils";
import { LayoutGrid } from "lucide-react";

interface SidebarProps {
  sections: ComponentSection[];
}

export function Sidebar({ sections }: SidebarProps) {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  
  return (
    <div className="hidden lg:flex flex-col w-64 bg-card border-r shadow-sm overflow-y-auto">
      <div className="p-6 border-b">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
            <LayoutGrid className="h-5 w-5 text-white" />
          </div>
          <h1 className="text-lg font-bold">Component Library</h1>
        </div>
      </div>
      <nav className="p-4 space-y-1">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={cn(
              "flex items-center space-x-2 px-3 py-2 rounded-md transition",
              "hover:bg-muted font-medium",
              activeSection === section.id && "bg-muted"
            )}
            onClick={() => setActiveSection(section.id)}
          >
            {section.icon}
            <span>{section.title}</span>
          </a>
        ))}
      </nav>
    </div>
  );
}
