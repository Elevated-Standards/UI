import { OverlayComponents } from "@/components/ui-showcase/overlay-components";
import { ComponentLayout } from "@/components/ui-showcase/component-layout";

export default function OverlayPage() {
  return (
    <ComponentLayout 
      title="Overlay & Popup" 
      description="Modal dialogs, tooltips, and notification components"
    >
      <OverlayComponents />
    </ComponentLayout>
  );
}