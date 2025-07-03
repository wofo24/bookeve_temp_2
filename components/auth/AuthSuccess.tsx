// components/auth/AuthSuccess.tsx
import React from 'react';
import { CheckCircle } from 'lucide-react';

interface User {
  phoneNumber: string;
  name?: string;
  isAuthenticated: boolean;
}

interface AuthSuccessProps {
  user: User | null;
}

const AuthSuccess: React.FC<AuthSuccessProps> = ({ user }) => {
  return (
    <div className="text-center space-y-6 py-8">
      {/* Success Icon */}
      <div className="flex justify-center">
        <div className="relative">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          {/* Animated rings */}
          <div className="absolute inset-0 w-20 h-20 border-4 border-green-200 rounded-full animate-ping" />
          <div className="absolute inset-2 w-16 h-16 border-2 border-green-300 rounded-full animate-pulse" />
        </div>
      </div>

      {/* Success Message */}
      <div className="space-y-2">
        <h3 className="text-2xl font-bold text-gray-900">
          Welcome to Bookeve! 🎉
        </h3>
        <p className="text-gray-600">
          You&apos;ve successfully logged in
        </p>
        {user && (
          <p className="text-sm text-gray-500">
            Logged in as: +91 {user.phoneNumber}
          </p>
        )}
      </div>

      {/* Success Animation */}
      <div className="flex justify-center space-x-1">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-2 h-2 bg-purple-500 rounded-full animate-bounce"
            style={{ animationDelay: `${i * 0.1}s` }}
          />
        ))}
      </div>

      {/* Redirect Message */}
      <p className="text-xs text-gray-500">
        Redirecting you back...
      </p>
    </div>
  );
};

export default AuthSuccess;