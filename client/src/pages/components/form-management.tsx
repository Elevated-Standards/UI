import { FormManagement } from "@/components/ui-showcase/form-management";
import { ComponentLayout } from "@/components/ui-showcase/component-layout";

export default function FormManagementPage() {
  return (
    <ComponentLayout 
      title="Form Management" 
      description="Validation and form handling"
    >
      <FormManagement />
    </ComponentLayout>
  );
}