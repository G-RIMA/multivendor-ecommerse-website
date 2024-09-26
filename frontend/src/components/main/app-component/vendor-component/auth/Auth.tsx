import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import VendorLoginForm from './LoginForm';
import VendorSignupForm from './SignupForm';

const VendorAuthPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleLoginSubmit = (formData: { email: string; password: string }) => {
    // Handle login logic here
    console.log('Login data:', formData);
  };

  const handleSignupSubmit = (formData: {
    username: string;
    email: string;
    password: string;
  }) => {
    // Handle signup logic here
    console.log('Signup data:', formData);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gradient-mint-raspberry">
      
      <div className="relative w-full max-w-md p-8 space-y-8 bg-mint shadow-xl rounded-lg overflow-hidden">
        <div className="flex w-full items-center justify-right">
          <img src="/logo.png" alt="Logo" className="max-w-full h-auto" />
        </div>
        <AnimatePresence mode='wait'>
          {isLogin ? (
            <motion.div
              key="login"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
            >
              <VendorLoginForm onSubmit={handleLoginSubmit} />
            </motion.div>
          ) : (
            <motion.div
              key="signup"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <VendorSignupForm onSubmit={handleSignupSubmit} />
            </motion.div>
          )}
        </AnimatePresence>
        <div className="text-center">
          {isLogin ? (
            <p>
              Don’t have an account?{' '}
              <button
                onClick={toggleForm}
                className="text-blue-500 hover:text-blue-700"
              >
                Sign Up
              </button>
            </p>
          ) : (
            <p>
              Already have an account?{' '}
              <button
                onClick={toggleForm}
                className="text-blue-500 hover:text-blue-700"
              >
                Log In
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default VendorAuthPage;
