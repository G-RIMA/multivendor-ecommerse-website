import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { registerUser } from '@/redux/actions/userActions';
import { UserRole } from '@/redux/types/user.types';
import { RootState } from '@/redux/store/store-config';
import { useAppDispatch, useAppSelector } from '@/redux/redux-hooks/hooks';
import { Card, ConfigProvider, DatePicker, Form, Input, Select } from 'antd';
import { CardHeader, CardContent } from '../../ui/card.component';
import moment from 'moment';

const { Option } = Select;


const VendorSignupForm = () => {
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { loading, error } = useSelector((state: RootState) => state.user);

  const handleSubmit = async (values: any) => {
    // Transform the form data to match our user model
    console.log('Form values received:', values);
    
    const registerData = {
      email: values.businessEmail,
      password: values.password,
      role: UserRole.VENDOR,
      firstName: values.firstName,
      lastName: values.lastName,
      phone: values.personalPhone,
      companyDetails: {
        companyName: values.companyName,
        registrationNumber: values.registrationNumber,
        kraPin: values.kraPin,
        businessAddress: values.businessAddress,
        businessEmail: values.businessEmail,
        businessPhone: values.businessPhone,
      },
      // Additional vendor-specific fields
      businessOwner: {
        idNumber: values.idNumber,
        personalEmail: values.personalEmail,
        dateOfBirth: values.dateOfBirth instanceof moment ? values.dateOfBirth.format('YYYY-MM-DD') : values.dateOfBirth,
      }
    };

    console.log('Sending registration data:', registerData);

    try {
      await dispatch(registerUser(registerData)).unwrap();
      router.push('/vendor/dashboard'); // Redirect to dashboard on success
    } catch (err) {
      // Error is handled by Redux, but you can add additional error handling here
      console.error('Registration failed:', err);
    }
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );

  const transparentTheme = {
    components: {
      Input: {
        colorBgContainer: 'transparent',
        colorBorder: 'transparent',
        colorBgContainerDisabled: 'transparent',
        colorTextPlaceholder: 'rgba(0, 0, 0, 0.45)',
        colorBgElevated: 'transparent', // For dropdowns
        controlItemBgActive: 'transparent', // For active state
        controlItemBgHover: 'transparent', // For hover state
      },
      Select: {
        colorBgContainer: 'transparent',
        colorBorder: 'transparent',
        colorTextPlaceholder: 'rgba(0, 0, 0, 0.45)',
        colorBgElevated: 'white', // Keep dropdown background white for readability
      },
      DatePicker: {
        colorBgContainer: 'transparent',
        colorBorder: 'transparent',
        colorTextPlaceholder: 'rgba(0, 0, 0, 0.45)',
        colorBgElevated: 'white', // Keep calendar background white
      },
    },
  };

  const inputClassName = `
    bg-transparent 
    border-b 
    border-gray-300 
    focus:border-blue-500
    hover:bg-transparent
    focus:bg-transparent
    active:bg-transparent
    [&>input]:bg-transparent
    [&>.ant-input]:bg-transparent
    [&>.ant-input:focus]:bg-transparent
    [&>.ant-input:hover]:bg-transparent
    [&>.ant-input-password-input]:bg-transparent
  `;

  const FormSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <Card className="mb-12 bg-mint">
      <CardHeader>
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-sm text-gray-500 mt-1">Please provide the following information</p>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {children}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <ConfigProvider theme={transparentTheme}>
      <Form form={form} onFinish={handleSubmit} layout="vertical">
        <FormSection title="Company Details">
          <Form.Item name="companyName" rules={[{ required: true, message: 'Required' }]}>
            <Input placeholder="Company/ Business Name" className="bg-transparent placeholder-white border-b border-gray-300 focus:border-blue-500" />
          </Form.Item>
          <Form.Item name="registrationNumber" rules={[{ required: true, message: 'Required' }]}>
            <Input placeholder="Registration Number" className="bg-transparent placeholder-white border-b border-gray-300 focus:border-blue-500" />
          </Form.Item>
          <Form.Item name="kraPin" rules={[{ required: true, message: 'Required' }]}>
            <Input placeholder="KRA Pin" className="bg-transparent placeholder-white border-b border-gray-300 focus:border-blue-500" />
          </Form.Item>
          <Form.Item name="businessAddress" rules={[{ required: true, message: 'Required' }]}>
            <Input placeholder="Business Address" className="bg-transparent placeholder-white border-b border-gray-300 focus:border-blue-500" />
          </Form.Item>
          <Form.Item name="businessAddress2">
            <Input placeholder="Second Business Address" className="bg-transparent placeholder-white border-b border-gray-300 focus:border-blue-500" />
          </Form.Item>
          <Form.Item name="businessEmail" rules={[{ required: true, type: 'email', message: 'Please enter a valid email' }]}>
            <Input placeholder="Business Email" className="bg-transparent placeholder-white border-b border-gray-300 focus:border-blue-500" />
          </Form.Item>
          <Form.Item name="businessPhone" rules={[{ required: true, message: 'Required' }]}>
            <Input addonBefore={prefixSelector} placeholder="Business Phone" className="bg-transparent placeholder-white border-b border-gray-300 focus:border-blue-500" />
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true, message: 'Required' }]} hasFeedback>
            <Input.Password placeholder="Password" className="placeholder-white bg-transparent border-b border-gray-300 focus:border-blue-500" />
          </Form.Item>
          <Form.Item
            name="confirmPassword"
            dependencies={['password']}
            hasFeedback
            rules={[
              { required: true, message: 'Please confirm your password!' },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('Passwords do not match!'));
                },
              }),
            ]}
          >
            <Input.Password placeholder="Confirm Password" className="placeholder-white bg-transparent border-b border-gray-300 focus:border-blue-500" />
          </Form.Item>
        </FormSection>

        <FormSection title="Business Owners">
          <Form.Item name="firstName" rules={[{ required: true, message: 'Required' }]}>
            <Input placeholder="First Name" className="placeholder-white bg-transparent border-b border-gray-300 focus:border-blue-500" />
          </Form.Item>
          <Form.Item name="lastName" rules={[{ required: true, message: 'Required' }]}>
            <Input placeholder="Last Name" className="placeholder-white bg-transparent border-b border-gray-300 focus:border-blue-500" />
          </Form.Item>
          <Form.Item name="idNumber" rules={[{ required: true, message: 'Required' }]}>
            <Input placeholder="ID" className="placeholder-white bg-transparent border-b border-gray-300 focus:border-blue-500" />
          </Form.Item>
          <Form.Item name="personalEmail" rules={[{ type: 'email', message: 'Invalid email' }]}>
            <Input placeholder="E-mail (Optional)" className="placeholder-white bg-transparent border-b border-gray-300 focus:border-blue-500" />
          </Form.Item>
          <Form.Item name="dateOfBirth" rules={[{ required: true, message: 'Required' }]}>
            <DatePicker placeholder="Date of Birth" className="placeholder-white w-full bg-transparent border-b border-gray-300 focus:border-blue-500" />
          </Form.Item>
          <Form.Item name="personalPhone" rules={[{ required: true, message: 'Required' }]}>
            <Input addonBefore={prefixSelector} placeholder="Phone Number" className="placeholder-white bg-transparent border-b border-gray-300 focus:border-blue-500" />
          </Form.Item>
        </FormSection>

        <Form.Item>
          <button 
          type="submit"
          className="w-full p-2 text-white bg-raspberry rounded hover:bg-lightMint">
            {loading ? 'Signing Up...' : 'Sign Up'}
          </button>
        </Form.Item>
      </Form>
    </ConfigProvider>
  );
};

export default VendorSignupForm;