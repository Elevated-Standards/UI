import React, { useState, useEffect } from "react";
import { SectionContainer } from "./section-container";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Globe } from "lucide-react";
import { CodeBlock } from "./code-block";
import { i18nImplementationCode } from "@/lib/utils-demo";
import { useTranslation, Trans } from "react-i18next";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";

// Initialize i18next - This would normally be in a separate file
i18next
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          welcome: "Welcome to our application",
          description: "This is a demonstration of react-i18next",
          selectLanguage: "Please select your preferred language",
          features: {
            title: "Key Features",
            items: [
              "Simple integration with React components",
              "Supports pluralization",
              "Handles nested translations",
              "Variable interpolation"
            ]
          },
          count: "You have {{count}} notification",
          count_plural: "You have {{count}} notifications",
          example: "Example with <bold>formatted content</bold> and <link>a link</link>"
        }
      },
      es: {
        translation: {
          welcome: "Bienvenido a nuestra aplicación",
          description: "Esta es una demostración de react-i18next",
          selectLanguage: "Por favor seleccione su idioma preferido",
          features: {
            title: "Características Principales",
            items: [
              "Integración simple con componentes React",
              "Soporta pluralización",
              "Maneja traducciones anidadas",
              "Interpolación de variables"
            ]
          },
          count: "Tienes {{count}} notificación",
          count_plural: "Tienes {{count}} notificaciones",
          example: "Ejemplo con <bold>contenido formateado</bold> y <link>un enlace</link>"
        }
      },
      fr: {
        translation: {
          welcome: "Bienvenue dans notre application",
          description: "Ceci est une démonstration de react-i18next",
          selectLanguage: "Veuillez sélectionner votre langue préférée",
          features: {
            title: "Fonctionnalités Clés",
            items: [
              "Intégration simple avec les composants React",
              "Prend en charge la pluralisation",
              "Gère les traductions imbriquées",
              "Interpolation de variables"
            ]
          },
          count: "Vous avez {{count}} notification",
          count_plural: "Vous avez {{count}} notifications",
          example: "Exemple avec <bold>contenu formaté</bold> et <link>un lien</link>"
        }
      }
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export function I18nComponents() {
  const { t, i18n } = useTranslation();
  const [notificationCount, setNotificationCount] = useState(1);
  return (
    <SectionContainer 
      id="i18n" 
      title="Internationalization" 
      description="Localization and accessibility"
    >
      <div className="space-y-6">
        {/* react-i18next demo (as per requirements) */}
        <div className="space-y-4 p-4 bg-white border rounded-lg">
          <h2 className="text-xl font-bold">{t('welcome')}</h2>
          <p className="text-gray-700">{t('description')}</p>
          
          {/* Language Selector */}
          <div className="space-y-2">
            <h3 className="text-md font-semibold text-gray-900">{t('selectLanguage')}</h3>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
                <Globe className="h-5 w-5 text-gray-400" />
              </div>
              <Select 
                onValueChange={(value) => {
                  i18n.changeLanguage(value);
                }}
                defaultValue={i18n.language}
              >
                <SelectTrigger className="pl-10">
                  <SelectValue placeholder="Select language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English (US)</SelectItem>
                  <SelectItem value="fr">Français</SelectItem>
                  <SelectItem value="es">Español</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          {/* Features list from translations */}
          <div className="mt-4">
            <h3 className="font-semibold">{t('features.title')}</h3>
            <ul className="list-disc pl-5 mt-2">
              {t('features.items', { returnObjects: true }).map((item, index) => (
                <li key={index} className="text-gray-700">{item}</li>
              ))}
            </ul>
          </div>
          
          {/* Pluralization example */}
          <div className="mt-4 space-y-2">
            <h3 className="font-semibold">Pluralization Example</h3>
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setNotificationCount(prev => Math.max(0, prev - 1))}
                className="px-3 py-1 bg-gray-200 rounded"
              >
                -
              </button>
              <div className="min-w-[200px] text-center">
                {t('count', { count: notificationCount })}
              </div>
              <button 
                onClick={() => setNotificationCount(prev => prev + 1)}
                className="px-3 py-1 bg-gray-200 rounded"
              >
                +
              </button>
            </div>
          </div>
          
          {/* Formatting with components */}
          <div className="mt-4">
            <h3 className="font-semibold">Formatting Example</h3>
            <p className="mt-2">
              <Trans i18nKey="example" t={t}>
                Example with <strong>formatted content</strong> and <a href="#" className="text-blue-500 underline">a link</a>
              </Trans>
            </p>
          </div>
        </div>
        
        {/* Documentation */}
        <div className="space-y-3 mt-6">
          <h3 className="text-md font-semibold text-gray-900">React i18next Implementation</h3>
          <div className="bg-gray-50 rounded-md p-4 text-sm text-gray-700">
            <p className="mb-2">Key features of react-i18next:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Simple integration with React components using hooks</li>
              <li>Support for pluralization</li>
              <li>Nested translations and namespaces</li>
              <li>Component interpolation with the Trans component</li>
              <li>Context provider for language switching</li>
              <li>Rich formatting options</li>
            </ul>
          </div>
          <CodeBlock code={i18nImplementationCode} />
        </div>
      </div>
    </SectionContainer>
  );
}
