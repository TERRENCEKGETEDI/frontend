import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../state/AuthContext';

const AdminLayout = ({ children }) => {
  const { user, role, logout, hasPermission } = useAuthContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="min-h-screen flex">
      <aside className="bg-gray-800 text-white w-64 p-4">
        <h2 className="text-xl font-bold mb-4">Admin Panel</h2>
        <div className="mb-4">
          <p className="text-sm">Logged in as: {user?.name || user?.email}</p>
          <p className="text-xs text-gray-300">Role: {role}</p>
        </div>
        <ul className="space-y-2">
          <li><Link to="/admin/dashboard" className="block p-2 hover:bg-gray-700 rounded">Dashboard</Link></li>
          {hasPermission('bec_committee') && (
            <>
              <li><Link to="/admin/members" className="block p-2 hover:bg-gray-700 rounded">Members</Link></li>
              <li><Link to="/admin/events" className="block p-2 hover:bg-gray-700 rounded">Events</Link></li>
              <li><Link to="/admin/news" className="block p-2 hover:bg-gray-700 rounded">News</Link></li>
              <li><Link to="/admin/resources" className="block p-2 hover:bg-gray-700 rounded">Resources</Link></li>
              <li><Link to="/admin/sponsors" className="block p-2 hover:bg-gray-700 rounded">Sponsors</Link></li>
            </>
          )}
          <li><button onClick={handleLogout} className="block w-full text-left p-2 hover:bg-gray-700 rounded">Logout</button></li>
        </ul>
      </aside>
      <div className="flex-1 flex flex-col">
        <header className="bg-blue-600 text-white p-4">
          <h1 className="text-xl font-bold">Admin Dashboard</h1>
        </header>
        <main className="flex-grow p-4">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;