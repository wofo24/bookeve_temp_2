// components/auth/PhoneAuth.tsx
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { countries, Country } from '../../utils/countries';
import { useAuthContext } from './AuthProvider';

interface PhoneAuthProps {
  onSubmit: (
    phoneNumber: string,
    countryCode: string,
    countryFlag: string
  ) => void;
}

const PhoneAuth: React.FC<PhoneAuthProps> = ({ onSubmit }) => {
  const [selectedCountry, setSelectedCountry] = useState<Country>(
    countries.find((c) => c.code === '+1') || countries[0]
  );
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showCountrySelector, setShowCountrySelector] = useState(false);
  const { isLoading, error } = useAuthContext();

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Only allow numbers
    const value = e.target.value.replace(/\D/g, '');
    setPhoneNumber(value.slice(0, selectedCountry.phoneLength));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phoneNumber.length === selectedCountry.phoneLength) {
      onSubmit(phoneNumber, selectedCountry.code, selectedCountry.flag);
    }
  };

  const isValidPhone = phoneNumber.length === selectedCountry.phoneLength;

  return (
    <form onSubmit={handleSubmit} className='flex flex-col h-full'>
      {/* Title */}
      <div className='mb-8'>
        <p className='text-[24px] text-black font-semibold'>
          Please enter your
        </p>
        <span className='text-[24px] text-black font-semibold flex items-center gap-2'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='28'
            height='28'
            viewBox='0 0 32 32'
            className='inline-block mr-1'
          >
            <path
              fill='#FFFFF'
              d='M16.05 4C9.46 4 4.1 9.36 4.1 15.95c-.01 2.1.54 4.16 1.59 5.97L4 28.11l6.34-1.66c1.74.95 3.71 1.45 5.71 1.45h.01c6.59 0 11.95-5.36 11.95-11.95c0-3.19-1.24-6.19-3.5-8.45C22.25 5.25 19.25 4 16.05 4zm0 21.88h-.01c-1.78 0-3.53-.48-5.06-1.38l-.36-.21l-3.76.98l1.01-3.66l-.24-.38c-1-1.59-1.53-3.41-1.53-5.28c0-5.47 4.46-9.93 9.93-9.93c2.65 0 5.15 1.03 7.03 2.91c1.88 1.88 2.91 4.38 2.91 7.03c0 5.47-4.46 9.93-9.93 9.93zm5.45-7.44c-.3-.15-1.77-.87-2.04-.97c-.27-.1-.47-.15-.67.15c-.2.3-.77.97-.94 1.16c-.17.2-.35.22-.64.08c-.3-.15-1.26-.46-2.39-1.48c-.88-.79-1.48-1.76-1.65-2.06c-.17-.3-.02-.46.13-.61c.13-.13.3-.35.45-.52c.15-.17.2-.3.3-.5c.1-.2.05-.37-.03-.52c-.08-.15-.67-1.61-.92-2.21c-.24-.58-.49-.5-.67-.51c-.17-.01-.37-.01-.57-.01c-.2 0-.52.07-.79.37c-.27.3-1.04 1.02-1.04 2.48c0 1.46 1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.37c.71.31 1.26.49 1.7.63c.71.23 1.36.2 1.87.12c.57-.09 1.76-.72 2.01-1.41c.25-.7.25-1.29.17-1.41c-.07-.13-.27-.2-.57-.35z'
            />
          </svg>
          Whatsapp number
        </span>
      </div>

      {/* Phone Input */}
      <div className='mb-8'>
        <div className='flex items-center space-x-3'>
          {/* Country Selector */}
          <div className='relative'>
            <button
              type='button'
              onClick={() => setShowCountrySelector(!showCountrySelector)}
              className='flex items-center space-x-1 p-3 border border-gray-300 rounded-lg bg-white text-[14px] text-[#222533]'
            >
              <span className='text-base font-medium'>
                {selectedCountry.code}
              </span>
              <ChevronDown className='w-4 h-4 text-gray-500' />
            </button>
            {/* Country Dropdown */}
            {showCountrySelector && (
              <>
                <div
                  className='fixed inset-0 z-10 text-black'
                  onClick={() => setShowCountrySelector(false)}
                />
                <div className='absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-20 w-64 max-h-60 overflow-y-auto text-black'>
                  {countries.map((country) => (
                    <button
                      key={country.code + country.name}
                      onClick={() => {
                        setSelectedCountry(country);
                        setShowCountrySelector(false);
                        setPhoneNumber('');
                      }}
                      className='w-full flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 text-left '
                    >
                      <span>{country.flag}</span>
                      <span className='flex-1 text-[#222533]'>
                        {country.name}
                      </span>
                      <span className='text-[#222533]'>{country.code}</span>
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
          {/* Phone Input Field */}
          <input
            id='phone-input'
            type='tel'
            inputMode='numeric'
            pattern='[0-9]*'
            value={phoneNumber}
            onChange={handlePhoneChange}
            className='flex-1 px-4 py-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-[#222533]'
            maxLength={selectedCountry.phoneLength}
            autoComplete='tel'
            aria-label='Phone number'
            placeholder='XXX XXX XXXX'
          />
        </div>

        {/* Error Message */}
        {error && <div className='text-sm text-red-600 mt-2'>{error}</div>}
      </div>
      {/* Get OTP Button */}
      <button
        type='submit'
        disabled={!isValidPhone || isLoading}
        className={`w-full py-4 rounded-lg text-base font-medium transition-all mt-80 ${
          isValidPhone && !isLoading
            ? 'bg-purple-600 text-white hover:bg-purple-700'
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
        }`}
      >
        {isLoading ? 'Sending...' : 'Get OTP'}
      </button>
    </form>
  );
};

export default PhoneAuth;
