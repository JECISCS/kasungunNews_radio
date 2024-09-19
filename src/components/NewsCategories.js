import React, { useState } from 'react';
import "../Styles/NewsCategories.css";
import EditorsPick from '../components/components/EdditorsPick'

function NewsCategories() {
  const categories = {
    business: [
      { date: 'May 1, 2024', title: 'Business News 1', imgSrc: 'https://via.placeholder.com/300' },
      { date: 'May 2, 2024', title: 'Business News 2', imgSrc: 'https://via.placeholder.com/300' },
    ],
    sports: [
      { date: 'May 3, 2024', title: 'Sports News 1', imgSrc: 'https://via.placeholder.com/300' },
      { date: 'May 4, 2024', title: 'Sports News 2', imgSrc: 'https://via.placeholder.com/300' },
    ],
    nationwide: [
      { date: 'May 5, 2024', title: 'Nationwide News 1', imgSrc: 'https://via.placeholder.com/300' },
      { date: 'May 6, 2024', title: 'Nationwide News 2', imgSrc: 'https://via.placeholder.com/300' },
    ],
    entertainment: [
      { date: 'May 7, 2024', title: 'Entertainment News 1', imgSrc: 'https://via.placeholder.com/300' },
      { date: 'May 8, 2024', title: 'Entertainment News 2', imgSrc: 'https://via.placeholder.com/300' },
    ],
  };

  const [activeCategory, setActiveCategory] = useState('business');

  return (
    <div className="news-categories">
      <h2 className="category-heading">Categories</h2>
      {/* Tab Navigation */}
      <div className="category-tabs">
        {Object.keys(categories).map((category) => (
          <button
            key={category}
            className={`tab-button ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* News Content */}
      <div className="category-news">
        {categories[activeCategory].map((item, index) => (
          <div key={index} className="news-item">
            <img src={item.imgSrc} alt={item.title} className="news-image" />
            <div className="news-details">
              <p className="news-date">{item.date}</p>
              <h3 className="news-title">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Editors' Pick Section <EditorsPick /> */}
      <EditorsPick />
     
    </div>
  );
}

export default NewsCategories;
