import { useState } from 'react';
import { useRouter } from 'next/router';
import VendorSignupForm from '@/components/main/app-component/vendor-component/auth/SignupForm';

const VendorSignup: React.FC = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  const handleSignupSubmit = async (formData: { username: string; email: string; password: string }) => {
    try {
      const response = await fetch('/api/vendors/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        router.push('/vendor/dashboard')
      } else {
        const data = await response.json();
        setErrorMessage(data.message || 'Signup failed');
      }
    } catch (error) {
      console.error('Error signing up:', error);
      setErrorMessage('An unexpected error occurred');
    }
  };

  return (
    <div>
      <VendorSignupForm onSubmit={handleSignupSubmit} />
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default VendorSignup;
