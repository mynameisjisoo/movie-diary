import React from 'react';
import styles from './movie.module.css';

const Movie = ({ movie }) => {
  console.log(movie);

  const style = {
    width: `${(movie.userRating / 10) * 90}px`
  };

  return (
    <li className={styles.movie}>
      {
        <img
          className={styles.thumbnail}
          src={movie.image || '/images/no-image.png'}
          alt='thumbnail'
        />
      }

      <div className={styles.description}>
        <div className={styles.title}>
          {movie.title.replace('<b>', '').replace('</b>', '')}({movie.subtitle})
        </div>

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
          <span className={styles.rating}>{movie.userRating}</span>
        </div>

        <div className={styles.content}>{movie.pubDate}</div>
        <div className={styles.content}>{movie.director}</div>
        <div className={styles.content}>{movie.actor}</div>
      </div>
    </li>
  );
};
export default Movie;
