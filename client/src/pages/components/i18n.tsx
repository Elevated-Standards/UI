import { I18nComponents } from "@/components/ui-showcase/i18n-components";
import { ComponentLayout } from "@/components/ui-showcase/component-layout";

export default function I18nPage() {
  return (
    <ComponentLayout 
      title="Internationalization" 
      description="Localization and accessibility"
    >
      <I18nComponents />
    </ComponentLayout>
  );
}