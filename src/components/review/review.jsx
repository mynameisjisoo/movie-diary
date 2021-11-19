import React, { memo } from 'react';
import styles from './review.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faQuoteLeft,
  faQuoteRight,
  faTrashAlt
} from '@fortawesome/free-solid-svg-icons';

const Review = memo(({ review, deleteReview }) => {
  const { title, subtitle, image, comment, rating } = review;

  const style = {
    width: `${(rating / 10) * 75}px`
  };

  const onDelete = () => {
    deleteReview(review);
  };
  return (
    <div className={styles.review}>
      <img
        className={styles.thumbnail}
        src={image || '/images/no-image.png'}
        alt='thumbnail'
      />
      <div className={styles.contents}>
        <div className={styles.title}>{title}</div>
        <div>
          <b>{subtitle}</b>
        </div>
        <div className={styles.comment}>
          <FontAwesomeIcon icon={faQuoteLeft} className={styles.iconL} />
          {comment}
          <FontAwesomeIcon icon={faQuoteRight} className={styles.iconR} />
        </div>
        <div className={styles.rating}>
          <div>The score I gave is {rating}</div>
          <div className={styles.starRatings}>
            <div className={styles.ratingBase}>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>
            <div className={styles.ratingFill} style={style}>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>
          </div>
        </div>
      </div>

      <button className={styles.button} onClick={onDelete}>
        <FontAwesomeIcon icon={faTrashAlt} />
      </button>
    </div>
  );
});

export default Review;
