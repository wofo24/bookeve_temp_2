// hooks/useAuth.tsx
import { useState } from 'react';

interface UserProfile {
  fullName: string;
  email: string;
  gender: string;
  houseNumber: string;
  pincode: string;
  state: string;
  city: string;
}

interface User {
  phoneNumber: string;
  name?: string;
  isAuthenticated: boolean;
  profile?: UserProfile; // Optional profile data
  profileCompleted?: boolean;
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

  const sendOTP = async (): Promise<boolean> => {
    setAuthState((prev) => ({ ...prev, isLoading: true, error: null }));

    try {
      // Simulate API call to send OTP
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // In a real implementation, you would call your backend API here
      // const response = await fetch('/api/auth/send-otp', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ phoneNumber }),
      // });

      setAuthState((prev) => ({ ...prev, isLoading: false }));
      return true;
    } catch {
      setAuthState((prev) => ({
        ...prev,
        isLoading: false,
        error: 'Failed to send OTP. Please try again.',
      }));
      return false;
    }
  };

  const verifyOTP = async (
    _phoneNumber: string,
    otp: string
  ): Promise<boolean> => {
    setAuthState((prev) => ({ ...prev, isLoading: true, error: null }));

    try {
      // Simulate API call to verify OTP
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // For demo purposes, accept any 4-digit OTP
      if (otp.length === 4) {
        const user: User = {
          phoneNumber: '', // This would come from your backend
          name: 'User', // This would come from your backend
          isAuthenticated: true,
          profileCompleted: false,
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
    } catch {
      setAuthState((prev) => ({
        ...prev,
        isLoading: false,
        error: 'Invalid OTP. Please try again.',
      }));
      return false;
    }
  };

    // Update user profile - called after profile completion form
  const updateUserProfile = async (profileData: UserProfile): Promise<boolean> => {
    setAuthState(prev => ({ ...prev, isLoading: true, error: null }));
    
    try {
      // Simulate API call to save profile
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Update user with profile data
      setAuthState(prev => ({
        ...prev,
        user: prev.user ? {
          ...prev.user,
          name: profileData.fullName,
          profile: profileData,
          profileCompleted: true,
        } : null,
        isLoading: false,
      }));
      
      return true;
    } catch (error) {
      setAuthState(prev => ({
        ...prev,
        isLoading: false,
        error: 'Failed to save profile. Please try again.',
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
    setAuthState((prev) => ({ ...prev, error: null }));
  };

  return {
    user: authState.user,
    isLoading: authState.isLoading,
    error: authState.error,
    sendOTP,
    verifyOTP,
    updateUserProfile, 
    logout,
    clearError,
  };
};
