import { ArrowRight, Play } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className='relative w-full overflow-hidden py-12 md:py-24 mt-20'>
      {/* Floating icons */}
      <div className='absolute inset-0 pointer-events-none'>
        <div className='absolute top-[5%] left-[10%] animate-float'>
          <Image src='/1.png' alt='logo' width={87} height={86} />
        </div>
        <div className='absolute top-[8%] right-[10%] animate-float delay-300'>
          <Image src='/2.png' alt='logo' width={86} height={86} />
        </div>
        <div className='absolute top-[40%] right-[10%] animate-float delay-700'>
          <Image src='/3.png' alt='logo' width={85} height={85} />
        </div>
        <div className='absolute top-[40%] left-[10%] animate-float delay-700'>
          <Image src='/4.png' alt='logo' width={85} height={85} />  
        </div>
        <div className='absolute top-[217px] right-[281px] animate-float delay-700'>
          <Image src='/6.png' alt='logo' width={85} height={85} />
        </div>
        <div className='absolute top-[232px] left-[281px] animate-float delay-700'>
          <Image src='/5.png' alt='logo' width={49} height={49} />
        </div>
      </div>

      <div className='container px-4 md:px-6 mx-auto text-center'>
        <div className='max-w-3xl mx-auto'>
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4 text-black'>
            <span className='bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent'>
              Automate your
            </span>{' '}
            beauty business{' '}
            <span className='bg-gradient-to-r from-purple-600 to-violet-500 bg-clip-text text-transparent'>
              bookings
            </span>
          </h1>

          <p className='text-muted-foreground text-lg max-w-xl mx-auto mb-8 text-gray-500'>
            Effortlessly manage appointments, showcase your portfolio, and
            expand your clientele with BookEve.
          </p>

          <Link
            href='#'
            className='inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 text-white font-extrabold transition-all hover:opacity-90'
          >
            Create Your Profile – It&apos;s Free!
            <ArrowRight size={18} />
          </Link>
        </div>

        {/* Video section */}
        <div className='mt-16 max-w-4xl mx-auto relative rounded-2xl overflow-hidden'>
          <div className='aspect-video bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl overflow-hidden relative'>
            {/* This would be your actual video */}
            <div className='absolute inset-0 flex items-center justify-center'>
              <button
                className='w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors'
                aria-label='Play video'
              >
                <Play className='h-8 w-8 text-purple-600 ml-1' />
              </button>
            </div>

            {/* Beauty products overlay */}
            <div className='absolute inset-0 opacity-50'>
              <div className='absolute bottom-0 left-0 w-1/4'>
                <div className='w-20 h-20 rounded-full bg-pink-200 opacity-60'></div>
              </div>
              <div className='absolute top-10 right-10'>
                <div className='w-24 h-24 rounded-full bg-purple-200 opacity-60'></div>
              </div>
              <div className='absolute bottom-10 right-1/4'>
                <div className='w-16 h-16 rounded-full bg-rose-200 opacity-60'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
