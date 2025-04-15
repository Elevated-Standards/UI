import React, { useState } from "react";
import { SectionContainer } from "./section-container";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Code } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { i18nImplementationCode } from "@/lib/utils-demo";

export function I18nComponents() {
  const [language, setLanguage] = useState("en");
  
  // Sample translations for demonstration
  const translations = {
    en: {
      greeting: "Hello, World!",
      welcome: "Welcome to our application",
      description: "This is a demonstration of internationalization using react-i18next",
      buttonText: "Click me",
      items: ["First", "Second", "Third"],
      count: "You have {{count}} item",
      count_plural: "You have {{count}} items",
    },
    es: {
      greeting: "¡Hola, Mundo!",
      welcome: "Bienvenido a nuestra aplicación",
      description: "Esta es una demostración de internacionalización usando react-i18next",
      buttonText: "Haz clic en mí",
      items: ["Primero", "Segundo", "Tercero"],
      count: "Tienes {{count}} artículo",
      count_plural: "Tienes {{count}} artículos",
    },
    fr: {
      greeting: "Bonjour, Monde!",
      welcome: "Bienvenue dans notre application",
      description: "Ceci est une démonstration d'internationalisation utilisant react-i18next",
      buttonText: "Cliquez-moi",
      items: ["Premier", "Deuxième", "Troisième"],
      count: "Vous avez {{count}} article",
      count_plural: "Vous avez {{count}} articles",
    },
    de: {
      greeting: "Hallo, Welt!",
      welcome: "Willkommen in unserer Anwendung",
      description: "Dies ist eine Demonstration der Internationalisierung mit react-i18next",
      buttonText: "Klick mich",
      items: ["Erste", "Zweite", "Dritte"],
      count: "Du hast {{count}} Element",
      count_plural: "Du hast {{count}} Elemente",
    },
  };

  // Sample translation function
  const t = (key: string, options?: any) => {
    const currentTranslations = translations[language as keyof typeof translations] || translations.en;
    let text = currentTranslations[key as keyof typeof currentTranslations] || key;
    
    if (options && options.count !== undefined) {
      const pluralKey = options.count === 1 ? key : `${key}_plural`;
      text = currentTranslations[pluralKey as keyof typeof currentTranslations] || key;
      
      // Simple variable replacement
      text = text.replace(/{{count}}/g, options.count);
    }
    
    return text;
  };

  // Example usage of React Aria accessibility hooks
  const AccessibilityExample = () => {
    return (
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-foreground">React Aria Accessibility Hooks</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-md">Keyboard Navigation</CardTitle>
              <CardDescription>
                Components built with React Aria use proper ARIA attributes and keyboard interactions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2">
                <Button>Tab to me</Button>
                <Button variant="outline">Then to me</Button>
                <Button variant="secondary">And to me</Button>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Try navigating with Tab and Shift+Tab
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-md">Focus Management</CardTitle>
              <CardDescription>
                React Aria provides tools for proper focus management in complex UIs
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Select defaultValue="option1">
                <SelectTrigger>
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="option1">Option 1</SelectItem>
                  <SelectItem value="option2">Option 2</SelectItem>
                  <SelectItem value="option3">Option 3</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-sm text-muted-foreground mt-4">
                Enhanced with proper ARIA attributes and screen reader support
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  };

  return (
    <SectionContainer
      id="i18n"
      title="Internationalization & Accessibility"
      description="Components and utilities for internationalization and accessibility"
    >
      <div className="space-y-8">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Internationalization (react-i18next)</h3>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-muted-foreground">Switch language:</span>
              <Select value={language} onValueChange={setLanguage}>
                <SelectTrigger className="w-[120px]">
                  <SelectValue placeholder="Language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="es">Español</SelectItem>
                  <SelectItem value="fr">Français</SelectItem>
                  <SelectItem value="de">Deutsch</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-md">{t('greeting')}</CardTitle>
              <CardDescription>{t('welcome')}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>{t('description')}</p>
              
              <div>
                <h4 className="font-medium mb-2">Translated List:</h4>
                <ul className="list-disc list-inside">
                  {(translations[language as keyof typeof translations]?.items as string[] || []).map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Pluralization:</h4>
                <div className="flex gap-4">
                  <Badge>{t('count', { count: 1 })}</Badge>
                  <Badge>{t('count', { count: 5 })}</Badge>
                </div>
              </div>
              
              <Button>{t('buttonText')}</Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="h-5 w-5" />
                Implementation Example
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="code">
                <TabsList>
                  <TabsTrigger value="code">Code</TabsTrigger>
                  <TabsTrigger value="usage">Usage</TabsTrigger>
                </TabsList>
                <TabsContent value="code" className="mt-4">
                  <pre className="bg-secondary p-4 rounded-md overflow-x-auto text-sm">
                    <code>{i18nImplementationCode}</code>
                  </pre>
                </TabsContent>
                <TabsContent value="usage" className="mt-4">
                  <div className="space-y-4">
                    <p>To use i18n in your components:</p>
                    <ol className="list-decimal list-inside space-y-2">
                      <li>Import the <code className="bg-secondary px-1 py-0.5 rounded text-sm">useTranslation</code> hook</li>
                      <li>Use the <code className="bg-secondary px-1 py-0.5 rounded text-sm">t</code> function to translate keys</li>
                      <li>Handle pluralization with <code className="bg-secondary px-1 py-0.5 rounded text-sm">count</code> option</li>
                      <li>Change language with <code className="bg-secondary px-1 py-0.5 rounded text-sm">i18n.changeLanguage</code></li>
                    </ol>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
        
        <AccessibilityExample />
      </div>
    </SectionContainer>
  );
}