import React, { memo } from 'react';
import styles from './movie.module.css';

const Movie = memo(({ movie, addReviewForm }) => {
  const { title, subtitle, userRating, image, pubDate, director, actor, link } =
    movie;

  const style = {
    width: `${(userRating / 10) * 90}px`
  };

  const onReviewClick = () => {
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
          <div className={styles.title}>{title}</div>
          <div className={styles.subTitle}>{subtitle}</div>
          {pubDate}

          <div className={styles.rating}>
            <div className={styles.starRatings}>
              <div className={styles.ratingBase}>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
              <div className={styles.ratingFill} style={style}>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
            </div>
            <span className={styles.userRating}>평균 {userRating}점</span>
          </div>

          <div>감독: {director}</div>
          <div>배우: {actor}</div>
        </div>

        <div className={styles.buttons}>
          <button className={styles.button}>
            <a
              className={styles.detail}
              href={link}
              target='_blank'
              rel='noopener noreferrer'
            >
              Detail
            </a>
          </button>
          <button className={styles.button} onClick={onReviewClick}>
            Review
          </button>
        </div>
      </section>
    </li>
  );
});
export default Movie;
