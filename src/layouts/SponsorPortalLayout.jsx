import React from 'react';
import { Link } from 'react-router-dom';

const SponsorPortalLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Sponsor Portal</h1>
          <nav>
            <Link to="/sponsors/form" className="mr-4 text-blue-600">Form</Link>
            <Link to="/sponsors/dashboard" className="text-blue-600">Dashboard</Link>
          </nav>
        </div>
      </header>
      <main className="container mx-auto p-4">
        {children}
      </main>
    </div>
  );
};

export default SponsorPortalLayout;