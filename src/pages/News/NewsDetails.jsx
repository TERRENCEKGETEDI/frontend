import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getNews } from '../../services/newsService';

const NewsDetails = () => {
  const { id } = useParams();
  const [newsItem, setNewsItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNewsItem = async () => {
      try {
        const newsData = await getNews();
        const item = newsData.find(n => n.id === parseInt(id));
        setNewsItem(item);
      } catch (error) {
        console.error('Error fetching news item:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchNewsItem();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!newsItem) return <div>News not found</div>;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">{newsItem.title}</h1>
      <p className="text-sm text-gray-600 mb-4">{newsItem.date} by {newsItem.author}</p>
      <p className="text-lg">{newsItem.content}</p>
    </div>
  );
};

export default NewsDetails;