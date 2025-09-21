import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Form from '../../components/ui/Form';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import { useAuthContext } from '../../state/AuthContext';
import { getMembers } from '../../services/memberService';

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
      // Mock login - find user in members
      const members = await getMembers();
      const user = members.find(m => m.email === email);

      if (user && (user.status === 'Approved' || user.status === 'Alumni')) {
        let role = 'student';
        if (user.becRole === 'BEC Committee') role = 'bec_committee';
        else if (user.becRole === 'NEC Member') role = 'nec_member';
        else if (user.becRole === 'Master Admin') role = 'master_admin';
        else if (email.includes('admin')) role = 'admin';

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
        alert('Invalid credentials or account not approved');
      }
    } catch (error) {
      console.error('Login failed:', error);
      alert('Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <Form onSubmit={handleSubmit}>
        <Input label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button type="submit">Login</Button>
      </Form>
      <p className="mt-4">Don't have an account? <Link to="/auth/register" className="text-blue-600">Register</Link></p>
    </div>
  );
};

export default Login;