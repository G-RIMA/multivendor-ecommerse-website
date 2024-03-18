import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/SignupForm.module.css';

interface SignupFormProps {
  onSubmit: (formData: {
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    address: string;
    phoneNumber: number; 
  }) => void;
}

const SignupForm: React.FC<SignupFormProps> = ({ onSubmit }) => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [firstName, setFirstname] = useState('');
  const [lastName, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhonenumber] = useState<number>(+254); // Initialize phoneNumber as a number

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ username,firstName, lastName, email, password, address, phoneNumber });
    router.push('/login');
  };

  return (
    <div className={styles.form_container}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className={styles.input_field}
          required
        />
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstname(e.target.value)}
          placeholder="First Name"
          className={styles.input_field}
          required
        />
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastname(e.target.value)}
          placeholder="Second Name"
          className={styles.input_field}
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className={styles.input_field}
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className={styles.input_field}
          required
        />
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="address"
          className={styles.input_field}
          required
        />
        <input
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhonenumber(Number(e.target.value))} // Convert input value to number
          placeholder="phone number"
          className={styles.input_field}
          required
        />

        <button 
        type="submit"
        className={styles.button}>Signup</button>
      </form>
    </div>
  );
};

export default SignupForm;
