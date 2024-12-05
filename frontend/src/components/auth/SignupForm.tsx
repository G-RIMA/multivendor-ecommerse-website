import { useAppDispatch, useAppSelector } from '@/redux/redux-hooks/hooks';
import { Card, ConfigProvider, Form, Input, Select } from 'antd';
import { CardHeader, CardContent } from '../main/app-component/ui/card.component';
import { registerUser } from '@/redux/actions/userActions';
import { UserRole } from '@/redux/types/user.types';
import { useRouter } from 'next/router';
import { RootState } from '@/redux/store/store-config';

const { Option } = Select;

interface CustomerFormValues {
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  phone: string;
}

const CustomerSignupForm = () => {
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { loading, error } = useAppSelector((state: RootState) => state.user);

  const handleSubmit = async (values: CustomerFormValues) => {
    // Debug log
    console.log('Form values received:', values);
    
    const registerData = {
      username: values.username,
      email: values.email, // Make sure this matches your Form.Item name
      password: values.password,
      firstName: values.firstName,
      lastName: values.lastName,
      phone: values.phone,
      role: UserRole.CUSTOMER,
    };

    // Debug log
    console.log('Sending registration data:', registerData);

    try {
      const result = await dispatch(registerUser(registerData)).unwrap();
      console.log('Registration successful:', result);
      router.push('/home');
    } catch (err) {
      console.error('Registration failed:', err);
    }
  };

  // Your existing theme configuration
  const transparentTheme = {
    // ... keep your existing theme configuration
  };

  return (
    <ConfigProvider theme={transparentTheme}>
      <Form 
        form={form}
        onFinish={handleSubmit} 
        className="space-y-6"
        layout='vertical'
      >
      <h2 className="text-xl font-semibold">Create Account</h2>
      <p className="text-sm text-gray-500 mt-1">Please provide your information</p>
      
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Username is required' }]}
        >
          <Input placeholder="Username" className="bg-transparent border-b border-gray-300" />
        </Form.Item>

        <Form.Item
          name="email"
          rules={[
            { required: true, message: 'Email is required' },
            { type: 'email', message: 'Please enter a valid email' }
          ]}
        >
          <Input placeholder="Email" className="bg-transparent border-b border-gray-300" />
        </Form.Item>

        <Form.Item
          name="firstName"
          rules={[{ required: true, message: 'First name is required' }]}
        >
          <Input placeholder="First Name" className="bg-transparent border-b border-gray-300" />
        </Form.Item>

        <Form.Item
          name="lastName"
          rules={[{ required: true, message: 'Last name is required' }]}
        >
          <Input placeholder="Last Name" className="bg-transparent border-b border-gray-300" />
        </Form.Item>

        <Form.Item
          name="phone"
          rules={[{ required: true, message: 'Phone number is required' }]}
        >
          <Input placeholder="Phone Number" className="bg-transparent border-b border-gray-300" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            { required: true, message: 'Password is required' },
            { min: 6, message: 'Password must be at least 6 characters' }
          ]}
          hasFeedback
        >
          <Input.Password placeholder="Password" className="bg-transparent border-b border-gray-300" />
        </Form.Item>

        <Form.Item
          name="confirmPassword"
          dependencies={['password']}
          rules={[
            { required: true, message: 'Please confirm your password' },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('Passwords do not match'));
              },
            }),
          ]}
          hasFeedback
        >
          <Input.Password placeholder="Confirm Password" className="bg-transparent border-b border-gray-300" />
        </Form.Item>
      

      {error && (
        <div className="text-red-500 text-sm mt-4">
          {typeof error === 'string' ? error : 'Registration failed. Please try again.'}
        </div>
      )}

      <Form.Item className="mt-6">
        <button 
          type="submit"
          disabled={loading}
          className="w-full p-3 text-white bg-raspberry rounded-lg hover:bg-lightMint 
                    transition-colors duration-200 disabled:opacity-50"
        >
          {loading ? 'Creating Account...' : 'Create Account'}
        </button>
      </Form.Item>
        
      </Form>
    </ConfigProvider>
  );
};

export default CustomerSignupForm;