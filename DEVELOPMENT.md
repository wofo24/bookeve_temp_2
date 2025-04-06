
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

## Project Overview
This is a Next.js project with TypeScript, utilizing modern UI components built with Radix UI and styled using Tailwind CSS. The project features dynamic subdomain routing and a component-based architecture.

## Tech Stack
- Next.js 15.2.4
- React 19
- TypeScript
- Tailwind CSS
- Radix UI Components
- ESLint for code quality
- PostCSS for CSS processing

## Getting Started
1. Start the development server:
```bash
npm run dev
```
2. Open your browser to see the result
3. Start editing pages in the `pages` directory

## Project Structure
```
├── components/          # Reusable UI components
├── pages/              # Next.js pages and routing
├── public/            # Static assets
├── styles/           # Global styles and CSS
├── utils/            # Utility functions and helpers
```

### Key Files
- `next.config.ts`: Configuration for subdomain routing
- `tsconfig.json`: TypeScript configuration
- `tailwind.config.js`: Tailwind CSS customization
- `layout.tsx`: Root layout with font configuration

## Development Guidelines

### Routing
- Main pages are in `pages/` directory
- Dynamic subdomain routing handled via `[subdomain].tsx`
- Custom configurations in `next.config.ts`

### Components
Located in `components/ui/shared/`:
- Button
- Card
- Checkbox
- Collapsible
- Grid
- Input
- Label
- Popover
- Radio Group
- Select
- Tabs

### Styling
- Uses Tailwind CSS with custom configuration
- Custom theme variables defined in `tailwind.css`
- Global styles in `styles/globals.css`
- Fonts: Geist Sans and Geist Mono

### Theme Configuration
Default theme variables are set in `tailwind.css`:
- Light/Dark mode support
- Custom color schemes
- Font families
- Component-specific styling

## UI Components
All shared components are built using Radix UI primitives and styled with Tailwind CSS. They provide:
- Accessibility out of the box
- Consistent styling
- Customizable variants
- Type-safe props

## Development Workflow
1. Create new components in appropriate directories
2. Follow existing component patterns
3. Use TypeScript for type safety
4. Maintain consistent styling using Tailwind utilities
5. Test changes using the development server

## Best Practices
1. Use TypeScript for all new files
2. Follow component-based architecture
3. Maintain consistent styling using Tailwind
4. Keep components modular and reusable
5. Use proper type definitions
6. Follow established naming conventions

## Deployment
The project is configured for deployment on Replit. Use the built-in deployment features to publish your changes.
