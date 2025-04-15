import React from "react";
import { cn } from "@/lib/utils";

interface CodeBlockProps {
  code: string;
  className?: string;
}

export function CodeBlock({ code, className }: CodeBlockProps) {
  return (
    <div className={cn("bg-gray-50 rounded-md p-4", className)}>
      <pre className="text-xs text-gray-700 overflow-auto whitespace-pre-wrap">
        {code}
      </pre>
    </div>
  );
}
