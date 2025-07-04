// pages/profile-completion.tsx
// This page appears after successful OTP verification
// It collects user profile information that can be used throughout the app
import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { ChevronDown } from 'lucide-react';
import { useAuthContext } from '../components/auth/AuthProvider';

// Available states and their cities for the dropdown
const statesAndCities = {
  'Uttar Pradesh': [
    'Ghaziabad',
    'Noida',
    'Lucknow',
    'Kanpur',
    'Agra',
    'Varanasi',
    'Meerut',
    'Allahabad',
  ],
  Delhi: [
    'New Delhi',
    'Central Delhi',
    'North Delhi',
    'South Delhi',
    'East Delhi',
    'West Delhi',
  ],
  Maharashtra: [
    'Mumbai',
    'Pune',
    'Nagpur',
    'Nashik',
    'Aurangabad',
    'Solapur',
    'Dhule',
  ],
  Karnataka: [
    'Bangalore',
    'Mysore',
    'Hubli',
    'Mangalore',
    'Belgaum',
    'Gulbarga',
    'Davanagere',
  ],
  'Tamil Nadu': [
    'Chennai',
    'Coimbatore',
    'Madurai',
    'Tiruchirappalli',
    'Salem',
    'Tirunelveli',
  ],
  Gujarat: [
    'Ahmedabad',
    'Surat',
    'Vadodara',
    'Rajkot',
    'Bhavnagar',
    'Jamnagar',
    'Junagadh',
  ],
  'West Bengal': [
    'Kolkata',
    'Howrah',
    'Durgapur',
    'Asansol',
    'Siliguri',
    'Malda',
    'Bardhaman',
  ],
  Rajasthan: [
    'Jaipur',
    'Jodhpur',
    'Kota',
    'Bikaner',
    'Udaipur',
    'Ajmer',
    'Bhilwara',
  ],
  Punjab: [
    'Ludhiana',
    'Amritsar',
    'Jalandhar',
    'Patiala',
    'Bathinda',
    'Mohali',
    'Firozpur',
  ],
  Haryana: [
    'Gurgaon',
    'Faridabad',
    'Panipat',
    'Ambala',
    'Yamunanagar',
    'Rohtak',
    'Hisar',
  ],
};

