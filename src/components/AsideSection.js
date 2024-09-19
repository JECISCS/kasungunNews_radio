import React from 'react';
import LatestNews from './LatestNews';
import NewsCategories from './NewsCategories';
import PopularPosts from './PopularPosts';
import "../Styles/AsideSection.css";

function AsideSection() {
  return (
    <div className="main-content">
      {/* Latest News Section */}
      <section className="latest-news-section">
        <LatestNews />
        <NewsCategories />
      </section>

      {/* Popular Posts Section */}
      <PopularPosts />
     
    </div>
  );
}

export default AsideSection;
