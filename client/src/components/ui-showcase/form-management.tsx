import React from "react";
import { SectionContainer } from "./section-container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "@/hooks/use-toast";
import { formValidationCode } from "@/lib/utils-demo";
import { CodeBlock } from "./code-block";
import { CalendarIcon, FileSpreadsheet } from "lucide-react";

// Form schema using Zod
const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }).max(30, {
    message: "Username must not be longer than 30 characters."
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  age: z.coerce.number().int().positive().min(13, {
    message: "You must be at least 13 years old.",
  }).max(120, {
    message: "Please enter a valid age."
  }).optional(),
});

type FormValues = z.infer<typeof formSchema>;

export function FormManagement() {
  // Define form with React Hook Form + Zod validation
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      age: undefined,
    },
  });

  // Form submission handler
  function onSubmit(values: FormValues) {
    toast({
      title: "Form Submitted",
      description: (
        <pre className="mt-2 w-full rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <SectionContainer 
      id="form-management" 
      title="Form Management" 
      description="Validation and form handling"
    >
      <div className="space-y-8">
        {/* Form with React Hook Form + Zod */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold flex gap-2 items-center">
            <FileSpreadsheet className="h-5 w-5" />
            React Hook Form + Zod
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Form */}
            <div className="p-4 bg-white border rounded-lg">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Username</FormLabel>
                        <FormControl>
                          <Input placeholder="Your username" {...field} />
                        </FormControl>
                        <FormDescription>
                          This is your public display name.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="your.email@example.com" {...field} />
                        </FormControl>
                        <FormDescription>
                          We'll never share your email with anyone else.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="age"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Age (Optional)</FormLabel>
                        <FormControl>
                          <Input 
                            type="number" 
                            placeholder="Your age" 
                            {...field}
                            onChange={(e) => field.onChange(e.target.value === "" ? undefined : parseInt(e.target.value, 10))}
                          />
                        </FormControl>
                        <FormDescription>
                          For age verification purposes.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button type="submit">Submit</Button>
                </form>
              </Form>
            </div>
            
            {/* Form Explanation */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium mb-3">Features</h4>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>Schema-based validation with Zod</li>
                <li>Full TypeScript support</li>
                <li>Controlled inputs with proper state management</li>
                <li>Form submission handling</li>
                <li>Comprehensive error messages</li>
                <li>Accessible form controls</li>
              </ul>
              
              <h4 className="font-medium mt-6 mb-3">Try it out:</h4>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>Submit an empty form to see validation errors</li>
                <li>Enter an invalid email to test email validation</li>
                <li>Enter an age less than 13 to test age verification</li>
                <li>Fill all fields correctly to see the form submission toast</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* FormKit Dynamic Form Builder */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold flex gap-2 items-center">
            <CalendarIcon className="h-5 w-5" />
            FormKit (GUI Form Builder) - Coming Soon
          </h3>
          <div className="p-4 bg-white border rounded-lg border-dashed text-center">
            <p className="text-gray-500">
              Our FormKit implementation for dynamic, no-code form building is coming soon.
              This will allow creating complex forms via a GUI interface.
            </p>
          </div>
        </div>
        
        {/* Implementation Code */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Implementation Example</h3>
          <CodeBlock code={formValidationCode} />
        </div>
      </div>
    </SectionContainer>
  );
}