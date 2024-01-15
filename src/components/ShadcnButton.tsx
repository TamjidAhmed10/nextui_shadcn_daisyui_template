import { Button } from "@/components/ui/button";

export function ShadcnButton() {
  return (
    <div className="grid grid-cols-3 gap-4 mb-4">
      <Button>Button</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="link">Link</Button>
    </div>
  );
}
