// components/auth/PhoneNumberInput.tsx
import React, { useState } from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

interface PhoneNumberInputProps {
  onSubmit: (phoneNumber: string) => void;
  isLoading: boolean;
  error?: string | null;
}

const PhoneNumberInput: React.FC<PhoneNumberInputProps> = ({
  onSubmit,
  isLoading,
  error,
}) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isWhatsApp, setIsWhatsApp] = useState(true);

  const formatPhoneNumber = (value: string) => {
    // Remove all non-digits
    const digits = value.replace(/\D/g, '');
    
    // Limit to 10 digits (Indian mobile number)
    const limitedDigits = digits.slice(0, 10);
    
    return limitedDigits;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setPhoneNumber(formatted);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phoneNumber.length === 10) {
      onSubmit(phoneNumber);
    }
  };

  const isValidPhone = phoneNumber.length === 10;

  return (
    <div className="space-y-6">
      {/* Description */}
      <div className="text-center space-y-2">
        <p className="text-gray-600">
          Please login to continue
        </p>
        <p className="text-sm text-gray-500">
          Please enter your{' '}
          <span className="font-medium">
            {isWhatsApp ? 'WhatsApp' : 'Phone'} number
          </span>
        </p>
      </div>

      {/* Phone/WhatsApp Toggle */}
      <div className="flex bg-gray-100 rounded-lg p-1">
        <button
          type="button"
          onClick={() => setIsWhatsApp(false)}
          className={`flex-1 flex items-center justify-center py-2 px-4 rounded-md transition-all ${
            !isWhatsApp
              ? 'bg-white text-gray-900 shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          <Phone className="w-4 h-4 mr-2" />
          Phone
        </button>
        <button
          type="button"
          onClick={() => setIsWhatsApp(true)}
          className={`flex-1 flex items-center justify-center py-2 px-4 rounded-md transition-all ${
            isWhatsApp
              ? 'bg-white text-gray-900 shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          <MessageSquare className="w-4 h-4 mr-2" />
          WhatsApp
        </button>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Phone Number Input */}
        <div className="relative">
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
            <span className="text-sm font-medium text-gray-600">🇮🇳</span>
            <span className="text-sm font-medium text-gray-600">+91</span>
          </div>
          <Input
            type="tel"
            value={phoneNumber}
            onChange={handlePhoneChange}
            placeholder="Enter mobile number"
            className="pl-16 text-lg tracking-wider"
            maxLength={10}
          />
        </div>

        {/* Error Message */}
        {error && (
          <div className="text-sm text-red-600 text-center">
            {error}
          </div>
        )}

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={!isValidPhone || isLoading}
          className="w-full h-12 text-base font-semibold"
        >
          {isLoading ? (
            <div className="flex items-center justify-center space-x-2">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span>Sending OTP...</span>
            </div>
          ) : (
            `Get OTP`
          )}
        </Button>
      </form>

      {/* Terms */}
      <div className="text-xs text-gray-500 text-center leading-relaxed">
        By continuing, you agree to our{' '}
        <a href="#" className="text-purple-600 hover:underline">
          Terms of Service
        </a>{' '}
        and{' '}
        <a href="#" className="text-purple-600 hover:underline">
          Privacy Policy
        </a>
      </div>

      {/* Helper Text */}
      <div className="bg-blue-50 rounded-lg p-3">
        <p className="text-xs text-blue-700 text-center">
          {isWhatsApp ? '📱' : '📞'} We&apos;ll send a verification code to your{' '}
          {isWhatsApp ? 'WhatsApp' : 'phone number'}
        </p>
      </div>
    </div>
  );
};

export default PhoneNumberInput;