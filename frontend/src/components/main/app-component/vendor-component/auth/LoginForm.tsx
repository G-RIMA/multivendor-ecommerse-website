import { Form } from 'antd';
import { useState } from 'react';

interface LoginFormProps {
  onSubmit: (formData: { email: string; password: string }) => void;
}

const VendorLoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ email, password });
  };

  return (
    <Form onFinish={handleSubmit} className="space-y-6 " layout="vertical">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="w-full p-2 text-white placeholder-white border border-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-mint bg-transparent"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="w-full p-2 text-white placeholder-white border border-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-mint bg-transparent"
        required
      />
      <button 
      type="submit"
      className="w-full p-2 text-white bg-raspberry rounded hover:bg-lightMint">
        Login
      </button>
    </Form>
  );
};

export default VendorLoginForm;
