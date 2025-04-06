
# AI Code Assistant & Project Manager Wiki

## Table of Contents
1. [Project Context](#project-context)
2. [Code Architecture](#code-architecture)
3. [Component Guidelines](#component-guidelines)
4. [Task Management](#task-management)
5. [Code Generation Rules](#code-generation-rules)
6. [Project Management Guidelines](#project-management-guidelines)

## Project Context

### Application Overview
- **Type**: Next.js web application
- **Core Purpose**: Dynamic subdomain-based service platform
- **Architecture**: Component-based with TypeScript
- **UI Framework**: Radix UI + Tailwind CSS

### Key Technical Considerations
- Strict TypeScript implementation
- Server-side rendering with Next.js
- Dynamic routing via subdomains
- Accessible component design
- Responsive UI implementation

## Code Architecture

### Directory Structure Significance
```
components/ui/shared/    # Reusable UI components with Radix
pages/                  # Next.js routing and pages
utils/                  # Helper functions and utilities
styles/                # Global styling and Tailwind
```

### Component Patterns
1. **Atomic Design Structure**
   - Atoms: Basic UI elements (Button, Input)
   - Molecules: Combined elements (SearchInput, RadioGroup)
   - Organisms: Complex components (Header, Forms)

2. **Component Template**
```typescript
interface ComponentProps {
  // Required props
  required: string;
  // Optional props with specific types
  optional?: 'value1' | 'value2';
}

const Component: React.FC<ComponentProps> = ({
  required,
  optional = 'value1'
}) => {
  return (
    // JSX implementation
  );
};
```

## Code Generation Rules

### TypeScript Standards
1. **Type Definitions**
   ```typescript
   // Prefer interfaces for object types
   interface UserData {
     id: string;
     name: string;
     role?: UserRole;
   }

   // Use type for unions/intersections
   type UserRole = 'admin' | 'user' | 'guest';
   ```

2. **Component Props**
   ```typescript
   // Always define prop interfaces
   interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
     variant?: 'primary' | 'secondary';
     size?: 'sm' | 'md' | 'lg';
   }
   ```

### Styling Guidelines
1. **Tailwind Usage**
   ```typescript
   // Correct pattern
   className={cn(
     "base-styles",
     variant === "primary" && "primary-styles",
     className
   )}
   ```

2. **Component Variants**
   - Use class-variance-authority for variants
   - Maintain consistent spacing units
   - Follow design system tokens

### Error Handling
```typescript
try {
  // Operation
} catch (error) {
  if (error instanceof TypeError) {
    // Type specific handling
  }
  // Log and handle error appropriately
}
```

## Project Management Guidelines

### Task Creation Framework
1. **Task Structure**
   ```markdown
   ## Task Title
   Priority: [High/Medium/Low]
   Effort: [Story Points/Time Estimate]
   Dependencies: [List of dependent tasks]

   ### Objective
   Clear description of the task goal

   ### Technical Requirements
   - Specific technical requirements
   - Architecture considerations
   - Performance criteria

   ### Acceptance Criteria
   - [ ] Criterion 1
   - [ ] Criterion 2
   ```

2. **Priority Levels**
   - **P0**: Critical path, blocking issues
   - **P1**: Core functionality
   - **P2**: Important features
   - **P3**: Nice to have

### Sprint Planning Guide
1. **Sprint Structure**
   - 2-week iterations
   - Story point capacity based on team velocity
   - Buffer for unexpected issues

2. **Task Breakdown**
   - Break features into manageable tasks
   - Maximum task size: 8 story points
   - Include testing requirements

### Code Review Checklist
- [ ] TypeScript types are properly defined
- [ ] Component follows established patterns
- [ ] Proper error handling implemented
- [ ] Tests are included
- [ ] Documentation is updated
- [ ] Performance implications considered

## Implementation Guide

### New Feature Implementation
1. **Planning Phase**
   - Define component interface
   - Identify reusable components
   - Plan state management
   - Consider performance implications

2. **Development Phase**
   - Follow TypeScript patterns
   - Implement error handling
   - Add necessary comments
   - Write tests

3. **Review Phase**
   - Self-review against checklist
   - Peer review
   - Update documentation

### Testing Requirements
1. **Component Testing**
   ```typescript
   describe('Component', () => {
     it('should render correctly', () => {
       // Test implementation
     });

     it('should handle user interactions', () => {
       // Interaction tests
     });
   });
   ```

2. **Integration Testing**
   - Test component interactions
   - Verify data flow
   - Check error scenarios

## Performance Considerations

### Code Optimization
1. **Bundle Size**
   - Use dynamic imports
   - Optimize dependencies
   - Implement code splitting

2. **Runtime Performance**
   - Memoize expensive computations
   - Optimize re-renders
   - Use proper React hooks

### Monitoring Points
- Bundle size metrics
- Component render times
- API response times
- Memory usage
- User interactions

## Security Guidelines

### Implementation Security
1. **Input Validation**
   ```typescript
   // Always validate user inputs
   const validateInput = (input: unknown): boolean => {
     // Validation logic
   };
   ```

2. **Data Handling**
   - Sanitize user inputs
   - Encrypt sensitive data
   - Use proper authentication
   - Implement rate limiting

## Maintenance Guidelines

### Code Maintenance
1. **Regular Updates**
   - Dependency updates
   - Security patches
   - Performance optimizations

2. **Documentation**
   - Keep README updated
   - Document API changes
   - Update component documentation

### Technical Debt
- Track technical debt items
- Plan regular refactoring
- Document workarounds
- Schedule improvements

This wiki serves as a comprehensive guide for both AI code assistants and project managers. It provides the necessary context for generating consistent, high-quality code and creating well-structured tasks that align with the project's architecture and goals.
