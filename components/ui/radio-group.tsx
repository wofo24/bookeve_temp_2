import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { Circle } from "lucide-react";

import { cn } from "../.././utils/cn";

// RadioGroup component
const RadioGroup = React.forwardRef<
    React.ElementRef<typeof RadioGroupPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => (
    <RadioGroupPrimitive.Root
        ref={ref}
        className={cn(
            "flex flex-col rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
            className
        )}
        {...props}
    />
));
RadioGroup.displayName = "RadioGroup";

// RadioGroupItem component with adjusted styles
const RadioGroupItem = React.forwardRef<
    React.ElementRef<typeof RadioGroupPrimitive.Item>,
    React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(
    ({ className, children, ...props }, ref) => (
        <RadioGroupPrimitive.Item
            ref={ref}
            className={cn(
                "flex cursor-default select-none items-center rounded-sm py-1.5 pr-2 p-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
                className
            )}
            {...props}
        >
            <span className="relative flex h-4 w-4 items-center justify-center rounded-full border border-primary">
                <RadioGroupPrimitive.Indicator className="absolute inset-0 flex items-center justify-center">
                    {props['data-state'] === 'checked' ? (
                        <span className="w-4 h-4 rounded-full border border-primary" />
                    ) : (
                        <Circle className="h-2 w-2 fill-primary" />
                    )}
                </RadioGroupPrimitive.Indicator>
            </span>
            {children}
        </RadioGroupPrimitive.Item>
    )
);
RadioGroupItem.displayName = "RadioGroupItem";

// Updated RadioGroupIndicator component with adjusted styles
const RadioGroupIndicator = React.forwardRef<
    React.ElementRef<typeof RadioGroupPrimitive.Indicator>,
    React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Indicator>
>(({ className, ...props }, ref) => (
    <RadioGroupPrimitive.Indicator
        ref={ref}
        className={cn("absolute inset-0 w-4 h-4 rounded-full border border-primary flex items-center justify-center", className)}
        {...props}
    >
        <Circle className="w-2 h-2 fill-primary" />
    </RadioGroupPrimitive.Indicator>
));
RadioGroupIndicator.displayName = "RadioGroupIndicator";

export { RadioGroup, RadioGroupItem, RadioGroupIndicator };
