import React, { useState } from "react";
import { BottomDrawer } from "../components/ui/shared/bottom-drawer";

export default function DrawerDemo() {
    const [manualOpen, setManualOpen] = useState(false);

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
            <h1 className="text-2xl font-bold mb-6">Bottom Drawer Demo</h1>
            <p className="mb-4 text-center max-w-md">
                This drawer automatically opens every 5 seconds. You can also manually control it with the button below.
            </p>

            <button
                onClick={() => setManualOpen(true)}
                className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition-colors"
            >
                Open Drawer Manually
            </button>

            {/* Auto-opening drawer */}
            <BottomDrawer
                isOpen={manualOpen}
                onClose={() => setManualOpen(false)}
                autoOpenInterval={5000}
            >
                <div className="py-4">
                    <h2 className="text-xl font-semibold mb-4">Where would you like to take the service?</h2>

                    <div className="space-y-3">
                        <div className="border rounded-lg p-3 flex items-center justify-between">
                            <div className="flex items-center">
                                <div className="bg-gray-100 p-2 rounded-full mr-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <span>At my location</span>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                            </svg>
                        </div>

                        <div className="border rounded-lg p-3 flex items-center justify-between">
                            <div className="flex items-center">
                                <div className="bg-gray-100 p-2 rounded-full mr-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10.496 2.132a1 1 0 00-.992 0l-7 4A1 1 0 003 8v7a1 1 0 001 1h12a1 1 0 001-1V8a1 1 0 00.496-1.868l-7-4zM6 9a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1zm3 1a1 1 0 012 0v3a1 1 0 11-2 0v-3zm5-1a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div>
                                    <div>At Salon</div>
                                    <div className="text-sm text-gray-500">9 Myrtle Lane Richmond Town, Bengaluru, KA</div>
                                </div>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>

                    <div className="mt-6 flex justify-center">
                        <div className="w-16 h-1 bg-gray-300 rounded-full" />
                    </div>
                </div>
            </BottomDrawer>
        </div>
    );
}
