import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Form from '../../components/ui/Form';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import { useAuthContext } from '../../state/AuthContext';
import { register } from '../../services/authService';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    branch: '',
    becRole: 'Member'
  });
  const [loading, setLoading] = useState(false);
  const { login } = useAuthContext();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await register(formData);
      // Auto-login after successful registration
      const userRole = formData.becRole === 'BEC Committee' ? 'bec_committee' :
                      formData.becRole === 'NEC Member' ? 'nec_member' : 'student';
      login({ ...formData, id: response.user.id }, userRole);

      // Redirect based on role
      if (userRole === 'bec_committee' || userRole === 'nec_member') {
        navigate('/admin/dashboard');
      } else {
        navigate('/');
      }
    } catch (error) {
      console.error('Registration failed:', error);
      alert('Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Register</h1>
      <Form onSubmit={handleSubmit}>
        <Input
          label="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
        <Input
          label="Email"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
        <Input
          label="Password"
          type="password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          required
        />
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Branch</label>
          <select
            value={formData.branch}
            onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Select Branch</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Information Technology">Information Technology</option>
            <option value="Software Engineering">Software Engineering</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">BEC Role</label>
          <select
            value={formData.becRole}
            onChange={(e) => setFormData({ ...formData, becRole: e.target.value })}
            className="w-full p-2 border rounded"
          >
            <option value="Member">Member</option>
            <option value="BEC Committee">BEC Committee</option>
            <option value="NEC Member">NEC Member</option>
          </select>
        </div>
        <Button type="submit" disabled={loading}>
          {loading ? 'Registering...' : 'Register'}
        </Button>
      </Form>
      <p className="mt-4">Already have an account? <Link to="/auth/login" className="text-blue-600">Login</Link></p>
    </div>
  );
};

export default Register;