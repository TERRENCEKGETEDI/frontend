import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../state/AuthContext';
import Modal from './Modal';
import logo from '../../assets/natesa.jpg';

const Header = () => {
  const { user, role, logout } = useAuthContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  const handleLogout = () => {
    logout();
    setIsMenuOpen(false);
    setIsProfileModalOpen(false);
  };

  const handleProfileClick = () => {
    setIsProfileModalOpen(true);
  };

  return (
    <>
      <nav className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 shadow-xl border-b border-blue-700 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 hover:opacity-90 transition-opacity">
              <img
                src={logo}
                alt="NaTeSA Logo"
                className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-lg"
              />
              <div className="text-white">
                <span className="text-2xl font-bold tracking-wide">NaTeSA</span>
                <p className="text-xs text-blue-200 font-medium">Nazareth Tertiary Students Association</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              <Link
                to="/"
                className="px-4 py-2 text-white hover:bg-white hover:bg-opacity-10 rounded-lg font-medium transition-all duration-200 hover:text-blue-100"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="px-4 py-2 text-white hover:bg-white hover:bg-opacity-10 rounded-lg font-medium transition-all duration-200 hover:text-blue-100"
              >
                About
              </Link>
              {user && (
                <>
                  <Link
                    to="/news"
                    className="px-4 py-2 text-white hover:bg-white hover:bg-opacity-10 rounded-lg font-medium transition-all duration-200 hover:text-blue-100"
                  >
                    News
                  </Link>
                  <Link
                    to="/events"
                    className="px-4 py-2 text-white hover:bg-white hover:bg-opacity-10 rounded-lg font-medium transition-all duration-200 hover:text-blue-100"
                  >
                    Events
                  </Link>
                  <Link
                    to="/resources"
                    className="px-4 py-2 text-white hover:bg-white hover:bg-opacity-10 rounded-lg font-medium transition-all duration-200 hover:text-blue-100"
                  >
                    Resources
                  </Link>
                </>
              )}
              <div className="ml-6">
                <Link
                  to="/membership/application"
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-blue-900 font-semibold px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Join Now
                </Link>
              </div>

              {user ? (
                <div className="flex items-center ml-6">
                  <button
                    onClick={handleProfileClick}
                    className="flex items-center space-x-3 bg-white bg-opacity-10 hover:bg-opacity-20 rounded-full px-4 py-2 transition-all duration-200 group relative z-50"
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-md">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div className="text-left hidden md:block">
                      <p className="text-white text-sm font-medium">
                        {user.name || 'User'}
                      </p>
                      <p className="text-blue-200 text-xs capitalize">
                        {role || 'Student'}
                      </p>
                    </div>
                  </button>
                </div>
              ) : (
                <div className="ml-6">
                  <Link
                    to="/auth/login"
                    className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white font-medium px-6 py-2 rounded-full border border-white border-opacity-30 hover:border-opacity-50 transition-all duration-200"
                  >
                    Login
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg text-white hover:bg-white hover:bg-opacity-10 transition-all duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden bg-blue-800 bg-opacity-95 backdrop-blur-sm border-t border-blue-700 py-4 slide-in">
              <div className="flex flex-col space-y-1 px-4">
                <Link
                  to="/"
                  className="px-4 py-3 text-white hover:bg-white hover:bg-opacity-10 rounded-lg font-medium transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="px-4 py-3 text-white hover:bg-white hover:bg-opacity-10 rounded-lg font-medium transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                {user && (
                  <>
                    <Link
                      to="/news"
                      className="px-4 py-3 text-white hover:bg-white hover:bg-opacity-10 rounded-lg font-medium transition-all duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      News
                    </Link>
                    <Link
                      to="/events"
                      className="px-4 py-3 text-white hover:bg-white hover:bg-opacity-10 rounded-lg font-medium transition-all duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Events
                    </Link>
                    <Link
                      to="/resources"
                      className="px-4 py-3 text-white hover:bg-white hover:bg-opacity-10 rounded-lg font-medium transition-all duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Resources
                    </Link>
                  </>
                )}
                <div className="pt-4">
                  <Link
                    to="/membership/application"
                    className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-blue-900 font-semibold w-full text-center block py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Join Now
                  </Link>
                </div>

                {user ? (
                  <div className="border-t border-blue-700 pt-4 mt-4">
                    <button
                      onClick={() => {
                        handleProfileClick();
                        setIsMenuOpen(false);
                      }}
                      className="flex items-center space-x-3 text-white hover:bg-white hover:bg-opacity-10 rounded-lg px-4 py-3 w-full text-left transition-all duration-200"
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-md">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-white text-sm font-medium">{user.name || 'User'}</p>
                        <p className="text-blue-200 text-xs capitalize">{role || 'Student'}</p>
                      </div>
                    </button>
                  </div>
                ) : (
                  <div className="pt-4">
                    <Link
                      to="/auth/login"
                      className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white font-medium w-full text-center block py-3 rounded-lg border border-white border-opacity-30 hover:border-opacity-50 transition-all duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Login
                    </Link>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Profile Modal */}
      <Modal
        isOpen={isProfileModalOpen}
        onClose={() => setIsProfileModalOpen(false)}
        title="User Profile"
      >
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900">{user?.name || 'User'}</h3>
              <p className="text-gray-600 font-medium">{user?.email}</p>
              <p className="text-sm text-blue-600 font-semibold capitalize mt-1">{role || 'Student'}</p>
            </div>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-2">Account Information</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Name:</span>
                <span className="font-medium">{user?.name || 'N/A'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Email:</span>
                <span className="font-medium">{user?.email || 'N/A'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Role:</span>
                <span className="font-medium capitalize">{role || 'Student'}</span>
              </div>
            </div>
          </div>
          <div className="flex space-x-3 pt-4">
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-2 rounded-lg transition-colors duration-200 flex-1"
            >
              Logout
            </button>
            <button
              onClick={() => setIsProfileModalOpen(false)}
              className="bg-gray-500 hover:bg-gray-600 text-white font-semibold px-6 py-2 rounded-lg transition-colors duration-200 flex-1"
            >
              Close
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Header;