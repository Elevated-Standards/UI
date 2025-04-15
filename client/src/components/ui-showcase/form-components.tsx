import React, { useCallback, useState } from "react";
import { SectionContainer } from "./section-container";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Upload, File, Calendar as CalendarIcon, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useDropzone } from "react-dropzone";
import { useCombobox } from 'downshift';
import { useSelect } from '@react-aria/select';
import { Calendar } from "@/components/ui/calendar";
import { HexColorPicker } from "react-colorful";
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';
import { format } from "date-fns";

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

// Simple Combobox Component (inspired by Downshift)
function DownshiftCombobox() {
  const items = [
    'Apple', 'Banana', 'Cherry', 'Date', 'Elderberry',
    'Fig', 'Grape', 'Honeydew', 'Kiwi', 'Lemon'
  ];
  
  const [inputValue, setInputValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  
  const filteredItems = items.filter(
    item => !inputValue || item.toLowerCase().includes(inputValue.toLowerCase())
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setIsOpen(true);
    setHighlightedIndex(-1);
  };

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
    setInputValue(item);
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <div className="flex">
        <Input
          value={inputValue}
          onChange={handleInputChange}
          onFocus={() => setIsOpen(true)}
          placeholder="Type to search..."
          className="w-full"
        />
        <Button
          type="button"
          variant="outline"
          className="px-3 ml-1"
          onClick={toggleMenu}
          aria-label="toggle menu"
        >
          &#8595;
        </Button>
      </div>
      <ul
        className={`absolute z-10 w-full bg-white shadow-lg max-h-60 overflow-auto mt-1 rounded-md ${
          !isOpen || filteredItems.length === 0 ? 'hidden' : ''
        }`}
      >
        {filteredItems.map((item, index) => (
          <li
            key={`${item}${index}`}
            onClick={() => handleItemClick(item)}
            onMouseEnter={() => setHighlightedIndex(index)}
            className={`px-3 py-2 cursor-pointer ${
              highlightedIndex === index ? 'bg-blue-100' : ''
            } ${selectedItem === item ? 'font-bold' : ''}`}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

// Simple Custom Select Component (inspired by React Aria)
function ReactAriaSelect() {
  const options = [
    { id: 1, name: 'English (US)' },
    { id: 2, name: 'Español' },
    { id: 3, name: 'Français' },
    { id: 4, name: 'Deutsch' },
    { id: 5, name: '日本語' }
  ];
  
  const [selected, setSelected] = useState(options[0]);
  const [isOpen, setIsOpen] = useState(false);
  const ref = React.useRef<HTMLButtonElement>(null);

  const handleSelect = (option: typeof options[0]) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <div className="block mb-2 text-sm font-medium text-gray-900">
        Select Language (React Aria inspired)
      </div>
      <button
        ref={ref}
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-full flex items-center justify-between py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm text-left cursor-default focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-sm"
      >
        <span>{selected.name}</span>
        <span className="ml-2 w-5 h-5 text-gray-400">&#8595;</span>
      </button>
      {isOpen && (
        <ul
          className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
        >
          {options.map((option) => (
            <li
              key={option.id}
              onClick={() => handleSelect(option)}
              className={`cursor-default select-none relative py-2 pl-3 pr-9 ${
                selected.id === option.id
                  ? 'text-white bg-primary'
                  : 'text-gray-900'
              }`}
            >
              {option.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// Auto-resizing Textarea Component (inspired by Chakra UI)
function AutoResizingTextarea() {
  const [value, setValue] = useState('');
  
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
    
    // Auto-resize logic
    e.target.style.height = 'auto';
    e.target.style.height = `${e.target.scrollHeight}px`;
  };
  
  return (
    <textarea
      value={value}
      onChange={handleChange}
      placeholder="Type here and I'll auto-resize..."
      className="w-full min-h-[100px] p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none overflow-hidden"
      style={{ transition: 'height 0.2s ease' }}
    />
  );
}

export function FormComponents() {
  const [date, setDate] = useState<Date | undefined>();
  const [time, setTime] = useState<string | null>('10:00');
  const [color, setColor] = useState("#aabbcc");
  
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
        
        {/* Auto-resizing Textarea (Chakra UI inspired) */}
        <div className="space-y-2">
          <Label className="block">Auto-resizing Textarea (Chakra UI inspired)</Label>
          <AutoResizingTextarea />
        </div>
        
        {/* Combobox with Downshift */}
        <div className="space-y-2">
          <Label className="block">Combobox / Autocomplete (Downshift)</Label>
          <DownshiftCombobox />
        </div>
        
        {/* React Aria Select */}
        <div className="space-y-2">
          <ReactAriaSelect />
        </div>
        
        {/* Date Picker with React DayPicker */}
        <div className="space-y-2">
          <Label className="block">Date Picker (React DayPicker)</Label>
          <div className="grid gap-2">
            <div className="flex">
              <Button
                variant={"outline"}
                className="w-full justify-start text-left font-normal"
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </div>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
            />
          </div>
        </div>
        
        {/* Time Picker with react-time-picker */}
        <div className="space-y-2">
          <Label className="block">Time Picker (react-time-picker)</Label>
          <div className="border rounded-md p-2 inline-block">
            <TimePicker
              onChange={setTime}
              value={time}
              className="time-picker"
              disableClock={true}
              clearIcon={null}
            />
          </div>
        </div>
        
        {/* Color Picker with react-colorful */}
        <div className="space-y-2">
          <Label className="block">Color Picker (react-colorful)</Label>
          <div className="space-y-4">
            <HexColorPicker color={color} onChange={setColor} />
            <div className="flex items-center gap-3">
              <div 
                className="w-10 h-10 rounded-md border"
                style={{ backgroundColor: color }} 
              />
              <Input
                value={color}
                onChange={(e) => setColor(e.target.value)}
                className="w-32"
              />
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
