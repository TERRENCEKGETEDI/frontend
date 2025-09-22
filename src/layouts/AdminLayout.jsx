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
    <div className="min-h-screen flex bg-gray-50">
      <aside className="bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900 text-white w-72 shadow-2xl relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-700 rounded-full -mr-16 -mt-16 opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-600 rounded-full -ml-12 -mb-12 opacity-30"></div>

        <div className="relative z-10 p-6">
          {/* Logo/Title */}
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center shadow-xl border-2 border-white border-opacity-20">
              <svg className="w-7 h-7 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white drop-shadow-lg">Admin Panel</h2>
              <p className="text-sm text-blue-100 font-medium">NaTeSA Management</p>
            </div>
          </div>

          {/* User Info */}
          <div className="bg-white bg-opacity-10 rounded-xl p-4 mb-6 border border-blue-700 border-opacity-50">
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">{user?.name || user?.email}</p>
                <p className="text-xs text-blue-200 capitalize">{role}</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/admin/dashboard"
                  className="group flex items-center space-x-3 px-4 py-3 text-white hover:bg-white hover:bg-opacity-10 rounded-xl transition-all duration-200 hover:shadow-lg"
                >
                  <svg className="w-5 h-5 text-blue-300 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5a2 2 0 012-2h4a2 2 0 012 2v2H8V5z" />
                  </svg>
                  <span className="font-medium">Dashboard</span>
                </Link>
              </li>
              {hasPermission('bec_committee') && (
                <>
                  <li>
                    <Link
                      to="/admin/members"
                      className="group flex items-center space-x-3 px-4 py-3 text-white hover:bg-white hover:bg-opacity-10 rounded-xl transition-all duration-200 hover:shadow-lg"
                    >
                      <svg className="w-5 h-5 text-blue-300 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                      </svg>
                      <span className="font-medium">Members</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/admin/events"
                      className="group flex items-center space-x-3 px-4 py-3 text-white hover:bg-white hover:bg-opacity-10 rounded-xl transition-all duration-200 hover:shadow-lg"
                    >
                      <svg className="w-5 h-5 text-blue-300 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="font-medium">Events</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/admin/news"
                      className="group flex items-center space-x-3 px-4 py-3 text-white hover:bg-white hover:bg-opacity-10 rounded-xl transition-all duration-200 hover:shadow-lg"
                    >
                      <svg className="w-5 h-5 text-blue-300 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                      </svg>
                      <span className="font-medium">News</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/admin/resources"
                      className="group flex items-center space-x-3 px-4 py-3 text-white hover:bg-white hover:bg-opacity-10 rounded-xl transition-all duration-200 hover:shadow-lg"
                    >
                      <svg className="w-5 h-5 text-blue-300 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                      <span className="font-medium">Resources</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/admin/sponsors"
                      className="group flex items-center space-x-3 px-4 py-3 text-white hover:bg-white hover:bg-opacity-10 rounded-xl transition-all duration-200 hover:shadow-lg"
                    >
                      <svg className="w-5 h-5 text-blue-300 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      <span className="font-medium">Sponsors</span>
                    </Link>
                  </li>
                </>
              )}
              <li className="pt-4 border-t border-blue-700 border-opacity-50">
                <button
                  onClick={handleLogout}
                  className="group flex items-center space-x-3 px-4 py-3 text-white hover:bg-red-500 hover:bg-opacity-20 rounded-xl transition-all duration-200 hover:shadow-lg w-full text-left"
                >
                  <svg className="w-5 h-5 text-red-300 group-hover:text-red-200 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  <span className="font-medium">Logout</span>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </aside>

      <div className="flex-1 flex flex-col">
        <header className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Admin Dashboard</h1>
              <p className="text-blue-100 text-sm mt-1">Manage and oversee NaTeSA operations</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm font-medium">{user?.name || user?.email}</p>
                <p className="text-xs text-blue-200 capitalize">{role}</p>
              </div>
              <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-md">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>
          </div>
        </header>
        <main className="flex-grow p-6 bg-gray-50">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;