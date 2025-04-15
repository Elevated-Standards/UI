import React, { ReactNode } from "react";

interface SectionContainerProps {
  id: string;
  title: string;
  description: string;
  children: ReactNode;
}

export function SectionContainer({ id, title, description, children }: SectionContainerProps) {
  return (
    <section id={id} className="bg-white rounded-lg shadow-sm p-6">
      <div className="border-b pb-4 mb-6">
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
        <p className="text-sm text-gray-600 mt-1">{description}</p>
      </div>
      {children}
    </section>
  );
}
