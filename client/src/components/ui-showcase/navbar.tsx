import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { 
  FileText, 
  ScrollText, 
  Navigation, 
  Layers, 
  BarChart3, 
  Settings, 
  Image, 
  Globe,
  Menu,
  X
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

export function Navbar() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { href: "/components/forms", label: "Forms", icon: <FileText className="h-4 w-4" /> },
    { href: "/components/form-management", label: "Form Management", icon: <ScrollText className="h-4 w-4" /> },
    { href: "/components/navigation", label: "Navigation", icon: <Navigation className="h-4 w-4" /> },
    { href: "/components/overlay", label: "Overlay", icon: <Layers className="h-4 w-4" /> },
    { href: "/components/data-display", label: "Data Display", icon: <BarChart3 className="h-4 w-4" /> },
    { href: "/components/utilities", label: "Utilities", icon: <Settings className="h-4 w-4" /> },
    { href: "/components/media", label: "Media", icon: <Image className="h-4 w-4" /> },
    { href: "/components/i18n", label: "i18n", icon: <Globe className="h-4 w-4" /> },
  ];

  return (
    <header className="supports-backdrop-blur:bg-background/60 sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-14 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="text-xl font-bold">Elevated Standards</span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-6 mx-6">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm">Components</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {links.map(link => (
                <DropdownMenuItem key={link.href} asChild>
                  <Link href={link.href} className="flex items-center cursor-pointer">
                    {link.icon}
                    <span className="ml-2">{link.label}</span>
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          

        </nav>

        {/* Mobile navigation */}
        <div className="md:hidden flex-1 flex justify-end">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-4">
          <ModeToggle />
          <Button asChild className="hidden md:flex" variant="default">
            <Link href="/components/forms">
              Explore Components
            </Link>
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 py-3 border-b">
          <nav className="grid gap-2">
            {links.map(link => (
              <Link 
                key={link.href} 
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center px-2 py-1.5 text-sm rounded-md ${location === link.href ? 'bg-accent' : ''}`}
              >
                {link.icon}
                <span className="ml-2">{link.label}</span>
              </Link>
            ))}

          </nav>
        </div>
      )}
    </header>
  );
}