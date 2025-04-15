import { FormComponents } from "@/components/ui-showcase/form-components";
import { ComponentLayout } from "@/components/ui-showcase/component-layout";

export default function FormsPage() {
  return (
    <ComponentLayout 
      title="Form Components" 
      description="Essential form controls for user input"
    >
      <FormComponents />
    </ComponentLayout>
  );
}