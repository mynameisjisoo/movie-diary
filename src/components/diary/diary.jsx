import React from 'react';
import { useState } from 'react/cjs/react.development';
import Review from '../review/review';
import ReviewAddForm from '../review_add_form/review_add_form';
import styles from './diary.module.css';

const Diary = ({ movie }) => {
  const [review, setReview] = useState();
  const handleAdd = review => {
    setReview(review);
  };
  return (
    <div className={styles.wrapper}>
      {movie && <ReviewAddForm movie={movie} handleAdd={handleAdd} />}
      {!movie && <div>아직 리뷰가 없어요</div>}
      {review && <Review review={review} />}
    </div>
  );
};

export default Diary;
