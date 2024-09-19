import React from 'react';
import "../Styles/EditorsPick.css";

function EditorsPick() {
  const picks = [
    { title: 'Trending: Local Events', description: 'Check out what\'s happening in your area this weekend.', imgSrc: 'https://via.placeholder.com/150' },
    { title: 'Movie of the Week', description: 'Don\'t miss out on the latest action-packed blockbuster.', imgSrc: 'https://via.placeholder.com/150' },
    { title: 'Top Restaurant Picks', description: 'Discover the best places to dine this week.', imgSrc: 'https://via.placeholder.com/150' },
    { title: 'Special Promotion', description: 'Get 20% off your next purchase.', imgSrc: 'https://via.placeholder.com/150' },
    { title: 'Community Spotlight', description: 'Celebrating local heroes making a difference.', imgSrc: 'https://via.placeholder.com/150' }
  ];

  return (
    <div className="editors-pick-section">
      <h2>Editors' Pick</h2>
      <div className="pick-list">
        {picks.map((pick, index) => (
          <div key={index} className="pick-item">
            <img src={pick.imgSrc} alt={pick.title} className="pick-image" />
            <div className="pick-content">
              <h3>{pick.title}</h3>
              <p>{pick.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EditorsPick;
