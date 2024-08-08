/* eslint-disable no-unused-vars */
// ReviewSection.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './Review.css'
// import calculateAvgRating from './avgRating';

const Review = () => {
  const [reviewName, setReviewName] = useState('');
  const [reviewText, setReviewText] = useState('');
  const [tourRating, setTourRating] = useState(null);
  // const { totalRating, avgRating } = calculateAvgRating(reviews);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      Name: reviewName,
      Review: reviewText,
    };

    try {
      const response = await axios.post('https://sheet.best/api/sheets/ae074a3b-be48-4d10-a283-fa624ef55c86', data);
      console.log('Review sent to Google Sheets:', response);

      // Clear review input fields after successful submission
      setReviewName('');
      setReviewText('');
    } catch (error) {
      console.error('Error sending review to Google Sheets:', error);
      // Handle errors appropriately (e.g., display error message)
    }
  };

  return (
    <div className="tour_reviews mt-4">
      <h5>Reviews (review)</h5>

      <form onSubmit={handleSubmit}>
      <div className="d-flex align-items-center gap-3 mb-4 rating_group">
                      <span onClick={() => setTourRating(1)}>
                        1 <FontAwesomeIcon icon={faStar} />
                      </span>
                      <span onClick={() => setTourRating(2)}>
                        2 <FontAwesomeIcon icon={faStar} />
                      </span>
                      <span onClick={() => setTourRating(3)}>
                        3 <FontAwesomeIcon icon={faStar} />
                      </span>
                      <span onClick={() => setTourRating(4)}>
                        4 <FontAwesomeIcon icon={faStar} />
                      </span>
                      <span onClick={() => setTourRating(5)}>
                        5 <FontAwesomeIcon icon={faStar} />
                      </span>
                    </div>
        <div className="review_input">
        <input 
          type="text" 
          placeholder="Your Name"
          value={reviewName}
          onChange={(e) => setReviewName(e.target.value)}
          required
        />
        <textarea 
          className='txt1'
          placeholder="Share your thoughts" 
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          required
        />
        <button type="submit" className="btn bg-primary text-black">
          Submit
        </button>
        </div>
      </form>
    </div>
  );
};

export default Review;
