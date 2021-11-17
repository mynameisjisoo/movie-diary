import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import ReviewAddForm from '../review_add_form/review_add_form';
import ReviewList from '../review_list/review_list';
import styles from './diary.module.css';

const Diary = ({ movie, repository, userId }) => {
  const [reviews, setReviews] = useState();

  useEffect(() => {
    console.log(reviews);
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
    <div className={styles.wrapper}>
      {movie && <ReviewAddForm movie={movie} createReview={createReview} />}
      {/* {!movie && <div>아직 리뷰가 없어요</div>} */}
      {reviews && <ReviewList reviews={reviews} deleteReview={deleteReview} />}
    </div>
  );
};

export default Diary;
