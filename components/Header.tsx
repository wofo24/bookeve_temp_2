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
  UserPlus,
} from 'lucide-react';
import Image from 'next/image';

export default function Component() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='mb-32 bg-gray-50'>
      <div className='max-w-md mx-auto bg-white'>
        {/* Header */}
        <header className='flex items-center justify-between p-4 bg-white border-b border-gray-200'>
          {/* Logo */}
          <div className='flex items-center'>
            <Image
              src='/logo.png?height=40&width=120'
              alt='Logo'
              width={120}
              height={40}
              className='h-8 w-auto'
            />
          </div>

          {/* Menu Button */}
          <Drawer open={isOpen} onOpenChange={setIsOpen} direction='right'>
            <DrawerTrigger asChild>
              <Button variant='ghost' size='icon' className='h-10 w-10'>
                <Menu className='h-6 w-6 text-gray-600' />
                <span className='sr-only'>Open menu</span>
              </Button>
            </DrawerTrigger>

            <DrawerContent className='h-full w-full max-w-md ml-auto bg-white text-black'>
              <div className='flex flex-col h-full'>
                {/* Header Section */}
                <DrawerHeader className='p-4 pb-6 border-b'>
                  <div className='flex items-center'>
                    <div>
                      <DrawerTitle className='text-xl font-semibold text-left text-black'>
                        Hey there 👋
                      </DrawerTitle>
                      <p className='text-sm text-gray-600 mt-1'>
                        You have not logged in yet
                      </p>
                    </div>
                  </div>
                </DrawerHeader>

                {/* Menu Items - keep the same content */}
                <div className='flex-1 py-4 overflow-y-auto'>
                  {/* Profile Section */}
                  <div className='px-4 mb-6'>
                    <div className='flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer'>
                      <User className='h-5 w-5 text-gray-600' />
                      <div>
                        <p className='font-medium'>View profile</p>
                        <p className='text-sm text-gray-500'>
                          Your personal info. & addresses
                        </p>
                      </div>
                    </div>

                    <div className='flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer'>
                      <ShoppingCart className='h-5 w-5 text-gray-600' />
                      <div>
                        <p className='font-medium'>Your Cart</p>
                        <p className='text-sm text-gray-500'>
                          View items you have added to cart
                        </p>
                      </div>
                    </div>

                    <div className='flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer'>
                      <Package className='h-5 w-5 text-gray-600' />
                      <div>
                        <p className='font-medium'>Your Bookings</p>
                        <p className='text-sm text-gray-500'>
                          View your past bookings & orders
                        </p>
                      </div>
                    </div>

                    <div className='flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer'>
                      <LogOut className='h-5 w-5 text-gray-600' />
                      <div>
                        <p className='font-medium'>Log out</p>
                      </div>
                    </div>
                  </div>

                  {/* Bookeve Logo */}
                  <div className='px-4 mb-6'>
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
                  <div className='px-4 space-y-2'>
                    <div className='flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer'>
                      <MessageCircle className='h-5 w-5 text-purple-600' />
                      <p className='font-medium'>About Us</p>
                    </div>

                    <div className='flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer'>
                      <Phone className='h-5 w-5 text-purple-600' />
                      <p className='font-medium'>Contact Us</p>
                    </div>

                    <div className='flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer'>
                      <HelpCircle className='h-5 w-5 text-purple-600' />
                      <p className='font-medium'>FAQs</p>
                    </div>

                    <div className='flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer'>
                      <UserPlus className='h-5 w-5 text-purple-600' />
                      <p className='font-medium'>Create Bookeve profile</p>
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
