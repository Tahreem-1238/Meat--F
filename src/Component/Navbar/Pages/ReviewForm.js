import React, { useState } from 'react';
import './ReviewForm.css';

export default function ReviewForm({ serviceType }) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const review = {
      serviceType,
      userName: JSON.parse(localStorage.getItem('userData'))?.name || "Anonymous",
      rating,
      comment,
      date: new Date().toLocaleDateString(),
    };

    const existing = JSON.parse(localStorage.getItem('reviews')) || [];
    localStorage.setItem('reviews', JSON.stringify([...existing, review]));

    alert("🌟 Thank you for your feedback!");
    setRating(0);
    setComment('');
  };

  return (
    <div className="review-form-container">
      <h2 className="review-title">Share Your Feedback</h2>
      <form className="review-form" onSubmit={handleSubmit}>
        <label htmlFor="rating">Rate the Service</label>
        <select 
          id="rating"
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
          required
        >
          <option value="">--Select Rating--</option>
          {[1, 2, 3, 4, 5].map((r) => (
            <option key={r} value={r}>
              {r} Star{r > 1 && 's'}
            </option>
          ))}
        </select>

        <label htmlFor="comment">Your Review</label>
        <textarea
          id="comment"
          placeholder="Leave your honest review..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          rows="4"
          required
        ></textarea>

        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
}
