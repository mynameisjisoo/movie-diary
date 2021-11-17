import React from 'react';
import Review from '../review/review';
import styles from './review_list.module.css';

const ReviewList = ({ reviews, deleteReview }) => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Reviews</h1>
      <ul className={styles.reviews}>
        {Object.keys(reviews).map(key => (
          <Review key={key} review={reviews[key]} deleteReview={deleteReview} />
        ))}
      </ul>
    </section>
  );
};
export default ReviewList;
