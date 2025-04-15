import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility to merge tailwind classes
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Demo code snippets for the component library showcase
export const formValidationCode = `// React Hook Form with Zod implementation
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const formSchema = z.object({
  username: z.string().min(3, { message: "Username must be at least 3 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(8, { message: "Password must be at least 8 characters" })
    .regex(/[A-Z]/, { message: "Password must include an uppercase letter" })
    .regex(/[\\d\\W]/, { message: "Password must include a number or special character" })
});

function FormExample() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: ""
    }
  });

  function onSubmit(data) {
    console.log(data);
    // Your form submission logic here
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      {/* Form fields with appropriate validation */}
    </form>
  );
}`;

export const i18nImplementationCode = `// Example react-i18next implementation
import { useTranslation } from 'react-i18next';

function TranslatedComponent() {
  const { t, i18n } = useTranslation();
  
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <h1>{t('welcome.title')}</h1>
      <p>{t('welcome.description')}</p>
      
      <div>
        <button onClick={() => changeLanguage('en')}>English</button>
        <button onClick={() => changeLanguage('fr')}>Français</button>
      </div>
    </div>
  );
}`;

export const installDependenciesCode = `npm install react-hook-form zod @radix-ui/react-tabs
@radix-ui/react-accordion react-paginate
@floating-ui/react sonner react-dropzone
@tanstack/react-table lucide-react framer-motion
react-i18next i18next`;
