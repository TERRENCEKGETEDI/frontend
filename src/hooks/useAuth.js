import { useState, useEffect } from 'react';
import { login, register, logout } from '../services/authService';

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (email, password) => {
    setLoading(true);
    try {
      const response = await login(email, password);
      setUser(response.user);
    } catch (error) {
      console.error('Login failed', error);
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (userData) => {
    setLoading(true);
    try {
      const response = await register(userData);
      setUser(response.user);
    } catch (error) {
      console.error('Registration failed', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    setLoading(true);
    try {
      await logout();
      setUser(null);
    } catch (error) {
      console.error('Logout failed', error);
    } finally {
      setLoading(false);
    }
  };

  return {
    user,
    loading,
    login: handleLogin,
    register: handleRegister,
    logout: handleLogout,
  };
};

export default useAuth;