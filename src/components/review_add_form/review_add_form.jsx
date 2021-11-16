import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef } from 'react';
import styles from './review_add_form.module.css';

const ReviewAddForm = ({ movie, handleAdd }) => {
  const decode = require('unescape');
  const { title, subtitle, userRating, image, pubDate, director, actor } =
    movie;
  const commentRef = useRef();
  const ratingRef = useRef();

  const onAdd = event => {
    event.preventDefault();
    console.log(commentRef.current.value);
    console.log(ratingRef.current.value);
    handleAdd({
      title,
      subtitle,
      image,
      director,
      comment: commentRef.current.value,
      rating: ratingRef.current.value
    });
  };

  return (
    <form className={styles.form}>
      <img
        className={styles.thumbnail}
        src={image || '/images/no-image.png'}
        alt='thumbnail'
      />

      <div className={styles.container}>
        <div className={styles.description}>
          <div className={styles.title}>
            {decode(title.replace('<b>', '').replace('</b>', ''))}
            {subtitle && ` (${decode(subtitle)})`}
          </div>
          <div className={styles.content}>{decode(director)}</div>
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
          <span> My rating is </span>
          <input
            ref={ratingRef}
            className={styles.rating}
            type='number'
            name='rating'
            placeholder='Rating'
            min='0'
            max='10'
          />
          <button className={styles.button} onClick={onAdd}>
            <FontAwesomeIcon icon={faPencilAlt} />
            Add
          </button>
        </div>
      </div>
    </form>
  );
};
export default ReviewAddForm;
