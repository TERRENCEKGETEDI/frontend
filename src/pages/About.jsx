import React, { useState, useEffect } from 'react';
import { mockLeadership } from '../data/mockData';

const About = () => {
  const [leadership, setLeadership] = useState([]);

  useEffect(() => {
    // Simulate fetching leadership data
    setLeadership(mockLeadership);
  }, []);

  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-color to-primary-dark text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About NaTeSA</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
            Dedicated to fostering a vibrant community of tech-savvy students across South Africa.
            We provide resources, networking opportunities, and professional development to prepare
            our members for successful careers in technology.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-primary-color mb-6">Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              To empower tertiary students with the knowledge, skills, and connections needed to thrive
              in the rapidly evolving technology landscape. We believe in inclusive education, innovation,
              and community building that transcends geographical boundaries.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-color rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Education</h3>
                <p className="text-gray-600">Providing quality educational resources and workshops</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent-color rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Community</h3>
                <p className="text-gray-600">Building strong networks and connections</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-success-color rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                <p className="text-gray-600">Fostering creativity and technological advancement</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary-color mb-4">Our Achievements</h2>
            <p className="text-lg text-gray-600">Milestones that define our journey</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="card text-center">
              <div className="w-20 h-20 bg-primary-color rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-primary-color mb-2">150+</h3>
              <p className="text-gray-600 font-medium">Active Members</p>
              <p className="text-sm text-gray-500 mt-2">Growing community across South Africa</p>
            </div>
            <div className="card text-center">
              <div className="w-20 h-20 bg-accent-color rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-primary-color mb-2">50+</h3>
              <p className="text-gray-600 font-medium">Events Hosted</p>
              <p className="text-sm text-gray-500 mt-2">Workshops, hackathons, and networking events</p>
            </div>
            <div className="card text-center">
              <div className="w-20 h-20 bg-success-color rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-primary-color mb-2">20+</h3>
              <p className="text-gray-600 font-medium">Partner Organizations</p>
              <p className="text-sm text-gray-500 mt-2">Industry collaborations and sponsorships</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary-color mb-4">Leadership Team</h2>
            <p className="text-lg text-gray-600">Meet the dedicated individuals driving NaTeSA forward</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {leadership.map((member, index) => (
              <div key={member.id} className="card text-center slide-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-24 h-24 bg-gradient-to-br from-primary-color to-accent-color rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-primary-color mb-1">{member.name}</h3>
                <p className="text-accent-color font-semibold mb-2">{member.position}</p>
                <p className="text-gray-600 mb-3">{member.branch}</p>
                <p className="text-sm text-gray-700 mb-4">{member.bio}</p>
                <a href={`mailto:${member.email}`} className="text-accent-color hover:text-primary-color text-sm font-medium transition-colors">
                  {member.email}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary-color mb-4">Photo Gallery</h2>
            <p className="text-lg text-gray-600">Capturing moments from our journey</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="card overflow-hidden group cursor-pointer">
              <div className="h-64 bg-gradient-to-br from-primary-color to-primary-light flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <div className="text-center text-white">
                  <svg className="w-16 h-16 mx-auto mb-4 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="font-medium">Tech Workshop 2024</p>
                </div>
              </div>
            </div>
            <div className="card overflow-hidden group cursor-pointer">
              <div className="h-64 bg-gradient-to-br from-accent-color to-primary-color flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <div className="text-center text-white">
                  <svg className="w-16 h-16 mx-auto mb-4 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <p className="font-medium">Networking Event</p>
                </div>
              </div>
            </div>
            <div className="card overflow-hidden group cursor-pointer">
              <div className="h-64 bg-gradient-to-br from-success-color to-accent-color flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <div className="text-center text-white">
                  <svg className="w-16 h-16 mx-auto mb-4 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  <p className="font-medium">Hackathon Winners</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;