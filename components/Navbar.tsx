import Link from 'next/link';
import MobileMenu from './MobileMenu';
import { Button } from './ui/shared/button';
import Image from 'next/image';

export default function Navbar() {
  return (
    <div className='fixed top-4 left-0 right-0 z-50 flex justify-center'>
      <div className='w-full max-w-7xl px-4'>
        <div className='flex h-16 items-center justify-between rounded-full border border-gray-100 bg-white px-6 shadow-sm'>
          <div className='flex items-center'>
            <Link href='/' className='flex items-center'>
              <Image src='/logo.png' alt='Bookeve Logo'  width={117} height={32}/>
            </Link>
          </div>

          <nav className='hidden md:flex items-center space-x-8'>
            <Link
              href='/'
              className='text-sm font-semibold text-gray-800 hover:text-purple-600'
            >
              Home
            </Link>
            <Link
              href='/features'
              className='text-sm font-semibold text-gray-800 hover:text-purple-600'
            >
              Features
            </Link>
            <Link
              href='/testimonials'
              className='text-sm font-semibold text-gray-800 hover:text-purple-600'
            >
              Testimonials
            </Link>
            <Link
              href='/faqs'
              className='text-sm font-semibold text-gray-800 hover:text-purple-600'
            >
              FAQs
            </Link>
          </nav>

          <div className='hidden md:block'>
            <Button className='rounded-full font-semibold bg-purple-600 hover:bg-purple-700'>
              Create Bookeve Profile
            </Button>
          </div>

          <MobileMenu />
        </div>
      </div>
    </div>
  );
}
