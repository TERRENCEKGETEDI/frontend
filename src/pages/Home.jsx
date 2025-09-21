import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import EventCard from '../components/cards/EventCard';
import NewsCard from '../components/cards/NewsCard';
import { getEvents } from '../services/eventService';
import { getNews } from '../services/newsService';

const Home = () => {
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [latestNews, setLatestNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [eventsData, newsData] = await Promise.all([
          getEvents(),
          getNews()
        ]);
        setUpcomingEvents(eventsData.slice(0, 2));
        setLatestNews(newsData.slice(0, 2));
      } catch (error) {
        console.error('Error fetching data:', error);
        // Set some fallback data to prevent infinite loading
        setUpcomingEvents([]);
        setLatestNews([]);
      } finally {
        setLoading(false);
      }
    };

    // Add a timeout to prevent infinite loading
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 5000);

    fetchData();

    return () => clearTimeout(timeout);
  }, []);

  const handleRSVP = (id) => {
    alert(`RSVP for event ${id}`);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="loading w-12 h-12 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading NaTeSA...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-br from-primary-color to-primary-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-pulse">
            Welcome to <span className="text-accent-color">NaTeSA</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Empowering tertiary students with technology, innovation, and community building for a brighter future in tech.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/membership/application" className="btn btn-primary btn-lg">
              Join Our Community
            </Link>
            <Link to="/about" className="btn btn-secondary btn-lg">
              Learn More
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>

      {/* Latest News Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary-color mb-4">Latest News</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Stay updated with the latest announcements, achievements, and opportunities from NaTeSA.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {latestNews.map((news, index) => (
              <div key={news.id} style={{ animationDelay: `${index * 0.1}s` }} className="slide-in">
                <NewsCard news={news} />
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/news" className="btn btn-primary">
              View All News
            </Link>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary-color mb-4">Upcoming Events</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join us for exciting workshops, networking events, and learning opportunities.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {upcomingEvents.map((event, index) => (
              <div key={event.id} style={{ animationDelay: `${index * 0.1}s` }} className="slide-in">
                <EventCard event={event} onRSVP={handleRSVP} />
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/events" className="btn btn-primary">
              View All Events
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-primary-color text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Tech Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of students who are building their future in technology with NaTeSA.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/membership/application" className="btn btn-success btn-lg">
              Become a Member
            </Link>
            <Link to="/resources" className="btn btn-secondary btn-lg">
              Explore Resources
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;