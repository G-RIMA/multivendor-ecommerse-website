import { useState } from 'react';
import AdminLoginForm from '@/components/main/app-component/admin-component/auth/LoginForm';

const VendorLogin: React.FC = () => {
  const [errorMessage, setErrorMessage] = useState('');

  const handleLoginSubmit = async (formData: { email: string; password: string }) => {
    // You can handle form submission logic here, e.g., making an API request to authenticate the user
    try {
      // Example of API request
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Login successful
        // Redirect the user to another page or perform any necessary actions
      } else {
        // Login failed, display error message
        const data = await response.json();
        setErrorMessage(data.message || 'Login failed');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setErrorMessage('An unexpected error occurred');
    }
  };

  return (
    <div>
      <AdminLoginForm onSubmit={handleLoginSubmit} />
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default VendorLogin;
