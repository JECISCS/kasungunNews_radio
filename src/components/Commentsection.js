import React, { useState } from 'react';
import "../Styles/RecentComments.css";

function CommentSection() {
  // Initial list of comments
  const [comments, setComments] = useState([
    { text: 'Great post!', author: 'John Doe' },
    { text: 'Very informative!', author: 'Jane Smith' },
    { text: 'Loved the insights.', author: 'Michael Johnson' },
    { text: 'Thanks for sharing.', author: 'Sarah Lee' },
    { text: 'Really helpful tips.', author: 'David Kim' },
    { text: 'Wonderful!', author: 'Emily Clark' },
  ]);

  // State to handle new comment input
  const [newComment, setNewComment] = useState('');
  const [newAuthor, setNewAuthor] = useState('');

  // Handle submitting a new comment
  const handleSubmit = (e) => {
    e.preventDefault();

    if (newComment && newAuthor) {
      const newCommentObj = { text: newComment, author: newAuthor };
      setComments([newCommentObj, ...comments]); // Add new comment to the top
      setNewComment('');
      setNewAuthor('');
    }
  };

  return (
    <div className="comment-section">
      <h2>Recent Comments</h2>
      <div className="comments-container">
        {comments.map((comment, index) => (
          <div key={index} className="comment-item">
            <p>"{comment.text}"</p>
            <span>- {comment.author}</span>
          </div>
        ))}
      </div>

      {/* Comment Input Form */}
      <form className="comment-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={newAuthor}
          onChange={(e) => setNewAuthor(e.target.value)}
          required
          className="input-author"
        />
        <textarea
          placeholder="Type your comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          required
          className="input-comment"
        />
        <button type="submit" className="submit-comment">Send Comment</button>
      </form>
    </div>
  );
}

export default CommentSection;
