import React, { useState, useEffect } from "react";
import { cn } from "../../../utils/cn";

interface BottomDrawerProps {
    isOpen?: boolean;
    onClose?: () => void;
    onBack?: () => void;
    step?: number;
    children: React.ReactNode;
    className?: string;
    autoOpenInterval?: number;
}

const BottomDrawer: React.FC<BottomDrawerProps> = ({
    isOpen: externalIsOpen,
    onClose,
    onBack,
    step = 1,
    children,
    className,
    autoOpenInterval = 5000,
}) => {
    const [internalIsOpen, setInternalIsOpen] = useState(false);
    const isOpen = externalIsOpen !== undefined ? externalIsOpen : internalIsOpen;

    useEffect(() => {
        if (autoOpenInterval > 0 && externalIsOpen === undefined) {
            setInternalIsOpen(true);
            const initialCloseTimeoutId = setTimeout(() => {
                onClose ? onClose() : setInternalIsOpen(false);
            }, 3000);

            const intervalId = setInterval(() => {
                setInternalIsOpen(true);
            }, autoOpenInterval);

            const closeIntervalId = setInterval(() => {
                onClose ? onClose() : setInternalIsOpen(false);
            }, autoOpenInterval + 3000);

            return () => {
                clearTimeout(initialCloseTimeoutId);
                clearInterval(intervalId);
                clearInterval(closeIntervalId);
            };
        }
    }, [autoOpenInterval, onClose, externalIsOpen]);

    const handleClose = () => {
        onClose ? onClose() : setInternalIsOpen(false);
    };

    return (
        <div className="relative z-50 w-full max-w-screen min-w-sm mx-auto">
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/25 transition-opacity duration-300"
                    onClick={handleClose}
                />
            )}

            <div
                className={cn(
                    "fixed bottom-0 left-0 right-0 z-50 mx-auto transform transition-transform duration-300 ease-in-out max-w-sm w-full",
                    isOpen ? "translate-y-0" : "translate-y-full",
                    className
                )}
            >
                {/* Positioning the button to float over the drawer */}
                <div
                    className="absolute -top-8 left-0 right-0 flex justify-center"
                    style={{ transform: 'translateY(-50%)' }}
                >
                    {step >= 2 ? (
                        <button
                            onClick={onBack}
                            className="bg-white rounded-full shadow-lg w-12 h-12 flex items-center justify-start hover:shadow-xl transition-shadow"
                            aria-label="Back"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 12H5" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M12 19L5 12L12 5" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    ) : (
                        <button
                            onClick={handleClose}
                            className="bg-white rounded-full shadow-lg w-12 h-12 flex items-center justify-center text-3xl hover:shadow-xl transition-shadow"
                            aria-label="Close"
                        >
                            ×
                        </button>
                    )}
                </div>

                {/* Drawer content */}
                <div className="bg-white rounded-t-xl shadow-lg max-h-[80vh] overflow-auto">
                    <div className="px-4 pb-6 pt-8">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export { BottomDrawer };