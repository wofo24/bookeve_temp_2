// pages/auth-demo.tsx (Demo page to test auth)
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import { useAuthContext } from '../components/auth/AuthProvider';
import { Button } from '../components/ui/button';

export default function AuthDemo() {
  const { user, logout, isLoading } = useAuthContext();
  const router = useRouter();

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!isLoading && !user) {
      router.push(`/login?returnUrl=${encodeURIComponent('/auth-demo')}`);
    }
  }, [user, isLoading, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-purple-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null; // Will redirect to login
  }

  return (
    <>
      <Head>
        <title>Auth Demo - Bookeve</title>
      </Head>
      
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-6 space-y-6">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              🎉 Welcome to Bookeve!
            </h1>
            <p className="text-gray-600">
              You're successfully logged in
            </p>
          </div>

          {/* User Info */}
          <div className="bg-green-50 rounded-xl p-4 border border-green-200">
            <h2 className="text-lg font-semibold text-green-800 mb-2">
              Your Account Details
            </h2>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-green-700">Phone Number:</span>
                <span className="font-medium text-green-900">{user.phoneNumber}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-green-700">Name:</span>
                <span className="font-medium text-green-900">{user.name || 'Not set'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-green-700">Status:</span>
                <span className="font-medium text-green-900">
                  ✅ Authenticated
                </span>
              </div>
            </div>
          </div>

          {/* Protected Actions */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">
              Protected Actions
            </h3>
            
            <div className="grid gap-3">
              <Button className="w-full justify-start" variant="outline">
                📅 Book an Appointment
              </Button>
              <Button className="w-full justify-start" variant="outline">
                🛒 View Your Cart
              </Button>
              <Button className="w-full justify-start" variant="outline">
                📋 Your Booking History
              </Button>
              <Button className="w-full justify-start" variant="outline">
                👤 Edit Profile
              </Button>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">
              Navigation
            </h3>
            
            <div className="grid gap-3">
              <Link href="/testDomain">
                <Button className="w-full" variant="outline">
                  🎨 Visit Artist Page
                </Button>
              </Link>
              <Link href="/">
                <Button className="w-full" variant="outline">
                  🏠 Go to Home
                </Button>
              </Link>
            </div>
          </div>

          {/* Logout */}
          <div className="pt-4 border-t border-gray-200">
            <Button 
              onClick={() => {
                logout();
                router.push('/');
              }}
              variant="destructive"
              className="w-full"
            >
              🚪 Logout
            </Button>
          </div>

          {/* Instructions */}
          <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
            <h4 className="text-sm font-semibold text-blue-800 mb-2">
              💡 How to test:
            </h4>
            <ul className="text-xs text-blue-700 space-y-1">
              <li>• Try accessing this page without login (you'll be redirected)</li>
              <li>• Test login with different country codes</li>
              <li>• Use any 6-digit code for OTP verification</li>
              <li>• Check header menu for login status</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}