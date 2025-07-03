// components/auth/withAuth.tsx - Higher Order Component for route protection
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuthContext } from './AuthProvider';

interface WithAuthOptions {
  redirectTo?: string;
  allowUnauthenticated?: boolean;
}

export function withAuth<P extends object>(
  Component: React.ComponentType<P>,
  options: WithAuthOptions = {}
) {
  const {
    redirectTo = '/login',
    allowUnauthenticated = false,
  } = options;

  return function AuthenticatedComponent(props: P) {
    const { user, isLoading } = useAuthContext();
    const router = useRouter();

    useEffect(() => {
      if (!isLoading && !user && !allowUnauthenticated) {
        const returnUrl = router.asPath;
        router.push(`${redirectTo}?returnUrl=${encodeURIComponent(returnUrl)}`);
      }
    }, [user, isLoading, router]);

    // Show loading state
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

    // Don't render if user is not authenticated and authentication is required
    if (!user && !allowUnauthenticated) {
      return null;
    }

    return <Component {...props} />;
  };
}

// Helper hook for conditional rendering based on auth
export function useRequireAuth() {
  const { user, isLoading } = useAuthContext();
  const router = useRouter();

  const requireAuth = (callback: () => void, redirectTo = '/login') => {
    if (!user) {
      const returnUrl = router.asPath;
      router.push(`${redirectTo}?returnUrl=${encodeURIComponent(returnUrl)}`);
      return;
    }
    callback();
  };

  return { user, isLoading, requireAuth };
}

// Example usage:
// 1. Protect entire page:
//    export default withAuth(MyProtectedPage);
//
// 2. Protect page but allow unauthenticated users to see loading/placeholder:
//    export default withAuth(MyPage, { allowUnauthenticated: true });
//
// 3. Custom redirect:
//    export default withAuth(MyPage, { redirectTo: '/custom-login' });
//
// 4. Conditional protection in component:
//    const { requireAuth } = useRequireAuth();
//    const handleBooking = () => requireAuth(() => console.log('Booking...'));