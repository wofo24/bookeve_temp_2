import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';

// Import required Swiper modules
import { FreeMode, Autoplay } from 'swiper/modules';
import Image from 'next/image';

// Star SVG component for reuse
const StarIcon = ({ filled = true }) => (
  <svg
    className={`w-[10px] h-[10px] ${
      filled ? 'text-yellow-400 fill-current' : 'text-gray-300'
    }`}
    viewBox='0 0 24 24'
  >
    <path d='M12 17.27l6.18 3.73-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z' />
  </svg>
);

// Laurel SVG component for reuse

const offers = [
  {
    id: 1,
    image: '/offer-banner.jpg', // Replace with your banner image
    title: 'Look more beautiful and',
    subtitle: 'save more discount',
    badge: 'Up to 50%',
  },
  {
    id: 2,
    image: '/offer-banner-2.jpg', // Optional second banner
    title: 'Special offers for you',
    subtitle: 'On premium services',
    badge: 'Flat 30% Off',
  },
];

// Component props with defaults
const average = 4.8;
const totalRatings = 2953;
const distribution = [
  { stars: 5, percentage: 85 },
  { stars: 4, percentage: 10 },
  { stars: 3, percentage: 3 },
  { stars: 2, percentage: 1 },
  { stars: 1, percentage: 1 },
];
const tags = [
  { id: 1, title: 'Exceptional Creativity', icon: '🌟', color: 'bg-amber-100' },
  { id: 2, title: 'Friendly & Reliable', icon: '👍', color: 'bg-green-100' },
  { id: 3, title: 'Premium Product', icon: '💎', color: 'bg-pink-100' },
  { id: 4, title: 'Excellent Service', icon: '🏆', color: 'bg-blue-100' },
  { id: 5, title: 'Great Value', icon: '💰', color: 'bg-purple-100' },
];
// Swiper options
const swiperOptions = {
  slidesPerView: 3.2,
  spaceBetween: 10,
  freeMode: true,
  grabCursor: true,
  loop: false,
  autoplay: false,
  breakpoints: {
    640: { slidesPerView: 3.5 },
    768: { slidesPerView: 3.2 },
  },
};

