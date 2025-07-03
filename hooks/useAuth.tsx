// hooks/useAuth.tsx
import { useState } from 'react';

interface User {
  phoneNumber: string;
  name?: string;
  isAuthenticated: boolean;
}

interface AuthState {
  user: User | null;
  isLoading: boolean;
  error: string | null;
}

export const useAuth = () => {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isLoading: false,
    error: null,
  });

  const sendOTP = async (phoneNumber: string): Promise<boolean> => {
    setAuthState(prev => ({ ...prev, isLoading: true, error: null }));
    
    try {
      // Simulate API call to send OTP
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // In a real implementation, you would call your backend API here
      // const response = await fetch('/api/auth/send-otp', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ phoneNumber }),
      // });
      
      setAuthState(prev => ({ ...prev, isLoading: false }));
      return true;
    } catch (error) {
      setAuthState(prev => ({
        ...prev,
        isLoading: false,
        error: 'Failed to send OTP. Please try again.',
      }));
      return false;
    }
  };

  const verifyOTP = async (phoneNumber: string, otp: string): Promise<boolean> => {
    setAuthState(prev => ({ ...prev, isLoading: true, error: null }));
    
    try {
      // Simulate API call to verify OTP
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // For demo purposes, accept any 6-digit OTP
      if (otp.length === 6) {
        const user: User = {
          phoneNumber,
          name: 'User', // This would come from your backend
          isAuthenticated: true,
        };
        
        setAuthState({
          user,
          isLoading: false,
          error: null,
        });
        return true;
      } else {
        throw new Error('Invalid OTP');
      }
    } catch (error) {
      setAuthState(prev => ({
        ...prev,
        isLoading: false,
        error: 'Invalid OTP. Please try again.',
      }));
      return false;
    }
  };

  const logout = () => {
    setAuthState({
      user: null,
      isLoading: false,
      error: null,
    });
  };

  const clearError = () => {
    setAuthState(prev => ({ ...prev, error: null }));
  };

  return {
    user: authState.user,
    isLoading: authState.isLoading,
    error: authState.error,
    sendOTP,
    verifyOTP,
    logout,
    clearError,
  };
};