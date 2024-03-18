import { useState } from 'react';
import LoginForm from '../components/LoginForm';
import styles from '../styles/Login.module.css';
import Image from 'next/image';

const Login: React.FC = () => {
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
    <div className={styles.body}>
      <h1 className={styles.h1}>Login</h1>
      <div className={styles.container}>
      <Image 
      src='/logo1.png'
      alt='logo'
      height={500}
      width={150}
      className={styles.logo}
      />
      <LoginForm onSubmit={handleLoginSubmit} />
      {errorMessage && <p>{errorMessage}</p>}
      </div>
    </div>
  );
};

export default Login;
