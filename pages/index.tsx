import Link from "next/link";
import { Button } from "../components/ui/shared/button";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
            <h1 className="text-3xl font-bold text-gray-800">Bookeve</h1>
            <p className="text-lg text-gray-600 mt-2">Click below to see Artist's Page</p>
            <Link href="/testDomain" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg">
                Open Artist's Page
            </Link>
        </div>
    );
}
