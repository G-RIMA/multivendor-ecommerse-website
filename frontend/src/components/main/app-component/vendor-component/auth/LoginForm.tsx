import { loginUser } from '@/redux/actions/userActions';
import { useAppDispatch, useAppSelector } from '@/redux/redux-hooks/hooks';
import { RootState } from '@/redux/store/store-config';
import { Form, Input } from 'antd';
import { useRouter } from 'next/router';

interface LoginFormValues {
  email: string;
  password: string;
}

const VendorLoginForm = () => {
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { loading, error } = useAppSelector((state: RootState) => state.user);

  const handleSubmit = async (values: LoginFormValues) => {
    try {
      // Log the values being submitted
      console.log('Submitting login values:', values);
      
      const result = await dispatch(loginUser(values)).unwrap();
      
      // Check if the logged-in user is actually a vendor
      if (result.user.role !== 'vendor') {
        throw new Error('This login is only for vendors');
      }
      
      router.push('/vendor/dashboard');
    } catch (err) {
      console.error('Login failed:', err);
      // You might want to display this error to the user
      form.setFields([
        {
          name: 'email',
          errors: ['Invalid credentials']
        }
      ]);
    }
  };

  return (
    <Form 
      form={form}
      onFinish={handleSubmit} 
      className="space-y-6"
      layout="vertical"
    >
      <Form.Item
        name="email"
        rules={[
          { required: true, message: 'Please input your email!' },
          { type: 'email', message: 'Please enter a valid email!' }
        ]}
      >
        <Input
          type="email"
          placeholder="Email"
          className="w-full p-2 text-gray-800 placeholder-white border border-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-mint bg-transparent"
        />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[
          { required: true, message: 'Please input your password!' },
          { min: 6, message: 'Password must be at least 6 characters!' }
        ]}
      >
        <Input.Password
          placeholder="Password"
          className="w-full p-2 text-gray-800 placeholder-white border border-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-mint bg-transparent"
        />
      </Form.Item>

      {error && (
        <div className="text-red-500 text-sm mb-4">
          {typeof error === 'string' ? error : 'Login failed. Please try again.'}
        </div>
      )}

      <Form.Item>
        <button 
          type="submit"
          disabled={loading}
          className="w-full p-2 text-white bg-raspberry rounded hover:bg-lightMint disabled:opacity-50"
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </Form.Item>
    </Form>
  );
};

export default VendorLoginForm;