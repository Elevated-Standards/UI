import React from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CodeBlock } from "@/components/ui-showcase/code-block";
import { installDependenciesCode } from "@/lib/utils-demo";
import { 
  FileText, 
  ScrollText, 
  Navigation, 
  Layers, 
  BarChart3, 
  Settings, 
  Image, 
  Globe,
  Github,
  Globe2,
  Package,
  Rocket,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

export default function Home() {
  const componentSections = [
    { 
      id: "forms", 
      title: "Form Components", 
      description: "Essential form controls for user input including text inputs, checkboxes, radio buttons, selects and more.",
      icon: <FileText className="h-10 w-10" />,
      path: "/components/forms"
    },
    { 
      id: "form-management", 
      title: "Form Management", 
      description: "Complete form validation and state management using React Hook Form and Zod.",
      icon: <ScrollText className="h-10 w-10" />,
      path: "/components/form-management"
    },
    { 
      id: "navigation", 
      title: "Navigation & Layout", 
      description: "Navigation components including tabs, accordion, breadcrumbs, and pagination.",
      icon: <Navigation className="h-10 w-10" />,
      path: "/components/navigation"
    },
    { 
      id: "overlay", 
      title: "Overlay & Popup", 
      description: "Modal dialogs, tooltips, popovers, and toast notifications.",
      icon: <Layers className="h-10 w-10" />,
      path: "/components/overlay"
    },
    { 
      id: "data-display", 
      title: "Data Display", 
      description: "Tables, data grids, charts, and other components for displaying data.",
      icon: <BarChart3 className="h-10 w-10" />,
      path: "/components/data-display"
    },
    { 
      id: "utilities", 
      title: "Utilities & Helpers", 
      description: "Icons, animations, skeletons, and other utility components.",
      icon: <Settings className="h-10 w-10" />,
      path: "/components/utilities"
    },
    { 
      id: "media", 
      title: "Media Components", 
      description: "Components for multimedia content including image galleries and video players.",
      icon: <Image className="h-10 w-10" />,
      path: "/components/media"
    },
    { 
      id: "i18n", 
      title: "Internationalization", 
      description: "Localization and accessibility support with react-i18next.",
      icon: <Globe className="h-10 w-10" />,
      path: "/components/i18n"
    }
  ];

  const features = [
    { title: "Modern Stack", description: "Built with React 18, TypeScript, and Vite for fast development", icon: <Rocket className="h-8 w-8" /> },
    { title: "Best Libraries", description: "Each component uses the recommended library for its specific use case", icon: <CheckCircle2 className="h-8 w-8" /> },
    { title: "Fully Typed", description: "Complete TypeScript support throughout the project", icon: <FileText className="h-8 w-8" /> },
    { title: "Responsive", description: "Mobile-first design approach with responsive components", icon: <Globe2 className="h-8 w-8" /> },
    { title: "Accessibility", description: "ARIA attributes and keyboard navigation support", icon: <Package className="h-8 w-8" /> },
    { title: "Static Deploy", description: "Deploy as a static site to GitHub Pages or other hosts", icon: <Github className="h-8 w-8" /> }
  ];

  return (
    <div className="container py-8 max-w-6xl mx-auto">
      {/* Hero section */}
      <section className="py-12 text-center">
        <Badge variant="outline" className="mb-4 px-3 py-1 text-sm font-medium">Comprehensive UI Toolkit</Badge>
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">React Boilerplate Template</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          A collection of carefully selected UI components from best-in-class libraries for rapid application development.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="/components/forms">
              Explore Components
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="https://github.com/yourusername/react-boilerplate-template" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </a>
          </Button>
        </div>
      </section>

      {/* Features section */}
      <section className="py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card">
              <CardHeader>
                <div className="mb-2 text-primary">
                  {feature.icon}
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Component sections */}
      <section className="py-12">
        <h2 className="text-3xl font-bold mb-2 text-center">Component Showcase</h2>
        <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
          Explore our comprehensive collection of components, organized by category.
          Each component is built using the most suitable library for its purpose.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {componentSections.map((section) => (
            <Card key={section.id} className="overflow-hidden border">
              <CardHeader className="pb-2">
                <div className="mb-2 text-primary">
                  {section.icon}
                </div>
                <CardTitle>{section.title}</CardTitle>
                <CardDescription>{section.description}</CardDescription>
              </CardHeader>
              <CardFooter className="pt-2 flex justify-between">
                <Button asChild variant="ghost" size="sm" className="text-primary">
                  <Link href={section.path}>
                    View Components
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Getting Started section */}
      <section className="py-12">
        <Card className="max-w-3xl mx-auto">
          <CardHeader>
            <CardTitle>Getting Started</CardTitle>
            <CardDescription>Quick guide to using this boilerplate</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h3 className="font-semibold">1. Install Dependencies</h3>
              <CodeBlock code={installDependenciesCode} className="text-xs" />
            </div>
            
            <div className="space-y-2">
              <h3 className="font-semibold">2. Import Components</h3>
              <p className="text-muted-foreground">
                Import each component from the appropriate library following the documentation.
              </p>
            </div>
            
            <div className="space-y-2">
              <h3 className="font-semibold">3. Configure Theming</h3>
              <p className="text-muted-foreground">
                Set up your theme configuration to match the design system shown in this boilerplate.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold">4. Deploy to GitHub Pages</h3>
              <p className="text-muted-foreground">
                Use the included GitHub Actions workflow to automatically deploy to GitHub Pages.
              </p>
            </div>
          </CardContent>
          <CardFooter>
            <Button asChild>
              <Link href="/components/forms">Start Exploring</Link>
            </Button>
          </CardFooter>
        </Card>
      </section>
    </div>
  );
}
