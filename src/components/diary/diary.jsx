import React, { memo, useCallback, useEffect, useState } from 'react';
import ReviewAddForm from '../review_add_form/review_add_form';
import ReviewList from '../review_list/review_list';
import styles from './diary.module.css';

const Diary = memo(({ movie, repository, userId }) => {
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

  const createReview = useCallback(
    review => {
      setReviews(reviews => {
        const updated = { ...reviews };
        updated[review.id] = review;
        return updated;
      });
      repository.saveReview(userId, review);
    },
    [userId, repository]
  );

  const deleteReview = useCallback(
    review => {
      setReviews(reviews => {
        const updated = { ...reviews };
        delete updated[review.id];
        return updated;
      });
      repository.removeReview(userId, review);
    },
    [userId, repository]
  );

  const numberOfReview = () => {
    return Object.keys(reviews).length;
  };

  return (
    <div className={styles.diary}>
      {!movie && (
        <h1 className={styles.empty}>영화를 검색하고 리뷰를 남겨보세요🤷‍♀️</h1>
      )}
      {movie && <ReviewAddForm movie={movie} createReview={createReview} />}
      <div className={styles.reviewArea}>
        {numberOfReview() === 0 && (
          <h1 className={styles.empty}>아직 작성한 리뷰가 없어요🤷‍♀️</h1>
        )}
        {numberOfReview() > 0 && (
          <ReviewList reviews={reviews} deleteReview={deleteReview} />
        )}
      </div>
    </div>
  );
});

export default Diary;
