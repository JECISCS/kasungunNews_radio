import React from 'react';
import "../Styles/RecentComments.css";

function RecentComments() {
  const comments = [
    { text: 'Great post!', author: 'John Doe' },
    { text: 'Very informative!', author: 'Jane Smith' },
    { text: 'Loved the insights.', author: 'Michael Johnson' },
    { text: 'Thanks for sharing.', author: 'Sarah Lee' },
    { text: 'Really helpful tips.', author: 'David Kim' },
    { text: 'Wonderful!', author: 'Emily Clark' }, // More than 5 to enable scrolling
  ];

  return (
    <div className="recent-comments">
      <h2>Recent Comments</h2>
      <div className="comments-container">
        {comments.map((comment, index) => (
          <div key={index} className="comment-item">
            <p>"{comment.text}"</p>
            <span>- {comment.author}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentComments;
