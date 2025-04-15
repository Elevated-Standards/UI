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

### Form Management
| Component | Library Used | Why |
|-----------|--------------|-----|
| Forms | React Hook Form | Great performance, validation, DX |
| Form Builder | FormKit (WIP React) | GUI builder for dynamic forms |

### Navigation & Layout
| Component | Library Used | Why |
|-----------|--------------|-----|
| Tabs | Radix UI Tabs | Keyboard a11y, easy state handling |
| Accordion | Radix UI Accordion | Clean, accessible |
| Breadcrumbs | Chakra UI | Quick theming |
| Pagination | react-paginate | Lightweight and flexible |
| Sidebar/Drawer | Radix UI / Headless | Smooth animations, full control |
| Menu (Dropdown) | Radix UI / Headless UI | Accessible menus with full control |

### Overlay Components
| Component | Library Used | Why |
|-----------|--------------|-----|
| Modal / Dialog | Radix UI Dialog | Keyboard traps, animations, accessible |
| Popover | Floating UI | Complex interactions supported |
| Alert Dialog | Radix UI AlertDialog | Full a11y handling |
| Context Menu | Radix UI ContextMenu | Custom right-click menus |
| Tooltip | Floating UI | Lightweight tooltip positioning with excellent customization |
| Toast Notifications | Sonner | Clean, minimal toast notifications with action support |

### Data Display
| Component | Library Used | Why |
|-----------|--------------|-----|
| Table | TanStack Table | Best-in-class logic and performance |
| Data Grid | AG Grid | Excel-like powerful grid |
| List (Virtual) | react-virtual | Virtual scrolling for massive data |
| Charts | Recharts | Responsive, customizable charts built on D3 |
| Badge / Pill | ShadCN | Easy styling |
| Avatar | Radix UI | Graceful fallback support |
| Card | ShadCN | Great base structure |
| Timeline | react-vertical-timeline | Visual storytelling or activity feeds |

### Media Components
| Component | Library Used | Why |
|-----------|--------------|-----|
| Video Player | ReactPlayer | Support for multiple video sources (YouTube, Vimeo, local files) |

### Utilities & Helpers
| Component | Library Used | Why |
|-----------|--------------|-----|
| Icons | Lucide | Modern SVG icons |
| Animations | Framer Motion | Most elegant animation API in React |
| Skeleton Loader | Chakra UI | Graceful loading states |
| Theming | NextThemes | Easy toggling and dark/light theme state |

### Internationalization
| Component | Library Used | Why |
|-----------|--------------|-----|
| i18n | react-i18next | Comprehensive internationalization support with pluralization and formatting |

### UI Framework
| Component | Library Used | Why |
|-----------|--------------|-----|
| UI Components | shadcn/ui | High-quality, accessible components built on Radix UI and Tailwind CSS |

## 📋 Components Implementation Details

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

### Navigation Components
- **Tabs (Radix UI)**: Accessible tab interfaces with keyboard navigation
- **Accordion (Radix UI)**: Collapsible content sections with smooth animations
- **Breadcrumbs**: Clear navigation path with customizable separators
- **Pagination (react-paginate)**: Flexible pagination with customizable styling
- **Sidebar/Drawer**: Collapsible navigation with smooth animations
- **Dropdown Menus**: Hierarchical navigation with accessibility support

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

## 🧭 Navigation Component Best Practices

### Layout Considerations
- Design responsive navigation that adapts to different screen sizes
- Implement mobile-friendly patterns like hamburger menus on small screens
- Ensure consistent positioning and behavior across the application
- Consider the navigation depth and breadth when choosing components

### Accessibility Guidelines
- Ensure all navigation elements are keyboard accessible
- Use proper ARIA roles and attributes for navigation elements
- Provide clear focus indicators for keyboard navigation
- Make sure dropdown menus can be operated with keyboard alone

### Performance Tips
- Use code-splitting for navigation-heavy applications
- Avoid complex animation effects that may impact performance
- Consider lazy-loading navigation elements not visible on initial render

## 📊 Form Component Library Comparison

This template carefully selects specific libraries for each form component based on several factors:

### Selection Criteria
- **Accessibility**: Strong accessibility support, including ARIA attributes and keyboard navigation
- **Bundle Size**: Minimal impact on application size
- **Customization**: Ability to style and extend functionality
- **Maintenance**: Active development and community support
- **Documentation**: Clear, comprehensive documentation
- **Dependencies**: Minimal external dependencies

### Why These Form Libraries?
- **Radix UI**: Chosen for inputs, checkbox, and radio due to its headless architecture and accessibility
- **React-Dropzone**: Selected for file uploads due to its flexible API and robust features
- **React-Colorful**: Preferred for color picking due to tiny bundle size (< 2KB) and zero dependencies
- **React DayPicker**: Chosen for date selection due to flexibility and clean design
- **Downshift**: Selected for autocomplete due to its headless nature and full control over rendering

### Why These Navigation Libraries?
- **Radix UI Tabs/Accordion**: Selected for their strong accessibility support and clean design
- **Chakra UI Breadcrumbs**: Chosen for easy theming and configuration
- **react-paginate**: Preferred for its flexibility and lightweight implementation
- **Radix UI Dropdown**: Selected for complete keyboard navigation and reliable positioning

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
2. **Navigation & Layout**: Tabs, accordion, breadcrumbs, pagination, sidebar/drawer, dropdown menus
3. **Overlay Components**: Modals, tooltips powered by Floating UI, toast notifications with Sonner
4. **Data Display**: Tables, cards, badges, charts using Recharts
5. **Media Components**: Image gallery, video player using ReactPlayer
6. **Utility Components**: Icons, animations with Framer Motion
7. **Internationalization**: Language selector, formatting using react-i18next
8. **Form Management**: Full form system built with React Hook Form and Zod validation

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