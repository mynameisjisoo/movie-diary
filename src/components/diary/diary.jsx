import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import ReviewAddForm from '../review_add_form/review_add_form';
import ReviewList from '../review_list/review_list';
import styles from './diary.module.css';

const Diary = ({ movie, repository, userId }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (!userId) {
      return;
    }
    const stopSync = repository.syncReview(userId, reviews => {
      setReviews(reviews);
    });
    return () => stopSync();
  }, [userId, repository]);

  const createReview = review => {
    setReviews(reviews => {
      const updated = { ...reviews };
      updated[review.id] = review;
      return updated;
    });
    repository.saveReview(userId, review);
  };

  const deleteReview = review => {
    setReviews(reviews => {
      const updated = { ...reviews };
      delete updated[review.id];
      return updated;
    });
    repository.removeReview(userId, review);
  };
  return (
    <div className={styles.diary}>
      {!movie && (
        <h1 className={styles.empty}>영화를 검색하고 리뷰를 남겨보세요🤷‍♀️</h1>
      )}
      {movie && <ReviewAddForm movie={movie} createReview={createReview} />}
      <div className={styles.reviewArea}>
        {Object.keys(reviews).length === 0 && (
          <h1 className={styles.empty}>아직 작성한 리뷰가 없어요🤷‍♀️</h1>
        )}
        {Object.keys(reviews).length > 0 && (
          <ReviewList reviews={reviews} deleteReview={deleteReview} />
        )}
      </div>
    </div>
  );
};

export default Diary;
