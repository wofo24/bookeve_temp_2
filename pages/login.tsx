// pages/login.tsx
import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import PhoneAuth from '../components/auth/PhoneAuth';
import OTPAuth from '../components/auth/OTPAuth';
import { useAuthContext } from '../components/auth/AuthProvider';

type AuthStep = 'phone' | 'otp';

export default function LoginPage() {
  const [currentStep, setCurrentStep] = useState<AuthStep>('phone');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('+91');
  const [countryFlag, setCountryFlag] = useState('🇮🇳');
  const router = useRouter();
  const { sendOTP, verifyOTP, user } = useAuthContext();

  const handlePhoneSubmit = async (phone: string, code: string, flag: string) => {
    const success = await sendOTP(phone);
    if (success) {
      setPhoneNumber(phone);
      setCountryCode(code);
      setCountryFlag(flag);
      setCurrentStep('otp');
    }
  };

  const handleOTPSuccess = async () => {
    // Redirect to previous page or home after successful login
    const returnUrl = router.query.returnUrl as string || '/testDomain';
    router.push(returnUrl);
  };

  const handleBackToPhone = () => {
    setCurrentStep('phone');
  };

  return (
    <>
      <Head>
        <title>Login - Bookeve</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="w-full max-w-sm bg-white rounded-3xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-[#8B5FBF] text-white p-6 text-center">
            <h1 className="text-2xl font-bold">Auth</h1>
          </div>

          {/* Content */}
          <div className="p-6">
            {currentStep === 'phone' && (
              <PhoneAuth onSubmit={handlePhoneSubmit} />
            )}
            
            {currentStep === 'otp' && (
              <OTPAuth
                phoneNumber={phoneNumber}
                countryCode={countryCode}
                countryFlag={countryFlag}
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