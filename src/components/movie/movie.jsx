import React from 'react';
import styles from './movie.module.css';

const Movie = ({ movie, addReviewForm }) => {
  const { title, subtitle, userRating, image, pubDate, director, actor, link } =
    movie;

  const decode = require('unescape');
  const decodeAndReplace = string => {
    const result = decode(string.replace('<b>', '').replace('</b>', ''));
    return result;
  };

  const style = {
    width: `${(userRating / 10) * 90}px`
  };

  const onReviewClicked = () => {
    addReviewForm(movie);
  };

  return (
    <li className={styles.movie}>
      {
        <img
          className={styles.thumbnail}
          src={image || '/images/no-image.png'}
          alt='thumbnail'
        />
      }
      <section className={styles.content}>
        <div className={styles.description}>
          <div className={styles.title}>{decodeAndReplace(title)}</div>
          <div className={styles.subTitle}>
            {subtitle && `${decodeAndReplace(subtitle)}`}
          </div>

          {pubDate}

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
            <span className={styles.rating}>평균 {userRating}점</span>
          </div>

          <div>감독: {decode(director)}</div>
          <div>배우: {decode(actor)}</div>
        </div>

        <div className={styles.buttons}>
          <button className={styles.button}>
            <a className={styles.detail} href={link} target='_blank'>
              Detail
            </a>
          </button>
          <button className={styles.button} onClick={onReviewClicked}>
            Review
          </button>
        </div>
      </section>
    </li>
  );
};
export default Movie;