export default function ProfileCompletionPage() {
  const router = useRouter();
  const { updateUserProfile, user } = useAuthContext();

  // Form state - storing all user input
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    gender: '',
    houseNumber: '',
    pincode: '',
    state: 'Uttar Pradesh', // Default state from screenshot
    city: 'Ghaziabad', // Default city from screenshot
  });

  // Loading state for save button
  const [isLoading, setIsLoading] = useState(false);

  // Dropdown states
  const [showStateDropdown, setShowStateDropdown] = useState(false);
  const [showCityDropdown, setShowCityDropdown] = useState(false);

  // Handle back button click
  const handleBack = () => {
    router.back();
  };

  // Handle input changes - updates form state
  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // Handle state selection - also resets city to first option
  const handleStateChange = (state: string) => {
    const cities = statesAndCities[state as keyof typeof statesAndCities];
    setFormData((prev) => ({
      ...prev,
      state: state,
      city: cities[0], // Set first city as default
    }));
    setShowStateDropdown(false);
  };

  // Handle city selection
  const handleCityChange = (city: string) => {
    setFormData((prev) => ({
      ...prev,
      city: city,
    }));
    setShowCityDropdown(false);
  };

  // Handle gender selection
  const handleGenderSelect = (gender: string) => {
    setFormData((prev) => ({
      ...prev,
      gender: gender,
    }));
  };

  // Handle form submission
  const handleSubmit = async () => {
    // Check if required fields are filled
    if (!formData.fullName.trim()) {
      alert('Please enter your full name');
      return;
    }

    if (!formData.gender) {
      alert('Please select your gender');
      return;
    }

    setIsLoading(true);

    try {
      // Update user profile in context
      await updateUserProfile(formData);

      // Redirect to return URL or default page
      const returnUrl = (router.query.returnUrl as string) || '/testDomain';
      router.push(returnUrl);
    } catch (error) {
      console.error('Error saving profile:', error);
      alert('Error saving profile. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // Check if form is valid for submission
  const isFormValid = formData.fullName.trim() && formData.gender;

  return (
    <>
      <Head>
        <title>Complete Profile - Bookeve</title>
      </Head>

      <div className='min-h-screen bg-gray-100 flex flex-col'>
        <div className='flex-1 px-6 pb-8 overflow-y-auto login-container'>
          <h1 className='mb-8 w-full text-center text-xl font-semibold text-black mt-6'>
            Let&apos;s complete your profile
          </h1>

          {/* Form Fields */}
          <div className='space-y-6'>
            {/* Full Name */}
            <div>
              <label className='block text-sm font-medium text-black mb-2'>
                Full Name
              </label>
              <input
                type='text'
                value={formData.fullName}
                onChange={(e) => handleInputChange('fullName', e.target.value)}
                placeholder='Enter your name'
                className='w-full px-4 py-3 border border-gray-300 rounded-lg text-base text-[#121A2C] focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder-[#666A7B]'
              />
            </div>

            {/* Email (Optional) */}
            <div>
              <label className='block text-sm font-medium text-black mb-2'>
                Email (optional)
              </label>
              <input
                type='email'
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder='Enter your email'
                className='w-full px-4 py-3 border border-gray-300 rounded-lg text-base text-[#121A2C] focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder-[#666A7B]'
              />
            </div>

            {/* Gender */}
            <div className='border-b border-dashed border-[#DEDEE7] pb-10'>
              <label className='block text-sm font-medium text-black mb-3'>
                Gender
              </label>
              <div className='flex space-x-3'>
                {['Female', 'Male', 'Other'].map((gender) => (
                  <button
                    key={gender}
                    onClick={() => handleGenderSelect(gender)}
                    className={`flex-1 py-3 px-4 rounded-lg border text-sm font-medium transition-all ${
                      formData.gender === gender
                        ? 'bg-purple-50 border-purple-500 text-purple-700'
                        : 'bg-white border-gray-300 text-gray-700 hover:border-gray-400'
                    }`}
                  >
                    {gender}
                  </button>
                ))}
              </div>
            </div>

            {/* ADDRESS Section */}
            <div className='pt-4'>
              <h3 className='text-sm font-medium text-gray-600 mb-4 uppercase tracking-wider'>
                ADDRESS
              </h3>

              {/* House/Flat number and Pincode */}
              <div className='grid grid-cols-2 gap-4 mb-4'>
                <div>
                  <label className='block text-sm font-medium text-black mb-2'>
                    House/Flat number
                  </label>
                  <input
                    type='text'
                    value={formData.houseNumber}
                    onChange={(e) =>
                      handleInputChange('houseNumber', e.target.value)
                    }
                    placeholder='XX'
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg text-base text-[#121A2C] focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder-[#666A7B]'
                  />
                </div>
                <div>
                  <label className='block text-sm font-medium text-black mb-2'>
                    Pincode
                  </label>
                  <input
                    type='text'
                    value={formData.pincode}
                    onChange={(e) =>
                      handleInputChange('pincode', e.target.value)
                    }
                    placeholder='302010'
                    maxLength={6}
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg text-base text-[#121A2C] focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder-[#666A7B]'
                  />
                </div>
              </div>

              {/* State Dropdown */}
              <div className='mb-4'>
                <label className='block text-sm font-medium text-black mb-2'>
                  State
                </label>
                <div className='relative'>
                  <button
                    type='button'
                    onClick={() => setShowStateDropdown(!showStateDropdown)}
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg text-base text-left focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white flex items-center justify-between'
                  >
                    <span className='text-[#121A2C]'>{formData.state}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-500 transition-transform ${
                        showStateDropdown ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {/* State Dropdown List */}
                  {showStateDropdown && (
                    <>
                      <div
                        className='fixed inset-0 z-10'
                        onClick={() => setShowStateDropdown(false)}
                      />
                      <div className='absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-20 max-h-60 overflow-y-auto'>
                        {Object.keys(statesAndCities).map((state) => (
                          <button
                            key={state}
                            onClick={() => handleStateChange(state)}
                            className={`w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors ${
                              formData.state === state
                                ? 'bg-purple-50 text-purple-700'
                                : 'text-gray-900'
                            }`}
                          >
                            {state}
                          </button>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* City Dropdown */}
              <div className='mb-8'>
                <label className='block text-sm font-medium text-black mb-2'>
                  City
                </label>
                <div className='relative'>
                  <button
                    type='button'
                    onClick={() => setShowCityDropdown(!showCityDropdown)}
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg text-base text-left focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white flex items-center justify-between'
                  >
                    <span className='text-[#121A2C]'>{formData.city}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-500 transition-transform ${
                        showCityDropdown ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {/* City Dropdown List */}
                  {showCityDropdown && (
                    <>
                      <div
                        className='fixed inset-0 z-10'
                        onClick={() => setShowCityDropdown(false)}
                      />
                      <div className='absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-20 max-h-60 overflow-y-auto'>
                        {statesAndCities[
                          formData.state as keyof typeof statesAndCities
                        ].map((city) => (
                          <button
                            key={city}
                            onClick={() => handleCityChange(city)}
                            className={`w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors ${
                              formData.city === city
                                ? 'bg-purple-50 text-purple-700'
                                : 'text-gray-900'
                            }`}
                          >
                            {city}
                          </button>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Save Button */}
          <button
            onClick={handleSubmit}
            disabled={!isFormValid || isLoading}
            className={`w-full py-4 rounded-lg text-base font-medium transition-all ${
              isFormValid && !isLoading
                ? 'bg-purple-600 text-white hover:bg-purple-700'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            {isLoading ? 'Saving...' : 'Save details'}
          </button>
        </div>
      </div>
    </>
  );
}
