import { faUserEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { memo } from 'react';
import Review from '../review/review';
import styles from './review_list.module.css';

const ReviewList = memo(({ reviews, deleteReview }) => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>
        <FontAwesomeIcon icon={faUserEdit} className={styles.icon} />
        My reviews
      </h1>
      <ul className={styles.reviews}>
        {Object.keys(reviews).map(key => (
          <Review key={key} review={reviews[key]} deleteReview={deleteReview} />
        ))}
      </ul>
    </section>
  );
});
export default ReviewList;
