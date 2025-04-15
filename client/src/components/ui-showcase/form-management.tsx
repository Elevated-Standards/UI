import React from "react";
import { SectionContainer } from "./section-container";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { CodeBlock } from "./code-block";
import { formValidationCode } from "@/lib/utils-demo";
import { CheckCircle2 } from "lucide-react";

export function FormManagement() {
  return (
    <SectionContainer 
      id="form-management" 
      title="Form Management" 
      description="Validation and form handling"
    >
      <div className="space-y-6">
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              className="border-red-300 focus:ring-red-500 focus:border-red-500"
              aria-invalid="true"
              aria-describedby="email-error"
            />
            <p className="mt-1 text-sm text-red-600" id="email-error">Please enter a valid email address</p>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              name="password"
              placeholder="••••••••"
            />
            <div className="mt-1 space-y-1">
              <div className="flex items-center">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span className="ml-2 text-xs text-gray-500">At least 8 characters</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="h-4 w-4 text-gray-300" />
                <span className="ml-2 text-xs text-gray-500">Must include uppercase letter</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="h-4 w-4 text-gray-300" />
                <span className="ml-2 text-xs text-gray-500">Must include number or special character</span>
              </div>
            </div>
          </div>
          
          <div className="pt-2">
            <Button type="submit" className="w-full">
              Submit
            </Button>
          </div>
        </form>
        
        <div className="border-t pt-4 mt-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Form Validation Implementation</h3>
          <CodeBlock code={formValidationCode} />
        </div>
      </div>
    </SectionContainer>
  );
}
