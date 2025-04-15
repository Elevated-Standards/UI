import React from "react";
import { Bell, Menu, Moon, Sun, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

interface HeaderProps {
  onMenuClick: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
  const { theme, setTheme } = useTheme();
  
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  
  return (
    <header className="sticky top-0 z-10 bg-card border-b shadow-sm">
      <div className="flex items-center justify-between px-6 py-3">
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={onMenuClick}
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
          <div className="hidden lg:block">
            <h2 className="text-lg font-medium">Component Boilerplate</h2>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" onClick={toggleTheme}>
            {theme === 'dark' ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
            <span className="sr-only">Notifications</span>
          </Button>
          <div className="relative">
            <Button variant="ghost" size="icon" className="rounded-full">
              <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                <User className="h-5 w-5" />
              </div>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
