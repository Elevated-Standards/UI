import { MediaComponents } from "@/components/ui-showcase/media-components";
import { ComponentLayout } from "@/components/ui-showcase/component-layout";

export default function MediaPage() {
  return (
    <ComponentLayout 
      title="Media Components" 
      description="Components for multimedia content"
    >
      <MediaComponents />
    </ComponentLayout>
  );
}