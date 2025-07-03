// pages/login.tsx
import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import PhoneAuth from '../components/auth/PhoneAuth';
import OTPAuth from '../components/auth/OTPAuth';
import { useAuthContext } from '../components/auth/AuthProvider';
import { ArrowLeft } from 'lucide-react';

type AuthStep = 'phone' | 'otp';

export default function LoginPage() {
  const [currentStep, setCurrentStep] = useState<AuthStep>('phone');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('+1');
  const router = useRouter();
  const { sendOTP } = useAuthContext();

  const handlePhoneSubmit = async (phone: string, code: string) => {
    const success = await sendOTP(phone);
    if (success) {
      setPhoneNumber(phone);
      setCountryCode(code);
      setCurrentStep('otp');
    }
  };

  const handleOTPSuccess = async () => {
    const returnUrl = (router.query.returnUrl as string) || '/testDomain';
    router.push(returnUrl);
  };

  const handleBackToPhone = () => {
    setCurrentStep('phone');
  };

  const handleBackButton = () => {
    if (currentStep === 'otp') {
      handleBackToPhone();
    } else {
      router.back();
    }
  };

  return (
    <>
      <Head>
        <title>Login - Bookeve</title>
      </Head>

      <div className='min-h-screen flex items-center justify-center bg-gray-100'>
        <div className='login-container flex flex-col relative bg-white max-w-sm w-full'>
          {currentStep === 'phone' && (
            <div className='flex items-center px-6 py-4 mt-6'>
              <button
                onClick={handleBackButton}
                className='p-2 -ml-2 hover:bg-gray-100 rounded-full transition-colors'
              >
                <ArrowLeft className='w-6 h-6 text-black' />
              </button>
              <h1 className='text-[20px] font-medium text-black ml-11'>
                Please login to continue
              </h1>
            </div>
          )}

          {/* Content */}
          <div className='flex-1 px-6'>
            {currentStep === 'phone' && (
              <PhoneAuth onSubmit={handlePhoneSubmit} />
            )}

            {currentStep === 'otp' && (
              <OTPAuth
                phoneNumber={phoneNumber}
                countryCode={countryCode}
                onSuccess={handleOTPSuccess}
                onBack={handleBackToPhone}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
