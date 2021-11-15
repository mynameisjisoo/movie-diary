import React from 'react';
import Button from '../button/button';
import styles from './review_add_form.module.css';

const ReviewAddForm = ({ movie }) => {
  const decode = require('unescape');
  const { title, subtitle, userRating, image, pubDate, director, actor } =
    movie;

  const onSubmit = event => {
    event.preventDefault();
    console.log('button');
  };

  return (
    <form action='' className={styles.form}>
      {
        <img
          className={styles.thumbnail}
          src={image || '/images/no-image.png'}
          alt='thumbnail'
        />
      }

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
            className={styles.comment}
            name='comment'
            cols='30'
            rows='10'
            placeholder='What do you think about this movie?'
          ></textarea>
          <span> My rating is </span>
          <input
            className={styles.rating}
            type='number'
            name='rating'
            placeholder='Rating'
            min='0'
            max='10'
          />
          <Button name={'Add'} onClick={onSubmit} />
        </div>
      </div>
    </form>
  );
};
export default ReviewAddForm;
