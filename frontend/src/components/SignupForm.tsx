import { useState } from 'react';

interface SignupFormProps {
  onSubmit: (formData: {
    username: string;
    email: string;
    password: string;
  }) => void;
}

const SignupForm: React.FC<SignupFormProps> = ({ onSubmit }) => {
  const [username, setUsername] = useState('');
  const [firstName, setFirstname] = useState('');
  const [lastName, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhonenumber] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ username, email, password });
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
        placeholder="Username"
        required
      />
      <input
        type="text"
        value={lastName}
        onChange={(e) => setLastname(e.target.value)}
        placeholder="Username"
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
        onChange={(e) => setPhonenumber(e.target.value)}
        placeholder="phone number"
        required
      />

      <button type="submit">Signup</button>
    </form>
  );
};

export default SignupForm;
