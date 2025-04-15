import React from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

interface ComponentLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export function ComponentLayout({ title, description, children }: ComponentLayoutProps) {
  return (
    <div className="container py-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <Button variant="ghost" size="sm" asChild className="mb-4">
          <Link to="/">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Overview
          </Link>
        </Button>
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="mt-2 text-muted-foreground">{description}</p>
      </div>
      
      <div className="bg-card rounded-lg border p-6">
        {children}
      </div>
    </div>
  );
}