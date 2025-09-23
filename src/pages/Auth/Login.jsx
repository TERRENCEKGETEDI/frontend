import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Form from '../../components/ui/Form';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import { useAuthContext } from '../../state/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuthContext();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Authenticate against your backend API
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        const user = data.user;
        
        console.log("✅ Login successful:", user);

        // Determine role based on role_type from database
        let role = 'student'; // default role
        if (user.role_type === 'bec_committee') role = 'bec_committee';
        else if (user.role_type === 'nec_member') role = 'nec_member';
        else if (user.role_type === 'master_admin') role = 'master_admin';
        else if (user.role_type === 'admin') role = 'admin';

        login(user, role);

        // Role-based redirect
        if (role === 'master_admin') {
          navigate('/master-admin/dashboard');
        } else if (role === 'admin' || role === 'bec_committee' || role === 'nec_member') {
          navigate('/admin/dashboard');
        } else {
          navigate('/');
        }
      } else {
        const errorData = await response.json();
        alert(errorData.error || 'Invalid credentials');
      }
    } catch (error) {
      console.error('Login failed:', error);
      alert('Login failed. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Login</h1>
      <Form onSubmit={handleSubmit}>
        <Input 
          label="Email" 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Enter your email"
        />
        <Input 
          label="Password" 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="Enter your password"
        />
        <Button type="submit" disabled={loading} className="w-full">
          {loading ? 'Logging in...' : 'Login'}
        </Button>
      </Form>
      <p className="mt-4 text-center text-gray-600">
        Don't have an account?{' '}
        <Link to="/auth/register" className="text-blue-600 hover:text-blue-800 font-semibold">
          Register here
        </Link>
      </p>
    </div>
  );
};

export default Login;