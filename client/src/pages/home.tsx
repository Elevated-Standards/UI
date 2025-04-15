import React from "react";
import { AppShell } from "@/components/ui-showcase/app-shell";
import { FormComponents } from "@/components/ui-showcase/form-components";
import { FormManagement } from "@/components/ui-showcase/form-management";
import { NavigationComponents } from "@/components/ui-showcase/navigation-components";
import { OverlayComponents } from "@/components/ui-showcase/overlay-components";
import { DataDisplayComponents } from "@/components/ui-showcase/data-display-components";
import { UtilityComponents } from "@/components/ui-showcase/utility-components";
import { MediaComponents } from "@/components/ui-showcase/media-components";
import { I18nComponents } from "@/components/ui-showcase/i18n-components";
import { CodeBlock } from "@/components/ui-showcase/code-block";
import { installDependenciesCode } from "@/lib/utils-demo";
import { ComponentSection } from "@/types/demo";
import { 
  FileText, 
  ScrollText, 
  Navigation, 
  Layers, 
  BarChart3, 
  Settings, 
  Image, 
  Globe 
} from "lucide-react";

export default function Home() {
  const sections: ComponentSection[] = [
    { id: "forms", title: "Form Components", description: "Essential form controls for user input", icon: <FileText className="h-5 w-5" /> },
    { id: "form-management", title: "Form Management", description: "Validation and form handling", icon: <ScrollText className="h-5 w-5" /> },
    { id: "navigation", title: "Navigation & Layout", description: "Navigation components for application structure", icon: <Navigation className="h-5 w-5" /> },
    { id: "overlay", title: "Overlay & Popup", description: "Modal dialogs, tooltips, and notification components", icon: <Layers className="h-5 w-5" /> },
    { id: "data-display", title: "Data Display", description: "Components for displaying and organizing data", icon: <BarChart3 className="h-5 w-5" /> },
    { id: "utilities", title: "Utilities & Helpers", description: "Useful utility components", icon: <Settings className="h-5 w-5" /> },
    { id: "media", title: "Media Components", description: "Components for multimedia content", icon: <Image className="h-5 w-5" /> },
    { id: "i18n", title: "Internationalization", description: "Localization and accessibility", icon: <Globe className="h-5 w-5" /> }
  ];

  return (
    <AppShell sections={sections}>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">UI Component Boilerplate</h1>
        <p className="mt-2 text-gray-600">A modern, clean UI component library based on recommended libraries and best practices.</p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 space-y-8">
          <FormComponents />
          <FormManagement />
          <NavigationComponents />
          <OverlayComponents />
          <DataDisplayComponents />
        </div>

        <div className="space-y-6">
          <UtilityComponents />
          <MediaComponents />
          <I18nComponents />
          
          {/* Getting Started Guide */}
          <section className="bg-white rounded-lg shadow-sm p-6">
            <div className="border-b pb-4 mb-6">
              <h2 className="text-xl font-bold text-gray-900">Getting Started</h2>
              <p className="text-sm text-gray-600 mt-1">Quick guide to using this boilerplate</p>
            </div>
            
            <div className="space-y-4 text-sm text-gray-700">
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900">1. Install Dependencies</h3>
                <CodeBlock code={installDependenciesCode} className="text-xs" />
              </div>
              
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900">2. Import Components</h3>
                <p>
                  Import each component from the appropriate library following the documentation.
                </p>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900">3. Configure Theming</h3>
                <p>
                  Set up your theme configuration to match the design system shown in this boilerplate.
                </p>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-200">
                <a href="#" className="text-sm font-medium text-primary hover:text-primary-700">
                  View Full Documentation →
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </AppShell>
  );
}
