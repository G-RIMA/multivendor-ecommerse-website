import { useRouter } from 'next/router';
import { useState } from 'react';
import styles from "../styles/Login.module.css";

interface LoginFormProps {
  onSubmit: (formData: { email: string; password: string }) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ email, password });
    router.push('/home')
  };

  return (
    <div className={styles.form_container}>
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className={styles.input_field}
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className={styles.input_field}
        required
      />
      <button 
      type="submit"
      className={styles.button}>Login</button>
    </form>
    </div>
  );
};

export default LoginForm;
