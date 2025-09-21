// Mock auth service
// Security considerations:
// - Use HTTPS for all API calls
// - Implement JWT tokens for session management
// - Hash passwords with bcrypt
// - Rate limiting for login attempts
// - Input validation and sanitization
export const login = async (email, password) => {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, user: { email } });
    }, 1000);
  });
};

export const register = async (userData) => {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      const { mockMembers } = require('../data/mockData');
      const newMember = {
        id: mockMembers.length + 1,
        name: userData.name,
        email: userData.email,
        status: 'Pending',
        branch: userData.branch,
        becRole: userData.becRole,
        isAlumni: false,
        graduationYear: null,
      };
      mockMembers.push(newMember);
      resolve({ success: true, user: newMember });
    }, 1000);
  });
};

export const logout = async () => {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true });
    }, 500);
  });
};