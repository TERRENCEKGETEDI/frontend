import React from 'react';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
  return (
    <div className="card fade-in">
      <div className="mb-4">
        <h3 className="text-xl font-bold text-primary-color mb-3 hover:text-accent-color transition-colors">
          {news.title}
        </h3>
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {news.date}
          </span>
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            {news.author}
          </span>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          {news.content.substring(0, 150)}...
        </p>
      </div>
      <Link
        to={`/news/${news.id}`}
        className="inline-flex items-center gap-2 text-accent-color hover:text-primary-color font-medium transition-colors group"
      >
        Read More
        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  );
};

export default NewsCard;