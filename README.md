# React Boilerplate Template

A comprehensive React boilerplate template with pre-configured UI components from recommended libraries for rapid application development.

## 🚀 Overview

This template provides a collection of carefully selected UI components using best-in-class libraries for each functionality type. The component selection is based on quality, accessibility, and developer experience.

## 📋 Features

- **Modern React Stack**: Built with React 18, TypeScript, and Vite for fast development
- **Component Showcase**: Includes examples of forms, navigation, overlays, data display, media, and internationalization
- **Best Libraries**: Each component uses the recommended library for its specific use case
- **Fully Typed**: TypeScript support throughout the project
- **Responsive Design**: Mobile-first design approach with responsive components
- **Accessibility**: ARIA attributes and keyboard navigation support

## 🧩 Component Libraries

### Form Components
| Component | Library Used | Why |
|-----------|--------------|-----|
| Input (text, number) | Radix UI | Customizable, accessible, clean design |
| Textarea | Chakra UI (inspired) | Auto-resizing with good defaults |
| Checkbox | Radix UI Checkbox | Headless, accessible implementation |
| Radio Group | Radix UI | Keyboard navigation, clean design |
| Select (Dropdown) | React Aria Select | Full accessibility and i18n support |
| Combobox / Autocomplete | Downshift | Headless logic with flexible integration |
| Date Picker | React DayPicker | Support for single date, range, calendar views |
| Time Picker | react-time-picker | Simple, focused, works well |
| Color Picker | react-colorful | Small, fast, accessible implementation |
| Slider | Radix UI Slider | Accessible and highly designable |
| File Upload | react-dropzone | Flexible drag-and-drop functionality |
| Form Validation | Zod + React Hook Form | Schema-based validation with TypeScript support |

### Overlay Components
| Component | Library Used | Why |
|-----------|--------------|-----|
| Tooltip | Floating UI | Lightweight tooltip positioning with excellent customization |
| Toast Notifications | Sonner | Clean, minimal toast notifications with action support |

### Data Display
| Component | Library Used | Why |
|-----------|--------------|-----|
| Charts | Recharts | Responsive, customizable charts built on D3 |

### Media Components
| Component | Library Used | Why |
|-----------|--------------|-----|
| Video Player | ReactPlayer | Support for multiple video sources (YouTube, Vimeo, local files) |

### Internationalization
| Component | Library Used | Why |
|-----------|--------------|-----|
| i18n | react-i18next | Comprehensive internationalization support with pluralization and formatting |

### UI Framework
| Component | Library Used | Why |
|-----------|--------------|-----|
| UI Components | shadcn/ui | High-quality, accessible components built on Radix UI and Tailwind CSS |

## 📋 Form Components Implementation Details

### Input & Basic Controls (Radix UI)
- **Input**: Clean and customizable text input fields with proper accessibility attributes
- **Checkbox**: Accessible with keyboard navigation and custom styling while maintaining accessibility
- **Radio Group**: Grouped radio buttons with keyboard navigation between options
- **Slider**: Accessible slider with support for custom ranges and step values

### Rich Text Entry
- **Textarea (Chakra UI inspired)**: Auto-resizing as content grows with smooth height transitions
- **File Upload (react-dropzone)**: Drag-and-drop interface with file validation and preview capability

### Selection Components
- **Select (React Aria)**: Dropdown with full accessibility support including keyboard navigation
- **Combobox (Downshift)**: Autocomplete input with filtering and keyboard navigation
- **Date Picker (React DayPicker)**: Calendar selection with support for date ranges
- **Time Picker (react-time-picker)**: Simple and focused time selection interface
- **Color Picker (react-colorful)**: Lightweight color selection with HEX color support

### Form Management
- **Form Validation**: Integration with React Hook Form and Zod for robust form validation
- **Error Handling**: Built-in error states and validation feedback

## 💡 Form Component Best Practices

### Accessibility Best Practices
- Always use `<label>` elements properly associated with form controls
- Ensure keyboard navigation works for all interactive elements
- Provide clear focus indicators for keyboard users
- Include proper ARIA attributes where needed
- Test with screen readers to verify accessibility

### Performance Considerations
- Use controlled components only when necessary
- Implement debouncing for input fields that trigger expensive operations
- Consider memoization for complex form components 
- Lazy load heavier components like date pickers and color pickers

### Form Validation Strategy
- Use Zod schemas for type-safe validation
- Validate as close to the data source as possible
- Provide immediate feedback for validation errors
- Consider both client and server validation

## 📊 Form Component Library Comparison

This template carefully selects specific libraries for each form component based on several factors:

### Selection Criteria
- **Accessibility**: Strong accessibility support, including ARIA attributes and keyboard navigation
- **Bundle Size**: Minimal impact on application size
- **Customization**: Ability to style and extend functionality
- **Maintenance**: Active development and community support
- **Documentation**: Clear, comprehensive documentation
- **Dependencies**: Minimal external dependencies

### Why These Libraries?
- **Radix UI**: Chosen for inputs, checkbox, and radio due to its headless architecture and accessibility
- **React-Dropzone**: Selected for file uploads due to its flexible API and robust features
- **React-Colorful**: Preferred for color picking due to tiny bundle size (< 2KB) and zero dependencies
- **React DayPicker**: Chosen for date selection due to flexibility and clean design
- **Downshift**: Selected for autocomplete due to its headless nature and full control over rendering

## 🛠️ Project Structure

```
.
├── client               # Frontend React application
│   ├── src
│   │   ├── components   # UI components
│   │   │   ├── ui       # Base shadcn/ui components
│   │   │   └── ui-showcase  # Component showcase sections
│   │   ├── hooks        # Custom React hooks
│   │   ├── lib          # Utility functions
│   │   ├── pages        # Page components
│   │   └── types        # TypeScript type definitions
├── server               # Backend Express server
├── shared               # Shared code between client and server
└── drizzle.config.ts    # Database configuration
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/react-boilerplate-template.git
cd react-boilerplate-template
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser to view the application
```
http://localhost:5000
```

## 🧰 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run start` - Start the production server

## 📚 Component Showcase

The application includes a comprehensive showcase of all components categorized by type:

1. **Form Components**: Text inputs, textareas, checkboxes, radio buttons, selects, file upload, etc.
2. **Overlay Components**: Modals, tooltips powered by Floating UI, toast notifications with Sonner
3. **Data Display**: Tables, cards, badges, charts using Recharts
4. **Media Components**: Image gallery, video player using ReactPlayer
5. **Utility Components**: Icons, animations with Framer Motion
6. **Internationalization**: Language selector, formatting using react-i18next

## 🌐 Browser Support

This template is optimized for modern browsers and includes appropriate polyfills for supporting older browsers.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgements

- [shadcn/ui](https://ui.shadcn.com/) for the base component library
- [TanStack Query](https://tanstack.com/query) for data fetching
- [React Hook Form](https://react-hook-form.com/) for form handling
- [Zod](https://zod.dev/) for schema validation
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Lucide React](https://lucide.dev/) for icons
- All the component libraries featured in this template for their excellent work