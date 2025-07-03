// components/auth/OTPAuth.tsx
import { useState, useRef, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useAuthContext } from './AuthProvider';

interface OTPAuthProps {
  phoneNumber: string;
  countryCode: string;
  onSuccess: () => void;
  onBack: () => void;
}

const OTPAuth: React.FC<OTPAuthProps> = ({
  phoneNumber,
  countryCode,
  onSuccess,
  onBack,
}) => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [resendTimer, setResendTimer] = useState(30);
  const [isResendEnabled, setIsResendEnabled] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const { verifyOTP, sendOTP, isLoading, error } = useAuthContext();

  // Countdown timer for resend
  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setIsResendEnabled(true);
    }
  }, [resendTimer]);

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) return; // Only allow single digit

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < otp.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }

    // Auto-submit when all fields are filled
    const otpString = newOtp.join('');
    if (otpString.length === otp.length && !newOtp.includes('')) {
      handleVerifyOTP(otpString);
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text');
    const digits = pastedData.replace(/\D/g, '').slice(0, otp.length);

    if (digits.length === otp.length) {
      const newOtp = digits.split('');
      setOtp(newOtp);
      handleVerifyOTP(digits);
    }
  };

  const handleVerifyOTP = async (otpString: string) => {
    const success = await verifyOTP(phoneNumber, otpString);
    if (success) {
      onSuccess();
    }
  };

  const handleResend = async () => {
    setResendTimer(30);
    setIsResendEnabled(false);
    setOtp(['', '', '', '']);
    await sendOTP(phoneNumber);
    inputRefs.current[0]?.focus();
  };

  const formatPhoneNumber = (phone: string, code: string) => {
    if (code === '+1') {
      // US/Canada format
      return `${code} (${phone.slice(0, 3)}) ${phone.slice(3, 6)}-${phone.slice(
        6
      )}`;
    } else if (code === '+91') {
      // India format
      return `${code} ${phone.slice(0, 5)} ${phone.slice(5)}`;
    } else if (code === '+55') {
      // Brazil format
      return `${code} (${phone.slice(0, 2)}) ${phone.slice(2, 7)}-${phone.slice(
        7
      )}`;
    } else {
      return `${code} ${phone}`;
    }
  };

  return (
    <div className='space-y-6 '>
      {/* Back Button & Title */}
      <div className='flex items-center px-6 py-4 mt-6'>
        <button
          onClick={onBack}
          className='p-2 -ml-2 hover:bg-gray-100 rounded-full transition-colors'
        >
          <ArrowLeft className='w-6 h-6 text-black' />
        </button>
        <h2 className='text-[20px] font-medium text-black ml-11'>
          Please verify OTP
        </h2>
      </div>

      {/* Description */}
      <div className='ml-2 space-y-2'>
        <p className='text-[#222533] text-[24px] font-semibold'>
          Please verify OTP sent on WhatsApp
        </p>
        <div className='flex space-x-2'>
          <p className='text-sm text-gray-500'>
            Enter 4 digit OTP sent to{' '}
            <span className='font-semibold text-gray-500'>
              {formatPhoneNumber(phoneNumber, countryCode)}
            </span>{' '}
            <span>
              <button
                className='underline text-purple-600 cursor-pointer'
                onClick={onBack}
              >
                Edit
              </button>
            </span>
          </p>
        </div>
      </div>

      {/* OTP Input Fields */}
      <div className='space-y-6'>
        <div className='flex justify-start space-x-3 ml-2'>
          {otp.map((digit, index) => (
            <div key={index} className='relative'>
              <input
                ref={(el) => {
                  inputRefs.current[index] = el;
                }}
                type='text'
                inputMode='numeric'
                pattern='[0-9]*'
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                onPaste={handlePaste}
                className={`w-12 h-12 text-center text-[14px] font-light border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all caret-transparent ${
                  digit
                    ? 'border-purple-500  text-[#222533]'
                    : 'border-gray-300 bg-white'
                } ${error ? 'border-red-300' : ''}`}
                autoFocus={index === 0}
              />
              {!digit && (
                <span className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-300 pointer-events-none select-none'>
                  -
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Error Message */}
        {error && (
          <div className='text-sm text-red-600 text-center bg-red-50 rounded-lg p-3'>
            {error}
          </div>
        )}

        {/* Resend Section */}
        <div className='text-center space-y-3'>
          {!isResendEnabled ? (
            <p className='text-sm text-gray-500'>
              You can resend new OTP in{' '}
              <span className='font-medium'>
                00:{resendTimer.toString().padStart(1, '0')}
              </span>
            </p>
          ) : (
            <button
              onClick={handleResend}
              className='text-sm font-medium text-purple-600 hover:text-purple-700 underline transition-colors'
            >
              Resend OTP
            </button>
          )}
        </div>

        {/* Manual Verify Button */}
        <button
          onClick={() => handleVerifyOTP(otp.join(''))}
          disabled={otp.join('').length !== 4 || isLoading}
          className={`w-full py-3 px-4 rounded-xl text-base font-semibold transition-all ${
            otp.join('').length === 4 && !isLoading
              ? 'bg-purple-600 text-white hover:bg-purple-700 active:bg-purple-800'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}
        >
          {isLoading ? (
            <div className='flex items-center justify-center space-x-2'>
              <div className='w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin' />
              <span>Verifying...</span>
            </div>
          ) : (
            'Verify'
          )}
        </button>
      </div>
    </div>
  );
};

export default OTPAuth;
