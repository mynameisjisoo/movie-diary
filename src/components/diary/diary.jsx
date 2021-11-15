import React from 'react';
import Review from '../review/review';
import ReviewAddForm from '../review_add_form/review_add_form';
import styles from './diary.module.css';

const Diary = ({ movie }) => {
  return (
    <ul>
      {/* {movie && <Review movie={movie} />} */}
      {movie && <ReviewAddForm movie={movie} />}
      {!movie && <div>아직 리뷰가 없어요</div>}
    </ul>
  );
};

export default Diary;
