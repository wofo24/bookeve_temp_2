
# Project Development Wiki

## Table of Contents
1. [Project Overview](#project-overview)
2. [Tech Stack](#tech-stack)
3. [Getting Started](#getting-started)
4. [Project Structure](#project-structure)
5. [Development Guidelines](#development-guidelines)
6. [Components](#components)
7. [Styling](#styling)
8. [Configuration](#configuration)
9. [Routing](#routing)
10. [State Management](#state-management)
11. [Testing](#testing)
12. [Performance](#performance)
13. [Security](#security)
14. [Deployment](#deployment)

## Project Overview
This is a Next.js project with TypeScript that implements a modern web application with dynamic subdomain routing. The application uses Radix UI components for accessible UI elements and Tailwind CSS for styling. The project follows component-based architecture principles and implements modern web development best practices.

### Key Features
- Dynamic subdomain routing
- Component-based architecture
- Accessible UI components
- Responsive design
- Dark/Light theme support
- Type-safe development

## Tech Stack
### Core Technologies
- Next.js 15.2.4
- React 19
- TypeScript
- Tailwind CSS
- Radix UI Components

### Development Tools
- ESLint for code quality
- PostCSS for CSS processing
- Geist font family integration
- Lucide React for icons

## Getting Started

### Prerequisites
- Node.js (Latest LTS version recommended)
- npm package manager

### Development Environment Setup
1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser to see the result
4. Start editing pages in the `pages` directory

## Project Structure
```
├── components/          # Reusable UI components
│   └── ui/
│       ├── shared/     # Shared UI components
│       └── Header.tsx  # Main header component
├── pages/              # Next.js pages and routing
│   ├── [subdomain].tsx # Dynamic subdomain handling
│   ├── _app.tsx       # App wrapper
│   └── index.tsx      # Main entry point
├── public/            # Static assets
├── styles/           # Global styles and CSS
├── utils/            # Utility functions
│   ├── icons/        # SVG icons
│   └── cn.tsx        # Class name utility
```

### Key Files Explained
- `next.config.ts`: Contains subdomain routing configuration and Next.js settings
- `tsconfig.json`: TypeScript compiler configuration with strict mode enabled
- `tailwind.config.js`: Tailwind CSS customization and theme settings
- `layout.tsx`: Root layout with Geist font configuration
- `postcss.config.mjs`: PostCSS configuration for Tailwind
- `eslint.config.mjs`: ESLint configuration for code quality

## Development Guidelines

### Code Style
1. **TypeScript**
   - Use strict mode
   - Define proper interfaces and types
   - Avoid using `any` type
   - Use type inference when possible

2. **React Best Practices**
   - Use functional components
   - Implement proper prop types
   - Use hooks effectively
   - Follow component composition patterns

3. **File Naming Conventions**
   - Components: PascalCase (e.g., `Button.tsx`)
   - Utilities: camelCase (e.g., `formatDate.ts`)
   - Pages: kebab-case (e.g., `user-profile.tsx`)

### Routing System
- Pages-based routing in `pages/` directory
- Dynamic routes using `[param].tsx` naming
- Subdomain handling via `[subdomain].tsx`
- API routes in `pages/api/`

## Components

### Shared Components
Located in `components/ui/shared/`:

#### Core Components
- **Button**: Customizable button component with variants
- **Card**: Flexible card layout component
- **Input**: Form input component with validation
- **Select**: Dropdown selection component
- **Tabs**: Tabbed interface component

#### Form Components
- **Checkbox**: Custom checkbox input
- **RadioGroup**: Radio button group
- **Label**: Form label component

#### Layout Components
- **Grid**: Grid layout system
- **Collapsible**: Expandable content section
- **Popover**: Popup content display

### Component Usage Guidelines
1. **Props Interface**
```typescript
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
}
```

2. **Component Structure**
```typescript
const Component = ({ prop1, prop2 }: ComponentProps) => {
  // State and effects
  // Component logic
  return <JSX>;
};
```

## Styling

### Tailwind Configuration
- Custom theme variables in `tailwind.css`
- Dark/Light mode support
- Custom color schemes
- Responsive design utilities

### Theme System
```css
:root {
  --background: 0 0% 100%;
  --foreground: 240 10% 3.9%;
  --card: 0 0% 100%;
  --primary: 260 97% 50%;
  /* ... other variables */
}

.dark {
  --background: 225 15% 12%;
  --foreground: 210 20% 90%;
  /* ... dark theme variables */
}
```

### CSS Best Practices
1. Use Tailwind utilities when possible
2. Create custom utilities for repeated patterns
3. Maintain consistent spacing and sizing
4. Follow mobile-first approach

## Security

### Best Practices
1. Input validation
2. XSS prevention
3. CSRF protection
4. Secure headers
5. Environment variables for sensitive data

## Performance

### Optimization Techniques
1. Image optimization
2. Code splitting
3. Dynamic imports
4. Caching strategies
5. Bundle size monitoring

## Deployment
The project can be deployed using any hosting platform that supports Next.js applications:

1. Build the project:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```

### Environment Setup
1. Configure your environment variables
2. Set up your domain and subdomains
3. Configure your web server for subdomain routing

### Post-Deployment
- Monitor application performance
- Check server logs
- Verify subdomain routing functionality
- Test all features in production
- Monitor resource usage

## Version Control
- Use meaningful commit messages
- Create feature branches
- Review code before merging
- Keep commits atomic

## Documentation
- Comment complex logic
- Document API endpoints
- Update README for major changes
- Maintain changelog

This wiki serves as a living document. Update it as the project evolves and new patterns emerge.

