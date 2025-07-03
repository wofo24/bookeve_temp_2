// components/auth/LoginModal.tsx
import React, { useState } from 'react';
import { X } from 'lucide-react';
import PhoneNumberInput from './PhoneNumberInput';
import OTPVerification from './OTPVerification';
import AuthSuccess from './AuthSuccess';
import { useAuthContext } from './AuthProvider';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type AuthStep = 'phone' | 'otp' | 'success';

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState<AuthStep>('phone');
  const [phoneNumber, setPhoneNumber] = useState('');
  const { user, isLoading, error, sendOTP, verifyOTP, clearError } = useAuthContext();

  const handlePhoneSubmit = async (phone: string) => {
    const success = await sendOTP(phone);
    if (success) {
      setPhoneNumber(phone);
      setCurrentStep('otp');
    }
  };

  const handleOTPSubmit = async (otp: string) => {
    const success = await verifyOTP(phoneNumber, otp);
    if (success) {
      setCurrentStep('success');
      setTimeout(() => {
        onClose();
        resetModal();
      }, 2000);
    }
  };

  const handleBack = () => {
    if (currentStep === 'otp') {
      setCurrentStep('phone');
    }
    clearError();
  };

  const resetModal = () => {
    setCurrentStep('phone');
    setPhoneNumber('');
    clearError();
  };

  const handleClose = () => {
    onClose();
    resetModal();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={handleClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md mx-4 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <div className="flex items-center space-x-3">
            {currentStep === 'otp' && (
              <button
                onClick={handleBack}
                className="p-1 hover:bg-gray-100 rounded-full transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M19 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
            )}
            <h2 className="text-xl font-bold text-gray-900">
              {currentStep === 'phone' && 'Welcome to Bookeve'}
              {currentStep === 'otp' && 'Verify OTP'}
              {currentStep === 'success' && 'Welcome!'}
            </h2>
          </div>
          
          <button
            onClick={handleClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {currentStep === 'phone' && (
            <PhoneNumberInput
              onSubmit={handlePhoneSubmit}
              isLoading={isLoading}
              error={error}
            />
          )}
          
          {currentStep === 'otp' && (
            <OTPVerification
              phoneNumber={phoneNumber}
              onSubmit={handleOTPSubmit}
              onResend={() => sendOTP(phoneNumber)}
              isLoading={isLoading}
              error={error}
            />
          )}
          
          {currentStep === 'success' && (
            <AuthSuccess user={user} />
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginModal;