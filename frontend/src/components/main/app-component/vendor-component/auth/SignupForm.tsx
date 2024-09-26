import { useState } from 'react';

interface SignupFormProps {
  onSubmit: (formData: {
    username: string;
    email: string;
    password: string;
  }) => void;
}

const VendorSignupForm: React.FC<SignupFormProps> = ({ onSubmit }) => {
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
    <form onSubmit={handleSubmit} className="space-y-6">
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        className="w-full p-2 text-white placeholder-white border border-black bg-transparent rounded focus:outline-none focus:ring-2 focus:ring-black"
        required
      />
      <input
        type="text"
        value={firstName}
        onChange={(e) => setFirstname(e.target.value)}
        placeholder="First Name"
        className="w-full p-2 text-white placeholder-white border border-gray-100 bg-transparent rounded focus:outline-none focus:ring-2 focus:ring-mint"
        required
      />
      <input
        type="text"
        value={lastName}
        onChange={(e) => setLastname(e.target.value)}
        placeholder="Last Name"
        className="w-full p-2 text-white placeholder-white border border-gray-100 rounded bg-transparent focus:outline-none focus:ring-2 focus:ring-mint"
        required
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="w-full p-2 text-white placeholder-white border border-gray-100 rounded bg-transparent focus:outline-none focus:ring-2 focus:ring-mint"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="w-full p-2 text-white placeholder-white border border-gray-100 rounded bg-transparent focus:outline-none focus:ring-2 focus:ring-mint"
        required
      />
      <input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Address"
        className="w-full p-2 text-white placeholder-white border border-gray-100 rounded bg-transparent focus:outline-none focus:ring-2 focus:ring-mint"
        required
      />
      <input
        type="text"
        value={phoneNumber}
        onChange={(e) => setPhonenumber(e.target.value)}
        placeholder="Phone number"
        className="w-full p-2 text-white placeholder-white border border-gray-100 rounded bg-transparent focus:outline-none focus:ring-2 focus:ring-mint"
        required
      />

      <button 
      type="submit"
      className="w-full p-2 text-white bg-raspberry rounded hover:bg-lightMint"
      >Signup</button>
    </form>
  );
};

export default VendorSignupForm;
