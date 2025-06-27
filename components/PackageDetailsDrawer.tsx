import React from 'react';
import { BottomDrawer } from './ui/bottom-drawer';
import { Star, MessageSquare } from 'lucide-react';

interface PackageDetailsProps {
  isOpen: boolean;
  onClose: () => void;
  packageData?: {
    name: string;
    rating: number;
    totalRatings: number;
    duration: string;
    availability: string;
    originalPrice: number;
    discountedPrice: number;
    discount: number;
    advancePayment: number;
    description: string;
    forWomen: boolean;
  };
}

const PackageDetailsDrawer: React.FC<PackageDetailsProps> = ({
  isOpen,
  onClose,
  packageData,
}) => {
  // Ensure packageData is always defined with default values
  const safePackageData = packageData || {
    name: 'HD Radiant Bride Makeup Package',
    rating: 4.8,
    totalRatings: 123,
    duration: '45 minutes',
    availability: 'Available Today',
    originalPrice: 60.0,
    discountedPrice: 45.0,
    discount: 25,
    advancePayment: 10.0,
    description:
      'This is a comprehensive package that includes all the services you need. Our professional staff will ensure you get the best experience possible.',
    forWomen: true,
  };

  const products = [
    { id: 1, name: 'Kryolan Foundation', image: '/product1.jpg' },
    { id: 2, name: 'LA Girl Concealer', image: '/product2.jpg' },
    { id: 3, name: 'Urban Decay Eyeshadow', image: '/product3.jpg' },
    { id: 4, name: 'MAC Lipstick', image: '/product4.jpg' },
    { id: 5, name: 'Maybelline Mascara', image: '/product5.jpg' },
  ];

  const serviceSteps = [
    'The stylist will consult with you to understand your preferences.',
    "We'll prepare the necessary tools and products for your service.",
    'The main service will be performed by our professional staff.',
    'Final touches and adjustments will be made.',
    "We'll provide aftercare instructions and product recommendations.",
    "You'll have the opportunity to schedule your next appointment.",
  ];

  const thingsIncluded = [
    'Professional consultation with our expert stylist.',
    'Premium quality products used during service.',
    'Complimentary beverage during your appointment.',
    'Free follow-up appointment if needed.',
    '10% discount on product purchases after service.',
    'Detailed aftercare instructions and guidance.',
  ];

  const homeSetupRequirements = [
    'Clean, well-lit space with adequate ventilation.',
    'Access to running water nearby.',
    'Electrical outlet for any tools that may be needed.',
    'Comfortable seating arrangement.',
    'Please ensure pets are kept in a separate area during the service.',
  ];

  return (
    <BottomDrawer isOpen={isOpen} onClose={onClose} step={1}>
      <div className='flex flex-col items-start gap-3 bg-white'>
        {/* Header Section */}
        <div className='flex flex-col items-start py-0 pb-2 w-full'>
          <div className='flex flex-col items-start gap-2 w-full'>
            <div className='flex flex-row justify-between items-start w-full'>
              <h2 className='w-72 font-bold text-lg leading-tight text-gray-900 pr-4'>
                {safePackageData.name}
              </h2>
              <div className='flex flex-col justify-center items-end gap-1 min-w-fit'>
                <div className='flex items-center p-1 gap-1 border border-gray-200 rounded'>
                  <Star className='w-4 h-4 fill-yellow-400 text-yellow-400' />
                  <span className='text-xs font-semibold text-gray-900'>
                    {safePackageData.rating}
                  </span>
                </div>
                <span className='text-xs font-normal text-gray-500'>
                  {safePackageData.totalRatings} ratings
                </span>
              </div>
            </div>

            {safePackageData.forWomen && (
              <div className='flex flex-row justify-start items-center gap-1'>
                <div className='w-4 h-4 border-b border-gray-500'></div>
                <span className='text-xs font-medium text-gray-500'>
                  For Women
                </span>
              </div>
            )}

            <div className='flex flex-row justify-start items-center gap-1'>
              <div className='w-4 h-4 text-gray-500'>⏱</div>
              <span className='text-xs font-medium text-gray-500'>
                {safePackageData.duration} • {safePackageData.availability}
              </span>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className='flex flex-col items-start gap-3 w-full'>
          <div className='flex flex-col justify-center items-start p-3 gap-3 w-full bg-white border border-gray-200 rounded-lg relative'>
            <div className='flex flex-row items-center gap-1.5 w-full'>
              <div className='w-4 h-4 text-gray-500'>🏪</div>
              <span className='text-xs font-normal text-gray-500'>
                At Salon
              </span>
            </div>

            <div className='flex flex-row items-center gap-2'>
              <span className='text-xl font-bold text-gray-900'>
                ${safePackageData.discountedPrice.toFixed(2)}
              </span>
              <span className='text-sm font-normal text-gray-500 line-through'>
                ${safePackageData.originalPrice.toFixed(2)}
              </span>
              <div className='flex justify-center items-center px-1.5 py-1 bg-green-100 rounded'>
                <span className='text-xs font-bold text-green-700'>
                  -{safePackageData.discount}%
                </span>
              </div>
            </div>

            <button className='flex justify-center items-center w-full h-12 bg-purple-600 rounded-xl hover:bg-purple-700 transition-colors'>
              <span className='text-base font-semibold text-white'>
                Add to cart
              </span>
            </button>

            <div className='flex justify-center items-center p-1 px-2 w-full bg-green-50 rounded-md'>
              <span className='text-xs font-medium text-green-800 text-center'>
                Advance payment required - $
                {safePackageData.advancePayment.toFixed(2)}
              </span>
            </div>

            <div className='absolute top-4 right-4'>
              <button className='text-xs font-normal text-gray-500 underline'>
                Check salon price
              </button>
            </div>
          </div>
        </div>

        {/* Package Details Section */}
        <div className='flex flex-col items-start w-full bg-white'>
          <div className='flex flex-col items-start p-3 gap-3 w-full bg-purple-50 rounded-xl relative'>
            <h2 className='w-full font-bold text-base text-gray-900'>
              Package Details
            </h2>

            <div className='flex flex-row justify-center items-start p-3 px-4 w-full bg-white rounded-xl'>
              <p className='w-full font-light text-sm leading-snug text-gray-900'>
                {safePackageData.description}
              </p>
            </div>

            {/* Products Used Section */}
            <div className='flex flex-col justify-center items-center p-4 gap-4 w-full bg-white rounded-xl'>
              <div className='flex flex-row items-center w-full'>
                <h3 className='w-full font-bold text-xl text-gray-900'>
                  Products Used
                </h3>
              </div>

              <div className='flex flex-row items-start gap-3 w-full overflow-x-auto'>
                {products.map((product) => (
                  <div
                    key={product.id}
                    className='flex flex-col items-center p-3 gap-2 w-28 h-32 bg-white border border-gray-200 rounded-xl flex-shrink-0'
                  >
                    <div className='w-16 h-16 bg-gray-200 rounded flex items-center justify-center'>
                      <span className='text-xs text-gray-400'>IMG</span>
                    </div>
                    <p className='w-full font-bold text-xs leading-tight text-center text-gray-900'>
                      {product.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Service Steps Section */}
            <div className='flex flex-col justify-center items-center p-3 px-4 pb-4 gap-4 w-full bg-white rounded-xl'>
              <h3 className='w-full font-bold text-xl text-gray-900'>
                Service Steps
              </h3>

              <div className='flex flex-col items-center w-full gap-4 relative'>
                <div className='absolute w-0 h-full border border-gray-900 left-2.5 top-3'></div>

                {serviceSteps.map((step, index) => (
                  <div
                    key={index}
                    className='flex flex-row items-start gap-3 w-full'
                  >
                    <div className='flex justify-center items-center w-5 h-5 bg-gray-900 rounded-full flex-shrink-0 relative z-10'>
                      <span className='text-xs font-bold text-white'>
                        {index + 1}
                      </span>
                    </div>
                    <p className='w-full text-base font-light leading-6 text-gray-900'>
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Things Included Section */}
            <div className='flex flex-col justify-center items-center p-4 gap-4 w-full bg-white rounded-xl'>
              <div className='flex flex-col items-start w-full gap-1'>
                <h3 className='font-bold text-xl text-gray-900'>
                  Things Included
                </h3>
                <p className='w-full text-sm font-light text-gray-500'>
                  All the items and services included in this package
                </p>
              </div>

              <div className='flex flex-col items-center w-full gap-4'>
                {thingsIncluded.map((item, index) => (
                  <div
                    key={index}
                    className='flex flex-row items-start gap-3 w-full'
                  >
                    <div className='flex justify-center items-center w-5 h-5 bg-gray-900 rounded-full flex-shrink-0'>
                      <span className='text-xs font-bold text-white'>
                        {index + 1}
                      </span>
                    </div>
                    <p className='w-full text-base font-light leading-6 text-gray-900'>
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Home Setup Requirements Section */}
            <div className='flex flex-col justify-center items-center p-4 gap-4 w-full bg-white rounded-xl'>
              <div className='flex flex-col items-start w-full gap-1'>
                <h3 className='font-bold text-xl text-gray-900'>
                  Home Setup Requirements
                </h3>
                <p className='w-full text-sm font-light text-gray-500'>
                  What you need to prepare before the service
                </p>
              </div>

              <div className='flex flex-col items-center w-full gap-4'>
                {homeSetupRequirements.map((requirement, index) => (
                  <div
                    key={index}
                    className='flex flex-row items-start gap-3 w-full'
                  >
                    <div className='flex justify-center items-center w-5 h-5 bg-gray-900 rounded-full flex-shrink-0'>
                      <span className='text-xs font-bold text-white'>
                        {index + 1}
                      </span>
                    </div>
                    <p className='w-full text-base font-light leading-6 text-gray-900'>
                      {requirement}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Maintenance Section */}
        <div className='flex flex-col items-start gap-4 w-full bg-white'>
          <div className='flex flex-col items-start p-3 gap-3 w-full bg-purple-50 rounded-xl relative'>
            <h2 className='w-full font-bold text-base text-gray-900'>
              Maintenance
            </h2>

            <div className='flex flex-col items-start gap-3 w-full'>
              <div className='flex flex-row items-center p-2.5 px-3 gap-3 w-full bg-white border border-gray-200 rounded-lg'>
                <div className='w-6 h-6 relative flex-shrink-0'>
                  <div className='w-full h-0.5 bg-gray-500 absolute top-1/2 transform -translate-y-1/2'></div>
                </div>
                <div className='flex flex-col items-start gap-1 flex-grow'>
                  <h3 className='text-sm font-bold text-gray-900'>
                    Pre-service maintenance
                  </h3>
                  <p className='text-xs text-gray-500'>
                    Steps to prepare before your appointment
                  </p>
                </div>
                <div className='flex items-center justify-center w-5 h-5 bg-gray-100 rounded-full'>
                  <span className='text-xs'>→</span>
                </div>
              </div>

              <div className='flex flex-row items-center p-2.5 px-3 gap-3 w-full bg-white border border-gray-200 rounded-lg'>
                <div className='w-6 h-6 relative flex-shrink-0'>
                  <div className='w-full h-0.5 bg-gray-500 absolute top-1/2 transform -translate-y-1/2'></div>
                </div>
                <div className='flex flex-col items-start gap-1 flex-grow'>
                  <h3 className='text-sm font-bold text-gray-900'>
                    Post-service maintenance
                  </h3>
                  <p className='text-xs text-gray-500'>
                    Recommended aftercare for best results
                  </p>
                </div>
                <div className='flex items-center justify-center w-5 h-5 bg-gray-100 rounded-full'>
                  <span className='text-xs'>→</span>
                </div>
              </div>

              {/* Customization Section */}
              <div className='flex flex-col items-start gap-3 w-full bg-white'>
                <div className='flex flex-row justify-between items-center w-full'>
                  <h3 className='flex-grow font-bold text-base leading-5 text-gray-900'>
                    Customisation Options
                  </h3>
                  <div className='w-6 h-6 flex items-center justify-center'>
                    <div className='w-4 h-0.5 bg-gray-900'></div>
                  </div>
                </div>

                <p className='w-full font-light text-sm leading-6 text-gray-900'>
                  You can choose which brand of makeup you want.
                </p>

                <div className='flex flex-col items-center p-2 gap-2 w-full bg-gray-100 rounded-xl'>
                  <p className='w-full text-center font-light text-sm leading-6 text-gray-900'>
                    Contact us for customization
                  </p>

                  <button className='flex flex-row justify-center items-center px-4 gap-2.5 w-full h-12 bg-white border border-purple-600 rounded-xl hover:bg-purple-50 transition-colors'>
                    <MessageSquare className='w-6 h-6 text-purple-600' />
                    <span className='font-semibold text-base text-purple-600'>
                      Chat with Artist
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BottomDrawer>
  );
};

export default PackageDetailsDrawer;
