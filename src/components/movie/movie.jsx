import React from 'react';
import styles from './movie.module.css';

const Movie = ({ movie }) => {
  console.log(movie);
  const ratingToPercent = () => {
    const score = movie.userRating * 10;
    return score;
  };

  const styles = {
    width: ratingToPercent
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
          <div className={styles.ratingFill} style={styles}>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
          </div>
          <div className={styles.ratingBase}>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
          </div>
        </div>

        {/* <div className={styles.ratingBar}>
          <div className={styles.ratingValue}>
            <div className={styles.rating}>{movie.userRating} / 10</div>
          </div>
        </div> */}
        <div className={styles.content}>{movie.pubDate}</div>
        <div className={styles.content}>{movie.director}</div>
        <div className={styles.content}>{movie.actor}</div>
      </div>
    </li>
  );
};
export default Movie;
