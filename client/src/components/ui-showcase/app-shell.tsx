import React, { useState } from "react";
import { Header } from "./header";
import { Sidebar } from "./sidebar";
import { ComponentSection } from "@/types/demo";

interface AppShellProps {
  sections: ComponentSection[];
  children: React.ReactNode;
}

export function AppShell({ sections, children }: AppShellProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="flex min-h-screen w-full">
      {/* Mobile sidebar - conditionally shown */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={toggleMenu} />
      )}
      
      {/* Sidebar - responsive */}
      <div className={`${mobileMenuOpen ? "fixed inset-y-0 left-0 z-50" : "hidden"} lg:flex lg:relative lg:z-auto`}>
        <Sidebar sections={sections} />
      </div>
      
      {/* Main content */}
      <div className="flex-1 overflow-auto">
        <Header onMenuClick={toggleMenu} />
        
        {/* Content */}
        <main className="px-6 py-8 max-w-6xl mx-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
