import React, { useState, useRef } from 'react';
import "../Styles/Latestnews.css";

function LatestNews() {
  const news = [
    { date: 'May 4, 2024', title: 'New Boys in', imgSrc: 'https://via.placeholder.com/150' },
    { date: 'May 9, 2024', title: 'New Boys in', imgSrc: 'https://via.placeholder.com/150' },
    { date: 'May 11, 2024', title: 'New Boys in', imgSrc: 'https://via.placeholder.com/150' },
    { date: 'May 11, 2024', title: 'New Boys in', imgSrc: 'https://via.placeholder.com/150' },
    { date: 'May 11, 2024', title: 'New Boys in', imgSrc: 'https://via.placeholder.com/150' },
    { date: 'May 11, 2024', title: 'New Boys in', imgSrc: 'https://via.placeholder.com/150' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const newsContainerRef = useRef(null);

  // Handle scroll to specific index
  const handleDotClick = (index) => {
    const newsContainer = newsContainerRef.current;
    const newsItemWidth = newsContainer.scrollWidth / news.length;
    newsContainer.scrollTo({ left: index * newsItemWidth, behavior: 'smooth' });
    setCurrentIndex(index);
  };

  // Handle scrolling event to update index
  const handleScroll = () => {
    const newsContainer = newsContainerRef.current;
    const scrollPosition = newsContainer.scrollLeft;
    const scrollWidth = newsContainer.scrollWidth;
    const clientWidth = newsContainer.clientWidth;
    const newIndex = Math.round((scrollPosition / (scrollWidth - clientWidth)) * (news.length - 1));
    setCurrentIndex(newIndex);
  };

  return (
    <div className="latest-news">
      <h2 className="news-title">Latest News</h2>
      <div className="news-dots">
        {news.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
      <div className="news-container" ref={newsContainerRef} onScroll={handleScroll}>
        <div className="news-grid">
          {news.map((item, index) => (
            <div key={index} className="news-item">
              <img src={item.imgSrc} alt={item.title} className="news-image" />
              <p className="news-date">{item.date}</p>
              <h3 className="news-title">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LatestNews;
