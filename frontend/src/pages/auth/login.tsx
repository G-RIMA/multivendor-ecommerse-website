import { useState } from 'react';
import LoginForm from '../../components/auth/LoginForm';
import { useRouter } from 'next/router';

const Login: React.FC = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

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
        router.push('/home')
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
      <LoginForm onSubmit={handleLoginSubmit} />
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default Login;
