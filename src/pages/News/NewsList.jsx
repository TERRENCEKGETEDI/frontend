import React, { useState, useEffect } from 'react';
import NewsCard from '../../components/cards/NewsCard';
import { getNews } from '../../services/newsService';

const NewsList = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const newsData = await getNews();
        setNews(newsData);
      } catch (error) {
        console.error('Error fetching news:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">News Feed</h1>
      <div className="space-y-4">
        {news.map(item => (
          <NewsCard key={item.id} news={item} />
        ))}
      </div>
    </div>
  );
};

export default NewsList;