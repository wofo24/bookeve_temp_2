'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import {
  Menu,
  User,
  ShoppingCart,
  Package,
  LogOut,
  MessageCircle,
  Phone,
  HelpCircle,
  ExternalLink,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Component() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='mb-24 '>
      <div className='max-w-md mx-auto'>
        {/* Header */}
        <header className='flex items-center justify-between p-4 border-b border-gray-200 backdrop-blur-lg'>
          {/* Logo */}
          <div className='flex items-center'>
            <Link href='/'>
              <Image
                src='/logo.png?height=40&width=120'
                alt='Logo'
                width={120}
                height={40}
                className='h-8 w-auto'
              />
            </Link>
          </div>

          {/* Menu Button */}
          <Drawer open={isOpen} onOpenChange={setIsOpen} direction='right'>
            <DrawerTrigger asChild>
              <Button variant='ghost' className='h-10 w-10 cursor-pointer'>
                <Menu className='h-6 w-6 text-gray-800' />
                <span className='sr-only'>Open menu</span>
              </Button>
            </DrawerTrigger>

            <DrawerContent className='h-full w-full max-w-sm ml-auto bg-white text-black'>
              <div className='flex flex-col h-full'>
                {/* Header Section */}
                <DrawerHeader className='p-4 pb-6 '>
                  <div className='flex items-center'>
                    <div>
                      <DrawerTitle className='text-xl font-semibold text-left text-black'>
                        Hey there 👋
                      </DrawerTitle>
                      <p className='text-sm text-gray-600 mt-1'>
                        You have not logged in yet
                      </p>
                      <button className='py-4 px-22 rounded-2xl bg-purple-600 text-white text-xl mt-4 font-bold'>
                        Login
                      </button>
                    </div>
                  </div>
                </DrawerHeader>

                {/* Menu Items - keep the same content */}
                <div className='flex-1 py-3 overflow-y-auto'>
                  {/* Profile Section */}
                  <div className='mb-6'>
                    <div className='flex items-center gap-3 p-3 border-b border-t border-gray-200'>
                      <User className='h-5 w-5 text-gray-600' />
                      <div>
                        <p className='font-medium'>View profile</p>
                        <p className='text-xs text-gray-500'>
                          Your personal info. & addresses
                        </p>
                      </div>
                    </div>

                    <div className='flex items-center gap-3 p-3 border-b border-gray-200 cursor-pointer'>
                      <ShoppingCart className='h-5 w-5 text-gray-600' />
                      <div>
                        <p className='font-medium'>Your Cart</p>
                        <p className='text-xs text-gray-500'>
                          View items you have added to cart
                        </p>
                      </div>
                    </div>

                    <div className='flex items-center gap-3 p-3 border-b border-gray-200 cursor-pointer'>
                      <Package className='h-5 w-5 text-gray-600' />
                      <div>
                        <p className='font-medium'>Your Bookings</p>
                        <p className='text-xs text-gray-500'>
                          View your past bookings & orders
                        </p>
                      </div>
                    </div>

                    <div className='flex items-center gap-3 p-3 border-b border-gray-200 cursor-pointer'>
                      <LogOut className='h-5 w-5 text-gray-600' />
                      <div>
                        <p className='font-medium text-gray-500'>Log out</p>
                      </div>
                    </div>
                  </div>

                  {/* Bookeve Logo */}
                  <div className='px-4 mt-10  border-b border-gray-200'>
                    <div className='bg-white text-white px-4 py-2 rounded-lg inline-block'>
                      <Image
                        src='/logo.png?height=40&width=120'
                        alt='Logo'
                        width={120}
                        height={40}
                        className='h-8 w-auto'
                      />
                    </div>
                  </div>

                  {/* Bottom Menu Items */}
                  <div className='space-y-2'>
                    <div className='flex items-center gap-3 p-3 border-b border-gray-200 cursor-pointer'>
                      <MessageCircle className='h-5 w-5 ' />
                      <p className='font-medium'>About Us</p>
                    </div>

                    <div className='flex items-center gap-3 p-3 border-b border-gray-200 cursor-pointer'>
                      <Phone className='h-5 w-5 ' />
                      <p className='font-medium'>Contact Us</p>
                    </div>

                    <div className='flex items-center gap-3 p-3 border-b border-gray-200 cursor-pointer'>
                      <HelpCircle className='h-5 w-5 ' />
                      <p className='font-medium'>FAQs</p>
                    </div>

                    <div className='flex items-center gap-3 p-3 cursor-pointer'>
                      <p className='font-medium text-sm'>
                        Create your Bookeve page
                      </p>
                      <ExternalLink />
                    </div>
                  </div>
                </div>
              </div>
            </DrawerContent>
          </Drawer>
        </header>
      </div>
    </div>
  );
}
