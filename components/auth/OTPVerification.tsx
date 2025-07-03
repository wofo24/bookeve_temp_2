// components/auth/OTPVerification.tsx
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '../ui/button';

interface OTPVerificationProps {
  phoneNumber: string;
  onSubmit: (otp: string) => void;
  onResend: () => void;
  isLoading: boolean;
  error?: string | null;
}

const OTPVerification: React.FC<OTPVerificationProps> = ({
  phoneNumber,
  onSubmit,
  onResend,
  isLoading,
  error,
}) => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [resendTimer, setResendTimer] = useState(30);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Countdown timer for resend
  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [resendTimer]);

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) return; // Only allow single digit

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }

    // Auto-submit when all fields are filled
    const otpString = newOtp.join('');
    if (otpString.length === 6) {
      onSubmit(otpString);
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
    const digits = pastedData.replace(/\D/g, '').slice(0, 6);
    
    if (digits.length === 6) {
      const newOtp = digits.split('');
      setOtp(newOtp);
      onSubmit(digits);
    }
  };

  const handleResend = () => {
    setResendTimer(30);
    setOtp(['', '', '', '', '', '']);
    onResend();
    inputRefs.current[0]?.focus();
  };

  const formatPhoneNumber = (phone: string) => {
    return `+91 ${phone.slice(0, 5)} ${phone.slice(5)}`;
  };

  return (
    <div className="space-y-6">
      {/* Description */}
      <div className="text-center space-y-2">
        <p className="text-gray-600">
          Please verify OTP sent on WhatsApp
        </p>
        <p className="text-sm text-gray-500">
          Code sent to{' '}
          <span className="font-medium text-gray-900">
            {formatPhoneNumber(phoneNumber)}
          </span>
        </p>
      </div>

      {/* OTP Input Fields */}
      <div className="space-y-4">
        <div className="flex justify-center space-x-3">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              onPaste={handlePaste}
              className={`w-12 h-12 text-center text-xl font-bold border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all ${
                digit ? 'border-purple-500 bg-purple-50' : 'border-gray-300'
              } ${error ? 'border-red-300' : ''}`}
              autoFocus={index === 0}
            />
          ))}
        </div>

        {/* Error Message */}
        {error && (
          <div className="text-sm text-red-600 text-center">
            {error}
          </div>
        )}
      </div>

      {/* Manual Verify Button (if needed) */}
      <Button
        onClick={() => onSubmit(otp.join(''))}
        disabled={otp.join('').length !== 6 || isLoading}
        className="w-full h-12 text-base font-semibold"
      >
        {isLoading ? (
          <div className="flex items-center justify-center space-x-2">
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            <span>Verifying...</span>
          </div>
        ) : (
          'Verify'
        )}
      </Button>

      {/* Resend Section */}
      <div className="text-center space-y-3">
        <p className="text-sm text-gray-600">
          Didn't receive OTP?
        </p>
        
        {resendTimer > 0 ? (
          <p className="text-sm text-gray-500">
            Resend OTP in{' '}
            <span className="font-medium text-purple-600">
              00:{resendTimer.toString().padStart(2, '0')}
            </span>
          </p>
        ) : (
          <button
            onClick={handleResend}
            className="text-sm font-medium text-purple-600 hover:text-purple-700 underline"
          >
            Resend OTP
          </button>
        )}
      </div>

      {/* Help Text */}
      <div className="bg-yellow-50 rounded-lg p-3">
        <p className="text-xs text-yellow-700 text-center">
          💡 For demo purposes, any 6-digit code will work
        </p>
      </div>
    </div>
  );
};

export default OTPVerification;