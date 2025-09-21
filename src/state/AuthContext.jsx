import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthContext must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null); // 'student', 'bec_committee', 'nec_member', 'master_admin', 'sponsor'

  const login = (userData, userRole) => {
    setUser(userData);
    setRole(userRole);
  };

  const logout = () => {
    setUser(null);
    setRole(null);
  };

  const hasPermission = (requiredRole) => {
    const roleHierarchy = {
      'student': 1,
      'bec_committee': 2,
      'nec_member': 3,
      'master_admin': 5,
      'sponsor': 1
    };
    return roleHierarchy[role] >= roleHierarchy[requiredRole];
  };

  const isMasterAdmin = () => role === 'master_admin';
  const isAdmin = () => ['bec_committee', 'nec_member', 'master_admin'].includes(role);
  const isStudent = () => role === 'student';

  return (
    <AuthContext.Provider value={{
      user,
      role,
      login,
      logout,
      hasPermission,
      isMasterAdmin,
      isAdmin,
      isStudent
    }}>
      {children}
    </AuthContext.Provider>
  );
};