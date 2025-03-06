// src/middleware/authMiddleware.tsx
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAppSelector } from '@/redux/redux-hooks/hooks';

export const withAuth = (WrappedComponent: React.ComponentType, allowedRoles?: string[]) => {
  return (props: any) => {
    const router = useRouter();
    const { currentUser } = useAppSelector(state => state.user);

    useEffect(() => {
      if (!currentUser) {
        router.replace('/auth/login');
      } else if (allowedRoles && !allowedRoles.includes(currentUser.role)) {
        router.replace('/unauthorized');
      }
    }, [currentUser, router]);

    if (!currentUser) {
      return null; // or a loading spinner
    }

    return <WrappedComponent {...props} />;
  };
};