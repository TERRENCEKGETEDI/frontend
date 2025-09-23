import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Form from '../../components/ui/Form';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    becRole: '',
    branch_id: '',
    position: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const { name, email, password, becRole, branch_id, position } = formData;

    if (!name || !email || !password || !branch_id || !position) {
      setError('Please fill in all required fields');
      setLoading(false);
      return;
    }

    try {
      const userData = {
        name,
        email,
        password,
        role_type:
          becRole === 'BEC Committee' ? 'bec_committee' :
          becRole === 'NEC Member' ? 'nec_member' :
          'student',
        branch_id,
        position,
        status: 'active'
      };

      console.log('🚀 Sending registration data:', userData);

      const response = await fetch('http://localhost:5000/users', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(userData)
      });

      // Debug: Check what we're actually receiving
      const responseText = await response.text();
      console.log('📥 Raw response:', responseText);
      console.log('📊 Response status:', response.status);
      console.log('🔗 Response headers:', Object.fromEntries(response.headers.entries()));

      // Try to parse as JSON, but handle HTML responses
      let result;
      try {
        result = JSON.parse(responseText);
      } catch (parseError) {
        console.error('❌ JSON parse error:', parseError);
        if (responseText.trim().startsWith('<!DOCTYPE') || responseText.includes('<html>')) {
          throw new Error('Server returned HTML instead of JSON. Check if the server is running correctly.');
        } else {
          throw new Error(`Unexpected response format: ${responseText.substring(0, 100)}...`);
        }
      }

      console.log('📦 Parsed response:', result);

      if (!response.ok) {
        throw new Error(result.error || `HTTP error! status: ${response.status}`);
      }

      alert('Registration successful!');
      navigate('/login');
    } catch (err) {
      console.error('❌ Registration error:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Register</h2>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            <strong>Error:</strong> {error}
          </div>
        )}

        <Input label="Name" name="name" value={formData.name} onChange={handleChange} required />
        <Input label="Email" name="email" type="email" value={formData.email} onChange={handleChange} required />
        <Input label="Password" name="password" type="password" value={formData.password} onChange={handleChange} required />

        <div className="mb-4">
          <label className="block mb-1 font-medium">Role</label>
          <select 
            name="becRole" 
            value={formData.becRole} 
            onChange={handleChange} 
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select Role</option>
            <option value="Student">Student</option>
            <option value="BEC Committee">BEC Committee</option>
            <option value="NEC Member">NEC Member</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Branch</label>
          <select 
            name="branch_id" 
            value={formData.branch_id} 
            onChange={handleChange} 
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select Branch</option>
            <option value="1">Branch A</option>
            <option value="2">Branch B</option>
            <option value="3">Branch C</option>
          </select>
        </div>

        <Input label="Position" name="position" value={formData.position} onChange={handleChange} required />

        <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded" disabled={loading}>
          {loading ? 'Creating Account...' : 'Create Account'}
        </Button>

        <p className="mt-4 text-sm text-center">
          Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Login</Link>
        </p>
      </Form>
    </div>
  );
}