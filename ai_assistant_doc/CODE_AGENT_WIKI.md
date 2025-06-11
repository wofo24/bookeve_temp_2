
# Code Agent Wiki

## Overview
This wiki serves as a comprehensive guide for AI code agents working on this Next.js project with TypeScript, Radix UI, and Tailwind CSS.

## Current Development Stack
- Next.js 15.2.4
- React 19
- TypeScript
- Radix UI Components
- Tailwind CSS
- ESLint
- PostCSS

## Project Structure Guide
```
components/ui/shared/    # Reusable Radix UI components
pages/                  # Next.js routing and pages
utils/                  # Helper functions
styles/                # Global styling and Tailwind
```

## Component Development Standards

### Base Component Structure
```typescript
interface ComponentProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

const Component: React.FC<ComponentProps> = ({
  variant = 'primary',
  children
}) => {
  return (
    <div className={cn(
      "base-styles",
      variant === "primary" && "primary-styles"
    )}>
      {children}
    </div>
  );
};
```

### Styling Patterns
1. **Tailwind Usage**
```typescript
className={cn(
  "text-gray-800 font-medium",
  variant === "primary" && "bg-blue-500 text-white",
  className
)}
```

2. **Theme Variables**
```css
:root {
  --background: #ffffff;
  --foreground: #171717;
}
```

### Type Safety Requirements
- Use strict TypeScript configurations
- Define explicit interfaces for all props
- Avoid any type
- Use union types for variants

### Component Library Usage
1. **Radix UI Integration**
```typescript
import * as Checkbox from '@radix-ui/react-checkbox';
import * as Tabs from '@radix-ui/react-tabs';
```

2. **Custom Components**
- Button
- Card
- Input
- Select
- Tabs
- Popover

## Code Generation Patterns

### Page Template
```typescript
import type { NextPage } from 'next';

const Page: NextPage = () => {
  return (
    <main className="container mx-auto px-4">
      {/* Content */}
    </main>
  );
};

export default Page;
```

### Component Template
```typescript
import { cn } from '@/utils/cn';

interface Props {
  className?: string;
}

export const Component = ({ className }: Props) => {
  return (
    <div className={cn("default-styles", className)}>
      {/* Content */}
    </div>
  );
};
```

## Testing Approach
```typescript
describe('Component', () => {
  it('renders correctly', () => {
    render(<Component />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
```

## Error Handling
```typescript
try {
  // Operation
} catch (error) {
  if (error instanceof TypeError) {
    console.error('Type error:', error.message);
  }
  // Handle error appropriately
}
```

## Performance Optimization
1. **Code Splitting**
```typescript
const DynamicComponent = dynamic(() => import('./Component'));
```

2. **Image Optimization**
```typescript
import Image from 'next/image';

<Image
  src="/image.jpg"
  width={500}
  height={300}
  alt="Description"
  loading="lazy"
/>
```

## Security Practices
1. **Input Validation**
```typescript
const validateInput = (input: unknown): boolean => {
  if (typeof input !== 'string') return false;
  return input.length > 0 && input.length < 100;
};
```

2. **XSS Prevention**
- Use Next.js built-in XSS protection
- Sanitize user inputs
- Avoid dangerouslySetInnerHTML

## Deployment Configuration
```typescript
// next.config.ts
const config = {
  output: 'standalone',
  images: {
    domains: ['assets.example.com'],
  },
};

export default config;
```
