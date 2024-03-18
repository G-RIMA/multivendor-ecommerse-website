import { useState } from 'react';
import { useRouter } from 'next/router';

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
  const [phoneNumber, setPhonenumber] = useState<number>(0); // Initialize phoneNumber as a number

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ username,firstName, lastName, email, password, address, phoneNumber });
    router.push('/login');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        required
      />
      <input
        type="text"
        value={firstName}
        onChange={(e) => setFirstname(e.target.value)}
        placeholder="First Name"
        required
      />
      <input
        type="text"
        value={lastName}
        onChange={(e) => setLastname(e.target.value)}
        placeholder="Second Name"
        required
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="address"
        required
      />
      <input
        type="text"
        value={phoneNumber}
        onChange={(e) => setPhonenumber(Number(e.target.value))} // Convert input value to number
        placeholder="phone number"
        required
      />

      <button type="submit">Signup</button>
    </form>
  );
};

export default SignupForm;
