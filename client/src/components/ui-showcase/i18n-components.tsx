import React from "react";
import { SectionContainer } from "./section-container";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Globe } from "lucide-react";
import { CodeBlock } from "./code-block";
import { i18nImplementationCode } from "@/lib/utils-demo";

export function I18nComponents() {
  return (
    <SectionContainer 
      id="i18n" 
      title="Internationalization" 
      description="Localization and accessibility"
    >
      <div className="space-y-6">
        {/* Language Selector */}
        <div className="space-y-3">
          <h3 className="text-md font-semibold text-gray-900">Language Selector</h3>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
              <Globe className="h-5 w-5 text-gray-400" />
            </div>
            <Select>
              <SelectTrigger className="pl-10">
                <SelectValue placeholder="English (US)" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English (US)</SelectItem>
                <SelectItem value="fr">Français</SelectItem>
                <SelectItem value="es">Español</SelectItem>
                <SelectItem value="de">Deutsch</SelectItem>
                <SelectItem value="ja">日本語</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        {/* Accessibility Hints */}
        <div className="space-y-3">
          <h3 className="text-md font-semibold text-gray-900">Accessibility Implementation</h3>
          <div className="bg-gray-50 rounded-md p-4 text-sm text-gray-700">
            <p className="mb-2">Key accessibility features implemented:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Proper heading hierarchy</li>
              <li>Keyboard navigation support</li>
              <li>ARIA attributes for interactive elements</li>
              <li>Focus management for modals</li>
              <li>Color contrast compliant with WCAG standards</li>
              <li>Screen reader friendly content structure</li>
            </ul>
          </div>
        </div>
        
        {/* Implementation Example */}
        <div className="space-y-3">
          <h3 className="text-md font-semibold text-gray-900">React i18n Implementation</h3>
          <CodeBlock code={i18nImplementationCode} />
        </div>
      </div>
    </SectionContainer>
  );
}
