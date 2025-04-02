import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="relative w-full max-w-sm mx-auto h-48 md:h-64">
            {/* Background Image Layer */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <Image src="/bg.png" layout="fill" objectFit="cover" alt="Background Image" />
            </div>

            {/* Blurred Navbar Container */}
            <div className="relative w-full flex justify-between items-center p-4 bg-white/30 backdrop-blur-lg shadow-md rounded-lg">
                {/* Logo */}
                <Link href="/">
                    <span className="text-2xl font-bold text-gray-800">Bookeve</span>
                </Link>

                {/* Mobile Hamburger Menu */}
                <div className="">
                    <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="absolute top-full w-full bg-white shadow-md p-4 space-y-2 rounded-lg z-10">
                    <Link href="/akanksha" className="block text-gray-700 hover:text-blue-500">Profile</Link>
                    <Link href="#" className="block text-gray-700 hover:text-blue-500">Services</Link>
                    <Link href="#" className="block text-gray-700 hover:text-blue-500">Contact</Link>
                </div>
            )}
        </header>
    );
}
