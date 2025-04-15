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
| File Upload | react-dropzone | Flexible drag-and-drop functionality with excellent customization |
| Form Validation | Zod + React Hook Form | Schema-based validation with excellent TypeScript support |

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