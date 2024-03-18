import { useState } from 'react';
import SignupForm from '../components/SignupForm';
import styles from '../styles/SignupForm.module.css';
import Image from 'next/image';


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
    <div className={styles.body}>
      <h1 className={styles.h1}>Signup</h1>
      <div className={styles.container}>
      <Image 
      src='/logo1.png'
      alt='logo'
      height={500}
      width={150}
      className={styles.logo}
      />
      <SignupForm onSubmit={handleSignupSubmit} />
      {errorMessage && <p>{errorMessage}</p>}
      </div>
    </div>
  );
};

export default Signup;
