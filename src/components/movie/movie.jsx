import React from 'react';
import styles from './movie.module.css';

const Movie = ({ movie, handleClick }) => {
  const decode = require('unescape');
  const { title, subtitle, userRating, image, pubDate, director, actor } =
    movie;

  const onClick = () => {
    handleClick(movie);
  };

  const style = {
    width: `${(userRating / 10) * 90}px`
  };

  return (
    <li className={styles.movie} onClick={onClick}>
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
  );
};
export default Movie;
