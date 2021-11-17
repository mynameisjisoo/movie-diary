import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef } from 'react';
import styles from './review_add_form.module.css';

const ReviewAddForm = ({ movie, createReview }) => {
  const decode = require('unescape');
  const { title, subtitle, image, director } = movie;
  const commentRef = useRef();
  const ratingRef = useRef();
  const formRef = useRef();

  const decodeAndReplace = string => {
    const result = decode(string.replace('<b>', '').replace('</b>', ''));
    return result;
  };

  const onCreate = event => {
    event.preventDefault();
    const review = {
      id: Date.now(),
      title,
      subtitle,
      image,
      director,
      comment: commentRef.current.value,
      rating: ratingRef.current.value
    };
    createReview(review);
    formRef.current.reset();
  };

  return (
    <form className={styles.form} ref={formRef}>
      <img
        className={styles.thumbnail}
        src={image || '/images/no-image.png'}
        alt='thumbnail'
      />

      <div className={styles.container}>
        <div className={styles.description}>
          <div className={styles.title}>{decodeAndReplace(title)}</div>
          <div>
            <b>{subtitle && `${decodeAndReplace(subtitle)}`}</b>
          </div>
        </div>
        <div className={styles.review}>
          <textarea
            ref={commentRef}
            className={styles.comment}
            name='comment'
            cols='30'
            rows='10'
            placeholder='What do you think about this movie?'
          ></textarea>
          <div>
            <span>
              <b> My rating is </b>
            </span>
            <input
              ref={ratingRef}
              className={styles.rating}
              type='number'
              name='rating'
              placeholder='Rating'
              min='0'
              max='10'
            />
          </div>
          <button className={styles.button} onClick={onCreate}>
            <FontAwesomeIcon icon={faPencilAlt} />
            Create
          </button>
        </div>
      </div>
    </form>
  );
};
export default ReviewAddForm;
