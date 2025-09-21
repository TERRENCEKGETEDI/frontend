import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../state/AuthContext';

const PublicLayout = ({ children }) => {
  const { user, logout } = useAuthContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Header */}
      <nav className="bg-white shadow-lg border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary-color rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">N</span>
              </div>
              <span className="text-2xl font-bold text-primary-color">NaTeSA</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2">
              <Link to="/" className="nav-link text-gray-700 hover:text-primary-color font-medium">
                Home
              </Link>
              <Link to="/about" className="nav-link text-gray-700 hover:text-primary-color font-medium">
                About
              </Link>
              <Link to="/news" className="nav-link text-gray-700 hover:text-primary-color font-medium">
                News
              </Link>
              <Link to="/events" className="nav-link text-gray-700 hover:text-primary-color font-medium">
                Events
              </Link>
              <Link to="/resources" className="nav-link text-gray-700 hover:text-primary-color font-medium">
                Resources
              </Link>
              <div className="ml-4">
                <Link to="/membership/application" className="btn btn-primary">
                  Join Now
                </Link>
              </div>

              {user ? (
                <div className="flex items-center space-x-4 ml-4">
                  <span className="text-gray-700 text-sm">Welcome, <span className="font-medium">{user.name || user.email}</span></span>
                  <button onClick={handleLogout} className="btn btn-danger">
                    Logout
                  </button>
                </div>
              ) : (
                <div className="ml-4">
                  <Link to="/auth/login" className="btn btn-secondary">
                    Login
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-primary-color hover:bg-gray-100"
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
            <div className="md:hidden border-t border-gray-200 py-4 slide-in">
              <div className="flex flex-col space-y-2">
                <Link to="/" className="nav-link text-gray-700 hover:text-primary-color font-medium block" onClick={() => setIsMenuOpen(false)}>
                  Home
                </Link>
                <Link to="/about" className="nav-link text-gray-700 hover:text-primary-color font-medium block" onClick={() => setIsMenuOpen(false)}>
                  About
                </Link>
                <Link to="/news" className="nav-link text-gray-700 hover:text-primary-color font-medium block" onClick={() => setIsMenuOpen(false)}>
                  News
                </Link>
                <Link to="/events" className="nav-link text-gray-700 hover:text-primary-color font-medium block" onClick={() => setIsMenuOpen(false)}>
                  Events
                </Link>
                <Link to="/resources" className="nav-link text-gray-700 hover:text-primary-color font-medium block" onClick={() => setIsMenuOpen(false)}>
                  Resources
                </Link>
                <div className="pt-2">
                  <Link to="/membership/application" className="btn btn-primary w-full text-center block" onClick={() => setIsMenuOpen(false)}>
                    Join Now
                  </Link>
                </div>

                {user ? (
                  <div className="border-t border-gray-200 pt-4 space-y-4">
                    <span className="text-gray-700 block text-sm">Welcome, <span className="font-medium">{user.name || user.email}</span></span>
                    <button onClick={handleLogout} className="btn btn-danger w-full">
                      Logout
                    </button>
                  </div>
                ) : (
                  <div className="pt-2">
                    <Link to="/auth/login" className="btn btn-secondary w-full text-center block" onClick={() => setIsMenuOpen(false)}>
                      Login
                    </Link>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="footer text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-color to-accent-color rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">N</span>
                </div>
                <div>
                  <span className="text-2xl font-bold">NaTeSA</span>
                  <p className="text-sm text-gray-400">National Tertiary Students Association</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
                Empowering tertiary students with technology, innovation, and community building for a brighter future in tech.
              </p>
              <div className="flex space-x-3">
                <a href="#" className="footer-social">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="footer-social">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
                <a href="#" className="footer-social">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>

            <div className="footer-section">
              <h3>Quick Links</h3>
              <ul className="space-y-3">
                <li><Link to="/about" className="footer-link">About Us</Link></li>
                <li><Link to="/news" className="footer-link">News & Updates</Link></li>
                <li><Link to="/events" className="footer-link">Events</Link></li>
                <li><Link to="/resources" className="footer-link">Resources</Link></li>
                <li><Link to="/membership/application" className="footer-link">Join NaTeSA</Link></li>
              </ul>
            </div>

            <div className="footer-section">
              <h3>Contact Information</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-accent-color" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>info@natesa.org</span>
                </li>
                <li className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-accent-color" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+27 21 123 4567</span>
                </li>
                <li className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-accent-color" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>University Campus, South Africa</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="text-gray-400 text-sm">
              &copy; 2024 NaTeSA. All rights reserved. |
              <span className="text-accent-color font-medium"> Empowering the next generation of tech leaders</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PublicLayout;