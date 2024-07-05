import { useState } from 'react';
import SignupForm from '../../app/components/auth/SignupForm';

const Signup: React.FC = () => {
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignupSubmit = async (formData: { username: string; email: string; password: string }) => {
    // You can handle form submission logic here, e.g., making an API request to register the user
    try {
      // Example of API request
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Signup successful
        // Redirect the user to another page or perform any necessary actions
      } else {
        // Signup failed, display error message
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
      <SignupForm onSubmit={handleSignupSubmit} />
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default Signup;
