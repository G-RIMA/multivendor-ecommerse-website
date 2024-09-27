import React from 'react';
import { DatePicker, Form, Input, Select, ConfigProvider, Divider } from 'antd';

const { Option } = Select;

interface SignupFormProps {
  onSubmit: (formData: any) => void;
}

const VendorSignupForm: React.FC<SignupFormProps> = ({ onSubmit }) => {
  const [form] = Form.useForm();

  const handleSubmit = (values: any) => {
    onSubmit(values);
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
      },
      Select: {
        colorBgContainer: 'transparent',
      },
      DatePicker: {
        colorBgContainer: 'transparent',
      },
    },
  };

  return (
    <ConfigProvider theme={transparentTheme}>
      <Form form={form} onFinish={handleSubmit} layout="vertical" className="space-y-8">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Company Details</h2>
            <Form.Item name="companyName" rules={[{ required: true, message: 'Required' }]}>
              <Input placeholder="Company Name/ Business Name" className="bg-transparent border-b border-gray-300 focus:border-raspberry" />
            </Form.Item>
            <Form.Item name="registrationNumber" rules={[{ required: true, message: 'Required' }]}>
              <Input placeholder="Registration Number" className="bg-transparent border-b border-gray-300 focus:border-raspberry" />
            </Form.Item>
            <Form.Item name="kraPin" rules={[{ required: true, message: 'Required' }]}>
              <Input placeholder="KRA Pin" className="bg-transparent border-b border-gray-300 focus:border-raspberry" />
            </Form.Item>
            <Form.Item name="businessAddress" rules={[{ required: true, message: 'Required' }]}>
              <Input placeholder="Business Address" className="bg-transparent border-b border-gray-300 focus:border-raspberry" />
            </Form.Item>
            <Form.Item name="businessEmail" rules={[{ required: true, type: 'email', message: 'Please enter a valid email' }]}>
              <Input placeholder="Business Email" className="bg-transparent border-b border-gray-300 focus:border-raspberry" />
            </Form.Item>
            <Form.Item name="businessPhone" rules={[{ required: true, message: 'Required' }]}>
              <Input addonBefore={prefixSelector} placeholder="Business Phone" className="bg-transparent border-b border-gray-300 focus:border-raspberry" />
            </Form.Item>
          </div>

          <Divider />

          <div className="space-y-4">
            <h2 className="text-xl font-bold">Business Owners</h2>
            <Form.Item name="firstName" rules={[{ required: true, message: 'Required' }]}>
              <Input placeholder="First Name" className="bg-transparent border-b border-gray-300 focus:border-raspberry" />
            </Form.Item>
            <Form.Item name="lastName" rules={[{ required: true, message: 'Required' }]}>
              <Input placeholder="Last Name" className="bg-transparent border-b border-gray-300 focus:border-raspberry" />
            </Form.Item>
            <Form.Item name="id" rules={[{ required: true, message: 'Required' }]}>
              <Input placeholder="ID" className="bg-transparent border-b border-gray-300 focus:border-raspberry" />
            </Form.Item>
            <Form.Item name="email" rules={[{ type: 'email', message: 'Invalid email' }]}>
              <Input placeholder="E-mail (Optional)" className="bg-transparent border-b border-gray-300 focus:border-raspberry" />
            </Form.Item>
            <Form.Item name="dateOfBirth" rules={[{ required: true, message: 'Required' }]}>
              <DatePicker placeholder="Date of Birth" className="w-full bg-transparent border-b border-gray-300 focus:border-raspberry" />
            </Form.Item>
            <Form.Item name="phone" rules={[{ required: true, message: 'Required' }]}>
              <Input addonBefore={prefixSelector} placeholder="Phone Number" className="bg-transparent border-b border-gray-300 focus:border-raspberry" />
            </Form.Item>
            <Form.Item name="gender" rules={[{ required: true, message: 'Required' }]}>
              <Select placeholder="Select your gender" className="bg-transparent border-b border-gray-300 focus:border-raspberry">
                <Option value="male">Male</Option>
                <Option value="female">Female</Option>
                <Option value="other">Other</Option>
              </Select>
            </Form.Item>
            <Form.Item name="ownerAddress" rules={[{ required: true, message: 'Required' }]}>
              <Input placeholder="Address" className="bg-transparent border-b border-gray-300 focus:border-raspberry" />
            </Form.Item>
          </div>

          <Divider />

          <div className="space-y-4">
            <h2 className="text-xl font-bold">Banking Details</h2>
            <Form.Item name="mpesaNumber" rules={[{ required: true, message: 'Required' }]}>
              <Input placeholder="Mpesa Number" className="bg-transparent border-b border-gray-300 focus:border-raspberry" />
            </Form.Item>
            <Form.Item name="bankDetails" rules={[{ required: true, message: 'Required' }]}>
              <Input placeholder="Bank Details" className="bg-transparent border-b border-gray-300 focus:border-raspberry" />
            </Form.Item>
            <Form.Item name="password" rules={[{ required: true, message: 'Required' }]} hasFeedback>
              <Input.Password placeholder="Password" className="bg-transparent border-b border-gray-300 focus:border-raspberry" />
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
              <Input.Password placeholder="Confirm Password" className="bg-transparent border-b border-gray-300 focus:border-raspberry" />
            </Form.Item>
          </div>
        </div>

        <Form.Item>
          <button 
            type="submit"
            className="w-full p-2 text-white bg-raspberry rounded hover:bg-lightMint"
          >
            Signup
          </button>
        </Form.Item>
      </Form>
    </ConfigProvider>
  );
};

export default VendorSignupForm;