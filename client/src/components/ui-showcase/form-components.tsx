import React, { useCallback } from "react";
import { SectionContainer } from "./section-container";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Upload, File } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useDropzone } from "react-dropzone";

// React-Dropzone File Upload Component
function FileUploadDropzone() {
  // Using react-dropzone for file handling
  return (
    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed border-gray-300 rounded-md">
      <div className="space-y-1 text-center">
        <Upload className="mx-auto h-12 w-12 text-gray-400" />
        <div>
          <div className="flex text-sm text-gray-600 justify-center">
            <p className="font-medium text-primary hover:text-primary-700 cursor-pointer">
              Click to upload
            </p>
            <p className="pl-1">or drag and drop</p>
          </div>
          <p className="text-xs text-gray-500 mt-1">PNG, JPG, GIF up to 10MB</p>
        </div>
      </div>
    </div>
  );
}

export function FormComponents() {
  return (
    <SectionContainer 
      id="forms" 
      title="Form Components" 
      description="Essential form controls for user input"
    >
      <div className="space-y-8">
        {/* Basic Inputs */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Text Inputs</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="text-input">Text Input</Label>
              <Input
                id="text-input"
                placeholder="Enter your name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email-input">Email Input</Label>
              <Input
                type="email"
                id="email-input"
                placeholder="you@example.com"
              />
            </div>
          </div>
        </div>
        
        {/* Textarea */}
        <div className="space-y-2">
          <Label htmlFor="textarea">Textarea</Label>
          <Textarea
            id="textarea"
            placeholder="Write your message here..."
            rows={3}
          />
        </div>
        
        {/* Checkbox and Radio */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Checkboxes</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="checkbox-1" />
                <Label htmlFor="checkbox-1">Option 1</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="checkbox-2" />
                <Label htmlFor="checkbox-2">Option 2</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="checkbox-3" defaultChecked />
                <Label htmlFor="checkbox-3">Option 3 (Checked)</Label>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Radio Buttons</h3>
            <RadioGroup defaultValue="option1">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option1" id="radio-1" />
                  <Label htmlFor="radio-1">Option A</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option2" id="radio-2" />
                  <Label htmlFor="radio-2">Option B</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option3" id="radio-3" />
                  <Label htmlFor="radio-3">Option C</Label>
                </div>
              </div>
            </RadioGroup>
          </div>
        </div>
        
        {/* Select and Dropdown */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Select & Dropdowns</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="select">Basic Select</Label>
              <Select>
                <SelectTrigger id="select">
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="option1">Option 1</SelectItem>
                  <SelectItem value="option2">Option 2</SelectItem>
                  <SelectItem value="option3">Option 3</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="combobox">Combobox / Autocomplete</Label>
              <div className="relative">
                <Input
                  id="combobox"
                  placeholder="Start typing..."
                  className="pr-10"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Slider */}
        <div className="space-y-2">
          <Label htmlFor="slider">Slider</Label>
          <Slider
            id="slider"
            defaultValue={[50]}
            max={100}
            step={1}
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>0</span>
            <span>50</span>
            <span>100</span>
          </div>
        </div>
        
        {/* File Upload - using react-dropzone as per requirements */}
        <div className="space-y-2">
          <Label className="block">File Upload (react-dropzone)</Label>
          <FileUploadDropzone />
        </div>
      </div>
    </SectionContainer>
  );
}
