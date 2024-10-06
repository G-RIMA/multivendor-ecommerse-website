// components/auth/SignupForm.tsx
import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

interface FormData {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  address: string;
  phoneNumber: string;
}

const SignupForm: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    address: '',
    phoneNumber: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
  
    try {
      console.log('Submitting form data:', formData);
      const response = await axios.post('/api/signup', formData);
      console.log('Signup response:', response.data);
      router.push('/home');
    } catch (err) {
      console.error('Signup error:', err);
      setError('Signup failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
        placeholder="Username"
        className="w-full p-2 text-white placeholder-white border border-black bg-transparent rounded focus:outline-none focus:ring-2 focus:ring-black"
        required
      />
      <input
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        placeholder="First Name"
        className="w-full p-2 text-white placeholder-white border border-gray-100 bg-transparent rounded focus:outline-none focus:ring-2 focus:ring-mint"
        required
      />
      <input
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        placeholder="Last Name"
        className="w-full p-2 text-white placeholder-white border border-gray-100 rounded bg-transparent focus:outline-none focus:ring-2 focus:ring-mint"
        required
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        className="w-full p-2 text-white placeholder-white border border-gray-100 rounded bg-transparent focus:outline-none focus:ring-2 focus:ring-mint"
        required
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
        className="w-full p-2 text-white placeholder-white border border-gray-100 rounded bg-transparent focus:outline-none focus:ring-2 focus:ring-mint"
        required
      />
      <input
        type="text"
        name="address"
        value={formData.address}
        onChange={handleChange}
        placeholder="Address"
        className="w-full p-2 text-white placeholder-white border border-gray-100 rounded bg-transparent focus:outline-none focus:ring-2 focus:ring-mint"
        required
      />
      <input
        type="text"
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleChange}
        placeholder="Phone number"
        className="w-full p-2 text-white placeholder-white border border-gray-100 rounded bg-transparent focus:outline-none focus:ring-2 focus:ring-mint"
        required
      />

      <button 
        type="submit"
        disabled={isLoading}
        className="w-full p-2 text-white bg-raspberry rounded hover:bg-lightMint disabled:opacity-50"
      >
        {isLoading ? 'Signing up...' : 'Sign Up'}
      </button>
    </form>
  );
};

export default SignupForm;
