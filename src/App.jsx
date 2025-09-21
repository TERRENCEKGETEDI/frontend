import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './state/AuthContext';
import PublicLayout from './layouts/PublicLayout';
import AdminLayout from './layouts/AdminLayout';
import SponsorPortalLayout from './layouts/SponsorPortalLayout';
import Home from './pages/Home';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import ApplicationForm from './pages/Membership/ApplicationForm';
import Status from './pages/Membership/Status';
import EventsList from './pages/Events/EventsList';
import EventDetails from './pages/Events/EventDetails';
import ResourcesList from './pages/Resources/ResourcesList';
import ResourceUpload from './pages/Resources/ResourceUpload';
import ResourceDetails from './pages/Resources/ResourceDetails';
import SponsorForm from './pages/Sponsors/SponsorForm';
import SponsorDashboard from './pages/Sponsors/SponsorDashboard';
import Dashboard from './pages/Admin/Dashboard';
import Members from './pages/Admin/Members';
import Events from './pages/Admin/Events';
import Resources from './pages/Admin/Resources';
import News from './pages/Admin/News';
import Sponsors from './pages/Admin/Sponsors';
import NotFound from './pages/NotFound';
import NewsList from './pages/News/NewsList';
import NewsDetails from './pages/News/NewsDetails';
import About from './pages/About';
import MasterAdminDashboard from './pages/MasterAdmin/MasterAdminDashboard';
import './App.css';

// Security considerations:
// - Implement role-based access control (RBAC)
// - Protect admin routes with authentication middleware
// - Use environment variables for sensitive data
// - Implement CSRF protection
// - Regular security audits and updates

// AI-powered features roadmap:
// - Personalized event recommendations based on user interests
// - Chatbot for student queries using NLP
// - Automated content tagging for resources
// - Predictive analytics for event attendance
// - AI-driven sponsor matching

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<PublicLayout><Home /></PublicLayout>} />
          <Route path="/auth/login" element={<PublicLayout><Login /></PublicLayout>} />
          <Route path="/auth/register" element={<PublicLayout><Register /></PublicLayout>} />
          <Route path="/membership/application" element={<PublicLayout><ApplicationForm /></PublicLayout>} />
          <Route path="/membership/status" element={<PublicLayout><Status /></PublicLayout>} />
          <Route path="/about" element={<PublicLayout><About /></PublicLayout>} />
          <Route path="/events" element={<PublicLayout><EventsList /></PublicLayout>} />
          <Route path="/events/:id" element={<PublicLayout><EventDetails /></PublicLayout>} />
          <Route path="/news" element={<PublicLayout><NewsList /></PublicLayout>} />
          <Route path="/news/:id" element={<PublicLayout><NewsDetails /></PublicLayout>} />
          <Route path="/resources" element={<PublicLayout><ResourcesList /></PublicLayout>} />
          <Route path="/resources/upload" element={<PublicLayout><ResourceUpload /></PublicLayout>} />
          <Route path="/resources/:id" element={<PublicLayout><ResourceDetails /></PublicLayout>} />
          <Route path="/sponsors/form" element={<SponsorPortalLayout><SponsorForm /></SponsorPortalLayout>} />
          <Route path="/sponsors/dashboard" element={<SponsorPortalLayout><SponsorDashboard /></SponsorPortalLayout>} />
          <Route path="/admin/dashboard" element={<AdminLayout><Dashboard /></AdminLayout>} />
          <Route path="/admin/members" element={<AdminLayout><Members /></AdminLayout>} />
          <Route path="/admin/events" element={<AdminLayout><Events /></AdminLayout>} />
          <Route path="/admin/news" element={<AdminLayout><News /></AdminLayout>} />
          <Route path="/admin/resources" element={<AdminLayout><Resources /></AdminLayout>} />
          <Route path="/admin/sponsors" element={<AdminLayout><Sponsors /></AdminLayout>} />
          <Route path="/master-admin/dashboard" element={<AdminLayout><MasterAdminDashboard /></AdminLayout>} />
          <Route path="*" element={<PublicLayout><NotFound /></PublicLayout>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
