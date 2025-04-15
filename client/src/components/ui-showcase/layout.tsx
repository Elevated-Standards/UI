import React from "react";
import { Navbar } from "@/components/ui-showcase/navbar";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} React Boilerplate Template. All rights reserved.
          </p>
          <p className="text-center text-sm text-muted-foreground md:text-right">
            Built with <a href="https://ui.shadcn.com/" className="underline" target="_blank" rel="noopener noreferrer">shadcn/ui</a> and the best React libraries
          </p>
        </div>
      </footer>
    </div>
  );
}