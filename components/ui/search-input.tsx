import * as React from "react";
import { Search } from "lucide-react";
import { cn } from "../.././utils/cn";
import { Input } from "./input";

interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    onSearch?: (value: string) => void;
}

const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(
    ({ className, onSearch, ...props }, ref) => {
        const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === "Enter" && onSearch) {
                onSearch((e.target as HTMLInputElement).value);
            }
        };

        return (
            <div className="relative w-full flex items-center">
                <Search
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[rgba(34,37,51,1)] h-[18px] w-[18px] pointer-events-none"
                />
                <Input
                    ref={ref}
                    className={cn(
                        "pl-10", // Add left padding to accommodate the icon
                        className
                    )}
                    onKeyDown={handleKeyDown}
                    {...props}
                />
            </div>
        );
    }
);

SearchInput.displayName = "SearchInput";

export { SearchInput };