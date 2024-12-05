import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAppDispatch, useAppSelector } from '@/redux/store/store-config'; // Use custom hooks
import VendorSignupForm from '@/components/main/app-component/vendor-component/auth/SignupForm';
import { registerUser } from '@/redux/actions/userActions';
import { RootState } from '@/redux/store/store-config';

const VendorSignup: React.FC = () => {
  const dispatch = useAppDispatch(); // Use custom dispatch
  const router = useRouter();

  // Select state from the user reducer
  const { error, loading, currentUser } = useAppSelector((state: RootState) => state.user);

  useEffect(() => {
    if (currentUser) {
      router.push('/vendor/dashboard');
    }
  }, [currentUser, router]);

  const handleSignupSubmit = async (formData: { username: string; email: string; password: string }) => {
    try {
      await dispatch(registerUser({
        ...formData,
        userType: 'vendor',
      })).unwrap(); // `unwrap` to handle success/failure
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  return (
    <div>
      <VendorSignupForm onSubmit={handleSignupSubmit} isLoading={loading} />
      {error && <p className="text-red-500">{error.message || 'Signup failed'}</p>}
    </div>
  );
};

export default VendorSignup;
