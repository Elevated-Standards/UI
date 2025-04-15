import { DataDisplayComponents } from "@/components/ui-showcase/data-display-components";
import { ComponentLayout } from "@/components/ui-showcase/component-layout";

export default function DataDisplayPage() {
  return (
    <ComponentLayout 
      title="Data Display" 
      description="Components for displaying and organizing data"
    >
      <DataDisplayComponents />
    </ComponentLayout>
  );
}