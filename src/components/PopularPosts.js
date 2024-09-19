import React from 'react';
import "../Styles/PopularPosts.css";
import RecentComments from './RecentComments';
import AboutUs from './AboutUs';

function PopularPosts() {
  const posts = [
    { title: 'Top 5 Tips for Success', imgSrc: 'https://via.placeholder.com/100' },
    { title: 'How to Grow Your Business', imgSrc: 'https://via.placeholder.com/100' },
    { title: 'Latest Tech Trends', imgSrc: 'https://via.placeholder.com/100' },
    { title: 'Health and Wellness Tips', imgSrc: 'https://via.placeholder.com/100' },
  ];

  return (
    <aside className="popular-posts">
      <h2>Popular Posts</h2>
      <ul>
        {posts.map((post, index) => (
          <li key={index} className="popular-post-item">
            <img src={post.imgSrc} alt={post.title} className="popular-post-image" />
            <span>{post.title}</span>
          </li>
        ))}
      </ul>

      <RecentComments /> {/* Include Recent Comments Section */}
      <AboutUs /> {/* Include About Us Section */}
      <orsPick/>
    </aside>
  );
}

export default PopularPosts;