const RatingsReviews = ({ setRatingsDrawerOpen }) => {
  return (
    <div className='p-4 bg-white shadow-sm'>
      {/* Header */}
      <div className='flex justify-between items-center mb-4'>
        <span className='text-[18px] font-[600] text-[rgba(34,37,51,1)]'>
          Ratings & reviews
        </span>
        <button
          onClick={() => setRatingsDrawerOpen(true)}
          className='text-purple-600 text-[12px] font-medium'
        >
          VIEW ALL
        </button>
      </div>

      {/* Rating overview with laurel decoration */}
      <div className='flex justify-center items-center mb-6 relative'>
        {/* Left laurel */}
        <div className='absolute left-1/2 -translate-x-[100%] top-1/2 -translate-y-1/2'>
          <img
            src='/leaf.png'
            width={140} // increased from 107.42
            height={140} // increased from 107.42
            alt='Leaf Icon'
            // className="-mr-10"
          />
        </div>

        {/* Average rating */}
        <div className='text-center m-0'>
          <span className='text-[56px] font-[800] text-[rgba(34,37,51,1)] block leading-[1]'>
            {average}
          </span>
          <div className='flex justify-center mt-[2px]'>
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} filled={true} />
            ))}
          </div>
          <div className='text-xs text-gray-500 mt-1'>
            {totalRatings.toLocaleString()} Ratings
          </div>
        </div>

        {/* Right laurel */}
        <div className='absolute right-1/2 translate-x-[100%] top-1/2 -translate-y-1/2'>
          <img
            src='/leaf.png'
            width={140}
            height={140}
            alt='Leaf Icon'
            className='-scale-x-100'
          />
        </div>
      </div>

      <div className='flex flex-row gap-4 mb-6'>
        {/* Rating distribution */}
        <div className='w-[106px] shrink-0'>
          <span className='text-[10px] font-[600] text-[rgba(102,106,123,1)]'>
            Overall Rating
          </span>
          <div className='space-y-1 mt-2'>
            {distribution.map((item) => (
              <div key={item.stars} className='flex items-center'>
                <span className='text-[10px] w-4 text-gray-600'>
                  {item.stars}
                </span>
                <div className='flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden mx-1'>
                  <div
                    className='h-[4px] bg-[rgba(255,187,0,1)] rounded-full transition-all duration-1000'
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Swiper container (takes remaining space) */}
        <div className='flex flex-col flex-1 overflow-hidden'>
          <span className='text-[10px] font-[600] text-[rgba(102,106,123,1)] mb-2'>
            Most of the customers mentioned
          </span>
          <Swiper
            modules={[FreeMode, Autoplay]}
            className='ratings-swiper mt-1'
            {...swiperOptions}
            spaceBetween={8} // set gap between slides
          >
            {tags.map((tag) => (
              <SwiperSlide key={tag.id} className='!w-auto'>
                <div
                  className={`border border-[rgba(222,222,231,1)] rounded-md p-[12px] w-[90px] h-[94px] flex flex-col gap-[10px] hover:shadow-md transition-shadow`}
                >
                  <div className='text-lg mb-0.5 w-[28px] h-[28px]'>
                    {tag.icon}
                  </div>
                  <div className='font-medium text-[11px] leading-[145%] tracking-[0] text-[rgba(34,37,51,1)]'>
                    {tag.title}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className='relative overflow-hidden mt-6'>
        <h2 className='text-sm font-semibold text-gray-800 mb-2'>
          Based on latest reviews
        </h2>

        <Swiper
          modules={[FreeMode]}
          spaceBetween={12}
          slidesPerView={'auto'}
          freeMode={true}
          className='!overflow-visible'
        >
          {[1, 2, 3].map((_, index) => (
            <SwiperSlide key={index} className='!w-[260px]'>
              <div className='border border-gray-200 rounded-lg p-4 bg-white shadow-sm'>
                {/* Reviewer Info */}
                <div className='mb-1'>
                  <h3 className='text-sm font-semibold text-gray-900'>
                    Mayuri Singh
                  </h3>
                  <p className='text-[11px] text-gray-500'>
                    Bridal makeup • 2 days ago
                  </p>
                </div>

                {/* Rating */}
                <div className='flex items-center text-xs text-yellow-500 gap-1 mb-2'>
                  <span>⭐</span>
                  <span>⭐</span>
                  <span>⭐</span>
                  <span>⭐</span>
                  <span className='text-gray-400'>☆</span>
                  <span className='ml-1 text-gray-600 text-[11px]'>4.2</span>
                </div>

                {/* Review Text */}
                <p className='text-[12px] text-gray-700 leading-[1.3] mb-3'>
                  A fresh take on the familiar local barbershop. We are a
                  confluence between the warmth of the neighborhood barber and
                  the sleekness that{' '}
                  <span className='text-indigo-500 font-medium'>
                    Read more..
                  </span>
                </p>

                {/* Images */}
                <div className='flex gap-2'>
                  {['/img1.jpg', '/img2.jpg', '/img3.jpg'].map((img, idx) => (
                    <Image
                      key={idx}
                      src={img}
                      alt='preview'
                      width={60}
                      height={60}
                      className='object-cover rounded-md'
                    />
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className='relative overflow-hidden mt-6'>
        <Swiper spaceBetween={12} slidesPerView={1.1} className='offer-swiper'>
          {offers.map((offer) => (
            <SwiperSlide key={offer.id}>
              <div className='relative w-full rounded-xl overflow-hidden shadow-md bg-white'>
                <Image
                  src={offer.image}
                  width={60}
                  height={60}
                  alt='Beauty Offer'
                  className='w-full h-36 object-cover'
                />

                {/* Gradient Overlay */}
                <div className='absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center px-2'>
                  <div className='text-white'>
                    <p className='text-sm font-semibold leading-[100%] px-4'>
                      {offer.title}
                    </p>
                    <p className='text-sm font-semibold mb-2 px-4'>
                      {offer.subtitle}
                    </p>
                    <button className='px-6 py-1 bg-white text-black text-sm font-medium rounded-full shadow-sm hover:bg-gray-100 -ml-7'>
                      Get offer now!
                    </button>
                  </div>
                </div>

                {/* Badge */}
                <div className='absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 text-xs font-semibold rounded-full'>
                  {offer.badge}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default RatingsReviews;
