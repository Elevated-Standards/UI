import { UtilityComponents } from "@/components/ui-showcase/utility-components";
import { ComponentLayout } from "@/components/ui-showcase/component-layout";

export default function UtilitiesPage() {
  return (
    <ComponentLayout 
      title="Utilities & Helpers" 
      description="Useful utility components"
    >
      <UtilityComponents />
    </ComponentLayout>
  );
}