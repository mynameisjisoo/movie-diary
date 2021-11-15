import React from 'react';
import styles from './review.module.css';

const Review = ({ movie }) => {
  const decode = require('unescape');
  const { title, subtitle, userRating, image, pubDate, director, actor } =
    movie;

  const style = {
    width: `${(userRating / 10) * 90}px`
  };

  return (
    <ul>
      <li className={styles.movie}>
        {
          <img
            className={styles.thumbnail}
            src={image || '/images/no-image.png'}
            alt='thumbnail'
          />
        }

        <div className={styles.description}>
          <span className={styles.title}>
            {decode(title.replace('<b>', '').replace('</b>', ''))}
          </span>
          <br />
          {subtitle && `(${decode(subtitle)})`}

          <div className={styles.starRatings}>
            <div className={styles.ratingBase}>
              <span>☆</span>
              <span>☆</span>
              <span>☆</span>
              <span>☆</span>
              <span>☆</span>
            </div>
            <div className={styles.ratingFill} style={style}>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>
            <span className={styles.rating}>{userRating}</span>
          </div>

          <div className={styles.content}>{pubDate}</div>
          <div className={styles.content}>{decode(director)}</div>
          <div className={styles.content}>{decode(actor)}</div>
        </div>
      </li>
    </ul>
  );
};

export default Review;
