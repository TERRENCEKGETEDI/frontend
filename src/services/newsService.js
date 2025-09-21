// News service functions
import { mockNews } from '../data/mockData';

export const getNews = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockNews);
    }, 500);
  });
};

export const createNews = async (newsData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newNews = {
        ...newsData,
        id: mockNews.length + 1,
        date: new Date().toISOString().split('T')[0],
      };
      mockNews.push(newNews);
      resolve(newNews);
    }, 500);
  });
};

export const updateNews = async (id, newsData) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const index = mockNews.findIndex(news => news.id === id);
      if (index !== -1) {
        mockNews[index] = { ...mockNews[index], ...newsData };
        resolve(mockNews[index]);
      } else {
        reject(new Error('News not found'));
      }
    }, 500);
  });
};

export const deleteNews = async (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const index = mockNews.findIndex(news => news.id === id);
      if (index !== -1) {
        mockNews.splice(index, 1);
        resolve();
      } else {
        reject(new Error('News not found'));
      }
    }, 500);
  });
};