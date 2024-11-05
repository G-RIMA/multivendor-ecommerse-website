import React from 'react';
import { DatePicker, Form, Input, Select, ConfigProvider, Divider } from 'antd';
import { Card, CardContent, CardHeader } from '../../ui/card.component';

const { Option } = Select;

interface SignupFormProps {
  onSubmit: (formData: any) => void;
  isLoading?: boolean;
}

const VendorSignupForm: React.FC<SignupFormProps> = ({ onSubmit,isLoading }) => {
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
        colorTextPlaceholder: 'rgba(255, 255, 255, 0.7)',
      },
      Select: {
        colorBgContainer: 'transparent',
        colorTextPlaceholder: 'rgba(255, 255, 255, 0.7)',
      },
      DatePicker: {
        colorBgContainer: 'transparent',
        colorTextPlaceholder: 'rgba(255, 255, 255, 0.7)',
      },
    },
  };

  const FormSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <Card className="mb-12">
      <CardHeader className='bg-mint'>
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
            disabled={isLoading}
            className={`${isLoading ? 'opacity-50 cursor-not-allowed w-full p-3 m-3 text-white bg-raspberry rounded-lg hover:bg-lightMint transition-colors' : ''}`}
           
          >
            Signup
          </button>
        </Form.Item>
      </Form>
    </ConfigProvider>
  );
};

export default VendorSignupForm;