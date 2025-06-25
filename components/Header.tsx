'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Menu,
  X,
  User,
  ShoppingCart,
  Package,
  LogOut,
  MessageCircle,
  Phone,
  HelpCircle,
  UserPlus,
} from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    {
      icon: User,
      title: 'View profile',
      subtitle: 'Your personal info. & addresses',
      href: '#',
    },
    {
      icon: ShoppingCart,
      title: 'Your Cart',
      subtitle: 'View items you have added to cart',
      href: '#',
    },
    {
      icon: Package,
      title: 'Your Bookings',
      subtitle: 'View your past bookings & orders',
      href: '#',
    },
  ];

  const footerItems = [
    {
      icon: MessageCircle,
      title: 'About Us',
      href: '#',
    },
    {
      icon: Phone,
      title: 'Contact Us',
      href: '#',
    },
    {
      icon: HelpCircle,
      title: 'FAQs',
      href: '#',
    },
    {
      icon: UserPlus,
      title: 'Create Bookeve profile',
      href: '#',
    },
  ];

  return (
    <header className='relative w-full h-48 md:h-64 overflow-visible'>
      {/* Background Image Layer */}
      <div className='absolute inset-0 -z-10 overflow-hidden'>
        <Image
          src='/bg.png'
          layout='fill'
          objectFit='cover'
          alt='Background Image'
        />
      </div>

      {/* Blurred Navbar Container */}
      <div className='relative w-full flex justify-between items-center p-4 bg-white/30 backdrop-blur-lg shadow-md rounded-lg'>
        {/* Logo */}
        <Link href='/'>
          <Image src='/logo.png' alt='Bookeve Logo' width={117} height={32} />
        </Link>

        <div>
          <div className='relative'>
            <Button
              className='focus:outline-none'
              onClick={() => setIsOpen(!isOpen)}
            >
              <Menu />
            </Button>

            {isOpen && (
              <>
                {/* Backdrop */}
                <div
                  className='fixed inset-0 bg-black/20 z-40'
                  onClick={() => setIsOpen(false)}
                />
                {/* Menu */}
                <div className='absolute top-full left-0 w-full max-w-sm bg-white shadow-lg border border-gray-200 rounded-b-lg z-50 max-h-[calc(100vh-200px)] overflow-hidden'>
                  <div className='flex flex-col h-full'>
                    {/* Header */}
                    <div className='p-6 pb-4 border-b border-gray-100 flex-shrink-0'>
                      <div className='flex items-center justify-between mb-4'>
                        <Button
                          variant='ghost'
                          size='icon'
                          onClick={() => setIsOpen(false)}
                          className='h-8 w-8 rounded-full'
                        >
                          <X className='h-4 w-4' />
                        </Button>
                      </div>

                      <div className='space-y-1'>
                        <h2 className='text-xl font-semibold text-gray-900'>
                          Hey Anusha 👋
                        </h2>
                        <p className='text-sm text-gray-600'>+91 9876543210</p>
                      </div>
                    </div>

                    {/* Main Menu Items */}
                    <div className='flex-1 px-6 overflow-y-auto'>
                      <div className='space-y-1 py-4'>
                        {menuItems.map((item, index) => (
                          <a
                            key={index}
                            href={item.href}
                            className='flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors'
                          >
                            <item.icon className='h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0' />
                            <div className='space-y-1'>
                              <p className='font-medium text-gray-900'>
                                {item.title}
                              </p>
                              <p className='text-sm text-gray-600'>
                                {item.subtitle}
                              </p>
                            </div>
                          </a>
                        ))}
                      </div>

                      {/* Log out */}
                      <div className='mt-4 pb-4'>
                        <a
                          href='#'
                          className='flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors'
                        >
                          <LogOut className='h-5 w-5 text-gray-600' />
                          <span className='font-medium text-gray-900'>
                            Log out
                          </span>
                        </a>
                      </div>
                    </div>

                    {/* Footer */}
                    <div className='p-6 pt-4 border-t border-gray-100 flex-shrink-0'>
                      {/* Logo */}
                      <div className='mb-6'>
                        <div className='inline-flex items-center gap-1 px-3 py-1.5 bg-purple-600 rounded-full'>
                          <span className='text-white font-semibold text-sm'>
                            book
                          </span>
                          <span className='text-white font-semibold text-sm bg-purple-500 px-2 py-0.5 rounded-full'>
                            eve
                          </span>
                        </div>
                      </div>

                      {/* Footer Links */}
                      <div className='space-y-1'>
                        {footerItems.map((item, index) => (
                          <a
                            key={index}
                            href={item.href}
                            className='flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors'
                          >
                            <item.icon className='h-4 w-4 text-purple-600' />
                            <span className='text-sm font-medium text-gray-900'>
                              {item.title}
                            </span>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
